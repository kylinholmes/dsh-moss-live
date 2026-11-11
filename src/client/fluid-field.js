// Coarse 3-D MAC (staggered) incompressible flow with inertial aerosol tracers.
// Semi-Lagrangian velocity advection, explicit viscosity, and a Neumann Poisson
// pressure projection. Units: metres / seconds in the local 3.4 m demo domain.
// This is a bounded visual approximation, not a free-surface liquid solver.
const bounded = (value, low, high, fallback) => Number.isFinite(value) ? Math.min(high, Math.max(low, value)) : fallback

export function createFluidField(options = {}) {
  const n = Math.round(bounded(options.resolution, 6, 24, 14)), s = n + 1, size = s ** 3
  const domain = 3.4, h = domain / n, half = domain / 2, radius = .92
  const iterations = Math.round(bounded(options.pressureIterations, 8, 200, 38)), fixed = 1 / 60
  const background = bounded(options.background, 0, 1, .16)
  let u = [new Float32Array(size), new Float32Array(size), new Float32Array(size)]
  let next = [new Float32Array(size), new Float32Array(size), new Float32Array(size)]
  let pressure = new Float32Array(size), pressureNext = new Float32Array(size), divergence = new Float32Array(size)
  let solid = new Uint8Array(size), active = [], faces = [[], [], []], masks = [new Uint8Array(size), new Uint8Array(size), new Uint8Array(size)]
  let positions = new Float32Array(0), previous = new Float32Array(0), speeds = new Float32Array(0), homes = new Float32Array(0)
  let disposed = false, accumulated = 0, time = 0, projectionBefore = 0, projectionAfter = 0, contacts = 0, surfaceRadius = null
  let seed = (options.seed ?? 179) >>> 0
  const random = () => { seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0; return seed / 4294967296 }
  const index = (x, y, z) => x + s * (y + s * z)
  const fluid = (x, y, z) => x >= 0 && y >= 0 && z >= 0 && x < n && y < n && z < n && !solid[index(x, y, z)]
  for (let z = 0; z < n; z++) for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) {
    const i = index(x, y, z), px = (x + .5) * h - half, py = (y + .5) * h - half, pz = (z + .5) * h - half
    solid[i] = Math.hypot(px, py, pz) < radius ? 1 : 0
    if (!solid[i]) active.push([i, x, y, z])
  }
  for (let axis = 0; axis < 3; axis++) for (let z = 0; z < n + (axis === 2 ? 1 : 0); z++) for (let y = 0; y < n + (axis === 1 ? 1 : 0); y++) for (let x = 0; x < n + (axis === 0 ? 1 : 0); x++) {
    if (!fluid(x, y, z) || !fluid(x - (axis === 0 ? 1 : 0), y - (axis === 1 ? 1 : 0), z - (axis === 2 ? 1 : 0))) continue
    const i = index(x, y, z)
    masks[axis][i] = 1
    faces[axis].push([i, x, y, z, (x + (axis === 0 ? 0 : .5)) * h - half, (y + (axis === 1 ? 0 : .5)) * h - half, (z + (axis === 2 ? 0 : .5)) * h - half])
  }
  let links = active.map(([, x, y, z]) => [[x - 1, y, z], [x + 1, y, z], [x, y - 1, z], [x, y + 1, z], [x, y, z - 1], [x, y, z + 1]].filter(([a, b, c]) => fluid(a, b, c)).map(([a, b, c]) => index(a, b, c)))

  function scalar(array, axis, px, py, pz) {
    const gx = bounded((px + half) / h - (axis === 0 ? 0 : .5), 0, n - .00001, 0)
    const gy = bounded((py + half) / h - (axis === 1 ? 0 : .5), 0, n - .00001, 0)
    const gz = bounded((pz + half) / h - (axis === 2 ? 0 : .5), 0, n - .00001, 0)
    const x = Math.floor(gx), y = Math.floor(gy), z = Math.floor(gz), fx = gx - x, fy = gy - y, fz = gz - z
    const i = index(x, y, z), sy = s, sz = s * s
    const a = array[i] * (1 - fx) + array[i + 1] * fx
    const b = array[i + sy] * (1 - fx) + array[i + sy + 1] * fx
    const c = array[i + sz] * (1 - fx) + array[i + sz + 1] * fx
    const d = array[i + sz + sy] * (1 - fx) + array[i + sz + sy + 1] * fx
    return ((a * (1 - fy) + b * fy) * (1 - fz) + (c * (1 - fy) + d * fy) * fz)
  }
  function divergenceRMS() {
    if (disposed) return 0
    let sum = 0
    for (const [i] of active) {
      const value = (u[0][i + 1] - u[0][i] + u[1][i + s] - u[1][i] + u[2][i + s * s] - u[2][i]) / h
      divergence[i] = value; sum += value * value
    }
    return Math.sqrt(sum / active.length)
  }
  function project() {
    if (disposed) return
    projectionBefore = divergenceRMS()
    pressure.fill(0); pressureNext.fill(0)
    for (let pass = 0; pass < iterations; pass++) {
      for (let cell = 0; cell < active.length; cell++) {
        const i = active[cell][0], neighbours = links[cell]
        let sum = 0
        for (let j = 0; j < neighbours.length; j++) sum += pressure[neighbours[j]]
        pressureNext[i] = neighbours.length ? (sum - h * h * divergence[i]) / neighbours.length : 0
      }
      const swap = pressure; pressure = pressureNext; pressureNext = swap
    }
    const strides = [1, s, s * s]
    for (let axis = 0; axis < 3; axis++) for (const [i] of faces[axis]) u[axis][i] -= (pressure[i] - pressure[i - strides[axis]]) / h
    projectionAfter = divergenceRMS()
  }
  function setParticleCount(requested) {
    if (disposed) return
    const count = Math.round(bounded(requested, 0, 8000, 1800)), old = positions.length / 3
    const fresh = new Float32Array(count * 3), velocities = new Float32Array(count * 3), rest = new Float32Array(count)
    fresh.set(positions.subarray(0, count * 3)); velocities.set(speeds.subarray(0, count * 3)); rest.set(homes.subarray(0, count))
    for (let i = old; i < count; i++) {
      const y = random() * 2 - 1, angle = random() * Math.PI * 2, ring = Math.sqrt(1 - y * y), r = .99 + random() * .27
      fresh[i * 3] = Math.cos(angle) * ring * r; fresh[i * 3 + 1] = y * r; fresh[i * 3 + 2] = Math.sin(angle) * ring * r
      rest[i] = random()
      velocities[i * 3] = -fresh[i * 3 + 1] * .16; velocities[i * 3 + 1] = fresh[i * 3] * .16
    }
    positions = fresh; previous = fresh.slice(); speeds = velocities; homes = rest
  }
  function inject(point, impulse, { radius: reach = .42, scatter = 1.6 } = {}) {
    if (disposed || !point?.every(Number.isFinite) || !impulse?.every(Number.isFinite)) return false
    reach = bounded(reach, .12, 1, .42)
    const r2 = reach * reach
    for (let axis = 0; axis < 3; axis++) for (const [i, , , , x, y, z] of faces[axis]) {
      const d2 = (x - point[0]) ** 2 + (y - point[1]) ** 2 + (z - point[2]) ** 2
      if (d2 < r2 * 6) u[axis][i] += bounded(impulse[axis], -4, 4, 0) * Math.exp(-d2 / r2 * 2)
    }
    for (let i = 0; i < positions.length; i += 3) {
      const dx = positions[i] - point[0], dy = positions[i + 1] - point[1], dz = positions[i + 2] - point[2], distance = Math.hypot(dx, dy, dz)
      if (distance > reach * 2.5) continue
      const weight = Math.exp(-distance * distance / r2 * 2), inv = 1 / Math.max(distance, .025)
      speeds[i] += (impulse[0] + dx * inv * scatter) * weight
      speeds[i + 1] += (impulse[1] + dy * inv * scatter) * weight
      speeds[i + 2] += (impulse[2] + dz * inv * scatter) * weight
    }
    contacts++
    return true
  }
  function advance(dt, { diffusion = .35, energy = 0 } = {}) {
    diffusion = bounded(diffusion, 0, 1, .35); energy = bounded(energy, 0, 1, 0)
    const viscosity = .016 - diffusion * .014, alpha = viscosity * dt / (h * h)
    for (let axis = 0; axis < 3; axis++) for (const [i, , , , px, py, pz] of faces[axis]) {
      const vx = scalar(u[0], 0, px, py, pz), vy = scalar(u[1], 1, px, py, pz), vz = scalar(u[2], 2, px, py, pz)
      next[axis][i] = scalar(u[axis], axis, px - dt * vx, py - dt * vy, pz - dt * vz)
    }
    for (let axis = 0; axis < 3; axis++) for (const [i, , , , px, py, pz] of faces[axis]) {
      const field = next[axis], laplacian = (field[i - 1] ?? 0) + (field[i + 1] ?? 0) + (field[i - s] ?? 0) + (field[i + s] ?? 0) + (field[i - s * s] ?? 0) + (field[i + s * s] ?? 0) - 6 * field[i]
      const torque = axis === 0 ? -py : axis === 1 ? px : px * .25
      u[axis][i] = bounded(field[i] + alpha * laplacian + torque * background * (1 + energy * 3) * dt, -5, 5, 0) * Math.exp(-dt * .06)
    }
    project()
    previous.set(positions)
    const drag = 1 - Math.exp(-dt * 4.2), attraction = 11 - diffusion * 7, boundary = half - .025
    for (let i = 0, particle = 0; i < positions.length; i += 3, particle++) {
      let x = positions[i], y = positions[i + 1], z = positions[i + 2], r = Math.max(.01, Math.hypot(x, y, z))
      const nx = x / r, ny = y / r, nz = z / r
      const localRadius = surfaceRadius ? bounded(surfaceRadius(nx, ny, nz), .5, 1.45, radius) : radius
      const target = localRadius + .075 + homes[particle] * (.12 + diffusion * .24)
      const radialSpeed = speeds[i] * nx + speeds[i + 1] * ny + speeds[i + 2] * nz
      const radialForce = -(r - target) * attraction - radialSpeed * .7
      speeds[i] += (scalar(u[0], 0, x, y, z) - speeds[i]) * drag + nx * radialForce * dt
      speeds[i + 1] += (scalar(u[1], 1, x, y, z) - speeds[i + 1]) * drag + ny * radialForce * dt
      speeds[i + 2] += (scalar(u[2], 2, x, y, z) - speeds[i + 2]) * drag + nz * radialForce * dt
      for (let axis = 0; axis < 3; axis++) {
        speeds[i + axis] = bounded(speeds[i + axis], -5, 5, 0)
        positions[i + axis] += speeds[i + axis] * dt
        if (Math.abs(positions[i + axis]) > boundary) { positions[i + axis] = Math.sign(positions[i + axis]) * boundary; speeds[i + axis] *= -.3 }
      }
      x = positions[i]; y = positions[i + 1]; z = positions[i + 2]; r = Math.max(.0001, Math.hypot(x, y, z))
      const collisionRadius = (surfaceRadius ? bounded(surfaceRadius(x / r, y / r, z / r), .5, 1.45, radius) : radius) + .02
      if (r < collisionRadius) {
        const scale = collisionRadius / r
        positions[i] *= scale; positions[i + 1] *= scale; positions[i + 2] *= scale
        const incoming = Math.min(0, (speeds[i] * x + speeds[i + 1] * y + speeds[i + 2] * z) / r)
        speeds[i] -= incoming * x / r; speeds[i + 1] -= incoming * y / r; speeds[i + 2] -= incoming * z / r
      }
    }
    time += dt
  }
  const api = {
    get positions() { return positions }, get previousPositions() { return previous },
    get velocities() { return speeds }, resolution: n,
    inject, project, divergenceRMS, setParticleCount,
    setSurfaceRadius(callback) { surfaceRadius = typeof callback === 'function' ? callback : null },
    step(elapsed, parameters) {
      if (disposed) return 0
      accumulated += bounded(elapsed, 0, fixed * 4, 0)
      let steps = 0
      while (accumulated + 1e-10 >= fixed && steps < 4) { advance(fixed, parameters); accumulated -= fixed; steps++ }
      return steps
    },
    diagnostics() {
      if (disposed) return { disposed: true, allocatedBytes: 0, mass: 0 }
      let boundaryFlux = 0
      for (let axis = 0; axis < 3; axis++) for (let i = 0; i < size; i++) if (!masks[axis][i]) boundaryFlux += Math.abs(u[axis][i])
      return { resolution: n, mass: positions.length / 3, simulatedSeconds: time, contacts, divergenceBefore: projectionBefore, divergenceAfter: projectionAfter, boundaryFlux,
        allocatedBytes: (size * 10 + positions.length * 3 + homes.length) * 4 + size * 4 }
    },
    dispose() {
      if (disposed) return
      disposed = true; u = next = faces = masks = active = links = []
      pressure = pressureNext = divergence = solid = null
      positions = previous = speeds = homes = new Float32Array(0); surfaceRadius = null
    },
  }
  setParticleCount(options.count ?? 1800)
  return api
}

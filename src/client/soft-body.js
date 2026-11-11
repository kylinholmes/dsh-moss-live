// Compliant constraint projection follows XPBD, Macklin et al. (2016), eq. 18:
// deltaLambda = (-C - compliance / h² * lambda) / (sum(w * |grad C|²) + compliance / h²).
// https://mmacklin.com/xpbd.pdf
// This is a closed elastic surface with enclosed-volume preservation, not a
// tetrahedral finite-element material model. A weak rest spring suspends it in
// the interface; edge and opposite-vertex constraints carry local deformation.

const finite = (value, fallback, low, high) => Number.isFinite(value) ? Math.max(low, Math.min(high, value)) : fallback
const validPoint = point => point != null && [point[0], point[1], point[2]].every(Number.isFinite)

/**
 * Mesh positions, grab/drag points, and impulse velocities use mesh-local units.
 * UV seams and pole duplicates are welded internally, while `positions` retains
 * the original vertex layout for direct use as a Three BufferAttribute.
 */
export function createSoftBody(restPositions, indices, options = {}) {
  if (!restPositions || restPositions.length < 12 || restPositions.length % 3 || !indices || indices.length % 3) throw new TypeError('A closed triangle mesh is required')
  const vertexMap = new Uint32Array(restPositions.length / 3)
  const unique = [], weld = new Map()
  let extent = 0
  for (const coordinate of restPositions) {
    if (!Number.isFinite(coordinate)) throw new TypeError('Mesh coordinates must be finite')
    extent = Math.max(extent, Math.abs(coordinate))
  }
  const tolerance = Math.max(1e-8, extent * 1e-6)
  for (let i = 0; i < restPositions.length; i += 3) {
    const key = `${Math.round(restPositions[i] / tolerance)},${Math.round(restPositions[i + 1] / tolerance)},${Math.round(restPositions[i + 2] / tolerance)}`
    let id = weld.get(key)
    if (id == null) {
      id = unique.length / 3
      weld.set(key, id)
      unique.push(restPositions[i], restPositions[i + 1], restPositions[i + 2])
    }
    vertexMap[i / 3] = id
  }
  const rest = new Float64Array(unique), x = rest.slice(), previous = rest.slice()
  const velocity = new Float64Array(rest.length), gradients = new Float64Array(rest.length), normalSums = new Float64Array(rest.length)
  const positions = new Float32Array(restPositions), originalPositions = positions.slice()
  const normals = new Float32Array(positions.length)
  const triangles = [], edgeMap = new Map(), bends = []
  const center = [0, 0, 0], nodeCount = rest.length / 3
  for (let i = 0; i < rest.length; i++) center[i % 3] += rest[i] / nodeCount
  let squaredRadius = 0
  for (let i = 0; i < rest.length; i += 3) squaredRadius += (rest[i] - center[0]) ** 2 + (rest[i + 1] - center[1]) ** 2 + (rest[i + 2] - center[2]) ** 2
  const radius = Math.sqrt(squaredRadius / nodeCount)
  if (!(radius > tolerance)) throw new TypeError('Mesh must enclose a non-zero volume')

  function distance(a, b) { return Math.hypot(rest[a * 3] - rest[b * 3], rest[a * 3 + 1] - rest[b * 3 + 1], rest[a * 3 + 2] - rest[b * 3 + 2]) }
  function edge(a, b, opposite) {
    const key = a < b ? `${a},${b}` : `${b},${a}`
    const existing = edgeMap.get(key)
    if (existing) {
      existing.faces++
      if (existing.faces === 2 && existing.opposite !== opposite) bends.push({ a: existing.opposite * 3, b: opposite * 3, length: distance(existing.opposite, opposite), lambda: 0 })
    } else edgeMap.set(key, { a: a * 3, b: b * 3, length: distance(a, b), opposite, faces: 1, lambda: 0 })
  }
  for (let i = 0; i < indices.length; i += 3) {
    const mapped = []
    for (let j = 0; j < 3; j++) {
      const index = indices[i + j]
      if (!Number.isInteger(index) || index < 0 || index >= vertexMap.length) throw new TypeError('Triangle index is outside the mesh')
      mapped.push(vertexMap[index])
    }
    const [a, b, c] = mapped
    if (a === b || b === c || c === a) continue
    triangles.push(a * 3, b * 3, c * 3)
    edge(a, b, c); edge(b, c, a); edge(c, a, b)
  }
  const edges = [...edgeMap.values()]
  if (!triangles.length || edges.some(item => item.faces !== 2)) throw new TypeError('The soft body requires a closed manifold mesh')

  function signedVolume(withGradients = false) {
    let result = 0
    if (withGradients) gradients.fill(0)
    for (let i = 0; i < triangles.length; i += 3) {
      const a = triangles[i], b = triangles[i + 1], c = triangles[i + 2]
      const bcX = (x[b + 1] * x[c + 2] - x[b + 2] * x[c + 1]) / 6
      const bcY = (x[b + 2] * x[c] - x[b] * x[c + 2]) / 6
      const bcZ = (x[b] * x[c + 1] - x[b + 1] * x[c]) / 6
      result += x[a] * bcX + x[a + 1] * bcY + x[a + 2] * bcZ
      if (withGradients) {
        gradients[a] += bcX; gradients[a + 1] += bcY; gradients[a + 2] += bcZ
        gradients[b] += (x[c + 1] * x[a + 2] - x[c + 2] * x[a + 1]) / 6
        gradients[b + 1] += (x[c + 2] * x[a] - x[c] * x[a + 2]) / 6
        gradients[b + 2] += (x[c] * x[a + 1] - x[c + 1] * x[a]) / 6
        gradients[c] += (x[a + 1] * x[b + 2] - x[a + 2] * x[b + 1]) / 6
        gradients[c + 1] += (x[a + 2] * x[b] - x[a] * x[b + 2]) / 6
        gradients[c + 2] += (x[a] * x[b + 1] - x[a + 1] * x[b]) / 6
      }
    }
    return result
  }
  const restVolume = signedVolume()
  if (Math.abs(restVolume) < radius ** 3 * 1e-5) throw new TypeError('Mesh must enclose a non-zero volume')
  const fixedDt = 1 / 120
  const iterations = Math.round(finite(options.iterations, 5, 2, 10))
  const edgeCompliance = finite(options.edgeCompliance, .00008, 0, .01)
  const bendCompliance = finite(options.bendCompliance, .001, 0, .05)
  const volumeCompliance = finite(options.volumeCompliance, 1e-8, 0, .0001)
  const grabCompliance = finite(options.grabCompliance, .000012, 0, .005)
  const shapeStiffness = finite(options.shapeStiffness, 34, 1, 150)
  const damping = finite(options.damping, 3.6, .5, 20)
  const maxDrag = finite(options.maxDrag, radius * 1.1, radius * .1, radius * 1.5)
  const maxVelocity = radius * 5
  let accumulator = 0, held = null

  function publishNormals() {
    normalSums.fill(0)
    for (let i = 0; i < triangles.length; i += 3) {
      const a = triangles[i], b = triangles[i + 1], c = triangles[i + 2]
      const ux = x[b] - x[a], uy = x[b + 1] - x[a + 1], uz = x[b + 2] - x[a + 2]
      const vx = x[c] - x[a], vy = x[c + 1] - x[a + 1], vz = x[c + 2] - x[a + 2]
      const nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx
      for (const offset of [a, b, c]) { normalSums[offset] += nx; normalSums[offset + 1] += ny; normalSums[offset + 2] += nz }
    }
    for (let i = 0; i < normalSums.length; i += 3) {
      const length = Math.hypot(normalSums[i], normalSums[i + 1], normalSums[i + 2])
      if (length > 1e-12) { normalSums[i] /= length; normalSums[i + 1] /= length; normalSums[i + 2] /= length }
    }
    for (let i = 0; i < vertexMap.length; i++) {
      const from = vertexMap[i] * 3, to = i * 3
      normals[to] = normalSums[from]; normals[to + 1] = normalSums[from + 1]; normals[to + 2] = normalSums[from + 2]
    }
  }
  function publish() {
    for (let i = 0; i < vertexMap.length; i++) {
      const from = vertexMap[i] * 3, to = i * 3
      positions[to] = x[from]; positions[to + 1] = x[from + 1]; positions[to + 2] = x[from + 2]
    }
    publishNormals()
  }
  function solveDistances(constraints, compliance, h) {
    const alpha = compliance / (h * h)
    for (const item of constraints) {
      const { a, b } = item
      const dx = x[a] - x[b], dy = x[a + 1] - x[b + 1], dz = x[a + 2] - x[b + 2]
      const length = Math.hypot(dx, dy, dz)
      if (length < radius * 1e-8) continue
      const deltaLambda = (item.length - length - alpha * item.lambda) / (2 + alpha)
      item.lambda += deltaLambda
      const scale = deltaLambda / length
      x[a] += dx * scale; x[a + 1] += dy * scale; x[a + 2] += dz * scale
      x[b] -= dx * scale; x[b + 1] -= dy * scale; x[b + 2] -= dz * scale
    }
  }
  function solveVolume(h, lambda) {
    const error = signedVolume(true) - restVolume, alpha = volumeCompliance / (h * h)
    let denominator = alpha
    for (let i = 0; i < gradients.length; i++) denominator += gradients[i] ** 2
    if (denominator < 1e-16) return lambda
    const deltaLambda = (-error - alpha * lambda) / denominator
    for (let i = 0; i < x.length; i++) x[i] += gradients[i] * deltaLambda
    return lambda + deltaLambda
  }
  function solveGrab(h) {
    if (!held) return
    for (const node of held.nodes) {
      const alpha = grabCompliance / (h * h * node.weight * node.weight)
      for (let axis = 0; axis < 3; axis++) {
        const target = node.origin[axis] + held.offset[axis] * node.weight
        const deltaLambda = (target - x[node.index + axis] - alpha * node.lambda[axis]) / (1 + alpha)
        node.lambda[axis] += deltaLambda
        x[node.index + axis] += deltaLambda
      }
    }
  }
  function tick(h) {
    const decay = Math.exp(-damping * h)
    previous.set(x)
    for (let i = 0; i < x.length; i++) {
      velocity[i] *= decay
      x[i] += velocity[i] * h + (rest[i] - x[i]) * shapeStiffness * h * h
    }
    if (held) {
      const dx = held.target[0] - held.offset[0], dy = held.target[1] - held.offset[1], dz = held.target[2] - held.offset[2]
      const distance = Math.hypot(dx, dy, dz), scale = distance ? Math.min(1, radius * 6 * h / distance) : 0
      held.offset[0] += dx * scale; held.offset[1] += dy * scale; held.offset[2] += dz * scale
      for (const node of held.nodes) node.lambda.fill(0)
    }
    for (const item of edges) item.lambda = 0
    for (const item of bends) item.lambda = 0
    let volumeLambda = 0
    for (let iteration = 0; iteration < iterations; iteration++) {
      solveDistances(edges, edgeCompliance, h)
      solveDistances(bends, bendCompliance, h)
      solveGrab(h)
      volumeLambda = solveVolume(h, volumeLambda)
    }
    for (let i = 0; i < x.length; i += 3) {
      const vx = (x[i] - previous[i]) / h, vy = (x[i + 1] - previous[i + 1]) / h, vz = (x[i + 2] - previous[i + 2]) / h
      const speed = Math.hypot(vx, vy, vz), scale = speed ? Math.min(1, maxVelocity / speed) : 0
      velocity[i] = vx * scale; velocity[i + 1] = vy * scale; velocity[i + 2] = vz * scale
    }
  }
  function neighborhood(point, supportRadius) {
    const support = finite(supportRadius, radius * .55, radius * .15, radius * 1.1)
    const nodes = []
    let nearest = 0, nearestDistance = Infinity
    for (let i = 0; i < x.length; i += 3) {
      const distance = Math.hypot(x[i] - point[0], x[i + 1] - point[1], x[i + 2] - point[2])
      if (distance < nearestDistance) { nearest = i; nearestDistance = distance }
      if (distance < support) {
        const q = 1 - (distance / support) ** 2
        nodes.push({ index: i, weight: q * q, origin: x.slice(i, i + 3), lambda: new Float64Array(3) })
      }
    }
    if (!nodes.length && nearestDistance < radius * .5) nodes.push({ index: nearest, weight: 1, origin: x.slice(nearest, nearest + 3), lambda: new Float64Array(3) })
    return nodes
  }

  publishNormals()
  return {
    positions,
    normals,
    restVolume,
    getVolume: () => signedVolume(),
    step(dt) {
      if (!Number.isFinite(dt) || dt <= 0) return false
      // Eight bounded fixed steps avoid a tab-resume catch-up spiral.
      accumulator = Math.min(accumulator + dt, fixedDt * 8)
      let updated = false
      while (accumulator >= fixedDt - 1e-10) { tick(fixedDt); accumulator -= fixedDt; updated = true }
      if (updated) publish()
      return updated
    },
    grab(point, supportRadius) {
      if (!validPoint(point)) return false
      const nodes = neighborhood(point, supportRadius)
      if (!nodes.length) return false
      held = { nodes, point: [...point], offset: [0, 0, 0], target: [0, 0, 0] }
      return true
    },
    drag(point) {
      if (!held || !validPoint(point)) return false
      const dx = point[0] - held.point[0], dy = point[1] - held.point[1], dz = point[2] - held.point[2]
      const length = Math.hypot(dx, dy, dz), scale = length ? Math.min(1, maxDrag / length) : 0
      held.target[0] = dx * scale; held.target[1] = dy * scale; held.target[2] = dz * scale
      return true
    },
    release() { held = null },
    impulse(point, impulse, supportRadius) {
      if (!validPoint(point) || !validPoint(impulse)) return false
      const length = Math.hypot(...impulse), scale = length ? Math.min(1, maxVelocity / length) : 0
      for (const node of neighborhood(point, supportRadius)) for (let axis = 0; axis < 3; axis++) velocity[node.index + axis] += impulse[axis] * scale * node.weight
      return true
    },
    reset() { held = null; accumulator = 0; x.set(rest); previous.set(rest); velocity.fill(0); positions.set(originalPositions); publishNormals() },
  }
}

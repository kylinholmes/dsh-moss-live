import {
  ACESFilmicToneMapping, BufferAttribute, BufferGeometry, Color, DirectionalLight, DynamicDrawUsage,
  HemisphereLight, LineBasicMaterial, LineSegments, Mesh, MeshBasicMaterial, MeshPhysicalMaterial,
  PerspectiveCamera, Plane, Points, Raycaster, Scene, ShaderMaterial, SphereGeometry, Vector2, Vector3, WebGLRenderer,
} from 'three'
import { createFluidField } from './fluid-field.js'
import { createSoftBody } from './soft-body.js'

const pointVertex = `
  attribute float aSeed; attribute float aSpeed; attribute vec3 aVelocity;
  uniform float uHeight; uniform float uDebug;
  varying float vSpeed; varying float vSeed; varying vec2 vFlow;
  void main() {
    vec4 view = modelViewMatrix * vec4(position, 1.);
    float size = uDebug > .5 ? .025 : .25 * (.7 + aSeed * .6) * (1. + min(aSpeed,2.) * .45);
    gl_PointSize = clamp(size * uHeight / -view.z, 1., 48.);
    gl_Position = projectionMatrix * view;
    vSpeed = aSpeed; vSeed = aSeed; vFlow = aVelocity.xy;
  }
`
const pointFragment = `
  uniform float uDebug; uniform vec3 uTint;
  varying float vSpeed; varying float vSeed; varying vec2 vFlow;
  void main() {
    vec2 uv = gl_PointCoord * 2. - 1.;
    if(uDebug < .5) { vec2 flow = length(vFlow) > .001 ? normalize(vFlow) : vec2(1.,0.); uv = vec2(dot(uv,flow),dot(uv,vec2(-flow.y,flow.x))); uv.y *= 1. + min(vSpeed,2.) * 2.; }
    float r = dot(uv,uv);
    if(r > 1.) discard;
    vec3 ink = mix(uTint * .65, vec3(.94,.98,1.), .25);
    float alpha = exp(-r * 3.3) * .13;
    if(uDebug > .5) { ink = mix(vec3(.32,.72,1.),vec3(1.,.76,.38),clamp(vSpeed*.6,0.,1.)); alpha = (1.-smoothstep(.55,1.,r)) * .85; }
    gl_FragColor = vec4(ink,alpha);
    #include <colorspace_fragment>
  }
`
const finite = (value, low, high, fallback) => Number.isFinite(value) ? Math.max(low, Math.min(high, value)) : fallback

// Rendering owns only GPU buffers and input projection. Fluid and solid both
// advance their own bounded fixed-step state; no shader time deforms geometry.
export function createCloudRenderer(element, _obsoleteMotion, read, onFallback) {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
  const mobile = window.matchMedia('(pointer: coarse)').matches
  const scene = new Scene(), camera = new PerspectiveCamera(43, 1, .1, 12)
  camera.position.set(0, 0, 4.3); camera.updateMatrixWorld()
  let renderer, coreGeometry, coreMaterial, core, wireMaterial, wire, body, fluid
  let pointGeometry, pointMaterial, points, trailGeometry, trailMaterial, trails
  let frame = 0, stopped = false, disposed = false, visible = true, resizeObserver, intersectionObserver
  let previous = 0, lastDraw = 0, lastMetrics = 0, lastStir = 0, lastVoice = 0, previousLevel = 0
  let grabbed = false, oldPoint = null, requestedCount = -1
  const raycaster = new Raycaster(), pointer = new Vector2(), dragPlane = new Plane(), target = new Vector3()
  const radialColumns = 40, radialRows = 25, radii = new Float32Array(radialColumns * radialRows), radiiCount = new Uint16Array(radialColumns * radialRows)
  const color = new Color('#64b5f6')
  const stopFrames = () => { cancelAnimationFrame(frame); frame = 0; previous = 0 }
  const dispose = () => {
    if (disposed) return
    disposed = stopped = true; stopFrames(); body?.release(); fluid?.dispose()
    resizeObserver?.disconnect(); intersectionObserver?.disconnect()
    window.removeEventListener('resize', resize); document.removeEventListener('visibilitychange', visibility)
    reduced.removeEventListener('change', preference); element.removeEventListener('webglcontextlost', contextLost)
    coreGeometry?.dispose(); coreMaterial?.dispose(); wireMaterial?.dispose()
    pointGeometry?.dispose(); pointMaterial?.dispose(); trailGeometry?.dispose(); trailMaterial?.dispose()
    scene.clear(); renderer?.dispose()
    if (renderer && !renderer.getContext().isContextLost()) renderer.forceContextLoss()
  }
  const fail = () => { dispose(); onFallback(true) }
  const radiusCell = (x, y, z) => {
    const angle = (Math.atan2(z, x) + Math.PI) / (Math.PI * 2)
    return Math.min(radialColumns - 1, Math.floor(angle * radialColumns)) + radialColumns * Math.min(radialRows - 1, Math.floor((Math.acos(Math.max(-1, Math.min(1, y))) / Math.PI) * radialRows))
  }
  const updateBody = () => {
    coreGeometry.attributes.position.array.set(body.positions)
    coreGeometry.attributes.position.needsUpdate = true
    if (body.normals) { coreGeometry.attributes.normal.array.set(body.normals); coreGeometry.attributes.normal.needsUpdate = true }
    else coreGeometry.computeVertexNormals()
    coreGeometry.computeBoundingSphere()
    radii.fill(.92); radiiCount.fill(0)
    for (let i = 0; i < body.positions.length; i += 3) {
      const x = body.positions[i], y = body.positions[i + 1], z = body.positions[i + 2], r = Math.hypot(x, y, z)
      const cell = radiusCell(x / r, y / r, z / r)
      if (!radiiCount[cell]) radii[cell] = r
      else radii[cell] = Math.max(radii[cell], r)
      radiiCount[cell]++
    }
  }
  const buildParticles = count => {
    fluid.setParticleCount(count)
    if (points) { scene.remove(points, trails); pointGeometry.dispose(); trailGeometry.dispose() }
    pointGeometry = new BufferGeometry()
    pointGeometry.setAttribute('position', new BufferAttribute(fluid.positions, 3).setUsage(DynamicDrawUsage))
    const seeds = new Float32Array(count), speeds = new Float32Array(count)
    for (let i = 0; i < count; i++) seeds[i] = ((i * 16807 + 31) % 997) / 997
    pointGeometry.setAttribute('aSeed', new BufferAttribute(seeds, 1))
    pointGeometry.setAttribute('aSpeed', new BufferAttribute(speeds, 1).setUsage(DynamicDrawUsage))
    pointGeometry.setAttribute('aVelocity', new BufferAttribute(fluid.velocities, 3).setUsage(DynamicDrawUsage))
    points = new Points(pointGeometry, pointMaterial); points.frustumCulled = false
    trailGeometry = new BufferGeometry()
    trailGeometry.setAttribute('position', new BufferAttribute(new Float32Array(count * 6), 3).setUsage(DynamicDrawUsage))
    trails = new LineSegments(trailGeometry, trailMaterial); trails.frustumCulled = false
    scene.add(points, trails); requestedCount = count
  }
  const draw = now => {
    frame = 0
    if (stopped || !visible || document.hidden) return
    const settings = read(), frozen = reduced.matches || settings.paused
    if (now - lastDraw < 32 && !frozen) { frame = requestAnimationFrame(draw); return }
    const elapsed = previous ? Math.min(.0666, (now - previous) / 1000) : 1 / 60
    previous = lastDraw = now
    const concentration = finite(settings.appearance.particles, 0, 128, 32) / 128
    const count = Math.round(concentration * (mobile ? 2100 : 4200))
    if (requestedCount !== count) buildParticles(count)
    const diffusion = finite(settings.appearance.diffusion, 0, 100, 35) / 100
    const energy = finite(settings.energy, 0, 1, 0)
    if (!frozen) {
      if (energy > .04 && now - lastVoice > 100) {
        const impulse = Math.max(0, energy - previousLevel) * .11
        body.impulse([.2, .3, .82], [.005 * impulse, impulse * .03, impulse], .35)
        previousLevel = energy; lastVoice = now
      }
      body.step(elapsed); updateBody()
      fluid.step(elapsed, { diffusion, energy })
    }
    color.set(/^#[\da-f]{6}$/i.test(settings.appearance.color ?? '') ? settings.appearance.color : '#64b5f6')
    coreMaterial.color.copy(color); pointMaterial.uniforms.uTint.value.copy(color)
    const debug = settings.debug === 'particles' ? 1 : settings.debug === 'trails' ? 2 : 0
    pointMaterial.uniforms.uDebug.value = debug
    pointMaterial.uniforms.uHeight.value = element.height * .5
    trails.visible = debug === 2; wire.visible = Boolean(settings.wireframe)
    const speeds = pointGeometry.attributes.aSpeed.array, paths = trailGeometry.attributes.position.array
    for (let i = 0, particle = 0; i < fluid.positions.length; i += 3, particle++) {
      speeds[particle] = Math.hypot(fluid.velocities[i], fluid.velocities[i + 1], fluid.velocities[i + 2])
      if (debug === 2) for (let axis = 0; axis < 3; axis++) {
        paths[particle * 6 + axis] = fluid.positions[i + axis]
        paths[particle * 6 + 3 + axis] = fluid.positions[i + axis] - fluid.velocities[i + axis] * .14
      }
    }
    pointGeometry.attributes.position.needsUpdate = true; pointGeometry.attributes.aSpeed.needsUpdate = true; pointGeometry.attributes.aVelocity.needsUpdate = true
    if (debug === 2) trailGeometry.attributes.position.needsUpdate = true
    try { renderer.render(scene, camera) } catch { fail(); return }
    if (stopped) { dispose(); return }
    if (settings.onDiagnostics && now - lastMetrics > 250) {
      let displacement = 0
      const rest = body.restPositions ?? restPositions
      for (let i = 0; i < body.positions.length; i += 3) displacement = Math.max(displacement, Math.hypot(body.positions[i] - rest[i], body.positions[i + 1] - rest[i + 1], body.positions[i + 2] - rest[i + 2]))
      settings.onDiagnostics({ ...fluid.diagnostics(), volumeRatio: body.getVolume() / body.restVolume, displacement, grabbing: grabbed })
      lastMetrics = now
    }
    if (!frozen) frame = requestAnimationFrame(draw)
  }
  const invalidate = () => { if (!stopped && !frame && visible && !document.hidden) frame = requestAnimationFrame(draw) }
  const resize = () => {
    if (!renderer || stopped) return
    const width = Math.max(1, element.clientWidth)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, mobile ? 1.4 : 1.7, 650 / width))
    renderer.setSize(width, width, false); invalidate()
  }
  const visibility = () => { if (document.hidden) stopFrames(); else invalidate() }
  const preference = () => { stopFrames(); invalidate() }
  const contextLost = event => { event.preventDefault(); fail() }
  let restPositions
  try {
    const context = element.getContext('webgl2', { alpha: true, antialias: true, powerPreference: 'low-power' })
    if (!context) { onFallback(true); stopped = true }
    else {
      renderer = new WebGLRenderer({ canvas: element, context, alpha: true, antialias: true, powerPreference: 'low-power' })
      renderer.setClearColor(0x000000, 0); renderer.toneMapping = ACESFilmicToneMapping; renderer.toneMappingExposure = 1.1
      renderer.debug.onShaderError = () => { stopped = true; stopFrames(); onFallback(true) }
      coreGeometry = new SphereGeometry(.92, 32, 24)
      restPositions = coreGeometry.attributes.position.array.slice()
      body = createSoftBody(restPositions, coreGeometry.index.array, { shapeStiffness: 22, damping: 3.5 })
      coreMaterial = new MeshPhysicalMaterial({ color: '#64b5f6', roughness: .3, metalness: .01, clearcoat: .5, clearcoatRoughness: .3 })
      core = new Mesh(coreGeometry, coreMaterial); scene.add(core)
      wireMaterial = new MeshBasicMaterial({ color: '#f0fbff', wireframe: true, transparent: true, opacity: .19, depthWrite: false })
      wire = new Mesh(coreGeometry, wireMaterial); wire.visible = false; scene.add(wire)
      scene.add(new HemisphereLight(0xe7f6ff, 0x27475e, 1.5))
      const sun = new DirectionalLight(0xffffff, 2.5); sun.position.set(-3, 4, 5); scene.add(sun)
      const fill = new DirectionalLight(0xb7daff, 1.2); fill.position.set(3, -1, 2); scene.add(fill)
      fluid = createFluidField({ resolution: mobile ? 10 : 14, count: 0, pressureIterations: mobile ? 30 : 42 })
      fluid.setSurfaceRadius((x, y, z) => radii[radiusCell(x, y, z)] || .92)
      pointMaterial = new ShaderMaterial({ vertexShader: pointVertex, fragmentShader: pointFragment, transparent: true, depthWrite: false, uniforms: { uHeight: { value: 250 }, uDebug: { value: 0 }, uTint: { value: color.clone() } } })
      trailMaterial = new LineBasicMaterial({ color: '#afd9f1', transparent: true, opacity: .35, depthWrite: false })
      buildParticles(0); updateBody(); resize()
      if (typeof ResizeObserver !== 'undefined') { resizeObserver = new ResizeObserver(resize); resizeObserver.observe(element) }
      else window.addEventListener('resize', resize)
      if (typeof IntersectionObserver !== 'undefined') {
        intersectionObserver = new IntersectionObserver(entries => { visible = entries[0]?.isIntersecting !== false; if (visible) invalidate(); else stopFrames() })
        intersectionObserver.observe(element)
      }
      document.addEventListener('visibilitychange', visibility); reduced.addEventListener('change', preference)
      element.addEventListener('webglcontextlost', contextLost); onFallback(false)
    }
  } catch { fail() }
  const aim = (x, y) => { pointer.set(x, y); raycaster.setFromCamera(pointer, camera) }
  const projected = (x, y, z = .65) => {
    aim(x, y); dragPlane.set(new Vector3(0, 0, 1), -z)
    return raycaster.ray.intersectPlane(dragPlane, target)?.clone()
  }
  const stir = (point, force, scatter = 1) => { if (point && fluid) fluid.inject(point.toArray(), force, { radius: .4, scatter }); invalidate() }
  return {
    invalidate, dispose,
    down(x, y) {
      if (stopped) return false
      aim(x, y)
      const hit = raycaster.intersectObject(core, false)[0]
      if (hit) { grabbed = true; body.grab(hit.point.toArray(), .46); dragPlane.constant = -hit.point.z; oldPoint = hit.point.clone() }
      else { oldPoint = projected(x, y); stir(oldPoint, [0, 0, -.65], 1.8) }
      invalidate(); return grabbed
    },
    move(x, y) {
      if (stopped) return
      const point = projected(x, y, grabbed && oldPoint ? oldPoint.z : .65)
      if (!point) return
      if (grabbed) body.drag(point.toArray())
      const now = performance.now()
      if (oldPoint && now - lastStir > 20) {
        const delta = point.clone().sub(oldPoint)
        stir(point, [delta.x * 4, delta.y * 4, -.035], grabbed ? .4 : .75); lastStir = now
      }
      oldPoint = point
      if (reduced.matches || read().paused) { body.step(1 / 60); updateBody() }
      invalidate()
    },
    up() { grabbed = false; body?.release(); oldPoint = null; invalidate() },
    poke(x = 0, y = 0) {
      if (stopped) return
      aim(x, y); const hit = raycaster.intersectObject(core, false)[0]
      const point = hit?.point ?? projected(x, y)
      if (!point) return
      if (hit) body.impulse(point.toArray(), point.clone().normalize().multiplyScalar(-1.8).toArray(), .4)
      stir(point, [0, 0, -.7], 2.2)
      invalidate()
    },
    reset() { if (stopped) return; body.reset(); updateBody(); fluid.dispose(); fluid = createFluidField({ resolution: mobile ? 10 : 14, count: requestedCount }); fluid.setSurfaceRadius((x, y, z) => radii[radiusCell(x, y, z)] || .92); buildParticles(requestedCount); invalidate() },
  }
}

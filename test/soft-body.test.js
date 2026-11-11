import test from 'node:test'
import assert from 'node:assert/strict'
import { existsSync } from 'node:fs'
import { SphereGeometry } from 'three'

async function subject() {
  const api = existsSync('src/client/soft-body.js') ? await import('../src/client/soft-body.js') : {}
  assert.equal(typeof api.createSoftBody, 'function', 'the orb needs a deformable mesh solver')
  return api.createSoftBody
}

function sphere() {
  const geometry = new SphereGeometry(1, 24, 16)
  return { rest: geometry.attributes.position.array, indices: geometry.index.array }
}

function nearest(positions, target) {
  let result = 0, distance = Infinity
  for (let i = 0; i < positions.length; i += 3) {
    const d = Math.hypot(positions[i] - target[0], positions[i + 1] - target[1], positions[i + 2] - target[2])
    if (d < distance) { result = i; distance = d }
  }
  return result
}

const displacement = (current, rest, i) => Math.hypot(current[i] - rest[i], current[i + 1] - rest[i + 1], current[i + 2] - rest[i + 2])

function volume(positions, indices) {
  let result = 0
  for (let i = 0; i < indices.length; i += 3) {
    const a = indices[i] * 3, b = indices[i + 1] * 3, c = indices[i + 2] * 3
    result += positions[a] * (positions[b + 1] * positions[c + 2] - positions[b + 2] * positions[c + 1])
      + positions[a + 1] * (positions[b + 2] * positions[c] - positions[b] * positions[c + 2])
      + positions[a + 2] * (positions[b] * positions[c + 1] - positions[b + 1] * positions[c])
  }
  return result / 6
}

test('dragging a patch stretches its mesh locally while preserving the solid volume', async () => {
  const createSoftBody = await subject(), { rest, indices } = sphere()
  const before = rest.slice(), body = createSoftBody(rest, indices)
  const front = nearest(rest, [0, 0, 1]), back = nearest(rest, [0, 0, -1])
  const initialVolume = volume(rest, indices)
  assert.equal(body.grab([0, 0, 1]), true)
  body.drag([.55, .18, 1.35])
  for (let i = 0; i < 90; i++) {
    body.step(1 / 90)
    assert.ok(Math.abs(volume(body.positions, indices) / initialVolume - 1) < .08, 'the body must keep its enclosed volume during a pull')
  }
  const nearMotion = displacement(body.positions, rest, front)
  const farMotion = displacement(body.positions, rest, back)
  assert.ok(nearMotion > .2, `the touched surface must visibly stretch, got ${nearMotion}`)
  assert.ok(farMotion < nearMotion * .45, `the far pole must not follow as a rigid transform: near=${nearMotion}, far=${farMotion}`)
  assert.deepEqual(rest, before, 'the renderer rest mesh remains reusable')
})

test('a released surface rebounds and settles back to its rest shape', async () => {
  const createSoftBody = await subject(), { rest, indices } = sphere(), body = createSoftBody(rest, indices)
  body.grab([.7, 0, .7]); body.drag([1.25, -.25, .9])
  for (let i = 0; i < 60; i++) body.step(1 / 60)
  const held = body.positions.slice()
  body.release()
  for (let i = 0; i < 360; i++) body.step(1 / 60)
  let heldError = 0, settledError = 0
  for (let i = 0; i < rest.length; i++) {
    heldError += (held[i] - rest[i]) ** 2
    settledError += (body.positions[i] - rest[i]) ** 2
  }
  assert.ok(Math.sqrt(heldError / rest.length) > .02)
  assert.ok(Math.sqrt(settledError / rest.length) < .008, `a released body must settle, rms=${Math.sqrt(settledError / rest.length)}`)
  assert.ok(settledError < heldError * .02)
})

test('duplicate seam vertices stay welded under deformation and local impulses move the mesh', async () => {
  const createSoftBody = await subject(), { rest, indices } = sphere(), body = createSoftBody(rest, indices)
  body.impulse([0, 0, 1], [.4, 0, -2])
  for (let i = 0; i < 10; i++) body.step(1 / 120)
  assert.ok(displacement(body.positions, rest, nearest(rest, [0, 0, 1])) > .01)
  const positionsByCoordinate = new Map()
  for (let i = 0; i < rest.length; i += 3) {
    const key = [rest[i], rest[i + 1], rest[i + 2]].map(value => Math.round(value * 1e5)).join(',')
    const first = positionsByCoordinate.get(key)
    if (first != null) assert.deepEqual(body.positions.slice(i, i + 3), body.positions.slice(first, first + 3), 'seam vertices must never split')
    else positionsByCoordinate.set(key, i)
  }
})

test('extreme frame gaps and repeated bounded grabs cannot invert or explode the body', async () => {
  const createSoftBody = await subject(), { rest, indices } = sphere(), body = createSoftBody(rest, indices)
  const initialVolume = volume(rest, indices)
  for (let cycle = 0; cycle < 18; cycle++) {
    body.grab([0, 0, 1]); body.drag([cycle % 2 ? 1e8 : -1e8, 1e8, 1e8])
    for (const dt of [NaN, Infinity, -1, 0, 1e-9, 10, 1 / 60, 1 / 90]) body.step(dt)
    body.release()
    for (let i = 0; i < 12; i++) body.step(1 / 60)
    assert.ok(body.positions.every(value => Number.isFinite(value) && Math.abs(value) < 3), 'pointer input must never produce non-finite or unbounded vertices')
    assert.ok(volume(body.positions, indices) / initialVolume > .8, 'an extreme interaction must not invert the body')
  }
  body.reset()
  assert.deepEqual(body.positions, rest)
})

test('deformed surface normals remain smooth across the original mesh seams', async () => {
  const createSoftBody = await subject(), { rest, indices } = sphere(), body = createSoftBody(rest, indices)
  body.grab([-1, 0, 0]); body.drag([-1.25, .3, .35])
  for (let i = 0; i < 20; i++) body.step(1 / 60)
  assert.ok(body.normals instanceof Float32Array, 'a welded deformable surface needs its own smooth normals')
  const firstByCoordinate = new Map()
  for (let i = 0; i < rest.length; i += 3) {
    assert.ok(Math.abs(Math.hypot(body.normals[i], body.normals[i + 1], body.normals[i + 2]) - 1) < 1e-5)
    const key = [rest[i], rest[i + 1], rest[i + 2]].map(value => Math.round(value * 1e5)).join(',')
    const first = firstByCoordinate.get(key)
    if (first != null) assert.deepEqual(body.normals.slice(i, i + 3), body.normals.slice(first, first + 3), 'split texture coordinates must not create a shading seam')
    else firstByCoordinate.set(key, i)
  }
})

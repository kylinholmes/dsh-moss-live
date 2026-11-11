import test from 'node:test'
import assert from 'node:assert/strict'
import { existsSync } from 'node:fs'

async function factory() {
  const module = existsSync('src/client/fluid-field.js') ? await import('../src/client/fluid-field.js') : {}
  assert.equal(typeof module.createFluidField, 'function', 'fog must have a stateful fluid solver rather than an animated noise texture')
  return module.createFluidField
}

test('MAC pressure projection removes injected compressibility with solid no-flux boundaries', async () => {
  const create = await factory(), field = create({ resolution: 10, count: 128, pressureIterations: 100, background: 0 })
  field.inject([.95, .35, .65], [1.3, .6, -.5], { radius: .40 })
  const before = field.divergenceRMS()
  assert.ok(before > .01)
  field.project()
  const after = field.divergenceRMS()
  assert.ok(after < before * .15, `divergence ${before} → ${after}`)
  assert.equal(field.diagnostics().boundaryFlux, 0)
  field.dispose()
})

test('touch transfers momentum and clears a local fog region while particles conserve their count', async () => {
  const create = await factory(), field = create({ resolution: 10, count: 1000, seed: 32, background: 0 })
  const before = field.positions.slice()
  const near = () => {
    let count = 0
    for (let i = 0; i < field.positions.length; i += 3) if (Math.hypot(field.positions[i], field.positions[i + 1], field.positions[i + 2] - 1.09) < .3) count++
    return count
  }
  const beforeContact = near()
  field.inject([0, 0, 1.09], [1.5, .3, -.3], { radius: .5, scatter: 2.5 })
  for (let i = 0; i < 24; i++) field.step(1 / 60)
  let displaced = 0
  for (let i = 0; i < before.length; i++) displaced += Math.abs(before[i] - field.positions[i])
  assert.ok(displaced > 25, 'particles must respond to the actual force, not just change their opacity')
  assert.ok(near() < beforeContact / 3, 'the impacted fog region must actually empty out')
  assert.equal(field.diagnostics().mass, 1000)
  assert.equal(field.positions.length, 3000)
  for (let i = 0; i < field.positions.length; i += 3) {
    assert.ok(Math.hypot(...field.positions.subarray(i, i + 3)) >= .939, 'fog cannot cross the solid sphere')
    assert.ok(field.positions.subarray(i, i + 3).every(value => Number.isFinite(value) && Math.abs(value) <= 1.7))
  }
  field.dispose()
})

test('fixed stepping agrees across render rates, bounds pause catch-up, and releases its state', async () => {
  const create = await factory(), a = create({ resolution: 8, count: 64, seed: 17 }), b = create({ resolution: 8, count: 64, seed: 17 })
  for (let i = 0; i < 30; i++) a.step(1 / 30)
  for (let i = 0; i < 60; i++) b.step(1 / 60)
  assert.deepEqual(a.positions, b.positions)
  const steps = a.step(60)
  assert.ok(steps <= 4, 'returning to a hidden tab must not simulate a minute on the UI thread')
  assert.ok(a.positions.every(Number.isFinite))
  a.dispose(); b.dispose()
  assert.equal(a.step(1), 0)
  assert.equal(a.positions.length, 0)
  assert.equal(a.diagnostics().allocatedBytes, 0)
})

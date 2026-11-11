import test from 'node:test'
import assert from 'node:assert/strict'
import Schema from '@deepseek-ai/schemastery'

const configModule = await import('../src/config.js').catch(error => {
  if (error.code !== 'ERR_MODULE_NOT_FOUND') throw error
  return {}
})

test('native settings schema survives JSON transport and browser rehydration', () => {
  const wire = JSON.parse(JSON.stringify(configModule.Config.toJSON()))
  assert.doesNotMatch(JSON.stringify(wire), /"type":"transform"/, 'DSH forms must not require executable callbacks or unsafe-eval')
  const rehydrated = new Schema(wire)
  const parsed = rehydrated(configModule.publicSettings(configModule.Config({})))
  assert.equal(parsed.appearance.get().color, '#58a9ef')
  assert.equal(parsed.voiceModel.get().provider, '')
})

test('chat settings reference a DSH model and keep provider secrets out of the client snapshot', () => {
  assert.equal(typeof configModule.Config, 'function', 'native Config must be exported')
  const config = configModule.Config({
    voiceModel: { provider: 'moss-office', model: 'moss-live-2.0' },
    delegation: { agentPreset: 'research', provider: 'spawn' },
    appearance: { color: '#58a9ef', particles: 48, diffusion: 70 },
  })
  const snapshot = configModule.publicSettings(config)
  assert.deepEqual(snapshot.voiceModel, { provider: 'moss-office', model: 'moss-live-2.0' })
  assert.equal(snapshot.appearance.particles, 48)
  assert.equal(snapshot.delegation.agentPreset, 'research')
  assert.deepEqual(snapshot.delegation.model, { provider: '', model: '' })
  const explicit = configModule.publicSettings(configModule.Config({ delegation: { model: { provider: 'native', model: 'worker-3' } } }))
  assert.deepEqual(explicit.delegation.model, { provider: 'native', model: 'worker-3' })
  assert.doesNotMatch(JSON.stringify(snapshot), /apiKey|baseURL|endpoint|secret/)
  assert.equal(config.appearance.get().kind, 'orb', 'appearance is a native volatile field')
})

test('appearance and model validation rejects invalid drafts without altering a previous snapshot', () => {
  assert.equal(typeof configModule.Config, 'function')
  const previous = configModule.publicSettings(configModule.Config({}))
  for (const appearance of [
    { color: 'not-a-color' }, { particles: -1 }, { particles: 129 }, { particles: 1.5 },
    { diffusion: 101 }, { kind: 'image', image: '' },
    { kind: 'image', image: 'data:image/svg+xml;base64,PHN2Zy8+' },
    { kind: 'image', image: 'blob:temporary-avatar' },
    { kind: 'image', image: 'data:image/png;base64,' + 'A'.repeat(400000) },
  ]) assert.throws(() => configModule.Config({ appearance }))
  assert.throws(() => configModule.Config({ voiceModel: { provider: '', model: 'ordinary-text-model' } }))
  assert.deepEqual(configModule.publicSettings(configModule.Config({ voiceModel: { provider: 'native-api', model: 'ordinary-text-model' } })).voiceModel,
    { provider: 'native-api', model: 'ordinary-text-model' }, 'model ids are opaque, compatibility belongs to the endpoint')
  assert.deepEqual(configModule.publicSettings(configModule.Config({})), previous)
})


import test from 'node:test'
import assert from 'node:assert/strict'
import { DshModels, realtimeURL } from '../src/host/dsh-models.js'

function fixture({ profile, key = 'native-private-key' } = {}) {
  const refs = []
  return { refs, models: new DshModels({
    llm: { listProviders: () => [{ id: 'native-api', name: 'DSH API' }],
      async listModels() { return [{ id: 'my-audio-model-2', name: 'My audio' }, { id: 'ordinary-model', name: 'Ordinary' }] },
      listConfigurableProviders: () => [{ provider: 'native-api', settingsNs: 'llm-pi-ai', settingsPath: ['providers', 'native-api'] }],
    },
    settings: { describe: () => [{ ns: 'llm-pi-ai', value: { providers: { 'native-api': profile ?? { baseURL: 'https://native.example/v1', api: 'openai-completions', apiKeyEnv: 'NATIVE_API_KEY' } } } }] },
    credentials: { async resolve(ref) { refs.push(ref); return key ? { value: key } : undefined } },
  }) }
}

test('voice reuses native DSH API configuration and offers every model without a name/provider whitelist', async () => {
  const { models, refs } = fixture()
  assert.deepEqual((await models.catalog()).map(model => model.model), ['my-audio-model-2', 'ordinary-model'])
  assert.deepEqual(refs, [])
  const connection = await models.connection({ provider: 'native-api', model: 'unlisted-future-3' })
  assert.equal(connection.model, 'unlisted-future-3')
  assert.equal(connection.baseURL, 'wss://native.example/v1/realtime')
  assert.equal(connection.apiKey, 'native-private-key')
  assert.deepEqual(refs, ['NATIVE_API_KEY'])
})

test('missing selection, provider and native credentials report not configured distinctly', async () => {
  const { models } = fixture({ key: '' })
  assert.throws(() => models.selection({ provider: '', model: '' }), { code: 'VOICE_NOT_CONFIGURED' })
  assert.throws(() => models.selection({ provider: 'removed', model: 'any' }), { code: 'VOICE_NOT_CONFIGURED' })
  await assert.rejects(models.connection({ provider: 'native-api', model: 'any' }), { code: 'VOICE_NOT_CONFIGURED' })
})

test('unsupported native connection information is incompatible, never a model-name error', async () => {
  const { models } = fixture({ profile: { baseURL: 'https://native.example', apiKeyEnv: '' } })
  await assert.rejects(models.connection({ provider: 'native-api', model: 'moss-live-2.0' }), { code: 'VOICE_INCOMPATIBLE' })
  for (const baseURL of ['ws://remote.example', 'wss://user:password@remote.example', 'https://remote.example?api_key=secret']) {
    assert.throws(() => realtimeURL(baseURL), { code: 'VOICE_INCOMPATIBLE' })
  }
  assert.equal(realtimeURL('http://127.0.0.1:12345/v1'), 'ws://127.0.0.1:12345/v1/realtime')
})

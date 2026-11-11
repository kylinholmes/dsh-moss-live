import test from 'node:test'
import assert from 'node:assert/strict'
import { once } from 'node:events'
import { WebSocketServer } from 'ws'
const { probeConnection } = await import('../src/host/probe.js').catch(() => ({}))

test('connection test negotiates the real protocol without microphone, history or tasks', async t => {
  assert.equal(typeof probeConnection, 'function')
  const server = new WebSocketServer({ host: '127.0.0.1', port: 0 })
  await once(server, 'listening')
  t.after(() => { for (const client of server.clients) client.terminate(); server.close() })
  const actions = []
  server.on('connection', socket => socket.on('message', (bytes, binary) => {
    assert.equal(binary, false)
    const event = JSON.parse(bytes)
    actions.push(event.action)
    const send = (action, data) => socket.send(JSON.stringify({ action, data }))
    if (event.action === 'attach_session') send('session_attached', { delegation: 'client' })
    if (event.action === 'session.update') send('session.updated', { error: '' })
    if (event.action === 'media.configure') send('media.configured', { error: '', input_audio: { format: 'pcm16', sample_rate: 16000, channels: 1 }, output_audio: { format: 'pcm16', sample_rate: 48000, channels: 1 } })
  }))
  const result = await probeConnection({ provider: 'native', model: 'opaque-next', baseURL: `ws://127.0.0.1:${server.address().port}/realtime`, apiKey: 'probe-fixture-key' })
  assert.equal(result.outputSampleRate, 48000)
  assert.deepEqual(actions, ['attach_session', 'session.update', 'media.configure'])
  assert.doesNotMatch(JSON.stringify(result), /key|baseURL|prompt/)
})

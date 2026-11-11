import test from 'node:test'
import assert from 'node:assert/strict'
import { once, EventEmitter } from 'node:events'
import { WebSocketServer } from 'ws'

const { MossSession } = await import('../src/host/moss-session.js').catch(error => {
  if (error.code !== 'ERR_MODULE_NOT_FOUND') throw error
  return {}
})

async function fixture(t) {
  assert.equal(typeof MossSession, 'function')
  const server = new WebSocketServer({ host: '127.0.0.1', port: 0 })
  await once(server, 'listening')
  t.after(() => { for (const client of server.clients) client.terminate(); server.close() })
  const peer = new EventEmitter()
  peer.readyState = 1; peer.bufferedAmount = 0; peer.sent = []
  peer.send = (data, options) => peer.sent.push(options?.binary ? data : JSON.parse(data))
  peer.close = () => { peer.readyState = 3; peer.emit('close') }
  const records = { users: new Map(), replies: [], configured: [] }
  const agent = { voice: {
    configure: data => records.configured.push(data), user: data => records.users.set(data.turn, data.text),
    reply: data => records.replies.push(data), end() {},
  } }
  const session = new MossSession({ peer, agent,
    connection: { provider: 'office', model: 'vendor/MOSS-2.0', baseURL: `ws://127.0.0.1:${server.address().port}/realtime`, apiKey: 'private-key' },
    prompt: { persona: { name: 'MOSS', prompt: '这是 DSH 人设' }, instructions: '这是会话指令', tools: [] },
  })
  t.after(() => session.stop())
  const connected = once(server, 'connection')
  const starting = session.start()
  const [upstream, request] = await connected
  const messages = []
  upstream.on('message', (data, binary) => { messages.push(binary ? data : JSON.parse(data)) })
  const until = async predicate => {
    for (let i = 0; i < 100; i++) { if (predicate()) return; await new Promise(resolve => setTimeout(resolve, 5)) }
    assert.fail('expected protocol state did not arrive')
  }
  const send = data => upstream.send(JSON.stringify(data))
  await until(() => messages.some(message => message.action === 'attach_session'))
  return { session, starting, upstream, request, messages, peer, records, send, until }
}

test('model id and Authorization are host-owned; microphone stays gated until both acknowledgements', async t => {
  const f = await fixture(t)
  assert.equal(new URL(f.request.url, 'http://localhost').searchParams.get('model'), 'vendor/MOSS-2.0')
  assert.equal(f.request.headers.authorization, 'Bearer private-key')
  f.peer.emit('message', Buffer.alloc(640), true)
  f.send({ action: 'session_attached', data: { session_id: 'vendor-a', delegation: 'client' } })
  await f.until(() => f.messages.some(message => message.action === 'session.update'))
  assert.equal(f.messages.find(message => message.action === 'session.update').session.persona.prompt, '这是 DSH 人设')
  f.send({ action: 'session.updated', data: { error: '' } })
  f.peer.emit('message', Buffer.alloc(640), true)
  assert.equal(f.messages.some(Buffer.isBuffer), false)
  f.send({ action: 'media.configured', data: { error: '', input_audio: { format: 'pcm16', sample_rate: 16000, channels: 1 }, output_audio: { format: 'pcm16', sample_rate: 48000, channels: 1 } } })
  await f.starting
  f.peer.emit('message', Buffer.alloc(640), true)
  await f.until(() => f.messages.some(Buffer.isBuffer))
  assert.equal(f.records.configured.length, 1)
  assert.doesNotMatch(JSON.stringify(f.peer.sent), /private-key|这是 DSH 人设/)
})

test('transcript revisions and reordered reply terminal events keep distinct opaque identities', async t => {
  const f = await fixture(t)
  f.send({ action: 'session_attached', data: { session_id: 'a', delegation: 'client' } })
  f.send({ action: 'session.updated', data: { error: '' } })
  f.send({ action: 'media.configured', data: { error: '', input_audio: { format: 'pcm16', sample_rate: 16000, channels: 1 }, output_audio: { format: 'pcm16', sample_rate: 48000, channels: 1 } } })
  await f.starting
  for (const event of [
    { action: 'input.transcript.done', data: { turn: 'user-1', text: '九点' } },
    { action: 'input.transcript.revised', data: { turn: 'user-1', text: '十点' } },
    { action: 'input.transcript.done', data: { turn: 'user-1', text: '九点' } },
    { action: 'response.ended', data: { run_id: 'r', turn_id: 'opaque-99', status: 'completed' } },
    { action: 'output.transcript.done', data: { run_id: 'r', turn_id: 'opaque-99', text: '好的' } },
    { action: 'response.ended', data: { run_id: 'r', turn_id: 'opaque-99', status: 'completed' } },
  ]) f.send(event)
  await f.until(() => f.records.replies.length === 1)
  assert.deepEqual([...f.records.users], [['user-1', '十点']])
  assert.deepEqual(f.records.replies[0], { run_id: 'r', turn_id: 'opaque-99', text: '好的', status: 'completed' })
})

test('configuration rejection closes safely without media or private error leakage', async t => {
  const f = await fixture(t)
  const rejected = assert.rejects(f.starting, /配置/)
  f.send({ action: 'session_attached', data: { session_id: 'a', delegation: 'client' } })
  f.send({ action: 'session.updated', data: { error: 'reject with private-key' } })
  await rejected
  assert.equal(f.messages.some(Buffer.isBuffer), false)
  assert.equal(f.records.configured.length, 0)
  assert.doesNotMatch(JSON.stringify(f.peer.sent), /private-key/)
})

test('forbidden browser controls and a slow browser close the connection without upstream injection', async t => {
  for (const kind of ['configuration', 'large-audio', 'slow-browser']) await t.test(kind, async t => {
    const f = await fixture(t)
    f.send({ action: 'session_attached', data: { delegation: 'client' } })
    f.send({ action: 'session.updated', data: { error: '' } })
    f.send({ action: 'media.configured', data: { error: '', input_audio: { format: 'pcm16', sample_rate: 16000, channels: 1 }, output_audio: { format: 'pcm16', sample_rate: 48000, channels: 1 } } })
    await f.starting
    if (kind === 'configuration') f.peer.emit('message', Buffer.from(JSON.stringify({ action: 'session.update', session: { instructions: 'browser override' } })), false)
    if (kind === 'large-audio') f.peer.emit('message', Buffer.alloc(32002), true)
    if (kind === 'slow-browser') { f.peer.bufferedAmount = 1024 * 1024; f.session.emit({ action: 'output.transcript.done', data: { text: 'slow' } }) }
    assert.equal(f.session.stopped, true)
    assert.equal(f.peer.readyState, 3)
    assert.equal(f.messages.some(message => message.session?.instructions === 'browser override'), false)
  })
})

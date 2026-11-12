import test from 'node:test'
import assert from 'node:assert/strict'

const { VoiceSessions, voiceCallState } = await import('../src/client/voice-sessions.js').catch(error => {
  if (error.code !== 'ERR_MODULE_NOT_FOUND') throw error
  return {}
})

const setup = () => {
  assert.equal(typeof VoiceSessions, 'function', 'independent native sessions need a call registry')
  const connections = [], media = []
  const calls = new VoiceSessions({
    async connect(id, receive) {
      const connection = { id, receive, closed: 0, sent: [], send(value) { this.sent.push(value) }, close() { this.closed++ } }
      connections.push(connection)
      return { connection, format: {} }
    },
    async openMedia() {
      const resource = { disposed: 0, mute() {}, dispose() { this.disposed++ }, playback: { interruptAll() {} } }
      media.push(resource)
      return resource
    },
  })
  return { calls, connections, media }
}

test('switching voice sessions pauses the previous call and preserves independent captions and mute', async () => {
  const { calls, connections, media } = setup()
  await calls.start('moss-live-a')
  connections[0].receive({ action: 'input.transcript.final', data: { text: 'A 的问题' } })
  connections[0].receive({ action: 'output.transcript.final', data: { text: 'A 的回复' } })
  calls.mute('moss-live-a')
  await calls.start('moss-live-b')
  connections[1].receive({ action: 'output.transcript.final', data: { text: 'B 的回复' } })
  assert.equal(voiceCallState(calls.getSnapshot(), 'moss-live-a').phase, 'paused')
  assert.equal(voiceCallState(calls.getSnapshot(), 'moss-live-a').muted, true)
  assert.equal(voiceCallState(calls.getSnapshot(), 'moss-live-b').muted, false)
  assert.equal(media[0].disposed, 1)
  assert.equal(connections[0].closed, 1)
  calls.select('moss-live-a')
  assert.equal(voiceCallState(calls.getSnapshot(), 'moss-live-b').phase, 'paused')
  assert.equal(connections.length, 2, 'view selection must not automatically open a microphone')
  await calls.start('moss-live-a')
  const a = voiceCallState(calls.getSnapshot(), 'moss-live-a')
  assert.equal(a.phase, 'listening')
  assert.equal(a.muted, true)
  assert.equal(a.userText, 'A 的问题')
  assert.equal(a.assistantText, 'A 的回复')
  assert.equal(voiceCallState(calls.getSnapshot(), 'moss-live-b').assistantText, 'B 的回复')
  calls.stop('moss-live-b')
  assert.equal(voiceCallState(calls.getSnapshot(), 'moss-live-a').phase, 'listening', 'ending B cannot stop A')
  calls.dispose()
  assert.ok(media.every(item => item.disposed === 1))
})

test('same-session history keeps the connection while ordinary text selection pauses and clears voice focus', async () => {
  const { calls, connections } = setup()
  await calls.start('moss-live-a')
  calls.select('moss-live-a')
  calls.select('moss-live-a')
  assert.equal(connections[0].closed, 0)
  calls.select(null)
  assert.equal(calls.getSnapshot().selectedId, null)
  assert.equal(voiceCallState(calls.getSnapshot(), 'moss-live-a').phase, 'paused')
  calls.pause('moss-live-unknown')
  assert.equal(calls.getSnapshot().selectedId, null, 'controls do not implicitly select another conversation')
  calls.dispose()
})

test('switching away during microphone permission aborts the old call and ignores a late grant', async () => {
  assert.equal(typeof VoiceSessions, 'function')
  const grants = [], closed = [], disposed = []
  const calls = new VoiceSessions({
    async connect(id) { return { connection: { send() {}, close() { closed.push(id) } }, format: {} } },
    openMedia() { const grant = Promise.withResolvers(); grants.push(grant); return grant.promise },
  })
  const first = calls.start('moss-live-a')
  await new Promise(resolve => setImmediate(resolve))
  const second = calls.start('moss-live-b')
  await new Promise(resolve => setImmediate(resolve))
  grants[1].resolve({ dispose() { disposed.push('b') }, playback: { interruptAll() {} } })
  await second
  grants[0].resolve({ dispose() { disposed.push('a') } })
  await first
  assert.equal(calls.getSnapshot().selectedId, 'moss-live-b')
  assert.equal(voiceCallState(calls.getSnapshot(), 'moss-live-a').phase, 'paused')
  assert.equal(voiceCallState(calls.getSnapshot(), 'moss-live-b').phase, 'listening')
  assert.deepEqual(disposed, ['a'])
  assert.deepEqual(closed, ['moss-live-a'])
  calls.dispose()
})

test('native retention changes during pause cannot recursively close the previous call', async () => {
  assert.equal(typeof VoiceSessions, 'function')
  let closes = 0, calls
  calls = new VoiceSessions({
    async connect() { return { connection: { send() {}, close() {
      closes++
      if (closes < 4) calls.select('moss-live-b')
    } }, format: {} } },
    async openMedia() { return { dispose() {}, playback: { interruptAll() {} } } },
  })
  await calls.start('moss-live-a')
  calls.select('moss-live-b')
  assert.equal(closes, 1, 'retention release may synchronously emit another native selection notification')
  assert.equal(calls.getSnapshot().selectedId, 'moss-live-b')
  calls.dispose()
})

import test from 'node:test'
import assert from 'node:assert/strict'
const { VoiceController } = await import('../src/client/controller.js').catch(error => {
  if (error.code !== 'ERR_MODULE_NOT_FOUND') throw error
  return {}
})

test('late microphone grant is released after stop and cannot affect a newer call', async () => {
  assert.equal(typeof VoiceController, 'function')
  const grants = [], connections = [], disposed = []
  const controller = new VoiceController({
    async connect(_id, receive) {
      const connection = { send() {}, close() { this.closed = true }, receive }
      connections.push(connection)
      return { connection, format: { inputSampleRate: 16000, outputSampleRate: 48000 } }
    },
    async openMedia() {
      const grant = Promise.withResolvers(); grants.push(grant)
      return grant.promise
    },
  })
  const first = controller.start('moss-live-a')
  await new Promise(resolve => setImmediate(resolve))
  controller.stop()
  const second = controller.start('moss-live-b')
  await new Promise(resolve => setImmediate(resolve))
  grants[1].resolve({ dispose() { disposed.push('b') }, mute() {}, playback: { dispose() {} } })
  await second
  grants[0].resolve({ dispose() { disposed.push('a') } })
  await first
  assert.deepEqual(disposed, ['a'])
  assert.equal(controller.getSnapshot().sessionId, 'moss-live-b')
  assert.equal(controller.getSnapshot().phase, 'listening')
  assert.equal(connections[0].closed, true)
  controller.minimize()
  assert.equal(connections[1].closed, undefined, 'view detachment is presentation only')
  controller.dispose()
  assert.deepEqual(disposed, ['a', 'b'])
  assert.equal(connections[1].closed, true)
})

test('transport failure releases media and leaves an actionable error', async () => {
  assert.equal(typeof VoiceController, 'function')
  let receive, released = 0
  const controller = new VoiceController({
    async connect(_id, handler) { receive = handler; return { connection: { send() {}, close() {} }, format: {} } },
    async openMedia() { return { dispose() { released++ }, playback: { dispose() {} } } },
  })
  await controller.start('moss-live-a')
  receive({ action: 'moss.error', data: { message: 'MOSS 连接已断开，请重新开始语音。' } })
  assert.equal(released, 1)
  assert.equal(controller.getSnapshot().phase, 'error')
  assert.match(controller.getSnapshot().error, /重新开始/)
  controller.dispose()
})

test('returning to a saved voice session changes the viewed target without replacing an ongoing call', async () => {
  let closed = 0, expanded
  const controller = new VoiceController({
    async connect() { return { connection: { send() {}, close() { closed++ } }, format: {} } },
    async openMedia() { return { dispose() {}, playback: { interruptAll() {} } } },
  })
  await controller.start('moss-live-current')
  controller.onExpand = id => { expanded = id }
  controller.expand('moss-live-saved')
  assert.equal(controller.getSnapshot().sessionId, 'moss-live-current')
  assert.equal(controller.getSnapshot().viewSessionId, 'moss-live-saved')
  assert.equal(controller.getSnapshot().minimized, true, 'the other call keeps its own return control')
  assert.equal(expanded, 'moss-live-saved')
  assert.equal(closed, 0)
  controller.expand()
  assert.equal(expanded, 'moss-live-current')
  assert.equal(controller.getSnapshot().minimized, false)
  controller.dispose()
})

test('orb activity follows actual input/output levels and speaking lasts through queued playback', async () => {
  let receive, levels
  const playback = { seconds: .2, interruptAll() {} }
  const controller = new VoiceController({
    async connect(_id, handler) { receive = handler; return { connection: { send() {}, close() {} }, format: {} } },
    async openMedia(_format, _audio, _send, _signal, handler) { levels = handler; return { playback, dispose() {} } },
  })
  await controller.start('moss-live-levels')
  levels({ inputLevel: .3, outputLevel: .8, playing: true })
  receive({ action: 'response.ended', data: {} })
  assert.equal(controller.getSnapshot().phase, 'speaking')
  assert.equal(controller.getSnapshot().energy, .8)
  playback.seconds = 0
  levels({ inputLevel: .3, outputLevel: 0, playing: false })
  assert.equal(controller.getSnapshot().phase, 'listening')
  assert.equal(controller.getSnapshot().energy, .3)
  controller.dispose()
  assert.equal(controller.getSnapshot().energy, 0)
})

test('muting before connection or microphone grant gates upload and is applied to adopted resources', async t => {
  for (const moment of ['connection', 'microphone']) await t.test(moment, async () => {
    const connected = Promise.withResolvers(), granted = Promise.withResolvers()
    const sent = [], applied = []
    let upload
    const connection = { send: data => sent.push(data), close() {} }
    const controller = new VoiceController({
      connect: () => connected.promise,
      openMedia(_format, audio) { upload = audio; return granted.promise },
    })
    const starting = controller.start('moss-live-muted')
    if (moment === 'connection') controller.mute()
    connected.resolve({ connection, format: {} })
    await new Promise(resolve => setImmediate(resolve))
    if (moment === 'microphone') controller.mute()
    upload(new ArrayBuffer(2))
    granted.resolve({ mute: value => applied.push(value), dispose() {}, playback: { interruptAll() {} } })
    await starting
    upload(new ArrayBuffer(2))
    assert.equal(sent.filter(value => value instanceof ArrayBuffer).length, 0)
    assert.equal(sent.at(-1).enabled, false)
    assert.deepEqual(applied, [true])
    controller.mute()
    upload(new ArrayBuffer(2))
    assert.equal(sent.filter(value => value instanceof ArrayBuffer).length, 1)
    controller.dispose()
  })
})

test('view switches preserve the call; pause and resume release media but retain session identity and mute', async () => {
  const connected = [], closed = [], released = []
  const controller = new VoiceController({
    async connect(id) { connected.push(id); return { connection: { send() {}, close() { closed.push(id) } }, format: {} } },
    async openMedia() { return { mute() {}, dispose() { released.push(true) }, playback: { interruptAll() {} } } },
  })
  await controller.start('moss-live-same')
  controller.mute(); controller.minimize(); controller.expand()
  assert.equal(connected.length, 1)
  assert.equal(closed.length, 0)
  assert.equal(controller.getSnapshot().muted, true)
  controller.minimize(); controller.pause()
  assert.equal(controller.getSnapshot().phase, 'paused')
  assert.equal(controller.getSnapshot().minimized, true)
  assert.equal(controller.getSnapshot().sessionId, 'moss-live-same')
  assert.equal(released.length, 1)
  await controller.start('moss-live-same')
  assert.deepEqual(connected, ['moss-live-same', 'moss-live-same'])
  assert.equal(controller.getSnapshot().muted, true)
  assert.equal(controller.getSnapshot().phase, 'listening')
  controller.dispose()
})

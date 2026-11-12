import test from 'node:test'
import assert from 'node:assert/strict'

const { AudioOutput } = await import('../src/client/audio-output.js').catch(error => {
  if (error.code !== 'ERR_MODULE_NOT_FOUND') throw error
  return {}
})

function setup(saved = '') {
  assert.equal(typeof AudioOutput, 'function', 'output selection must route real playback media')
  const devices = new EventTarget()
  devices.rows = [{ kind: 'audiooutput', deviceId: 'speaker', label: '扬声器' }, { kind: 'audiooutput', deviceId: 'headset', label: '耳机' }]
  devices.enumerateDevices = async () => devices.rows
  const storage = { value: saved, getItem() { return this.value }, setItem(_key, value) { this.value = value } }
  const probes = []
  class Audio {
    constructor() { this.closed = false; probes.push(this) }
    async setSinkId(id) { this.sinkId = id }
    async close() { this.closed = true }
  }
  const output = new AudioOutput({ devices, Audio, storage, t: key => key })
  return { output, devices, storage, probes }
}

test('output selection routes current and future call media and detaches released media', async () => {
  const { output, storage } = setup()
  const first = [], second = []
  const detach = await output.attach({ async setOutputDevice(id) { first.push(id) } })
  await output.select('headset')
  assert.equal(output.getSnapshot().selectedId, 'headset')
  assert.equal(storage.value, 'headset')
  assert.deepEqual(first, ['', 'headset'])
  detach()
  const detachSecond = await output.attach({ async setOutputDevice(id) { second.push(id) } })
  await output.select('speaker')
  assert.deepEqual(first, ['', 'headset'], 'released media cannot be routed again')
  assert.deepEqual(second, ['headset', 'speaker'])
  detachSecond(); output.dispose()
})

test('a failed device change keeps the previous output and reports a useful error', async () => {
  const { output, storage } = setup()
  const actual = { id: '', async setOutputDevice(id) {
    if (id === 'denied') throw new DOMException('private hardware diagnostic', 'NotAllowedError')
    if (id === 'missing') throw new DOMException('not connected', 'NotFoundError')
    this.id = id
  } }
  await output.attach(actual)
  await output.select('headset')
  await assert.rejects(output.select('denied'))
  assert.equal(actual.id, 'headset')
  assert.equal(output.getSnapshot().selectedId, 'headset')
  assert.equal(storage.value, 'headset')
  assert.equal(output.getSnapshot().error, 'output.denied')
  await assert.rejects(output.select('missing'))
  assert.equal(actual.id, 'headset')
  assert.equal(output.getSnapshot().error, 'output.unavailable', 'a rejected choice must not claim the current device changed to default')
  output.dispose()
})

test('unplugged or stale saved output falls back to system default without breaking the call', async () => {
  const { output, devices, storage } = setup('headset')
  const routed = []
  await output.attach({ async setOutputDevice(id) { routed.push(id) } })
  devices.rows = devices.rows.filter(row => row.deviceId !== 'headset')
  await output.refresh()
  assert.equal(output.getSnapshot().selectedId, '')
  assert.equal(output.getSnapshot().error, 'output.disconnected')
  assert.equal(storage.value, '')
  assert.deepEqual(routed, ['headset', ''])
  const stale = setup('missing').output
  await stale.attach({ async setOutputDevice(id) { if (id) throw new DOMException('gone', 'NotFoundError') } })
  assert.equal(stale.getSnapshot().selectedId, '')
  assert.equal(stale.getSnapshot().error, 'output.disconnected')
  output.dispose(); stale.dispose()
})

test('choosing before a call validates with a temporary AudioContext and unsupported browsers stay honest', async () => {
  const { output, probes } = setup()
  await output.select('headset')
  assert.equal(probes.length, 1)
  assert.equal(probes[0].sinkId, 'headset')
  assert.equal(probes[0].closed, true)
  const unsupported = new AudioOutput({ devices: {}, Audio: class {}, storage: null, t: key => key })
  assert.equal(unsupported.getSnapshot().supported, false)
  await assert.rejects(unsupported.select('headset'))
  assert.equal(unsupported.getSnapshot().error, 'output.unsupported')
  output.dispose(); unsupported.dispose()
})

test('output permission is requested by a user action and fallback microphone tracks are released', async () => {
  const { output, devices } = setup()
  let requested = 0
  devices.selectAudioOutput = async () => { requested++; return { deviceId: 'headset', label: '耳机' } }
  await output.authorize()
  assert.equal(requested, 1)
  assert.equal(output.getSnapshot().selectedId, 'headset')
  delete devices.selectAudioOutput
  let stopped = 0
  devices.getUserMedia = async () => ({ getTracks: () => [{ stop() { stopped++ } }] })
  await output.authorize()
  assert.equal(stopped, 1)
  output.dispose()
})

import test from 'node:test'
import assert from 'node:assert/strict'
const { Playback } = await import('../src/client/playback.js').catch(error => {
  if (error.code !== 'ERR_MODULE_NOT_FOUND') throw error
  return {}
})

test('playback confirms actual chunks, stops at the unfinished head and deduplicates completion', () => {
  assert.equal(typeof Playback, 'function')
  const sources = [], acks = []
  const context = { currentTime: 0, destination: {},
    createBuffer(_channels, length, rate) { return { duration: length / rate, copyToChannel() {} } },
    createBufferSource() {
      const source = { connect() {}, start(at) { this.at = at }, stop() {}, disconnect() {} }
      sources.push(source); return source
    },
  }
  const playback = new Playback(context, event => acks.push(event), 48000)
  const meta = { run_id: 'r', turn_id: 'opaque' }
  for (const chunk_id of ['1', '2', '3']) playback.enqueue({ ...meta, chunk_id }, new ArrayBuffer(9600))
  playback.done(meta)
  assert.equal(acks.length, 0)
  context.currentTime = 0.15
  sources[0].onended()
  playback.interrupt(meta)
  assert.deepEqual(acks.map(event => event.action), ['playback.chunk.completed', 'playback.stopped'])
  assert.equal(acks[1].played_audio_ms, 50, 'exclude the completed first chunk and unplayed third chunk')
  sources[1].onended?.(); sources[2].onended?.()
  assert.equal(acks.length, 2, 'late onended cannot acknowledge discarded buffers')
})

test('audio.done waits for actual final playback and completes an empty reply once', () => {
  assert.equal(typeof Playback, 'function')
  const acks = []
  const playback = new Playback({}, event => acks.push(event), 48000)
  const meta = { run_id: 'r', turn_id: 't' }
  playback.done(meta); playback.done(meta)
  assert.equal(acks.length, 1)
  assert.equal(acks[0].action, 'playback.completed')
})

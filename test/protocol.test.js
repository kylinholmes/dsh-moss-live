import test from 'node:test'
import assert from 'node:assert/strict'
import { initialState, reduce, ackChunk, ackCompleted, ackStopped } from '../lib/protocol.js'

test('ack 三字段齐全', () => {
  assert.deepEqual(ackChunk({ run_id: 'r', turn_id: '1', chunk_id: '2' }), {
    action: 'playback.chunk.completed', run_id: 'r', turn_id: '1', chunk_id: '2',
  })
  assert.deepEqual(ackCompleted({ run_id: 'r', turn_id: '1' }), {
    action: 'playback.completed', run_id: 'r', turn_id: '1',
  })
  assert.deepEqual(ackStopped({ run_id: 'r', turn_id: '1' }, 320), {
    action: 'playback.stopped', run_id: 'r', turn_id: '1', played_audio_ms: 320,
  })
  assert.deepEqual(ackStopped({ run_id: 'r', turn_id: '1' }), {
    action: 'playback.stopped', run_id: 'r', turn_id: '1', played_audio_ms: 0,
  })
})

test('ack 缺字段时报错', () => {
  assert.throws(() => ackChunk({ run_id: 'r', turn_id: '1' }), /missing required ack field chunk_id/)
  assert.throws(() => ackCompleted({ run_id: 'r' }), /missing required ack field turn_id/)
  assert.throws(() => ackStopped({ run_id: 'r' }), /missing required ack field turn_id/)
  assert.throws(() => ackChunk({ run_id: '', turn_id: '1', chunk_id: '2' }), /missing required ack field run_id/)
  assert.throws(() => ackChunk(null), /ack metadata object is required/)
})

test('字幕是全量替换', () => {
  let s = initialState()
  s = reduce(s, { action: 'output.transcript.updated', data: { text: '你' } }).state
  assert.equal(s.assistantText, '你')
  s = reduce(s, { action: 'output.transcript.updated', data: { text: '你好' } }).state
  assert.equal(s.assistantText, '你好')
})

test('说话状态迁移', () => {
  const listening = reduce(initialState(), { action: 'input.speech.started', data: {} }).state
  assert.equal(listening.phase, 'listening')
  const thinking = reduce(listening, { action: 'input.speech.stopped', data: {} }).state
  assert.equal(thinking.phase, 'thinking')
  const speaking = reduce(thinking, { action: 'response.audio.started', data: { run_id: 'r' } }).state
  assert.equal(speaking.phase, 'speaking')
  const played = reduce(speaking, { action: 'playback.progress', data: { played_audio_ms: 640 } }).state
  assert.equal(played.playedMs, 640)
  const ended = reduce(played, { action: 'response.ended', data: {} }).state
  assert.equal(ended.phase, 'listening')
  assert.equal(ended.playedMs, 0)
})

test('audio.context 记下归属，下一条二进制帧用它', () => {
  const s = reduce(initialState(), {
    action: 'response.audio.context',
    data: { run_id: 'r', turn_id: '1', chunk_id: '3' },
  })
  assert.equal(s.state.playback.length, 0)
  assert.deepEqual(s.state.lastChunk, { run_id: 'r', turn_id: '1', chunk_id: '3' })
})

test('response.audio.stop 清空播放队列', () => {
  let r = reduce(initialState(), { action: 'response.audio.context', data: { run_id: 'r', turn_id: '1', chunk_id: '1' } })
  r = reduce(r.state, { action: 'response.audio.stop', data: { run_id: 'r', turn_id: '1', reason: 'barge_in' } })
  assert.equal(r.state.phase, 'listening')
  assert.equal(r.state.playback.length, 0)
  assert.equal(r.effects[0].payload.action, 'playback.stopped')
  assert.equal(r.effects[0].payload.played_audio_ms, 0)
})

test('stop 缺 ack id 时不抛错也不发确认', () => {
  const r = reduce(initialState(), { action: 'response.audio.stop', data: {} })
  assert.equal(r.state.phase, 'listening')
  assert.equal(r.state.playback.length, 0)
  assert.equal(r.state.playedMs, 0)
  assert.equal(r.effects.some(effect => effect.kind === 'send'), false)
  assert.deepEqual(r.effects, [{ kind: 'warn', message: 'stop event missing ack ids' }])

  const partial = reduce(initialState(), { action: 'response.audio.stop', data: { run_id: 'r' } })
  assert.equal(partial.state.phase, 'listening')
  assert.equal(partial.effects.some(effect => effect.kind === 'send'), false)
})

test('打断时上报真实已播放毫秒', () => {
  let s = reduce(initialState(), { action: 'response.audio.started', data: { run_id: 'r' } }).state
  s = reduce(s, { action: 'playback.progress', data: { played_audio_ms: 1840 } }).state
  assert.equal(s.playedMs, 1840)
  const r = reduce(s, { action: 'response.audio.stop', data: { run_id: 'r', turn_id: '1' } })
  assert.equal(r.effects[0].payload.action, 'playback.stopped')
  assert.equal(r.effects[0].payload.played_audio_ms, 1840)
  assert.equal(r.state.playedMs, 0)
})

test('新一轮回复重置已播放毫秒', () => {
  let s = reduce(initialState(), { action: 'playback.progress', data: { played_audio_ms: 900 } }).state
  s = reduce(s, { action: 'response.audio.started', data: { run_id: 'r2' } }).state
  assert.equal(s.playedMs, 0)
  const r = reduce(s, { action: 'response.audio.stop', data: { run_id: 'r2', turn_id: '2' } })
  assert.equal(r.effects[0].payload.played_audio_ms, 0)
})

test('错误事件产出退出效果', () => {
  const playing = reduce(initialState(), { action: 'playback.progress', data: { played_audio_ms: 320 } }).state
  assert.equal(playing.playedMs, 320)
  const r = reduce(playing, { action: 'error', data: { error: { code: 'invalid_public_request' } } })
  assert.equal(r.state.phase, 'error')
  assert.equal(r.state.playedMs, 0)
  assert.equal(r.effects[0].kind, 'exit')
  assert.equal(r.effects[0].message, 'invalid_public_request')
})

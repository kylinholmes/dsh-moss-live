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
  const ended = reduce(speaking, { action: 'response.ended', data: {} }).state
  assert.equal(ended.phase, 'listening')
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

test('错误事件产出退出效果', () => {
  const r = reduce(initialState(), { action: 'error', data: { error: { code: 'invalid_public_request' } } })
  assert.equal(r.state.phase, 'error')
  assert.equal(r.effects[0].kind, 'exit')
  assert.equal(r.effects[0].message, 'invalid_public_request')
})

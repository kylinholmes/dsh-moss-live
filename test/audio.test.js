import test from 'node:test'
import assert from 'node:assert/strict'
import { FRAME_SAMPLES, downsample, toInt16Frame, silenceFrame, peakOf } from '../lib/audio.js'

test('帧长是 20ms × 16k', () => {
  assert.equal(FRAME_SAMPLES, 320)
})

test('48k 降到 16k 长度变三分之一', () => {
  const input = new Float32Array(960).fill(0.5)
  assert.equal(downsample(input, 3).length, 320)
})

test('采样值夹到 int16 范围', () => {
  assert.equal(toInt16Frame(new Float32Array([1, -1]))[0], 32767)
  assert.equal(toInt16Frame(new Float32Array([1, -1]))[1], -32768)
})

test('静音帧全零且定长', () => {
  const frame = silenceFrame()
  assert.equal(frame.length, FRAME_SAMPLES)
  assert.ok(frame.every((v) => v === 0))
})

test('峰值计算', () => {
  assert.equal(peakOf(new Float32Array([0, 0.25, -0.5])), 0.5)
})

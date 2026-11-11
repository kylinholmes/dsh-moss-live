import test from 'node:test'
import assert from 'node:assert/strict'
import vm from 'node:vm'
import { captureWorklet } from '../src/client/capture-worklet.js'

test('worklet resampling keeps fractional position across blocks and emits PCM16 little endian', () => {
  let Processor
  const frames = []
  vm.runInNewContext(captureWorklet, {
    AudioWorkletProcessor: class { port = { postMessage(buffer) { frames.push(buffer) } } },
    sampleRate: 48000, registerProcessor(_name, constructor) { Processor = constructor },
  })
  const capture = new Processor()
  for (let block = 0; block < 48; block++) {
    const samples = Float32Array.from({ length: 128 }, (_, i) => Math.sin((block * 128 + i) / 100))
    capture.process([[samples]])
  }
  assert.equal(frames.length, 6)
  for (const [frameIndex, frame] of frames.entries()) {
    assert.equal(frame.byteLength, 640)
    const view = new DataView(frame)
    for (let index = 0; index < 320; index++) {
      const sample = Math.fround(Math.sin(((frameIndex * 320 + index) * 3) / 100))
      const expected = Math.trunc(sample * (sample < 0 ? 32768 : 32767))
      assert.ok(Math.abs(view.getInt16(index * 2, true) - expected) <= 1)
    }
  }
})

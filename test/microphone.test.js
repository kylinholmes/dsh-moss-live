import test from 'node:test'
import assert from 'node:assert/strict'
const { MicrophoneCheck } = await import('../src/client/microphone.js').catch(() => ({}))

test('microphone check requests access and releases even a late grant after closing', async () => {
  assert.equal(typeof MicrophoneCheck, 'function')
  const grant = Promise.withResolvers(); let stopped = 0
  const check = new MicrophoneCheck({ getUserMedia: () => grant.promise })
  const starting = check.start()
  check.stop()
  grant.resolve({ getTracks: () => [{ stop() { stopped++ } }] })
  await starting
  assert.equal(stopped, 1)
  assert.equal(check.getSnapshot().active, false)
  const denied = new MicrophoneCheck({ getUserMedia: async () => { throw Object.assign(new Error(), { name: 'NotAllowedError' }) } })
  await assert.rejects(denied.start())
  assert.equal(denied.getSnapshot().permission, 'denied')
  check.dispose(); denied.dispose()
})

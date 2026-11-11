import test from 'node:test'
import assert from 'node:assert/strict'
import { openMedia } from '../src/client/browser.js'
import { MicrophoneCheck } from '../src/client/microphone.js'

test('missing, denied and busy microphones have the same actionable errors in voice and settings', async () => {
  const previous = Object.getOwnPropertyDescriptor(globalThis, 'navigator')
  const messages = {
    'media.notFound': '未检测到麦克风。请连接或启用麦克风后重试。',
    'media.denied': '麦克风权限被拒绝，请在浏览器站点设置中允许麦克风。',
    'media.busy': '无法读取麦克风，请检查系统权限或其他应用是否占用。',
  }
  try {
    for (const [name, code] of [['NotFoundError', 'MIC_NOT_FOUND'], ['NotAllowedError', 'MIC_PERMISSION_DENIED'], ['NotReadableError', 'MIC_UNREADABLE']]) {
      const devices = { async getUserMedia() { throw new DOMException('Requested device not found / private browser diagnostic', name) } }
      Object.defineProperty(globalThis, 'navigator', { configurable: true, value: { mediaDevices: devices } })
      const translate = key => messages[key] ?? key
      let voiceError
      await assert.rejects(openMedia({}, () => {}, () => {}, new AbortController().signal, () => {}, translate), error => {
        voiceError = error
        return error.code === code && !error.message.includes('Requested device') && Object.values(messages).includes(error.message)
      })
      const check = new MicrophoneCheck(devices, translate)
      await assert.rejects(check.start())
      assert.equal(check.getSnapshot().error, voiceError.message)
      assert.equal(check.getSnapshot().active, false)
      assert.equal(check.getSnapshot().permission, name === 'NotAllowedError' ? 'denied' : 'prompt')
      check.dispose()
    }
  } finally {
    if (previous) Object.defineProperty(globalThis, 'navigator', previous)
    else delete globalThis.navigator
  }
})

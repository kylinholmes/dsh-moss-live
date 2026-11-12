import { Playback } from './playback.js'
import { captureWorklet } from './capture-worklet.js'
import { requestMicrophone } from './media-access.js'

export function connect(sessionId, receive, signal, t = key => key) {
  return new Promise((resolve, reject) => {
    const url = new URL('/dsh-moss-live/ws', location.href)
    url.protocol = location.protocol === 'https:' ? 'wss:' : 'ws:'
    url.searchParams.set('sessionId', sessionId)
    const socket = new WebSocket(url)
    socket.binaryType = 'arraybuffer'
    let ready = false, closed = false
    const close = () => { closed = true; socket.close() }
    const abort = () => { close(); reject(new Error(t('browser.1'))) }
    const connection = {
      send(data) {
        if (socket.readyState !== WebSocket.OPEN || closed) return
        if (socket.bufferedAmount > 512 * 1024) {
          receive({ action: 'moss.error', data: { message: t('browser.2') } }); close(); return
        }
        socket.send(data instanceof ArrayBuffer ? data : JSON.stringify(data))
      }, close,
    }
    signal.addEventListener('abort', abort, { once: true })
    socket.onmessage = event => {
      try {
        const data = event.data instanceof ArrayBuffer ? event.data : JSON.parse(event.data)
        if (data.action === 'moss.ready') { ready = true; resolve({ connection, format: data.data }) }
        else if (data.action === 'moss.error') {
          if (!ready) reject(Object.assign(new Error(data.data.message), { code: data.data.code }))
          else receive(data)
        } else receive(data)
      } catch { reject(new Error(t('browser.3'))); close() }
    }
    socket.onerror = () => {
      const message = t('browser.4')
      reject(new Error(message))
      if (ready) receive({ action: 'moss.error', data: { message } })
    }
    socket.onclose = () => {
      signal.removeEventListener('abort', abort)
      if (!closed) {
        const message = t('browser.5')
        reject(new Error(message))
        if (ready) receive({ action: 'moss.error', data: { message } })
      }
    }
    if (signal.aborted) abort()
  })
}

export async function openMedia(format, onAudio, send, signal, onLevels = () => {}, t = key => key) {
  let stream, context, node, source, silent, url, playback, meter, inputLevel = 0, disposed = false
  const dispose = () => {
    disposed = true
    signal.removeEventListener('abort', dispose)
    clearInterval(meter)
    if (node) node.port.onmessage = null
    node?.disconnect(); source?.disconnect(); silent?.disconnect()
    node = source = silent = null
    stream?.getTracks().forEach(track => track.stop())
    stream = null
    playback?.dispose()
    playback = null
    if (url) { URL.revokeObjectURL(url); url = null }
    if (context && context.state !== 'closed') void context.close().catch(() => {})
    context = null
  }
  signal.addEventListener('abort', dispose, { once: true })
  try {
    signal.throwIfAborted()
    stream = await requestMicrophone(navigator.mediaDevices, { audio: { channelCount: 1, echoCancellation: true, noiseSuppression: true, autoGainControl: true } }, t)
    signal.throwIfAborted()
    const Audio = globalThis.AudioContext ?? globalThis.webkitAudioContext
    context = new Audio({ sampleRate: 48000 })
    await context.resume()
    signal.throwIfAborted()
    if (!context.audioWorklet) throw new Error(t('browser.7'))
    url = URL.createObjectURL(new Blob([captureWorklet], { type: 'application/javascript' }))
    await context.audioWorklet.addModule(url)
    URL.revokeObjectURL(url); url = null
    signal.throwIfAborted()
    node = new AudioWorkletNode(context, 'moss-capture')
    source = context.createMediaStreamSource(stream)
    silent = context.createGain(); silent.gain.value = 0
    source.connect(node); node.connect(silent); silent.connect(context.destination)
    node.port.onmessage = event => {
      if (signal.aborted) return
      const view = new DataView(event.data)
      let sum = 0
      for (let i = 0; i < view.byteLength; i += 2) { const value = view.getInt16(i, true) / 32768; sum += value * value }
      inputLevel = Math.min(1, Math.sqrt(sum / Math.max(1, view.byteLength / 2)) * 4)
      onAudio(event.data)
    }
    playback = new Playback(context, send, format.outputSampleRate, t)
    meter = setInterval(() => { if (!signal.aborted) onLevels({ inputLevel, outputLevel: playback.level(), playing: playback.seconds > 0 }) }, 80)
    return { playback, dispose, mute(value) { stream?.getAudioTracks().forEach(track => { track.enabled = !value }) },
      async setOutputDevice(id) {
        if (disposed) throw new DOMException('Media was released', 'AbortError')
        if (typeof context.setSinkId === 'function') await context.setSinkId(id)
        else if (id) throw new Error(t('output.unsupported'))
      },
    }
  } catch (error) {
    dispose()
    throw error
  }
}

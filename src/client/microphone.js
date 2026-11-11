import { requestMicrophone } from './media-access.js'

export class MicrophoneCheck {
  constructor(mediaDevices, t = key => key) {
    this.devices = mediaDevices
    this.t = t
    this.listeners = new Set(); this.generation = 0
    this.snapshot = { active: false, pending: false, permission: 'prompt', error: '' }
    this.getSnapshot = () => this.snapshot
    this.subscribe = listener => { this.listeners.add(listener); return () => this.listeners.delete(listener) }
  }
  patch(value) { this.snapshot = { ...this.snapshot, ...value }; for (const listener of this.listeners) listener() }
  async refresh() {
    try {
      const permission = await navigator.permissions.query({ name: 'microphone' })
      if (this.disposed) return
      this.permission = permission
      permission.onchange = () => this.patch({ permission: permission.state })
      this.patch({ permission: permission.state })
    } catch { /* Permission API is optional; getUserMedia remains authoritative. */ }
  }
  async start() {
    if (this.stream) return
    const generation = ++this.generation
    this.patch({ pending: true, error: '' })
    try {
      const stream = await requestMicrophone(this.devices, { audio: true }, this.t)
      if (generation !== this.generation) { for (const track of stream.getTracks()) track.stop(); return }
      this.stream = stream
      for (const track of stream.getTracks()) track.onended = () => this.stop()
      this.patch({ active: true, pending: false, permission: 'granted' })
      const Audio = globalThis.AudioContext ?? globalThis.webkitAudioContext
      if (Audio) {
        this.context = new Audio()
        await this.context.resume()
        if (generation !== this.generation) return
        this.source = this.context.createMediaStreamSource(stream)
        this.analyser = this.context.createAnalyser(); this.analyser.fftSize = 512
        this.source.connect(this.analyser)
        const samples = new Float32Array(512)
        this.meter = setInterval(() => {
          this.analyser.getFloatTimeDomainData(samples)
          this.patch({ level: Math.min(1, Math.sqrt(samples.reduce((sum, value) => sum + value * value, 0) / samples.length) * 4) })
        }, 80)
      }
    } catch (error) {
      if (generation === this.generation) { this.stop(); this.patch({ active: false, pending: false,
        permission: error.code === 'MIC_PERMISSION_DENIED' ? 'denied' : this.snapshot.permission,
        error: error.code?.startsWith('MIC_') ? error.message : this.t('microphone.2') }) }
      throw error
    }
  }
  stop() {
    this.generation++
    clearInterval(this.meter); this.source?.disconnect(); this.analyser?.disconnect()
    if (this.context && this.context.state !== 'closed') void this.context.close().catch(() => {})
    this.context = null; this.source = null; this.analyser = null
    for (const track of this.stream?.getTracks() ?? []) { track.onended = null; track.stop() }
    this.stream = null; this.patch({ active: false, pending: false, level: 0 })
  }
  dispose() { this.disposed = true; if (this.permission) this.permission.onchange = null; this.stop(); this.listeners.clear() }
}

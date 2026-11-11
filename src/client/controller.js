/** Owned by the plugin, never a mounted view. Dependencies keep lifecycle races testable. */
export class VoiceController {
  constructor(dependencies) {
    this.dependencies = dependencies
    this.t = dependencies.t ?? (key => key)
    this.listeners = new Set()
    this.generation = 0
    this.snapshot = { phase: 'idle', sessionId: null, minimized: false, muted: false, userText: '', assistantText: '', error: '' }
  }
  getSnapshot = () => this.snapshot
  subscribe = listener => { this.listeners.add(listener); return () => this.listeners.delete(listener) }
  patch(values) { this.snapshot = { ...this.snapshot, ...values }; for (const listener of this.listeners) listener() }
  async start(sessionId) {
    if (this.disposed) return
    if (this.snapshot.sessionId === sessionId && this.snapshot.phase !== 'idle' && this.snapshot.phase !== 'error') { this.expand(); return }
    this.stop()
    const generation = this.generation
    const current = () => generation === this.generation && !this.disposed
    const pending = [], maxPending = 512 * 1024
    let pendingBytes = 0
    this.patch({ sessionId, viewSessionId: sessionId, phase: 'connecting', minimized: false, muted: false, userText: '', assistantText: '', error: '' })
    const abort = new AbortController()
    this.abort = abort
    try {
      const { connection, format } = await this.dependencies.connect(sessionId, event => {
        if (!current()) return
        if (event.action === 'moss.error') return this.failure(event.data.message, event.data.code)
        if (!this.media) {
          pendingBytes += event instanceof ArrayBuffer ? event.byteLength : JSON.stringify(event).length
          if (pendingBytes > maxPending || pending.length > 128) return this.failure(this.t('controller.1'))
          pending.push(event)
        } else this.receive(event)
      }, abort.signal)
      if (!current()) { connection.close(); return }
      this.connection = connection
      const media = await this.dependencies.openMedia(format, bytes => {
        if (current() && this.connection) this.connection.send(bytes)
      }, event => { if (current()) this.connection?.send(event) }, abort.signal, levels => {
        if (!current()) return
        this.patch({ energy: levels.playing ? levels.outputLevel : this.snapshot.muted ? 0 : levels.inputLevel,
          phase: levels.playing ? 'speaking' : this.snapshot.phase === 'speaking' ? 'listening' : this.snapshot.phase })
      })
      if (!current()) { media.dispose(); return }
      this.media = media
      this.patch({ phase: 'listening' })
      for (const event of pending) this.receive(event)
    } catch (error) {
      if (current()) this.failure(error.message || this.t('controller.2'), error.code)
    }
  }
  receive(event) {
    try {
      if (event instanceof ArrayBuffer) {
        if (!this.chunk) throw new Error(this.t('controller.3'))
        this.media.playback.enqueue(this.chunk, event)
        this.chunk = null
        return
      }
      const data = event.data ?? {}
      if (event.action.startsWith('input.transcript.')) this.patch({ userText: data.text ?? '' })
      if (event.action.startsWith('output.transcript.')) this.patch({ assistantText: data.text ?? '' })
      if (event.action === 'input.speech.started') this.patch({ phase: 'listening' })
      if (event.action === 'input.speech.stopped') this.patch({ phase: 'thinking' })
      if (event.action === 'response.audio.started') this.patch({ phase: 'speaking' })
      if (event.action === 'response.audio.context') this.chunk = data
      if (event.action === 'response.audio.done') this.media.playback.done(data)
      if (event.action === 'response.audio.stop') { this.media.playback.interrupt(data); this.patch({ phase: 'listening' }) }
      if ((event.action === 'response.ended' || event.action === 'response.interrupted') && !this.media.playback.seconds) this.patch({ phase: 'listening' })
    } catch (error) { this.failure(error.message) }
  }
  failure(error, errorCode) { this.stop(); this.patch({ phase: 'error', error, errorCode }) }
  mute() {
    const muted = !this.snapshot.muted
    this.media?.mute(muted)
    this.connection?.send({ action: 'mic_state', enabled: !muted })
    this.patch({ muted })
  }
  interrupt() { this.media?.playback.interruptAll(); this.patch({ phase: 'listening' }) }
  minimize() { this.patch({ minimized: true }) }
  expand(viewSessionId = this.snapshot.sessionId) {
    this.patch({ viewSessionId, minimized: Boolean(this.snapshot.sessionId && viewSessionId !== this.snapshot.sessionId) })
    this.onExpand?.(viewSessionId)
  }
  stop() {
    ++this.generation
    this.abort?.abort(); this.abort = null
    this.media?.playback?.interruptAll?.()
    this.media?.dispose(); this.media = null
    this.connection?.close(); this.connection = null
    this.chunk = null
    this.patch({ phase: 'idle', minimized: false, muted: false, energy: 0 })
  }
  dispose() { this.stop(); this.disposed = true; this.listeners.clear() }
}

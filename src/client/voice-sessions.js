import { VoiceController } from './controller.js'
import { activeVoice } from './voice-state.js'

export const voiceCallState = (snapshot, id) => snapshot.calls[id] ?? {
  sessionId: id, phase: 'paused', muted: false, energy: 0, userText: '', assistantText: '', error: '',
}

/** Browser resources belong to a native Session, never to the last mounted view. */
export class VoiceSessions {
  constructor(dependencies) {
    this.dependencies = dependencies
    this.controllers = new Map()
    this.listeners = new Set()
    this.snapshot = { selectedId: null, calls: {}, historyBars: [] }
  }
  getSnapshot = () => this.snapshot
  subscribe = listener => { this.listeners.add(listener); return () => this.listeners.delete(listener) }
  patch(values) {
    this.snapshot = { ...this.snapshot, ...values }
    for (const listener of this.listeners) listener()
  }
  get(id) {
    if (!id?.startsWith('moss-live-')) throw new Error('A native voice Session is required')
    if (!this.controllers.has(id)) {
      const call = new VoiceController(this.dependencies)
      call.patch({ sessionId: id, phase: 'paused' })
      call.subscribe(() => this.patch({ calls: { ...this.snapshot.calls, [id]: call.getSnapshot() } }))
      this.controllers.set(id, call)
      this.patch({ calls: { ...this.snapshot.calls, [id]: call.getSnapshot() } })
    }
    return this.controllers.get(id)
  }
  select(id) {
    if (this.disposed || this.snapshot.selectedId === id) return
    const previous = this.controllers.get(this.snapshot.selectedId)
    if (previous && activeVoice(previous.getSnapshot().phase)) previous.pause()
    this.patch({ selectedId: id })
  }
  start(id) {
    if (this.disposed) return Promise.resolve()
    const call = this.get(id)
    this.select(id)
    return call.start(id)
  }
  pause(id) { this.controllers.get(id)?.pause() }
  mute(id) { this.controllers.get(id)?.mute() }
  stop(id) { this.controllers.get(id)?.stop() }
  stopAll() { for (const call of this.controllers.values()) call.stop() }
  dispose() {
    this.disposed = true
    for (const call of this.controllers.values()) call.dispose()
    this.controllers.clear()
    this.listeners.clear()
  }
}

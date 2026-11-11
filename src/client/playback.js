const keyOf = meta => JSON.stringify([meta.run_id, meta.turn_id])

export class Playback {
  constructor(context, send, sampleRate, t = key => key) {
    Object.assign(this, { context, send, sampleRate, t })
    this.runs = new Map()
    this.tail = 0
    this.seconds = 0
  }
  run(meta) {
    const key = keyOf(meta)
    if (!this.runs.has(key)) this.runs.set(key, { meta, items: [], chunks: new Set(), done: false, settled: false })
    if (this.runs.size > 4096) throw new Error(this.t('playback.1'))
    return this.runs.get(key)
  }
  enqueue(meta, bytes) {
    const run = this.run(meta)
    if (run.settled || run.chunks.has(meta.chunk_id)) return
    run.chunks.add(meta.chunk_id)
    const view = new DataView(bytes)
    const samples = new Float32Array(view.byteLength / 2)
    for (let i = 0; i < samples.length; i++) samples[i] = view.getInt16(i * 2, true) / 32768
    const duration = samples.length / this.sampleRate
    if (this.seconds + duration > 12) throw new Error(this.t('playback.2'))
    const at = Math.max(this.context.currentTime, this.tail)
    const energy = Math.min(1, Math.sqrt(samples.reduce((sum, value) => sum + value * value, 0) / Math.max(1, samples.length)) * 4)
    const item = { meta, at, duration, energy, ended: false, cancelled: false }
    run.items.push(item)
    this.seconds += duration
    this.tail = at + duration
    const finish = () => {
      if (item.ended || item.cancelled) return
      item.ended = true
      this.seconds -= duration
      item.source?.disconnect()
      this.send({ action: 'playback.chunk.completed', ...meta })
      this.complete(run)
    }
    if (!samples.length) return finish()
    const buffer = this.context.createBuffer(1, samples.length, this.sampleRate)
    buffer.copyToChannel(samples, 0)
    const source = this.context.createBufferSource()
    item.source = source
    source.buffer = buffer
    source.connect(this.context.destination)
    source.onended = finish
    source.start(at)
  }
  done(meta) { const run = this.run(meta); run.done = true; this.complete(run) }
  complete(run) {
    if (!run.done || run.settled || run.items.some(item => !item.ended)) return
    run.settled = true
    this.send({ action: 'playback.completed', run_id: run.meta.run_id, turn_id: run.meta.turn_id })
  }
  interrupt(meta) {
    const run = this.run(meta)
    if (run.settled) return
    const now = this.context.currentTime
    // onended may still be queued on the main thread: acknowledge real elapsed buffers first.
    for (const item of run.items) {
      if (!item.ended && !item.cancelled && now >= item.at + item.duration) item.source?.onended?.()
    }
    const head = run.items.find(item => !item.ended && !item.cancelled)
    const played = head ? Math.round(Math.max(0, Math.min(head.duration, now - head.at)) * 1000) : 0
    this.cancel(run)
    this.send({ action: 'playback.stopped', run_id: meta.run_id, turn_id: meta.turn_id, played_audio_ms: played })
  }
  cancel(run) {
    run.settled = true
    for (const item of run.items) if (!item.ended && !item.cancelled) {
      item.cancelled = true
      this.seconds -= item.duration
      if (item.source) { item.source.onended = null; item.source.stop(); item.source.disconnect() }
    }
    this.tail = Math.max(this.context.currentTime, ...[...this.runs.values()].flatMap(entry => entry.items.filter(item => !item.ended && !item.cancelled).map(item => item.at + item.duration)))
  }
  interruptAll() { for (const run of this.runs.values()) if (!run.settled) this.interrupt(run.meta) }
  level() {
    const now = this.context.currentTime
    for (const run of this.runs.values()) for (const item of run.items) if (!item.ended && !item.cancelled && now >= item.at && now < item.at + item.duration) return item.energy
    return 0
  }
  dispose() { for (const run of this.runs.values()) this.cancel(run); this.runs.clear() }
}

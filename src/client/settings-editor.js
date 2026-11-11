/** A pending edit buffer; the native ConfigForm remains the accepted document. */
export class SettingsEditor {
  constructor(form, { delay = 300 } = {}) {
    Object.assign(this, { form, delay })
    this.pending = new Map(); this.listeners = new Set(); this.status = 'saved'
    this.getSnapshot = () => this.snapshot
    this.subscribe = listener => { this.listeners.add(listener); return () => this.listeners.delete(listener) }
    this.off = form.subscribe(() => this.publish())
    this.publish()
  }
  publish() {
    const native = this.form.getSnapshot()
    this.snapshot = { ...native, value: native.value && { ...native.value, ...Object.fromEntries(this.pending) }, status: this.status }
    for (const listener of this.listeners) listener()
  }
  edit(group, value) {
    if (this.disposed || !this.form.getSnapshot().writable) return
    if (!this.pending.size && !this.inFlight) this.revision = this.form.getSnapshot().revision
    this.pending.set(group, value)
    if (!['conflict', 'error'].includes(this.status)) { this.status = 'pending'; this.schedule() }
    this.publish()
  }
  schedule() { clearTimeout(this.timer); this.timer = setTimeout(() => void this.flush(), this.delay) }
  flush() {
    clearTimeout(this.timer)
    if (this.inFlight) return this.inFlight
    if (!this.pending.size || ['conflict', 'error'].includes(this.status)) return Promise.resolve()
    const batch = new Map(this.pending)
    let complete
    const flight = new Promise(resolve => { complete = resolve })
    this.inFlight = flight; this.status = 'saving'; this.publish()
    void (async () => {
      try {
        const accepted = await this.form.mutate([...batch].map(([field, value]) => ({ op: 'set', path: [field], value })), this.revision)
        if (accepted) {
          for (const [field, value] of batch) if (this.pending.get(field) === value) this.pending.delete(field)
          this.revision = this.form.getSnapshot().revision
          this.status = this.pending.size ? 'pending' : 'saved'
        } else this.status = 'conflict'
      } catch { this.status = 'error' }
      finally {
        this.inFlight = undefined; this.publish()
        if (!this.disposed && this.status === 'pending') this.schedule()
        complete()
      }
    })()
    return flight
  }
  retry() { this.revision = this.form.getSnapshot().revision; this.status = 'pending'; return this.flush() }
  discard() { clearTimeout(this.timer); this.pending.clear(); this.status = 'saved'; this.publish() }
  /** Stop accepting edits and wait for accepted writes; conflicts and failures retain pending values. */
  dispose() {
    if (this.disposal) return this.disposal
    this.disposed = true; clearTimeout(this.timer); this.off(); this.listeners.clear()
    this.disposal = (async () => {
      while (this.inFlight || (this.pending.size && !['conflict', 'error'].includes(this.status))) await this.flush()
    })()
    return this.disposal
  }
}

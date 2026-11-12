const preferenceKey = 'dsh-moss-live.audio-output'
const messageKey = error => error?.name === 'NotAllowedError' ? 'output.denied'
  : error?.name === 'NotFoundError' ? 'output.unavailable' : 'output.failed'
const browserStorage = () => { try { return globalThis.localStorage } catch { return undefined } }

/** Device ids are origin/browser-local; they never enter shared DSH configuration. */
export class AudioOutput {
  constructor({ devices = globalThis.navigator?.mediaDevices, Audio = globalThis.AudioContext ?? globalThis.webkitAudioContext,
    storage = browserStorage(), t = key => key } = {}) {
    Object.assign(this, { devices, Audio, storage, t })
    this.listeners = new Set()
    this.media = new Set()
    let selectedId = ''
    try { selectedId = storage?.getItem(preferenceKey) ?? '' } catch {}
    this.snapshot = { supported: typeof Audio?.prototype?.setSinkId === 'function', selectedId,
      devices: [{ id: '', label: t('output.default') }], open: false, busy: false, error: '' }
    this.changed = () => { void this.refresh().catch(() => {}) }
    devices?.addEventListener?.('devicechange', this.changed)
  }
  getSnapshot = () => this.snapshot
  subscribe = listener => { this.listeners.add(listener); return () => this.listeners.delete(listener) }
  patch(values) {
    if (this.disposed) return
    this.snapshot = { ...this.snapshot, ...values }
    for (const listener of this.listeners) listener()
  }
  remember(selectedId) {
    if (this.disposed) return
    try { this.storage?.setItem(preferenceKey, selectedId) } catch {}
    this.patch({ selectedId })
  }
  queue(task) {
    const next = (this.pending ?? Promise.resolve()).then(() => this.disposed ? undefined : task())
    this.pending = next.catch(() => {})
    return next
  }
  open() { this.patch({ open: true }); void this.refresh().catch(() => {}) }
  close() { this.patch({ open: false }) }
  async refresh() {
    if (!this.snapshot.supported || !this.devices?.enumerateDevices) return
    try {
      const rows = await this.devices.enumerateDevices()
      if (this.disposed) return
      const choices = new Map([['', { id: '', label: this.t('output.default') }]])
      for (const row of rows) if (row.kind === 'audiooutput' && row.deviceId && row.deviceId !== 'default') {
        choices.set(row.deviceId, { id: row.deviceId, label: row.label || this.t('output.unnamed') })
      }
      this.patch({ devices: [...choices.values()] })
      if (this.snapshot.selectedId && !choices.has(this.snapshot.selectedId)) {
        await this.select('')
        this.patch({ error: this.t('output.disconnected') })
      }
    } catch (error) { this.patch({ error: this.t(messageKey(error)) }); throw error }
  }
  async authorize() {
    if (!this.snapshot.supported) return
    let stream
    try {
      // Invoke the browser chooser synchronously within the button's user activation.
      if (this.devices?.selectAudioOutput) {
        const chosen = await this.devices.selectAudioOutput({ deviceId: this.snapshot.selectedId })
        if (this.disposed) return
        await this.refresh()
        await this.select(chosen.deviceId === 'default' ? '' : chosen.deviceId)
      } else {
        stream = await this.devices.getUserMedia({ audio: true })
        stream.getTracks().forEach(track => track.stop()); stream = null
        if (!this.disposed) await this.refresh()
      }
    } catch (error) { this.patch({ error: this.t(messageKey(error)) }); throw error }
    finally { stream?.getTracks().forEach(track => track.stop()) }
  }
  select(id) {
    return this.queue(async () => {
      this.patch({ busy: true, error: '' })
      try {
        if (!this.snapshot.supported && id) throw Object.assign(new Error(), { code: 'OUTPUT_UNSUPPORTED' })
        if (this.media.size) {
          for (const media of this.media) await media.setOutputDevice(id)
        } else if (id) {
          const probe = new this.Audio()
          try { await probe.setSinkId(id) } finally { await probe.close() }
        }
        this.remember(id)
      } catch (error) {
        this.patch({ error: this.t(error.code === 'OUTPUT_UNSUPPORTED' ? 'output.unsupported' : messageKey(error)) })
        throw error
      } finally { this.patch({ busy: false }) }
    })
  }
  async attach(media) {
    this.media.add(media)
    try {
      await this.queue(async () => {
        const id = this.snapshot.supported ? this.snapshot.selectedId : ''
        try { await media.setOutputDevice(id) }
        catch (error) {
          if (!id || error.name === 'AbortError') throw error
          await media.setOutputDevice('')
          this.remember('')
          this.patch({ error: this.t('output.disconnected') })
        }
      })
    } catch (error) { this.media.delete(media); throw error }
    return () => this.media.delete(media)
  }
  dispose() {
    this.disposed = true
    this.devices?.removeEventListener?.('devicechange', this.changed)
    this.media.clear()
    this.listeners.clear()
  }
}

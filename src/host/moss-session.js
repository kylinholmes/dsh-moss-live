import { randomUUID } from 'node:crypto'
import { WebSocket } from 'ws'
import { attributionHeaders } from '@deepseek-ai/dsh-llm'

const LIMIT = 512 * 1024
const identity = data => typeof data?.run_id === 'string' && typeof data?.turn_id === 'string'
  && data.run_id && data.turn_id ? JSON.stringify([data.run_id, data.turn_id]) : null
const visible = /^(input\.(speech\.|transcript\.)|output\.transcript\.|response\.(audio\.|ended$|interrupted$))/

/** One host-owned protocol connection. The browser has media capability only. */
export class MossSession {
  constructor(options) {
    Object.assign(this, options)
    this.epoch = randomUUID()
    this.pending = new Map()
    this.finished = new Set()
    this.inputs = new Map()
    this.acks = new Set()
    this.allowedChunks = new Set()
    this.inputCounter = 0
    this.ready = false
    this.stopped = false
    this.started = Promise.withResolvers()
    // Attach an observer immediately; start() still exposes rejection to its caller.
    this.started.promise.catch(() => {})
  }
  start() {
    if (this.socket) return this.started.promise
    const url = new URL(this.connection.baseURL)
    url.searchParams.set('model', this.connection.model)
    this.socket = new WebSocket(url, {
      headers: { ...attributionHeaders(), Authorization: `Bearer ${this.connection.apiKey}` },
      followRedirects: false, handshakeTimeout: 10000, maxPayload: LIMIT, perMessageDeflate: false,
    })
    // Do not retain credentials after constructing the handshake.
    this.connection = { provider: this.connection.provider, model: this.connection.model }
    this.timer = setTimeout(() => this.fail(this.opened ? '不兼容：所选 API 未确认当前实时语音协议。' : '语音连接超时，请检查网络。', this.opened ? 'VOICE_INCOMPATIBLE' : 'VOICE_CONNECTION_FAILED'), 15000)
    this.timer.unref?.()
    this.socket.on('open', () => { this.opened = true; this.send({ action: 'attach_session', delegation: { type: 'client' } }) })
    this.socket.on('unexpected-response', (_request, response) => {
      response.resume()
      if ([401, 403].includes(response.statusCode)) this.fail('未配置：所选 API 的凭据无效或未获授权，请在 DSH 模型设置中检查。', 'VOICE_NOT_CONFIGURED')
      else this.fail('不兼容：所选 API 不支持当前实时语音协议。', 'VOICE_INCOMPATIBLE')
    })
    this.socket.on('message', (bytes, binary) => {
      if (this.stopped) return
      try { this.receive(bytes, binary) } catch { this.fail('不兼容：所选 API 返回了无法识别的实时语音数据。', 'VOICE_INCOMPATIBLE') }
    })
    this.socket.on('error', () => this.fail('无法连接 MOSS，请检查模型地址和 DSH 凭据。'))
    this.socket.on('close', () => { if (!this.stopped) this.fail(this.opened && !this.ready ? '不兼容：所选 API 在完成语音协议协商前关闭了连接。' : 'MOSS 连接已断开，请重新开始语音。', this.opened && !this.ready ? 'VOICE_INCOMPATIBLE' : 'VOICE_CONNECTION_FAILED') })
    this.clientMessage = (bytes, binary) => {
      if (this.stopped) return
      try { this.fromBrowser(bytes, binary) } catch { this.fail('语音控制消息无效，连接已停止。') }
    }
    this.clientClose = () => this.stop()
    this.peer.on('message', this.clientMessage)
    this.peer.on('close', this.clientClose)
    if (this.peer.readyState !== WebSocket.OPEN) this.stop()
    return this.started.promise
  }
  send(data) {
    if (this.stopped || this.socket.readyState !== WebSocket.OPEN) return false
    if (this.socket.bufferedAmount > LIMIT) { this.fail('MOSS 网络发送积压，请重新开始语音。'); return false }
    this.socket.send(Buffer.isBuffer(data) ? data : JSON.stringify(data))
    return true
  }
  emit(data, binary = false) {
    if (this.peer.readyState !== WebSocket.OPEN) return
    if (this.peer.bufferedAmount > LIMIT) { this.fail('浏览器音频接收积压，请重新开始语音。'); return }
    this.peer.send(binary ? data : JSON.stringify(data), { binary })
  }
  fromBrowser(bytes, binary) {
    if (this.probe) return
    if (!this.ready) return // never retain pre-configuration microphone data
    if (binary) {
      if (!bytes.length || bytes.length > 32000 || bytes.length % 2) throw new Error('Invalid PCM')
      return this.send(bytes)
    }
    if (bytes.length > 4096) throw new Error('Large control')
    const event = JSON.parse(bytes.toString())
    if (event.action === 'mic_state' && typeof event.enabled === 'boolean') return this.send({ action: 'mic_state', enabled: event.enabled })
    if (!['playback.chunk.completed', 'playback.completed', 'playback.stopped'].includes(event.action)) throw new Error('Forbidden control')
    const key = identity(event)
    if (!key || !(this.pending.has(key) || this.finished.has(key))) throw new Error('Unknown playback')
    const ack = { action: event.action, run_id: event.run_id, turn_id: event.turn_id }
    if (event.action === 'playback.chunk.completed') {
      const chunk = JSON.stringify([event.run_id, event.turn_id, event.chunk_id])
      if (!this.allowedChunks.delete(chunk)) return
      ack.chunk_id = event.chunk_id
    }
    if (event.action === 'playback.stopped') {
      if (!Number.isFinite(event.played_audio_ms) || event.played_audio_ms < 0 || event.played_audio_ms > 300000) throw new Error('Invalid progress')
      ack.played_audio_ms = Math.round(event.played_audio_ms)
    }
    const stamp = JSON.stringify(ack)
    if (this.acks.has(stamp)) return
    this.acks.add(stamp)
    if (this.acks.size > 8192) throw new Error('Playback limit')
    this.send(ack)
  }
  receive(bytes, binary) {
    if (binary) {
      if (!this.ready || !this.chunk || bytes.length % 2) throw new Error('Unpaired audio')
      this.allowedChunks.add(JSON.stringify([this.chunk.run_id, this.chunk.turn_id, this.chunk.chunk_id]))
      this.chunk = null
      if (this.allowedChunks.size > 1024) throw new Error('Playback backlog')
      this.emit(bytes, true)
      return
    }
    const event = JSON.parse(bytes.toString())
    const data = event.data ?? {}
    if (event.action === 'error') return this.fail('MOSS 拒绝了当前请求，请检查模型配置。')
    if (event.action === 'session_attached' && !this.updateSent) {
      if (data.delegation !== 'client') throw new Error('Delegation unavailable')
      this.updateSent = true
      if (this.voice) {
        this.send({ action: 'change_voice', voice_name: this.voice })
      } else this.configure()
      return
    }
    if (event.action === 'voice_changed' && data.name === this.voice && !this.configSent) return this.configure()
    if (event.action === 'session.updated' && this.configSent && !this.configured) {
      if (data.error !== '') return this.fail('不兼容：所选 API 未接受当前语音人设或会话配置。', 'VOICE_INCOMPATIBLE')
      this.configured = true
    }
    if (event.action === 'media.configured' && this.configSent && !this.media) {
      const input = data.input_audio, output = data.output_audio
      if (data.error !== '' || input?.format !== 'pcm16' || input.sample_rate !== 16000 || input.channels !== 1
        || output?.format !== 'pcm16' || ![16000, 24000, 48000].includes(output.sample_rate) || output.channels !== 1) {
        return this.fail('不兼容：所选 API 未接受支持的音频格式配置。', 'VOICE_INCOMPATIBLE')
      }
      this.media = { inputSampleRate: 16000, outputSampleRate: output.sample_rate }
    }
    if (this.configured && this.media && !this.ready) {
      if (!this.probe) this.agent.voice.configure({ epoch: this.epoch, route: this.connection, prompt: this.prompt.persona.prompt + '\n\n' + this.prompt.instructions })
      this.ready = true
      clearTimeout(this.timer)
      if (!this.probe) this.send({ action: 'mic_state', enabled: true })
      this.emit({ action: 'moss.ready', data: this.media })
      this.started.resolve(this)
    }
    if (!this.ready || this.probe) return
    const unkeyedTranscript = event.action.startsWith('output.transcript.') || event.action === 'response.interrupted'
    // Optional ids can only refer to an unambiguous, already identified reply.
    const key = identity(data) ?? (unkeyedTranscript && this.pending.size === 1 ? this.pending.keys().next().value : null)
    if (key && !this.finished.has(key) && !this.pending.has(key)) {
      if (this.pending.size > 32 || this.finished.size > 4096) throw new Error('Response limit')
      this.pending.set(key, { run_id: data.run_id, turn_id: data.turn_id, text: '' })
    }
    if (event.action === 'input.transcript.done' || event.action === 'input.transcript.revised') {
      if (typeof data.text !== 'string' || [...data.text].length > 32000) throw new Error('Transcript limit')
      const turn = data.turn ?? `unidentified-${++this.inputCounter}`
      const previous = this.inputs.get(turn)
      // A replayed old final cannot revert a newer revision.
      if (!previous?.revised || event.action.endsWith('revised')) {
        this.inputs.set(turn, { revised: event.action.endsWith('revised') })
        this.agent.voice.user({ turn, text: data.text })
      }
      if (this.inputs.size > 4096) throw new Error('Input limit')
    }
    if (event.action === 'response.audio.context') {
      if (!key || typeof data.chunk_id !== 'string' || this.chunk) throw new Error('Invalid audio context')
      this.chunk = data
    }
    const reply = key && this.pending.get(key)
    if (reply) {
      if (event.action.startsWith('output.transcript.')) {
        if (typeof data.text !== 'string' || data.text.length > 128000) throw new Error('Transcript limit')
        reply.text = data.text
        if (event.action.endsWith('.done')) reply.final = true
      }
      if (event.action === 'response.ended' || event.action === 'response.interrupted') {
        reply.status = event.action.endsWith('interrupted') ? 'aborted' : data.status
        if (!['completed', 'aborted', 'failed'].includes(reply.status)) throw new Error('Invalid response status')
        if (typeof data.text === 'string') reply.text = data.text
        if (!reply.timer) reply.timer = setTimeout(() => this.finish(key), 1500)
        if (reply.status !== 'completed') reply.final = true
      }
      if (reply.status && reply.final) this.finish(key)
    }
    if (event.action === 'session.delegation.created') this.onDelegation?.(data)
    if (event.action === 'session.delegation.cancelled') this.onCancelDelegation?.(data.delegation_id)
    if (visible.test(event.action)) this.emit(event)
  }
  configure() {
    this.configSent = true
    this.send({ action: 'session.update', session: this.prompt })
    this.send({ action: 'media.configure', profile: 'standard', input_audio: { format: 'pcm16' }, output_audio: { format: 'pcm16', sample_rate: 48000 }, playback: 'client' })
  }
  finish(key) {
    const reply = this.pending.get(key)
    if (!reply) return
    clearTimeout(reply.timer)
    this.pending.delete(key)
    this.finished.add(key)
    this.agent.voice.reply({ run_id: reply.run_id, turn_id: reply.turn_id, text: reply.text, status: reply.status ?? 'aborted' })
  }
  fail(message, code = 'VOICE_CONNECTION_FAILED') {
    if (this.stopped) return
    if (this.peer.readyState === WebSocket.OPEN && this.peer.bufferedAmount <= LIMIT) {
      this.peer.send(JSON.stringify({ action: 'moss.error', data: { message, code } }))
    }
    this.started.reject(Object.assign(new Error(message), { code, publicMessage: message }))
    this.stop()
  }
  stop() {
    if (this.stopped) return
    this.stopped = true
    clearTimeout(this.timer)
    for (const key of this.pending.keys()) this.finish(key)
    if (this.ready && !this.probe) this.agent.voice.end()
    this.started.reject(new Error('MOSS 语音连接已停止。'))
    this.peer.off('message', this.clientMessage)
    this.peer.off('close', this.clientClose)
    if (this.socket?.readyState === WebSocket.CONNECTING) this.socket.terminate()
    else this.socket?.close(1000)
    if (this.peer.readyState === WebSocket.OPEN) this.peer.close(1000)
    this.onStop?.()
  }
}

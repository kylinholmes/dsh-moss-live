/**
 * dsh-moss-live —— 客户端：一个极简的全双工语音面板。
 *
 * 交互：右下角一颗麦克风按钮 → 点开后全屏毛玻璃面板，中间一颗会呼吸的球。
 * 说话即可，模型边听边说；打断自然发生。字幕只在底部两行，其余元素尽量删掉。
 *
 * 音频链路：
 *   麦克风 → AudioContext(16k) → PCM16 → ws 0x00 前缀帧 → 宿主代理 → MOSS
 *   MOSS → 48k PCM 帧 → 播放队列 → 播放完成回 ack
 */
window.__ModuleLoader__.load({
  id: 'dsh-moss-live',
  factory: (require) => {
    const WS_PATH = '/dsh-moss-live/ws'
    const CONFIG_PATH = '/dsh-moss-live/config'
    const MIC_RATE = 16000
    const FRAME_MS = 20
    const FRAME_SAMPLES = (MIC_RATE * FRAME_MS) / 1000

    const CSS = `
.ml-fab {
  position: fixed; right: 16px; bottom: calc(env(safe-area-inset-bottom, 0px) + 96px);
  width: 52px; height: 52px; border-radius: 50%; z-index: 9000;
  display: flex; align-items: center; justify-content: center;
  background: rgba(32, 36, 46, 0.72); color: #e8eaf0;
  border: 1px solid rgba(255,255,255,0.10);
  box-shadow: 0 6px 24px rgba(0,0,0,0.32);
  backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px);
  cursor: pointer; transition: transform .16s ease, background .2s ease;
  touch-action: manipulation;
}
.ml-fab:active { transform: scale(0.94); }
.ml-fab.on { background: rgba(88, 120, 255, 0.85); border-color: transparent; }
.ml-fab svg { width: 22px; height: 22px; display: block; }

.ml-stage {
  position: fixed; inset: 0; z-index: 9500; display: none;
  flex-direction: column; align-items: center; justify-content: center;
  gap: 26px; padding: 24px; box-sizing: border-box;
  background: rgba(8, 10, 14, 0.78);
  backdrop-filter: blur(28px) saturate(120%); -webkit-backdrop-filter: blur(28px) saturate(120%);
  color: #f2f4f8; font-family: inherit; -webkit-tap-highlight-color: transparent;
}
.ml-stage.on { display: flex; }
.ml-close {
  position: absolute; top: calc(env(safe-area-inset-top, 0px) + 16px); right: 18px;
  width: 40px; height: 40px; border-radius: 50%; border: none;
  background: rgba(255,255,255,0.06); color: rgba(255,255,255,0.6);
  font-size: 22px; line-height: 1; cursor: pointer;
}
.ml-orb {
  width: 168px; height: 168px; border-radius: 50%; position: relative;
  background: radial-gradient(circle at 34% 30%, rgba(140,170,255,0.95), rgba(70,90,200,0.55) 46%, rgba(30,36,70,0.35) 72%);
  box-shadow: 0 0 0 1px rgba(255,255,255,0.08) inset, 0 18px 70px rgba(70,100,255,0.28);
  transform: scale(var(--ml-lvl, 1));
  transition: transform .12s ease-out, filter .3s ease;
  cursor: pointer;
}
.ml-orb.thinking { animation: ml-breathe 1.6s ease-in-out infinite; }
.ml-orb.speaking { animation: ml-pulse .9s ease-in-out infinite; }
.ml-orb.listening { filter: brightness(1.06); }
@keyframes ml-breathe { 0%,100% { transform: scale(calc(var(--ml-lvl,1) * 1.0)); } 50% { transform: scale(calc(var(--ml-lvl,1) * 1.07)); } }
@keyframes ml-pulse { 0%,100% { transform: scale(var(--ml-lvl,1)); } 50% { transform: scale(calc(var(--ml-lvl,1) * 1.12)); } }

.ml-status { font-size: 13px; letter-spacing: .18em; color: rgba(230,236,255,0.55); }
.ml-captions { width: min(78vw, 520px); min-height: 64px; display: flex; flex-direction: column; gap: 10px; align-items: center; }
.ml-line { font-size: 14px; line-height: 1.65; text-align: center; color: rgba(240,244,255,0.82); max-height: 3.3em; overflow: hidden; transition: opacity .2s ease; }
.ml-line.user { color: rgba(190,205,240,0.62); font-size: 13px; }
.ml-line.assistant { color: rgba(248,250,255,0.92); }
.ml-line:empty { display: none; }
.ml-hint { position: absolute; bottom: calc(env(safe-area-inset-bottom, 0px) + 26px); font-size: 12px; color: rgba(220,228,250,0.35); letter-spacing: .06em; }
`

    /** 运行时状态，全局一份，重复 apply 不重复挂载。 */
    const state = {
      mounted: false,
      active: false,
      ws: null,
      stream: null,
      capCtx: null,
      outCtx: null,
      processor: null,
      sources: [],
      pending: new Map(),
      audioDoneFor: null,
      nextTime: 0,
      playStartedAt: 0,
      lastCtx: null,
      micBuf: new Float32Array(0),
      sendTimer: null,
      watchdog: null,
      el: {},
    }

    function el(tag, cls, html) {
      const node = document.createElement(tag)
      if (cls) node.className = cls
      if (html !== undefined) node.innerHTML = html
      return node
    }

    function wsUrl() {
      const scheme = location.protocol === 'https:' ? 'wss:' : 'ws:'
      return `${scheme}//${location.host}${WS_PATH}`
    }

    function send(payload) {
      const ws = state.ws
      if (!ws || ws.readyState !== 1) return
      ws.send(JSON.stringify(payload))
    }

    function sendAudio(pcm16) {
      const ws = state.ws
      if (!ws || ws.readyState !== 1) return
      const bytes = new Uint8Array(pcm16.length * 2 + 1)
      bytes[0] = 0x00
      const view = new DataView(bytes.buffer, 1)
      for (let i = 0; i < pcm16.length; i++) view.setInt16(i * 2, pcm16[i], true)
      ws.send(bytes)
    }

    function setStatus(text) {
      if (state.el.status) state.el.status.textContent = text
    }

    function setOrb(mode) {
      const orb = state.el.orb
      if (!orb) return
      orb.className = 'ml-orb' + (mode ? ' ' + mode : '')
    }

    function setLevel(v) {
      const orb = state.el.orb
      if (orb) orb.style.setProperty('--ml-lvl', (1 + Math.min(0.22, v)).toFixed(3))
    }

    function showLine(kind, text) {
      const node = kind === 'user' ? state.el.user : state.el.assistant
      if (node) node.textContent = text || ''
    }

    function fail(message) {
      setStatus(message)
      setTimeout(() => stopSession(), 1400)
    }

    // ---------- 播放 ----------

    function playPcm(arrayBuffer) {
      const outCtx = state.outCtx
      if (!outCtx) return
      const meta = state.lastCtx || {}
      const samples = new Int16Array(arrayBuffer)
      if (samples.length === 0) return
      const buffer = outCtx.createBuffer(1, samples.length, outCtx.sampleRate)
      const channel = buffer.getChannelData(0)
      for (let i = 0; i < samples.length; i++) channel[i] = samples[i] / 32768
      const source = outCtx.createBufferSource()
      source.buffer = buffer
      source.connect(outCtx.destination)
      const startAt = Math.max(outCtx.currentTime + 0.03, state.nextTime)
      source.start(startAt)
      state.nextTime = startAt + buffer.duration
      state.sources.push(source)
      state.pending.set(source, meta)
      source.onended = () => {
        const key = source
        const done = state.pending.get(key)
        state.pending.delete(key)
        state.sources = state.sources.filter((s) => s !== key)
        if (done && done.run_id) {
          send({ action: 'playback.chunk.completed', run_id: done.run_id, turn_id: done.turn_id, chunk_id: done.chunk_id })
        }
        if (state.audioDoneFor && state.pending.size === 0) {
          const run = state.audioDoneFor
          state.audioDoneFor = null
          send({ action: 'playback.completed', run_id: run.run_id, turn_id: run.turn_id })
        }
      }
    }

    function stopPlayback(meta) {
      const outCtx = state.outCtx
      const sources = state.sources.slice()
      state.sources = []
      state.pending.clear()
      const playedMs = state.playStartedAt > 0
        ? Math.max(0, Math.round((outCtx.currentTime - state.playStartedAt) * 1000))
        : 0
      state.playStartedAt = 0
      for (const source of sources) {
        try { source.stop() } catch {}
      }
      if (outCtx) state.nextTime = outCtx.currentTime
      if (meta && meta.run_id) {
        send({
          action: 'playback.stopped',
          run_id: meta.run_id,
          turn_id: meta.turn_id,
          played_audio_ms: playedMs,
        })
      }
    }

    // ---------- 采集 ----------

    function collect(block) {
      const capCtx = state.capCtx
      if (!capCtx) return
      const ratio = capCtx.sampleRate / MIC_RATE
      let mono
      if (Math.abs(ratio - 1) < 0.001) {
        mono = block
      } else {
        const out = new Float32Array(Math.floor(block.length / ratio))
        for (let i = 0; i < out.length; i++) {
          const from = Math.floor(i * ratio)
          const to = Math.min(block.length, Math.floor((i + 1) * ratio))
          let sum = 0
          for (let j = from; j < to; j++) sum += block[j]
          out[i] = sum / Math.max(1, to - from)
        }
        mono = out
      }
      const merged = new Float32Array(state.micBuf.length + mono.length)
      merged.set(state.micBuf, 0)
      merged.set(mono, state.micBuf.length)
      state.micBuf = merged
      // 音量反馈
      let peak = 0
      for (let i = 0; i < mono.length; i += 8) peak = Math.max(peak, Math.abs(mono[i]))
      setLevel(peak * 0.5)
    }

    function startSendLoop() {
      if (state.sendTimer) return
      state.sendTimer = setInterval(() => {
        if (!state.active) return
        const buf = state.micBuf
        const take = Math.min(buf.length, FRAME_SAMPLES)
        const frame = new Int16Array(FRAME_SAMPLES)
        for (let i = 0; i < FRAME_SAMPLES; i++) {
          const sample = i < take ? buf[i] : 0
          const clamped = Math.max(-1, Math.min(1, sample))
          frame[i] = clamped < 0 ? clamped * 0x8000 : clamped * 0x7fff
        }
        state.micBuf = buf.length > take ? buf.slice(take) : new Float32Array(0)
        sendAudio(frame)
      }, FRAME_MS)
    }

    async function startCapture() {
      const AC = window.AudioContext || window.webkitAudioContext
      state.capCtx = new AC({ sampleRate: MIC_RATE })
      if (state.capCtx.state === 'suspended') await state.capCtx.resume()
      const source = state.capCtx.createMediaStreamSource(state.stream)
      const node = state.capCtx.createScriptProcessor(2048, 1, 1)
      node.onaudioprocess = (event) => {
        if (!state.active) return
        collect(event.inputBuffer.getChannelData(0))
      }
      source.connect(node)
      node.connect(state.capCtx.destination)
      state.processor = node
      startSendLoop()
    }

    // ---------- 会话 ----------

    async function fetchConfig() {
      try {
        const response = await fetch(CONFIG_PATH, { headers: { accept: 'application/json' } })
        if (!response.ok) return {}
        return await response.json()
      } catch {
        return {}
      }
    }

    /** session_attached 之后：先选音色（可选），再下发指令，最后开麦。 */
    function proceed() {
      if (config.voice) {
        send({ action: 'change_voice', voice_name: config.voice })
        return
      }
      applyInstructions()
    }

    function applyInstructions() {
      if (config.instructions) {
        send({ action: 'session.update', session: { instructions: config.instructions } })
        return
      }
      ready()
    }

    function ready() {
      send({ action: 'media.mode', binary_protocol: 'tagged-v1' })
      send({ action: 'mic_state', enabled: true })
      setStatus('正在聆听')
      setOrb('listening')
      startCapture().catch(() => fail('麦克风不可用'))
    }

    function onJson(msg) {
      const data = msg.data || {}
      switch (msg.action) {
        case 'session_attached':
          proceed()
          break
        case 'voice_changed':
          applyInstructions()
          break
        case 'session.updated':
          if (data.error) {
            fail('会话配置失败：' + String(data.error).slice(0, 40))
            return
          }
          ready()
          break
        case 'error':
          fail('服务端错误：' + (data.error?.code || 'unknown'))
          break
        case 'input.speech.started':
          setStatus('正在聆听')
          setOrb('listening')
          break
        case 'input.speech.stopped':
          setStatus('正在思考')
          setOrb('thinking')
          break
        case 'input.transcript.updated':
          if (typeof data.text === 'string') showLine('user', data.text)
          break
        case 'input.transcript.done':
          if (typeof data.text === 'string') showLine('user', data.text)
          setStatus('正在思考')
          setOrb('thinking')
          break
        case 'output.transcript.updated':
          if (typeof data.text === 'string') showLine('assistant', data.text)
          break
        case 'output.transcript.done':
          if (typeof data.text === 'string') showLine('assistant', data.text)
          break
        case 'response.audio.started':
          setStatus('回复中')
          setOrb('speaking')
          state.playStartedAt = state.outCtx ? state.outCtx.currentTime : 0
          break
        case 'response.audio.context':
          state.lastCtx = { run_id: data.run_id, turn_id: data.turn_id, chunk_id: data.chunk_id }
          break
        case 'response.audio.done':
          state.audioDoneFor = { run_id: data.run_id, turn_id: data.turn_id }
          if (state.pending.size === 0) {
            state.audioDoneFor = null
            send({ action: 'playback.completed', run_id: data.run_id, turn_id: data.turn_id })
          }
          break
        case 'response.audio.stop':
          stopPlayback({ run_id: data.run_id, turn_id: data.turn_id })
          break
        case 'response.ended':
          setStatus('正在聆听')
          setOrb('listening')
          break
        default:
          break
      }
    }

    let config = {}

    async function startSession() {
      if (state.active) return
      state.active = true
      state.el.stage.classList.add('on')
      state.el.fab.classList.add('on')
      setStatus('连接中')
      setOrb('thinking')
      showLine('user', '')
      showLine('assistant', '')

      const AC = window.AudioContext || window.webkitAudioContext
      state.outCtx = new AC()
      if (state.outCtx.state === 'suspended') await state.outCtx.resume()
      state.nextTime = state.outCtx.currentTime

      try {
        state.stream = await navigator.mediaDevices.getUserMedia({
          audio: { channelCount: 1, echoCancellation: true, noiseSuppression: true, autoGainControl: true },
          video: false,
        })
      } catch (error) {
        fail(error?.name === 'NotAllowedError' ? '麦克风未授权' : '无法打开麦克风')
        return
      }

      config = await fetchConfig()

      const ws = new WebSocket(wsUrl())
      ws.binaryType = 'arraybuffer'
      state.ws = ws

      ws.onopen = () => send({ action: 'attach_session' })
      ws.onmessage = (event) => {
        if (typeof event.data === 'string') {
          try { onJson(JSON.parse(event.data)) } catch {}
          return
        }
        playPcm(event.data)
      }
      ws.onerror = () => fail('连接失败')
      ws.onclose = () => {
        if (!state.active) return
        fail('连接已断开')
      }
    }

    function stopSession() {
      state.active = false
      if (state.sendTimer) { clearInterval(state.sendTimer); state.sendTimer = null }
      try { state.processor?.disconnect() } catch {}
      try { state.capCtx?.close() } catch {}
      try { state.outCtx?.close() } catch {}
      try { state.stream?.getTracks().forEach((track) => track.stop()) } catch {}
      try { state.ws?.close() } catch {}
      state.processor = null
      state.capCtx = null
      state.outCtx = null
      state.stream = null
      state.ws = null
      state.sources = []
      state.pending.clear()
      state.micBuf = new Float32Array(0)
      state.lastCtx = null
      state.audioDoneFor = null
      state.el.stage?.classList.remove('on')
      state.el.fab?.classList.remove('on')
    }

    function apply(ctx) {
      if (state.mounted) return
      state.mounted = true

      const style = document.createElement('style')
      style.dataset.dshMossLive = ''
      style.textContent = CSS
      document.head.appendChild(style)

      const fab = el('button', 'ml-fab')
      fab.type = 'button'
      fab.setAttribute('aria-label', '语音对话')
      fab.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3z"/><path d="M5 11a7 7 0 0 0 14 0"/><path d="M12 18v3"/></svg>'

      const stage = el('div', 'ml-stage')
      const close = el('button', 'ml-close', '×')
      close.type = 'button'
      close.setAttribute('aria-label', '关闭')
      const orb = el('div', 'ml-orb')
      const status = el('div', 'ml-status', '')
      const captions = el('div', 'ml-captions')
      const userLine = el('div', 'ml-line user', '')
      const assistantLine = el('div', 'ml-line assistant', '')
      captions.append(userLine, assistantLine)
      const hint = el('div', 'ml-hint', '轻点圆球打断 · 点 × 结束')
      stage.append(close, orb, status, captions, hint)

      state.el = { fab, stage, close, orb, status, user: userLine, assistant: assistantLine }

      fab.addEventListener('click', () => {
        if (state.active) stopSession()
        else void startSession()
      })
      close.addEventListener('click', () => stopSession())
      orb.addEventListener('click', () => {
        if (!state.active) return
        stopPlayback(state.lastCtx)
        setStatus('正在聆听')
        setOrb('listening')
      })

      document.body.append(fab, stage)
      ctx?.effect?.(() => () => {
        stopSession()
        fab.remove()
        stage.remove()
        style.remove()
        state.mounted = false
      })
    }

    return { name: 'dsh-moss-live', apply }
  },
})

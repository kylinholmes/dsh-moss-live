/**
 * dsh-moss-live 浏览器端主体（由 scripts/build-client.mjs 拼进 CJS factory）。
 *
 * 交互：
 *   侧边栏「实时对话」→ 全屏毛玻璃面板（球 + 两行字幕）→ 缩小为底部胶囊。
 *   点球打断，点胶囊展开，胶囊的 × 结束会话。
 *
 * 音频：
 *   麦克风 → AudioContext(16k) → ScriptProcessor → downsample → 20ms 定长帧
 *   → 0x00 前缀的 PCM16 小端帧 → 宿主代理 → MOSS；
 *   MOSS 48k PCM → AudioBufferSourceNode 排程 → onended 回 playback.chunk.completed。
 *
 * 所有服务端 JSON 事件都先经过 reduce()；客户端只执行它给出的 effects，
 * 不自行向上游发 ack。点球打断走 playback.progress + response.audio.stop 两次
 * reduce，由 reducer 产出 playback.stopped；playback.progress 永不上送。
 */

const MIC_RATE = 16000
const PLAY_RATE = 48000
const FRAME_MS = 20
const MOSS_WS_PATH = '/dsh-moss-live/ws'
const MOSS_CONFIG_PATH = '/dsh-moss-live/config'

const PHASE_LABEL = {
  idle: '准备开始',
  connecting: '连接中',
  listening: '正在聆听',
  thinking: '正在思考',
  speaking: '正在回复',
  error: '出错了',
}

const CSS = `
.ml-fab {
  position: fixed; left: 16px; bottom: calc(env(safe-area-inset-bottom, 0px) + 16px);
  z-index: 9000; display: flex; align-items: center; gap: 8px;
  min-height: 42px; padding: 9px 14px; border-radius: 999px;
  border: 1px solid rgba(255,255,255,0.10); background: rgba(32,36,46,0.78);
  color: #e8eaf0; font: inherit; font-size: 13px; cursor: pointer;
  box-shadow: 0 8px 28px rgba(0,0,0,0.32);
  backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px);
  touch-action: manipulation; transition: transform .16s ease, background .2s ease;
}
.ml-fab:active { transform: scale(0.96); }
.ml-fab.on { background: rgba(88,120,255,0.86); border-color: transparent; }
.ml-fab svg { width: 18px; height: 18px; flex: none; }

.ml-entry {
  display: flex; align-items: center; gap: 8px; width: 100%; min-width: 0;
  padding: 7px 8px; border: 0; border-radius: 8px; background: transparent;
  color: var(--dsw-alias-text-2, rgba(230,236,255,0.72));
  font: inherit; font-size: 13px; line-height: 1.2; text-align: left; cursor: pointer;
  transition: background .16s ease, color .16s ease;
}
.ml-entry:hover { background: rgba(255,255,255,0.06); color: rgba(248,250,255,0.92); }
.ml-entry.on { color: rgba(160,180,255,0.95); }
.ml-entry svg { width: 16px; height: 16px; flex: none; }
.ml-entry-label { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

.ml-stage {
  position: fixed; inset: 0; z-index: 2147483000; width: 100vw; height: 100dvh; display: none;
  flex-direction: column; align-items: center; justify-content: center;
  gap: 24px; padding: 24px; box-sizing: border-box;
  background: rgba(8,10,14,0.78);
  backdrop-filter: blur(28px) saturate(120%); -webkit-backdrop-filter: blur(28px) saturate(120%);
  color: #f2f4f8; font-family: inherit; -webkit-tap-highlight-color: transparent;
}
.ml-stage.on { display: flex; }
.ml-close {
  position: absolute; top: calc(env(safe-area-inset-top, 0px) + 16px); right: 18px;
  width: 40px; height: 40px; border-radius: 50%; border: none;
  background: rgba(255,255,255,0.06); color: rgba(255,255,255,0.62);
  font: inherit; font-size: 22px; line-height: 1; cursor: pointer;
}
.ml-close:active { background: rgba(255,255,255,0.12); }

.ml-orb {
  --ml-lvl: 1;
  position: relative; width: 172px; height: 172px; border-radius: 50%;
  transform: scale(var(--ml-lvl)); transform-origin: 50% 50%;
  transition: transform .14s ease-out;
  cursor: pointer; touch-action: manipulation; isolation: isolate;
  -webkit-tap-highlight-color: transparent;
}
.ml-orb-core {
  position: absolute; inset: 0; border-radius: 50%;
  background:
    radial-gradient(120% 120% at 28% 20%, #e8edff 0%, #a9b9ff 12%, #6f86ff 30%, #3d50d8 56%, #1a2060 82%, #0b0e26 100%);
  box-shadow:
    inset 0 2px 5px rgba(255,255,255,.55),
    inset 0 -20px 46px rgba(8,10,34,.62),
    inset 0 0 0 1px rgba(255,255,255,.10),
    0 1px 0 rgba(255,255,255,.06);
}
.ml-orb-glow {
  position: absolute; inset: -34%; border-radius: 50%; z-index: -1;
  background: radial-gradient(circle, rgba(92,120,255,.42), rgba(92,120,255,0) 62%);
  filter: blur(16px); opacity: .9;
  transition: opacity .4s ease;
}
.ml-orb-sheen {
  position: absolute; inset: 0; border-radius: 50%; overflow: hidden; pointer-events: none;
  mix-blend-mode: screen; opacity: .5;
  background: conic-gradient(from 200deg, rgba(255,255,255,0) 0deg, rgba(190,210,255,.45) 48deg, rgba(255,255,255,0) 132deg);
  -webkit-mask: radial-gradient(circle at 50% 50%, #000 56%, transparent 74%);
  mask: radial-gradient(circle at 50% 50%, #000 56%, transparent 74%);
  animation: ml-sheen 16s linear infinite;
}
.ml-orb.listening .ml-orb-core { animation: ml-breathe 3.2s ease-in-out infinite; }
.ml-orb.connecting .ml-orb-sheen, .ml-orb.thinking .ml-orb-sheen { animation-duration: 6s; }
.ml-orb.thinking .ml-orb-glow { opacity: 1; }
.ml-orb.speaking .ml-orb-core { animation: ml-pulse 1.1s ease-in-out infinite; }
.ml-orb.speaking .ml-orb-glow { opacity: 1; filter: blur(20px); }
.ml-orb.error .ml-orb-core { filter: saturate(.55) hue-rotate(-26deg) brightness(.92); }
@keyframes ml-breathe {
  0%, 100% { transform: scale(calc(var(--ml-lvl) * 1.0)); }
  50% { transform: scale(calc(var(--ml-lvl) * 1.05)); }
}
@keyframes ml-pulse {
  0%, 100% { transform: scale(var(--ml-lvl)); }
  50% { transform: scale(calc(var(--ml-lvl) * 1.09)); }
}
@keyframes ml-sheen {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
@media (prefers-reduced-motion: reduce) {
  .ml-orb-core, .ml-orb-sheen { animation: none !important; }
}

.ml-status {
  min-height: 1.2em; font-size: 13px; letter-spacing: .18em;
  color: rgba(230,236,255,0.55); text-align: center;
}
.ml-status.error { color: rgba(255,182,182,0.92); letter-spacing: .04em; }
.ml-captions {
  width: min(78vw, 520px); min-height: 64px; display: flex; flex-direction: column;
  gap: 10px; align-items: center;
}
.ml-line {
  width: 100%; font-size: 14px; line-height: 1.65; text-align: center;
  color: rgba(240,244,255,0.82); max-height: 3.3em; overflow: hidden;
  transition: opacity .2s ease;
}
.ml-line.user { color: rgba(190,205,240,0.62); font-size: 13px; }
.ml-line.assistant { color: rgba(248,250,255,0.92); }
.ml-line:empty { display: none; }

.ml-pill {
  position: fixed; left: 50%; bottom: calc(env(safe-area-inset-bottom, 0px) + 18px);
  z-index: 2147482000; display: none; align-items: center; gap: 10px;
  width: max-content; max-width: min(86vw, 520px); min-height: 44px;
  padding: 9px 10px 9px 14px; box-sizing: border-box; border-radius: 999px;
  border: 1px solid rgba(255,255,255,0.10); background: rgba(22,26,36,0.84);
  color: #eef1f8; font: inherit; font-size: 13px; cursor: pointer;
  box-shadow: 0 10px 34px rgba(0,0,0,0.36);
  backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
  transform: translateX(-50%); -webkit-tap-highlight-color: transparent;
}
.ml-pill.on { display: flex; animation: ml-pill-in .18s ease-out; }
@keyframes ml-pill-in {
  from { opacity: 0; transform: translate(-50%, 10px); }
  to { opacity: 1; transform: translate(-50%, 0); }
}
.ml-dot {
  width: 8px; height: 8px; flex: none; border-radius: 50%;
  background: rgba(180,190,210,0.62);
}
.ml-dot.connecting, .ml-dot.thinking { background: #f0b64c; box-shadow: 0 0 0 4px rgba(240,182,76,0.16); }
.ml-dot.listening { background: #65e6a5; box-shadow: 0 0 0 4px rgba(101,230,165,0.16); }
.ml-dot.speaking { background: #89a8ff; box-shadow: 0 0 0 4px rgba(137,168,255,0.18); }
.ml-dot.error { background: #ff8f8f; box-shadow: 0 0 0 4px rgba(255,143,143,0.18); }
.ml-pill-text {
  min-width: 0; max-width: min(64vw, 380px); overflow: hidden;
  text-overflow: ellipsis; white-space: nowrap;
}
.ml-pill-close {
  width: 26px; height: 26px; flex: none; display: flex; align-items: center; justify-content: center;
  border: 0; border-radius: 50%; background: rgba(255,255,255,0.06);
  color: rgba(255,255,255,0.62); font: inherit; font-size: 18px; line-height: 1; cursor: pointer;
}
.ml-pill-close:active { background: rgba(255,255,255,0.14); }
`

const ICON_MIC = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3z"/><path d="M5 11a7 7 0 0 0 14 0"/><path d="M12 18v3"/></svg>'

/** 运行时状态；模块级共享，重复 apply 不重复挂载。 */
const state = {
  mounted: false,
  active: false,
  panelOpen: false,
  ws: null,
  stream: null,
  capCtx: null,
  outCtx: null,
  processor: null,
  micSource: null,
  muteNode: null,
  captureReady: false,
  sources: [],
  pending: new Map(),
  nextTime: 0,
  playStartedAt: 0,
  micBuf: new Float32Array(0),
  sendTimer: null,
  audioDoneFor: null,
  completedSentFor: null,
  config: {},
  appState: initialState(),
  phase: 'idle',
  statusText: PHASE_LABEL.idle,
  failing: false,
  exitTimer: null,
  readySent: false,
  intentionalClose: false,
  el: {},
  slotStop: null,
  slotObserver: null,
  slotButton: null,
  slotAttach: null,
  slotFallbackTimer: null,
  fallbackButton: null,
}

function el(tag, className, text) {
  const node = document.createElement(tag)
  if (className) node.className = className
  if (text !== undefined) node.textContent = text
  return node
}

function truncate(text, limit) {
  const chars = Array.from(String(text || ''))
  if (chars.length <= limit) return chars.join('')
  return chars.slice(0, limit).join('') + '…'
}

function wsUrl() {
  const scheme = location.protocol === 'https:' ? 'wss:' : 'ws:'
  return `${scheme}//${location.host}${MOSS_WS_PATH}`
}

function send(payload) {
  const ws = state.ws
  if (!ws || ws.readyState !== 1) return false
  try {
    ws.send(JSON.stringify(payload))
    return true
  } catch (error) {
    console.warn('[dsh-moss-live] 发送失败', error)
    return false
  }
}

function sendAudioFrame(pcm16) {
  const ws = state.ws
  if (!ws || ws.readyState !== 1) return
  const bytes = new Uint8Array(pcm16.length * 2 + 1)
  bytes[0] = 0x00
  const view = new DataView(bytes.buffer)
  for (let i = 0; i < pcm16.length; i++) view.setInt16(1 + i * 2, pcm16[i], true)
  try {
    ws.send(bytes)
  } catch (error) {
    console.warn('[dsh-moss-live] 音频发送失败', error)
  }
}

async function fetchConfig() {
  try {
    const response = await fetch(MOSS_CONFIG_PATH, {
      headers: { accept: 'application/json' },
      cache: 'no-store',
    })
    if (!response.ok) return {}
    const value = await response.json()
    return value && typeof value === 'object' ? value : {}
  } catch {
    return {}
  }
}

function setLevel(value) {
  if (!state.el.orb) return
  const level = Math.max(0, Math.min(0.22, Number(value) || 0))
  state.el.orb.style.setProperty('--ml-lvl', (1 + level).toFixed(3))
}

function pillText() {
  const text = state.appState.assistantText
  if (text) return truncate(text, 40)
  if (state.phase === 'connecting') return '正在连接…'
  if (state.phase === 'thinking') return '正在思考…'
  if (state.phase === 'speaking') return '正在回复…'
  if (state.phase === 'error') return '连接已结束'
  return '正在聆听…'
}

function render() {
  const phase = state.phase || 'idle'
  if (state.el.status) {
    state.el.status.textContent = state.statusText || PHASE_LABEL[phase] || ''
    state.el.status.classList.toggle('error', phase === 'error')
  }
  if (state.el.orb) {
    state.el.orb.className = 'ml-orb' + (phase && phase !== 'idle' ? ' ' + phase : '')
  }
  if (state.el.stage) state.el.stage.classList.toggle('on', state.active && state.panelOpen)
  if (state.el.pill) state.el.pill.classList.toggle('on', state.active && !state.panelOpen)
  if (state.el.dot) state.el.dot.className = 'ml-dot ' + phase
  if (state.el.pillText) state.el.pillText.textContent = pillText()
  if (state.el.user) state.el.user.textContent = state.appState.userText || ''
  if (state.el.assistant) state.el.assistant.textContent = state.appState.assistantText || ''
  if (state.slotButton) state.slotButton.classList.toggle('on', state.active)
  if (state.fallbackButton) state.fallbackButton.classList.toggle('on', state.active)
}

function setPhase(phase, statusText) {
  state.phase = phase || 'idle'
  state.statusText = statusText || PHASE_LABEL[state.phase] || ''
  render()
}

function fail(message) {
  if (state.failing) return
  const text = String(message || '出错了').replace(/\s+/g, ' ').trim().slice(0, 80) || '出错了'
  state.failing = true
  state.panelOpen = true
  state.phase = 'error'
  state.statusText = text
  render()
  if (state.exitTimer) clearTimeout(state.exitTimer)
  state.exitTimer = setTimeout(() => {
    state.exitTimer = null
    stopSession()
  }, 1400)
}

function sendEffects(effects) {
  if (!Array.isArray(effects)) return
  for (const effect of effects) {
    if (!effect) continue
    if (effect.kind === 'send') {
      // playback.progress 是纯客户端记账事件，任何情况下都不上送。
      if (effect.payload && effect.payload.action === 'playback.progress') continue
      send(effect.payload)
      continue
    }
    if (effect.kind === 'warn') {
      console.warn('[dsh-moss-live]', effect.message)
      continue
    }
    if (effect.kind === 'exit') {
      fail('服务端错误：' + String(effect.message || 'unknown').slice(0, 48))
    }
  }
}

/** 所有服务端 JSON 事件唯一的归约入口。 */
function applyReduce(message) {
  const before = state.appState
  const result = reduce(before, message)
  state.appState = result.state
  if (result.state.phase !== before.phase) {
    state.phase = result.state.phase
    state.statusText = PHASE_LABEL[state.phase] || ''
  }
  render()
  sendEffects(result.effects)
  return result
}

// ---------- 采集 ----------

function collect(block) {
  const capCtx = state.capCtx
  if (!capCtx || !block || block.length === 0) return
  const ratio = capCtx.sampleRate / MIC_RATE
  const mono = downsample(block, ratio)
  if (mono.length === 0) return
  const merged = new Float32Array(state.micBuf.length + mono.length)
  merged.set(state.micBuf, 0)
  merged.set(mono, state.micBuf.length)
  state.micBuf = merged
  setLevel(peakOf(mono) * 0.5)
}

function startSendLoop() {
  if (state.sendTimer) return
  state.sendTimer = setInterval(() => {
    if (!state.active || !state.ws) return
    const buf = state.micBuf
    let frame
    if (buf.length === 0) {
      frame = silenceFrame()
    } else if (buf.length >= FRAME_SAMPLES) {
      frame = toInt16Frame(buf.subarray(0, FRAME_SAMPLES))
      state.micBuf = buf.slice(FRAME_SAMPLES)
    } else {
      const padded = new Float32Array(FRAME_SAMPLES)
      padded.set(buf, 0)
      frame = toInt16Frame(padded)
      state.micBuf = new Float32Array(0)
    }
    sendAudioFrame(frame)
  }, FRAME_MS)
}

async function startCapture() {
  const AC = window.AudioContext || window.webkitAudioContext
  if (!AC) throw new Error('AudioContext unavailable')
  const capCtx = new AC({ sampleRate: MIC_RATE })
  state.capCtx = capCtx
  if (capCtx.state === 'suspended') await capCtx.resume()
  if (!state.active || !state.stream) {
    try { await capCtx.close() } catch {}
    return
  }
  const source = capCtx.createMediaStreamSource(state.stream)
  const processor = capCtx.createScriptProcessor(2048, 1, 1)
  processor.onaudioprocess = (event) => {
    if (!state.active) return
    collect(event.inputBuffer.getChannelData(0))
  }
  const mute = capCtx.createGain()
  mute.gain.value = 0
  source.connect(processor)
  processor.connect(mute)
  mute.connect(capCtx.destination)
  state.micSource = source
  state.processor = processor
  state.muteNode = mute
  state.captureReady = true
  startSendLoop()
}

// ---------- 播放 ----------

function actualPlayedMs() {
  if (!state.outCtx || !state.playStartedAt) return 0
  const elapsed = (state.outCtx.currentTime - state.playStartedAt) * 1000
  if (!Number.isFinite(elapsed)) return 0
  return Math.max(0, Math.round(elapsed))
}

function maybeAckCompleted() {
  const done = state.audioDoneFor
  if (!done || state.pending.size > 0) return
  const key = `${done.run_id || ''}:${done.turn_id || ''}`
  state.audioDoneFor = null
  if (state.completedSentFor === key) return
  state.completedSentFor = key
  try {
    send(ackCompleted(done))
  } catch (error) {
    console.warn('[dsh-moss-live] playback.completed ack 失败', error)
  }
}

function playPcm(arrayBuffer) {
  const outCtx = state.outCtx
  if (!state.active || state.failing || !outCtx || !arrayBuffer || arrayBuffer.byteLength < 2) return
  const samples = new Int16Array(arrayBuffer)
  if (samples.length === 0) return
  const meta = state.appState.lastChunk ? { ...state.appState.lastChunk } : null
  if (state.playStartedAt === 0) state.playStartedAt = outCtx.currentTime
  let buffer
  try {
    buffer = outCtx.createBuffer(1, samples.length, PLAY_RATE)
  } catch (error) {
    console.warn('[dsh-moss-live] 创建播放缓冲失败', error)
    return
  }
  const channel = buffer.getChannelData(0)
  for (let i = 0; i < samples.length; i++) channel[i] = samples[i] / 32768
  const source = outCtx.createBufferSource()
  source.buffer = buffer
  source.connect(outCtx.destination)
  const startAt = Math.max(outCtx.currentTime + 0.03, state.nextTime)
  try {
    source.start(startAt)
  } catch (error) {
    console.warn('[dsh-moss-live] 播放排程失败', error)
    return
  }
  state.nextTime = startAt + buffer.duration
  state.sources.push(source)
  state.pending.set(source, meta)
  source.onended = () => {
    if (!state.pending.has(source)) return
    state.pending.delete(source)
    state.sources = state.sources.filter((candidate) => candidate !== source)
    if (meta) {
      try {
        send(ackChunk(meta))
      } catch (error) {
        console.warn('[dsh-moss-live] playback.chunk.completed ack 失败', error)
      }
    }
    maybeAckCompleted()
  }
}

function stopLocalPlayback() {
  const sources = state.sources.slice()
  state.sources = []
  state.pending.clear()
  state.audioDoneFor = null
  state.playStartedAt = 0
  for (const source of sources) {
    try { source.onended = null } catch {}
    try { source.stop() } catch {}
  }
  if (state.outCtx) state.nextTime = state.outCtx.currentTime
}

/** 本地点球打断：先交真实播放毫秒，再由 reducer 产出 playback.stopped。 */
function bargeIn() {
  if (!state.active || state.failing) return
  const meta = state.appState.lastChunk || state.audioDoneFor
  const busy = state.pending.size > 0 || state.phase === 'speaking' || state.audioDoneFor !== null
  if (!busy) return
  const played = actualPlayedMs()
  applyReduce({ action: 'playback.progress', data: { played_audio_ms: played } })
  stopLocalPlayback()
  if (meta && meta.run_id && meta.turn_id) {
    applyReduce({ action: 'response.audio.stop', data: { run_id: meta.run_id, turn_id: meta.turn_id } })
  } else {
    setPhase('listening')
  }
}

// ---------- 会话 ----------

function proceed() {
  if (state.config.voice) {
    send({ action: 'change_voice', voice_name: state.config.voice })
    return
  }
  applyInstructions()
}

function applyInstructions() {
  if (state.config.instructions) {
    send({ action: 'session.update', session: { instructions: state.config.instructions } })
    return
  }
  ready()
}

function ready() {
  if (!state.active || state.readySent) return
  state.readySent = true
  send({ action: 'media.mode', binary_protocol: 'tagged-v1' })
  send({ action: 'mic_state', enabled: true })
  setPhase('listening')
  startCapture().catch((error) => {
    console.warn('[dsh-moss-live] 采集启动失败', error)
    fail('音频采集不可用')
  })
}

function formatError(error) {
  if (error === undefined || error === null) return 'unknown'
  if (typeof error === 'string') return error.slice(0, 60)
  if (typeof error.code === 'string') return error.code.slice(0, 60)
  return String(error).slice(0, 60)
}

function handleServerMessage(message) {
  const action = message && message.action

  // 服务端要求停止播放：先记录真实进度，停本地队列，再让 reducer 产出 ack。
  if (action === 'response.audio.stop') {
    const played = actualPlayedMs()
    applyReduce({ action: 'playback.progress', data: { played_audio_ms: played } })
    stopLocalPlayback()
    applyReduce(message)
    return
  }

  applyReduce(message)

  if (action === 'session_attached') {
    proceed()
    return
  }
  if (action === 'voice_changed') {
    if (message.data && message.data.error) {
      fail('音色设置失败：' + formatError(message.data.error))
      return
    }
    applyInstructions()
    return
  }
  if (action === 'session.updated') {
    if (message.data && message.data.error) {
      fail('会话配置失败：' + formatError(message.data.error))
      return
    }
    ready()
    return
  }
  if (action === 'response.audio.started') {
    state.playStartedAt = state.outCtx ? state.outCtx.currentTime : 0
    state.audioDoneFor = null
    state.completedSentFor = null
    return
  }
  if (action === 'response.audio.done') {
    const data = message.data || {}
    if (data.run_id && data.turn_id) {
      state.audioDoneFor = { run_id: data.run_id, turn_id: data.turn_id }
      maybeAckCompleted()
    }
  }
}

function stopStream() {
  const stream = state.stream
  state.stream = null
  if (!stream) return
  try {
    for (const track of stream.getTracks()) track.stop()
  } catch {}
}

function stopSession() {
  state.active = false
  state.intentionalClose = true
  state.failing = false
  if (state.exitTimer) {
    clearTimeout(state.exitTimer)
    state.exitTimer = null
  }
  if (state.sendTimer) {
    clearInterval(state.sendTimer)
    state.sendTimer = null
  }
  state.captureReady = false
  state.micBuf = new Float32Array(0)

  if (state.processor) {
    try { state.processor.onaudioprocess = null } catch {}
    try { state.processor.disconnect() } catch {}
    state.processor = null
  }
  if (state.micSource) {
    try { state.micSource.disconnect() } catch {}
    state.micSource = null
  }
  if (state.muteNode) {
    try { state.muteNode.disconnect() } catch {}
    state.muteNode = null
  }

  stopLocalPlayback()
  state.nextTime = 0

  if (state.capCtx) {
    const capCtx = state.capCtx
    state.capCtx = null
    try { void capCtx.close() } catch {}
  }
  if (state.outCtx) {
    const outCtx = state.outCtx
    state.outCtx = null
    try { void outCtx.close() } catch {}
  }
  stopStream()

  const ws = state.ws
  state.ws = null
  if (ws) {
    ws.onopen = null
    ws.onmessage = null
    ws.onerror = null
    ws.onclose = null
    try { ws.close(1000, 'client ended') } catch {}
  }

  state.appState = initialState()
  state.phase = 'idle'
  state.statusText = PHASE_LABEL.idle
  state.readySent = false
  state.config = {}
  state.panelOpen = false
  state.audioDoneFor = null
  state.completedSentFor = null
  state.playStartedAt = 0
  render()
}

/** TEMP-DIAG：上报布局事实，定位面板未铺满的问题；解决后删除。 */
function reportLayout() {
  try {
    const stage = state.el && state.el.stage
    const rect = stage ? stage.getBoundingClientRect() : null
    const vv = window.visualViewport
    const bodyCS = getComputedStyle(document.body)
    const htmlCS = getComputedStyle(document.documentElement)
    fetch('/dsh-moss-live/diag', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight,
        dpr: window.devicePixelRatio,
        vv: vv ? { w: vv.width, h: vv.height, scale: vv.scale, top: vv.offsetTop, left: vv.offsetLeft } : null,
        html: { clientW: document.documentElement.clientWidth, scrollW: document.documentElement.scrollWidth, transform: htmlCS.transform, zoom: htmlCS.zoom },
        body: { clientW: document.body.clientWidth, transform: bodyCS.transform, zoom: bodyCS.zoom, position: bodyCS.position, paddingTop: bodyCS.paddingTop },
        stage: rect ? { x: Math.round(rect.x), y: Math.round(rect.y), w: Math.round(rect.width), h: Math.round(rect.height) } : null,
        stageCS: stage ? { position: getComputedStyle(stage).position, zIndex: getComputedStyle(stage).zIndex } : null,
        children: Array.from(document.body.children).slice(0, 6).map((n) => ({
          tag: n.tagName,
          cls: typeof n.className === 'string' ? n.className.slice(0, 40) : '',
          pos: getComputedStyle(n).position,
          z: getComputedStyle(n).zIndex,
        })),
      }),
    }).catch(() => {})
  } catch {}
}

async function startSession() {
  if (state.active) {
    state.panelOpen = true
    render()
    return
  }

  state.active = true
  state.intentionalClose = false
  state.failing = false
  state.panelOpen = true
  state.readySent = false
  state.config = {}
  state.appState = initialState()
  state.phase = 'connecting'
  state.statusText = PHASE_LABEL.connecting
  state.micBuf = new Float32Array(0)
  state.pending.clear()
  state.sources = []
  state.audioDoneFor = null
  state.completedSentFor = null
  state.playStartedAt = 0
  state.nextTime = 0
  render()
  reportLayout()

  try {
    const AC = window.AudioContext || window.webkitAudioContext
    if (!AC) throw new Error('AudioContext unavailable')
    state.outCtx = new AC({ sampleRate: PLAY_RATE })
    if (state.outCtx.state === 'suspended') await state.outCtx.resume()
    state.nextTime = state.outCtx.currentTime
  } catch (error) {
    console.warn('[dsh-moss-live] 播放上下文创建失败', error)
    fail('音频输出不可用')
    return
  }

  try {
    if (!navigator.mediaDevices || typeof navigator.mediaDevices.getUserMedia !== 'function') {
      throw new Error('getUserMedia unavailable')
    }
    state.stream = await navigator.mediaDevices.getUserMedia({
      audio: {
        channelCount: 1,
        echoCancellation: true,
        noiseSuppression: true,
        autoGainControl: true,
      },
      video: false,
    })
  } catch (error) {
    console.warn('[dsh-moss-live] 麦克风打开失败', error)
    fail(error && error.name === 'NotAllowedError' ? '麦克风未授权' : '无法打开麦克风')
    return
  }

  if (!state.active) {
    stopStream()
    return
  }

  state.config = await fetchConfig()
  if (!state.active) return

  let ws
  try {
    ws = new WebSocket(wsUrl())
  } catch (error) {
    console.warn('[dsh-moss-live] WebSocket 创建失败', error)
    fail('连接失败')
    return
  }
  ws.binaryType = 'arraybuffer'
  state.ws = ws

  ws.onopen = () => {
    if (!state.active) return
    send({ action: 'attach_session' })
  }
  ws.onmessage = (event) => {
    if (!state.active) return
    if (typeof event.data === 'string') {
      let message
      try {
        message = JSON.parse(event.data)
      } catch {
        return
      }
      handleServerMessage(message)
      return
    }
    playPcm(event.data)
  }
  ws.onerror = () => {
    if (!state.active || state.intentionalClose) return
    fail('连接失败')
  }
  ws.onclose = (event) => {
    if (!state.active || state.intentionalClose || state.failing) return
    const reason = event && typeof event.reason === 'string' ? event.reason.trim() : ''
    fail(reason ? reason.slice(0, 80) : '连接已断开')
  }
}

function makeEntryButton(className) {
  const button = el('button', className)
  button.type = 'button'
  button.title = '实时对话'
  button.setAttribute('aria-label', '实时对话')
  button.innerHTML = ICON_MIC + '<span class="ml-entry-label">实时对话</span>'
  button.addEventListener('click', () => {
    if (state.active) {
      state.panelOpen = true
      render()
      return
    }
    void startSession()
  })
  return button
}

function enableFallbackEntry() {
  if (!state.mounted) return
  if (state.fallbackButton && state.fallbackButton.parentNode) return
  state.fallbackButton = null
  const fallback = makeEntryButton('ml-fab')
  document.body.appendChild(fallback)
  state.fallbackButton = fallback
  render()
}

/** 侧边栏顶部的导航行（插件/自动化任务/更多）里，「更多」那一行；找不到返回 null。 */
function navAnchor() {
  const candidates = document.querySelectorAll('button, a, [role="button"], li, div')
  for (const node of candidates) {
    if (node.children.length > 3) continue
    if (node.textContent.trim() !== '更多') continue
    const row = node.closest('button, a, [role="button"], li')
    return row ?? node
  }
  return null
}

function installEntry(ctx) {
  const slots = ctx && ctx.slots
  if (!slots || typeof slots.inject !== 'function' || typeof slots.register !== 'function') {
    enableFallbackEntry()
    return
  }

  const button = makeEntryButton('ml-entry')
  state.slotButton = button

  // 组件本身只占住 slot 的生命周期；按钮是原生 DOM，直接挂进 slot 容器。
  // 这样 bundle 不需要 React，侧边栏折叠/重渲染时由 MutationObserver 重新挂回。
  const Entry = function DshMossLiveSidebarEntry() {
    return null
  }

  let stop
  try {
    stop = slots.inject('sidebar.footer.action', () => slots.register({
      name: 'sidebar.footer.action',
      id: 'dsh-moss-live',
      order: 100,
      label: '实时对话',
    }, Entry))
  } catch (error) {
    console.warn('[dsh-moss-live] 侧边栏入口注册失败，退回固定按钮', error)
    enableFallbackEntry()
    return
  }
  state.slotStop = typeof stop === 'function' ? stop : null

  state.slotAttach = () => {
    if (!state.slotButton) return
    // 首选「更多」下面那一行；没有就退回侧栏底部的 footer slot。
    const nav = navAnchor()
    if (nav && nav.parentNode) {
      if (state.slotButton.previousSibling !== nav) nav.parentNode.insertBefore(state.slotButton, nav.nextSibling)
    } else {
      const anchor = document.querySelector('[data-slot="sidebar.footer.action"]')
      if (!anchor) return
      if (state.slotButton.parentNode !== anchor) anchor.appendChild(state.slotButton)
    }
    if (state.slotFallbackTimer) {
      clearTimeout(state.slotFallbackTimer)
      state.slotFallbackTimer = null
    }
    if (state.fallbackButton) {
      state.fallbackButton.remove()
      state.fallbackButton = null
    }
  }

  const schedule = () => {
    if (state.slotAttach) requestAnimationFrame(state.slotAttach)
  }
  try {
    state.slotObserver = new MutationObserver(schedule)
    state.slotObserver.observe(document.documentElement, { childList: true, subtree: true })
  } catch {}
  state.slotAttach()
  requestAnimationFrame(state.slotAttach)

  // 注册成功但 3 秒内 slot 容器仍未出现：先给固定入口，容器稍后出现再切回。
  if (state.slotFallbackTimer) clearTimeout(state.slotFallbackTimer)
  state.slotFallbackTimer = setTimeout(() => {
    state.slotFallbackTimer = null
    if (!state.mounted || !state.slotButton) return
    const anchor = document.querySelector('[data-slot="sidebar.footer.action"]')
    if (anchor && state.slotButton.parentNode === anchor) return
    enableFallbackEntry()
  }, 3000)
}

function injectCss() {
  const style = el('style')
  style.dataset.dshMossLive = ''
  style.textContent = CSS
  document.head.appendChild(style)
  state.el.style = style
}

function buildStage() {
  const stage = el('div', 'ml-stage')
  stage.setAttribute('role', 'dialog')
  stage.setAttribute('aria-modal', 'true')
  stage.setAttribute('aria-label', '实时对话')

  const close = el('button', 'ml-close', '×')
  close.type = 'button'
  close.title = '收起'
  close.setAttribute('aria-label', '收起实时对话')

  const orb = el('div', 'ml-orb')
  orb.append(el('span', 'ml-orb-glow'), el('span', 'ml-orb-core'), el('span', 'ml-orb-sheen'))
  orb.setAttribute('role', 'button')
  orb.tabIndex = 0
  orb.setAttribute('aria-label', '打断当前回复')
  orb.addEventListener('click', bargeIn)
  orb.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      bargeIn()
    }
  })

  const status = el('div', 'ml-status', PHASE_LABEL.idle)
  status.setAttribute('aria-live', 'polite')

  const captions = el('div', 'ml-captions')
  const user = el('div', 'ml-line user')
  const assistant = el('div', 'ml-line assistant')
  captions.append(user, assistant)

  close.addEventListener('click', () => {
    state.panelOpen = false
    render()
  })

  stage.append(close, orb, status, captions)
  document.body.appendChild(stage)

  state.el.stage = stage
  state.el.close = close
  state.el.orb = orb
  state.el.status = status
  state.el.captions = captions
  state.el.user = user
  state.el.assistant = assistant
}

function buildPill() {
  const pill = el('div', 'ml-pill')
  pill.setAttribute('role', 'button')
  pill.tabIndex = 0
  pill.setAttribute('aria-label', '展开实时对话')

  const dot = el('span', 'ml-dot idle')
  const text = el('span', 'ml-pill-text', '')
  const close = el('button', 'ml-pill-close', '×')
  close.type = 'button'
  close.title = '结束'
  close.setAttribute('aria-label', '结束实时对话')

  const expand = () => {
    if (!state.active) return
    state.panelOpen = true
    render()
  }

  pill.addEventListener('click', expand)
  pill.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      expand()
    }
  })
  close.addEventListener('click', (event) => {
    event.stopPropagation()
    stopSession()
  })

  pill.append(dot, text, close)
  document.body.appendChild(pill)

  state.el.pill = pill
  state.el.dot = dot
  state.el.pillText = text
  state.el.pillClose = close
}

function teardown() {
  stopSession()
  if (state.slotFallbackTimer) {
    clearTimeout(state.slotFallbackTimer)
    state.slotFallbackTimer = null
  }
  if (state.slotStop) {
    try { state.slotStop() } catch {}
    state.slotStop = null
  }
  if (state.slotObserver) {
    try { state.slotObserver.disconnect() } catch {}
    state.slotObserver = null
  }
  state.slotAttach = null
  if (state.slotButton) {
    state.slotButton.remove()
    state.slotButton = null
  }
  if (state.fallbackButton) {
    state.fallbackButton.remove()
    state.fallbackButton = null
  }
  if (state.el.stage) state.el.stage.remove()
  if (state.el.pill) state.el.pill.remove()
  if (state.el.style) state.el.style.remove()
  state.el = {}
  state.mounted = false
}

function apply(ctx) {
  if (state.mounted) return
  state.mounted = true

  // 先注册 teardown，再动 DOM：任何构建步骤抛错都不能留下 style/面板/胶囊。
  try {
    if (ctx && typeof ctx.effect === 'function') {
      ctx.effect(() => () => teardown(), 'dsh-moss-live: client ui')
    }
  } catch (error) {
    state.mounted = false
    throw error
  }

  try {
    injectCss()
    buildStage()
    buildPill()
    installEntry(ctx)
    render()
  } catch (error) {
    console.error('[dsh-moss-live] UI 初始化失败', error)
    try { teardown() } catch (cleanupError) { console.warn('[dsh-moss-live] UI 清理失败', cleanupError) }
    throw error
  }
}

return { name: 'dsh-moss-live', inject: ['slots'], apply }

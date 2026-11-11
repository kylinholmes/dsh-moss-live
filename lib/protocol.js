export const PHASES = ['idle', 'connecting', 'listening', 'thinking', 'speaking', 'error']

// The server rejects an ack that lost a field with invalid_public_request, and
// JSON.stringify silently drops `undefined` fields. Fail fast instead.
function requireAckFields(action, meta, fields) {
  if (meta === null || typeof meta !== 'object') {
    throw new TypeError(`${action}: ack metadata object is required`)
  }
  for (const field of fields) {
    const value = meta[field]
    if (value === undefined || value === null || value === '') {
      throw new TypeError(`${action}: missing required ack field ${field}`)
    }
  }
}

export function initialState() {
  return { phase: 'idle', userText: '', assistantText: '', lastChunk: null, playback: [], round: 0, playedMs: 0 }
}

export function ackChunk(meta) {
  requireAckFields('playback.chunk.completed', meta, ['run_id', 'turn_id', 'chunk_id'])
  return { action: 'playback.chunk.completed', run_id: meta.run_id, turn_id: meta.turn_id, chunk_id: meta.chunk_id }
}

export function ackCompleted(meta) {
  requireAckFields('playback.completed', meta, ['run_id', 'turn_id'])
  return { action: 'playback.completed', run_id: meta.run_id, turn_id: meta.turn_id }
}

export function ackStopped(meta, playedMs = 0) {
  requireAckFields('playback.stopped', meta, ['run_id', 'turn_id'])
  const played = Number.isFinite(playedMs) ? playedMs : 0
  return {
    action: 'playback.stopped',
    run_id: meta.run_id,
    turn_id: meta.turn_id,
    played_audio_ms: Math.max(0, Math.round(played)),
  }
}

export function reduce(state, msg) {
  const data = msg?.data ?? {}
  const next = { ...state, playback: [...state.playback] }
  const effects = []
  switch (msg?.action) {
    case 'input.transcript.updated':
    case 'input.transcript.done':
      if (typeof data.text === 'string') next.userText = data.text
      break
    case 'output.transcript.updated':
    case 'output.transcript.done':
      if (typeof data.text === 'string') next.assistantText = data.text
      break
    case 'input.speech.started':
      next.phase = 'listening'
      break
    case 'input.speech.stopped':
      next.phase = 'thinking'
      break
    case 'response.audio.context':
      next.lastChunk = { run_id: data.run_id, turn_id: data.turn_id, chunk_id: data.chunk_id }
      break
    case 'response.audio.started':
      next.phase = 'speaking'
      next.playedMs = 0
      break
    case 'playback.progress':
      if (typeof data.played_audio_ms === 'number' && Number.isFinite(data.played_audio_ms)) {
        next.playedMs = Math.max(0, Math.round(data.played_audio_ms))
      }
      break
    case 'response.audio.stop':
      next.phase = 'listening'
      next.playback = []
      effects.push({ kind: 'send', payload: ackStopped({ run_id: data.run_id, turn_id: data.turn_id }, state.playedMs ?? 0) })
      next.playedMs = 0
      break
    case 'response.ended':
      next.phase = 'listening'
      break
    case 'error':
      next.phase = 'error'
      effects.push({ kind: 'exit', message: data?.error?.code ?? 'unknown' })
      break
    default:
      break
  }
  return { state: next, effects }
}

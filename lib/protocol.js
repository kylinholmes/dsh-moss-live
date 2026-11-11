export const PHASES = ['idle', 'connecting', 'listening', 'thinking', 'speaking', 'error']

export function initialState() {
  return { phase: 'idle', userText: '', assistantText: '', lastChunk: null, playback: [], round: 0 }
}

export function ackChunk(meta) {
  return { action: 'playback.chunk.completed', run_id: meta.run_id, turn_id: meta.turn_id, chunk_id: meta.chunk_id }
}

export function ackCompleted(meta) {
  return { action: 'playback.completed', run_id: meta.run_id, turn_id: meta.turn_id }
}

export function ackStopped(meta, playedMs) {
  return {
    action: 'playback.stopped',
    run_id: meta.run_id,
    turn_id: meta.turn_id,
    played_audio_ms: Math.max(0, Math.round(playedMs)),
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
      break
    case 'response.audio.stop':
      next.phase = 'listening'
      next.playback = []
      effects.push({ kind: 'send', payload: ackStopped({ run_id: data.run_id, turn_id: data.turn_id }, state.playedMs ?? 0) })
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

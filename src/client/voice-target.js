import { activeVoice } from './voice-state.js'
const isVoice = id => typeof id === 'string' && id.startsWith('moss-live-')

/** DSH owns selection; the media controller's memory is only a fallback. */
export function voiceTargetId(voice, sessions, { newConversation = false } = {}) {
  if (newConversation) return null
  const selected = Object.values(sessions?.byId ?? {}).find(row => row.retainedBy?.mainView > 0)
  if (isVoice(selected?.id)) return selected.id
  if (isVoice(selected?.parentId)) return selected.parentId
  const running = activeVoice(voice.phase)
  if (selected && !running) return null
  const remembered = voice.viewSessionId ?? voice.sessionId
  return isVoice(remembered) ? remembered : null
}

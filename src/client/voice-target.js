const isVoice = id => typeof id === 'string' && id.startsWith('moss-live-')

/** Only native selection determines focus; ordinary text cannot inherit an old call. */
export function voiceTargetId(_voice, sessions, { newConversation = false } = {}) {
  if (newConversation) return null
  const selected = Object.values(sessions?.byId ?? {}).find(row => row.retainedBy?.mainView > 0)
  if (isVoice(selected?.id)) return selected.id
  if (isVoice(selected?.parentId)) return selected.parentId
  return null
}

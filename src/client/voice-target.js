const isVoice = id => typeof id === 'string' && id.startsWith('moss-live-')

/** Only native selection determines focus; ordinary text cannot inherit an old call. */
export function voiceTargetId(_voice, sessions, { newConversation = false } = {}) {
  if (newConversation) return null
  const byId = sessions?.byId ?? {}, visited = new Set()
  let selected = Object.values(byId).find(row => row.retainedBy?.mainView > 0)
  while (selected && !visited.has(selected.id)) {
    if (isVoice(selected.id)) return selected.id
    if (isVoice(selected.parentId)) return selected.parentId
    visited.add(selected.id)
    selected = byId[selected.parentId]
  }
  return null
}

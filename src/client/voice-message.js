/** Extend native Chat through its public incremental Definition seam. */
export const voiceMessageDefinition = {
  kind: 'moss-voice-user', target: 'chat',
  match: event => event.type === 'user/message' && event.data.source.kind === 'user' && event.data.source.voice
    ? { id: String(event.data.id), role: 'start', exclusive: true } : null,
  start: (_context, match) => ({ kind: 'user', messageId: match.event.data.id, seq: match.event.seq,
    time: match.event.time, content: match.event.data.content, source: match.event.data.source }),
  update: (context, match) => ({ ...context.state, content: match.event.data.content, source: match.event.data.source }),
  buildViewNode: context => context.state ? {
    key: context.key, kind: 'user', id: context.id, target: 'chat', anchorSeq: context.state.seq,
    location: context.start?.location ?? { kind: 'unresolved' }, visibility: 'visible', groupTree: 'exchange', data: context.state,
  } : null,
}

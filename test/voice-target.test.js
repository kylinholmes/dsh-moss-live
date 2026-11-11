import test from 'node:test'
import assert from 'node:assert/strict'

test('voice target restores the native selected session after a page or plugin reload', async () => {
  const { voiceTargetId } = await import('../src/client/voice-target.js').catch(() => ({}))
  assert.equal(typeof voiceTargetId, 'function')
  const selected = id => ({ phase: 'ready', byId: { [id]: { id, retainedBy: { mainView: 1 } } } })
  assert.equal(voiceTargetId({ phase: 'idle', sessionId: null }, selected('moss-live-saved')), 'moss-live-saved')
  assert.equal(voiceTargetId({ phase: 'idle', sessionId: null }, selected('moss-live-saved'), { newConversation: true }), null, 'the sidebar is a fresh landing even with saved native selection')
  assert.equal(voiceTargetId({ phase: 'listening', sessionId: 'moss-live-active' }, selected('moss-live-saved'), { newConversation: true }), null, 'the fresh landing does not adopt a background call')
  assert.equal(voiceTargetId({ phase: 'idle', viewSessionId: 'moss-live-old' }, selected('moss-live-saved')), 'moss-live-saved')
  assert.equal(voiceTargetId({ phase: 'idle', viewSessionId: 'moss-live-old' }, selected('ordinary-new')), null, 'a deliberate native new session is a new target')
  assert.equal(voiceTargetId({ phase: 'listening', sessionId: 'moss-live-active' }, selected('ordinary-new')), 'moss-live-active', 'a running call remains available')
  const child = selected('child')
  child.byId.child.parentId = 'moss-live-parent'
  assert.equal(voiceTargetId({ phase: 'idle' }, child), 'moss-live-parent')
})

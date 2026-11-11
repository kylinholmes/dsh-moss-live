import test from 'node:test'
import assert from 'node:assert/strict'
import { voiceMessageDefinition as definition } from '../src/client/voice-message.js'

test('native Chat replaces revised speech at the original message anchor without claiming ordinary messages', () => {
  const event = { type: 'user/message', seq: 4, time: 100, data: { id: 'u1', source: { kind: 'user', voice: { epoch: 'e', turn: '1' } }, content: [{ type: 'text', text: '九点' }] } }
  assert.equal(definition.match({ ...event, data: { ...event.data, source: { kind: 'user' } } }), null)
  assert.equal(definition.match(event).exclusive, true)
  const state = definition.start({}, { event })
  const revised = { ...event, seq: 8, data: { ...event.data, content: [{ type: 'text', text: '十点' }] } }
  const updated = definition.update({ state }, { event: revised })
  const node = definition.buildViewNode({ state: updated, key: 'u1', id: 'u1', start: { location: { kind: 'turn', turn: 1 } } })
  assert.equal(node.kind, 'user', 'native user renderer owns presentation')
  assert.equal(node.anchorSeq, 4)
  assert.equal(node.data.content[0].text, '十点')
})

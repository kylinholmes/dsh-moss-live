import test from 'node:test'
import assert from 'node:assert/strict'
const { SettingsEditor } = await import('../src/client/settings-editor.js').catch(() => ({}))

test('autosave coalesces rapid edits, preserves in-flight edits, and stops on a revision conflict', async () => {
  assert.equal(typeof SettingsEditor, 'function')
  let snapshot = { value: { appearance: { particles: 32 }, delegation: {} }, revision: 1, writable: true }
  const listeners = new Set(), writes = []
  const form = { getSnapshot: () => snapshot, subscribe: fn => { listeners.add(fn); return () => listeners.delete(fn) },
    mutate(ops, revision) { const result = Promise.withResolvers(); writes.push({ ops, revision, result }); return result.promise } }
  const editor = new SettingsEditor(form, { delay: 10000 })
  editor.edit('appearance', { particles: 40 }); editor.edit('appearance', { particles: 48 })
  const first = editor.flush()
  assert.equal(writes.length, 1); assert.equal(writes[0].revision, 1)
  assert.equal(writes[0].ops[0].value.particles, 48)
  editor.edit('appearance', { particles: 64 })
  snapshot = { ...snapshot, value: { ...snapshot.value, appearance: { particles: 48 } }, revision: 2 }
  for (const fn of listeners) fn()
  writes[0].result.resolve(true); await first
  assert.equal(editor.getSnapshot().value.appearance.particles, 64)
  const second = editor.flush()
  assert.equal(writes[1].revision, 2)
  snapshot = { ...snapshot, revision: 3 }
  writes[1].result.resolve(false); await second
  assert.equal(editor.getSnapshot().status, 'conflict')
  assert.equal(editor.getSnapshot().value.appearance.particles, 64)
  assert.equal(writes.length, 2, 'conflicts must not silently retry and overwrite another editor')
  editor.dispose()
})

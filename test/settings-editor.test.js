import test from 'node:test'
import assert from 'node:assert/strict'
import { setImmediate as nextTurn } from 'node:timers/promises'
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

test('disposal waits for the current write and drains newer edits before completing', async t => {
  let snapshot = { value: { appearance: { particles: 32 } }, revision: 1, writable: true }
  const listeners = new Set(), writes = []
  const form = { getSnapshot: () => snapshot, subscribe: fn => { listeners.add(fn); return () => listeners.delete(fn) },
    mutate(ops, revision) { const result = Promise.withResolvers(); writes.push({ ops, revision, result }); return result.promise } }
  const editor = new SettingsEditor(form, { delay: 10000 })
  t.after(async () => { for (const write of writes) write.result.resolve(false); await editor.dispose() })
  editor.edit('appearance', { particles: 40 })
  const first = editor.flush()
  assert.equal(editor.flush(), first, 'overlapping flush calls await the same native write')
  editor.edit('appearance', { particles: 64 })
  const disposal = editor.dispose()
  let disposed = false
  Promise.resolve(disposal).then(() => { disposed = true })
  await nextTurn()
  assert.equal(disposed, false, 'disposal must wait while the native write is pending')
  editor.edit('appearance', { particles: 96 })
  assert.equal(editor.getSnapshot().value.appearance.particles, 64, 'disposal immediately stops accepting edits')

  snapshot = { ...snapshot, value: { appearance: { particles: 40 } }, revision: 2 }
  for (const listener of listeners) listener()
  writes[0].result.resolve(true)
  await first
  await nextTurn()
  assert.equal(writes.length, 2)
  assert.equal(writes[1].revision, 2)
  assert.equal(writes[1].ops[0].value.particles, 64)
  assert.equal(disposed, false, 'disposal must also wait for the newer edit')
  assert.equal(editor.dispose(), disposal, 'repeated disposal shares the same completion')

  snapshot = { ...snapshot, value: { appearance: { particles: 64 } }, revision: 3 }
  for (const listener of listeners) listener()
  writes[1].result.resolve(true)
  await disposal
  assert.equal(snapshot.value.appearance.particles, 64)
  assert.equal(editor.getSnapshot().status, 'saved')
  assert.equal(listeners.size, 0)
  assert.equal(writes.length, 2)
})

test('disposal stops draining on a revision conflict without rebasing pending edits', async () => {
  let snapshot = { value: { appearance: { particles: 32 } }, revision: 1, writable: true }
  const writes = [], listeners = new Set()
  const form = { getSnapshot: () => snapshot, subscribe: fn => { listeners.add(fn); return () => listeners.delete(fn) },
    mutate(ops, revision) { const result = Promise.withResolvers(); writes.push({ ops, revision, result }); return result.promise } }
  const editor = new SettingsEditor(form, { delay: 10000 })
  editor.edit('appearance', { particles: 40 })
  const first = editor.flush()
  editor.edit('appearance', { particles: 64 })
  const disposal = editor.dispose()
  snapshot = { ...snapshot, value: { appearance: { particles: 80 } }, revision: 2 }
  writes[0].result.resolve(false)
  await first
  await disposal
  assert.equal(editor.getSnapshot().status, 'conflict')
  assert.equal(editor.getSnapshot().value.appearance.particles, 64)
  assert.equal(snapshot.value.appearance.particles, 80)
  assert.equal(writes.length, 1, 'disposal cannot overwrite a concurrent settings update')
  assert.equal(listeners.size, 0)
})

test('disposal retains newer edits when the native write fails', async () => {
  const snapshot = { value: { appearance: { particles: 32 } }, revision: 1, writable: true }
  const writes = []
  const form = { getSnapshot: () => snapshot, subscribe: () => () => {},
    mutate(ops, revision) { const result = Promise.withResolvers(); writes.push({ ops, revision, result }); return result.promise } }
  const editor = new SettingsEditor(form, { delay: 10000 })
  editor.edit('appearance', { particles: 40 })
  editor.flush()
  editor.edit('appearance', { particles: 64 })
  const disposal = editor.dispose()
  writes[0].result.reject(new Error('DSH connection closed'))
  await disposal
  assert.equal(editor.getSnapshot().status, 'error')
  assert.equal(editor.getSnapshot().value.appearance.particles, 64)
  assert.equal(snapshot.value.appearance.particles, 32)
  assert.equal(writes.length, 1, 'disposal cannot retry a failed native write automatically')
})

test('disposal flushes a debounced edit even when no native write has started', async () => {
  let snapshot = { value: { appearance: { particles: 32 } }, revision: 1, writable: true }
  const writes = []
  const form = { getSnapshot: () => snapshot, subscribe: () => () => {},
    mutate(ops, revision) { const result = Promise.withResolvers(); writes.push({ ops, revision, result }); return result.promise } }
  const editor = new SettingsEditor(form, { delay: 10000 })
  editor.edit('appearance', { particles: 64 })
  const disposal = editor.dispose()
  assert.equal(writes.length, 1)
  assert.equal(writes[0].revision, 1)
  assert.equal(writes[0].ops[0].value.particles, 64)
  snapshot = { ...snapshot, value: { appearance: { particles: 64 } }, revision: 2 }
  writes[0].result.resolve(true)
  await disposal
  assert.equal(editor.getSnapshot().status, 'saved')
  assert.equal(snapshot.value.appearance.particles, 64)
})

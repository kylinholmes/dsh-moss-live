import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { load } from 'js-yaml'
import { applyEntryPatches } from '@deepseek-ai/cordis-plugin-include'

test('native bundle patch activates exactly one AgentLoop provider without name-guard warnings', () => {
  const warnings = []
  const rows = applyEntryPatches([{ id: 'agent-loop', name: '@deepseek-ai/dsh-agent-loop', config: { agents: [] } }],
    load(readFileSync('cordis.patch.yml', 'utf8')), (...args) => warnings.push(args))
  assert.deepEqual(warnings, [])
  const active = rows.filter(row => !row.disabled && row.name.endsWith('/agent-loop'))
  assert.equal(active.length, 1)
  assert.equal(active[0].name, 'dsh-moss-live/agent-loop')
  assert.equal(rows.find(row => row.id === 'agent-loop').disabled, true)
  assert.ok(rows.find(row => row.id === 'dsh-moss-live'))
})

import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { execFileSync } from 'node:child_process'

test('构建产物是合法的模块注册', () => {
  execFileSync('node', ['scripts/build-client.mjs'])
  const out = readFileSync('lib/client.js', 'utf8')
  assert.match(out, /__ModuleLoader__\.load\(\{/)
  assert.match(out, /id: 'dsh-moss-live'/)
  assert.doesNotMatch(out, /^export /m)
})

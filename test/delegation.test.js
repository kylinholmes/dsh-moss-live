import test from 'node:test'
import assert from 'node:assert/strict'
const { Delegations } = await import('../src/host/delegation.js').catch(error => {
  if (error.code !== 'ERR_MODULE_NOT_FOUND') throw error
  return {}
})

test('MOSS delegates twice to native children with an ordinary route and deduplicates each id', async () => {
  assert.equal(typeof Delegations, 'function')
  const requests = [], sent = [], results = []
  const parent = { id: 'moss-live-main', session: { header: { cwd: 'C:/project' } } }
  const ctx = {
    agentPresets: { async resolve(id) { assert.equal(id, 'research'); return { id } } },
    agentDefaultModel: { currentSelection: () => ({ provider: 'ordinary', model: 'reasoner-2' }) },
    subagents: { async startActivation(spec) {
      requests.push(spec)
      const result = Promise.withResolvers(); results.push(result)
      return { childId: `child-${requests.length}`, result: result.promise, async dispose() {} }
    } },
    workingDirectory: { get: () => 'C:/project' },
  }
  const manager = new Delegations(ctx, parent, { agentPreset: 'research', provider: 'spawn' }, event => sent.push(event), 'epoch')
  const first = { id: 'a', objective: '分析计划', context: [{ role: 'user', content: '先分析' }], owner_turn_id: 'opaque' }
  const a = manager.handle(first), duplicate = manager.handle(first)
  const b = manager.handle({ ...first, id: 'b', objective: '检查移动布局' })
  assert.equal(a, duplicate)
  await new Promise(resolve => setImmediate(resolve))
  assert.equal(requests.length, 2)
  for (const request of requests) {
    assert.equal(request.request.parent, parent)
    assert.equal(request.delivery, 'parent', 'native parent delivery persists settlement notices without waking a text model')
    assert.deepEqual(request.request.agentOptions, { provider: 'ordinary', model: 'reasoner-2' })
    assert.equal(request.request.agentPreset, 'research')
    assert.match(request.request.prompt[0].text, /先分析/)
  }
  results[1].resolve({ stopReason: 'completed', output: [{ type: 'text', text: '布局通过' }] })
  results[0].resolve({ stopReason: 'completed', output: [{ type: 'text', text: '计划完成' }] })
  await Promise.all([a, b])
  assert.deepEqual(sent.filter(event => event.action === 'session.commentary.append').map(event => event.delegation_id), ['b', 'a'])
  assert.ok(sent.every(event => [...event.content].length <= 2000))
})

test('missing preset and MOSS default model fail explicitly before starting a child', async () => {
  assert.equal(typeof Delegations, 'function')
  let calls = 0
  for (const broken of ['preset', 'model']) {
    const sent = []
    const ctx = {
      agentPresets: { async resolve() { if (broken === 'preset') throw new Error('missing'); return { id: 'research' } } },
      agentDefaultModel: { currentSelection: () => ({ provider: 'moss', model: 'MOSS-2.0' }) },
      subagents: { startActivation() { calls++ } },
    }
    const parent = { model: { current: () => ({ provider: 'moss', model: 'MOSS-2.0' }) } }
    const manager = new Delegations(ctx, parent, { agentPreset: 'research', provider: 'spawn' }, event => sent.push(event), 'epoch')
    await manager.handle({ id: broken, objective: '执行', context: [] })
    assert.equal(sent.at(-1).status, 'failed')
  }
  assert.equal(calls, 0)
})

test('an explicit delegate model overrides the DSH default independently of the preset', async () => {
  let request
  const route = { provider: 'native-api', model: 'worker-next' }
  const ctx = {
    agentPresets: { resolve: async () => ({ id: 'minimal' }) },
    agentDefaultModel: { currentSelection: () => ({ provider: 'default', model: 'other' }) },
    workingDirectory: { get: () => 'C:/project' },
    subagents: { startActivation: async spec => { request = spec; return { childId: spec.childId, result: Promise.resolve({ stopReason: 'completed', output: [] }) } } },
  }
  await new Delegations(ctx, { id: 'moss-live-test' }, { provider: 'spawn', agentPreset: 'minimal', model: route }, () => {}, 'epoch')
    .handle({ id: 'one', objective: 'run', context: [] })
  assert.deepEqual(request.request.agentOptions, route)
  assert.equal(request.request.agentPreset, 'minimal')
})

import test from 'node:test'
import assert from 'node:assert/strict'
const { assembleMossPrompt } = await import('../src/host/prompt.js').catch(error => {
  if (error.code !== 'ERR_MODULE_NOT_FOUND') throw error
  return {}
})

test('DSH persona is rendered in scope and projected to actual voice capabilities', async () => {
  assert.equal(typeof assembleMossPrompt, 'function')
  let requested
  const agent = { session: { deriveMessages: () => [
    { role: 'user', content: [{ type: 'text', text: '记住我的时间安排' }] },
    { role: 'user', source: { kind: 'subagent-settled', senderSessionId: 'child-a' }, content: [{ type: 'text', text: '子任务完成：明天十点' }] },
  ] } }
  const prompt = await assembleMossPrompt(agent, { async assemble(context) {
    requested = context.scope
    return { sections: [
      { name: 'deployment:persona-prefix', text: '你是 {{name}}，用中文回答。' },
      { name: 'tool:bash', text: '直接调用 bash 执行工具。' },
    ], variables: { name: '小鱼' }, contexts: [], tools: [] }
  } })
  assert.equal(requested, agent)
  assert.match(prompt.persona.prompt, /小鱼/)
  assert.doesNotMatch(JSON.stringify(prompt), /调用 bash/)
  assert.match(prompt.instructions, /记住我的时间安排/)
  assert.match(prompt.instructions, /委派/)
  assert.match(prompt.instructions, /child-a/)
  assert.match(prompt.instructions, /子任务完成：明天十点/)
  assert.deepEqual(prompt.tools, [])
})

test('oversized native persona is rejected explicitly instead of silently truncating rules', async () => {
  assert.equal(typeof assembleMossPrompt, 'function')
  await assert.rejects(assembleMossPrompt({ scope: {}, session: { deriveMessages: () => [] } }, {
    async assemble() { return { sections: [{ name: 'deployment:persona-prefix', text: '鱼'.repeat(8001) }], contexts: [], variables: {}, tools: [] } },
  }), /8000/)
})

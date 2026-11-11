import test from 'node:test'
import assert from 'node:assert/strict'
import { mkdir, mkdtemp, rm } from 'node:fs/promises'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { Context } from '@deepseek-ai/cordis'
import AgentRegistry from '@deepseek-ai/dsh-agent'
import SessionStore from '@deepseek-ai/dsh-session'
import Projections from '@deepseek-ai/dsh-session-projection'
import * as Jsonl from '@deepseek-ai/dsh-session-persistence-jsonl'
import LlmRuntime, { LlmAdapter, createUserMessage } from '@deepseek-ai/dsh-llm'
import SystemPrompt from '@deepseek-ai/dsh-system-prompt'
import Tools from '@deepseek-ai/dsh-tools'
import * as ToolExecutor from '@deepseek-ai/dsh-tool-executor-native'
import FsLocal from '@deepseek-ai/dsh-fs-local'
import WorkingDirectory from '@deepseek-ai/dsh-working-directory'
import Subagents from '@deepseek-ai/dsh-subagent'
import * as Spawn from '@deepseek-ai/dsh-subagent-spawn-in-process'

const implementation = await import('../src/host/native-agent.js').catch(error => {
  if (error.code !== 'ERR_MODULE_NOT_FOUND') throw error
  return {}
})
const route = { provider: 'moss-test', model: 'moss-live-1.0' }
const testTemp = fileURLToPath(new URL('../.superpowers/test-data/', import.meta.url))
await mkdir(testTemp, { recursive: true })

async function harness(t, root) {
  const ctx = new Context()
  await ctx.plugin(SessionStore)
  await ctx.plugin(Projections)
  await ctx.plugin(AgentRegistry)
  await ctx.plugin(Jsonl, { root, compression: 'none' })
  t.after(() => ctx.fiber.dispose())
  let runtime
  await ctx.plugin({
    name: 'moss-test-runtime', inject: ['sessions', 'agents', 'sessionPersistence'],
    apply(scoped) { runtime = scoped },
  })
  assert.ok(runtime, 'the real DSH services must activate the runtime scope')
  return runtime
}

test('MOSS uses one native Session writer, restores history and advances native turns', async t => {
  assert.equal(typeof implementation.createMossAgent, 'function', 'native MOSS factory must exist')
  const root = await mkdtemp(join(testTemp, 'moss-native-'))
  t.after(() => rm(root, { recursive: true, force: true }))
  const ctx = await harness(t, root)
  const options = { sessionId: 'moss-live-native-test', meta: { cwd: root }, route }
  const first = await implementation.createMossAgent(ctx, ctx, options)
  assert.equal(ctx.agents.get(options.sessionId), first.agent)
  assert.equal(ctx.sessions.get(options.sessionId), first.agent.session)
  first.agent.voice.configure({ epoch: 'socket-a', prompt: '你是 MOSS。', route })
  first.agent.voice.user({ turn: 'input-1', text: '明天十点开会。' })
  first.agent.voice.reply({ run_id: 'reply-a', turn_id: 'opaque-response-42', text: '我记住了。', status: 'completed' })
  first.agent.voice.reply({ run_id: 'reply-a', turn_id: 'opaque-response-42', text: '我记住了。', status: 'completed' })
  await ctx.sessions.flush(first.agent.session)
  await first.dispose()
  assert.equal(ctx.agents.get(options.sessionId), undefined)
  assert.equal(ctx.sessions.get(options.sessionId), undefined)
  const resumed = await implementation.resumeMossAgent(ctx, ctx, { resumeSessionId: options.sessionId, route })
  const history = resumed.agent.session.snapshotEvents()
  assert.equal(history.filter(event => event.type === 'user/message').length, 1)
  assert.equal(history.filter(event => event.type === 'assistant/message').length, 1, 'duplicate vendor final must be ignored')
  assert.equal(history.find(event => event.type === 'assistant/message').data.message.content[0].text, '我记住了。')
  resumed.agent.voice.configure({ epoch: 'socket-b', prompt: '你是 MOSS。', route })
  resumed.agent.voice.user({ turn: 'input-1', text: '现在几点？' })
  resumed.agent.voice.reply({ run_id: 'reply-a', turn_id: 'response-1', text: '下午三点。', status: 'completed' })
  const turns = resumed.agent.session.snapshotEvents().filter(event => event.type === 'turn/start').map(event => event.data.turn)
  assert.deepEqual(turns, [1, 2], 'vendor input ids must not determine native turn numbers')
  await resumed.dispose()
})

test('fixed MOSS model rejects even same-route public selection before global defaults can change', async t => {
  assert.equal(typeof implementation.createMossAgent, 'function', 'native MOSS factory must exist')
  const root = await mkdtemp(join(testTemp, 'moss-native-fixed-'))
  t.after(() => rm(root, { recursive: true, force: true }))
  const ctx = await harness(t, root)
  const handle = await implementation.createMossAgent(ctx, ctx, { sessionId: 'moss-live-fixed', meta: { cwd: root }, route })
  assert.deepEqual(handle.agent.model.current(), route)
  assert.throws(() => handle.agent.model.select({ provider: 'ordinary', model: 'other' }), /fixed|固定/i)
  assert.throws(() => handle.agent.model.select(route), /fixed|固定/i)
  await handle.dispose()
})

test('connecting or failing before any speech does not create an empty completed chat turn', async t => {
  const root = await mkdtemp(join(testTemp, 'moss-native-empty-'))
  t.after(() => rm(root, { recursive: true, force: true }))
  const ctx = await harness(t, root)
  const handle = await implementation.createMossAgent(ctx, ctx, { sessionId: 'moss-live-empty', meta: { cwd: root }, route })
  handle.agent.voice.configure({ epoch: 'mic-failed', prompt: 'persona', route })
  handle.agent.voice.end()
  assert.equal(handle.agent.session.snapshotEvents().filter(event => event.type === 'turn/start').length, 0)
  handle.agent.voice.configure({ epoch: 'with-speech', prompt: 'persona', route })
  handle.agent.voice.user({ turn: 'input', text: '你好' })
  handle.agent.voice.reply({ run_id: 'run', turn_id: 'reply', text: '你好。', status: 'completed' })
  const events = handle.agent.session.snapshotEvents()
  assert.equal(events.filter(event => event.type === 'turn/start').length, 1)
  assert.equal(events.filter(event => event.type === 'system/message').length, 1)
  assert.ok(events.findIndex(event => event.type === 'system/message') < events.findIndex(event => event.type === 'user/message'))
  await handle.dispose()
})

test('future MOSS model ids pass unchanged through configuration, history and cold restore', async t => {
  const root = await mkdtemp(join(testTemp, 'moss-native-version-'))
  t.after(() => rm(root, { recursive: true, force: true }))
  const ctx = await harness(t, root)
  for (const [index, model] of ['moss-live-2.0', 'vendor/MOSS-Live-2.0-preview'].entries()) {
    const futureRoute = { provider: 'moss-test', model }
    const sessionId = `moss-live-future-${index}`
    const handle = await implementation.createMossAgent(ctx, ctx, { sessionId, meta: { cwd: root }, route: futureRoute })
    handle.agent.voice.configure({ epoch: 'future', prompt: '', route: futureRoute })
    handle.agent.voice.reply({ run_id: 'r1', turn_id: 't1', text: '你好。', status: 'completed' })
    assert.equal(handle.agent.session.snapshotEvents().find(event => event.type === 'assistant/message').data.message.source.model, model)
    await handle.dispose()
    const restored = await implementation.resumeMossAgent(ctx, ctx, { resumeSessionId: sessionId })
    assert.deepEqual(restored.agent.model.current(), futureRoute)
    await restored.dispose()
  }
})

test('failed native setup releases registry entries and exclusive write ownership', async t => {
  const root = await mkdtemp(join(testTemp, 'moss-native-rollback-'))
  t.after(() => rm(root, { recursive: true, force: true }))
  const ctx = await harness(t, root)
  const options = { sessionId: 'moss-live-rollback', meta: { cwd: root }, route }
  await assert.rejects(implementation.createMossAgent(ctx, ctx, { ...options, setup() { throw new Error('setup refused') } }), /setup refused/)
  assert.equal(ctx.agents.get(options.sessionId), undefined)
  assert.equal(ctx.sessions.get(options.sessionId), undefined)
  const recovered = await implementation.resumeMossAgent(ctx, ctx, { resumeSessionId: options.sessionId })
  await recovered.dispose()
})

test('owner unload during asynchronous setup never publishes a late Agent', { timeout: 3000 }, async t => {
  const root = await mkdtemp(join(testTemp, 'moss-native-owner-'))
  t.after(() => rm(root, { recursive: true, force: true }))
  const ctx = await harness(t, root)
  let ownerCtx
  const owner = await ctx.plugin({ name: 'temporary-owner', apply(child) { ownerCtx = child } })
  const entered = Promise.withResolvers(), release = Promise.withResolvers()
  const creating = implementation.createMossAgent(ctx, ownerCtx, {
    sessionId: 'moss-live-owner', meta: { cwd: root }, route,
    async setup() { entered.resolve(); await release.promise },
  })
  const rejected = assert.rejects(creating, /owner disposed/)
  await entered.promise
  const unloading = owner.dispose()
  release.resolve()
  await Promise.all([unloading, rejected])
  assert.equal(ctx.agents.get('moss-live-owner'), undefined)
  assert.equal(ctx.sessions.get('moss-live-owner'), undefined)
  const restored = await implementation.resumeMossAgent(ctx, ctx, { resumeSessionId: 'moss-live-owner' })
  await restored.dispose()
})

test('transcript revisions replace a native user message and interruption keeps partial reply', async t => {
  assert.equal(typeof implementation.createMossAgent, 'function', 'native MOSS factory must exist')
  const root = await mkdtemp(join(testTemp, 'moss-native-revise-'))
  t.after(() => rm(root, { recursive: true, force: true }))
  const ctx = await harness(t, root)
  const handle = await implementation.createMossAgent(ctx, ctx, { sessionId: 'moss-live-revise', meta: { cwd: root }, route })
  const { agent } = handle
  agent.voice.configure({ epoch: 'one', prompt: '', route })
  agent.voice.user({ turn: '1', text: '明天九点。' })
  agent.voice.user({ turn: '1', text: '明天十点。' })
  agent.voice.reply({ run_id: 'a', turn_id: 'different-id', text: '好的，明天', status: 'aborted' })
  const messages = agent.session.deriveMessages()
  assert.equal(messages.filter(message => message.role === 'user').length, 1)
  assert.equal(messages.find(message => message.role === 'user').content[0].text, '明天十点。')
  const reply = agent.session.snapshotEvents().find(event => event.type === 'assistant/message')
  assert.equal(reply.data.interrupted, true)
  assert.equal(reply.data.message.content[0].text, '好的，明天')
  await handle.dispose()
})

test('one official AgentLoop provider routes MOSS and leaves ordinary Agent execution intact', async t => {
  const module = await import('../src/host/agent-loop.js').catch(error => {
    if (error.code !== 'ERR_MODULE_NOT_FOUND') throw error
    return {}
  })
  assert.equal(typeof module.default, 'function', 'the native AgentLoop routing provider must exist')
  const root = await mkdtemp(join(testTemp, 'moss-native-route-'))
  const ctx = new Context()
  t.after(async () => { await ctx.fiber.dispose(); await rm(root, { recursive: true, force: true }) })
  for (const plugin of [LlmRuntime, SessionStore, Projections, SystemPrompt, Tools, ToolExecutor, AgentRegistry]) await ctx.plugin(plugin)
  await ctx.plugin(Jsonl, { root, compression: 'none' })
  let modelCalls = 0
  const slowEntered = Promise.withResolvers(), releaseSlow = Promise.withResolvers()
  class TextAdapter extends LlmAdapter {
    async *stream(options) {
      modelCalls++
      if (options.model === 'slow') {
        slowEntered.resolve()
        await Promise.race([releaseSlow.promise, new Promise(resolve => options.signal.addEventListener('abort', resolve, { once: true }))])
        options.signal.throwIfAborted()
      }
      yield { type: 'block-start', index: 0, blockType: 'text' }
      yield { type: 'text-delta', index: 0, text: 'ordinary reply' }
      yield { type: 'block-end', index: 0, block: { type: 'text', text: 'ordinary reply' } }
      yield { type: 'finish', reason: { kind: 'stop' } }
    }
  }
  ctx.llm.registerAdapter(['ordinary'], new TextAdapter())
  await ctx.plugin(module.default, { agents: [] })
  await ctx.plugin(FsLocal)
  await ctx.plugin(WorkingDirectory, { defaultDirectory: root })
  await ctx.plugin(Subagents)
  await ctx.plugin(Spawn, { providerName: 'spawn' })
  const moss = await ctx.agents.create({ sessionId: 'moss-live-routed', meta: { cwd: root }, route })
  assert.ok(moss.agent.voice)
  const ordinary = await ctx.agents.create({ sessionId: 'session-ordinary', meta: { cwd: root }, agentOptions: { provider: 'ordinary', model: 'text' } })
  ordinary.agent.followup(createUserMessage({ content: [{ type: 'text', text: 'hello' }], source: { kind: 'user' } }))
  await ordinary.agent.whenIdle()
  assert.equal(modelCalls, 1, JSON.stringify(ordinary.agent.session.snapshotEvents().filter(event => event.type === 'turn/end')))
  assert.ok(ordinary.agent.session.snapshotEvents().some(event => event.type === 'assistant/message'))
  const tasks = await Promise.all(['整理明日安排', '查阅会议资料'].map(label => ctx.subagents.startActivation({
    provider: 'spawn', label, delivery: 'parent', signal: new AbortController().signal,
    request: {
      parent: moss.agent, cwd: root,
      prompt: [{ type: 'text', text: label }],
      agentOptions: { provider: 'ordinary', model: 'text' },
    },
  })))
  assert.notEqual(tasks[0].childId, tasks[1].childId)
  const results = await Promise.all(tasks.map(task => task.result))
  assert.equal(modelCalls, 3, 'two children must call the ordinary model; MOSS parent must stay silent')
  for (const result of results) assert.ok(result.output.some(block => block.type === 'text' && block.text === 'ordinary reply'))
  assert.equal(moss.agent.session.deriveMessages().filter(message => message.source?.kind === 'subagent-settled').length, 2)
  assert.equal(moss.agent.session.snapshotEvents().filter(event => event.type === 'assistant/message').length, 0)
  await ordinary.dispose()
  const activeChild = await ctx.subagents.startActivation({
    provider: 'spawn', label: 'still running', delivery: 'parent', signal: new AbortController().signal,
    request: { parent: moss.agent, cwd: root, prompt: [{ type: 'text', text: 'finish later' }], agentOptions: { provider: 'ordinary', model: 'slow' } },
  })
  await slowEntered.promise
  const disposing = moss.dispose()
  await new Promise(resolve => setImmediate(resolve))
  releaseSlow.resolve()
  await Promise.all([disposing, activeChild.result])
  const restored = await ctx.agents.resume({ resumeSessionId: 'moss-live-routed' })
  assert.ok(restored.agent.voice, 'native registry cold resume must select the MOSS driver')
  assert.equal(restored.agent.session.deriveMessages().filter(message => message.source?.kind === 'subagent-settled').length, 3, 'an active child must settle durably before its exact parent instance is released')
  await restored.dispose()
})

import { createScope } from '@deepseek-ai/dsh-scope'
import { agentEvents } from '@deepseek-ai/dsh-agent'
import { interruptedTurnClosers, SessionPreparation } from '@deepseek-ai/dsh-session'
import { createUserMessage, createAssistantMessage, createSystemMessage, AssistantStreamAccumulator } from '@deepseek-ai/dsh-llm'
import { voiceRoute } from '../shared/models.js'

/** A driver-owned namespace; native preset selection never changes the driver. */
export const isMossSession = id => typeof id === 'string' && id.startsWith('moss-live-')

/** MOSS owns this Agent's log; the ordinary text loop never writes to it. */
class MossAgent {
  constructor(runtimeCtx, session, route) {
    this.route = voiceRoute(route)
    this.id = session.id
    this.session = session
    this.scope = createScope(runtimeCtx, this)
    this.ctx = this.scope.ctx
    this.status = 'idle'
    this.dispatch = agentEvents(runtimeCtx, this)
    this.abort = new AbortController()
    this.closed = false
    this.epoch = null
    this.open = null
    this.counter = 0
    this.inputs = new Map()
    this.replies = new Set()
    for (const event of session.snapshotEvents()) {
      if (event.type === 'turn/start') this.counter = Math.max(this.counter, event.data.turn)
      if (event.type === 'user/message' && event.data.source.voice) {
        const { epoch, turn } = event.data.source.voice
        this.inputs.set(JSON.stringify([epoch, turn]), event)
      }
      if (event.type === 'assistant/message') {
        const meta = event.data.message.source.replayState?.response?.moss
        if (meta) this.replies.add(JSON.stringify([meta.epoch, meta.run_id, meta.turn_id]))
      }
    }
    this.model = {
      current: () => ({ ...this.route }),
      select: () => { throw new Error('MOSS 语音会话使用固定模型；请在插件设置中选择语音模型。') },
    }
    // Subagent notifications are retained as context and never start another model.
    const unsupported = () => { throw new Error('MOSS 当前端点不支持普通文字输入；请使用语音。') }
    this.inbox = {
      nextTurn: [], nextStep: [], clear() {},
      append: (_target, message) => this.acceptContext(message),
      prepend: (_target, message) => this.acceptContext(message),
      replace: unsupported, remove: () => false, splice: unsupported,
    }
    this.voice = {
      configure: data => this.configure(data),
      user: data => this.recordUser(data),
      reply: data => this.recordReply(data),
      end: () => this.endTurn({ kind: 'completed' }),
    }
  }

  assertLive() {
    if (this.closed) throw new Error('MOSS Agent is disposed')
    this.ctx.fiber.assertActive()
  }

  configure({ epoch, prompt, route }) {
    this.assertLive()
    if (typeof epoch !== 'string' || !epoch) throw new TypeError('MOSS connection epoch is required')
    const selected = voiceRoute(route)
    this.endTurn({ kind: 'completed' })
    this.epoch = epoch
    this.route = selected
    this.session.append('model/selection', this.route)
    this.ensureTurn()
    this.session.append('system/message', {
      turn: this.open.turn, step: 1, message: createSystemMessage(prompt),
    }, { surfaceOp: 'append' })
  }

  get options() { return this.route }

  ensureTurn() {
    this.assertLive()
    if (!this.epoch) throw new Error('MOSS must be configured before recording speech')
    if (this.open) return
    const turn = ++this.counter
    this.session.append('turn/start', { turn })
    this.session.append('step/start', { turn, step: 1 })
    this.open = { turn }
  }

  recordUser({ turn, text }) {
    this.assertLive()
    if (!this.epoch || typeof text !== 'string' || typeof turn !== 'string' || !turn) {
      throw new TypeError('A configured MOSS transcript needs text and an input turn id')
    }
    const key = JSON.stringify([this.epoch, turn])
    const previous = this.inputs.get(key)
    if (previous?.data.content[0]?.text === text) return previous
    const message = previous
      ? { ...previous.data, content: [{ type: 'text', text }] }
      : createUserMessage({ content: [{ type: 'text', text }], source: { kind: 'user', voice: { epoch: this.epoch, turn } } })
    const event = this.session.append('user/message', message, previous
      ? { surfaceOp: { op: 'replace', startSeq: previous.seq, endSeq: previous.seq }, sourceEventSeqs: [previous.seq] }
      : { surfaceOp: 'append' })
    this.inputs.set(key, event)
    return event
  }

  recordReply({ run_id, turn_id, text, status }) {
    this.assertLive()
    if (!this.epoch || !run_id || !turn_id || typeof text !== 'string') throw new TypeError('MOSS reply identity is required')
    const key = JSON.stringify([this.epoch, run_id, turn_id])
    if (this.replies.has(key)) return
    this.ensureTurn()
    const accumulator = new AssistantStreamAccumulator()
    const chunks = text ? [
      { type: 'block-start', index: 0, blockType: 'text' },
      { type: 'text-delta', index: 0, text },
      { type: 'block-end', index: 0, block: { type: 'text', text } },
      { type: 'finish', reason: { kind: 'stop' } },
    ] : [{ type: 'finish', reason: { kind: 'stop' } }]
    for (const chunk of chunks) accumulator.push({ time: Date.now(), chunk })
    if (text) {
      this.session.append('assistant/message', {
        turn: this.open.turn, step: 1,
        message: createAssistantMessage({
          content: [{ type: 'text', text }],
          source: { ...this.route, replayState: { response: { moss: { epoch: this.epoch, run_id, turn_id } } } },
        }),
        stream: [...accumulator.snapshot()],
        ...(status === 'aborted' ? { interrupted: true } : {}),
      }, { surfaceOp: 'append' })
    } else {
      this.session.append('assistant/attempt', { turn: this.open.turn, step: 1, stream: [...accumulator.snapshot()] })
    }
    this.replies.add(key)
    this.endTurn(status === 'failed'
      ? { kind: 'error', error: { code: 'MOSS_RESPONSE_FAILED', message: 'MOSS 语音回复失败。' } }
      : { kind: 'completed' })
  }

  endTurn(reason) {
    if (!this.open) return
    const { turn } = this.open
    this.session.append('step/end', { turn, step: 1 })
    this.session.append('turn/end', { turn, reason })
    this.open = null
  }

  acceptContext(message) {
    this.assertLive()
    if (message.source.kind === 'user') throw new Error('MOSS 端点暂不支持文字发送。')
    this.session.append('user/message', message, { surfaceOp: 'append' })
  }

  send(message) { this.acceptContext(message) }
  followup(message) { this.acceptContext(message) }
  steer(message) { this.acceptContext(message) }
  inject(message) { this.acceptContext(message) }
  whenIdle() { return Promise.resolve() }
  runMaintenance(task) { this.assertLive(); return Promise.resolve(task(this.abort.signal)) }
  cancel(cause) {
    this.onStop?.(cause)
    this.endTurn({ kind: 'aborted', reason: cause })
  }
}

/** Publish through the same ordered Session/Agent primitives as the official driver. */
async function publish(runtimeCtx, ownerCtx, session, handle, options, source) {
  let agent, detachSession, detachAgent, disposing
  let finished = false
  const ready = Promise.withResolvers()
  const controller = new AbortController()
  const abort = () => controller.abort(new Error('MOSS Agent owner disposed during initialization'))
  const signal = options.signal ? AbortSignal.any([options.signal, controller.signal]) : controller.signal
  const dispose = () => disposing ??= (async () => {
    abort()
    await ready.promise
    const failures = []
    for (const operation of [
      async () => { if (finished) agent.cancel({ kind: 'disposed' }); if (agent) { agent.closed = true; agent.abort.abort() } },
      () => agent?.scope.dispose(),
      () => handle.close(),
      () => detachAgent?.(),
      () => detachSession?.(),
    ]) {
      try { await operation() } catch (error) { failures.push(error) }
    }
    if (failures.length) throw new AggregateError(failures, 'MOSS Agent cleanup failed')
  })()
  const releaseOwner = ownerCtx.effect(() => () => dispose(), `moss.agent(${session.id})`)
  try {
    signal.throwIfAborted()
    ownerCtx.fiber.assertActive()
    runtimeCtx.fiber.assertActive()
    agent = new MossAgent(runtimeCtx, session, options.route)
    detachSession = agent.ctx.sessions.enter(session)
    agent.ctx.sessions.announce(session)
    if (source === 'startup') session.append('model/selection', agent.route)
    const commit = await options.setup?.(agent.ctx, agent)
    signal.throwIfAborted()
    commit?.commit()
    detachAgent = runtimeCtx.agents.enter(agent, options.parentAgent)
    await runtimeCtx.agents.announce(agent, source, signal)
    signal.throwIfAborted()
    finished = true
    ready.resolve()
    return { agent, dispose: async () => { try { await dispose() } finally { await releaseOwner() } } }
  } catch (error) {
    ready.resolve()
    await dispose().catch(cleanup => { throw new AggregateError([error, cleanup], 'MOSS Agent initialization failed') })
    throw error
  }
}

/** Create one exclusively owned native MOSS Session and its live Agent. */
export async function createMossAgent(runtimeCtx, ownerCtx, options) {
  if (!isMossSession(options.sessionId)) throw new Error('Invalid MOSS session namespace')
  ownerCtx.fiber.assertActive()
  const preparation = SessionPreparation.create(runtimeCtx.sessions.prepare(options.sessionId, { meta: options.meta }))
  const { session } = preparation
  let handle
  try {
    const persistence = runtimeCtx.get('sessionPersistence')
    if (!persistence) throw new Error('MOSS needs DSH SessionPersistence')
    handle = await persistence.create(session.header, { signal: options.signal })
    return await publish(runtimeCtx, ownerCtx, session, handle, options, 'startup')
  } catch (error) {
    await handle?.close()
    throw error
  } finally {
    preparation[Symbol.dispose]()
  }
}

/** Resume with exclusive write ownership and native interrupted-turn recovery. */
export async function resumeMossAgent(runtimeCtx, ownerCtx, options) {
  const id = options.resumeSessionId
  if (!isMossSession(id)) throw new Error('Invalid MOSS session namespace')
  ownerCtx.fiber.assertActive()
  const persistence = runtimeCtx.get('sessionPersistence')
  if (!persistence) throw new Error('MOSS needs DSH SessionPersistence')
  const handle = await persistence.open(id, 'write', { signal: options.signal })
  let preparation
  try {
    const read = await handle.read(0, undefined, { signal: options.signal })
    const closers = interruptedTurnClosers(read.events)
    if (closers.length) await handle.append(closers)
    preparation = SessionPreparation.create(runtimeCtx.sessions.prepare(id, {
      seed: [...read.events, ...closers], meta: { ...handle.header },
      inheritedEventCount: handle.inheritedEventCount, eventState: read.eventState,
    }))
    const suffix = preparation.session.snapshotEvents(read.events.length + closers.length)
    if (suffix.length) await handle.append(suffix)
    const recorded = [...read.events].reverse().find(event => event.type === 'model/selection')?.data
    return await publish(runtimeCtx, ownerCtx, preparation.session, handle, { ...options, route: options.route ?? recorded }, 'resume')
  } catch (error) {
    await handle.close()
    throw error
  } finally {
    preparation?.[Symbol.dispose]()
  }
}

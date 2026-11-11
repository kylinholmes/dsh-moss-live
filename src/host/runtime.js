import { randomUUID } from 'node:crypto'
import { Service } from '@deepseek-ai/cordis'
import { Config, publicSettings } from '../config.js'
import { isMossSession } from './native-agent.js'
import { registerRoutes } from './routes.js'
import { MossSession } from './moss-session.js'
import { assembleMossPrompt } from './prompt.js'
import { Delegations } from './delegation.js'
import { DshModels } from './dsh-models.js'
import { probeConnection } from './probe.js'

export { Config } from '../config.js'

export default class MossRuntime extends Service {
  static Config = Config
  static inject = ['agents', 'sessions', 'sessionPersistence', 'llm', 'settings', 'credentials', 'webServer', 'connection',
    'agentPresets', 'systemPrompt', 'workingDirectory', 'fs', 'subagents', 'agentDefaultModel']
  constructor(ctx, config) {
    super(ctx, 'mossLive')
    this.owner = ctx
    this.config = config
    this.models = new DshModels(ctx)
    this.calls = new Map()
    this.handles = new Map()
    this.loading = new Map()
    this.closed = false
    this.probes = new Set()
    ctx.inject(['settings'], child => { child.effect(() => child.settings.configure({ auto: false }, ctx.fiber)) })
    ctx.effect(() => registerRoutes(ctx, ctx.webServer, this), 'moss.authenticated-routes')
    ctx.effect(() => async () => {
      this.closed = true
      for (const probe of this.probes) probe.abort()
      for (const call of this.calls.values()) call.session?.stop()
      await Promise.allSettled([...this.loading.values()])
      await Promise.all([...this.handles.values()].map(handle => handle.dispose()))
      this.handles.clear()
    }, 'moss.runtime')
  }
  async settings() {
    return { ...publicSettings(this.config), models: await this.models.catalog(), providers: this.owner.llm.listProviders().map(({ id, name }) => ({ id, name })),
      agentPresets: (await this.owner.agentPresets.list()).map(preset => ({ id: preset.id, name: preset.name ?? preset.id, broken: !!preset.broken })) }
  }
  selection() { return this.models.selection(this.config.voiceModel.get()) }
  async testModel(route, signal) {
    if (this.closed || this.probes.size >= 2) throw Object.assign(new Error('Probe busy'), { publicMessage: '已有连接测试正在进行，请稍后重试。' })
    const abort = new AbortController()
    this.probes.add(abort)
    try {
      const connection = await this.models.connection(route)
      return await probeConnection(connection, { signal: signal ? AbortSignal.any([signal, abort.signal]) : abort.signal })
    } finally { this.probes.delete(abort) }
  }
  async create(directory) {
    this.owner.fiber.assertActive()
    if (this.closed || this.handles.size + this.loading.size >= 32) throw new Error('MOSS session limit')
    const route = this.selection()
    const target = await this.owner.fs.resolve(directory)
    if ((await this.owner.fs.stat(target))?.type !== 'directory') throw new Error('Invalid project directory')
    const cwd = this.owner.fs.processPath(target)
    const sessionId = `moss-live-${randomUUID()}`
    const preset = await this.owner.agentPresets.resolve()
    if (preset.broken) throw new Error('Invalid DSH preset')
    const operation = this.owner.agents.create({ sessionId, route, meta: { cwd }, setup: async (agentCtx, agent) => {
      await this.owner.agentPresets.mount(agentCtx, preset.id)
      agent.session.append('agent-preset/selected', { agentPreset: preset.id })
    } })
    this.loading.set(sessionId, operation)
    try {
      const handle = await operation
      this.handles.set(sessionId, handle)
      if (this.closed) { await handle.dispose(); this.handles.delete(sessionId); throw new Error('MOSS disposed') }
      return { sessionId }
    } finally { this.loading.delete(sessionId) }
  }
  async agentFor(id) {
    const current = this.owner.agents.get(id)
    if (current) return current
    if (!this.loading.has(id)) {
      const operation = this.owner.agents.resume({ resumeSessionId: id, setup: async (agentCtx, agent) => {
        const preset = [...agent.session.snapshotEvents()].reverse().find(event => event.type === 'agent-preset/selected')?.data.agentPreset
        await this.owner.agentPresets.mount(agentCtx, preset)
      } }).then(async handle => {
        if (this.closed) { await handle.dispose(); throw new Error('MOSS disposed') }
        this.handles.set(id, handle)
        return handle
      }).finally(() => this.loading.delete(id))
      this.loading.set(id, operation)
    }
    return (await this.loading.get(id)).agent
  }
  async attach(peer, sessionId) {
    if (!isMossSession(sessionId) || this.closed) throw new Error('MOSS unavailable')
    if (this.calls.has(sessionId) || this.calls.size >= 4) throw new Error('MOSS voice session already connected')
    const call = { peer, session: null, closed: false }
    this.calls.set(sessionId, call)
    const closed = () => { call.closed = true }
    peer.once('close', closed)
    try {
      const agent = await this.agentFor(sessionId)
      if (!agent.voice) throw new Error('Not a MOSS Agent')
      const route = this.selection()
      const [connection, prompt] = await Promise.all([
        this.models.connection(route), assembleMossPrompt(agent, this.owner.systemPrompt),
      ])
      this.owner.fiber.assertActive()
      if (this.closed || call.closed) throw new Error('Browser disconnected')
      const stop = () => {
        if (this.calls.get(sessionId) === call) this.calls.delete(sessionId)
        if (agent.onStop === call.cancelVoice) agent.onStop = undefined
      }
      call.session = new MossSession({ peer, agent, connection, prompt, onStop: stop })
      const tasks = new Delegations(this.owner, agent, structuredClone(this.config.delegation.get()), event => call.session.send(event), call.session.epoch)
      call.session.onDelegation = data => { void tasks.handle(data) }
      call.session.onCancelDelegation = id => { void tasks.cancel(id).catch(() => {}) }
      call.cancelVoice = () => call.session.stop()
      agent.onStop = call.cancelVoice
      await call.session.start()
    } catch (error) {
      call.session?.stop()
      if (this.calls.get(sessionId) === call) this.calls.delete(sessionId)
      throw error
    } finally { peer.off('close', closed) }
  }
}

import AgentLoop from '@deepseek-ai/dsh-agent-loop'
import { createMossAgent, resumeMossAgent, isMossSession } from './native-agent.js'

/** Replaces the profile's single AgentLoop provider; normal Agents use super. */
export default class MossAgentLoop extends AgentLoop {
  constructor(ctx, config) {
    super(ctx, config)
    // Keep dependency resolution separate from Cordis caller-traced service access.
    this.mossRuntime = { ctx, handles: new Set() }
    ctx.effect(() => async () => {
      const results = await Promise.allSettled([...this.mossRuntime.handles].map(handle => handle.dispose()))
      const errors = results.filter(result => result.status === 'rejected').map(result => result.reason)
      if (errors.length) throw new AggregateError(errors, 'MOSS driver shutdown failed')
    }, 'moss.loop.transactions')
  }

  async own(pending) {
    const handle = await pending
    try { this.mossRuntime.ctx.fiber.assertActive() }
    catch (error) { await handle.dispose(); throw error }
    this.mossRuntime.handles.add(handle)
    return {
      agent: handle.agent,
      dispose: async () => {
        try { await handle.dispose() }
        finally { this.mossRuntime.handles.delete(handle) }
      },
    }
  }

  createAgent(ownerCtx, options) {
    if (!isMossSession(options.sessionId)) return super.createAgent(ownerCtx, options)
    const route = options.route ?? this.mossRuntime.ctx.get('mossLive')?.selection()
    if (!route) throw new Error('MOSS is not enabled; create a voice session from its entry.')
    return this.own(createMossAgent(this.mossRuntime.ctx, ownerCtx, { ...options, route }))
  }

  resume(ownerCtx, options) {
    if (!isMossSession(options.resumeSessionId)) return super.resume(ownerCtx, options)
    return this.own(resumeMossAgent(this.mossRuntime.ctx, ownerCtx, options))
  }
}

import { createHash } from 'node:crypto'
import { unicodeSlice } from './prompt.js'

/** Native activation handles own tasks; media/view lifetimes do not own them. */
export class Delegations {
  constructor(ctx, parent, config, send, epoch) {
    Object.assign(this, { ctx, parent, config, send, epoch })
    this.tasks = new Map()
  }
  handle(data) {
    if (typeof data?.id !== 'string' || !data.id || data.id.length > 256) return Promise.resolve()
    if (this.tasks.has(data.id)) return this.tasks.get(data.id).promise
    if (this.tasks.size >= 256) {
      this.report(data.id, 'failed', '当前通话的委派数量已达上限，请开启新通话。')
      return Promise.resolve()
    }
    const task = { abort: new AbortController(), cancelled: false }
    // Retain before the first await, including failed attempts; never replay effects.
    this.tasks.set(data.id, task)
    task.promise = this.execute(data, task)
    return task.promise
  }
  report(id, status, content) {
    this.send({ action: 'session.commentary.append', delegation_id: id, status,
      event_id: createHash('sha256').update(`${this.epoch}:${id}:${status}`).digest('hex'), content: unicodeSlice(content, 2000) })
  }
  async execute(data, task) {
    try {
      if (typeof data.objective !== 'string' || !data.objective.trim() || [...data.objective].length > 8000
        || !Array.isArray(data.context ?? []) || (data.context ?? []).length > 6) throw new Error('INVALID_TASK')
      const context = (data.context ?? []).map(item => {
        if (typeof item.role !== 'string' || typeof item.content !== 'string' || [...item.content].length > 600) throw new Error('INVALID_TASK')
        return `${item.role}: ${item.content}`
      }).join('\n')
      const preset = await this.ctx.agentPresets.resolve(this.config.agentPreset || undefined)
      if (preset.broken) throw new Error('INVALID_PRESET')
      const route = this.config.model?.provider && this.config.model?.model
        ? this.config.model : this.ctx.agentDefaultModel.currentSelection()
      const parentRoute = this.parent.model?.current()
      if (!route?.provider || !route.model || parentRoute && route.provider === parentRoute.provider && route.model === parentRoute.model) throw new Error('ORDINARY_MODEL_REQUIRED')
      task.abort.signal.throwIfAborted()
      const childId = 'moss-task-' + createHash('sha256').update(`${this.parent.id}:${this.epoch}:${data.id}`).digest('hex').slice(0, 40)
      task.activation = await this.ctx.subagents.startActivation({
        childId, provider: this.config.provider, label: unicodeSlice(data.objective, 60),
        signal: task.abort.signal, delivery: 'parent',
        request: { parent: this.parent, cwd: this.ctx.workingDirectory.get(this.parent.session), agentPreset: preset.id,
          agentOptions: route, prompt: [{ type: 'text', text: `${data.objective}\n\n相关对话摘录：\n${context}` }] },
      })
      if (task.cancelled) { await task.activation.dispose(); return }
      const result = await task.activation.result
      if (task.cancelled) return
      const succeeded = result.stopReason === 'completed'
      const text = result.output.filter(block => block.type === 'text').map(block => block.text).join('\n')
      if (text) this.send({ action: 'session.thinking.append', delegation_id: data.id,
        event_id: createHash('sha256').update(`${this.epoch}:${data.id}:facts`).digest('hex'),
        content: unicodeSlice(`子任务 ${task.activation.childId} 的结果资料（不要自动全文播报）：\n${text}`, 2000) })
      this.report(data.id, succeeded ? 'completed' : 'failed',
        `委派任务${succeeded ? '已完成' : '未完成'}：${unicodeSlice(data.objective, 80)}。完整执行记录与结果见 DSH 子任务 ${task.activation.childId}。只需简短确认状态。`)
    } catch {
      if (!task.cancelled) this.report(data.id, 'failed', '无法启动或完成 DSH 委派任务。请检查默认委托 Agent、普通聊天模型及子任务执行器配置。')
    }
  }
  async cancel(id) {
    const task = this.tasks.get(id)
    if (!task) return
    task.cancelled = true
    task.abort.abort()
    await task.activation?.dispose()
  }
}

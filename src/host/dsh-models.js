import { voiceRoute } from '../shared/models.js'

export function voiceError(code, message) {
  return Object.assign(new Error(message), { code, publicMessage: message })
}
const missing = message => voiceError('VOICE_NOT_CONFIGURED', `未配置：${message}`)
const incompatible = message => voiceError('VOICE_INCOMPATIBLE', `不兼容：${message}`)

/** Adapt a native API base address to the realtime resource, without inspecting model ids. */
export function realtimeURL(baseURL) {
  let url
  try { url = new URL(baseURL) } catch { throw incompatible('所选 DSH API 没有可用的实时端点地址。') }
  if (url.username || url.password || url.search || url.hash) throw incompatible('语音端点地址不能包含凭据、查询参数或片段。')
  if (url.protocol === 'https:') url.protocol = 'wss:'
  else if (url.protocol === 'http:') url.protocol = 'ws:'
  const local = ['localhost', '127.0.0.1', '[::1]'].includes(url.hostname)
  if (url.protocol !== 'wss:' && !(url.protocol === 'ws:' && local)) throw incompatible('当前语音连接需要安全的 WebSocket 端点。')
  const path = url.pathname.replace(/\/+$/, '')
  url.pathname = path.endsWith('/realtime') ? path : `${path}/realtime`
  return url.href
}

/** Reads the public native LLM directory and Settings; owns no provider or credential configuration. */
export class DshModels {
  constructor(ctx) { this.ctx = ctx }
  selection(route) {
    const selected = voiceRoute(route)
    if (!this.ctx.llm.listProviders().some(provider => provider.id === selected.provider)) throw missing('所选模型提供商已移除或尚未启用，请在 DSH 模型设置中配置。')
    return selected
  }
  async catalog() {
    const rows = await Promise.all(this.ctx.llm.listProviders().map(async provider => {
      try { return (await this.ctx.llm.listModels(provider.id)).map(model => ({ provider: provider.id, model: model.id, providerName: provider.name, modelName: model.name, name: `${provider.name} · ${model.name}` })) }
      catch { return [] }
    }))
    return rows.flat()
  }
  async connection(route) {
    const selected = this.selection(route)
    const directory = this.ctx.llm.listConfigurableProviders().find(entry => entry.provider === selected.provider)
    if (!directory) throw incompatible('此 DSH 接入未提供语音连接所需的原生配置描述。')
    let profile = this.ctx.settings.describe().find(entry => entry.ns === directory.settingsNs)?.value
    for (const key of directory.settingsPath) profile = profile && Object.hasOwn(profile, key) ? profile[key] : undefined
    if (!profile || typeof profile !== 'object') throw missing('所选 API 尚未在 DSH 模型设置中完成配置。')
    // Capture one native configuration generation before resolving its credential.
    profile = structuredClone(profile)
    const refs = profile.apiKeyEnv ? [profile.apiKeyEnv] : directory.nativeAuth?.env ?? []
    if (!refs.length) throw incompatible('此 DSH 接入的认证方式尚不能用于当前语音协议。')
    let apiKey
    for (const ref of refs) {
      const hit = await this.ctx.credentials.resolve(ref)
      if (hit?.value) { apiKey = hit.value; break }
    }
    if (!apiKey || /[\r\n]/.test(apiKey)) throw missing('所选 API 的凭据缺失或无效，请在 DSH 模型设置中补全。')
    const model = profile.models?.find(model => model.id === selected.model)
    const baseURL = realtimeURL(model?.baseURL ?? profile.baseURL ?? directory.defaultBaseURL)
    return { ...selected, baseURL, apiKey }
  }
}

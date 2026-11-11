/** Route references are opaque. Compatibility is determined by the endpoint protocol. */
export function voiceRoute(route) {
  if (!route || typeof route.provider !== 'string' || !route.provider.trim() || typeof route.model !== 'string' || !route.model.trim()) {
    const message = '未配置：请从 DSH 已配置的模型中选择语音模型。'
    throw Object.assign(new Error(message), { code: 'VOICE_NOT_CONFIGURED', publicMessage: message })
  }
  return Object.freeze({ provider: route.provider, model: route.model })
}

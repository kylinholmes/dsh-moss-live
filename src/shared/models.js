/** Recognize the MOSS family without pinning a release or changing its id. */
export const isMossModel = model => typeof model === 'string' && model.toLowerCase().includes('moss')

/** Validate the configured family; provider ownership is checked by the model registry. */
export function mossRoute(route) {
  if (!route || typeof route.provider !== 'string' || !route.provider.trim() || !isMossModel(route.model)) {
    throw new Error('A configured MOSS voice model is required')
  }
  return Object.freeze({ provider: route.provider, model: route.model })
}

import z from '@deepseek-ai/schemastery'

export const MAX_AVATAR_BYTES = 256 * 1024

const Image = z.string().min(30).max(Math.floor(MAX_AVATAR_BYTES / 3) * 4 + 22)
  .pattern(/^data:image\/(?:png|jpeg|webp);base64,(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/)
const appearanceFields = {
  color: z.string().pattern(/^#[0-9a-f]{6}$/i).default('#58a9ef'),
  particles: z.number().min(0).max(128).step(1).default(32),
  diffusion: z.number().min(0).max(100).default(35),
}
// Declarative unions survive the native form transport and strict browser CSP.
const Appearance = z.union([
  z.object({ ...appearanceFields, kind: z.const('orb').default('orb'), image: z.union([z.const(''), Image]).default('') }),
  z.object({ ...appearanceFields, kind: z.const('image').required(), image: Image.required() }),
])

const VoiceModel = z.union([
  z.object({ provider: z.const('').default(''), model: z.const('').default('') }),
  z.object({ provider: z.string().pattern(/\S/).required(), model: z.string().pattern(/\S/).required() }),
])

export const Config = z.object({
  appearance: Appearance.default({}).volatile(),
  voiceModel: VoiceModel.default({}).volatile(),
  delegation: z.object({
    agentPreset: z.string().default(''),
    provider: z.const('spawn').default('spawn'),
    model: VoiceModel.default({}),
  }).default({}).volatile(),
})

/** Explicit projection: connection profiles and credentials never cross this seam. */
export function publicSettings(config) {
  const appearance = config.appearance.get()
  const route = config.voiceModel.get()
  const delegation = config.delegation.get()
  return {
    appearance: { kind: appearance.kind, color: appearance.color, particles: appearance.particles, diffusion: appearance.diffusion, image: appearance.image },
    voiceModel: { provider: route.provider, model: route.model },
    delegation: { agentPreset: delegation.agentPreset, provider: delegation.provider, model: delegation.model },
  }
}

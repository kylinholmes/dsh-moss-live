export const activeVoice = phase => !['idle', 'paused', 'error'].includes(phase)
export const phaseLabel = (phase, t) => t(`phase.${phase}`)

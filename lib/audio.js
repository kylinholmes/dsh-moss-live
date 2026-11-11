export const FRAME_SAMPLES = 320
export const frameSeconds = 0.02

export function downsample(input, ratio) {
  if (Math.abs(ratio - 1) < 1e-6) return Float32Array.from(input)
  const out = new Float32Array(Math.max(0, Math.floor(input.length / ratio)))
  for (let i = 0; i < out.length; i++) {
    const from = Math.floor(i * ratio)
    const to = Math.min(input.length, Math.floor((i + 1) * ratio))
    let sum = 0
    for (let j = from; j < to; j++) sum += input[j]
    out[i] = sum / Math.max(1, to - from)
  }
  return out
}

export function toInt16Frame(samples) {
  const out = new Int16Array(samples.length)
  for (let i = 0; i < samples.length; i++) {
    const s = Math.max(-1, Math.min(1, samples[i] ?? 0))
    out[i] = s < 0 ? s * 0x8000 : s * 0x7fff
  }
  return out
}

export function silenceFrame() {
  return new Int16Array(FRAME_SAMPLES)
}

export function peakOf(samples) {
  let peak = 0
  for (let i = 0; i < samples.length; i++) peak = Math.max(peak, Math.abs(samples[i]))
  return peak
}

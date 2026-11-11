/** Translate getUserMedia failures once, consistently across voice and setup. */
export async function requestMicrophone(devices, constraints, t) {
  if (!devices?.getUserMedia) throw Object.assign(new Error(t('browser.6')), { code: 'MIC_UNAVAILABLE' })
  try { return await devices.getUserMedia(constraints) }
  catch (error) {
    const kind = {
      NotFoundError: ['MIC_NOT_FOUND', 'media.notFound'],
      NotAllowedError: ['MIC_PERMISSION_DENIED', 'media.denied'],
      SecurityError: ['MIC_PERMISSION_DENIED', 'media.denied'],
      NotReadableError: ['MIC_UNREADABLE', 'media.busy'],
      OverconstrainedError: ['MIC_UNSUPPORTED', 'media.unsupported'],
    }[error.name]
    if (kind) throw Object.assign(new Error(t(kind[1])), { code: kind[0] })
    throw error
  }
}

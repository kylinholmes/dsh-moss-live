import { cx } from './classes.js'
import React, { useEffect } from 'react'
import { Button, IconMicrophoneOutlineRegular, IconPauseOutlineRegular, IconStopFillRegular } from '@deepseek-ai/dsh-client-ui-primitives'
import { Orb } from './Orb.jsx'

export const phaseLabel = (phase, t) => t(`phase.${phase}`)
export const activeVoice = phase => !['idle', 'error'].includes(phase)

export function VoiceView({ t, useVoice, useVoiceSettings, sessionId: boundId, openView, openSettings, createVoice, startVoice, stopVoice, muteVoice, interruptVoice, minimizeVoice, mountVoiceView, viewRequest, completeViewRequest }) {
  const state = useVoice(snapshot => snapshot)
  const settings = useVoiceSettings(snapshot => snapshot)
  const sessionId = boundId ?? state.viewSessionId ?? state.sessionId
  const appearance = settings.value?.appearance
  const own = sessionId?.startsWith('moss-live-')
  const here = state.sessionId === sessionId
  useEffect(() => {
    if (!own) return
    const dispose = mountVoiceView(sessionId)
    if (viewRequest?.view === 'moss') completeViewRequest()
    return dispose
  }, [sessionId, own])
  return <section className={cx('moss-voice')} aria-label={t('VoiceView.1')}>
    <header className={cx('moss-voice-head')}><span className={cx('moss-wordmark')}><i />MOSS LIVE</span><div>
      {own && <Button onClick={() => { minimizeVoice(); openView('chat', '') }}>{t('VoiceView.14')}</Button>}
    </div></header>
    <div className={cx('moss-voice-center')}>
      <Orb appearance={appearance} phase={here ? state.phase : 'idle'} energy={here ? state.energy : 0} label={t('VoiceView.2')} />
      <div className={cx('moss-phase')}>{phaseLabel(here ? state.phase : 'idle', t)}<span className={cx('moss-wave')}><i/><i/><i/><i/></span></div>
      <div className={cx('moss-captions')} aria-live="polite" aria-atomic="true">
        <p className={cx('moss-user-caption')}>{here && state.userText}</p>
        <p className={cx('moss-assistant-caption')}>{here && state.assistantText || (own ? t('VoiceView.5') : t('VoiceView.6'))}</p>
      </div>
      {state.error && (here || !sessionId) && <div className={cx('moss-error')} role="alert"><p>{state.error}</p><p>{state.errorCode === 'VOICE_INCOMPATIBLE' ? t('VoiceView.7') : state.errorCode === 'VOICE_NOT_CONFIGURED' ? t('VoiceView.8') : t('VoiceView.9')}</p><Button variant="outline" onClick={openSettings}>{t('VoiceView.15')}</Button></div>}
    </div>
    <footer className={cx('moss-voice-foot')}>
      {here && activeVoice(state.phase) ? <div className={cx('moss-controls')}>
        <Button variant="outline" className={cx(state.muted && 'moss-muted')} aria-label={state.muted ? t('VoiceView.10') : t('VoiceView.11')} aria-pressed={state.muted} onClick={muteVoice}><IconMicrophoneOutlineRegular/></Button>
        <Button variant="outline" aria-label={t('VoiceView.3')} onClick={interruptVoice}><IconPauseOutlineRegular/></Button>
        <Button variant="outline" className={cx('moss-end')} aria-label={t('VoiceView.4')} onClick={stopVoice}><IconStopFillRegular/></Button>
      </div> : <Button variant="primary" className={cx('moss-start')} onClick={() => own ? startVoice(sessionId) : createVoice().catch(() => {})}>{t('VoiceView.16')}</Button>}
      <small>{own ? t('VoiceView.12') : t('VoiceView.13')}</small>
    </footer>
  </section>
}

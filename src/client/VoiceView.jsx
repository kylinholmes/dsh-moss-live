import { cx } from './classes.js'
import React, { useEffect } from 'react'
import { Button } from '@deepseek-ai/dsh-client-ui-primitives'
import { Orb } from './Orb.jsx'
import { voiceTargetId } from './voice-target.js'
import { VoiceControls } from './VoiceControls.jsx'
import { phaseLabel } from './voice-state.js'

export function VoiceView({ t, useVoice, useVoiceSettings, useVoiceSessionList, sessionId: boundId, newConversation = false, openView, openSettings, createVoice, startVoice, stopVoice, muteVoice, pauseVoice, minimizeVoice, mountVoiceView, mountVoiceDraft, viewRequest, completeViewRequest }) {
  const state = useVoice(snapshot => snapshot)
  const settings = useVoiceSettings(snapshot => snapshot)
  const sessions = useVoiceSessionList(snapshot => snapshot)
  const sessionId = boundId ?? voiceTargetId(state, sessions, { newConversation })
  const session = sessions.byId[sessionId]
  const appearance = settings.value?.appearance
  const own = sessionId?.startsWith('moss-live-')
  const here = Boolean(sessionId && state.sessionId === sessionId)
  const failure = newConversation ? state.draftError : here && state.error ? { message: state.error, code: state.errorCode } : null
  useEffect(() => {
    if (newConversation) { mountVoiceDraft(); return }
    if (!own) return
    const dispose = mountVoiceView(sessionId)
    if (viewRequest?.view === 'moss') completeViewRequest()
    return dispose
  }, [sessionId, own, newConversation])
  return <section className={cx('moss-voice')} aria-label={t('VoiceView.1')} data-session-id={sessionId ?? ''}>
    <header className={cx('moss-voice-head')}><div className={cx('moss-session-heading')}><span className={cx('moss-wordmark')}><i />MOSS LIVE</span>{own && <span className={cx('moss-session-title')} title={sessionId}>{session?.title ?? session?.displayTitle ?? t('VoiceView.currentSession')}</span>}</div><div>
      {own && <Button onClick={() => { minimizeVoice(); openView('chat', '') }}>{t('VoiceView.14')}</Button>}
    </div></header>
    <div className={cx('moss-voice-center')}>
      <Orb appearance={appearance} phase={here ? state.phase : 'idle'} energy={here ? state.energy : 0} label={t('VoiceView.2')} />
      <div className={cx('moss-phase')} data-phase={here ? state.phase : own ? 'paused' : 'idle'}>{phaseLabel(here ? state.phase : own ? 'paused' : 'idle', t)}<span className={cx('moss-wave')}><i/><i/><i/><i/></span></div>
      <div className={cx('moss-captions')} aria-live="polite" aria-atomic="true">
        <p className={cx('moss-user-caption')}>{here && state.userText}</p>
        <p className={cx('moss-assistant-caption')}>{here && state.assistantText || (own ? t('VoiceView.resume') : t('VoiceView.6'))}</p>
      </div>
      {failure && <div className={cx('moss-error')} role="alert"><p>{failure.message}</p><p>{failure.code === 'VOICE_INCOMPATIBLE' ? t('VoiceView.7') : failure.code === 'VOICE_NOT_CONFIGURED' ? t('VoiceView.8') : t('VoiceView.9')}</p><Button variant="outline" onClick={openSettings}>{t('VoiceView.15')}</Button></div>}
    </div>
    <footer className={cx('moss-voice-foot')}>
      {own ? <VoiceControls {...{ t, state, sessionId, startVoice, stopVoice, muteVoice, pauseVoice }}/>
        : <Button variant="primary" className={cx('moss-start')} disabled={state.creating} onClick={() => createVoice().catch(() => {})}>{t('VoiceView.16')}</Button>}
      <small>{own ? t('VoiceView.12') : t('VoiceView.13')}</small>
    </footer>
  </section>
}

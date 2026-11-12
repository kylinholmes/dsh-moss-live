import React from 'react'
import { Button, IconMicrophoneOutlineRegular, IconPauseOutlineRegular, IconPlayOutlineRegular, IconStopFillRegular } from '@deepseek-ai/dsh-client-ui-primitives'
import { activeVoice } from './voice-state.js'
import { cx } from './classes.js'
import { AudioOutputButton } from './AudioOutputDialog.jsx'

/** Shared controls for the voice page and its minimized presentation. */
export function VoiceControls({ t, state, sessionId, startVoice, pauseVoice, muteVoice, stopVoice, openAudioOutput }) {
  const here = state.sessionId === sessionId
  const active = here && activeVoice(state.phase)
  const muted = here && state.muted
  return <div className={cx('moss-controls')} role="group" aria-label={t('call.controls')}>
    <Button variant="outline" className={cx(muted && 'moss-muted')} disabled={!here} aria-label={t(muted ? 'VoiceView.10' : 'VoiceView.11')} title={t(muted ? 'VoiceView.10' : 'VoiceView.11')} aria-pressed={muted} onClick={() => muteVoice(sessionId)}><IconMicrophoneOutlineRegular/></Button>
    <AudioOutputButton {...{ t, openAudioOutput }}/>
    <Button variant="outline" aria-label={t(active ? 'call.pause' : 'call.resume')} title={t(active ? 'call.pause' : 'call.resume')} onClick={() => active ? pauseVoice(sessionId) : startVoice(sessionId)}>{active ? <IconPauseOutlineRegular/> : <IconPlayOutlineRegular/>}</Button>
    <Button variant="outline" className={cx('moss-end')} disabled={!active} aria-label={t('VoiceView.4')} title={t('VoiceView.4')} onClick={() => stopVoice(sessionId)}><IconStopFillRegular/></Button>
  </div>
}

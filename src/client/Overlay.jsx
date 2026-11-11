import { cx } from './classes.js'
import React from 'react'
import { Button, IconMicrophoneOutlineRegular, IconStopFillRegular } from '@deepseek-ai/dsh-client-ui-primitives'
import { Orb } from './Orb.jsx'
import { activeVoice, phaseLabel } from './VoiceView.jsx'

export function Overlay({ t, useVoice, useVoiceSettings, expandVoice, muteVoice, stopVoice }) {
  const state = useVoice(snapshot => snapshot)
  const settings = useVoiceSettings(snapshot => snapshot)
  if (!state.minimized || !activeVoice(state.phase)) return null
  return <aside className={cx('moss-capsule')} aria-label={t('Overlay.1')}>
    <Button onClick={expandVoice} aria-label={t('Overlay.2')}><Orb small appearance={settings.value?.appearance}/><span>MOSS<span>{state.muted ? t('Overlay.3') : phaseLabel(state.phase, t)}</span></span></Button>
    <Button aria-label={state.muted ? t('VoiceView.10') : t('VoiceView.11')} aria-pressed={state.muted} onClick={muteVoice}><IconMicrophoneOutlineRegular/></Button>
    <Button aria-label={t('VoiceView.4')} onClick={stopVoice}><IconStopFillRegular/></Button>
  </aside>
}

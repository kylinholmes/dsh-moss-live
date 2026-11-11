import { cx } from './classes.js'
import React from 'react'
import { VoiceBar } from './VoiceBar.jsx'

export function Overlay({ t, useVoice, useVoiceSettings, useVoicePanelInfo, expandVoice, ...controls }) {
  const state = useVoice(snapshot => snapshot)
  const settings = useVoiceSettings(snapshot => snapshot)
  const panel = useVoicePanelInfo(snapshot => snapshot.activePanelId)
  if (!state.minimized || !state.sessionId || (panel === null && state.historyBars?.includes(state.sessionId))) return null
  return <aside className={cx('moss-capsule')} aria-label={t('Overlay.1')}>
    <VoiceBar {...controls} t={t} state={state} sessionId={state.sessionId} appearance={settings.value?.appearance} onReturn={expandVoice} returnLabel={t('Overlay.2')}/>
  </aside>
}

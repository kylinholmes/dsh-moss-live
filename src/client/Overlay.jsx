import { cx } from './classes.js'
import React from 'react'
import { VoiceBar } from './VoiceBar.jsx'
import { voiceTargetId } from './voice-target.js'
import { voiceCallState } from './voice-sessions.js'

export function Overlay({ t, useVoice, useVoiceSettings, useVoicePanelInfo, useVoiceSessionList, expandVoice, ...controls }) {
  const snapshot = useVoice(value => value)
  const sessions = useVoiceSessionList(value => value)
  const settings = useVoiceSettings(snapshot => snapshot)
  const panel = useVoicePanelInfo(snapshot => snapshot.activePanelId)
  const id = voiceTargetId(snapshot, sessions)
  if (panel !== null || !id || snapshot.historyBars?.includes(id)) return null
  const state = voiceCallState(snapshot, id)
  return <aside className={cx('moss-capsule')} aria-label={t('Overlay.1')}>
    <VoiceBar {...controls} t={t} state={state} sessionId={id} appearance={settings.value?.appearance} onReturn={() => expandVoice(id)} returnLabel={t('Overlay.2')}/>
  </aside>
}

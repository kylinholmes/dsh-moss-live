import { cx } from './classes.js'
import React, { useEffect } from 'react'
import { VoiceBar } from './VoiceBar.jsx'

export function selectMossComposer({ sessionId, pendingInteraction }) {
  return sessionId?.startsWith('moss-live-') && !pendingInteraction ? { sessionId } : null
}

export function Composer({ t, sessionId, openVoiceSession, useVoice, useVoiceSettings, mountVoiceHistory, ...controls }) {
  const state = useVoice(snapshot => snapshot)
  const settings = useVoiceSettings(snapshot => snapshot)
  useEffect(() => mountVoiceHistory(sessionId), [sessionId])
  return <div className={cx('moss-composer')}>
    <VoiceBar {...controls} t={t} state={state} sessionId={sessionId} appearance={settings.value?.appearance} onReturn={() => openVoiceSession(sessionId)}/>
  </div>
}

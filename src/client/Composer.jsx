import { cx } from './classes.js'
import React from 'react'
import { Button, IconMicrophoneOutlineRegular } from '@deepseek-ai/dsh-client-ui-primitives'
import { activeVoice } from './VoiceView.jsx'

export function selectMossComposer({ sessionId, pendingInteraction }) {
  return sessionId?.startsWith('moss-live-') && !pendingInteraction ? { sessionId } : null
}

export function Composer({ t, useVoice, sessionId, openVoiceSession }) {
  const state = useVoice(snapshot => snapshot)
  const live = state.sessionId === sessionId && activeVoice(state.phase)
  return <div className={cx('moss-composer')}>
    <span>{live ? t('Composer.live') : t('Composer.history')}</span>
    <Button variant="outline" aria-label={t('Composer.3')} onClick={() => openVoiceSession(sessionId)} icon={<IconMicrophoneOutlineRegular/>}>{t('Composer.3')}</Button>
  </div>
}

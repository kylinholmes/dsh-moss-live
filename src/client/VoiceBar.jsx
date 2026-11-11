import React from 'react'
import { Button, IconChevronLeftOutlineRegular } from '@deepseek-ai/dsh-client-ui-primitives'
import { Orb } from './Orb.jsx'
import { VoiceControls } from './VoiceControls.jsx'
import { phaseLabel } from './voice-state.js'
import { cx } from './classes.js'

export function VoiceBar({ t, state, sessionId, appearance, onReturn, returnLabel = t('Composer.3'), ...controls }) {
  const phase = state.sessionId === sessionId ? state.phase : 'paused'
  return <div className={cx('moss-voice-bar')}>
    <Button variant="outline" className={cx('moss-return')} aria-label={returnLabel} title={returnLabel} onClick={onReturn} icon={<IconChevronLeftOutlineRegular size={20}/>}/>
    <div className={cx('moss-bar-status')}><Orb small appearance={appearance}/><span>MOSS<span>{phaseLabel(phase, t)}</span></span></div>
    <VoiceControls {...controls} t={t} state={state} sessionId={sessionId}/>
  </div>
}

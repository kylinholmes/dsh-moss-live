import React from 'react'
import { Button, Modal, IconSettingsOutlineRegular } from '@deepseek-ai/dsh-client-ui-primitives'
import { Choice } from './Choice.jsx'
import { cx } from './classes.js'

export function AudioOutputButton({ t, openAudioOutput }) {
  return <Button variant="outline" className={cx('moss-output-button')} aria-label={t('output.title')} title={t('output.title')}
    aria-haspopup="dialog" onClick={openAudioOutput} icon={<IconSettingsOutlineRegular/>}/>
}

export function AudioOutputDialog({ t, useAudioOutput, closeOutput, selectOutput, authorizeOutput, refreshOutput }) {
  const state = useAudioOutput(value => value)
  return <Modal open={state.open} onClose={closeOutput} title={t('output.title')} closeLabel={t('settings.close')}
    className={cx('moss-output-dialog')} contentClassName={cx('moss-output-content')}>
    {state.open && <div className={cx('moss-output')}>
      {state.supported ? <>
        <Choice label={t('output.device')} value={state.selectedId} items={state.devices} disabled={state.busy}
          placeholder={state.selectedId ? t('output.saved') : t('output.default')} onChange={id => { void selectOutput(id).catch(() => {}) }}/>
        <div className={cx('moss-output-actions')}>
          <Button variant="outline" disabled={state.busy} onClick={() => { void authorizeOutput().catch(() => {}) }}>{t('output.authorize')}</Button>
          <Button variant="outline" disabled={state.busy} onClick={() => { void refreshOutput().catch(() => {}) }}>{t('output.refresh')}</Button>
        </div>
        <p>{t('output.local')}</p>
      </> : <p>{t('output.unsupported')}</p>}
      {state.busy && <p role="status">{t('output.switching')}</p>}
      {state.error && <p className={cx('moss-output-error')} role="alert">{state.error}</p>}
    </div>}
  </Modal>
}

import React from 'react'
import { Modal } from '@deepseek-ai/dsh-client-ui-primitives'
import { Settings } from './Settings.jsx'
import { cx } from './classes.js'

/** The shortcut and DSH Settings section share the same editor and ConfigForm. */
export function SettingsDialog({ t, useVoice, closeSettings, ...settings }) {
  const open = useVoice(state => state.settingsOpen === true)
  return <Modal open={open} onClose={closeSettings} title={t('settings.title')} closeLabel={t('settings.close')} className={cx('moss-settings-dialog')} contentClassName={cx('moss-settings-dialog-content')}>
    {open && <Settings {...settings} t={t}/>}
  </Modal>
}

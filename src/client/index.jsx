import React from 'react'
import { Button, IconMicrophoneOutlineRegular } from '@deepseek-ai/dsh-client-ui-primitives'
import { VoiceSessions } from './voice-sessions.js'
import { AudioOutput } from './audio-output.js'
import { connect, openMedia } from './browser.js'
import { VoiceView } from './VoiceView.jsx'
import { Composer, selectMossComposer } from './Composer.jsx'
import { Overlay } from './Overlay.jsx'
import { Settings } from './Settings.jsx'
import { voiceMessageDefinition } from './voice-message.js'
import { cx } from './classes.js'
import { SettingsEditor } from './settings-editor.js'
import { MicrophoneCheck } from './microphone.js'
import { zh } from './locales.ts'
import { voiceTargetId } from './voice-target.js'
import { SettingsDialog } from './SettingsDialog.jsx'
import { AudioOutputDialog } from './AudioOutputDialog.jsx'

export const inject = ['slots', 'configForms', 'sessions', 'workspaces', 'uiWorkspace', 'layout', 'uiConversation', 'locale']
const bindForm = form => ({ getSnapshot: () => form.getSnapshot(), subscribe: listener => form.subscribe(listener), mutate: (ops, revision) => form.mutate(ops, revision) })

function Entry({ t, openVoicePanel, sessionId }) {
  if (sessionId?.startsWith('moss-live-')) return null
  return <div className={cx('moss-entry moss-input-entry')}><Button aria-label={t('index.1')} onClick={openVoicePanel} icon={<MossIcon size={16}/>}>{t('index.1')}</Button></div>
}

function MossIcon({ size = 18 }) { return <IconMicrophoneOutlineRegular size={size}/> }

function MainVoicePanel(props) { return <VoiceView {...props} openView={props.openNativeConversation}/> }
function NewVoicePanel(props) { return <VoiceView {...props} newConversation openView={props.openNativeConversation}/> }

export function apply(ctx) {
  ctx.effect(() => ctx.locale.register('moss', { zh, en: zh }), 'moss.locale')
  const t = ctx.locale.bind('moss')
  const settingsForm = bindForm(ctx.configForms.get('dsh-moss-live'))
  const editor = new SettingsEditor(settingsForm)
  const microphone = new MicrophoneCheck(navigator.mediaDevices, t)
  ctx.effect(() => async () => { microphone.dispose(); await editor.dispose() }, 'moss.settings-editor')
  const output = new AudioOutput({ t })
  const controller = new VoiceSessions({
    t,
    async openMedia(...args) {
      const media = await openMedia(...args, t)
      const dispose = media.dispose
      let detach
      media.dispose = () => { detach?.(); dispose() }
      try { detach = await output.attach(media); return media }
      catch (error) { media.dispose(); throw error }
    },
    async connect(id, receive, signal) {
      const reference = ctx.sessions.retain(id, { source: 'mossVoice', signal })
      try {
        await reference.ready
        const result = await connect(id, receive, signal, t)
        const close = result.connection.close
        result.connection.close = () => { close(); reference.release() }
        return result
      } catch (error) { reference.release(); throw error }
    },
  })
  const openVoiceSession = id => {
    if (id) ctx.uiWorkspace.openSession(id)
    ctx.layout.selectPanel('moss-session')
  }
  let selectionQueued = false, selectionDisposed = false
  const syncSelection = () => {
    if (selectionQueued) return
    selectionQueued = true
    // Native navigation retains the next mainView before releasing the previous one.
    queueMicrotask(() => {
      selectionQueued = false
      if (!selectionDisposed) controller.select(ctx.layout.panelInfo.getSnapshot().activePanelId === 'moss'
        ? null : voiceTargetId(null, ctx.sessions.list.getSnapshot()))
    })
  }
  ctx.effect(() => {
    const stopSessions = ctx.sessions.list.subscribe(syncSelection)
    const stopPanels = ctx.layout.panelInfo.subscribe(syncSelection)
    syncSelection()
    return () => { selectionDisposed = true; stopSessions(); stopPanels() }
  }, 'moss.selected-call')
  ctx.effect(() => {
    const style = document.createElement('style')
    style.dataset.mossLive = ''; style.textContent = __MOSS_CSS_TEXT__; document.head.append(style)
    const unload = () => controller.stopAll()
    window.addEventListener('pagehide', unload)
    return () => { window.removeEventListener('pagehide', unload); controller.dispose(); output.dispose(); style.remove() }
  }, 'moss.media-and-styles')
  const loadCatalog = async () => {
    const response = await fetch('/dsh-moss-live/config', { credentials: 'same-origin', cache: 'no-store' })
    if (!response.ok) throw new Error(t('index.2'))
    return response.json()
  }
  let creating
  const createVoice = () => creating ??= (async () => {
    controller.patch({ creating: true, draftError: null })
    try {
      const selection = settingsForm.getSnapshot().value?.voiceModel
      if (!selection?.provider || !selection?.model) throw Object.assign(new Error(t('index.3')), { code: 'VOICE_NOT_CONFIGURED' })
      const sessions = ctx.sessions.list.getSnapshot()
      const main = Object.values(sessions.byId).find(row => row.retainedBy.mainView > 0)
      const cwd = main?.cwd ?? ctx.workspaces.list.getSnapshot().items[0]?.path
      if (!cwd) throw new Error(t('index.4'))
      const response = await fetch('/dsh-moss-live/sessions', { method: 'POST', credentials: 'same-origin', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ cwd }) })
      const result = await response.json()
      if (!response.ok) throw Object.assign(new Error(result.message ?? t('index.5')), { code: result.error })
      await ctx.sessions.refresh()
      ctx.uiWorkspace.openSession(result.sessionId)
      ctx.layout.selectPanel('moss-session')
      await controller.start(result.sessionId)
    } catch (error) { controller.patch({ draftError: { message: error.message, code: error.code } }); throw error }
    finally { controller.patch({ creating: false }) }
  })().finally(() => { creating = undefined })
  const historyBars = new Map()
  const shared = () => ({
    hooks: { voice: controller, voiceSettings: settingsForm, voiceSessionList: ctx.sessions.list, voicePanelInfo: ctx.layout.panelInfo, audioOutput: output }, createVoice,
    openVoicePanel: () => ctx.layout.selectPanel('moss'),
    openVoiceSession,
    startVoice: id => controller.start(id), stopVoice: id => controller.stop(id), pauseVoice: id => controller.pause(id),
    muteVoice: id => controller.get(id).mute(),
    expandVoice: id => openVoiceSession(id),
    openAudioOutput: () => output.open(),
    openSettings: () => controller.patch({ settingsOpen: true }),
    mountVoiceDraft: () => { controller.patch({ draftError: null }); controller.select(null) },
    mountVoiceHistory: id => {
      historyBars.set(id, (historyBars.get(id) ?? 0) + 1)
      controller.patch({ historyBars: [...historyBars.keys()] })
      return () => {
        const count = historyBars.get(id) - 1
        if (count) historyBars.set(id, count); else historyBars.delete(id)
        controller.patch({ historyBars: [...historyBars.keys()] })
      }
    },
    mountVoiceView: id => { controller.select(id) },
    openNativeConversation: id => { if (id) ctx.uiWorkspace.openSession(id) },
  })
  ctx.effect(() => ctx.uiConversation.events.register(voiceMessageDefinition), 'moss.native-transcript-revisions')
  ctx.slots.inject('sidebar.panellist', () => ctx.slots.register({ locale: 'moss', name: 'sidebar.panellist', id: 'moss', order: 5, label: () => t('index.6') }, MossIcon))
  ctx.slots.inject('main', () => ctx.slots.register({ locale: 'moss', name: 'main', key: 'moss', inject: shared }, NewVoicePanel))
  ctx.slots.inject('main', () => ctx.slots.register({ locale: 'moss', name: 'main', key: 'moss-session', inject: shared }, MainVoicePanel))
  ctx.slots.inject('conversation.input.right', () => ctx.slots.register({ locale: 'moss', name: 'conversation.input.right', id: 'moss-entry', order: 5, inject: shared }, Entry))
  ctx.slots.inject('conversation.composer', () => ctx.slots.register({ locale: 'moss', name: 'conversation.composer', id: 'moss-composer', priority: -20, select: selectMossComposer, inject: shared }, Composer))
  ctx.slots.inject('shell.bottom', () => ctx.slots.register({ locale: 'moss', name: 'shell.bottom', id: 'moss-capsule', order: 20, inject: shared }, Overlay))
  ctx.slots.inject('shell.overlay', () => ctx.slots.register({ locale: 'moss', name: 'shell.overlay', id: 'moss-output', inject: () => ({
    hooks: { audioOutput: output }, closeOutput: () => output.close(), refreshOutput: () => output.refresh(),
    authorizeOutput: () => output.authorize(), selectOutput: id => output.select(id),
  }) }, AudioOutputDialog))
  const settingsInjected = () => ({ hooks: { settingsEditor: editor, microphone }, loadCatalog,
    editSettings: (group, value) => editor.edit(group, value), retrySettings: () => editor.retry(), discardSettings: () => editor.discard(),
    mountSettings: () => { void microphone.refresh(); return () => { void editor.flush(); microphone.stop() } },
    toggleMicrophone: enabled => enabled ? microphone.start() : microphone.stop(),
    testModel: async route => {
      const permission = microphone.start().catch(() => {})
      const response = await fetch('/dsh-moss-live/test', { method: 'POST', credentials: 'same-origin', headers: { 'content-type': 'application/json' }, body: JSON.stringify(route) })
      const result = await response.json()
      await permission
      return result
    },
  })
  ctx.slots.inject('shell.overlay', () => ctx.slots.register({ locale: 'moss', name: 'shell.overlay', id: 'moss-settings', inject: () => {
    const settings = settingsInjected()
    return { ...settings, hooks: { ...settings.hooks, voice: controller }, closeSettings: () => controller.patch({ settingsOpen: false }) }
  } }, SettingsDialog))
  ctx.slots.inject('settings.section', () => ctx.slots.register({ locale: 'moss', name: 'settings.section', id: 'moss', order: 25, label: () => t('index.6'), inject: settingsInjected }, Settings))
  ctx.slots.inject('settings.section.icon', () => ctx.slots.register({ locale: 'moss', name: 'settings.section.icon', id: 'moss' }, MossIcon))
  ctx.slots.inject('plugins.row.config', () => ctx.slots.register({ locale: 'moss', name: 'plugins.row.config', key: 'dsh-moss-live', inject: settingsInjected }, Settings))
  ctx.slots.inject('plugins.item', () => ctx.slots.register({ locale: 'moss', name: 'plugins.item', id: 'moss-live', label: () => t('index.6'), order: 65, inject: settingsInjected }, Settings))
}

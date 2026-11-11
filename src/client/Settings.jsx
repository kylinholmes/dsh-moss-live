import { cx } from './classes.js'
import React, { useEffect, useRef, useState } from 'react'
import { Button, Menu, StateDot, IconMicrophoneOutlineRegular, IconChevronDownOutlineRegular } from '@deepseek-ai/dsh-client-ui-primitives'
import { Orb } from './Orb.jsx'

const routeValue = route => JSON.stringify({ provider: route?.provider ?? '', model: route?.model ?? '' })

function Choice({ label, value, items, onChange, disabled, placeholder }) {
  const [open, setOpen] = useState(false)
  return <div className={cx('moss-field')}><span>{label}</span><Menu open={open} onClose={() => setOpen(false)} portal autoFocus minWidthFromAnchor
    selectedId={value} items={items} onSelect={id => { onChange(id); setOpen(false) }}
    anchor={<Button variant="outline" className={cx('moss-choice')} aria-label={label} aria-haspopup="menu" aria-expanded={open} disabled={disabled} onClick={() => setOpen(!open)}>
      <span>{items.find(item => item.id === value)?.label ?? placeholder ?? value}</span><IconChevronDownOutlineRegular/>
    </Button>}/></div>
}

function ModelChoice({ catalog, route = {}, onChange, disabled, t, delegate = false }) {
  const [pendingProvider, setPendingProvider] = useState(null)
  const provider = pendingProvider ?? route.provider ?? ''
  const providers = catalog.providers ?? [...new Map(catalog.models.map(model => [model.provider, { id: model.provider, name: model.providerName ?? model.provider }])).values()]
  const providerItems = providers.map(item => ({ id: item.id, label: item.name }))
  if (delegate) providerItems.unshift({ id: '', label: t('Settings.27') })
  if (provider && !providerItems.some(item => item.id === provider)) providerItems.push({ id: provider, label: provider + t('model.unlisted') })
  const model = route.provider === provider ? route.model ?? '' : ''
  const models = catalog.models.filter(item => item.provider === provider).map(item => ({ id: item.model, label: item.modelName ?? item.model }))
  if (model && !models.some(item => item.id === model)) models.push({ id: model, label: model + t('model.unlisted') })
  return <div className={cx('moss-model-pair')}>
    <Choice label={t(delegate ? 'delegate.provider' : 'voice.provider')} value={provider} items={providerItems} placeholder={t('provider.choose')} disabled={disabled}
      onChange={value => { setPendingProvider(value); if (!value && delegate) onChange({ provider: '', model: '' }) }}/>
    <Choice label={t(delegate ? 'Settings.7' : 'Settings.39')} value={model} items={models} placeholder={t(delegate && !provider ? 'Settings.27' : 'model.choose')} disabled={disabled || !provider || !models.length}
      onChange={value => { onChange({ provider, model: value }); setPendingProvider(null) }}/>
  </div>
}

export function Settings({ t, view, useSettingsEditor, useMicrophone, editSettings, retrySettings, discardSettings, mountSettings, loadCatalog, testModel, toggleMicrophone }) {
  const snapshot = useSettingsEditor(snapshot => snapshot), microphone = useMicrophone(snapshot => snapshot)
  const [catalog, setCatalog] = useState({ models: [], agentPresets: [] })
  const [message, setMessage] = useState(''), [testing, setTesting] = useState(false), [testResult, setTestResult] = useState(null)
  const [imageMode, setImageMode] = useState(null)
  const fileInput = useRef()
  useEffect(() => view === 'summary' ? undefined : mountSettings(), [])
  useEffect(() => { let live = true; loadCatalog().then(value => { if (live) setCatalog(value) }).catch(() => { if (live) setMessage(t('Settings.8')) }); return () => { live = false } }, [])
  if (view === 'summary') return t('Settings.9')
  const draft = snapshot.value
  if (!draft) return <p>{t('Settings.33')}</p>
  const kind = imageMode ?? draft.appearance.kind
  const edit = (group, key, value) => editSettings(group, { ...draft[group], [key]: value })
  const image = event => {
    const file = event.target.files?.[0]
    if (!file) return
    if (!['image/png', 'image/jpeg', 'image/webp'].includes(file.type) || file.size > 256 * 1024) { setMessage(t('Settings.10')); return }
    const reader = new FileReader()
    reader.onload = () => { editSettings('appearance', { ...draft.appearance, kind: 'image', image: reader.result }); setMessage(''); setImageMode('image') }
    reader.readAsDataURL(file)
    event.target.value = ''
  }
  const test = async () => {
    setTesting(true); setTestResult(null)
    try { const result = await testModel(draft.voiceModel); setTestResult({ ...result, route: routeValue(draft.voiceModel) }) }
    catch { setTestResult({ ok: false, message: t('Settings.11'), route: routeValue(draft.voiceModel) }) }
    finally { setTesting(false) }
  }
  const currentResult = testResult?.route === routeValue(draft.voiceModel) ? testResult : null
  const presets = [{ id: '', label: t('Settings.12') }, ...catalog.agentPresets.map(preset => ({ id: preset.id, label: preset.name, disabled: preset.broken }))]
  if (draft.delegation.agentPreset && !presets.some(item => item.id === draft.delegation.agentPreset)) presets.push({ id: draft.delegation.agentPreset, label: `${draft.delegation.agentPreset}${t('preset.invalid')}` })
  return <div className={cx('moss-settings')}>
    {!view && <h2>{t('index.6')}</h2>}
    <fieldset disabled={!snapshot.writable}>
      <legend>{t('Settings.34')}</legend><div className={cx('moss-appearance-editor')}>
        <div className={cx('moss-avatar-editor', kind === 'image' && 'moss-avatar-editable')}>
          {kind === 'image' && !draft.appearance.image ? <div className={cx('moss-avatar-placeholder')}>{t('Settings.13')}</div> : <Orb appearance={{ ...draft.appearance, kind }} phase={microphone.active ? 'listening' : 'idle'} energy={microphone.level ?? 0} label={t('Settings.1')}/>}
          {kind === 'image' && <><Button variant="outline" className={cx('moss-avatar-action')} onClick={() => fileInput.current.click()}>{draft.appearance.image ? t('Settings.14') : t('Settings.15')}</Button>
            <input ref={fileInput} hidden type="file" accept="image/png,image/jpeg,image/webp" aria-label={t('Settings.2')} onChange={image}/></>}
        </div>
        <div><Choice label={t('Settings.3')} value={kind} items={[{ id: 'orb', label: t('Settings.16') }, { id: 'image', label: t('Settings.17') }]} disabled={!snapshot.writable}
          onChange={value => { setImageMode(value); if (value === 'orb' || draft.appearance.image) edit('appearance', 'kind', value) }}/>
          {kind === 'orb' ? <><label>{t('Settings.18')}<input type="color" value={draft.appearance.color} onChange={event => edit('appearance', 'color', event.target.value)}/></label>
            <label>{t('Settings.35')}<output aria-hidden="true">{draft.appearance.particles}</output><input aria-label={t('Settings.35').trim()} type="range" min="0" max="128" step="1" value={draft.appearance.particles} onChange={event => edit('appearance', 'particles', Number(event.target.value))}/></label>
            <label>{t('Settings.36')}<output aria-hidden="true">{draft.appearance.diffusion}</output><input aria-label={t('Settings.36').trim()} type="range" min="0" max="100" value={draft.appearance.diffusion} onChange={event => edit('appearance', 'diffusion', Number(event.target.value))}/></label></>
            : <p>{t('Settings.37')}<br/>{t('Settings.38')}</p>}
        </div></div>
    </fieldset>
    <fieldset disabled={!snapshot.writable}><legend>{t('Settings.39')}</legend>
      <ModelChoice catalog={catalog} route={draft.voiceModel} t={t} disabled={!snapshot.writable} onChange={value => { editSettings('voiceModel', value); setTestResult(null) }}/>
      <p>{t('Settings.40')}</p>
      <div className={cx('moss-connection-actions')}><Button variant="outline" disabled={testing || microphone.pending || !draft.voiceModel.provider} onClick={test}>{testing ? t('Settings.20') : t('Settings.21')}</Button>
        <div className={cx('moss-microphone-toggle')}><Button variant="outline" disabled={microphone.pending} icon={<IconMicrophoneOutlineRegular/>} onClick={() => { Promise.resolve(toggleMicrophone(!microphone.active)).catch(() => {}) }}>{t(microphone.active ? 'microphone.stop' : 'microphone.test')}</Button><StateDot state={microphone.pending ? 'ongoing' : microphone.permission === 'granted' ? 'done' : microphone.permission === 'denied' ? 'error' : 'idle'}/><small>{microphone.pending ? t('Settings.22') : microphone.permission === 'granted' ? t('Settings.23') : microphone.permission === 'denied' ? t('Settings.24') : t('Settings.25')}</small>{microphone.active && <meter min="0" max="1" value={microphone.level ?? 0} aria-label={t('microphone.level')}/>}</div>
      </div>
      {currentResult && <p className={cx(currentResult.ok ? 'moss-test-success' : 'moss-test-error')} role="status">{currentResult.ok ? t('Settings.26') : currentResult.message}</p>}
      {microphone.error && <p className={cx('moss-test-error')} role="alert">{microphone.error}</p>}
      <small>{t('Settings.41')}</small>
    </fieldset>
    <fieldset disabled={!snapshot.writable}><legend>{t('Settings.42')}</legend>
      <Choice label={t('Settings.6')} value={draft.delegation.agentPreset} items={presets} disabled={!snapshot.writable} onChange={value => edit('delegation', 'agentPreset', value)}/>
      <ModelChoice catalog={catalog} route={draft.delegation.model} t={t} delegate disabled={!snapshot.writable} onChange={value => edit('delegation', 'model', value)}/>
      <p>{t('Settings.43')}</p>
    </fieldset>
    <div className={cx('moss-save-status')} role="status">{({ saved: t('Settings.28'), pending: t('Settings.29'), saving: t('Settings.30'), conflict: t('Settings.31'), error: t('Settings.32') })[snapshot.status]}
      {['conflict', 'error'].includes(snapshot.status) && <><Button variant="outline" onClick={retrySettings}>{t('Settings.44')}</Button><Button onClick={discardSettings}>{t('Settings.45')}</Button></>}
    </div><small>{t('Settings.46')}</small>
    {message && <p role="status">{message}</p>}
  </div>
}

import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import vm from 'node:vm'
import React, { act } from 'react'
import { createRoot } from 'react-dom/client'
import { JSDOM } from 'jsdom'

test('DSH owns the rendered entry and overlay, and unloading removes both', async () => {
  const dom = new JSDOM('<html><head></head><body><main id="app"></main></body></html>', { url: 'http://localhost/' })
  const prior = { window: globalThis.window, document: globalThis.document, IS_REACT_ACT_ENVIRONMENT: globalThis.IS_REACT_ACT_ENVIRONMENT }
  globalThis.window = dom.window
  globalThis.document = dom.window.document
  globalThis.IS_REACT_ACT_ENVIRONMENT = true
  const entries = new Map(), disposers = [], navigation = []
  const formSnapshot = { status: 'ready', writable: true, revision: 1, value: { appearance: {}, voiceModel: { provider: '', model: '' }, delegation: { agentPreset: '', provider: 'spawn' } } }
  const form = { getSnapshot: () => formSnapshot, subscribe: () => () => {}, async mutate() { return true } }
  let plugin
  const context = {
    effect(callback) { const stop = callback(); if (typeof stop === 'function') disposers.push(stop); return stop },
    slots: {
      inject(key, callback) { return context.effect(callback) },
      register(options, component) {
        const key = options.name + ':' + (options.id ?? options.key)
        entries.set(key, { options, component })
        return () => entries.delete(key)
      },
    },
    configForms: { get: () => form },
    sessions: { list: { getSnapshot: () => ({ byId: {} }) } },
    workspaces: { list: { getSnapshot: () => ({ items: [] }) } },
    uiWorkspace: { openSession(id) { navigation.push(['session', id]) } }, remote: { credentials: {} },
    layout: { selectPanel(id) { navigation.push(['panel', id]) }, panelInfo: { getSnapshot: () => panelSnapshot, subscribe: () => () => {} } },
    uiConversation: { events: { register() { return () => {} } } },
    locale: { register() { return () => {} }, bind() { return key => ({ 'index.1': '语音对话', 'Composer.3': '返回语音' }[key] ?? key) } },
  }
  const panelSnapshot = { activePanelId: null }
  const sandbox = {
    window: dom.window, document: dom.window.document, location: dom.window.location,
    navigator: dom.window.navigator, console, setTimeout, clearTimeout, setInterval, clearInterval,
    URL, AbortController,
    requestAnimationFrame: callback => setTimeout(callback, 0),
    MutationObserver: dom.window.MutationObserver,
  }
  const primitives = { Button: React.forwardRef(({ variant, size, icon, children, ...props }, ref) => React.createElement('button', { ...props, ref }, icon, children)), ...Object.fromEntries(['IconMicrophoneOutlineRegular', 'IconChevronLeftOutlineRegular', 'IconPauseOutlineRegular', 'IconPlayOutlineRegular', 'IconStopFillRegular'].map(name => [name, () => React.createElement('svg')])) }
  dom.window.__ModuleLoader__ = { load(row) { plugin = row.factory(name => { if (name === '@deepseek-ai/dsh-client-ui-primitives') return primitives; assert.equal(name, 'react'); return React }) } }
  vm.runInNewContext(readFileSync('lib/client.js', 'utf8'), sandbox)
  const root = createRoot(dom.window.document.getElementById('app'))
  try {
    plugin.apply(context)
    const composer = entries.get('conversation.composer:moss-composer')
    assert.deepEqual(JSON.parse(JSON.stringify(composer.options.select({ sessionId: 'moss-live-example' }))), { sessionId: 'moss-live-example' })
    assert.equal(composer.options.select({ sessionId: 'ordinary-session' }), null)
    assert.equal(composer.options.select({ sessionId: 'moss-task-example' }), null)
    assert.equal(composer.options.select({ sessionId: 'moss-live-example', pendingInteraction: {} }), null, 'native approvals retain priority')
    assert.ok(entries.has('sidebar.panellist:moss'))
    assert.ok(entries.has('main:moss'))
    assert.equal(entries.has('conversation.view:moss'), false, 'there is one voice page, not a second tab with another composer')
    assert.ok(entries.has('settings.section:moss'))
    assert.ok(entries.has('shell.overlay:moss-settings'), 'quick settings must have an owned native modal, not an unavailable shortcut method')
    assert.equal([...entries.keys()].some(key => key.startsWith('sidebar.footer.action')), false)
    assert.equal([...entries.keys()].some(key => key.startsWith('settings.models.')), false, 'API setup belongs to native DSH')
    const rendered = ['conversation.input.right:moss-entry', 'shell.bottom:moss-capsule'].map(key => entries.get(key))
    const bindInjected = options => {
      const { hooks, ...props } = options.inject()
      for (const [name, source] of Object.entries(hooks)) props['use' + name[0].toUpperCase() + name.slice(1)] = selector => selector(React.useSyncExternalStore(source.subscribe, source.getSnapshot))
      return { ...props, t: context.locale.bind() }
    }
    await act(async () => root.render(React.createElement(React.Fragment, null,
      ...rendered.map(({ component: Component, options }, key) => React.createElement(Component, { ...bindInjected(options), key, wide: true })),
    )))
    assert.ok(dom.window.document.querySelector('#app button[aria-label="语音对话"]'), 'entry must render inside its declared slot')
    assert.equal(dom.window.document.querySelectorAll('body > button').length, 0, 'no fallback button outside DSH')
    const { component: Composer, options } = composer
    await act(async () => root.render(React.createElement(Composer, { ...bindInjected(options), sessionId: 'moss-live-saved' })))
    assert.equal(dom.window.document.querySelectorAll('input').length, 0, 'voice history must not show a fake disabled text input')
    const returnButton = dom.window.document.querySelector('button[aria-label="返回语音"]')
    assert.ok(returnButton, 'history has a named and visible way back to the voice page')
    assert.equal(returnButton.textContent, '', 'the requested return control is icon-only')
    assert.equal(returnButton.title, '返回语音')
    assert.ok(dom.window.document.querySelector('[role="group"][aria-label="call.controls"]'), 'the history return and call controls share one bar')
    assert.ok(dom.window.document.querySelector('button[aria-label="call.resume"]'), 'paused history keeps a resume control')
    assert.ok(dom.window.document.querySelector('button[aria-label="VoiceView.11"]'))
    assert.ok(dom.window.document.querySelector('button[aria-label="VoiceView.4"]'))
    const shared = options.inject()
    await act(async () => shared.openSettings())
    assert.equal(shared.hooks.voice.getSnapshot().settingsOpen, true, 'settings shortcut has a real public state path')
    await act(async () => entries.get('shell.overlay:moss-settings').options.inject().closeSettings())
    assert.equal(shared.hooks.voice.getSnapshot().settingsOpen, false)
    await act(async () => returnButton.click())
    assert.deepEqual(navigation, [['session', 'moss-live-saved'], ['panel', 'moss']], 'returning opens the same native session without creating one')
    await act(async () => root.unmount())
    for (const stop of disposers.reverse()) await stop()
    assert.equal(entries.size, 0)
    assert.equal(dom.window.document.querySelectorAll('style[data-moss-live]').length, 0)
  } finally {
    for (const stop of disposers.reverse()) await stop()
    dom.window.close()
    Object.assign(globalThis, prior)
  }
})

import test from 'node:test'
import assert from 'node:assert/strict'
import { build } from 'esbuild'
import { createRequire } from 'node:module'
import vm from 'node:vm'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { JSDOM } from 'jsdom'

async function orbComponent() {
  const result = await build({ entryPoints: ['src/client/Orb.jsx'], bundle: true, write: false, format: 'cjs', platform: 'node', outdir: '.superpowers/orb-test', external: ['react', 'three'], loader: { '.css': 'local-css' } })
  const module = { exports: {} }
  vm.runInNewContext(result.outputFiles.find(file => file.path.endsWith('.js')).text, { module, exports: module.exports, require: createRequire(import.meta.url) })
  return module.exports.Orb
}

test('the full orb is a named keyboard control while its inline miniature stays decorative', async () => {
  const Orb = await orbComponent()
  const full = new JSDOM(renderToStaticMarkup(React.createElement(Orb, { label: 'Stir the clouds' })))
  const control = full.window.document.querySelector('[role="button"], button')
  assert.ok(control, 'the cloud must be reachable as an interactive control')
  assert.equal(control.getAttribute('aria-label'), 'Stir the clouds')
  assert.equal(control.getAttribute('aria-hidden'), null)
  const small = new JSDOM(renderToStaticMarkup(React.createElement(Orb, { small: true })))
  assert.equal(small.window.document.querySelectorAll('button,[role="button"]').length, 0, 'capsule parent already owns its button')
  assert.ok(small.window.document.querySelector('[aria-hidden="true"]'))
  full.window.close(); small.window.close()
})


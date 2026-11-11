import test from 'node:test'
import assert from 'node:assert/strict'
import { mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises'
import { resolve, join, sep } from 'node:path'
import { fileURLToPath } from 'node:url'
import { spawnSync } from 'node:child_process'

const script = fileURLToPath(new URL('../scripts/release-package.mjs', import.meta.url))
const requiredFiles = ['package.json', 'cordis.patch.yml', 'lib/index.js', 'lib/agent-loop.js', 'lib/client.js']
const filename = 'dsh-moss-live-0.2.0.tgz'

async function fixture(t, omitted = []) {
  const root = resolve('.superpowers', 'release-tests')
  await mkdir(root, { recursive: true })
  const directory = await mkdtemp(join(root, 'package-'))
  t.after(async () => {
    assert.ok(directory.startsWith(root + sep))
    await rm(directory, { recursive: true, force: true })
  })
  const manifest = { name: 'dsh-moss-live', version: '0.2.0', scripts: {},
    exports: { '.': './lib/index.js', './client': './lib/client.js', './agent-loop': './lib/agent-loop.js' },
    dsh: { bundle: { patch: './cordis.patch.yml' }, client: { platform: 'web' } } }
  const manifestPath = join(directory, 'manifest.json')
  await writeFile(manifestPath, JSON.stringify(manifest))
  await writeFile(join(directory, filename), 'abc')
  await writeFile(join(directory, 'pack.json'), JSON.stringify([{ name: manifest.name, version: manifest.version, filename, size: 3,
    files: requiredFiles.filter(path => !omitted.includes(path)).map(path => ({ path })) }]))
  const run = (tag = '') => spawnSync(process.execPath, [script, directory, manifestPath], {
    encoding: 'utf8', env: { ...process.env, GITHUB_REF_TYPE: tag ? 'tag' : 'branch', GITHUB_REF_NAME: tag },
  })
  return { directory, manifest, manifestPath, run }
}

test('release verification writes SHA256SUMS for the exact package bytes', async t => {
  const { directory, run } = await fixture(t)
  const result = run('v0.2.0')
  assert.equal(result.status, 0, result.stderr)
  assert.equal(await readFile(join(directory, 'SHA256SUMS'), 'utf8'),
    `ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad  ${filename}\n`)
})

test('release verification refuses a package missing the compiled browser entry', async t => {
  const { run } = await fixture(t, ['lib/client.js'])
  const result = run()
  assert.notEqual(result.status, 0)
  assert.match(result.stderr, /Missing compiled runtime entry: lib\/client\.js/)
})

test('release verification refuses a tag that does not match package.json', async t => {
  const { run } = await fixture(t)
  const result = run('v0.3.0')
  assert.notEqual(result.status, 0)
  assert.match(result.stderr, /Release tag must be v0\.2\.0/)
})

test('release verification refuses installation hooks requiring user-side builds', async t => {
  const { manifest, manifestPath, run } = await fixture(t)
  manifest.scripts.prepare = 'npm run build'
  await writeFile(manifestPath, JSON.stringify(manifest))
  const result = run()
  assert.notEqual(result.status, 0)
  assert.match(result.stderr, /Precompiled packages must not have a prepare hook/)
})

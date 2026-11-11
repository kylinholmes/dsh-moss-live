import { createHash } from 'node:crypto'
import { readFile, writeFile } from 'node:fs/promises'
import { join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

/** Check npm's package inventory before distributing a precompiled DSH bundle. */
export async function verifyReleasePackage(directory, manifestPath, tag) {
  const manifest = JSON.parse(await readFile(manifestPath, 'utf8'))
  if (tag && tag !== `v${manifest.version}`) throw new Error(`Release tag must be v${manifest.version}`)
  for (const hook of ['prepare', 'prepack', 'postpack', 'preinstall', 'install', 'postinstall']) {
    if (manifest.scripts?.[hook]) throw new Error(`Precompiled packages must not have a ${hook} hook`)
  }
  const reports = JSON.parse(await readFile(join(directory, 'pack.json'), 'utf8'))
  if (!Array.isArray(reports) || reports.length !== 1) throw new Error('Expected exactly one npm pack report')
  const report = reports[0]
  const filename = `${manifest.name.replace(/^@/, '').replace('/', '-')}-${manifest.version}.tgz`
  if (report.name !== manifest.name || report.version !== manifest.version || report.filename !== filename) {
    throw new Error('npm pack report does not match package.json')
  }
  if (!/^[a-z0-9][a-z0-9._-]+\.tgz$/i.test(filename)) throw new Error('Invalid package filename')
  if (manifest.dsh?.client?.platform !== 'web' || manifest.dsh?.bundle?.patch !== './cordis.patch.yml') {
    throw new Error('Expected a native DSH Web bundle with cordis.patch.yml')
  }
  const files = new Set(report.files.map(file => file.path))
  const runtime = ['package.json', 'cordis.patch.yml', 'lib/index.js', 'lib/agent-loop.js', 'lib/client.js']
  for (const entry of Object.values(manifest.exports ?? {})) {
    if (typeof entry !== 'string' || !entry.startsWith('./')) throw new Error('Expected relative package exports')
    runtime.push(entry.slice(2))
  }
  for (const path of runtime) if (!files.has(path)) throw new Error(`Missing compiled runtime entry: ${path}`)
  for (const path of files) {
    if (!path.startsWith('lib/') && !['package.json', 'cordis.patch.yml', 'README.md', 'LICENSE', 'LICENSE.md'].includes(path)) {
      throw new Error(`Unexpected development file in package: ${path}`)
    }
  }
  const archive = await readFile(join(directory, filename))
  if (archive.length !== report.size) throw new Error('Package size does not match npm pack report')
  const sha256 = createHash('sha256').update(archive).digest('hex')
  await writeFile(join(directory, 'SHA256SUMS'), `${sha256}  ${filename}\n`)
  return { filename, sha256, bytes: archive.length }
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    const artifact = await verifyReleasePackage(resolve(process.argv[2] ?? 'dist'),
      resolve(process.argv[3] ?? fileURLToPath(new URL('../package.json', import.meta.url))),
      process.env.GITHUB_REF_TYPE === 'tag' ? process.env.GITHUB_REF_NAME : undefined)
    console.log(`${artifact.filename}: ${artifact.bytes} bytes, SHA256 ${artifact.sha256}`)
  } catch (error) {
    console.error(error.message)
    process.exitCode = 1
  }
}

import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { spawn } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { join } from 'node:path'

const project = fileURLToPath(new URL('../', import.meta.url))
const runtime = join(project, '.superpowers', 'runtime')
const home = join(runtime, 'home')
const temporary = join(runtime, 'tmp')
const version = '0.2.2-rc.1'
await Promise.all([mkdir(home, { recursive: true }), mkdir(temporary, { recursive: true })])

function run(executable, args, env = process.env) {
  return new Promise((resolve, reject) => {
    const child = spawn(executable, args, { cwd: project, env, stdio: 'inherit', windowsHide: true })
    child.on('error', reject)
    child.on('exit', (code, signal) => signal ? reject(new Error(`DSH exited with ${signal}`)) : resolve(code ?? 1))
  })
}

if (process.argv.includes('--setup')) {
  await writeFile(join(runtime, 'package.json'), JSON.stringify({
    name: 'moss-native-test-runtime', private: true, type: 'module',
    dependencies: { '@deepseek-ai/dsh': version },
  }, null, 2) + '\n')
  if (!process.env.npm_execpath) throw new Error('Run this setup through npm run setup:dsh.')
  process.exitCode = await run(process.execPath, [process.env.npm_execpath, 'install', '--prefix', runtime, '--no-audit', '--no-fund'])
} else {
  const pkg = JSON.parse(await readFile(join(runtime, 'node_modules', '@deepseek-ai', 'dsh', 'package.json'), 'utf8').catch(() => {
    throw new Error('Run npm run setup:dsh to install the isolated DSH runtime.')
  }))
  if (pkg.version !== version) throw new Error(`Expected isolated DSH ${version}; run npm run setup:dsh.`)
  const args = process.argv.slice(2)
  if (!args.includes('--port')) args.push('--port', '59433')
  process.exitCode = await run(process.execPath, [
    join(runtime, 'node_modules', '@deepseek-ai', 'dsh', 'lib', 'bin.js'), 'web', '--no-open', ...args,
  ], { ...process.env, DSH_HOME: home, TMP: temporary, TEMP: temporary })
}

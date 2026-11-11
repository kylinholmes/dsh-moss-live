import { build } from 'esbuild'
import { writeFile, mkdir, copyFile } from 'node:fs/promises'

const result = await build({ entryPoints: ['src/client/index.jsx'], bundle: true, write: false, format: 'cjs',
  platform: 'browser', target: ['es2022'], outdir: 'lib', minify: true, external: ['react', '@deepseek-ai/dsh-client-ui-primitives'], loader: { '.css': 'local-css' }, legalComments: 'none' })
const javascript = result.outputFiles.find(file => file.path.endsWith('.js')).text
const css = result.outputFiles.find(file => file.path.endsWith('.css'))?.text ?? ''
await writeFile('lib/client.js', `window.__ModuleLoader__.load({\n  id: 'dsh-moss-live',\n  factory: (require) => {\n    const __MOSS_CSS_TEXT__ = ${JSON.stringify(css)};\n    const module = { exports: {} }; const exports = module.exports;\n${javascript}\n    return module.exports;\n  },\n});\n`)
await mkdir('lib/licenses', { recursive: true })
await copyFile('node_modules/three/LICENSE', 'lib/licenses/three.txt')

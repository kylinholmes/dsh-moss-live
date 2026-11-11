/**
 * 把协议/音频纯模块与浏览器 UI 主体拼成 DSH 的客户端 bundle。
 *
 * 为什么用拼接而不是打包器：
 *   协议与音频模块是 ESM，测试直接 import；浏览器 bundle 需要一个自包含的
 *   CJS factory。这里只做最小转换（去掉行首 `export `），不引入构建依赖。
 */
import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')

const strip = (file) => readFileSync(resolve(root, file), 'utf8').replace(/^export /gm, '')
const protocol = strip('lib/protocol.js')
const audio = strip('lib/audio.js')
const body = readFileSync(resolve(root, 'lib/client.src.js'), 'utf8')

const bundle = `window.__ModuleLoader__.load({
  id: 'dsh-moss-live',
  factory: (require) => {
${protocol}
${audio}
${body}
  },
})
`

writeFileSync(resolve(root, 'lib/client.js'), bundle)

import { build } from 'esbuild'
import { createServer } from 'node:http'
import { readFile, writeFile, mkdir } from 'node:fs/promises'

const output = new URL('../.superpowers/orb-preview/', import.meta.url)
await mkdir(output, { recursive: true })
await build({ entryPoints: ['scripts/orb-preview/entry.jsx'], outfile: '.superpowers/orb-preview/preview.js', bundle: true,
  platform: 'browser', format: 'esm', loader: { '.css': 'local-css' }, define: { 'process.env.NODE_ENV': '"production"' }, legalComments: 'none' })
await writeFile(new URL('index.html', output), '<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" href="data:,"><title>MOSS 球体交互预览</title><link rel="stylesheet" href="/preview.css"><link rel="stylesheet" href="/lab.css"></head><body><div id="root"></div><script type="module" src="/preview.js"></script></body></html>')
const paths = { '/': new URL('index.html', output), '/preview.js': new URL('preview.js', output), '/preview.css': new URL('preview.css', output), '/lab.css': new URL('./orb-preview/lab.css', import.meta.url) }
createServer(async (request, response) => {
  const target = paths[request.url]
  if (!target) { response.writeHead(404); response.end(); return }
  response.setHeader('Cache-Control', 'no-store')
  response.setHeader('Content-Type', target.pathname.endsWith('.js') ? 'text/javascript' : target.pathname.endsWith('.css') ? 'text/css' : 'text/html; charset=utf-8')
  response.end(await readFile(target))
}).listen(59435, '127.0.0.1', () => process.stdout.write('MOSS 球体交互预览：http://127.0.0.1:59435/\n'))

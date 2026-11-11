import { build } from 'esbuild'
await build({ entryPoints: { index: 'src/host/runtime.js', 'agent-loop': 'src/host/agent-loop.js' },
  outdir: 'lib', bundle: true, format: 'esm', platform: 'node', target: 'node22', packages: 'external', legalComments: 'none' })

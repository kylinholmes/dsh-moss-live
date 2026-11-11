import test from 'node:test'
import assert from 'node:assert/strict'
import { sameOrigin, resolveKey, registerRoutes, CONFIG_PATH, WS_PATH } from '../lib/host.js'

test('同源校验', () => {
  assert.equal(sameOrigin({ headers: { origin: 'http://127.0.0.1:42387', host: '127.0.0.1:42387' } }, 'http:'), true)
  assert.equal(sameOrigin({ headers: { origin: 'http://evil.example', host: '127.0.0.1:42387' } }, 'http:'), false)
  assert.equal(sameOrigin({ headers: { host: '127.0.0.1:42387' } }, 'http:'), false)
})

test('key 先读凭据服务', async () => {
  const ctx = { get: () => ({ resolve: async (ref) => ({ value: 'from-store' }) }) }
  assert.equal(await resolveKey(ctx), 'from-store')
})

test('凭据缺失回退环境变量', async () => {
  const ctx = { get: () => ({ resolve: async () => undefined }) }
  process.env.MOSS_LIVE_API_KEY = 'from-env'
  assert.equal(await resolveKey(ctx), 'from-env')
  delete process.env.MOSS_LIVE_API_KEY
})

test('路由常量固定', () => {
  assert.equal(CONFIG_PATH, '/dsh-moss-live/config')
  assert.equal(WS_PATH, '/dsh-moss-live/ws')
})

test('注册路由、配置响应与幂等释放', () => {
  const routes = []
  const removed = []
  const web = {
    protocol: 'http:',
    register: (route) => {
      routes.push(['http', route])
      return () => removed.push('http')
    },
    registerUpgrade: (route) => {
      routes.push(['upgrade', route])
      return () => removed.push('upgrade')
    },
  }

  const dispose = registerRoutes({}, web, { model: 'moss-test', voice: 'v' })
  assert.equal(routes.length, 2)
  const [http, upgrade] = routes
  assert.equal(http[1].kind, 'exact')
  assert.equal(http[1].path, CONFIG_PATH)
  assert.equal(upgrade[1].path, WS_PATH)

  let status
  let body
  http[1].handler(
    { headers: { origin: 'http://127.0.0.1:42387', host: '127.0.0.1:42387' } },
    {
      writeHead: (code) => {
        status = code
      },
      end: (payload) => {
        body = payload
      },
    },
  )
  assert.equal(status, 200)
  assert.deepEqual(JSON.parse(body), { model: 'moss-test', voice: 'v', instructions: '' })

  dispose()
  dispose()
  assert.deepEqual(removed.sort(), ['http', 'upgrade'])
})

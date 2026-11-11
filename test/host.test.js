import test from 'node:test'
import assert from 'node:assert/strict'
import {
  sameOrigin,
  resolveKey,
  registerRoutes,
  safeCloseCode,
  truncateCloseReason,
  CONFIG_PATH,
  WS_PATH,
} from '../lib/host.js'

/** 最小 ctx.webServer 替身：记录注册的路由与释放顺序。 */
function fakeWeb() {
  const routes = []
  const removed = []
  return {
    routes,
    removed,
    web: {
      protocol: 'http:',
      register: (route) => {
        routes.push(['http', route])
        return () => removed.push('http')
      },
      registerUpgrade: (route) => {
        routes.push(['upgrade', route])
        return () => removed.push('upgrade')
      },
    },
  }
}

/** 最小 node:http ServerResponse 替身。 */
function fakeResponse() {
  const state = {}
  return {
    state,
    response: {
      writeHead: (status, headers) => {
        state.status = status
        state.headers = headers
      },
      end: (body) => {
        state.body = body
      },
    },
  }
}

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
  const { web, routes, removed } = fakeWeb()
  const dispose = registerRoutes({}, web, { model: 'moss-test', voice: 'v' })
  assert.equal(routes.length, 2)
  const [http, upgrade] = routes
  assert.equal(http[1].kind, 'exact')
  assert.equal(http[1].path, CONFIG_PATH)
  assert.equal(upgrade[1].path, WS_PATH)

  const { state, response } = fakeResponse()
  http[1].handler(
    { headers: { origin: 'http://127.0.0.1:42387', host: '127.0.0.1:42387' } },
    response,
  )
  assert.equal(state.status, 200)
  assert.deepEqual(JSON.parse(state.body), { model: 'moss-test', voice: 'v', instructions: '' })

  dispose()
  dispose()
  assert.deepEqual(removed.sort(), ['http', 'upgrade'])
})

test('配置路由放行无 Origin 请求、拒绝异源 Origin', () => {
  const { web, routes } = fakeWeb()
  const dispose = registerRoutes({}, web, { model: 'moss-test', voice: 'v' })
  const route = routes.find(([kind]) => kind === 'http')[1]

  // 浏览器同源 GET 不带 Origin —— 真实客户端必须拿到 200。
  const plain = fakeResponse()
  route.handler({ headers: { host: '127.0.0.1:42387' } }, plain.response)
  assert.equal(plain.state.status, 200)
  assert.deepEqual(JSON.parse(plain.state.body), { model: 'moss-test', voice: 'v', instructions: '' })

  // 带异源 Origin 的跨站请求仍然被挡住。
  const foreign = fakeResponse()
  route.handler({ headers: { origin: 'http://evil.example', host: '127.0.0.1:42387' } }, foreign.response)
  assert.equal(foreign.state.status, 403)
  assert.deepEqual(JSON.parse(foreign.state.body), { error: 'FORBIDDEN' })

  dispose()
})

test('关闭码归一为可发送值', () => {
  assert.equal(safeCloseCode(1000), 1000)
  assert.equal(safeCloseCode(1001), 1001)
  assert.equal(safeCloseCode(1014), 1014)
  assert.equal(safeCloseCode(3000), 3000)
  assert.equal(safeCloseCode(4999), 4999)
  for (const bad of [1004, 1005, 1006, 1015, 5000, 999, 0, -1, undefined, null, NaN, 1000.5, '1000']) {
    assert.equal(safeCloseCode(bad), 1011, `code ${String(bad)} 应归一为 1011`)
  }
})

test('关闭原因按字节截断', () => {
  assert.equal(truncateCloseReason('client closed'), 'client closed')
  assert.equal(truncateCloseReason(undefined), '')
  assert.equal(truncateCloseReason(Buffer.from('上游断开')), '上游断开')

  const ascii = 'a'.repeat(200)
  assert.equal(truncateCloseReason(ascii), 'a'.repeat(123))
  assert.equal(Buffer.byteLength(truncateCloseReason(ascii), 'utf8'), 123)

  const chinese = '中'.repeat(100)
  const cut = truncateCloseReason(chinese)
  assert.ok(Buffer.byteLength(cut, 'utf8') <= 123)
  assert.equal(Buffer.byteLength(cut, 'utf8'), 123)
  assert.equal(cut, '中'.repeat(41))
})

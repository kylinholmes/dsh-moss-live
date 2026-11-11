import test from 'node:test'
import assert from 'node:assert/strict'
const { registerRoutes } = await import('../src/host/routes.js').catch(error => {
  if (error.code !== 'ERR_MODULE_NOT_FOUND') throw error
  return {}
})

test('custom configuration route requires DSH Connection authentication', () => {
  assert.equal(typeof registerRoutes, 'function')
  const routes = []
  const web = { protocol: 'http:', register: route => { routes.push(route); return () => {} }, registerUpgrade: () => () => {} }
  const stop = registerRoutes({ connection: { requestRejection: () => 401 } }, web)
  let status
  routes.find(route => route.path === '/dsh-moss-live/config').handler({ method: 'GET', headers: { host: 'localhost' } }, {
    writeHead(code) { status = code }, end() {},
  })
  stop()
  assert.equal(status, 401, 'same host alone is not an authenticated DSH browser')
})

test('HTTP and WebSocket use the DSH admission fence and reject before any runtime operation', async () => {
  assert.equal(typeof registerRoutes, 'function')
  for (const status of [401, 403]) {
    const routes = [], upgrades = []
    let admissions = 0, operations = 0, removed = 0
    const web = {
      register: route => { routes.push(route); return () => removed++ },
      registerUpgrade: route => { upgrades.push(route); return () => removed++ },
    }
    const stop = registerRoutes({ connection: { requestRejection() { admissions++; return status } } }, web, {
      settings() { operations++; }, attach() { operations++; }, create() { operations++; },
    })
    for (const route of routes) {
      let code
      await route.handler({ method: 'GET', headers: {} }, { writeHead(value) { code = value }, end() {} })
      assert.equal(code, status)
    }
    let rejection = ''
    await upgrades[0].handler({ headers: {} }, { end(value) { rejection = value } }, Buffer.alloc(0))
    assert.match(rejection, new RegExp(`^HTTP/1.1 ${status}`))
    assert.equal(admissions, routes.length + 1)
    assert.equal(operations, 0)
    stop(); stop()
    assert.equal(removed, routes.length + upgrades.length)
    assert.equal(routes.some(route => route.path.includes('diag')), false)
  }
})

test('authenticated public settings have no credentials and unsupported methods are rejected', async () => {
  assert.equal(typeof registerRoutes, 'function')
  const routes = []
  const stop = registerRoutes({ connection: { requestRejection() {} } }, {
    register: route => { routes.push(route); return () => {} }, registerUpgrade: () => () => {},
  }, { settings: () => ({ voiceModel: { provider: 'moss', model: 'MOSS-2.0' } }) })
  let status, body
  const response = { writeHead(value, headers) { status = value; assert.equal(headers['cache-control'], 'no-store') }, end(value) { body = value } }
  await routes.find(route => route.path.endsWith('/config')).handler({ method: 'GET', headers: {} }, response)
  assert.equal(status, 200)
  assert.doesNotMatch(body, /key|secret|baseURL/)
  await routes.find(route => route.path.endsWith('/config')).handler({ method: 'PUT', headers: {} }, response)
  assert.equal(status, 405)
  stop()
})

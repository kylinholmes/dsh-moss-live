import { WebSocketServer } from 'ws'

export const CONFIG_PATH = '/dsh-moss-live/config'
export const WS_PATH = '/dsh-moss-live/ws'
export const SESSIONS_PATH = '/dsh-moss-live/sessions'
export const TEST_PATH = '/dsh-moss-live/test'
const MAX_BODY = 8192
const MAX_CLIENTS = 8

function json(response, status, body) {
  response.writeHead(status, { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' })
  response.end(JSON.stringify(body))
}

async function readBody(request) {
  if (Number(request.headers['content-length']) > MAX_BODY) throw new Error('BODY_TOO_LARGE')
  const chunks = []
  let bytes = 0
  for await (const chunk of request) {
    bytes += chunk.length
    if (bytes > MAX_BODY) throw new Error('BODY_TOO_LARGE')
    chunks.push(chunk)
  }
  return JSON.parse(Buffer.concat(chunks).toString('utf8'))
}

/** Every entry passes the same authority, origin and identity checks as native RPC. */
export function registerRoutes(ctx, web, runtime) {
  const server = new WebSocketServer({ noServer: true, maxPayload: 128 * 1024, perMessageDeflate: false })
  let disposed = false
  const stops = []
  const reject = request => ctx.connection?.requestRejection(request) ?? (ctx.connection ? undefined : 401)
  const http = (path, method, handler) => stops.push(web.register({ kind: 'exact', path, handler: async (request, response) => {
    const status = reject(request)
    if (status) return json(response, status, { error: status === 403 ? 'FORBIDDEN' : 'UNAUTHENTICATED' })
    if (disposed) return json(response, 503, { error: 'UNAVAILABLE' })
    if (request.method !== method) return json(response, 405, { error: 'METHOD_NOT_ALLOWED' })
    return handler(request, response)
  } }))
  http(CONFIG_PATH, 'GET', async (_request, response) => json(response, 200, await runtime.settings()))
  http(TEST_PATH, 'POST', async (request, response) => {
    const abort = new AbortController()
    const close = () => { if (!response.writableEnded) abort.abort() }
    response.once?.('close', close)
    try {
      const route = await readBody(request)
      if (!route || Object.keys(route).some(key => !['provider', 'model'].includes(key))
        || typeof route.provider !== 'string' || typeof route.model !== 'string') throw new Error('Invalid route')
      const result = await runtime.testModel(route, abort.signal)
      return json(response, 200, { ok: true, ...result })
    } catch (error) {
      return json(response, error.message === 'BODY_TOO_LARGE' ? 413 : 400, { ok: false,
        error: error.code ?? 'VOICE_CONNECTION_FAILED', message: error.publicMessage ?? '连接测试失败，请检查网络后重试。' })
    } finally { response.off?.('close', close) }
  })
  http(SESSIONS_PATH, 'POST', async (request, response) => {
    try {
      const data = await readBody(request)
      if (Object.keys(data).some(key => key !== 'cwd') || typeof data.cwd !== 'string' || !data.cwd) {
        return json(response, 400, { error: 'INVALID_CWD' })
      }
      return json(response, 201, await runtime.create(data.cwd))
    } catch (error) {
      return json(response, error.message === 'BODY_TOO_LARGE' ? 413 : 400, {
        error: error.code ?? 'CREATE_FAILED', message: error.publicMessage ?? '无法创建语音会话，请检查模型和工作目录设置。',
      })
    }
  })
  stops.push(web.registerUpgrade({ path: WS_PATH, handler: (request, socket, head) => {
    const status = reject(request)
    if (status) return socket.end(`HTTP/1.1 ${status} Rejected\r\nConnection: close\r\n\r\n`)
    if (disposed || server.clients.size >= MAX_CLIENTS) return socket.end('HTTP/1.1 503 Unavailable\r\nConnection: close\r\n\r\n')
    const sessionId = new URL(request.url, 'http://localhost').searchParams.get('sessionId')
    if (!/^moss-live-[A-Za-z0-9-]{1,100}$/.test(sessionId ?? '')) return socket.end('HTTP/1.1 400 Invalid Session\r\nConnection: close\r\n\r\n')
    server.handleUpgrade(request, socket, head, peer => {
      // A listener prevents a malformed browser frame from becoming an uncaught error.
      peer.on('error', () => {})
      Promise.resolve(runtime.attach(peer, sessionId)).catch(error => {
        if (peer.readyState === 1) {
          peer.send(JSON.stringify({ action: 'moss.error', data: { code: error.code ?? 'VOICE_CONNECTION_FAILED', message: error.publicMessage ?? '语音连接失败，请检查 DSH 模型和凭据设置。' } }))
          peer.close(1011, 'Voice connection failed')
        }
      })
    })
  } }))
  return () => {
    if (disposed) return
    disposed = true
    for (const stop of stops.reverse()) stop()
    for (const peer of server.clients) peer.terminate()
    server.close()
  }
}

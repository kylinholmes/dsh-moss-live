/**
 * dsh-moss-live —— 把 MOSS-Live 1.0 的全双工实时语音接到 DSH Web GUI 上。
 *
 * 为什么要有宿主这一半：
 *   浏览器的 WebSocket 不能自定义 Authorization 请求头，而 MOSS 要求 key 只放
 *   在握手头里。所以由宿主进程建立到 wss://api.mosi.cn/v1/realtime 的连接，
 *   浏览器连本机的 /dsh-moss-live/ws，宿主做透明转发。key 永不出服务端。
 *
 * 路由：
 *   GET  /dsh-moss-live/config   → 当前模型/音色/指令（给客户端初始化用）
 *   WS   /dsh-moss-live/ws       → 与 MOSS realtime 的透明代理
 *
 * 安全：
 *   - 只转发协议帧，不解析、不注入；
 *   - 升级请求校验 Origin 与 Host 一致（挡住跨站页面借用本机代理）；
 *   - key 通过 DSH 凭据服务读取，代码与日志里不出现明文。
 */
import ws from 'ws'

const { WebSocket, WebSocketServer } = ws

export const name = 'dsh-moss-live'

/** 挂载在 Web 组合里，必须等宿主 HTTP 服务就绪。 */
export const inject = ['webServer']

export const CONFIG_PATH = '/dsh-moss-live/config'
export const WS_PATH = '/dsh-moss-live/ws'

const DEFAULT_MODEL = 'moss-live-1.0'
const KEY_REF = 'MOSS_LIVE_API_KEY'

/**
 * 读取 MOSS key：优先凭据服务，其次启动环境。
 * @param {import('@deepseek-ai/cordis').Context} ctx
 * @returns {Promise<string | undefined>}
 */
async function resolveKey(ctx) {
  const credentials = ctx.get('credentials')
  if (credentials !== undefined) {
    const hit = await credentials.resolve(KEY_REF)
    if (hit?.value) return hit.value
  }
  const ambient = process.env[KEY_REF]
  return ambient && ambient.length > 0 ? ambient : undefined
}

/**
 * 只接受同源页面发起的升级请求。
 * @param {import('node:http').IncomingMessage} request
 * @param {string} protocol 监听协议（'http:'/'https:'）
 * @returns {boolean}
 */
function sameOrigin(request, protocol) {
  const origin = request.headers.origin
  const host = request.headers.host
  if (typeof host !== 'string' || host.length === 0) return false
  if (typeof origin !== 'string' || origin.length === 0) return false
  try {
    const parsed = new URL(origin)
    return `${parsed.protocol}//${parsed.host}` === `${protocol}//${host}`
  } catch {
    return false
  }
}

/**
 * @param {import('@deepseek-ai/cordis').Context} ctx
 * @param {object} config
 */
export function apply(ctx, config = {}) {
  const web = ctx.webServer
  if (!web || typeof web.registerUpgrade !== 'function') {
    ctx.logger?.warn?.('dsh-moss-live: 没有可用的 webServer，插件不挂载')
    return
  }

  const settings = {
    model: typeof config.model === 'string' && config.model.length > 0 ? config.model : DEFAULT_MODEL,
    voice: typeof config.voice === 'string' ? config.voice : '',
    instructions: typeof config.instructions === 'string' ? config.instructions : '',
  }

  // 配置端点：客户端拿到模型/音色/指令，自己决定发什么。
  ctx.effect(
    () =>
      web.register({
        kind: 'exact',
        path: CONFIG_PATH,
        handler: (request, response) => {
          if (!sameOrigin(request, web.protocol)) {
            response.writeHead(403, { 'content-type': 'application/json' })
            response.end(JSON.stringify({ error: 'FORBIDDEN' }))
            return
          }
          response.writeHead(200, { 'content-type': 'application/json', 'cache-control': 'no-store' })
          response.end(JSON.stringify(settings))
        },
      }),
    'dsh-moss-live: config route',
  )

  /** @type {WebSocketServer | undefined} */
  let server

  ctx.effect(
    () =>
      web.registerUpgrade({
        path: WS_PATH,
        handler: (request, socket, head) => {
          if (!sameOrigin(request, web.protocol)) {
            socket.write('HTTP/1.1 403 Forbidden\r\nConnection: close\r\n\r\n')
            socket.destroy()
            return
          }
          server ??= new WebSocketServer({ noServer: true })
          server.handleUpgrade(request, socket, head, (client) => {
            void bridge(ctx, client, settings)
          })
        },
      }),
    'dsh-moss-live: realtime proxy',
  )

  ctx.on('dispose', () => {
    const closing = server
    server = undefined
    if (closing !== undefined) {
      for (const client of closing.clients) client.close(1001, 'plugin disposed')
      closing.close()
    }
  })
}

/**
 * 一条浏览器连接对应一条 MOSS 连接，二进制帧原样来回。
 * @param {import('@deepseek-ai/cordis').Context} ctx
 * @param {WebSocket} client
 * @param {{ model: string, voice: string, instructions: string }} settings
 */
async function bridge(ctx, client, settings) {
  let upstream
  try {
    const key = await resolveKey(ctx)
    if (key === undefined) {
      client.close(1011, 'MOSS_LIVE_API_KEY 未配置')
      return
    }
    const url = `wss://api.mosi.cn/v1/realtime?model=${encodeURIComponent(settings.model)}`
    upstream = new WebSocket(url, {
      headers: { Authorization: `${'Bearer'} ${key}` },
      handshakeTimeout: 15000,
    })
  } catch (error) {
    ctx.logger?.warn?.(error instanceof Error ? error : new Error(String(error)))
    client.close(1011, 'upstream connect failed')
    return
  }

  /** 上游握手完成前先攒着客户端的帧。 */
  const pending = []
  let open = false

  const closeBoth = (code, reason) => {
    try {
      if (client.readyState === WebSocket.OPEN) client.close(code, reason)
    } catch {}
    try {
      if (upstream.readyState === WebSocket.OPEN) upstream.close(code, reason)
    } catch {}
  }

  upstream.on('open', () => {
    open = true
    for (const frame of pending.splice(0)) {
      upstream.send(frame.data, { binary: frame.binary })
    }
  })
  upstream.on('message', (data, isBinary) => {
    if (client.readyState === WebSocket.OPEN) client.send(data, { binary: isBinary })
  })
  upstream.on('error', (error) => {
    ctx.logger?.warn?.(error instanceof Error ? error : new Error(String(error)))
    closeBoth(1011, 'upstream error')
  })
  upstream.on('close', (code, reason) => {
    try {
      if (client.readyState === WebSocket.OPEN) client.close(code >= 1000 ? code : 1011, reason.toString().slice(0, 120))
    } catch {}
  })

  client.on('message', (data, isBinary) => {
    const frame = { data, binary: isBinary }
    if (open) {
      if (upstream.readyState === WebSocket.OPEN) upstream.send(frame.data, { binary: frame.binary })
      return
    }
    pending.push(frame)
  })
  client.on('close', () => {
    pending.length = 0
    try {
      if (upstream.readyState === WebSocket.OPEN) upstream.close(1000, 'client closed')
      else upstream.terminate()
    } catch {}
  })
  client.on('error', () => {
    try {
      upstream.terminate()
    } catch {}
  })
}

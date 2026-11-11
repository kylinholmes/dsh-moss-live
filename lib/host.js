/**
 * 宿主侧路由与 MOSS 实时代理（Task 3）。
 *
 * 为什么要有这一层：
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

export const CONFIG_PATH = '/dsh-moss-live/config'
export const WS_PATH = '/dsh-moss-live/ws'

const DEFAULT_MODEL = 'moss-live-1.0'
const KEY_REF = 'MOSS_LIVE_API_KEY'
const UPSTREAM_URL = 'wss://api.mosi.cn/v1/realtime'

/**
 * 读取 MOSS key：优先凭据服务，其次启动环境。
 * @param {import('@deepseek-ai/cordis').Context} ctx
 * @returns {Promise<string | undefined>}
 */
export async function resolveKey(ctx) {
  let credentials
  try {
    credentials = ctx?.get?.('credentials')
  } catch {
    credentials = undefined
  }
  if (credentials !== undefined) {
    const hit = await credentials.resolve(KEY_REF)
    if (hit?.value) return hit.value
  }
  const ambient = process.env[KEY_REF]
  return ambient && ambient.length > 0 ? ambient : undefined
}

/**
 * 只接受同源页面发起的请求。
 * @param {import('node:http').IncomingMessage} request
 * @param {string} protocol 监听协议（'http:'/'https:'）
 * @returns {boolean}
 */
export function sameOrigin(request, protocol) {
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
 * 把插件 config 收敛成配置端点的返回形状；对已收敛的值幂等。
 * @param {{ model?: string, voice?: string, instructions?: string }} [config]
 * @returns {{ model: string, voice: string, instructions: string }}
 */
export function normalizeSettings(config = {}) {
  const source = config ?? {}
  return {
    model: typeof source.model === 'string' && source.model.length > 0 ? source.model : DEFAULT_MODEL,
    voice: typeof source.voice === 'string' ? source.voice : '',
    instructions: typeof source.instructions === 'string' ? source.instructions : '',
  }
}

/**
 * 注册配置路由与升级路由，返回幂等释放器（移除路由、关闭所有连接）。
 *
 * 释放由调用方决定何时触发：既可以自己放进 `ctx.effect`，也会在 `ctx.on('dispose')`
 * 时自动执行一次。重复调用释放器是安全的。
 *
 * @param {import('@deepseek-ai/cordis').Context} ctx
 * @param {object} web ctx.webServer（register / registerUpgrade / protocol）
 * @param {{ model?: string, voice?: string, instructions?: string }} [config]
 * @param {(server: WebSocketServer) => void} [getServer] 内建 WS server 的观察钩子（可选）
 * @returns {() => void}
 */
export function registerRoutes(ctx, web, config = {}, getServer) {
  if (!web || typeof web.register !== 'function' || typeof web.registerUpgrade !== 'function') {
    throw new TypeError('dsh-moss-live: 需要可用的 ctx.webServer（register / registerUpgrade）')
  }

  const settings = normalizeSettings(config)
  const protocol = typeof web.protocol === 'string' ? web.protocol : 'http:'
  const disposers = []
  /** @type {WebSocketServer | undefined} */
  let server
  let disposed = false

  // 配置端点：客户端拿到模型/音色/指令，自己决定发什么。
  const configHandler = (request, response) => {
    if (!sameOrigin(request, protocol)) {
      response.writeHead(403, { 'content-type': 'application/json' })
      response.end(JSON.stringify({ error: 'FORBIDDEN' }))
      return
    }
    response.writeHead(200, { 'content-type': 'application/json', 'cache-control': 'no-store' })
    response.end(JSON.stringify(settings))
  }

  const upgradeHandler = (request, socket, head) => {
    if (!sameOrigin(request, protocol)) {
      socket.write('HTTP/1.1 403 Forbidden\r\nConnection: close\r\n\r\n')
      socket.destroy()
      return
    }
    if (server === undefined) {
      server = new WebSocketServer({ noServer: true })
      if (typeof getServer === 'function') {
        try {
          getServer(server)
        } catch (error) {
          report(ctx, error)
        }
      }
    }
    server.handleUpgrade(request, socket, head, (client) => {
      void bridge(ctx, client, settings)
    })
  }

  /** 移除路由注册并关闭连接；幂等。 */
  const dispose = () => {
    if (disposed) return
    disposed = true
    for (const remove of disposers.splice(0)) {
      try {
        remove()
      } catch (error) {
        report(ctx, error)
      }
    }
    const closing = server
    server = undefined
    if (closing !== undefined) {
      for (const client of [...closing.clients]) {
        try {
          client.close(1001, 'plugin disposed')
        } catch {}
      }
      try {
        closing.close()
      } catch (error) {
        report(ctx, error)
      }
    }
  }

  try {
    disposers.push(web.register({ kind: 'exact', path: CONFIG_PATH, handler: configHandler }))
    disposers.push(web.registerUpgrade({ path: WS_PATH, handler: upgradeHandler }))
  } catch (error) {
    dispose()
    throw error
  }

  if (typeof ctx?.on === 'function') ctx.on('dispose', dispose)

  return dispose
}

/**
 * 一条浏览器连接对应一条 MOSS 连接，文本/二进制帧原样来回。
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
    const url = `${UPSTREAM_URL}?model=${encodeURIComponent(settings.model)}`
    upstream = new WebSocket(url, {
      headers: { Authorization: `Bearer ${key}` },
      handshakeTimeout: 15000,
    })
  } catch (error) {
    report(ctx, error)
    try {
      client.close(1011, 'upstream connect failed')
    } catch {}
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
    report(ctx, error)
    closeBoth(1011, 'upstream error')
  })
  upstream.on('close', (code, reason) => {
    try {
      if (client.readyState === WebSocket.OPEN) {
        client.close(code >= 1000 ? code : 1011, reason.toString().slice(0, 120))
      }
    } catch {}
  })

  client.on('message', (data, isBinary) => {
    const frame = { data, binary: isBinary }
    if (open) {
      if (upstream.readyState === WebSocket.OPEN) {
        upstream.send(frame.data, { binary: frame.binary })
      }
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

/**
 * 日志只记错误对象，绝不打印 key 或握手头。
 * @param {object} ctx
 * @param {unknown} error
 */
function report(ctx, error) {
  const value = error instanceof Error ? error : new Error(String(error))
  try {
    ctx?.logger?.warn?.(value)
  } catch {}
}

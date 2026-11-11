/**
 * 宿主侧路由与 MOSS 实时代理（Task 3，修复轮 1）。
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
 *   - 配置路由只在请求确实带 Origin 时校验同源（浏览器同源 GET 不带 Origin）；
 *     升级请求始终校验 Origin（浏览器 WS 一定带 Origin）；
 *   - key 通过 DSH 凭据服务读取，代码与日志里不出现明文。
 *
 * 生命周期：
 *   `registerRoutes()` 返回幂等释放器；cordis 4.x 没有 `dispose` 事件，调用方要
 *   用 `ctx.effect(() => registerRoutes(...))` 让 fiber 卸载时执行它。
 */
import { WebSocket, WebSocketServer } from 'ws'

export const CONFIG_PATH = '/dsh-moss-live/config'
export const WS_PATH = '/dsh-moss-live/ws'

const DEFAULT_MODEL = 'moss-live-1.0'
const KEY_REF = 'MOSS_LIVE_API_KEY'
const UPSTREAM_URL = 'wss://api.mosi.cn/v1/realtime'
/** WebSocket 关闭原因上限（字节），见 RFC 6455 §5.5.1。 */
const MAX_CLOSE_REASON_BYTES = 123

/**
 * 把任意关闭码归一成 ws 可发送的码：1000–1014（排除 1004/1005/1006）或
 * 3000–4999，其余（1006、1005、越界、非整数）一律换成 1011。
 *
 * 上游异常断开时 ws 报告的是 1006/1005 这类保留伪码，直接透传给
 * `WebSocket#close()` 会抛 TypeError，导致浏览器侧永远收不到关闭。
 *
 * @param {unknown} code
 * @returns {number}
 */
export function safeCloseCode(code) {
  if (Number.isInteger(code)) {
    if (code >= 1000 && code <= 1014 && code !== 1004 && code !== 1005 && code !== 1006) return code
    if (code >= 3000 && code <= 4999) return code
  }
  return 1011
}

/**
 * 按 UTF-8 字节数截断关闭原因，且不切开多字节字符。
 * 中文 reason 按字符截断可能超过 123 字节，`close()` 会抛 RangeError。
 *
 * @param {string | Buffer | Uint8Array | null | undefined} reason
 * @returns {string}
 */
export function truncateCloseReason(reason) {
  const text =
    typeof reason === 'string'
      ? reason
      : Buffer.isBuffer(reason)
        ? reason.toString('utf8')
        : reason === undefined || reason === null
          ? ''
          : String(reason)
  if (Buffer.byteLength(text, 'utf8') <= MAX_CLOSE_REASON_BYTES) return text
  let out = ''
  for (const char of text) {
    if (Buffer.byteLength(out + char, 'utf8') > MAX_CLOSE_REASON_BYTES) break
    out += char
  }
  return out
}

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
 * 建一个不监听端口的 WebSocketServer，由宿主 HTTP 服务把升级请求交过来。
 * 单独导出是为了让测试钉住 `ws` 的导入形状：默认导入里没有 WebSocketServer，
 * 必须用命名导入，否则升级时 `new undefined` 抛错、socket 被宿主直接断开。
 * @returns {WebSocketServer}
 */
export function createUpgradeServer() {
  return new WebSocketServer({ noServer: true })
}

/**
 * 注册配置路由与升级路由，返回幂等释放器（移除路由、关闭所有连接）。
 *
 * 释放归调用方：`ctx.effect(() => registerRoutes(ctx, web, settings))`。
 * 重复调用释放器是安全的。
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
    // 浏览器同源 GET/HEAD 不带 Origin（fetch 默认如此）。只有请求确实带
    // Origin 时才做同源校验：带异源 Origin 的跨站请求仍然 403，而真实客户端
    // 的 fetch(CONFIG_PATH) 不会被误杀。
    if (request.headers.origin !== undefined && !sameOrigin(request, protocol)) {
      response.writeHead(403, { 'content-type': 'application/json' })
      response.end(JSON.stringify({ error: 'FORBIDDEN' }))
      return
    }
    response.writeHead(200, { 'content-type': 'application/json', 'cache-control': 'no-store' })
    response.end(JSON.stringify(settings))
  }

  // 升级请求保持严格：浏览器 WebSocket 一定带 Origin，缺 Origin 视为不可信。
  const upgradeHandler = (request, socket, head) => {
    if (!sameOrigin(request, protocol)) {
      socket.write('HTTP/1.1 403 Forbidden\r\nConnection: close\r\n\r\n')
      socket.destroy()
      return
    }
    if (server === undefined) {
      server = createUpgradeServer()
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
          client.close(safeCloseCode(1001), truncateCloseReason('plugin disposed'))
        } catch (error) {
          report(ctx, error)
        }
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

  return dispose
}

/**
 * 一条浏览器连接对应一条 MOSS 连接，文本/二进制帧原样来回。
 * @param {import('@deepseek-ai/cordis').Context} ctx
 * @param {WebSocket} client
 * @param {{ model: string, voice: string, instructions: string }} settings
 */
async function bridge(ctx, client, settings) {
  /** 上游握手完成前先攒着客户端的帧（key 读取期间到达的也一起攒）。 */
  const pending = []
  /** @type {WebSocket | undefined} */
  let upstream
  let open = false
  /** 客户端在上游连上之前就关闭了。 */
  let gone = false

  const closeClient = (code, reason) => {
    try {
      if (client.readyState === WebSocket.OPEN) {
        client.close(safeCloseCode(code), truncateCloseReason(reason))
      }
    } catch (error) {
      report(ctx, error)
    }
  }

  /** 关闭上游；已不在 OPEN 状态就 terminate，避免关闭码校验再抛。 */
  const closeUpstream = (code, reason) => {
    try {
      if (upstream === undefined) return
      if (upstream.readyState === WebSocket.OPEN) {
        upstream.close(safeCloseCode(code), truncateCloseReason(reason))
      } else {
        upstream.terminate()
      }
    } catch (error) {
      report(ctx, error)
    }
  }

  // 先挂客户端监听：await resolveKey 期间到达的帧先排队，不能丢。
  client.on('message', (data, isBinary) => {
    const frame = { data, binary: isBinary }
    if (open) {
      if (upstream !== undefined && upstream.readyState === WebSocket.OPEN) {
        upstream.send(frame.data, { binary: frame.binary })
      }
      return
    }
    pending.push(frame)
  })
  client.on('close', () => {
    gone = true
    pending.length = 0
    closeUpstream(1000, 'client closed')
  })
  client.on('error', () => {
    gone = true
    try {
      upstream?.terminate()
    } catch (error) {
      report(ctx, error)
    }
  })

  let key
  try {
    key = await resolveKey(ctx)
  } catch (error) {
    report(ctx, error)
    closeClient(1011, 'upstream connect failed')
    return
  }
  if (key === undefined) {
    closeClient(1011, 'MOSS_LIVE_API_KEY 未配置')
    return
  }
  // key 读取期间客户端已经走了，就不必再连上游。
  if (gone) return

  try {
    const url = `${UPSTREAM_URL}?model=${encodeURIComponent(settings.model)}`
    upstream = new WebSocket(url, {
      headers: { Authorization: `Bearer ${key}` },
      handshakeTimeout: 15000,
    })
  } catch (error) {
    report(ctx, error)
    closeClient(1011, 'upstream connect failed')
    return
  }

  upstream.on('open', () => {
    if (gone) {
      pending.length = 0
      try {
        upstream.terminate()
      } catch (error) {
        report(ctx, error)
      }
      return
    }
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
    closeClient(1011, 'upstream error')
    closeUpstream(1011, 'upstream error')
  })
  upstream.on('close', (code, reason) => {
    // 1006/1005 等伪码会被 safeCloseCode 换成 1011；reason 按字节截断。
    closeClient(code, reason)
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

/**
 * dsh-moss-live —— 把 MOSS-Live 1.0 的全双工实时语音接到 DSH Web GUI 上。
 *
 * 为什么要有宿主这一半：
 *   浏览器的 WebSocket 不能自定义 Authorization 请求头，而 MOSS 要求 key 只放
 *   在握手头里。所以由宿主进程建立到 wss://api.mosi.cn/v1/realtime 的连接，
 *   浏览器连本机的 /dsh-moss-live/ws，宿主做透明转发。key 永不出服务端。
 *
 * 路由与转发实现都在 ./host.js；本文件只做插件接线：
 *   - 声明对 webServer 的依赖；
 *   - 用 ctx.effect 持有路由与连接的释放函数（cordis 4.x 没有 'dispose' 事件）。
 */
import { CONFIG_PATH, WS_PATH, registerRoutes, resolveKey, sameOrigin } from './host.js'

export const name = 'dsh-moss-live'

/** 挂载在 Web 组合里，必须等宿主 HTTP 服务就绪。 */
export const inject = ['webServer']

export { CONFIG_PATH, WS_PATH, registerRoutes, resolveKey, sameOrigin }

/**
 * @param {import('@deepseek-ai/cordis').Context} ctx
 * @param {{ model?: string, voice?: string, instructions?: string }} [config]
 */
export function apply(ctx, config = {}) {
  const web = ctx.webServer
  if (!web || typeof web.registerUpgrade !== 'function') {
    ctx.logger?.warn?.('dsh-moss-live: 没有可用的 webServer，插件不挂载')
    return
  }
  ctx.effect(() => registerRoutes(ctx, web, config), 'dsh-moss-live: routes and realtime proxy')
}

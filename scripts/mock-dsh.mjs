/** Local acceptance fixture; compose explicitly into the isolated dev profile only. */
import { WebSocketServer } from 'ws'
import { LlmAdapter } from '@deepseek-ai/dsh-llm'

export const inject = ['llm', 'webServer', 'connection']
class FixtureWorker extends LlmAdapter {
  async listModels(provider) { return [{ provider, id: 'fixture-worker', name: 'Local fixture worker', inputModalities: ['text'] }] }
  async *stream(options) {
    await new Promise(resolve => setTimeout(resolve, 800))
    if (options.signal?.aborted) return
    const text = '本地验收子任务已完成。执行记录保存在原生 DSH 子会话。'
    yield { type: 'block-start', index: 0, blockType: 'text' }
    yield { type: 'text-delta', index: 0, text }
    yield { type: 'block-end', index: 0, block: { type: 'text', text } }
    yield { type: 'finish', reason: { kind: 'stop' } }
  }
}
export async function apply(ctx) {
  ctx.llm.registerAdapter(['fixture-ordinary'], new FixtureWorker())
  const server = new WebSocketServer({ host: '127.0.0.1', port: Number(process.env.MOSS_FIXTURE_PORT ?? 59434), maxPayload: 128 * 1024 })
  const facts = { connections: 0, configured: 0, audio: 0, earlyAudio: 0, delegations: 0, completed: 0, played: 0, models: [] }
  server.on('connection', (socket, request) => {
    facts.connections++
    facts.models.push(new URL(request.url, 'http://localhost').searchParams.get('model'))
    let configured = false, media = false, began = false
    const timers = new Set()
    const send = (action, data) => { if (socket.readyState === 1) socket.send(JSON.stringify({ action, data })) }
    socket.on('error', () => {})
    socket.on('close', () => { for (const timer of timers) clearTimeout(timer) })
    socket.on('message', (bytes, binary) => {
      if (binary) { facts.audio++; if (!configured || !media) facts.earlyAudio++; return }
      const event = JSON.parse(bytes.toString())
      if (event.action === 'attach_session') send('session_attached', { session_id: `fixture-${facts.connections}`, delegation: 'client' })
      if (event.action === 'session.update') { configured = true; facts.configured++; send('session.updated', { error: '', tools: [] }) }
      if (event.action === 'media.configure') { media = true; send('media.configured', { error: '', input_audio: { format: 'pcm16', sample_rate: 16000, channels: 1 }, output_audio: { format: 'pcm16', sample_rate: 48000, channels: 1 } }) }
      if (event.action.startsWith('playback.')) facts.played++
      if (event.action === 'session.commentary.append') facts.completed++
      if (event.action === 'mic_state' && event.enabled && !began) {
        began = true
        const timer = setTimeout(() => {
          const meta = { run_id: 'reply-1', turn_id: 'opaque-reply-77' }
          send('input.transcript.done', { turn: 'user-1', text: '明天九点，帮我检查两个任务。' })
          send('input.transcript.revised', { turn: 'user-1', text: '明天十点，帮我检查两个任务。' })
          send('response.audio.started', meta)
          send('output.transcript.done', { ...meta, text: '好，两个任务交给子 Agent。我们可以继续聊。' })
          send('response.audio.context', { ...meta, chunk_id: 'chunk-1' })
          socket.send(Buffer.alloc(9600))
          send('response.audio.done', meta)
          send('response.ended', { ...meta, status: 'completed' })
          for (const [id, objective] of [['task-a', '检查明日安排'], ['task-b', '检查移动布局']]) {
            facts.delegations++
            send('session.delegation.created', { id, objective, context: [{ role: 'user', content: '分别处理两个任务，并保留执行记录。' }], owner_turn_id: 'opaque-owner', purpose: 'task' })
          }
        }, 250)
        timers.add(timer)
      }
    })
  })
  await new Promise((resolve, reject) => { server.once('listening', resolve); server.once('error', reject) })
  ctx.effect(() => async () => {
    for (const socket of server.clients) socket.terminate()
    await new Promise(resolve => server.close(resolve))
  }, 'moss.acceptance-fixture')
  ctx.webServer.register({ kind: 'exact', path: '/moss-local-fixture', handler(request, response) {
    const rejection = ctx.connection.requestRejection(request)
    response.writeHead(rejection ?? 200, { 'content-type': 'application/json', 'cache-control': 'no-store' })
    response.end(JSON.stringify(rejection ? {} : { ...facts, active: server.clients.size }))
  } })
}

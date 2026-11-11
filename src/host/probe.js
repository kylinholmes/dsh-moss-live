import { EventEmitter } from 'node:events'
import { MossSession } from './moss-session.js'

/** Exercise the same handshake as a call, with no native Session or upstream mic. */
export async function probeConnection(connection, { signal } = {}) {
  signal?.throwIfAborted()
  const peer = Object.assign(new EventEmitter(), { readyState: 1, bufferedAmount: 0, send() {}, close() { this.readyState = 3; this.emit('close') } })
  const session = new MossSession({ peer, connection, probe: true,
    prompt: { persona: { name: 'MOSS', prompt: 'Connection compatibility check.' }, instructions: 'Do not speak or start tasks.', tools: [] },
  })
  const abort = () => session.stop()
  signal?.addEventListener('abort', abort, { once: true })
  try { await session.start(); return { ...session.media } }
  finally { signal?.removeEventListener('abort', abort); session.stop() }
}

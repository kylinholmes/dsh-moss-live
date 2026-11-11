// src/host/agent-loop.js
import AgentLoop from "@deepseek-ai/dsh-agent-loop";

// src/host/native-agent.js
import { createScope } from "@deepseek-ai/dsh-scope";
import { agentEvents } from "@deepseek-ai/dsh-agent";
import { interruptedTurnClosers, SessionPreparation } from "@deepseek-ai/dsh-session";
import { createUserMessage, createAssistantMessage, createSystemMessage, AssistantStreamAccumulator } from "@deepseek-ai/dsh-llm";

// src/shared/models.js
function voiceRoute(route) {
  if (!route || typeof route.provider !== "string" || !route.provider.trim() || typeof route.model !== "string" || !route.model.trim()) {
    const message = "\u672A\u914D\u7F6E\uFF1A\u8BF7\u4ECE DSH \u5DF2\u914D\u7F6E\u7684\u6A21\u578B\u4E2D\u9009\u62E9\u8BED\u97F3\u6A21\u578B\u3002";
    throw Object.assign(new Error(message), { code: "VOICE_NOT_CONFIGURED", publicMessage: message });
  }
  return Object.freeze({ provider: route.provider, model: route.model });
}

// src/host/native-agent.js
var isMossSession = (id) => typeof id === "string" && id.startsWith("moss-live-");
var MossAgent = class {
  constructor(runtimeCtx, session, route) {
    this.route = voiceRoute(route);
    this.id = session.id;
    this.session = session;
    this.scope = createScope(runtimeCtx, this);
    this.ctx = this.scope.ctx;
    this.status = "idle";
    this.dispatch = agentEvents(runtimeCtx, this);
    this.abort = new AbortController();
    this.closed = false;
    this.epoch = null;
    this.open = null;
    this.counter = 0;
    this.inputs = /* @__PURE__ */ new Map();
    this.replies = /* @__PURE__ */ new Set();
    for (const event of session.snapshotEvents()) {
      if (event.type === "turn/start") this.counter = Math.max(this.counter, event.data.turn);
      if (event.type === "user/message" && event.data.source.voice) {
        const { epoch, turn } = event.data.source.voice;
        this.inputs.set(JSON.stringify([epoch, turn]), event);
      }
      if (event.type === "assistant/message") {
        const meta = event.data.message.source.replayState?.response?.moss;
        if (meta) this.replies.add(JSON.stringify([meta.epoch, meta.run_id, meta.turn_id]));
      }
    }
    this.model = {
      current: () => ({ ...this.route }),
      select: () => {
        throw new Error("MOSS \u8BED\u97F3\u4F1A\u8BDD\u4F7F\u7528\u56FA\u5B9A\u6A21\u578B\uFF1B\u8BF7\u5728\u63D2\u4EF6\u8BBE\u7F6E\u4E2D\u9009\u62E9\u8BED\u97F3\u6A21\u578B\u3002");
      }
    };
    const unsupported = () => {
      throw new Error("MOSS \u5F53\u524D\u7AEF\u70B9\u4E0D\u652F\u6301\u666E\u901A\u6587\u5B57\u8F93\u5165\uFF1B\u8BF7\u4F7F\u7528\u8BED\u97F3\u3002");
    };
    this.inbox = {
      nextTurn: [],
      nextStep: [],
      clear() {
      },
      append: (_target, message) => this.acceptContext(message),
      prepend: (_target, message) => this.acceptContext(message),
      replace: unsupported,
      remove: () => false,
      splice: unsupported
    };
    this.voice = {
      configure: (data) => this.configure(data),
      user: (data) => this.recordUser(data),
      reply: (data) => this.recordReply(data),
      end: () => this.endTurn({ kind: "completed" })
    };
  }
  assertLive() {
    if (this.closed) throw new Error("MOSS Agent is disposed");
    this.ctx.fiber.assertActive();
  }
  configure({ epoch, prompt, route }) {
    this.assertLive();
    if (typeof epoch !== "string" || !epoch) throw new TypeError("MOSS connection epoch is required");
    const selected = voiceRoute(route);
    this.endTurn({ kind: "completed" });
    this.epoch = epoch;
    this.route = selected;
    this.session.append("model/selection", this.route);
    this.ensureTurn();
    this.session.append("system/message", {
      turn: this.open.turn,
      step: 1,
      message: createSystemMessage(prompt)
    }, { surfaceOp: "append" });
  }
  get options() {
    return this.route;
  }
  ensureTurn() {
    this.assertLive();
    if (!this.epoch) throw new Error("MOSS must be configured before recording speech");
    if (this.open) return;
    const turn = ++this.counter;
    this.session.append("turn/start", { turn });
    this.session.append("step/start", { turn, step: 1 });
    this.open = { turn };
  }
  recordUser({ turn, text }) {
    this.assertLive();
    if (!this.epoch || typeof text !== "string" || typeof turn !== "string" || !turn) {
      throw new TypeError("A configured MOSS transcript needs text and an input turn id");
    }
    const key = JSON.stringify([this.epoch, turn]);
    const previous = this.inputs.get(key);
    if (previous?.data.content[0]?.text === text) return previous;
    const message = previous ? { ...previous.data, content: [{ type: "text", text }] } : createUserMessage({ content: [{ type: "text", text }], source: { kind: "user", voice: { epoch: this.epoch, turn } } });
    const event = this.session.append("user/message", message, previous ? { surfaceOp: { op: "replace", startSeq: previous.seq, endSeq: previous.seq }, sourceEventSeqs: [previous.seq] } : { surfaceOp: "append" });
    this.inputs.set(key, event);
    return event;
  }
  recordReply({ run_id, turn_id, text, status }) {
    this.assertLive();
    if (!this.epoch || !run_id || !turn_id || typeof text !== "string") throw new TypeError("MOSS reply identity is required");
    const key = JSON.stringify([this.epoch, run_id, turn_id]);
    if (this.replies.has(key)) return;
    this.ensureTurn();
    const accumulator = new AssistantStreamAccumulator();
    const chunks = text ? [
      { type: "block-start", index: 0, blockType: "text" },
      { type: "text-delta", index: 0, text },
      { type: "block-end", index: 0, block: { type: "text", text } },
      { type: "finish", reason: { kind: "stop" } }
    ] : [{ type: "finish", reason: { kind: "stop" } }];
    for (const chunk of chunks) accumulator.push({ time: Date.now(), chunk });
    if (text) {
      this.session.append("assistant/message", {
        turn: this.open.turn,
        step: 1,
        message: createAssistantMessage({
          content: [{ type: "text", text }],
          source: { ...this.route, replayState: { response: { moss: { epoch: this.epoch, run_id, turn_id } } } }
        }),
        stream: [...accumulator.snapshot()],
        ...status === "aborted" ? { interrupted: true } : {}
      }, { surfaceOp: "append" });
    } else {
      this.session.append("assistant/attempt", { turn: this.open.turn, step: 1, stream: [...accumulator.snapshot()] });
    }
    this.replies.add(key);
    this.endTurn(status === "failed" ? { kind: "error", error: { code: "MOSS_RESPONSE_FAILED", message: "MOSS \u8BED\u97F3\u56DE\u590D\u5931\u8D25\u3002" } } : { kind: "completed" });
  }
  endTurn(reason) {
    if (!this.open) return;
    const { turn } = this.open;
    this.session.append("step/end", { turn, step: 1 });
    this.session.append("turn/end", { turn, reason });
    this.open = null;
  }
  acceptContext(message) {
    this.assertLive();
    if (message.source.kind === "user") throw new Error("MOSS \u7AEF\u70B9\u6682\u4E0D\u652F\u6301\u6587\u5B57\u53D1\u9001\u3002");
    this.session.append("user/message", message, { surfaceOp: "append" });
  }
  send(message) {
    this.acceptContext(message);
  }
  followup(message) {
    this.acceptContext(message);
  }
  steer(message) {
    this.acceptContext(message);
  }
  inject(message) {
    this.acceptContext(message);
  }
  whenIdle() {
    return Promise.resolve();
  }
  runMaintenance(task) {
    this.assertLive();
    return Promise.resolve(task(this.abort.signal));
  }
  cancel(cause) {
    this.onStop?.(cause);
    this.endTurn({ kind: "aborted", reason: cause });
  }
};
async function publish(runtimeCtx, ownerCtx, session, handle, options, source) {
  let agent, detachSession, detachAgent, disposing;
  let finished = false;
  const ready = Promise.withResolvers();
  const controller = new AbortController();
  const abort = () => controller.abort(new Error("MOSS Agent owner disposed during initialization"));
  const signal = options.signal ? AbortSignal.any([options.signal, controller.signal]) : controller.signal;
  const dispose = () => disposing ??= (async () => {
    abort();
    await ready.promise;
    const failures = [];
    for (const operation of [
      async () => {
        if (finished) agent.cancel({ kind: "disposed" });
        if (agent) {
          agent.closed = true;
          agent.abort.abort();
        }
      },
      () => agent?.scope.dispose(),
      () => handle.close(),
      () => detachAgent?.(),
      () => detachSession?.()
    ]) {
      try {
        await operation();
      } catch (error) {
        failures.push(error);
      }
    }
    if (failures.length) throw new AggregateError(failures, "MOSS Agent cleanup failed");
  })();
  const releaseOwner = ownerCtx.effect(() => () => dispose(), `moss.agent(${session.id})`);
  try {
    signal.throwIfAborted();
    ownerCtx.fiber.assertActive();
    runtimeCtx.fiber.assertActive();
    agent = new MossAgent(runtimeCtx, session, options.route);
    detachSession = agent.ctx.sessions.enter(session);
    agent.ctx.sessions.announce(session);
    if (source === "startup") session.append("model/selection", agent.route);
    const commit = await options.setup?.(agent.ctx, agent);
    signal.throwIfAborted();
    commit?.commit();
    detachAgent = runtimeCtx.agents.enter(agent, options.parentAgent);
    await runtimeCtx.agents.announce(agent, source, signal);
    signal.throwIfAborted();
    finished = true;
    ready.resolve();
    return { agent, dispose: async () => {
      try {
        await dispose();
      } finally {
        await releaseOwner();
      }
    } };
  } catch (error) {
    ready.resolve();
    await dispose().catch((cleanup) => {
      throw new AggregateError([error, cleanup], "MOSS Agent initialization failed");
    });
    throw error;
  }
}
async function createMossAgent(runtimeCtx, ownerCtx, options) {
  if (!isMossSession(options.sessionId)) throw new Error("Invalid MOSS session namespace");
  ownerCtx.fiber.assertActive();
  const preparation = SessionPreparation.create(runtimeCtx.sessions.prepare(options.sessionId, { meta: options.meta }));
  const { session } = preparation;
  let handle;
  try {
    const persistence = runtimeCtx.get("sessionPersistence");
    if (!persistence) throw new Error("MOSS needs DSH SessionPersistence");
    handle = await persistence.create(session.header, { signal: options.signal });
    return await publish(runtimeCtx, ownerCtx, session, handle, options, "startup");
  } catch (error) {
    await handle?.close();
    throw error;
  } finally {
    preparation[Symbol.dispose]();
  }
}
async function resumeMossAgent(runtimeCtx, ownerCtx, options) {
  const id = options.resumeSessionId;
  if (!isMossSession(id)) throw new Error("Invalid MOSS session namespace");
  ownerCtx.fiber.assertActive();
  const persistence = runtimeCtx.get("sessionPersistence");
  if (!persistence) throw new Error("MOSS needs DSH SessionPersistence");
  const handle = await persistence.open(id, "write", { signal: options.signal });
  let preparation;
  try {
    const read = await handle.read(0, void 0, { signal: options.signal });
    const closers = interruptedTurnClosers(read.events);
    if (closers.length) await handle.append(closers);
    preparation = SessionPreparation.create(runtimeCtx.sessions.prepare(id, {
      seed: [...read.events, ...closers],
      meta: { ...handle.header },
      inheritedEventCount: handle.inheritedEventCount,
      eventState: read.eventState
    }));
    const suffix = preparation.session.snapshotEvents(read.events.length + closers.length);
    if (suffix.length) await handle.append(suffix);
    const recorded = [...read.events].reverse().find((event) => event.type === "model/selection")?.data;
    return await publish(runtimeCtx, ownerCtx, preparation.session, handle, { ...options, route: options.route ?? recorded }, "resume");
  } catch (error) {
    await handle.close();
    throw error;
  } finally {
    preparation?.[Symbol.dispose]();
  }
}

// src/host/agent-loop.js
var MossAgentLoop = class extends AgentLoop {
  constructor(ctx, config) {
    super(ctx, config);
    this.mossRuntime = { ctx, handles: /* @__PURE__ */ new Set() };
    ctx.effect(() => async () => {
      const results = await Promise.allSettled([...this.mossRuntime.handles].map((handle) => handle.dispose()));
      const errors = results.filter((result) => result.status === "rejected").map((result) => result.reason);
      if (errors.length) throw new AggregateError(errors, "MOSS driver shutdown failed");
    }, "moss.loop.transactions");
  }
  async own(pending) {
    const handle = await pending;
    try {
      this.mossRuntime.ctx.fiber.assertActive();
    } catch (error) {
      await handle.dispose();
      throw error;
    }
    this.mossRuntime.handles.add(handle);
    return {
      agent: handle.agent,
      dispose: async () => {
        try {
          await handle.dispose();
        } finally {
          this.mossRuntime.handles.delete(handle);
        }
      }
    };
  }
  createAgent(ownerCtx, options) {
    if (!isMossSession(options.sessionId)) return super.createAgent(ownerCtx, options);
    const route = options.route ?? this.mossRuntime.ctx.get("mossLive")?.selection();
    if (!route) throw new Error("MOSS is not enabled; create a voice session from its entry.");
    return this.own(createMossAgent(this.mossRuntime.ctx, ownerCtx, { ...options, route }));
  }
  resume(ownerCtx, options) {
    if (!isMossSession(options.resumeSessionId)) return super.resume(ownerCtx, options);
    return this.own(resumeMossAgent(this.mossRuntime.ctx, ownerCtx, options));
  }
};
export {
  MossAgentLoop as default
};

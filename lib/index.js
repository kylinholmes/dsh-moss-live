// src/host/runtime.js
import { randomUUID as randomUUID2 } from "node:crypto";
import { Service } from "@deepseek-ai/cordis";

// src/config.js
import z from "@deepseek-ai/schemastery";
var MAX_AVATAR_BYTES = 256 * 1024;
var Image = z.string().min(30).max(Math.floor(MAX_AVATAR_BYTES / 3) * 4 + 22).pattern(/^data:image\/(?:png|jpeg|webp);base64,(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/);
var appearanceFields = {
  color: z.string().pattern(/^#[0-9a-f]{6}$/i).default("#58a9ef"),
  particles: z.number().min(0).max(128).step(1).default(32),
  diffusion: z.number().min(0).max(100).default(35)
};
var Appearance = z.union([
  z.object({ ...appearanceFields, kind: z.const("orb").default("orb"), image: z.union([z.const(""), Image]).default("") }),
  z.object({ ...appearanceFields, kind: z.const("image").required(), image: Image.required() })
]);
var VoiceModel = z.union([
  z.object({ provider: z.const("").default(""), model: z.const("").default("") }),
  z.object({ provider: z.string().pattern(/\S/).required(), model: z.string().pattern(/\S/).required() })
]);
var Config = z.object({
  appearance: Appearance.default({}).volatile(),
  voiceModel: VoiceModel.default({}).volatile(),
  delegation: z.object({
    agentPreset: z.string().default(""),
    provider: z.const("spawn").default("spawn"),
    model: VoiceModel.default({})
  }).default({}).volatile()
});
function publicSettings(config) {
  const appearance = config.appearance.get();
  const route = config.voiceModel.get();
  const delegation = config.delegation.get();
  return {
    appearance: { kind: appearance.kind, color: appearance.color, particles: appearance.particles, diffusion: appearance.diffusion, image: appearance.image },
    voiceModel: { provider: route.provider, model: route.model },
    delegation: { agentPreset: delegation.agentPreset, provider: delegation.provider, model: delegation.model }
  };
}

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

// src/host/routes.js
import { WebSocketServer } from "ws";
var CONFIG_PATH = "/dsh-moss-live/config";
var WS_PATH = "/dsh-moss-live/ws";
var SESSIONS_PATH = "/dsh-moss-live/sessions";
var TEST_PATH = "/dsh-moss-live/test";
var MAX_BODY = 8192;
var MAX_CLIENTS = 8;
function json(response, status, body) {
  response.writeHead(status, { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" });
  response.end(JSON.stringify(body));
}
async function readBody(request) {
  if (Number(request.headers["content-length"]) > MAX_BODY) throw new Error("BODY_TOO_LARGE");
  const chunks = [];
  let bytes = 0;
  for await (const chunk of request) {
    bytes += chunk.length;
    if (bytes > MAX_BODY) throw new Error("BODY_TOO_LARGE");
    chunks.push(chunk);
  }
  return JSON.parse(Buffer.concat(chunks).toString("utf8"));
}
function registerRoutes(ctx, web, runtime) {
  const server = new WebSocketServer({ noServer: true, maxPayload: 128 * 1024, perMessageDeflate: false });
  let disposed = false;
  const stops = [];
  const reject = (request) => ctx.connection?.requestRejection(request) ?? (ctx.connection ? void 0 : 401);
  const http = (path, method, handler) => stops.push(web.register({ kind: "exact", path, handler: async (request, response) => {
    const status = reject(request);
    if (status) return json(response, status, { error: status === 403 ? "FORBIDDEN" : "UNAUTHENTICATED" });
    if (disposed) return json(response, 503, { error: "UNAVAILABLE" });
    if (request.method !== method) return json(response, 405, { error: "METHOD_NOT_ALLOWED" });
    return handler(request, response);
  } }));
  http(CONFIG_PATH, "GET", async (_request, response) => json(response, 200, await runtime.settings()));
  http(TEST_PATH, "POST", async (request, response) => {
    const abort = new AbortController();
    const close = () => {
      if (!response.writableEnded) abort.abort();
    };
    response.once?.("close", close);
    try {
      const route = await readBody(request);
      if (!route || Object.keys(route).some((key) => !["provider", "model"].includes(key)) || typeof route.provider !== "string" || typeof route.model !== "string") throw new Error("Invalid route");
      const result = await runtime.testModel(route, abort.signal);
      return json(response, 200, { ok: true, ...result });
    } catch (error) {
      return json(response, error.message === "BODY_TOO_LARGE" ? 413 : 400, {
        ok: false,
        error: error.code ?? "VOICE_CONNECTION_FAILED",
        message: error.publicMessage ?? "\u8FDE\u63A5\u6D4B\u8BD5\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u540E\u91CD\u8BD5\u3002"
      });
    } finally {
      response.off?.("close", close);
    }
  });
  http(SESSIONS_PATH, "POST", async (request, response) => {
    try {
      const data = await readBody(request);
      if (Object.keys(data).some((key) => key !== "cwd") || typeof data.cwd !== "string" || !data.cwd) {
        return json(response, 400, { error: "INVALID_CWD" });
      }
      return json(response, 201, await runtime.create(data.cwd));
    } catch (error) {
      return json(response, error.message === "BODY_TOO_LARGE" ? 413 : 400, {
        error: error.code ?? "CREATE_FAILED",
        message: error.publicMessage ?? "\u65E0\u6CD5\u521B\u5EFA\u8BED\u97F3\u4F1A\u8BDD\uFF0C\u8BF7\u68C0\u67E5\u6A21\u578B\u548C\u5DE5\u4F5C\u76EE\u5F55\u8BBE\u7F6E\u3002"
      });
    }
  });
  stops.push(web.registerUpgrade({ path: WS_PATH, handler: (request, socket, head) => {
    const status = reject(request);
    if (status) return socket.end(`HTTP/1.1 ${status} Rejected\r
Connection: close\r
\r
`);
    if (disposed || server.clients.size >= MAX_CLIENTS) return socket.end("HTTP/1.1 503 Unavailable\r\nConnection: close\r\n\r\n");
    const sessionId = new URL(request.url, "http://localhost").searchParams.get("sessionId");
    if (!/^moss-live-[A-Za-z0-9-]{1,100}$/.test(sessionId ?? "")) return socket.end("HTTP/1.1 400 Invalid Session\r\nConnection: close\r\n\r\n");
    server.handleUpgrade(request, socket, head, (peer) => {
      peer.on("error", () => {
      });
      Promise.resolve(runtime.attach(peer, sessionId)).catch((error) => {
        if (peer.readyState === 1) {
          peer.send(JSON.stringify({ action: "moss.error", data: { code: error.code ?? "VOICE_CONNECTION_FAILED", message: error.publicMessage ?? "\u8BED\u97F3\u8FDE\u63A5\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5 DSH \u6A21\u578B\u548C\u51ED\u636E\u8BBE\u7F6E\u3002" } }));
          peer.close(1011, "Voice connection failed");
        }
      });
    });
  } }));
  return () => {
    if (disposed) return;
    disposed = true;
    for (const stop of stops.reverse()) stop();
    for (const peer of server.clients) peer.terminate();
    server.close();
  };
}

// src/host/moss-session.js
import { randomUUID } from "node:crypto";
import { WebSocket } from "ws";
import { attributionHeaders } from "@deepseek-ai/dsh-llm";
var LIMIT = 512 * 1024;
var identity = (data) => typeof data?.run_id === "string" && typeof data?.turn_id === "string" && data.run_id && data.turn_id ? JSON.stringify([data.run_id, data.turn_id]) : null;
var visible = /^(input\.(speech\.|transcript\.)|output\.transcript\.|response\.(audio\.|ended$|interrupted$))/;
var MossSession = class {
  constructor(options) {
    Object.assign(this, options);
    this.epoch = randomUUID();
    this.pending = /* @__PURE__ */ new Map();
    this.finished = /* @__PURE__ */ new Set();
    this.inputs = /* @__PURE__ */ new Map();
    this.acks = /* @__PURE__ */ new Set();
    this.allowedChunks = /* @__PURE__ */ new Set();
    this.inputCounter = 0;
    this.ready = false;
    this.stopped = false;
    this.started = Promise.withResolvers();
    this.started.promise.catch(() => {
    });
  }
  start() {
    if (this.socket) return this.started.promise;
    const url = new URL(this.connection.baseURL);
    url.searchParams.set("model", this.connection.model);
    this.socket = new WebSocket(url, {
      headers: { ...attributionHeaders(), Authorization: `Bearer ${this.connection.apiKey}` },
      followRedirects: false,
      handshakeTimeout: 1e4,
      maxPayload: LIMIT,
      perMessageDeflate: false
    });
    this.connection = { provider: this.connection.provider, model: this.connection.model };
    this.timer = setTimeout(() => this.fail(this.opened ? "\u4E0D\u517C\u5BB9\uFF1A\u6240\u9009 API \u672A\u786E\u8BA4\u5F53\u524D\u5B9E\u65F6\u8BED\u97F3\u534F\u8BAE\u3002" : "\u8BED\u97F3\u8FDE\u63A5\u8D85\u65F6\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u3002", this.opened ? "VOICE_INCOMPATIBLE" : "VOICE_CONNECTION_FAILED"), 15e3);
    this.timer.unref?.();
    this.socket.on("open", () => {
      this.opened = true;
      this.send({ action: "attach_session", delegation: { type: "client" } });
    });
    this.socket.on("unexpected-response", (_request, response) => {
      response.resume();
      if ([401, 403].includes(response.statusCode)) this.fail("\u672A\u914D\u7F6E\uFF1A\u6240\u9009 API \u7684\u51ED\u636E\u65E0\u6548\u6216\u672A\u83B7\u6388\u6743\uFF0C\u8BF7\u5728 DSH \u6A21\u578B\u8BBE\u7F6E\u4E2D\u68C0\u67E5\u3002", "VOICE_NOT_CONFIGURED");
      else this.fail("\u4E0D\u517C\u5BB9\uFF1A\u6240\u9009 API \u4E0D\u652F\u6301\u5F53\u524D\u5B9E\u65F6\u8BED\u97F3\u534F\u8BAE\u3002", "VOICE_INCOMPATIBLE");
    });
    this.socket.on("message", (bytes, binary) => {
      if (this.stopped) return;
      try {
        this.receive(bytes, binary);
      } catch {
        this.fail("\u4E0D\u517C\u5BB9\uFF1A\u6240\u9009 API \u8FD4\u56DE\u4E86\u65E0\u6CD5\u8BC6\u522B\u7684\u5B9E\u65F6\u8BED\u97F3\u6570\u636E\u3002", "VOICE_INCOMPATIBLE");
      }
    });
    this.socket.on("error", () => this.fail("\u65E0\u6CD5\u8FDE\u63A5 MOSS\uFF0C\u8BF7\u68C0\u67E5\u6A21\u578B\u5730\u5740\u548C DSH \u51ED\u636E\u3002"));
    this.socket.on("close", () => {
      if (!this.stopped) this.fail(this.opened && !this.ready ? "\u4E0D\u517C\u5BB9\uFF1A\u6240\u9009 API \u5728\u5B8C\u6210\u8BED\u97F3\u534F\u8BAE\u534F\u5546\u524D\u5173\u95ED\u4E86\u8FDE\u63A5\u3002" : "MOSS \u8FDE\u63A5\u5DF2\u65AD\u5F00\uFF0C\u8BF7\u91CD\u65B0\u5F00\u59CB\u8BED\u97F3\u3002", this.opened && !this.ready ? "VOICE_INCOMPATIBLE" : "VOICE_CONNECTION_FAILED");
    });
    this.clientMessage = (bytes, binary) => {
      if (this.stopped) return;
      try {
        this.fromBrowser(bytes, binary);
      } catch {
        this.fail("\u8BED\u97F3\u63A7\u5236\u6D88\u606F\u65E0\u6548\uFF0C\u8FDE\u63A5\u5DF2\u505C\u6B62\u3002");
      }
    };
    this.clientClose = () => this.stop();
    this.peer.on("message", this.clientMessage);
    this.peer.on("close", this.clientClose);
    if (this.peer.readyState !== WebSocket.OPEN) this.stop();
    return this.started.promise;
  }
  send(data) {
    if (this.stopped || this.socket.readyState !== WebSocket.OPEN) return false;
    if (this.socket.bufferedAmount > LIMIT) {
      this.fail("MOSS \u7F51\u7EDC\u53D1\u9001\u79EF\u538B\uFF0C\u8BF7\u91CD\u65B0\u5F00\u59CB\u8BED\u97F3\u3002");
      return false;
    }
    this.socket.send(Buffer.isBuffer(data) ? data : JSON.stringify(data));
    return true;
  }
  emit(data, binary = false) {
    if (this.peer.readyState !== WebSocket.OPEN) return;
    if (this.peer.bufferedAmount > LIMIT) {
      this.fail("\u6D4F\u89C8\u5668\u97F3\u9891\u63A5\u6536\u79EF\u538B\uFF0C\u8BF7\u91CD\u65B0\u5F00\u59CB\u8BED\u97F3\u3002");
      return;
    }
    this.peer.send(binary ? data : JSON.stringify(data), { binary });
  }
  fromBrowser(bytes, binary) {
    if (this.probe) return;
    if (!this.ready) return;
    if (binary) {
      if (!bytes.length || bytes.length > 32e3 || bytes.length % 2) throw new Error("Invalid PCM");
      return this.send(bytes);
    }
    if (bytes.length > 4096) throw new Error("Large control");
    const event = JSON.parse(bytes.toString());
    if (event.action === "mic_state" && typeof event.enabled === "boolean") return this.send({ action: "mic_state", enabled: event.enabled });
    if (!["playback.chunk.completed", "playback.completed", "playback.stopped"].includes(event.action)) throw new Error("Forbidden control");
    const key = identity(event);
    if (!key || !(this.pending.has(key) || this.finished.has(key))) throw new Error("Unknown playback");
    const ack = { action: event.action, run_id: event.run_id, turn_id: event.turn_id };
    if (event.action === "playback.chunk.completed") {
      const chunk = JSON.stringify([event.run_id, event.turn_id, event.chunk_id]);
      if (!this.allowedChunks.delete(chunk)) return;
      ack.chunk_id = event.chunk_id;
    }
    if (event.action === "playback.stopped") {
      if (!Number.isFinite(event.played_audio_ms) || event.played_audio_ms < 0 || event.played_audio_ms > 3e5) throw new Error("Invalid progress");
      ack.played_audio_ms = Math.round(event.played_audio_ms);
    }
    const stamp = JSON.stringify(ack);
    if (this.acks.has(stamp)) return;
    this.acks.add(stamp);
    if (this.acks.size > 8192) throw new Error("Playback limit");
    this.send(ack);
  }
  receive(bytes, binary) {
    if (binary) {
      if (!this.ready || !this.chunk || bytes.length % 2) throw new Error("Unpaired audio");
      this.allowedChunks.add(JSON.stringify([this.chunk.run_id, this.chunk.turn_id, this.chunk.chunk_id]));
      this.chunk = null;
      if (this.allowedChunks.size > 1024) throw new Error("Playback backlog");
      this.emit(bytes, true);
      return;
    }
    const event = JSON.parse(bytes.toString());
    const data = event.data ?? {};
    if (event.action === "error") return this.fail("MOSS \u62D2\u7EDD\u4E86\u5F53\u524D\u8BF7\u6C42\uFF0C\u8BF7\u68C0\u67E5\u6A21\u578B\u914D\u7F6E\u3002");
    if (event.action === "session_attached" && !this.updateSent) {
      if (data.delegation !== "client") throw new Error("Delegation unavailable");
      this.updateSent = true;
      if (this.voice) {
        this.send({ action: "change_voice", voice_name: this.voice });
      } else this.configure();
      return;
    }
    if (event.action === "voice_changed" && data.name === this.voice && !this.configSent) return this.configure();
    if (event.action === "session.updated" && this.configSent && !this.configured) {
      if (data.error !== "") return this.fail("\u4E0D\u517C\u5BB9\uFF1A\u6240\u9009 API \u672A\u63A5\u53D7\u5F53\u524D\u8BED\u97F3\u4EBA\u8BBE\u6216\u4F1A\u8BDD\u914D\u7F6E\u3002", "VOICE_INCOMPATIBLE");
      this.configured = true;
    }
    if (event.action === "media.configured" && this.configSent && !this.media) {
      const input = data.input_audio, output = data.output_audio;
      if (data.error !== "" || input?.format !== "pcm16" || input.sample_rate !== 16e3 || input.channels !== 1 || output?.format !== "pcm16" || ![16e3, 24e3, 48e3].includes(output.sample_rate) || output.channels !== 1) {
        return this.fail("\u4E0D\u517C\u5BB9\uFF1A\u6240\u9009 API \u672A\u63A5\u53D7\u652F\u6301\u7684\u97F3\u9891\u683C\u5F0F\u914D\u7F6E\u3002", "VOICE_INCOMPATIBLE");
      }
      this.media = { inputSampleRate: 16e3, outputSampleRate: output.sample_rate };
    }
    if (this.configured && this.media && !this.ready) {
      if (!this.probe) this.agent.voice.configure({ epoch: this.epoch, route: this.connection, prompt: this.prompt.persona.prompt + "\n\n" + this.prompt.instructions });
      this.ready = true;
      clearTimeout(this.timer);
      if (!this.probe) this.send({ action: "mic_state", enabled: true });
      this.emit({ action: "moss.ready", data: this.media });
      this.started.resolve(this);
    }
    if (!this.ready || this.probe) return;
    const unkeyedTranscript = event.action.startsWith("output.transcript.") || event.action === "response.interrupted";
    const key = identity(data) ?? (unkeyedTranscript && this.pending.size === 1 ? this.pending.keys().next().value : null);
    if (key && !this.finished.has(key) && !this.pending.has(key)) {
      if (this.pending.size > 32 || this.finished.size > 4096) throw new Error("Response limit");
      this.pending.set(key, { run_id: data.run_id, turn_id: data.turn_id, text: "" });
    }
    if (event.action === "input.transcript.done" || event.action === "input.transcript.revised") {
      if (typeof data.text !== "string" || [...data.text].length > 32e3) throw new Error("Transcript limit");
      const turn = data.turn ?? `unidentified-${++this.inputCounter}`;
      const previous = this.inputs.get(turn);
      if (!previous?.revised || event.action.endsWith("revised")) {
        this.inputs.set(turn, { revised: event.action.endsWith("revised") });
        this.agent.voice.user({ turn, text: data.text });
      }
      if (this.inputs.size > 4096) throw new Error("Input limit");
    }
    if (event.action === "response.audio.context") {
      if (!key || typeof data.chunk_id !== "string" || this.chunk) throw new Error("Invalid audio context");
      this.chunk = data;
    }
    const reply = key && this.pending.get(key);
    if (reply) {
      if (event.action.startsWith("output.transcript.")) {
        if (typeof data.text !== "string" || data.text.length > 128e3) throw new Error("Transcript limit");
        reply.text = data.text;
        if (event.action.endsWith(".done")) reply.final = true;
      }
      if (event.action === "response.ended" || event.action === "response.interrupted") {
        reply.status = event.action.endsWith("interrupted") ? "aborted" : data.status;
        if (!["completed", "aborted", "failed"].includes(reply.status)) throw new Error("Invalid response status");
        if (typeof data.text === "string") reply.text = data.text;
        if (reply.status !== "completed") reply.final = true;
      }
      if (reply.status && reply.final) this.finish(key);
    }
    if (event.action === "session.delegation.created") this.onDelegation?.(data);
    if (event.action === "session.delegation.cancelled") this.onCancelDelegation?.(data.delegation_id);
    if (visible.test(event.action)) this.emit(event);
  }
  configure() {
    this.configSent = true;
    this.send({ action: "session.update", session: this.prompt });
    this.send({ action: "media.configure", profile: "standard", input_audio: { format: "pcm16" }, output_audio: { format: "pcm16", sample_rate: 48e3 }, playback: "client" });
  }
  finish(key) {
    const reply = this.pending.get(key);
    if (!reply) return;
    this.pending.delete(key);
    this.finished.add(key);
    this.agent.voice.reply({ run_id: reply.run_id, turn_id: reply.turn_id, text: reply.text, status: reply.status ?? "aborted" });
  }
  fail(message, code = "VOICE_CONNECTION_FAILED") {
    if (this.stopped) return;
    if (this.peer.readyState === WebSocket.OPEN && this.peer.bufferedAmount <= LIMIT) {
      this.peer.send(JSON.stringify({ action: "moss.error", data: { message, code } }));
    }
    this.started.reject(Object.assign(new Error(message), { code, publicMessage: message }));
    this.stop();
  }
  stop() {
    if (this.stopped) return;
    this.stopped = true;
    clearTimeout(this.timer);
    for (const key of this.pending.keys()) this.finish(key);
    if (this.ready && !this.probe) this.agent.voice.end();
    this.started.reject(new Error("MOSS \u8BED\u97F3\u8FDE\u63A5\u5DF2\u505C\u6B62\u3002"));
    this.peer.off("message", this.clientMessage);
    this.peer.off("close", this.clientClose);
    if (this.socket?.readyState === WebSocket.CONNECTING) this.socket.terminate();
    else this.socket?.close(1e3);
    if (this.peer.readyState === WebSocket.OPEN) this.peer.close(1e3);
    this.onStop?.();
  }
};

// src/host/prompt.js
import { renderPrompt, PERSONA_PREFIX_SECTION, PERSONA_SUFFIX_SECTION } from "@deepseek-ai/dsh-system-prompt";
var unicodeSlice = (text, length) => [...text].slice(0, length).join("");
async function assembleMossPrompt(agent, systemPrompt, signal) {
  const assembly = await systemPrompt.assemble({ scope: agent, agent, modelSelection: agent.model?.current(), signal });
  const persona = renderPrompt({ ...assembly, sections: assembly.sections.filter((section) => [PERSONA_PREFIX_SECTION, PERSONA_SUFFIX_SECTION].includes(section.name)), tools: [] }) || "\u4F60\u662F MOSS\uFF0C\u4E0E\u7528\u6237\u8FDB\u884C\u81EA\u7136\u3001\u7B80\u6D01\u7684\u4E2D\u6587\u8BED\u97F3\u4EA4\u6D41\u3002";
  if ([...persona].length > 8e3) throw new Error("DSH \u4EBA\u8BBE\u8D85\u8FC7 MOSS \u7684 8000 \u5B57\u7B26\u9650\u5236\uFF0C\u8BF7\u7F29\u77ED\u539F\u751F\u4EBA\u8BBE\u3002");
  const history = [];
  let available = 9e3;
  for (const message of [...agent.session.deriveMessages()].reverse()) {
    if (!["user", "assistant"].includes(message.role)) continue;
    const settlement = message.role === "user" && message.source?.kind === "subagent-settled";
    if (message.role === "user" && message.source?.kind !== "user" && message.source !== void 0 && !settlement) continue;
    const text = (message.content ?? []).filter((block) => block.type === "text").map((block) => block.text).join("\n");
    if (!text) continue;
    const label = settlement ? `subagent facts (${unicodeSlice(message.source.senderSessionId ?? "", 100)}; do not automatically read aloud)` : message.role;
    const item = `${label}: ${unicodeSlice(text, Math.min(2e3, available))}`;
    history.unshift(item);
    available -= [...item].length;
    if (available <= 100) break;
  }
  const instructions = [
    "\u8FD9\u662F DSH \u4E2D\u7684\u5B9E\u65F6\u8BED\u97F3\u4F1A\u8BDD\u3002\u4F60\u8D1F\u8D23\u4E0E\u7528\u6237\u5BF9\u8BDD\uFF1B\u590D\u6742\u4EFB\u52A1\u901A\u8FC7 client \u59D4\u6D3E\u4EA4\u7ED9 DSH \u5B50 Agent\u3002",
    "\u4F60\u6CA1\u6709\u76F4\u63A5\u6267\u884C\u672C\u5730\u5DE5\u5177\u7684\u80FD\u529B\u3002\u4E0D\u8981\u627F\u8BFA\u5DF2\u7ECF\u6267\u884C\u5C1A\u672A\u5B8C\u6210\u7684\u64CD\u4F5C\u3002",
    "\u5B50 Agent \u81EA\u5DF1\u8D1F\u8D23\u4EFB\u52A1\u5185\u5BB9\uFF0C\u5B8C\u6574\u7ED3\u679C\u4F9B\u7528\u6237\u5728\u539F\u751F\u5B50\u4EFB\u52A1\u9875\u9762\u67E5\u770B\uFF1B\u4E0D\u8981\u81EA\u52A8\u9010\u5B57\u64AD\u62A5\u62A5\u544A\u3002",
    "\u9700\u8981\u7ED3\u679C\u65F6\u7B80\u77ED\u8BF4\u660E\u4EFB\u52A1\u72B6\u6001\uFF0C\u518D\u6309\u7528\u6237\u8981\u6C42\u8BA8\u8BBA\u3002",
    history.length ? "\u4EE5\u4E0B\u662F\u540C\u4E00 DSH \u4F1A\u8BDD\u5148\u524D\u4FDD\u5B58\u7684\u5BF9\u8BDD\u6458\u5F55\uFF0C\u4EC5\u4F5C\u4E3A\u5386\u53F2\u8D44\u6599\uFF1A\n" + history.join("\n\n") : ""
  ].filter(Boolean).join("\n\n");
  if ([...instructions].length > 16e3) throw new Error("MOSS \u4F1A\u8BDD\u6307\u4EE4\u8D85\u8FC7 16000 \u5B57\u7B26\u9650\u5236");
  return { persona: { name: "MOSS", prompt: persona }, instructions, tools: [] };
}

// src/host/delegation.js
import { createHash } from "node:crypto";
var Delegations = class {
  constructor(ctx, parent, config, send, epoch) {
    Object.assign(this, { ctx, parent, config, send, epoch });
    this.tasks = /* @__PURE__ */ new Map();
  }
  handle(data) {
    if (typeof data?.id !== "string" || !data.id || data.id.length > 256) return Promise.resolve();
    if (this.tasks.has(data.id)) return this.tasks.get(data.id).promise;
    if (this.tasks.size >= 256) {
      this.report(data.id, "failed", "\u5F53\u524D\u901A\u8BDD\u7684\u59D4\u6D3E\u6570\u91CF\u5DF2\u8FBE\u4E0A\u9650\uFF0C\u8BF7\u5F00\u542F\u65B0\u901A\u8BDD\u3002");
      return Promise.resolve();
    }
    const task = { abort: new AbortController(), cancelled: false };
    this.tasks.set(data.id, task);
    task.promise = this.execute(data, task);
    return task.promise;
  }
  report(id, status, content) {
    this.send({
      action: "session.commentary.append",
      delegation_id: id,
      status,
      event_id: createHash("sha256").update(`${this.epoch}:${id}:${status}`).digest("hex"),
      content: unicodeSlice(content, 2e3)
    });
  }
  async execute(data, task) {
    try {
      if (typeof data.objective !== "string" || !data.objective.trim() || [...data.objective].length > 8e3 || !Array.isArray(data.context ?? []) || (data.context ?? []).length > 6) throw new Error("INVALID_TASK");
      const context = (data.context ?? []).map((item) => {
        if (typeof item.role !== "string" || typeof item.content !== "string" || [...item.content].length > 600) throw new Error("INVALID_TASK");
        return `${item.role}: ${item.content}`;
      }).join("\n");
      const preset = await this.ctx.agentPresets.resolve(this.config.agentPreset || void 0);
      if (preset.broken) throw new Error("INVALID_PRESET");
      const route = this.config.model?.provider && this.config.model?.model ? this.config.model : this.ctx.agentDefaultModel.currentSelection();
      const parentRoute = this.parent.model?.current();
      if (!route?.provider || !route.model || parentRoute && route.provider === parentRoute.provider && route.model === parentRoute.model) throw new Error("ORDINARY_MODEL_REQUIRED");
      task.abort.signal.throwIfAborted();
      const childId = "moss-task-" + createHash("sha256").update(`${this.parent.id}:${this.epoch}:${data.id}`).digest("hex").slice(0, 40);
      task.activation = await this.ctx.subagents.startActivation({
        childId,
        provider: this.config.provider,
        label: unicodeSlice(data.objective, 60),
        signal: task.abort.signal,
        delivery: "parent",
        request: {
          parent: this.parent,
          cwd: this.ctx.workingDirectory.get(this.parent.session),
          agentPreset: preset.id,
          agentOptions: route,
          prompt: [{ type: "text", text: `${data.objective}

\u76F8\u5173\u5BF9\u8BDD\u6458\u5F55\uFF1A
${context}` }]
        }
      });
      if (task.cancelled) {
        await task.activation.dispose();
        return;
      }
      const result = await task.activation.result;
      if (task.cancelled) return;
      const succeeded = result.stopReason === "completed";
      const text = result.output.filter((block) => block.type === "text").map((block) => block.text).join("\n");
      if (text) this.send({
        action: "session.thinking.append",
        delegation_id: data.id,
        event_id: createHash("sha256").update(`${this.epoch}:${data.id}:facts`).digest("hex"),
        content: unicodeSlice(`\u5B50\u4EFB\u52A1 ${task.activation.childId} \u7684\u7ED3\u679C\u8D44\u6599\uFF08\u4E0D\u8981\u81EA\u52A8\u5168\u6587\u64AD\u62A5\uFF09\uFF1A
${text}`, 2e3)
      });
      this.report(
        data.id,
        succeeded ? "completed" : "failed",
        `\u59D4\u6D3E\u4EFB\u52A1${succeeded ? "\u5DF2\u5B8C\u6210" : "\u672A\u5B8C\u6210"}\uFF1A${unicodeSlice(data.objective, 80)}\u3002\u5B8C\u6574\u6267\u884C\u8BB0\u5F55\u4E0E\u7ED3\u679C\u89C1 DSH \u5B50\u4EFB\u52A1 ${task.activation.childId}\u3002\u53EA\u9700\u7B80\u77ED\u786E\u8BA4\u72B6\u6001\u3002`
      );
    } catch {
      if (!task.cancelled) this.report(data.id, "failed", "\u65E0\u6CD5\u542F\u52A8\u6216\u5B8C\u6210 DSH \u59D4\u6D3E\u4EFB\u52A1\u3002\u8BF7\u68C0\u67E5\u9ED8\u8BA4\u59D4\u6258 Agent\u3001\u666E\u901A\u804A\u5929\u6A21\u578B\u53CA\u5B50\u4EFB\u52A1\u6267\u884C\u5668\u914D\u7F6E\u3002");
    }
  }
  async cancel(id) {
    const task = this.tasks.get(id);
    if (!task) return;
    task.cancelled = true;
    task.abort.abort();
    await task.activation?.dispose();
  }
};

// src/host/dsh-models.js
function voiceError(code, message) {
  return Object.assign(new Error(message), { code, publicMessage: message });
}
var missing = (message) => voiceError("VOICE_NOT_CONFIGURED", `\u672A\u914D\u7F6E\uFF1A${message}`);
var incompatible = (message) => voiceError("VOICE_INCOMPATIBLE", `\u4E0D\u517C\u5BB9\uFF1A${message}`);
function realtimeURL(baseURL) {
  let url;
  try {
    url = new URL(baseURL);
  } catch {
    throw incompatible("\u6240\u9009 DSH API \u6CA1\u6709\u53EF\u7528\u7684\u5B9E\u65F6\u7AEF\u70B9\u5730\u5740\u3002");
  }
  if (url.username || url.password || url.search || url.hash) throw incompatible("\u8BED\u97F3\u7AEF\u70B9\u5730\u5740\u4E0D\u80FD\u5305\u542B\u51ED\u636E\u3001\u67E5\u8BE2\u53C2\u6570\u6216\u7247\u6BB5\u3002");
  if (url.protocol === "https:") url.protocol = "wss:";
  else if (url.protocol === "http:") url.protocol = "ws:";
  const local = ["localhost", "127.0.0.1", "[::1]"].includes(url.hostname);
  if (url.protocol !== "wss:" && !(url.protocol === "ws:" && local)) throw incompatible("\u5F53\u524D\u8BED\u97F3\u8FDE\u63A5\u9700\u8981\u5B89\u5168\u7684 WebSocket \u7AEF\u70B9\u3002");
  const path = url.pathname.replace(/\/+$/, "");
  url.pathname = path.endsWith("/realtime") ? path : `${path}/realtime`;
  return url.href;
}
var DshModels = class {
  constructor(ctx) {
    this.ctx = ctx;
  }
  selection(route) {
    const selected = voiceRoute(route);
    if (!this.ctx.llm.listProviders().some((provider) => provider.id === selected.provider)) throw missing("\u6240\u9009\u6A21\u578B\u63D0\u4F9B\u5546\u5DF2\u79FB\u9664\u6216\u5C1A\u672A\u542F\u7528\uFF0C\u8BF7\u5728 DSH \u6A21\u578B\u8BBE\u7F6E\u4E2D\u914D\u7F6E\u3002");
    return selected;
  }
  async catalog() {
    const rows = await Promise.all(this.ctx.llm.listProviders().map(async (provider) => {
      try {
        return (await this.ctx.llm.listModels(provider.id)).map((model) => ({ provider: provider.id, model: model.id, providerName: provider.name, modelName: model.name, name: `${provider.name} \xB7 ${model.name}` }));
      } catch {
        return [];
      }
    }));
    return rows.flat();
  }
  async connection(route) {
    const selected = this.selection(route);
    const directory = this.ctx.llm.listConfigurableProviders().find((entry) => entry.provider === selected.provider);
    if (!directory) throw incompatible("\u6B64 DSH \u63A5\u5165\u672A\u63D0\u4F9B\u8BED\u97F3\u8FDE\u63A5\u6240\u9700\u7684\u539F\u751F\u914D\u7F6E\u63CF\u8FF0\u3002");
    let profile = this.ctx.settings.describe().find((entry) => entry.ns === directory.settingsNs)?.value;
    for (const key of directory.settingsPath) profile = profile && Object.hasOwn(profile, key) ? profile[key] : void 0;
    if (!profile || typeof profile !== "object") throw missing("\u6240\u9009 API \u5C1A\u672A\u5728 DSH \u6A21\u578B\u8BBE\u7F6E\u4E2D\u5B8C\u6210\u914D\u7F6E\u3002");
    profile = structuredClone(profile);
    const refs = profile.apiKeyEnv ? [profile.apiKeyEnv] : directory.nativeAuth?.env ?? [];
    if (!refs.length) throw incompatible("\u6B64 DSH \u63A5\u5165\u7684\u8BA4\u8BC1\u65B9\u5F0F\u5C1A\u4E0D\u80FD\u7528\u4E8E\u5F53\u524D\u8BED\u97F3\u534F\u8BAE\u3002");
    let apiKey;
    for (const ref of refs) {
      const hit = await this.ctx.credentials.resolve(ref);
      if (hit?.value) {
        apiKey = hit.value;
        break;
      }
    }
    if (!apiKey || /[\r\n]/.test(apiKey)) throw missing("\u6240\u9009 API \u7684\u51ED\u636E\u7F3A\u5931\u6216\u65E0\u6548\uFF0C\u8BF7\u5728 DSH \u6A21\u578B\u8BBE\u7F6E\u4E2D\u8865\u5168\u3002");
    const model = profile.models?.find((model2) => model2.id === selected.model);
    const baseURL = realtimeURL(model?.baseURL ?? profile.baseURL ?? directory.defaultBaseURL);
    return { ...selected, baseURL, apiKey };
  }
};

// src/host/probe.js
import { EventEmitter } from "node:events";
async function probeConnection(connection, { signal } = {}) {
  signal?.throwIfAborted();
  const peer = Object.assign(new EventEmitter(), { readyState: 1, bufferedAmount: 0, send() {
  }, close() {
    this.readyState = 3;
    this.emit("close");
  } });
  const session = new MossSession({
    peer,
    connection,
    probe: true,
    prompt: { persona: { name: "MOSS", prompt: "Connection compatibility check." }, instructions: "Do not speak or start tasks.", tools: [] }
  });
  const abort = () => session.stop();
  signal?.addEventListener("abort", abort, { once: true });
  try {
    await session.start();
    return { ...session.media };
  } finally {
    signal?.removeEventListener("abort", abort);
    session.stop();
  }
}

// src/host/runtime.js
var MossRuntime = class extends Service {
  static Config = Config;
  static inject = [
    "agents",
    "sessions",
    "sessionPersistence",
    "llm",
    "settings",
    "credentials",
    "webServer",
    "connection",
    "agentPresets",
    "systemPrompt",
    "workingDirectory",
    "fs",
    "subagents",
    "agentDefaultModel"
  ];
  constructor(ctx, config) {
    super(ctx, "mossLive");
    this.owner = ctx;
    this.config = config;
    this.models = new DshModels(ctx);
    this.calls = /* @__PURE__ */ new Map();
    this.handles = /* @__PURE__ */ new Map();
    this.loading = /* @__PURE__ */ new Map();
    this.closed = false;
    this.probes = /* @__PURE__ */ new Set();
    ctx.inject(["settings"], (child) => {
      child.effect(() => child.settings.configure({ auto: false }, ctx.fiber));
    });
    ctx.effect(() => registerRoutes(ctx, ctx.webServer, this), "moss.authenticated-routes");
    ctx.effect(() => async () => {
      this.closed = true;
      for (const probe of this.probes) probe.abort();
      for (const call of this.calls.values()) call.session?.stop();
      await Promise.allSettled([...this.loading.values()]);
      await Promise.all([...this.handles.values()].map((handle) => handle.dispose()));
      this.handles.clear();
    }, "moss.runtime");
  }
  async settings() {
    return {
      ...publicSettings(this.config),
      models: await this.models.catalog(),
      providers: this.owner.llm.listProviders().map(({ id, name }) => ({ id, name })),
      agentPresets: (await this.owner.agentPresets.list()).map((preset) => ({ id: preset.id, name: preset.name ?? preset.id, broken: !!preset.broken }))
    };
  }
  selection() {
    return this.models.selection(this.config.voiceModel.get());
  }
  async testModel(route, signal) {
    if (this.closed || this.probes.size >= 2) throw Object.assign(new Error("Probe busy"), { publicMessage: "\u5DF2\u6709\u8FDE\u63A5\u6D4B\u8BD5\u6B63\u5728\u8FDB\u884C\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002" });
    const abort = new AbortController();
    this.probes.add(abort);
    try {
      const connection = await this.models.connection(route);
      return await probeConnection(connection, { signal: signal ? AbortSignal.any([signal, abort.signal]) : abort.signal });
    } finally {
      this.probes.delete(abort);
    }
  }
  async create(directory) {
    this.owner.fiber.assertActive();
    if (this.closed || this.handles.size + this.loading.size >= 32) throw new Error("MOSS session limit");
    const route = this.selection();
    const target = await this.owner.fs.resolve(directory);
    if ((await this.owner.fs.stat(target))?.type !== "directory") throw new Error("Invalid project directory");
    const cwd = this.owner.fs.processPath(target);
    const sessionId = `moss-live-${randomUUID2()}`;
    const preset = await this.owner.agentPresets.resolve();
    if (preset.broken) throw new Error("Invalid DSH preset");
    const operation = this.owner.agents.create({ sessionId, route, meta: { cwd }, setup: async (agentCtx, agent) => {
      await this.owner.agentPresets.mount(agentCtx, preset.id);
      agent.session.append("agent-preset/selected", { agentPreset: preset.id });
    } });
    this.loading.set(sessionId, operation);
    try {
      const handle = await operation;
      this.handles.set(sessionId, handle);
      if (this.closed) {
        await handle.dispose();
        this.handles.delete(sessionId);
        throw new Error("MOSS disposed");
      }
      return { sessionId };
    } finally {
      this.loading.delete(sessionId);
    }
  }
  async agentFor(id) {
    const current = this.owner.agents.get(id);
    if (current) return current;
    if (!this.loading.has(id)) {
      const operation = this.owner.agents.resume({ resumeSessionId: id, setup: async (agentCtx, agent) => {
        const preset = [...agent.session.snapshotEvents()].reverse().find((event) => event.type === "agent-preset/selected")?.data.agentPreset;
        await this.owner.agentPresets.mount(agentCtx, preset);
      } }).then(async (handle) => {
        if (this.closed) {
          await handle.dispose();
          throw new Error("MOSS disposed");
        }
        this.handles.set(id, handle);
        return handle;
      }).finally(() => this.loading.delete(id));
      this.loading.set(id, operation);
    }
    return (await this.loading.get(id)).agent;
  }
  async attach(peer, sessionId) {
    if (!isMossSession(sessionId) || this.closed) throw new Error("MOSS unavailable");
    if (this.calls.has(sessionId) || this.calls.size >= 4) throw new Error("MOSS voice session already connected");
    const call = { peer, session: null, closed: false };
    this.calls.set(sessionId, call);
    const closed = () => {
      call.closed = true;
    };
    peer.once("close", closed);
    try {
      const agent = await this.agentFor(sessionId);
      if (!agent.voice) throw new Error("Not a MOSS Agent");
      const route = this.selection();
      const [connection, prompt] = await Promise.all([
        this.models.connection(route),
        assembleMossPrompt(agent, this.owner.systemPrompt)
      ]);
      this.owner.fiber.assertActive();
      if (this.closed || call.closed) throw new Error("Browser disconnected");
      const stop = () => {
        if (this.calls.get(sessionId) === call) this.calls.delete(sessionId);
        if (agent.onStop === call.cancelVoice) agent.onStop = void 0;
      };
      call.session = new MossSession({ peer, agent, connection, prompt, onStop: stop });
      const tasks = new Delegations(this.owner, agent, structuredClone(this.config.delegation.get()), (event) => call.session.send(event), call.session.epoch);
      call.session.onDelegation = (data) => {
        void tasks.handle(data);
      };
      call.session.onCancelDelegation = (id) => {
        void tasks.cancel(id).catch(() => {
        });
      };
      call.cancelVoice = () => call.session.stop();
      agent.onStop = call.cancelVoice;
      await call.session.start();
    } catch (error) {
      call.session?.stop();
      if (this.calls.get(sessionId) === call) this.calls.delete(sessionId);
      throw error;
    } finally {
      peer.off("close", closed);
    }
  }
};
export {
  Config,
  MossRuntime as default
};

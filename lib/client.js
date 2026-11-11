window.__ModuleLoader__.load({
  id: 'dsh-moss-live',
  factory: (require) => {
    const __MOSS_CSS_TEXT__ = ".m,.e,.c,.l,.b{font-family:var(--dsw-font-family);box-sizing:border-box;color:var(--dsw-alias-label-primary)}.m *,.e *,.c *,.l *{box-sizing:border-box}.m{position:relative;display:flex;flex-direction:column;width:100%;height:100%;min-height:0;overflow:hidden;background:var(--dsw-alias-bg-base);isolation:isolate;animation:u .4s ease-out}.o{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:20px 30px 0;flex:none}.q{display:flex;gap:9px;align-items:center;font-size:10px;line-height:1.5;font-weight:600;letter-spacing:.15em;white-space:nowrap}.q>i{height:5px;width:5px;background:var(--dsw-alias-state-success-primary);border-radius:50%;corner-shape:round}.o>div{display:flex;align-items:center;gap:12px}.o button{font-size:12px}.I{min-width:0;flex:1;overflow:hidden}.J{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:12px;color:var(--dsw-alias-label-tertiary)}.o>div:last-child{flex:none}.g{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:safe center;min-height:0;overflow-y:auto;padding:12px 28px 4px}.g>*{flex-shrink:0}.d{display:flex;align-items:center;gap:10px;min-height:24px;font-size:12px;line-height:1.6;letter-spacing:.08em;color:var(--dsw-alias-label-tertiary);margin:12px 0 24px}.a{display:flex;align-items:center;gap:2px;height:12px}.a i{width:2px;height:5px;background:currentColor;border-radius:2px;animation:a 1.7s ease-in-out infinite}.a i:nth-child(2){height:10px;animation-delay:.2s}.a i:nth-child(3){height:12px;animation-delay:.4s}.a i:nth-child(4){height:7px;animation-delay:.6s}.v{width:min(100%,480px);min-height:95px;text-align:center;overflow-wrap:anywhere}.v p{margin:0}.K{font-size:12px;color:var(--dsw-alias-label-tertiary);min-height:24px;line-height:1.7}.A{font-size:clamp(18px,2.1vw,22px);line-height:1.65;letter-spacing:-.4px;max-height:125px;overflow:auto;text-wrap:balance}.y{font-size:12px;color:var(--dsw-alias-state-error-primary);max-width:430px;line-height:1.8;text-align:center}.y p{margin:5px 0}.y button{margin-top:8px}.f{display:flex;flex-direction:column;align-items:center;gap:19px;padding:14px 24px max(25px,env(safe-area-inset-bottom));flex:none}.f small{font-size:11px;color:var(--dsw-alias-label-tertiary);text-align:center;line-height:1.6}.t{display:flex;gap:20px;align-items:center}.t button{width:52px;height:52px;border-radius:50%;corner-shape:round;padding:0}.t .L,.t .M{color:var(--dsw-alias-state-error-primary)}.N{min-width:110px}.c{display:flex;align-items:center;justify-content:center;padding:12px 16px 18px;width:100%;margin:auto}.r{display:flex;align-items:center;gap:10px;width:min(100%,440px);padding:9px 12px;border:.5px solid var(--dsw-alias-border-l4);border-radius:36px;corner-shape:round;background:var(--dsw-alias-bg-layer-1)}.r .B{width:44px;height:44px;flex:none;padding:0;border-radius:50%;corner-shape:round}.x{display:flex;align-items:center;gap:9px;min-width:0;flex:1;font-size:12px;line-height:1.5}.x>span{min-width:0;flex:1;overflow:hidden}.x>span>span{display:block;font-size:10px;color:var(--dsw-alias-label-tertiary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:120px}.r .t{gap:6px;flex:none}.r .t button{width:44px;height:44px;padding:0}.l{position:relative;width:min(440px,calc(100vw - 24px));margin:7px max(12px,env(safe-area-inset-right)) max(7px,env(safe-area-inset-bottom)) auto;pointer-events:auto;animation:u .3s ease-out}.l .r{background:var(--dsw-alias-bg-layer-3);box-shadow:var(--dsw-elevation-prominent)}.d[data-phase=paused] .a i,.d[data-phase=error] .a i,.d[data-phase=idle] .a i{animation:none}.O{width:min(850px,100%);max-width:850px;max-height:100%}.P{min-height:0;flex:1 1 auto;overflow-y:auto;overscroll-behavior:contain}.e{max-width:760px;width:100%;font-size:13px;line-height:1.7}.e fieldset{border:.5px solid var(--dsw-alias-settings-card-stroke);background:var(--dsw-alias-settings-card-fill);border-radius:var(--dsw-radius-lg);padding:18px 20px;margin:0 0 22px;min-width:0}.e legend{font-size:14px;padding:0 8px;font-weight:600}.e label,.k{display:block;margin:0 0 18px}.k>span{display:block;margin-bottom:7px}.k>span:last-child{display:block;width:100%}.z{width:100%;justify-content:space-between;text-align:left;gap:12px;min-height:40px}.z>span{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.z svg{flex:none}.e input[type=range]{display:block;width:100%;margin-top:8px;accent-color:var(--dsw-alias-state-business-primary)}.e input[type=color]{display:block;margin-top:6px;width:60px;height:36px;border:.5px solid var(--dsw-alias-border-l4);border-radius:var(--dsw-radius-sm);background:var(--dsw-alias-bg-base)}.e output{float:right;color:var(--dsw-alias-label-tertiary)}.e p,.e small{font-size:12px;line-height:1.8;color:var(--dsw-alias-label-tertiary)}.e :is(input,button):focus-visible{outline:2px solid var(--dsw-alias-state-business-primary);outline-offset:3px}.D{display:grid;grid-template-columns:200px 1fr;gap:26px;align-items:center}.j{position:relative;width:190px;aspect-ratio:1;margin:auto}.j{--moss-orb-size:100%}.Q{display:grid;place-items:center;height:100%;border:1px dashed var(--dsw-alias-border-l4);border-radius:50%;corner-shape:round;color:var(--dsw-alias-label-tertiary)}.E{position:absolute;bottom:8px;left:50%;transform:translate(-50%);background:var(--dsw-alias-bg-layer-3)}.e input[hidden]{display:none}.R{display:flex;flex-wrap:wrap;align-items:center;gap:20px;margin-bottom:12px}.Y{display:flex;align-items:center;gap:9px}.Y small{margin-left:4px}.S{display:flex;align-items:center;flex-wrap:wrap;gap:10px;font-size:12px;color:var(--dsw-alias-label-secondary);min-height:36px}.e .T{color:var(--dsw-alias-state-error-primary)}.e .U{color:var(--dsw-alias-state-success-primary)}.b{padding:0 4px}.b button{gap:8px;white-space:nowrap}.C{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.5fr);gap:14px}.C>div{min-width:0}.Y meter{width:56px;height:6px;accent-color:var(--dsw-alias-state-success-primary)}.E{width:max-content;white-space:nowrap}@media(max-width:420px){.C{grid-template-columns:1fr;gap:0}}@keyframes V{0%,to{transform:scale(.98)}50%{transform:scale(1.015)}}@keyframes a{0%,to{transform:scaleY(.5)}50%{transform:scaleY(1)}}@keyframes u{0%{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}@keyframes X{0%,to{opacity:0}50%{opacity:calc(var(--moss-diffusion)*.5)}}@media(max-width:600px){.o{padding:12px 18px 0}.o>div{gap:4px}.g{padding:8px 20px}.F{width:clamp(165px,28dvh,260px)}.t{gap:18px}.f{padding-bottom:max(22px,env(safe-area-inset-bottom))}.D{grid-template-columns:1fr;gap:20px}.j{width:160px}.e fieldset{padding:14px}.l .W{width:26px;height:26px}.c{padding:8px 10px}}@media(max-height:570px){.o{padding-top:4px}.F{width:140px}.d{margin:2px 0 8px}.v{min-height:48px}.A{font-size:17px;max-height:60px}.f{gap:8px;padding-top:8px;padding-bottom:12px}.t button{width:44px;height:44px}.g{padding-top:0}}@media(prefers-reduced-motion:reduce){.m,.Z,.X,.a i,.l{animation:none!important;transition:none!important}.X{opacity:calc(var(--moss-diffusion)*.25)}}@media(max-width:420px){.r{gap:7px;padding:8px}.r .B{width:44px;height:44px}.r .t{gap:4px}.r .t button{width:44px;height:44px}.x{gap:6px}.x>span>span{max-width:90px}}.s{--orb-color: #64b5f6;position:relative;display:grid;place-items:center;width:var(--moss-orb-size, clamp(160px, 29dvh, 290px));max-width:100%;aspect-ratio:1;flex:none;isolation:isolate;outline:0;border-radius:50%;corner-shape:round;cursor:grab;touch-action:none;-webkit-tap-highlight-color:transparent;user-select:none}.s:focus-visible{outline:2px solid var(--dsw-alias-label-primary);outline-offset:6px}.s[data-grabbing=true]{cursor:grabbing}._{position:absolute;inset:0;width:100%;height:100%;display:block;pointer-events:none}.n{display:block;width:84%;height:84%;border-radius:50%;corner-shape:round;clip-path:circle(50% at 50% 50%);object-fit:cover;object-position:center;pointer-events:none;transition:transform .18s ease}.h:hover .n{transform:scale(1.025)}.h:active .n{transform:scale(.96)}.h[data-poked=true] .n{animation:G .65s cubic-bezier(.18,.74,.25,1)}.i{position:absolute;inset:10%;overflow:hidden;border-radius:48% 52% 50% 49%;corner-shape:round;background:radial-gradient(ellipse at 28% 23%,color-mix(in srgb,var(--orb-color) 6%,white),color-mix(in srgb,var(--orb-color) 58%,white) 56%,color-mix(in srgb,var(--orb-color) 77%,black));animation:w 11s ease-in-out infinite alternate;pointer-events:none}.i:before,.i:after{content:\"\";position:absolute;inset:-9%;border-radius:40% 50% 46% 53%;background:radial-gradient(ellipse at 22% 30%,#fff 0 12%,transparent 40%),radial-gradient(ellipse at 72% 62%,#fff9 0 16%,transparent 40%);filter:blur(9px);animation:w 9s ease-in-out infinite alternate-reverse}.i:after{transform:rotate(90deg);opacity:.55;animation-duration:14s}.s[data-poked=true] .i{animation:H .65s ease-out,w 11s ease-in-out infinite alternate}.p{width:26px;height:26px;cursor:inherit;pointer-events:none}.p .i{inset:1%;animation:none}.p .i:before,.p .i:after{animation:none;filter:blur(2px)}.p .n{width:100%;height:100%}@keyframes w{0%{transform:rotate(-8deg) scale(.98);border-radius:47% 52% 49% 51%}to{transform:rotate(11deg) scale(1.025);border-radius:52% 47% 52% 46%}}@keyframes G{0%{transform:scale(.94)}38%{transform:scale(1.055)}70%{transform:scale(.99)}to{transform:scale(1)}}@keyframes H{0%{scale:.93}40%{scale:1.09}to{scale:1}}@media(max-width:600px){.s{width:var(--moss-orb-size, clamp(165px, 28dvh, 260px))}.p{width:26px}}@media(max-height:570px){.s{width:var(--moss-orb-size, 145px)}.p{width:26px}}@media(prefers-reduced-motion:reduce){.i,.i:before,.i:after,.n{animation:none!important;transition:none!important}.s[data-poked=true]{opacity:.85}.h:hover .n,.h:active .n{transform:none}}\n";
    const module = { exports: {} }; const exports = module.exports;
var Vh=Object.create;var Fs=Object.defineProperty;var kh=Object.getOwnPropertyDescriptor;var Gh=Object.getOwnPropertyNames;var Hh=Object.getPrototypeOf,Wh=Object.prototype.hasOwnProperty;var Xh=(i,e)=>{for(var t in e)Fs(i,t,{get:e[t],enumerable:!0})},El=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of Gh(e))!Wh.call(i,s)&&s!==t&&Fs(i,s,{get:()=>e[s],enumerable:!(n=kh(e,s))||n.enumerable});return i};var pn=(i,e,t)=>(t=i!=null?Vh(Hh(i)):{},El(e||!i||!i.__esModule?Fs(t,"default",{value:i,enumerable:!0}):t,i)),qh=i=>El(Fs({},"__esModule",{value:!0}),i);var m0={};Xh(m0,{apply:()=>p0,inject:()=>h0});module.exports=qh(m0);var Yi=pn(require("react"),1),Xa=require("@deepseek-ai/dsh-client-ui-primitives");var In=i=>!["idle","paused","error"].includes(i),Os=(i,e)=>e(`phase.${i}`);var Bs=class{constructor(e){this.dependencies=e,this.t=e.t??(t=>t),this.listeners=new Set,this.generation=0,this.snapshot={phase:"idle",sessionId:null,minimized:!1,muted:!1,userText:"",assistantText:"",error:""}}getSnapshot=()=>this.snapshot;subscribe=e=>(this.listeners.add(e),()=>this.listeners.delete(e));patch(e){this.snapshot={...this.snapshot,...e};for(let t of this.listeners)t()}async start(e,{minimized:t=this.snapshot.minimized}={}){if(this.disposed||this.snapshot.sessionId===e&&In(this.snapshot.phase))return;let n=this.snapshot.sessionId===e&&this.snapshot.muted;this.stop();let s=this.generation,r=()=>s===this.generation&&!this.disposed,a=[],o=512*1024,c=0;this.patch({sessionId:e,viewSessionId:e,phase:"connecting",minimized:t,muted:n,userText:"",assistantText:"",error:"",errorCode:void 0});let l=new AbortController;this.abort=l;try{let{connection:d,format:h}=await this.dependencies.connect(e,p=>{if(r()){if(p.action==="moss.error")return this.failure(p.data.message,p.data.code);if(this.media)this.receive(p);else{if(c+=p instanceof ArrayBuffer?p.byteLength:JSON.stringify(p).length,c>o||a.length>128)return this.failure(this.t("controller.1"));a.push(p)}}},l.signal);if(!r()){d.close();return}this.connection=d,d.send({action:"mic_state",enabled:!this.snapshot.muted});let u=await this.dependencies.openMedia(h,p=>{r()&&this.connection&&!this.snapshot.muted&&this.connection.send(p)},p=>{r()&&this.connection?.send(p)},l.signal,p=>{r()&&this.patch({energy:p.playing?p.outputLevel:this.snapshot.muted?0:p.inputLevel,phase:p.playing?"speaking":this.snapshot.phase==="speaking"?"listening":this.snapshot.phase})});if(!r()){u.dispose();return}this.media=u,u.mute?.(this.snapshot.muted),this.patch({phase:"listening"});for(let p of a)this.receive(p)}catch(d){r()&&this.failure(d.message||this.t("controller.2"),d.code)}}receive(e){try{if(e instanceof ArrayBuffer){if(!this.chunk)throw new Error(this.t("controller.3"));this.media.playback.enqueue(this.chunk,e),this.chunk=null;return}let t=e.data??{};e.action.startsWith("input.transcript.")&&this.patch({userText:t.text??""}),e.action.startsWith("output.transcript.")&&this.patch({assistantText:t.text??""}),e.action==="input.speech.started"&&this.patch({phase:"listening"}),e.action==="input.speech.stopped"&&this.patch({phase:"thinking"}),e.action==="response.audio.started"&&this.patch({phase:"speaking"}),e.action==="response.audio.context"&&(this.chunk=t),e.action==="response.audio.done"&&this.media.playback.done(t),e.action==="response.audio.stop"&&(this.media.playback.interrupt(t),this.patch({phase:"listening"})),(e.action==="response.ended"||e.action==="response.interrupted")&&!this.media.playback.seconds&&this.patch({phase:"listening"})}catch(t){this.failure(t.message)}}failure(e,t){this.stop(),this.patch({phase:"error",error:e,errorCode:t})}mute(){let e=!this.snapshot.muted;this.media?.mute(e),this.connection?.send({action:"mic_state",enabled:!e}),this.patch({muted:e})}interrupt(){this.media?.playback.interruptAll(),this.patch({phase:"listening"})}pause(){this.stop(),this.patch({phase:"paused"})}minimize(){this.patch({minimized:!0})}expand(e=this.snapshot.sessionId){this.patch({viewSessionId:e,minimized:!!(this.snapshot.sessionId&&e!==this.snapshot.sessionId)}),this.onExpand?.(e)}stop(){++this.generation,this.abort?.abort(),this.abort=null,this.media?.playback?.interruptAll?.(),this.media?.dispose(),this.media=null,this.connection?.close(),this.connection=null,this.chunk=null,this.patch({phase:"idle",energy:0})}dispose(){this.stop(),this.disposed=!0,this.listeners.clear()}};var Yh=i=>JSON.stringify([i.run_id,i.turn_id]),zs=class{constructor(e,t,n,s=r=>r){Object.assign(this,{context:e,send:t,sampleRate:n,t:s}),this.runs=new Map,this.tail=0,this.seconds=0}run(e){let t=Yh(e);if(this.runs.has(t)||this.runs.set(t,{meta:e,items:[],chunks:new Set,done:!1,settled:!1}),this.runs.size>4096)throw new Error(this.t("playback.1"));return this.runs.get(t)}enqueue(e,t){let n=this.run(e);if(n.settled||n.chunks.has(e.chunk_id))return;n.chunks.add(e.chunk_id);let s=new DataView(t),r=new Float32Array(s.byteLength/2);for(let p=0;p<r.length;p++)r[p]=s.getInt16(p*2,!0)/32768;let a=r.length/this.sampleRate;if(this.seconds+a>12)throw new Error(this.t("playback.2"));let o=Math.max(this.context.currentTime,this.tail),c=Math.min(1,Math.sqrt(r.reduce((p,x)=>p+x*x,0)/Math.max(1,r.length))*4),l={meta:e,at:o,duration:a,energy:c,ended:!1,cancelled:!1};n.items.push(l),this.seconds+=a,this.tail=o+a;let d=()=>{l.ended||l.cancelled||(l.ended=!0,this.seconds-=a,l.source?.disconnect(),this.send({action:"playback.chunk.completed",...e}),this.complete(n))};if(!r.length)return d();let h=this.context.createBuffer(1,r.length,this.sampleRate);h.copyToChannel(r,0);let u=this.context.createBufferSource();l.source=u,u.buffer=h,u.connect(this.context.destination),u.onended=d,u.start(o)}done(e){let t=this.run(e);t.done=!0,this.complete(t)}complete(e){!e.done||e.settled||e.items.some(t=>!t.ended)||(e.settled=!0,this.send({action:"playback.completed",run_id:e.meta.run_id,turn_id:e.meta.turn_id}))}interrupt(e){let t=this.run(e);if(t.settled)return;let n=this.context.currentTime;for(let a of t.items)!a.ended&&!a.cancelled&&n>=a.at+a.duration&&a.source?.onended?.();let s=t.items.find(a=>!a.ended&&!a.cancelled),r=s?Math.round(Math.max(0,Math.min(s.duration,n-s.at))*1e3):0;this.cancel(t),this.send({action:"playback.stopped",run_id:e.run_id,turn_id:e.turn_id,played_audio_ms:r})}cancel(e){e.settled=!0;for(let t of e.items)!t.ended&&!t.cancelled&&(t.cancelled=!0,this.seconds-=t.duration,t.source&&(t.source.onended=null,t.source.stop(),t.source.disconnect()));this.tail=Math.max(this.context.currentTime,...[...this.runs.values()].flatMap(t=>t.items.filter(n=>!n.ended&&!n.cancelled).map(n=>n.at+n.duration)))}interruptAll(){for(let e of this.runs.values())e.settled||this.interrupt(e.meta)}level(){let e=this.context.currentTime;for(let t of this.runs.values())for(let n of t.items)if(!n.ended&&!n.cancelled&&e>=n.at&&e<n.at+n.duration)return n.energy;return 0}dispose(){for(let e of this.runs.values())this.cancel(e);this.runs.clear()}};var Cl=`
class MossCapture extends AudioWorkletProcessor {
  constructor() {
    super(); this.samples = []; this.position = 0; this.frame = new Int16Array(320); this.used = 0;
  }
  process(inputs) {
    const input = inputs[0]?.[0];
    if (!input) return true;
    for (const value of input) this.samples.push(value);
    const ratio = sampleRate / 16000;
    while (this.position + 1 < this.samples.length) {
      const index = Math.floor(this.position), fraction = this.position - index;
      const value = Math.max(-1, Math.min(1, this.samples[index] * (1 - fraction) + this.samples[index + 1] * fraction));
      this.frame[this.used++] = value < 0 ? value * 32768 : value * 32767;
      this.position += ratio;
      if (this.used === 320) {
        const buffer = new ArrayBuffer(640), view = new DataView(buffer);
        for (let i = 0; i < 320; i++) view.setInt16(i * 2, this.frame[i], true);
        this.port.postMessage(buffer, [buffer]); this.used = 0;
      }
    }
    const consumed = Math.min(Math.floor(this.position), this.samples.length - 1);
    this.samples.splice(0, consumed); this.position -= consumed;
    return true;
  }
}
registerProcessor('moss-capture', MossCapture);
`;async function Vs(i,e,t){if(!i?.getUserMedia)throw Object.assign(new Error(t("browser.6")),{code:"MIC_UNAVAILABLE"});try{return await i.getUserMedia(e)}catch(n){let s={NotFoundError:["MIC_NOT_FOUND","media.notFound"],NotAllowedError:["MIC_PERMISSION_DENIED","media.denied"],SecurityError:["MIC_PERMISSION_DENIED","media.denied"],NotReadableError:["MIC_UNREADABLE","media.busy"],OverconstrainedError:["MIC_UNSUPPORTED","media.unsupported"]}[n.name];throw s?Object.assign(new Error(t(s[1])),{code:s[0]}):n}}function Rl(i,e,t,n=s=>s){return new Promise((s,r)=>{let a=new URL("/dsh-moss-live/ws",location.href);a.protocol=location.protocol==="https:"?"wss:":"ws:",a.searchParams.set("sessionId",i);let o=new WebSocket(a);o.binaryType="arraybuffer";let c=!1,l=!1,d=()=>{l=!0,o.close()},h=()=>{d(),r(new Error(n("browser.1")))},u={send(p){if(!(o.readyState!==WebSocket.OPEN||l)){if(o.bufferedAmount>512*1024){e({action:"moss.error",data:{message:n("browser.2")}}),d();return}o.send(p instanceof ArrayBuffer?p:JSON.stringify(p))}},close:d};t.addEventListener("abort",h,{once:!0}),o.onmessage=p=>{try{let x=p.data instanceof ArrayBuffer?p.data:JSON.parse(p.data);x.action==="moss.ready"?(c=!0,s({connection:u,format:x.data})):x.action==="moss.error"?c?e(x):r(Object.assign(new Error(x.data.message),{code:x.data.code})):e(x)}catch{r(new Error(n("browser.3"))),d()}},o.onerror=()=>{let p=n("browser.4");r(new Error(p)),c&&e({action:"moss.error",data:{message:p}})},o.onclose=()=>{if(t.removeEventListener("abort",h),!l){let p=n("browser.5");r(new Error(p)),c&&e({action:"moss.error",data:{message:p}})}},t.aborted&&h()})}async function Il(i,e,t,n,s=()=>{},r=a=>a){let a,o,c,l,d,h,u,p,x=0,v=()=>{clearInterval(p),c&&(c.port.onmessage=null),c?.disconnect(),l?.disconnect(),d?.disconnect(),a?.getTracks().forEach(m=>m.stop()),u?.dispose(),h&&(URL.revokeObjectURL(h),h=null),o&&o.state!=="closed"&&o.close().catch(()=>{})};try{a=await Vs(navigator.mediaDevices,{audio:{channelCount:1,echoCancellation:!0,noiseSuppression:!0,autoGainControl:!0}},r),n.throwIfAborted();let m=globalThis.AudioContext??globalThis.webkitAudioContext;if(o=new m({sampleRate:48e3}),await o.resume(),n.throwIfAborted(),!o.audioWorklet)throw new Error(r("browser.7"));return h=URL.createObjectURL(new Blob([Cl],{type:"application/javascript"})),await o.audioWorklet.addModule(h),URL.revokeObjectURL(h),h=null,n.throwIfAborted(),c=new AudioWorkletNode(o,"moss-capture"),l=o.createMediaStreamSource(a),d=o.createGain(),d.gain.value=0,l.connect(c),c.connect(d),d.connect(o.destination),c.port.onmessage=f=>{if(n.aborted)return;let E=new DataView(f.data),w=0;for(let T=0;T<E.byteLength;T+=2){let I=E.getInt16(T,!0)/32768;w+=I*I}x=Math.min(1,Math.sqrt(w/Math.max(1,E.byteLength/2))*4),e(f.data)},u=new zs(o,t,i.outputSampleRate,r),p=setInterval(()=>{n.aborted||s({inputLevel:x,outputLevel:u.level(),playing:u.seconds>0})},80),{playback:u,dispose:v,mute(f){a.getAudioTracks().forEach(E=>{E.enabled=!f})}}}catch(m){throw v(),m}}var Pl={"moss-voice":"m","moss-settings":"e","moss-composer":"c","moss-capsule":"l","moss-entry":"b","moss-enter":"u","moss-voice-head":"o","moss-wordmark":"q","moss-session-heading":"I","moss-session-title":"J","moss-voice-center":"g","moss-phase":"d","moss-wave":"a","moss-captions":"v","moss-user-caption":"K","moss-assistant-caption":"A","moss-error":"y","moss-voice-foot":"f","moss-controls":"t","moss-end":"L","moss-muted":"M","moss-start":"N","moss-voice-bar":"r","moss-return":"B","moss-bar-status":"x","moss-settings-dialog":"O","moss-settings-dialog-content":"P","moss-field":"k","moss-choice":"z","moss-appearance-editor":"D","moss-avatar-editor":"j","moss-avatar-placeholder":"Q","moss-avatar-action":"E","moss-connection-actions":"R","moss-microphone-toggle":"Y","moss-save-status":"S","moss-test-error":"T","moss-test-success":"U","moss-model-pair":"C","moss-breathe":"V","moss-particle":"X","moss-orb-wrap":"F","moss-orb-small":"W","moss-orb":"Z"};var Ge=(...i)=>i.filter(Boolean).flatMap(e=>e.split(/\s+/)).map(e=>Pl[e]??e).join(" ");var nt=pn(require("react"),1),za=require("@deepseek-ai/dsh-client-ui-primitives");var ot=pn(require("react"),1);var rc=0,Io=1,ac=2;var Po=1,oc=2,cn=3,bn=0,It=1,hn=2,un=0,ei=1,Lo=2,Do=3,Uo=4,lc=5,Bn=100,cc=101,hc=102,uc=103,dc=104,fc=200,pc=201,mc=202,xc=203,hr=204,ur=205,gc=206,_c=207,vc=208,yc=209,bc=210,Mc=211,Sc=212,wc=213,Ac=214,zr=0,Vr=1,kr=2,ti=3,Gr=4,Hr=5,Wr=6,Xr=7,No=0,Tc=1,Ec=2,wn=0,Cc=1,Rc=2,Ic=3,qr=4,Pc=5,Lc=6,Dc=7;var Fo=300,ai=301,oi=302,Yr=303,Zr=304,Ss=306,dr=1e3,an=1001,fr=1002,Nt=1003,Uc=1004;var ws=1005;var Wt=1006,Jr=1007;var Hn=1008;var sn=1009,Oo=1010,Bo=1011,Bi=1012,$r=1013,Wn=1014,dn=1015,li=1016,Kr=1017,jr=1018,zi=1020,zo=35902,Vo=35899,ko=1021,Go=1022,Jt=1023,Ci=1026,Vi=1027,Ho=1028,Qr=1029,ea=1030,ta=1031;var na=1033,As=33776,Ts=33777,Es=33778,Cs=33779,ia=35840,sa=35841,ra=35842,aa=35843,oa=36196,la=37492,ca=37496,ha=37808,ua=37809,da=37810,fa=37811,pa=37812,ma=37813,xa=37814,ga=37815,_a=37816,va=37817,ya=37818,ba=37819,Ma=37820,Sa=37821,wa=36492,Aa=36494,Ta=36495,Ea=36283,Ca=36284,Ra=36285,Ia=36286;var ts=2300,pr=2301,cr=2302,yo=2400,bo=2401,Mo=2402;var Nc=3200,Fc=3201;var Wo=0,Oc=1,An="",Ht="srgb",ni="srgb-linear",ns="linear",it="srgb";var jn=7680;var So=519,Bc=512,zc=513,Vc=514,Xo=515,kc=516,Gc=517,Hc=518,Wc=519,wo=35044,ki=35048;var qo="300 es",tn=2e3,is=2001;function Yo(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ss(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Xc(){let i=ss("canvas");return i.style.display="block",i}var Ll={},Ri=null;function Zo(...i){let e="THREE."+i.shift();Ri?Ri("log",e,...i):console.log(e,...i)}function ke(...i){let e="THREE."+i.shift();Ri?Ri("warn",e,...i):console.warn(e,...i)}function $e(...i){let e="THREE."+i.shift();Ri?Ri("error",e,...i):console.error(e,...i)}function Ii(...i){let e=i.join(" ");e in Ll||(Ll[e]=!0,ke(...i))}function qc(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Mn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Za=Math.PI/180,mr=180/Math.PI;function Rs(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Mt[i&255]+Mt[i>>8&255]+Mt[i>>16&255]+Mt[i>>24&255]+"-"+Mt[e&255]+Mt[e>>8&255]+"-"+Mt[e>>16&15|64]+Mt[e>>24&255]+"-"+Mt[t&63|128]+Mt[t>>8&255]+"-"+Mt[t>>16&255]+Mt[t>>24&255]+Mt[n&255]+Mt[n>>8&255]+Mt[n>>16&255]+Mt[n>>24&255]).toLowerCase()}function je(i,e,t){return Math.max(e,Math.min(t,i))}function Jh(i,e){return(i%e+e)%e}function Ja(i,e,t){return(1-t)*i+t*e}function Ji(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ut(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Qe=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Sn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],d=n[s+2],h=n[s+3],u=r[a+0],p=r[a+1],x=r[a+2],v=r[a+3];if(o<=0){e[t+0]=c,e[t+1]=l,e[t+2]=d,e[t+3]=h;return}if(o>=1){e[t+0]=u,e[t+1]=p,e[t+2]=x,e[t+3]=v;return}if(h!==v||c!==u||l!==p||d!==x){let m=c*u+l*p+d*x+h*v;m<0&&(u=-u,p=-p,x=-x,v=-v,m=-m);let f=1-o;if(m<.9995){let E=Math.acos(m),w=Math.sin(E);f=Math.sin(f*E)/w,o=Math.sin(o*E)/w,c=c*f+u*o,l=l*f+p*o,d=d*f+x*o,h=h*f+v*o}else{c=c*f+u*o,l=l*f+p*o,d=d*f+x*o,h=h*f+v*o;let E=1/Math.sqrt(c*c+l*l+d*d+h*h);c*=E,l*=E,d*=E,h*=E}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],d=n[s+3],h=r[a],u=r[a+1],p=r[a+2],x=r[a+3];return e[t]=o*x+d*h+c*p-l*u,e[t+1]=c*x+d*u+l*h-o*p,e[t+2]=l*x+d*p+o*u-c*h,e[t+3]=d*x-o*h-c*u-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),d=o(s/2),h=o(r/2),u=c(n/2),p=c(s/2),x=c(r/2);switch(a){case"XYZ":this._x=u*d*h+l*p*x,this._y=l*p*h-u*d*x,this._z=l*d*x+u*p*h,this._w=l*d*h-u*p*x;break;case"YXZ":this._x=u*d*h+l*p*x,this._y=l*p*h-u*d*x,this._z=l*d*x-u*p*h,this._w=l*d*h+u*p*x;break;case"ZXY":this._x=u*d*h-l*p*x,this._y=l*p*h+u*d*x,this._z=l*d*x+u*p*h,this._w=l*d*h-u*p*x;break;case"ZYX":this._x=u*d*h-l*p*x,this._y=l*p*h+u*d*x,this._z=l*d*x-u*p*h,this._w=l*d*h+u*p*x;break;case"YZX":this._x=u*d*h+l*p*x,this._y=l*p*h+u*d*x,this._z=l*d*x-u*p*h,this._w=l*d*h-u*p*x;break;case"XZY":this._x=u*d*h-l*p*x,this._y=l*p*h-u*d*x,this._z=l*d*x+u*p*h,this._w=l*d*h+u*p*x;break;default:ke("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],d=t[6],h=t[10],u=n+o+h;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(d-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(n>o&&n>h){let p=2*Math.sqrt(1+n-o-h);this._w=(d-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>h){let p=2*Math.sqrt(1+o-n-h);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+d)/p}else{let p=2*Math.sqrt(1+h-n-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,d=t._w;return this._x=n*d+a*o+s*l-r*c,this._y=s*d+a*c+r*o-n*l,this._z=r*d+a*l+n*c-s*o,this._w=a*d-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),d=Math.sin(l);c=Math.sin(c*l)/d,t=Math.sin(t*l)/d,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},W=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Dl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Dl.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),d=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+c*l+a*h-o*d,this.y=n+c*d+o*l-r*h,this.z=s+c*h+r*d-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return $a.copy(this).projectOnVector(e),this.sub($a)}reflect(e){return this.sub($a.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},$a=new W,Dl=new Sn,qe=class i{constructor(e,t,n,s,r,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let d=this.elements;return d[0]=e,d[1]=s,d[2]=o,d[3]=t,d[4]=r,d[5]=c,d[6]=n,d[7]=a,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],d=n[4],h=n[7],u=n[2],p=n[5],x=n[8],v=s[0],m=s[3],f=s[6],E=s[1],w=s[4],T=s[7],I=s[2],M=s[5],C=s[8];return r[0]=a*v+o*E+c*I,r[3]=a*m+o*w+c*M,r[6]=a*f+o*T+c*C,r[1]=l*v+d*E+h*I,r[4]=l*m+d*w+h*M,r[7]=l*f+d*T+h*C,r[2]=u*v+p*E+x*I,r[5]=u*m+p*w+x*M,r[8]=u*f+p*T+x*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8];return t*a*d-t*o*l-n*r*d+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8],h=d*a-o*l,u=o*c-d*r,p=l*r-a*c,x=t*h+n*u+s*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/x;return e[0]=h*v,e[1]=(s*l-d*n)*v,e[2]=(o*n-s*a)*v,e[3]=u*v,e[4]=(d*t-s*c)*v,e[5]=(s*r-o*t)*v,e[6]=p*v,e[7]=(n*c-l*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ka.makeScale(e,t)),this}rotate(e){return this.premultiply(Ka.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ka.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ka=new qe,Ul=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nl=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $h(){let i={enabled:!0,workingColorSpace:ni,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===it&&(s.r=yn(s.r),s.g=yn(s.g),s.b=yn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===it&&(s.r=Ei(s.r),s.g=Ei(s.g),s.b=Ei(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===An?ns:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ii("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ii("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ni]:{primaries:e,whitePoint:n,transfer:ns,toXYZ:Ul,fromXYZ:Nl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ht},outputColorSpaceConfig:{drawingBufferColorSpace:Ht}},[Ht]:{primaries:e,whitePoint:n,transfer:it,toXYZ:Ul,fromXYZ:Nl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ht}}}),i}var et=$h();function yn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ei(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var mi,xr=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{mi===void 0&&(mi=ss("canvas")),mi.width=e.width,mi.height=e.height;let s=mi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=mi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ss("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=yn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(yn(t[n]/255)*255):t[n]=yn(t[n]);return{data:t,width:e.width,height:e.height}}else return ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Kh=0,Pi=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Kh++}),this.uuid=Rs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ja(s[a].image)):r.push(ja(s[a]))}else r=ja(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function ja(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?xr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ke("Texture: Unable to serialize Texture."),{})}var jh=0,Qa=new W,Ft=class i extends Mn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=an,s=an,r=Wt,a=Hn,o=Jt,c=sn,l=i.DEFAULT_ANISOTROPY,d=An){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jh++}),this.uuid=Rs(),this.name="",this.source=new Pi(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Qa).x}get height(){return this.source.getSize(Qa).y}get depth(){return this.source.getSize(Qa).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){ke(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ke(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Fo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case dr:e.x=e.x-Math.floor(e.x);break;case an:e.x=e.x<0?0:1;break;case fr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case dr:e.y=e.y-Math.floor(e.y);break;case an:e.y=e.y<0?0:1;break;case fr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ft.DEFAULT_IMAGE=null;Ft.DEFAULT_MAPPING=Fo;Ft.DEFAULT_ANISOTROPY=1;var ft=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],d=c[4],h=c[8],u=c[1],p=c[5],x=c[9],v=c[2],m=c[6],f=c[10];if(Math.abs(d-u)<.01&&Math.abs(h-v)<.01&&Math.abs(x-m)<.01){if(Math.abs(d+u)<.1&&Math.abs(h+v)<.1&&Math.abs(x+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(l+1)/2,T=(p+1)/2,I=(f+1)/2,M=(d+u)/4,C=(h+v)/4,D=(x+m)/4;return w>T&&w>I?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=M/n,r=C/n):T>I?T<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),n=M/s,r=D/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=C/r,s=D/r),this.set(n,s,r,t),this}let E=Math.sqrt((m-x)*(m-x)+(h-v)*(h-v)+(u-d)*(u-d));return Math.abs(E)<.001&&(E=1),this.x=(m-x)/E,this.y=(h-v)/E,this.z=(u-d)/E,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},gr=class extends Mn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new Ft(s);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:Wt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Pi(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},on=class extends gr{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},rs=class extends Ft{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var _r=class extends Ft{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var zn=class{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(jt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(jt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=jt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,jt):jt.fromBufferAttribute(r,a),jt.applyMatrix4(e.matrixWorld),this.expandByPoint(jt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ks.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ks.copy(n.boundingBox)),ks.applyMatrix4(e.matrixWorld),this.union(ks)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,jt),jt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($i),Gs.subVectors(this.max,$i),xi.subVectors(e.a,$i),gi.subVectors(e.b,$i),_i.subVectors(e.c,$i),Pn.subVectors(gi,xi),Ln.subVectors(_i,gi),Zn.subVectors(xi,_i);let t=[0,-Pn.z,Pn.y,0,-Ln.z,Ln.y,0,-Zn.z,Zn.y,Pn.z,0,-Pn.x,Ln.z,0,-Ln.x,Zn.z,0,-Zn.x,-Pn.y,Pn.x,0,-Ln.y,Ln.x,0,-Zn.y,Zn.x,0];return!eo(t,xi,gi,_i,Gs)||(t=[1,0,0,0,1,0,0,0,1],!eo(t,xi,gi,_i,Gs))?!1:(Hs.crossVectors(Pn,Ln),t=[Hs.x,Hs.y,Hs.z],eo(t,xi,gi,_i,Gs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},mn=[new W,new W,new W,new W,new W,new W,new W,new W],jt=new W,ks=new zn,xi=new W,gi=new W,_i=new W,Pn=new W,Ln=new W,Zn=new W,$i=new W,Gs=new W,Hs=new W,Jn=new W;function eo(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Jn.fromArray(i,r);let o=s.x*Math.abs(Jn.x)+s.y*Math.abs(Jn.y)+s.z*Math.abs(Jn.z),c=e.dot(Jn),l=t.dot(Jn),d=n.dot(Jn);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>o)return!1}return!0}var Qh=new zn,Ki=new W,to=new W,Vn=class{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Qh.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ki.subVectors(e,this.center);let t=Ki.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ki,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(to.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ki.copy(e.center).add(to)),this.expandByPoint(Ki.copy(e.center).sub(to))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},xn=new W,no=new W,Ws=new W,Dn=new W,io=new W,Xs=new W,so=new W,ii=class{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xn.copy(this.origin).addScaledVector(this.direction,t),xn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){no.copy(e).add(t).multiplyScalar(.5),Ws.copy(t).sub(e).normalize(),Dn.copy(this.origin).sub(no);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Ws),o=Dn.dot(this.direction),c=-Dn.dot(Ws),l=Dn.lengthSq(),d=Math.abs(1-a*a),h,u,p,x;if(d>0)if(h=a*c-o,u=a*o-c,x=r*d,h>=0)if(u>=-x)if(u<=x){let v=1/d;h*=v,u*=v,p=h*(h+a*u+2*o)+u*(a*h+u+2*c)+l}else u=r,h=Math.max(0,-(a*u+o)),p=-h*h+u*(u+2*c)+l;else u=-r,h=Math.max(0,-(a*u+o)),p=-h*h+u*(u+2*c)+l;else u<=-x?(h=Math.max(0,-(-a*r+o)),u=h>0?-r:Math.min(Math.max(-r,-c),r),p=-h*h+u*(u+2*c)+l):u<=x?(h=0,u=Math.min(Math.max(-r,-c),r),p=u*(u+2*c)+l):(h=Math.max(0,-(a*r+o)),u=h>0?r:Math.min(Math.max(-r,-c),r),p=-h*h+u*(u+2*c)+l);else u=a>0?-r:r,h=Math.max(0,-(a*u+o)),p=-h*h+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(no).addScaledVector(Ws,u),p}intersectSphere(e,t){xn.subVectors(e.center,this.origin);let n=xn.dot(this.direction),s=xn.dot(xn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,s=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,s=(e.min.x-u.x)*l),d>=0?(r=(e.min.y-u.y)*d,a=(e.max.y-u.y)*d):(r=(e.max.y-u.y)*d,a=(e.min.y-u.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-u.z)*h,c=(e.max.z-u.z)*h):(o=(e.max.z-u.z)*h,c=(e.min.z-u.z)*h),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,xn)!==null}intersectTriangle(e,t,n,s,r){io.subVectors(t,e),Xs.subVectors(n,e),so.crossVectors(io,Xs);let a=this.direction.dot(so),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Dn.subVectors(this.origin,e);let c=o*this.direction.dot(Xs.crossVectors(Dn,Xs));if(c<0)return null;let l=o*this.direction.dot(io.cross(Dn));if(l<0||c+l>a)return null;let d=-o*Dn.dot(so);return d<0?null:this.at(d/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ht=class i{constructor(e,t,n,s,r,a,o,c,l,d,h,u,p,x,v,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,d,h,u,p,x,v,m)}set(e,t,n,s,r,a,o,c,l,d,h,u,p,x,v,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=d,f[10]=h,f[14]=u,f[3]=p,f[7]=x,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/vi.setFromMatrixColumn(e,0).length(),r=1/vi.setFromMatrixColumn(e,1).length(),a=1/vi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),d=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let u=a*d,p=a*h,x=o*d,v=o*h;t[0]=c*d,t[4]=-c*h,t[8]=l,t[1]=p+x*l,t[5]=u-v*l,t[9]=-o*c,t[2]=v-u*l,t[6]=x+p*l,t[10]=a*c}else if(e.order==="YXZ"){let u=c*d,p=c*h,x=l*d,v=l*h;t[0]=u+v*o,t[4]=x*o-p,t[8]=a*l,t[1]=a*h,t[5]=a*d,t[9]=-o,t[2]=p*o-x,t[6]=v+u*o,t[10]=a*c}else if(e.order==="ZXY"){let u=c*d,p=c*h,x=l*d,v=l*h;t[0]=u-v*o,t[4]=-a*h,t[8]=x+p*o,t[1]=p+x*o,t[5]=a*d,t[9]=v-u*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let u=a*d,p=a*h,x=o*d,v=o*h;t[0]=c*d,t[4]=x*l-p,t[8]=u*l+v,t[1]=c*h,t[5]=v*l+u,t[9]=p*l-x,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let u=a*c,p=a*l,x=o*c,v=o*l;t[0]=c*d,t[4]=v-u*h,t[8]=x*h+p,t[1]=h,t[5]=a*d,t[9]=-o*d,t[2]=-l*d,t[6]=p*h+x,t[10]=u-v*h}else if(e.order==="XZY"){let u=a*c,p=a*l,x=o*c,v=o*l;t[0]=c*d,t[4]=-h,t[8]=l*d,t[1]=u*h+v,t[5]=a*d,t[9]=p*h-x,t[2]=x*h-p,t[6]=o*d,t[10]=v*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(eu,e,tu)}lookAt(e,t,n){let s=this.elements;return kt.subVectors(e,t),kt.lengthSq()===0&&(kt.z=1),kt.normalize(),Un.crossVectors(n,kt),Un.lengthSq()===0&&(Math.abs(n.z)===1?kt.x+=1e-4:kt.z+=1e-4,kt.normalize(),Un.crossVectors(n,kt)),Un.normalize(),qs.crossVectors(kt,Un),s[0]=Un.x,s[4]=qs.x,s[8]=kt.x,s[1]=Un.y,s[5]=qs.y,s[9]=kt.y,s[2]=Un.z,s[6]=qs.z,s[10]=kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],d=n[1],h=n[5],u=n[9],p=n[13],x=n[2],v=n[6],m=n[10],f=n[14],E=n[3],w=n[7],T=n[11],I=n[15],M=s[0],C=s[4],D=s[8],S=s[12],b=s[1],P=s[5],G=s[9],q=s[13],K=s[2],k=s[6],j=s[10],ce=s[14],V=s[3],ne=s[7],ue=s[11],Ce=s[15];return r[0]=a*M+o*b+c*K+l*V,r[4]=a*C+o*P+c*k+l*ne,r[8]=a*D+o*G+c*j+l*ue,r[12]=a*S+o*q+c*ce+l*Ce,r[1]=d*M+h*b+u*K+p*V,r[5]=d*C+h*P+u*k+p*ne,r[9]=d*D+h*G+u*j+p*ue,r[13]=d*S+h*q+u*ce+p*Ce,r[2]=x*M+v*b+m*K+f*V,r[6]=x*C+v*P+m*k+f*ne,r[10]=x*D+v*G+m*j+f*ue,r[14]=x*S+v*q+m*ce+f*Ce,r[3]=E*M+w*b+T*K+I*V,r[7]=E*C+w*P+T*k+I*ne,r[11]=E*D+w*G+T*j+I*ue,r[15]=E*S+w*q+T*ce+I*Ce,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],d=e[2],h=e[6],u=e[10],p=e[14],x=e[3],v=e[7],m=e[11],f=e[15];return x*(+r*c*h-s*l*h-r*o*u+n*l*u+s*o*p-n*c*p)+v*(+t*c*p-t*l*u+r*a*u-s*a*p+s*l*d-r*c*d)+m*(+t*l*h-t*o*p-r*a*h+n*a*p+r*o*d-n*l*d)+f*(-s*o*d-t*c*h+t*o*u+s*a*h-n*a*u+n*c*d)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8],h=e[9],u=e[10],p=e[11],x=e[12],v=e[13],m=e[14],f=e[15],E=h*m*l-v*u*l+v*c*p-o*m*p-h*c*f+o*u*f,w=x*u*l-d*m*l-x*c*p+a*m*p+d*c*f-a*u*f,T=d*v*l-x*h*l+x*o*p-a*v*p-d*o*f+a*h*f,I=x*h*c-d*v*c-x*o*u+a*v*u+d*o*m-a*h*m,M=t*E+n*w+s*T+r*I;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/M;return e[0]=E*C,e[1]=(v*u*r-h*m*r-v*s*p+n*m*p+h*s*f-n*u*f)*C,e[2]=(o*m*r-v*c*r+v*s*l-n*m*l-o*s*f+n*c*f)*C,e[3]=(h*c*r-o*u*r-h*s*l+n*u*l+o*s*p-n*c*p)*C,e[4]=w*C,e[5]=(d*m*r-x*u*r+x*s*p-t*m*p-d*s*f+t*u*f)*C,e[6]=(x*c*r-a*m*r-x*s*l+t*m*l+a*s*f-t*c*f)*C,e[7]=(a*u*r-d*c*r+d*s*l-t*u*l-a*s*p+t*c*p)*C,e[8]=T*C,e[9]=(x*h*r-d*v*r-x*n*p+t*v*p+d*n*f-t*h*f)*C,e[10]=(a*v*r-x*o*r+x*n*l-t*v*l-a*n*f+t*o*f)*C,e[11]=(d*o*r-a*h*r-d*n*l+t*h*l+a*n*p-t*o*p)*C,e[12]=I*C,e[13]=(d*v*s-x*h*s+x*n*u-t*v*u-d*n*m+t*h*m)*C,e[14]=(x*o*s-a*v*s-x*n*c+t*v*c+a*n*m-t*o*m)*C,e[15]=(a*h*s-d*o*s+d*n*c-t*h*c-a*n*u+t*o*u)*C,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,d=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,d*o+n,d*c-s*a,0,l*c-s*o,d*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,d=a+a,h=o+o,u=r*l,p=r*d,x=r*h,v=a*d,m=a*h,f=o*h,E=c*l,w=c*d,T=c*h,I=n.x,M=n.y,C=n.z;return s[0]=(1-(v+f))*I,s[1]=(p+T)*I,s[2]=(x-w)*I,s[3]=0,s[4]=(p-T)*M,s[5]=(1-(u+f))*M,s[6]=(m+E)*M,s[7]=0,s[8]=(x+w)*C,s[9]=(m-E)*C,s[10]=(1-(u+v))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=vi.set(s[0],s[1],s[2]).length(),a=vi.set(s[4],s[5],s[6]).length(),o=vi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Qt.copy(this);let l=1/r,d=1/a,h=1/o;return Qt.elements[0]*=l,Qt.elements[1]*=l,Qt.elements[2]*=l,Qt.elements[4]*=d,Qt.elements[5]*=d,Qt.elements[6]*=d,Qt.elements[8]*=h,Qt.elements[9]*=h,Qt.elements[10]*=h,t.setFromRotationMatrix(Qt),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=tn,c=!1){let l=this.elements,d=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),p=(n+s)/(n-s),x,v;if(c)x=r/(a-r),v=a*r/(a-r);else if(o===tn)x=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===is)x=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=x,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=tn,c=!1){let l=this.elements,d=2/(t-e),h=2/(n-s),u=-(t+e)/(t-e),p=-(n+s)/(n-s),x,v;if(c)x=1/(a-r),v=a/(a-r);else if(o===tn)x=-2/(a-r),v=-(a+r)/(a-r);else if(o===is)x=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=h,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=x,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},vi=new W,Qt=new ht,eu=new W(0,0,0),tu=new W(1,1,1),Un=new W,qs=new W,kt=new W,Fl=new ht,Ol=new Sn,nn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],d=s[9],h=s[2],u=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-je(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(je(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,p),this._y=0);break;default:ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Fl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ol.setFromEuler(this),this.setFromQuaternion(Ol,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};nn.DEFAULT_ORDER="XYZ";var Li=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},nu=0,Bl=new W,yi=new Sn,gn=new ht,Ys=new W,ji=new W,iu=new W,su=new Sn,zl=new W(1,0,0),Vl=new W(0,1,0),kl=new W(0,0,1),Gl={type:"added"},ru={type:"removed"},bi={type:"childadded",child:null},ro={type:"childremoved",child:null},bt=class i extends Mn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nu++}),this.uuid=Rs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new W,t=new nn,n=new Sn,s=new W(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ht},normalMatrix:{value:new qe}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Li,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return yi.setFromAxisAngle(e,t),this.quaternion.multiply(yi),this}rotateOnWorldAxis(e,t){return yi.setFromAxisAngle(e,t),this.quaternion.premultiply(yi),this}rotateX(e){return this.rotateOnAxis(zl,e)}rotateY(e){return this.rotateOnAxis(Vl,e)}rotateZ(e){return this.rotateOnAxis(kl,e)}translateOnAxis(e,t){return Bl.copy(e).applyQuaternion(this.quaternion),this.position.add(Bl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(zl,e)}translateY(e){return this.translateOnAxis(Vl,e)}translateZ(e){return this.translateOnAxis(kl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ys.copy(e):Ys.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ji.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gn.lookAt(ji,Ys,this.up):gn.lookAt(Ys,ji,this.up),this.quaternion.setFromRotationMatrix(gn),s&&(gn.extractRotation(s.matrixWorld),yi.setFromRotationMatrix(gn),this.quaternion.premultiply(yi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?($e("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Gl),bi.child=e,this.dispatchEvent(bi),bi.child=null):$e("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ru),ro.child=e,this.dispatchEvent(ro),ro.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gn.multiply(e.parent.matrixWorld)),e.applyMatrix4(gn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Gl),bi.child=e,this.dispatchEvent(bi),bi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ji,e,iu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ji,su,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){let h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),d=a(e.images),h=a(e.shapes),u=a(e.skeletons),p=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){let c=[];for(let l in o){let d=o[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};bt.DEFAULT_UP=new W(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var en=new W,_n=new W,ao=new W,vn=new W,Mi=new W,Si=new W,Hl=new W,oo=new W,lo=new W,co=new W,ho=new ft,uo=new ft,fo=new ft,On=class i{constructor(e=new W,t=new W,n=new W){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),en.subVectors(e,t),s.cross(en);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){en.subVectors(s,t),_n.subVectors(n,t),ao.subVectors(e,t);let a=en.dot(en),o=en.dot(_n),c=en.dot(ao),l=_n.dot(_n),d=_n.dot(ao),h=a*l-o*o;if(h===0)return r.set(0,0,0),null;let u=1/h,p=(l*c-o*d)*u,x=(a*d-o*c)*u;return r.set(1-p-x,x,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,vn)===null?!1:vn.x>=0&&vn.y>=0&&vn.x+vn.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,vn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,vn.x),c.addScaledVector(a,vn.y),c.addScaledVector(o,vn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return ho.setScalar(0),uo.setScalar(0),fo.setScalar(0),ho.fromBufferAttribute(e,t),uo.fromBufferAttribute(e,n),fo.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(ho,r.x),a.addScaledVector(uo,r.y),a.addScaledVector(fo,r.z),a}static isFrontFacing(e,t,n,s){return en.subVectors(n,t),_n.subVectors(e,t),en.cross(_n).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return en.subVectors(this.c,this.b),_n.subVectors(this.a,this.b),en.cross(_n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Mi.subVectors(s,n),Si.subVectors(r,n),oo.subVectors(e,n);let c=Mi.dot(oo),l=Si.dot(oo);if(c<=0&&l<=0)return t.copy(n);lo.subVectors(e,s);let d=Mi.dot(lo),h=Si.dot(lo);if(d>=0&&h<=d)return t.copy(s);let u=c*h-d*l;if(u<=0&&c>=0&&d<=0)return a=c/(c-d),t.copy(n).addScaledVector(Mi,a);co.subVectors(e,r);let p=Mi.dot(co),x=Si.dot(co);if(x>=0&&p<=x)return t.copy(r);let v=p*l-c*x;if(v<=0&&l>=0&&x<=0)return o=l/(l-x),t.copy(n).addScaledVector(Si,o);let m=d*x-p*h;if(m<=0&&h-d>=0&&p-x>=0)return Hl.subVectors(r,s),o=(h-d)/(h-d+(p-x)),t.copy(s).addScaledVector(Hl,o);let f=1/(m+v+u);return a=v*f,o=u*f,t.copy(n).addScaledVector(Mi,a).addScaledVector(Si,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Yc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Nn={h:0,s:0,l:0},Zs={h:0,s:0,l:0};function po(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Xe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=et.workingColorSpace){return this.r=e,this.g=t,this.b=n,et.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=et.workingColorSpace){if(e=Jh(e,1),t=je(t,0,1),n=je(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=po(a,r,e+1/3),this.g=po(a,r,e),this.b=po(a,r,e-1/3)}return et.colorSpaceToWorking(this,s),this}setStyle(e,t=Ht){function n(r){r!==void 0&&parseFloat(r)<1&&ke("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:ke("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ht){let n=Yc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yn(e.r),this.g=yn(e.g),this.b=yn(e.b),this}copyLinearToSRGB(e){return this.r=Ei(e.r),this.g=Ei(e.g),this.b=Ei(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ht){return et.workingToColorSpace(St.copy(this),e),Math.round(je(St.r*255,0,255))*65536+Math.round(je(St.g*255,0,255))*256+Math.round(je(St.b*255,0,255))}getHexString(e=Ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.workingToColorSpace(St.copy(this),t);let n=St.r,s=St.g,r=St.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,d=(o+a)/2;if(o===a)c=0,l=0;else{let h=a-o;switch(l=d<=.5?h/(a+o):h/(2-a-o),a){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,t=et.workingColorSpace){return et.workingToColorSpace(St.copy(this),t),e.r=St.r,e.g=St.g,e.b=St.b,e}getStyle(e=Ht){et.workingToColorSpace(St.copy(this),e);let t=St.r,n=St.g,s=St.b;return e!==Ht?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Nn),this.setHSL(Nn.h+e,Nn.s+t,Nn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Nn),e.getHSL(Zs);let n=Ja(Nn.h,Zs.h,t),s=Ja(Nn.s,Zs.s,t),r=Ja(Nn.l,Zs.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},St=new Xe;Xe.NAMES=Yc;var au=0,ln=class extends Mn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:au++}),this.uuid=Rs(),this.name="",this.type="Material",this.blending=ei,this.side=bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hr,this.blendDst=ur,this.blendEquation=Bn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=ti,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=So,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jn,this.stencilZFail=jn,this.stencilZPass=jn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){ke(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ke(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ei&&(n.blending=this.blending),this.side!==bn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==hr&&(n.blendSrc=this.blendSrc),this.blendDst!==ur&&(n.blendDst=this.blendDst),this.blendEquation!==Bn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ti&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==So&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==jn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==jn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==jn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},si=class extends ln{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.combine=No,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var xt=new W,Js=new Qe,ou=0,gt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ou++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=wo,this.updateRanges=[],this.gpuType=dn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Js.fromBufferAttribute(this,t),Js.applyMatrix3(e),this.setXY(t,Js.x,Js.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ji(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ut(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ji(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ji(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ji(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ji(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),s=Ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),s=Ut(s,this.array),r=Ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wo&&(e.usage=this.usage),e}};var as=class extends gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var os=class extends gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ct=class extends gt{constructor(e,t,n){super(new Float32Array(e),t,n)}},lu=0,Yt=new ht,mo=new bt,wi=new W,Gt=new zn,Qi=new zn,yt=new W,Rt=class i extends Mn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lu++}),this.uuid=Rs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Yo(e)?os:as)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yt.makeRotationFromQuaternion(e),this.applyMatrix4(Yt),this}rotateX(e){return Yt.makeRotationX(e),this.applyMatrix4(Yt),this}rotateY(e){return Yt.makeRotationY(e),this.applyMatrix4(Yt),this}rotateZ(e){return Yt.makeRotationZ(e),this.applyMatrix4(Yt),this}translate(e,t,n){return Yt.makeTranslation(e,t,n),this.applyMatrix4(Yt),this}scale(e,t,n){return Yt.makeScale(e,t,n),this.applyMatrix4(Yt),this}lookAt(e){return mo.lookAt(e),mo.updateMatrix(),this.applyMatrix4(mo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wi).negate(),this.translate(wi.x,wi.y,wi.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ct(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Gt.setFromBufferAttribute(r),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,Gt.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,Gt.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint(Gt.min),this.boundingBox.expandByPoint(Gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$e('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){let n=this.boundingSphere.center;if(Gt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Qi.setFromBufferAttribute(o),this.morphTargetsRelative?(yt.addVectors(Gt.min,Qi.min),Gt.expandByPoint(yt),yt.addVectors(Gt.max,Qi.max),Gt.expandByPoint(yt)):(Gt.expandByPoint(Qi.min),Gt.expandByPoint(Qi.max))}Gt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)yt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(yt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,d=o.count;l<d;l++)yt.fromBufferAttribute(o,l),c&&(wi.fromBufferAttribute(e,l),yt.add(wi)),s=Math.max(s,n.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&$e('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){$e("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let D=0;D<n.count;D++)o[D]=new W,c[D]=new W;let l=new W,d=new W,h=new W,u=new Qe,p=new Qe,x=new Qe,v=new W,m=new W;function f(D,S,b){l.fromBufferAttribute(n,D),d.fromBufferAttribute(n,S),h.fromBufferAttribute(n,b),u.fromBufferAttribute(r,D),p.fromBufferAttribute(r,S),x.fromBufferAttribute(r,b),d.sub(l),h.sub(l),p.sub(u),x.sub(u);let P=1/(p.x*x.y-x.x*p.y);isFinite(P)&&(v.copy(d).multiplyScalar(x.y).addScaledVector(h,-p.y).multiplyScalar(P),m.copy(h).multiplyScalar(p.x).addScaledVector(d,-x.x).multiplyScalar(P),o[D].add(v),o[S].add(v),o[b].add(v),c[D].add(m),c[S].add(m),c[b].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let D=0,S=E.length;D<S;++D){let b=E[D],P=b.start,G=b.count;for(let q=P,K=P+G;q<K;q+=3)f(e.getX(q+0),e.getX(q+1),e.getX(q+2))}let w=new W,T=new W,I=new W,M=new W;function C(D){I.fromBufferAttribute(s,D),M.copy(I);let S=o[D];w.copy(S),w.sub(I.multiplyScalar(I.dot(S))).normalize(),T.crossVectors(M,S);let P=T.dot(c[D])<0?-1:1;a.setXYZW(D,w.x,w.y,w.z,P)}for(let D=0,S=E.length;D<S;++D){let b=E[D],P=b.start,G=b.count;for(let q=P,K=P+G;q<K;q+=3)C(e.getX(q+0)),C(e.getX(q+1)),C(e.getX(q+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new gt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);let s=new W,r=new W,a=new W,o=new W,c=new W,l=new W,d=new W,h=new W;if(e)for(let u=0,p=e.count;u<p;u+=3){let x=e.getX(u+0),v=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),d.subVectors(a,r),h.subVectors(s,r),d.cross(h),o.fromBufferAttribute(n,x),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),o.add(d),c.add(d),l.add(d),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,p=t.count;u<p;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),d.subVectors(a,r),h.subVectors(s,r),d.cross(h),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)yt.fromBufferAttribute(e,t),yt.normalize(),e.setXYZ(t,yt.x,yt.y,yt.z)}toNonIndexed(){function e(o,c){let l=o.array,d=o.itemSize,h=o.normalized,u=new l.constructor(c.length*d),p=0,x=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?p=c[v]*o.data.stride+o.offset:p=c[v]*d;for(let f=0;f<d;f++)u[x++]=l[p++]}return new gt(u,d,h)}if(this.index===null)return ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let d=0,h=l.length;d<h;d++){let u=l[d],p=e(u,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],d=[];for(let h=0,u=l.length;h<u;h++){let p=l[h];d.push(p.toJSON(e.data))}d.length>0&&(s[c]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let d=s[l];this.setAttribute(l,d.clone(t))}let r=e.morphAttributes;for(let l in r){let d=[],h=r[l];for(let u=0,p=h.length;u<p;u++)d.push(h[u].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,d=a.length;l<d;l++){let h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wl=new ht,$n=new ii,$s=new Vn,Xl=new W,Ks=new W,js=new W,Qs=new W,xo=new W,er=new W,ql=new W,tr=new W,Ot=class extends bt{constructor(e=new Rt,t=new si){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){er.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let d=o[c],h=r[c];d!==0&&(xo.fromBufferAttribute(h,e),a?er.addScaledVector(xo,d):er.addScaledVector(xo.sub(t),d))}t.add(er)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$s.copy(n.boundingSphere),$s.applyMatrix4(r),$n.copy(e.ray).recast(e.near),!($s.containsPoint($n.origin)===!1&&($n.intersectSphere($s,Xl)===null||$n.origin.distanceToSquared(Xl)>(e.far-e.near)**2))&&(Wl.copy(r).invert(),$n.copy(e.ray).applyMatrix4(Wl),!(n.boundingBox!==null&&$n.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,$n)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,d=r.attributes.uv1,h=r.attributes.normal,u=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,v=u.length;x<v;x++){let m=u[x],f=a[m.materialIndex],E=Math.max(m.start,p.start),w=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let T=E,I=w;T<I;T+=3){let M=o.getX(T),C=o.getX(T+1),D=o.getX(T+2);s=nr(this,f,e,n,l,d,h,M,C,D),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let x=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=x,f=v;m<f;m+=3){let E=o.getX(m),w=o.getX(m+1),T=o.getX(m+2);s=nr(this,a,e,n,l,d,h,E,w,T),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let x=0,v=u.length;x<v;x++){let m=u[x],f=a[m.materialIndex],E=Math.max(m.start,p.start),w=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let T=E,I=w;T<I;T+=3){let M=T,C=T+1,D=T+2;s=nr(this,f,e,n,l,d,h,M,C,D),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let x=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let m=x,f=v;m<f;m+=3){let E=m,w=m+1,T=m+2;s=nr(this,a,e,n,l,d,h,E,w,T),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function cu(i,e,t,n,s,r,a,o){let c;if(e.side===It?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===bn,o),c===null)return null;tr.copy(o),tr.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(tr);return l<t.near||l>t.far?null:{distance:l,point:tr.clone(),object:i}}function nr(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,Ks),i.getVertexPosition(c,js),i.getVertexPosition(l,Qs);let d=cu(i,e,t,n,Ks,js,Qs,ql);if(d){let h=new W;On.getBarycoord(ql,Ks,js,Qs,h),s&&(d.uv=On.getInterpolatedAttribute(s,o,c,l,h,new Qe)),r&&(d.uv1=On.getInterpolatedAttribute(r,o,c,l,h,new Qe)),a&&(d.normal=On.getInterpolatedAttribute(a,o,c,l,h,new W),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new W,materialIndex:0};On.getNormal(Ks,js,Qs,u.normal),d.face=u,d.barycoord=h}return d}var Di=class i extends Rt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],d=[],h=[],u=0,p=0;x("z","y","x",-1,-1,n,t,e,a,r,0),x("z","y","x",1,-1,n,t,-e,a,r,1),x("x","z","y",1,1,e,n,t,s,a,2),x("x","z","y",1,-1,e,n,-t,s,a,3),x("x","y","z",1,-1,e,t,n,s,r,4),x("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Ct(l,3)),this.setAttribute("normal",new Ct(d,3)),this.setAttribute("uv",new Ct(h,2));function x(v,m,f,E,w,T,I,M,C,D,S){let b=T/C,P=I/D,G=T/2,q=I/2,K=M/2,k=C+1,j=D+1,ce=0,V=0,ne=new W;for(let ue=0;ue<j;ue++){let Ce=ue*P-q;for(let We=0;We<k;We++){let Ye=We*b-G;ne[v]=Ye*E,ne[m]=Ce*w,ne[f]=K,l.push(ne.x,ne.y,ne.z),ne[v]=0,ne[m]=0,ne[f]=M>0?1:-1,d.push(ne.x,ne.y,ne.z),h.push(We/C),h.push(1-ue/D),ce+=1}}for(let ue=0;ue<D;ue++)for(let Ce=0;Ce<C;Ce++){let We=u+Ce+k*ue,Ye=u+Ce+k*(ue+1),De=u+(Ce+1)+k*(ue+1),Je=u+(Ce+1)+k*ue;c.push(We,Ye,Je),c.push(Ye,De,Je),V+=6}o.addGroup(p,V,S),p+=V,u+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ci(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function At(i){let e={};for(let t=0;t<i.length;t++){let n=ci(i[t]);for(let s in n)e[s]=n[s]}return e}function hu(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Jo(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}var Zc={clone:ci,merge:At},uu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,du=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Bt=class extends ln{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uu,this.fragmentShader=du,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ci(e.uniforms),this.uniformsGroups=hu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},ls=class extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=tn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Fn=new W,Yl=new Qe,Zl=new Qe,wt=class extends ls{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=mr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Za*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return mr*2*Math.atan(Math.tan(Za*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Fn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Fn.x,Fn.y).multiplyScalar(-e/Fn.z),Fn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fn.x,Fn.y).multiplyScalar(-e/Fn.z)}getViewSize(e,t){return this.getViewBounds(e,Yl,Zl),t.subVectors(Zl,Yl)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Za*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ai=-90,Ti=1,vr=class extends bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new wt(Ai,Ti,e,t);s.layers=this.layers,this.add(s);let r=new wt(Ai,Ti,e,t);r.layers=this.layers,this.add(r);let a=new wt(Ai,Ti,e,t);a.layers=this.layers,this.add(a);let o=new wt(Ai,Ti,e,t);o.layers=this.layers,this.add(o);let c=new wt(Ai,Ti,e,t);c.layers=this.layers,this.add(c);let l=new wt(Ai,Ti,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===tn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===is)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,d]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,d),e.setRenderTarget(h,u,p),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},cs=class extends Ft{constructor(e=[],t=ai,n,s,r,a,o,c,l,d){super(e,t,n,s,r,a,o,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},yr=class extends on{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new cs(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Di(5,5,5),r=new Bt({name:"CubemapFromEquirect",uniforms:ci(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:It,blending:un});r.uniforms.tEquirect.value=t;let a=new Ot(s,r),o=t.minFilter;return t.minFilter===Hn&&(t.minFilter=Wt),new vr(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Qn=class extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}},fu={type:"move"},Ui=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,n),f=this._getHandJoint(l,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let d=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],u=d.position.distanceTo(h.position),p=.02,x=.005;l.inputState.pinching&&u>p+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=p-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(fu)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Qn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var hs=class extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new nn,this.environmentIntensity=1,this.environmentRotation=new nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var br=class extends Ft{constructor(e=null,t=1,n=1,s,r,a,o,c,l=Nt,d=Nt,h,u){super(null,a,o,c,l,d,s,r,h,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var go=new W,pu=new W,mu=new qe,Zt=class{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=go.subVectors(n,t).cross(pu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(go),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||mu.getNormalMatrix(e),s=this.coplanarPoint(go).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Kn=new Vn,xu=new Qe(.5,.5),ir=new W,Ni=class{constructor(e=new Zt,t=new Zt,n=new Zt,s=new Zt,r=new Zt,a=new Zt){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=tn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],d=r[4],h=r[5],u=r[6],p=r[7],x=r[8],v=r[9],m=r[10],f=r[11],E=r[12],w=r[13],T=r[14],I=r[15];if(s[0].setComponents(l-a,p-d,f-x,I-E).normalize(),s[1].setComponents(l+a,p+d,f+x,I+E).normalize(),s[2].setComponents(l+o,p+h,f+v,I+w).normalize(),s[3].setComponents(l-o,p-h,f-v,I-w).normalize(),n)s[4].setComponents(c,u,m,T).normalize(),s[5].setComponents(l-c,p-u,f-m,I-T).normalize();else if(s[4].setComponents(l-c,p-u,f-m,I-T).normalize(),t===tn)s[5].setComponents(l+c,p+u,f+m,I+T).normalize();else if(t===is)s[5].setComponents(c,u,m,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Kn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Kn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Kn)}intersectsSprite(e){Kn.center.set(0,0,0);let t=xu.distanceTo(e.center);return Kn.radius=.7071067811865476+t,Kn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Kn)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ir.x=s.normal.x>0?e.max.x:e.min.x,ir.y=s.normal.y>0?e.max.y:e.min.y,ir.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ir)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Fi=class extends ln{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Mr=new W,Sr=new W,Jl=new ht,es=new ii,sr=new Vn,_o=new W,$l=new W,wr=class extends bt{constructor(e=new Rt,t=new Fi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Mr.fromBufferAttribute(t,s-1),Sr.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Mr.distanceTo(Sr);e.setAttribute("lineDistance",new Ct(n,1))}else ke("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),sr.copy(n.boundingSphere),sr.applyMatrix4(s),sr.radius+=r,e.ray.intersectsSphere(sr)===!1)return;Jl.copy(s).invert(),es.copy(e.ray).applyMatrix4(Jl);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,d=n.index,u=n.attributes.position;if(d!==null){let p=Math.max(0,a.start),x=Math.min(d.count,a.start+a.count);for(let v=p,m=x-1;v<m;v+=l){let f=d.getX(v),E=d.getX(v+1),w=rr(this,e,es,c,f,E,v);w&&t.push(w)}if(this.isLineLoop){let v=d.getX(x-1),m=d.getX(p),f=rr(this,e,es,c,v,m,x-1);f&&t.push(f)}}else{let p=Math.max(0,a.start),x=Math.min(u.count,a.start+a.count);for(let v=p,m=x-1;v<m;v+=l){let f=rr(this,e,es,c,v,v+1,v);f&&t.push(f)}if(this.isLineLoop){let v=rr(this,e,es,c,x-1,p,x-1);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function rr(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(Mr.fromBufferAttribute(o,s),Sr.fromBufferAttribute(o,r),t.distanceSqToSegment(Mr,Sr,_o,$l)>n)return;_o.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(_o);if(!(l<e.near||l>e.far))return{distance:l,point:$l.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Kl=new W,jl=new W,us=class extends wr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Kl.fromBufferAttribute(t,s),jl.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Kl.distanceTo(jl);e.setAttribute("lineDistance",new Ct(n,1))}else ke("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ar=class extends ln{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ql=new ht,Ao=new ii,ar=new Vn,or=new W,ds=class extends bt{constructor(e=new Rt,t=new Ar){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ar.copy(n.boundingSphere),ar.applyMatrix4(s),ar.radius+=r,e.ray.intersectsSphere(ar)===!1)return;Ql.copy(s).invert(),Ao.copy(e.ray).applyMatrix4(Ql);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null){let u=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let x=u,v=p;x<v;x++){let m=l.getX(x);or.fromBufferAttribute(h,m),ec(or,m,c,s,e,t,this)}}else{let u=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let x=u,v=p;x<v;x++)or.fromBufferAttribute(h,x),ec(or,x,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function ec(i,e,t,n,s,r,a){let o=Ao.distanceSqToPoint(i);if(o<t){let c=new W;Ao.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var fs=class extends Ft{constructor(e,t,n=Wn,s,r,a,o=Nt,c=Nt,l,d=Ci,h=1){if(d!==Ci&&d!==Vi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:h};super(u,s,r,a,o,c,d,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Pi(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ps=class extends Ft{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var ms=class i extends Rt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,d=c+1,h=e/o,u=t/c,p=[],x=[],v=[],m=[];for(let f=0;f<d;f++){let E=f*u-a;for(let w=0;w<l;w++){let T=w*h-r;x.push(T,-E,0),v.push(0,0,1),m.push(w/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let E=0;E<o;E++){let w=E+l*f,T=E+l*(f+1),I=E+1+l*(f+1),M=E+1+l*f;p.push(w,T,M),p.push(T,I,M)}this.setIndex(p),this.setAttribute("position",new Ct(x,3)),this.setAttribute("normal",new Ct(v,3)),this.setAttribute("uv",new Ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var xs=class i extends Rt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,d=[],h=new W,u=new W,p=[],x=[],v=[],m=[];for(let f=0;f<=n;f++){let E=[],w=f/n,T=0;f===0&&a===0?T=.5/t:f===n&&c===Math.PI&&(T=-.5/t);for(let I=0;I<=t;I++){let M=I/t;h.x=-e*Math.cos(s+M*r)*Math.sin(a+w*o),h.y=e*Math.cos(a+w*o),h.z=e*Math.sin(s+M*r)*Math.sin(a+w*o),x.push(h.x,h.y,h.z),u.copy(h).normalize(),v.push(u.x,u.y,u.z),m.push(M+T,1-w),E.push(l++)}d.push(E)}for(let f=0;f<n;f++)for(let E=0;E<t;E++){let w=d[f][E+1],T=d[f][E],I=d[f+1][E],M=d[f+1][E+1];(f!==0||a>0)&&p.push(w,T,M),(f!==n-1||c<Math.PI)&&p.push(T,I,M)}this.setIndex(p),this.setAttribute("position",new Ct(x,3)),this.setAttribute("normal",new Ct(v,3)),this.setAttribute("uv",new Ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Tr=class extends ln{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wo,this.normalScale=new Qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},gs=class extends Tr{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Qe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Xe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Xe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Xe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Er=class extends ln{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Cr=class extends ln{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function lr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function gu(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ri=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Rr=class extends ri{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:yo,endingEnd:yo}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case bo:r=e,o=2*t-n;break;case Mo:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case bo:a=e,c=2*n-t;break;case Mo:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,d=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*d,this._offsetNext=a*d}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,d=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,p=this._weightNext,x=(n-t)/(s-t),v=x*x,m=v*x,f=-u*m+2*u*v-u*x,E=(1+u)*m+(-1.5-2*u)*v+(-.5+u)*x+1,w=(-1-p)*m+(1.5+p)*v+.5*x,T=p*m-p*v;for(let I=0;I!==o;++I)r[I]=f*a[d+I]+E*a[l+I]+w*a[c+I]+T*a[h+I];return r}},Ir=class extends ri{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,d=(n-t)/(s-t),h=1-d;for(let u=0;u!==o;++u)r[u]=a[l+u]*h+a[c+u]*d;return r}},Pr=class extends ri{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Xt=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=lr(t,this.TimeBufferType),this.values=lr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:lr(e.times,Array),values:lr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Pr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ir(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Rr(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ts:t=this.InterpolantFactoryMethodDiscrete;break;case pr:t=this.InterpolantFactoryMethodLinear;break;case cr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ke("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ts;case this.InterpolantFactoryMethodLinear:return pr;case this.InterpolantFactoryMethodSmooth:return cr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&($e("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&($e("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){$e("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){$e("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&gu(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){$e("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===cr,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],d=e[o+1];if(l!==d&&(o!==1||l!==e[0]))if(s)c=!0;else{let h=o*n,u=h-n,p=h+n;for(let x=0;x!==n;++x){let v=t[h+x];if(v!==t[u+x]||v!==t[p+x]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let h=o*n,u=a*n;for(let p=0;p!==n;++p)t[u+p]=t[h+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Xt.prototype.ValueTypeName="";Xt.prototype.TimeBufferType=Float32Array;Xt.prototype.ValueBufferType=Float32Array;Xt.prototype.DefaultInterpolation=pr;var kn=class extends Xt{constructor(e,t,n){super(e,t,n)}};kn.prototype.ValueTypeName="bool";kn.prototype.ValueBufferType=Array;kn.prototype.DefaultInterpolation=ts;kn.prototype.InterpolantFactoryMethodLinear=void 0;kn.prototype.InterpolantFactoryMethodSmooth=void 0;var Lr=class extends Xt{constructor(e,t,n,s){super(e,t,n,s)}};Lr.prototype.ValueTypeName="color";var Dr=class extends Xt{constructor(e,t,n,s){super(e,t,n,s)}};Dr.prototype.ValueTypeName="number";var Ur=class extends ri{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let d=l+o;l!==d;l+=4)Sn.slerpFlat(r,0,a,l-o,a,l,c);return r}},_s=class extends Xt{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Ur(this.times,this.values,this.getValueSize(),e)}};_s.prototype.ValueTypeName="quaternion";_s.prototype.InterpolantFactoryMethodSmooth=void 0;var Gn=class extends Xt{constructor(e,t,n){super(e,t,n)}};Gn.prototype.ValueTypeName="string";Gn.prototype.ValueBufferType=Array;Gn.prototype.DefaultInterpolation=ts;Gn.prototype.InterpolantFactoryMethodLinear=void 0;Gn.prototype.InterpolantFactoryMethodSmooth=void 0;var Nr=class extends Xt{constructor(e,t,n,s){super(e,t,n,s)}};Nr.prototype.ValueTypeName="vector";var Fr=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(d){o++,r===!1&&s.onStart!==void 0&&s.onStart(d,a,o),r=!0},this.itemEnd=function(d){a++,s.onProgress!==void 0&&s.onProgress(d,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,h){return l.push(d,h),this},this.removeHandler=function(d){let h=l.indexOf(d);return h!==-1&&l.splice(h,2),this},this.getHandler=function(d){for(let h=0,u=l.length;h<u;h+=2){let p=l[h],x=l[h+1];if(p.global&&(p.lastIndex=0),p.test(d))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Jc=new Fr,Or=class{constructor(e){this.manager=e!==void 0?e:Jc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Or.DEFAULT_MATERIAL_NAME="__DEFAULT";var vs=class extends bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},ys=class extends vs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},vo=new ht,tc=new W,nc=new W,To=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Qe(512,512),this.mapType=sn,this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ni,this._frameExtents=new Qe(1,1),this._viewportCount=1,this._viewports=[new ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;tc.setFromMatrixPosition(e.matrixWorld),t.position.copy(tc),nc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(nc),t.updateMatrixWorld(),vo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vo,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(vo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var bs=class extends ls{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=d*this.view.offsetY,c=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Eo=class extends To{constructor(){super(new bs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Oi=class extends vs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new Eo}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Br=class extends wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var $o="\\[\\]\\.:\\/",_u=new RegExp("["+$o+"]","g"),Ko="[^"+$o+"]",vu="[^"+$o.replace("\\.","")+"]",yu=/((?:WC+[\/:])*)/.source.replace("WC",Ko),bu=/(WCOD+)?/.source.replace("WCOD",vu),Mu=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ko),Su=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ko),wu=new RegExp("^"+yu+bu+Mu+Su+"$"),Au=["material","materials","bones","map"],Co=class{constructor(e,t,n){let s=n||ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ct=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(_u,"")}static parseTrackName(e){let t=wu.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Au.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ke("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){$e("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){$e("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){$e("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===l){l=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){$e("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){$e("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){$e("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){$e("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;$e("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){$e("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){$e("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ct.Composite=Co;ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ct.prototype.GetterByBindingType=[ct.prototype._getValue_direct,ct.prototype._getValue_array,ct.prototype._getValue_arrayElement,ct.prototype._getValue_toArray];ct.prototype.SetterByBindingTypeAndVersioning=[[ct.prototype._setValue_direct,ct.prototype._setValue_direct_setNeedsUpdate,ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_array,ct.prototype._setValue_array_setNeedsUpdate,ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_arrayElement,ct.prototype._setValue_arrayElement_setNeedsUpdate,ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_fromArray,ct.prototype._setValue_fromArray_setNeedsUpdate,ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var I0=new Float32Array(1);var ic=new ht,Ms=class{constructor(e,t,n=0,s=1/0){this.ray=new ii(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Li,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):$e("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ic.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ic),this}intersectObject(e,t=!0,n=[]){return Ro(e,this,n,t),n.sort(sc),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Ro(e[s],this,n,t);return n.sort(sc),n}};function sc(i,e){return i.distance-e.distance}function Ro(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Ro(r[a],e,t,!0)}}function jo(i,e,t,n){let s=Tu(n);switch(t){case ko:return i*e;case Ho:return i*e/s.components*s.byteLength;case Qr:return i*e/s.components*s.byteLength;case ea:return i*e*2/s.components*s.byteLength;case ta:return i*e*2/s.components*s.byteLength;case Go:return i*e*3/s.components*s.byteLength;case Jt:return i*e*4/s.components*s.byteLength;case na:return i*e*4/s.components*s.byteLength;case As:case Ts:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Es:case Cs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case sa:case aa:return Math.max(i,16)*Math.max(e,8)/4;case ia:case ra:return Math.max(i,8)*Math.max(e,8)/2;case oa:case la:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ca:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ha:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ua:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case da:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case fa:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case pa:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ma:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case xa:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ga:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case _a:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case va:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ya:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ba:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ma:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Sa:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case wa:case Aa:case Ta:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ea:case Ca:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ra:case Ia:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Tu(i){switch(i){case sn:case Oo:return{byteLength:1,components:1};case Bi:case Bo:case li:return{byteLength:2,components:1};case Kr:case jr:return{byteLength:2,components:4};case Wn:case $r:case dn:return{byteLength:4,components:1};case zo:case Vo:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"181"}}));typeof window<"u"&&(window.__THREE__?ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="181");function _h(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Cu(i){let e=new WeakMap;function t(o,c){let l=o.array,d=o.usage,h=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,d),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){let d=c.array,h=c.updateRanges;if(i.bindBuffer(l,o),h.length===0)i.bufferSubData(l,0,d);else{h.sort((p,x)=>p.start-x.start);let u=0;for(let p=1;p<h.length;p++){let x=h[u],v=h[p];v.start<=x.start+x.count+1?x.count=Math.max(x.count,v.start+v.count-x.start):(++u,h[u]=v)}h.length=u+1;for(let p=0,x=h.length;p<x;p++){let v=h[p];i.bufferSubData(l,v.start*d.BYTES_PER_ELEMENT,d,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Ru=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Iu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Pu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Du=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Uu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Nu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Fu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ou=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Bu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ku=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Gu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Hu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Wu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Xu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ju=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$u=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ku=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ju=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Qu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ed=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,td=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,id=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rd="gl_FragColor = linearToOutputTexel( gl_FragColor );",ad=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,od=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ld=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,cd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,hd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ud=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,dd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,md=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,gd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_d=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,bd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Md=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ad=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Td=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ed=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Cd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Rd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Id=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Pd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ld=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ud=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Nd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Od=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Bd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Xd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Yd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Zd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$d=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Kd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,jd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ef=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,rf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,af=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,of=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,df=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ff=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,pf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,mf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,gf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_f=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,vf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,wf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Af=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Tf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ef=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Cf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Rf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,If=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Df=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Uf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ff=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Of=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Bf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,zf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Wf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Zf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,$f=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Kf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ep=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,np=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ip=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,sp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ap=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,op=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ze={alphahash_fragment:Ru,alphahash_pars_fragment:Iu,alphamap_fragment:Pu,alphamap_pars_fragment:Lu,alphatest_fragment:Du,alphatest_pars_fragment:Uu,aomap_fragment:Nu,aomap_pars_fragment:Fu,batching_pars_vertex:Ou,batching_vertex:Bu,begin_vertex:zu,beginnormal_vertex:Vu,bsdfs:ku,iridescence_fragment:Gu,bumpmap_pars_fragment:Hu,clipping_planes_fragment:Wu,clipping_planes_pars_fragment:Xu,clipping_planes_pars_vertex:qu,clipping_planes_vertex:Yu,color_fragment:Zu,color_pars_fragment:Ju,color_pars_vertex:$u,color_vertex:Ku,common:ju,cube_uv_reflection_fragment:Qu,defaultnormal_vertex:ed,displacementmap_pars_vertex:td,displacementmap_vertex:nd,emissivemap_fragment:id,emissivemap_pars_fragment:sd,colorspace_fragment:rd,colorspace_pars_fragment:ad,envmap_fragment:od,envmap_common_pars_fragment:ld,envmap_pars_fragment:cd,envmap_pars_vertex:hd,envmap_physical_pars_fragment:bd,envmap_vertex:ud,fog_vertex:dd,fog_pars_vertex:fd,fog_fragment:pd,fog_pars_fragment:md,gradientmap_pars_fragment:xd,lightmap_pars_fragment:gd,lights_lambert_fragment:_d,lights_lambert_pars_fragment:vd,lights_pars_begin:yd,lights_toon_fragment:Md,lights_toon_pars_fragment:Sd,lights_phong_fragment:wd,lights_phong_pars_fragment:Ad,lights_physical_fragment:Td,lights_physical_pars_fragment:Ed,lights_fragment_begin:Cd,lights_fragment_maps:Rd,lights_fragment_end:Id,logdepthbuf_fragment:Pd,logdepthbuf_pars_fragment:Ld,logdepthbuf_pars_vertex:Dd,logdepthbuf_vertex:Ud,map_fragment:Nd,map_pars_fragment:Fd,map_particle_fragment:Od,map_particle_pars_fragment:Bd,metalnessmap_fragment:zd,metalnessmap_pars_fragment:Vd,morphinstance_vertex:kd,morphcolor_vertex:Gd,morphnormal_vertex:Hd,morphtarget_pars_vertex:Wd,morphtarget_vertex:Xd,normal_fragment_begin:qd,normal_fragment_maps:Yd,normal_pars_fragment:Zd,normal_pars_vertex:Jd,normal_vertex:$d,normalmap_pars_fragment:Kd,clearcoat_normal_fragment_begin:jd,clearcoat_normal_fragment_maps:Qd,clearcoat_pars_fragment:ef,iridescence_pars_fragment:tf,opaque_fragment:nf,packing:sf,premultiplied_alpha_fragment:rf,project_vertex:af,dithering_fragment:of,dithering_pars_fragment:lf,roughnessmap_fragment:cf,roughnessmap_pars_fragment:hf,shadowmap_pars_fragment:uf,shadowmap_pars_vertex:df,shadowmap_vertex:ff,shadowmask_pars_fragment:pf,skinbase_vertex:mf,skinning_pars_vertex:xf,skinning_vertex:gf,skinnormal_vertex:_f,specularmap_fragment:vf,specularmap_pars_fragment:yf,tonemapping_fragment:bf,tonemapping_pars_fragment:Mf,transmission_fragment:Sf,transmission_pars_fragment:wf,uv_pars_fragment:Af,uv_pars_vertex:Tf,uv_vertex:Ef,worldpos_vertex:Cf,background_vert:Rf,background_frag:If,backgroundCube_vert:Pf,backgroundCube_frag:Lf,cube_vert:Df,cube_frag:Uf,depth_vert:Nf,depth_frag:Ff,distanceRGBA_vert:Of,distanceRGBA_frag:Bf,equirect_vert:zf,equirect_frag:Vf,linedashed_vert:kf,linedashed_frag:Gf,meshbasic_vert:Hf,meshbasic_frag:Wf,meshlambert_vert:Xf,meshlambert_frag:qf,meshmatcap_vert:Yf,meshmatcap_frag:Zf,meshnormal_vert:Jf,meshnormal_frag:$f,meshphong_vert:Kf,meshphong_frag:jf,meshphysical_vert:Qf,meshphysical_frag:ep,meshtoon_vert:tp,meshtoon_frag:np,points_vert:ip,points_frag:sp,shadow_vert:rp,shadow_frag:ap,sprite_vert:op,sprite_frag:lp},be={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},fn={basic:{uniforms:At([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:At([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:At([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:At([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:At([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:At([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:At([be.points,be.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:At([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:At([be.common,be.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:At([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:At([be.sprite,be.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:At([be.common,be.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:At([be.lights,be.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};fn.physical={uniforms:At([fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};var Pa={r:0,b:0,g:0},hi=new nn,cp=new ht;function hp(i,e,t,n,s,r,a){let o=new Xe(0),c=r===!0?0:1,l,d,h=null,u=0,p=null;function x(w){let T=w.isScene===!0?w.background:null;return T&&T.isTexture&&(T=(w.backgroundBlurriness>0?t:e).get(T)),T}function v(w){let T=!1,I=x(w);I===null?f(o,c):I&&I.isColor&&(f(I,1),T=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(w,T){let I=x(T);I&&(I.isCubeTexture||I.mapping===Ss)?(d===void 0&&(d=new Ot(new Di(1,1,1),new Bt({name:"BackgroundCubeMaterial",uniforms:ci(fn.backgroundCube.uniforms),vertexShader:fn.backgroundCube.vertexShader,fragmentShader:fn.backgroundCube.fragmentShader,side:It,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(M,C,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),hi.copy(T.backgroundRotation),hi.x*=-1,hi.y*=-1,hi.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(hi.y*=-1,hi.z*=-1),d.material.uniforms.envMap.value=I,d.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(cp.makeRotationFromEuler(hi)),d.material.toneMapped=et.getTransfer(I.colorSpace)!==it,(h!==I||u!==I.version||p!==i.toneMapping)&&(d.material.needsUpdate=!0,h=I,u=I.version,p=i.toneMapping),d.layers.enableAll(),w.unshift(d,d.geometry,d.material,0,0,null)):I&&I.isTexture&&(l===void 0&&(l=new Ot(new ms(2,2),new Bt({name:"BackgroundMaterial",uniforms:ci(fn.background.uniforms),vertexShader:fn.background.vertexShader,fragmentShader:fn.background.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=I,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=et.getTransfer(I.colorSpace)!==it,I.matrixAutoUpdate===!0&&I.updateMatrix(),l.material.uniforms.uvTransform.value.copy(I.matrix),(h!==I||u!==I.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,h=I,u=I.version,p=i.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function f(w,T){w.getRGB(Pa,Jo(i)),n.buffers.color.setClear(Pa.r,Pa.g,Pa.b,T,a)}function E(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(w,T=1){o.set(w),c=T,f(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,f(o,c)},render:v,addToRenderList:m,dispose:E}}function up(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(b,P,G,q,K){let k=!1,j=h(q,G,P);r!==j&&(r=j,l(r.object)),k=p(b,q,G,K),k&&x(b,q,G,K),K!==null&&e.update(K,i.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,T(b,P,G,q),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function c(){return i.createVertexArray()}function l(b){return i.bindVertexArray(b)}function d(b){return i.deleteVertexArray(b)}function h(b,P,G){let q=G.wireframe===!0,K=n[b.id];K===void 0&&(K={},n[b.id]=K);let k=K[P.id];k===void 0&&(k={},K[P.id]=k);let j=k[q];return j===void 0&&(j=u(c()),k[q]=j),j}function u(b){let P=[],G=[],q=[];for(let K=0;K<t;K++)P[K]=0,G[K]=0,q[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:G,attributeDivisors:q,object:b,attributes:{},index:null}}function p(b,P,G,q){let K=r.attributes,k=P.attributes,j=0,ce=G.getAttributes();for(let V in ce)if(ce[V].location>=0){let ue=K[V],Ce=k[V];if(Ce===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(Ce=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(Ce=b.instanceColor)),ue===void 0||ue.attribute!==Ce||Ce&&ue.data!==Ce.data)return!0;j++}return r.attributesNum!==j||r.index!==q}function x(b,P,G,q){let K={},k=P.attributes,j=0,ce=G.getAttributes();for(let V in ce)if(ce[V].location>=0){let ue=k[V];ue===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(ue=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(ue=b.instanceColor));let Ce={};Ce.attribute=ue,ue&&ue.data&&(Ce.data=ue.data),K[V]=Ce,j++}r.attributes=K,r.attributesNum=j,r.index=q}function v(){let b=r.newAttributes;for(let P=0,G=b.length;P<G;P++)b[P]=0}function m(b){f(b,0)}function f(b,P){let G=r.newAttributes,q=r.enabledAttributes,K=r.attributeDivisors;G[b]=1,q[b]===0&&(i.enableVertexAttribArray(b),q[b]=1),K[b]!==P&&(i.vertexAttribDivisor(b,P),K[b]=P)}function E(){let b=r.newAttributes,P=r.enabledAttributes;for(let G=0,q=P.length;G<q;G++)P[G]!==b[G]&&(i.disableVertexAttribArray(G),P[G]=0)}function w(b,P,G,q,K,k,j){j===!0?i.vertexAttribIPointer(b,P,G,K,k):i.vertexAttribPointer(b,P,G,q,K,k)}function T(b,P,G,q){v();let K=q.attributes,k=G.getAttributes(),j=P.defaultAttributeValues;for(let ce in k){let V=k[ce];if(V.location>=0){let ne=K[ce];if(ne===void 0&&(ce==="instanceMatrix"&&b.instanceMatrix&&(ne=b.instanceMatrix),ce==="instanceColor"&&b.instanceColor&&(ne=b.instanceColor)),ne!==void 0){let ue=ne.normalized,Ce=ne.itemSize,We=e.get(ne);if(We===void 0)continue;let Ye=We.buffer,De=We.type,Je=We.bytesPerElement,ee=De===i.INT||De===i.UNSIGNED_INT||ne.gpuType===$r;if(ne.isInterleavedBufferAttribute){let L=ne.data,X=L.stride,ie=ne.offset;if(L.isInstancedInterleavedBuffer){for(let le=0;le<V.locationSize;le++)f(V.location+le,L.meshPerAttribute);b.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=L.meshPerAttribute*L.count)}else for(let le=0;le<V.locationSize;le++)m(V.location+le);i.bindBuffer(i.ARRAY_BUFFER,Ye);for(let le=0;le<V.locationSize;le++)w(V.location+le,Ce/V.locationSize,De,ue,X*Je,(ie+Ce/V.locationSize*le)*Je,ee)}else{if(ne.isInstancedBufferAttribute){for(let L=0;L<V.locationSize;L++)f(V.location+L,ne.meshPerAttribute);b.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let L=0;L<V.locationSize;L++)m(V.location+L);i.bindBuffer(i.ARRAY_BUFFER,Ye);for(let L=0;L<V.locationSize;L++)w(V.location+L,Ce/V.locationSize,De,ue,Ce*Je,Ce/V.locationSize*L*Je,ee)}}else if(j!==void 0){let ue=j[ce];if(ue!==void 0)switch(ue.length){case 2:i.vertexAttrib2fv(V.location,ue);break;case 3:i.vertexAttrib3fv(V.location,ue);break;case 4:i.vertexAttrib4fv(V.location,ue);break;default:i.vertexAttrib1fv(V.location,ue)}}}}E()}function I(){D();for(let b in n){let P=n[b];for(let G in P){let q=P[G];for(let K in q)d(q[K].object),delete q[K];delete P[G]}delete n[b]}}function M(b){if(n[b.id]===void 0)return;let P=n[b.id];for(let G in P){let q=P[G];for(let K in q)d(q[K].object),delete q[K];delete P[G]}delete n[b.id]}function C(b){for(let P in n){let G=n[P];if(G[b.id]===void 0)continue;let q=G[b.id];for(let K in q)d(q[K].object),delete q[K];delete G[b.id]}}function D(){S(),a=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:S,dispose:I,releaseStatesOfGeometry:M,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:m,disableUnusedAttributes:E}}function dp(i,e,t){let n;function s(l){n=l}function r(l,d){i.drawArrays(n,l,d),t.update(d,n,1)}function a(l,d,h){h!==0&&(i.drawArraysInstanced(n,l,d,h),t.update(d,n,h))}function o(l,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,d,0,h);let p=0;for(let x=0;x<h;x++)p+=d[x];t.update(p,n,1)}function c(l,d,h,u){if(h===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<l.length;x++)a(l[x],d[x],u[x]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,d,0,u,0,h);let x=0;for(let v=0;v<h;v++)x+=d[v]*u[v];t.update(x,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function fp(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==Jt&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let D=C===li&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==sn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==dn&&!D)}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",d=c(l);d!==l&&(ke("WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);let h=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=x>0,M=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:x,maxTextureSize:v,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:E,maxVaryings:w,maxFragmentUniforms:T,vertexTextures:I,maxSamples:M}}function pp(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Zt,o=new qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let p=h.length!==0||u||n!==0||s;return s=u,n=h.length,p},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,u){t=d(h,u,0)},this.setState=function(h,u,p){let x=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,f=i.get(h);if(!s||x===null||x.length===0||r&&!m)r?d(null):l();else{let E=r?0:n,w=E*4,T=f.clippingState||null;c.value=T,T=d(x,u,w,p);for(let I=0;I!==w;++I)T[I]=t[I];f.clippingState=T,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(h,u,p,x){let v=h!==null?h.length:0,m=null;if(v!==0){if(m=c.value,x!==!0||m===null){let f=p+v*4,E=u.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<f)&&(m=new Float32Array(f));for(let w=0,T=p;w!==v;++w,T+=4)a.copy(h[w]).applyMatrix4(E,o),a.normal.toArray(m,T),m[T+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function mp(i){let e=new WeakMap;function t(a,o){return o===Yr?a.mapping=ai:o===Zr&&(a.mapping=oi),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Yr||o===Zr)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new yr(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Xn=4,$c=[.125,.215,.35,.446,.526,.582],di=20,xp=256,Is=new bs,Kc=new Xe,Qo=null,el=0,tl=0,nl=!1,gp=new W,Da=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=gp}=r;Qo=this._renderer.getRenderTarget(),el=this._renderer.getActiveCubeFace(),tl=this._renderer.getActiveMipmapLevel(),nl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=eh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Qo,el,tl),this._renderer.xr.enabled=nl,e.scissorTest=!1,Gi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ai||e.mapping===oi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qo=this._renderer.getRenderTarget(),el=this._renderer.getActiveCubeFace(),tl=this._renderer.getActiveMipmapLevel(),nl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Wt,minFilter:Wt,generateMipmaps:!1,type:li,format:Jt,colorSpace:ni,depthBuffer:!1},s=jc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jc(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=_p(r)),this._blurMaterial=yp(r,e,t),this._ggxMaterial=vp(r,e,t)}return s}_compileMaterial(e){let t=new Ot(new Rt,e);this._renderer.compile(t,Is)}_sceneToCubeUV(e,t,n,s,r){let c=new wt(90,1,t,n),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,p=h.toneMapping;h.getClearColor(Kc),h.toneMapping=wn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ot(new Di,new si({name:"PMREM.Background",side:It,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,m=v.material,f=!1,E=e.background;E?E.isColor&&(m.color.copy(E),e.background=null,f=!0):(m.color.copy(Kc),f=!0);for(let w=0;w<6;w++){let T=w%3;T===0?(c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+d[w],r.y,r.z)):T===1?(c.up.set(0,0,l[w]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+d[w],r.z)):(c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+d[w]));let I=this._cubeSize;Gi(s,T*I,w>2?I:0,I,I),h.setRenderTarget(s),f&&h.render(v,c),h.render(e,c)}h.toneMapping=p,h.autoClear=u,e.background=E}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===ai||e.mapping===oi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=eh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qc());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;Gi(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Is)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),h=Math.sqrt(l*l-d*d),u=.05+l*.95,p=h*u,{_lodMax:x}=this,v=this._sizeLods[n],m=3*v*(n>x-Xn?n-x+Xn:0),f=4*(this._cubeSize-v);c.envMap.value=e.texture,c.roughness.value=p,c.mipInt.value=x-t,Gi(r,m,f,3*v,2*v),s.setRenderTarget(r),s.render(o,Is),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=x-n,Gi(e,m,f,3*v,2*v),s.setRenderTarget(e),s.render(o,Is)}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&$e("blur direction must be either latitudinal or longitudinal!");let d=3,h=this._lodMeshes[s];h.material=l;let u=l.uniforms,p=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*di-1),v=r/x,m=isFinite(r)?1+Math.floor(d*v):di;m>di&&ke(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${di}`);let f=[],E=0;for(let C=0;C<di;++C){let D=C/v,S=Math.exp(-D*D/2);f.push(S),C===0?E+=S:C<m&&(E+=2*S)}for(let C=0;C<f.length;C++)f[C]=f[C]/E;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:w}=this;u.dTheta.value=x,u.mipInt.value=w-n;let T=this._sizeLods[s],I=3*T*(s>w-Xn?s-w+Xn:0),M=4*(this._cubeSize-T);Gi(t,I,M,3*T,2*T),c.setRenderTarget(t),c.render(h,Is)}};function _p(i){let e=[],t=[],n=[],s=i,r=i-Xn+1+$c.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let c=1/o;a>i-Xn?c=$c[a-i+Xn-1]:a===0&&(c=0),t.push(c);let l=1/(o-2),d=-l,h=1+l,u=[d,d,h,d,h,h,d,d,h,h,d,h],p=6,x=6,v=3,m=2,f=1,E=new Float32Array(v*x*p),w=new Float32Array(m*x*p),T=new Float32Array(f*x*p);for(let M=0;M<p;M++){let C=M%3*2/3-1,D=M>2?0:-1,S=[C,D,0,C+2/3,D,0,C+2/3,D+1,0,C,D,0,C+2/3,D+1,0,C,D+1,0];E.set(S,v*x*M),w.set(u,m*x*M);let b=[M,M,M,M,M,M];T.set(b,f*x*M)}let I=new Rt;I.setAttribute("position",new gt(E,v)),I.setAttribute("uv",new gt(w,m)),I.setAttribute("faceIndex",new gt(T,f)),n.push(new Ot(I,null)),s>Xn&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function jc(i,e,t){let n=new on(i,e,t);return n.texture.mapping=Ss,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Gi(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function vp(i,e,t){return new Bt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:xp,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Na(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:un,depthTest:!1,depthWrite:!1})}function yp(i,e,t){let n=new Float32Array(di),s=new W(0,1,0);return new Bt({name:"SphericalGaussianBlur",defines:{n:di,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Na(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:un,depthTest:!1,depthWrite:!1})}function Qc(){return new Bt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Na(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:un,depthTest:!1,depthWrite:!1})}function eh(){return new Bt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Na(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:un,depthTest:!1,depthWrite:!1})}function Na(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function bp(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===Yr||c===Zr,d=c===ai||c===oi;if(l||d){let h=e.get(o),u=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return t===null&&(t=new Da(i)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{let p=o.image;return l&&p&&p.height>0||d&&p&&s(p)?(t===null&&(t=new Da(i)),h=l?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let c=0,l=6;for(let d=0;d<l;d++)o[d]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Mp(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Ii("WebGLRenderer: "+n+" extension not supported."),s}}}function Sp(i,e,t,n){let s={},r=new WeakMap;function a(h){let u=h.target;u.index!==null&&e.remove(u.index);for(let x in u.attributes)e.remove(u.attributes[x]);u.removeEventListener("dispose",a),delete s[u.id];let p=r.get(u);p&&(e.remove(p),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(h,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function c(h){let u=h.attributes;for(let p in u)e.update(u[p],i.ARRAY_BUFFER)}function l(h){let u=[],p=h.index,x=h.attributes.position,v=0;if(p!==null){let E=p.array;v=p.version;for(let w=0,T=E.length;w<T;w+=3){let I=E[w+0],M=E[w+1],C=E[w+2];u.push(I,M,M,C,C,I)}}else if(x!==void 0){let E=x.array;v=x.version;for(let w=0,T=E.length/3-1;w<T;w+=3){let I=w+0,M=w+1,C=w+2;u.push(I,M,M,C,C,I)}}else return;let m=new(Yo(u)?os:as)(u,1);m.version=v;let f=r.get(h);f&&e.remove(f),r.set(h,m)}function d(h){let u=r.get(h);if(u){let p=h.index;p!==null&&u.version<p.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:d}}function wp(i,e,t){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function c(u,p){i.drawElements(n,p,r,u*a),t.update(p,n,1)}function l(u,p,x){x!==0&&(i.drawElementsInstanced(n,p,r,u*a,x),t.update(p,n,x))}function d(u,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,u,0,x);let m=0;for(let f=0;f<x;f++)m+=p[f];t.update(m,n,1)}function h(u,p,x,v){if(x===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<u.length;f++)l(u[f]/a,p[f],v[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,u,0,v,0,x);let f=0;for(let E=0;E<x;E++)f+=p[E]*v[E];t.update(f,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function Ap(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:$e("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Tp(i,e,t){let n=new WeakMap,s=new ft;function r(a,o,c){let l=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0,u=n.get(o);if(u===void 0||u.count!==h){let S=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",S)};u!==void 0&&u.texture.dispose();let p=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],E=o.morphAttributes.color||[],w=0;p===!0&&(w=1),x===!0&&(w=2),v===!0&&(w=3);let T=o.attributes.position.count*w,I=1;T>e.maxTextureSize&&(I=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);let M=new Float32Array(T*I*4*h),C=new rs(M,T,I,h);C.type=dn,C.needsUpdate=!0;let D=w*4;for(let b=0;b<h;b++){let P=m[b],G=f[b],q=E[b],K=T*I*4*b;for(let k=0;k<P.count;k++){let j=k*D;p===!0&&(s.fromBufferAttribute(P,k),M[K+j+0]=s.x,M[K+j+1]=s.y,M[K+j+2]=s.z,M[K+j+3]=0),x===!0&&(s.fromBufferAttribute(G,k),M[K+j+4]=s.x,M[K+j+5]=s.y,M[K+j+6]=s.z,M[K+j+7]=0),v===!0&&(s.fromBufferAttribute(q,k),M[K+j+8]=s.x,M[K+j+9]=s.y,M[K+j+10]=s.z,M[K+j+11]=q.itemSize===4?s.w:1)}}u={count:h,texture:C,size:new Qe(T,I)},n.set(o,u),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let v=0;v<l.length;v++)p+=l[v];let x=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Ep(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,d=c.geometry,h=e.get(c,d);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let u=c.skeleton;s.get(u)!==l&&(u.update(),s.set(u,l))}return h}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}var vh=new Ft,th=new fs(1,1),yh=new rs,bh=new _r,Mh=new cs,nh=[],ih=[],sh=new Float32Array(16),rh=new Float32Array(9),ah=new Float32Array(4);function Wi(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=nh[s];if(r===void 0&&(r=new Float32Array(s),nh[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function _t(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function vt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Fa(i,e){let t=ih[e];t===void 0&&(t=new Int32Array(e),ih[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Cp(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Rp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2fv(this.addr,e),vt(t,e)}}function Ip(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_t(t,e))return;i.uniform3fv(this.addr,e),vt(t,e)}}function Pp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4fv(this.addr,e),vt(t,e)}}function Lp(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,n))return;ah.set(n),i.uniformMatrix2fv(this.addr,!1,ah),vt(t,n)}}function Dp(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,n))return;rh.set(n),i.uniformMatrix3fv(this.addr,!1,rh),vt(t,n)}}function Up(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,n))return;sh.set(n),i.uniformMatrix4fv(this.addr,!1,sh),vt(t,n)}}function Np(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Fp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2iv(this.addr,e),vt(t,e)}}function Op(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;i.uniform3iv(this.addr,e),vt(t,e)}}function Bp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4iv(this.addr,e),vt(t,e)}}function zp(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Vp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2uiv(this.addr,e),vt(t,e)}}function kp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;i.uniform3uiv(this.addr,e),vt(t,e)}}function Gp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4uiv(this.addr,e),vt(t,e)}}function Hp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(th.compareFunction=Xo,r=th):r=vh,t.setTexture2D(e||r,s)}function Wp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||bh,s)}function Xp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Mh,s)}function qp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||yh,s)}function Yp(i){switch(i){case 5126:return Cp;case 35664:return Rp;case 35665:return Ip;case 35666:return Pp;case 35674:return Lp;case 35675:return Dp;case 35676:return Up;case 5124:case 35670:return Np;case 35667:case 35671:return Fp;case 35668:case 35672:return Op;case 35669:case 35673:return Bp;case 5125:return zp;case 36294:return Vp;case 36295:return kp;case 36296:return Gp;case 35678:case 36198:case 36298:case 36306:case 35682:return Hp;case 35679:case 36299:case 36307:return Wp;case 35680:case 36300:case 36308:case 36293:return Xp;case 36289:case 36303:case 36311:case 36292:return qp}}function Zp(i,e){i.uniform1fv(this.addr,e)}function Jp(i,e){let t=Wi(e,this.size,2);i.uniform2fv(this.addr,t)}function $p(i,e){let t=Wi(e,this.size,3);i.uniform3fv(this.addr,t)}function Kp(i,e){let t=Wi(e,this.size,4);i.uniform4fv(this.addr,t)}function jp(i,e){let t=Wi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Qp(i,e){let t=Wi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function em(i,e){let t=Wi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function tm(i,e){i.uniform1iv(this.addr,e)}function nm(i,e){i.uniform2iv(this.addr,e)}function im(i,e){i.uniform3iv(this.addr,e)}function sm(i,e){i.uniform4iv(this.addr,e)}function rm(i,e){i.uniform1uiv(this.addr,e)}function am(i,e){i.uniform2uiv(this.addr,e)}function om(i,e){i.uniform3uiv(this.addr,e)}function lm(i,e){i.uniform4uiv(this.addr,e)}function cm(i,e,t){let n=this.cache,s=e.length,r=Fa(t,s);_t(n,r)||(i.uniform1iv(this.addr,r),vt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||vh,r[a])}function hm(i,e,t){let n=this.cache,s=e.length,r=Fa(t,s);_t(n,r)||(i.uniform1iv(this.addr,r),vt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||bh,r[a])}function um(i,e,t){let n=this.cache,s=e.length,r=Fa(t,s);_t(n,r)||(i.uniform1iv(this.addr,r),vt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Mh,r[a])}function dm(i,e,t){let n=this.cache,s=e.length,r=Fa(t,s);_t(n,r)||(i.uniform1iv(this.addr,r),vt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||yh,r[a])}function fm(i){switch(i){case 5126:return Zp;case 35664:return Jp;case 35665:return $p;case 35666:return Kp;case 35674:return jp;case 35675:return Qp;case 35676:return em;case 5124:case 35670:return tm;case 35667:case 35671:return nm;case 35668:case 35672:return im;case 35669:case 35673:return sm;case 5125:return rm;case 36294:return am;case 36295:return om;case 36296:return lm;case 35678:case 36198:case 36298:case 36306:case 35682:return cm;case 35679:case 36299:case 36307:return hm;case 35680:case 36300:case 36308:case 36293:return um;case 36289:case 36303:case 36311:case 36292:return dm}}var sl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Yp(t.type)}},rl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=fm(t.type)}},al=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},il=/(\w+)(\])?(\[|\.)?/g;function oh(i,e){i.seq.push(e),i.map[e.id]=e}function pm(i,e,t){let n=i.name,s=n.length;for(il.lastIndex=0;;){let r=il.exec(n),a=il.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){oh(t,l===void 0?new sl(o,i,e):new rl(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new al(o),oh(t,h)),t=h}}}var Hi=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);pm(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function lh(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var mm=37297,xm=0;function gm(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var ch=new qe;function _m(i){et._getMatrix(ch,et.workingColorSpace,i);let e=`mat3( ${ch.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(i)){case ns:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return ke("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function hh(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+gm(i.getShaderSource(e),o)}else return r}function vm(i,e){let t=_m(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function ym(i,e){let t;switch(e){case Cc:t="Linear";break;case Rc:t="Reinhard";break;case Ic:t="Cineon";break;case qr:t="ACESFilmic";break;case Lc:t="AgX";break;case Dc:t="Neutral";break;case Pc:t="Custom";break;default:ke("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var La=new W;function bm(){et.getLuminanceCoefficients(La);let i=La.x.toFixed(4),e=La.y.toFixed(4),t=La.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Mm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ps).join(`
`)}function Sm(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function wm(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ps(i){return i!==""}function uh(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Am=/^[ \t]*#include +<([\w\d./]+)>/gm;function ol(i){return i.replace(Am,Em)}var Tm=new Map;function Em(i,e){let t=Ze[e];if(t===void 0){let n=Tm.get(e);if(n!==void 0)t=Ze[n],ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ol(t)}var Cm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fh(i){return i.replace(Cm,Rm)}function Rm(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ph(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Im(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Po?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===oc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===cn&&(e="SHADOWMAP_TYPE_VSM"),e}function Pm(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ai:case oi:e="ENVMAP_TYPE_CUBE";break;case Ss:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Lm(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case oi:e="ENVMAP_MODE_REFRACTION";break}return e}function Dm(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case No:e="ENVMAP_BLENDING_MULTIPLY";break;case Tc:e="ENVMAP_BLENDING_MIX";break;case Ec:e="ENVMAP_BLENDING_ADD";break}return e}function Um(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Nm(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=Im(t),l=Pm(t),d=Lm(t),h=Dm(t),u=Um(t),p=Mm(t),x=Sm(r),v=s.createProgram(),m,f,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Ps).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Ps).join(`
`),f.length>0&&(f+=`
`)):(m=[ph(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ps).join(`
`),f=[ph(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wn?"#define TONE_MAPPING":"",t.toneMapping!==wn?Ze.tonemapping_pars_fragment:"",t.toneMapping!==wn?ym("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,vm("linearToOutputTexel",t.outputColorSpace),bm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ps).join(`
`)),a=ol(a),a=uh(a,t),a=dh(a,t),o=ol(o),o=uh(o,t),o=dh(o,t),a=fh(a),o=fh(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===qo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===qo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let w=E+m+a,T=E+f+o,I=lh(s,s.VERTEX_SHADER,w),M=lh(s,s.FRAGMENT_SHADER,T);s.attachShader(v,I),s.attachShader(v,M),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function C(P){if(i.debug.checkShaderErrors){let G=s.getProgramInfoLog(v)||"",q=s.getShaderInfoLog(I)||"",K=s.getShaderInfoLog(M)||"",k=G.trim(),j=q.trim(),ce=K.trim(),V=!0,ne=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,I,M);else{let ue=hh(s,I,"vertex"),Ce=hh(s,M,"fragment");$e("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+k+`
`+ue+`
`+Ce)}else k!==""?ke("WebGLProgram: Program Info Log:",k):(j===""||ce==="")&&(ne=!1);ne&&(P.diagnostics={runnable:V,programLog:k,vertexShader:{log:j,prefix:m},fragmentShader:{log:ce,prefix:f}})}s.deleteShader(I),s.deleteShader(M),D=new Hi(s,v),S=wm(s,v)}let D;this.getUniforms=function(){return D===void 0&&C(this),D};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(v,mm)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=xm++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=I,this.fragmentShader=M,this}var Fm=0,ll=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new cl(e),t.set(e,n)),n}},cl=class{constructor(e){this.id=Fm++,this.code=e,this.usedTimes=0}};function Om(i,e,t,n,s,r,a){let o=new Li,c=new ll,l=new Set,d=[],h=s.logarithmicDepthBuffer,u=s.vertexTextures,p=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,b,P,G,q){let K=G.fog,k=q.geometry,j=S.isMeshStandardMaterial?G.environment:null,ce=(S.isMeshStandardMaterial?t:e).get(S.envMap||j),V=ce&&ce.mapping===Ss?ce.image.height:null,ne=x[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&ke("WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));let ue=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Ce=ue!==void 0?ue.length:0,We=0;k.morphAttributes.position!==void 0&&(We=1),k.morphAttributes.normal!==void 0&&(We=2),k.morphAttributes.color!==void 0&&(We=3);let Ye,De,Je,ee;if(ne){let st=fn[ne];Ye=st.vertexShader,De=st.fragmentShader}else Ye=S.vertexShader,De=S.fragmentShader,c.update(S),Je=c.getVertexShaderID(S),ee=c.getFragmentShaderID(S);let L=i.getRenderTarget(),X=i.state.buffers.depth.getReversed(),ie=q.isInstancedMesh===!0,le=q.isBatchedMesh===!0,Ae=!!S.map,O=!!S.matcap,Z=!!ce,ae=!!S.aoMap,_=!!S.lightMap,Q=!!S.bumpMap,$=!!S.normalMap,te=!!S.displacementMap,re=!!S.emissiveMap,Me=!!S.metalnessMap,ge=!!S.roughnessMap,Te=S.anisotropy>0,A=S.clearcoat>0,g=S.dispersion>0,F=S.iridescence>0,B=S.sheen>0,H=S.transmission>0,z=Te&&!!S.anisotropyMap,he=A&&!!S.clearcoatMap,de=A&&!!S.clearcoatNormalMap,Re=A&&!!S.clearcoatRoughnessMap,Le=F&&!!S.iridescenceMap,oe=F&&!!S.iridescenceThicknessMap,pe=B&&!!S.sheenColorMap,Be=B&&!!S.sheenRoughnessMap,Ne=!!S.specularMap,me=!!S.specularColorMap,Ue=!!S.specularIntensityMap,R=H&&!!S.transmissionMap,Se=H&&!!S.thicknessMap,_e=!!S.gradientMap,ve=!!S.alphaMap,fe=S.alphaTest>0,se=!!S.alphaHash,Ie=!!S.extensions,He=wn;S.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(He=i.toneMapping);let lt={shaderID:ne,shaderType:S.type,shaderName:S.name,vertexShader:Ye,fragmentShader:De,defines:S.defines,customVertexShaderID:Je,customFragmentShaderID:ee,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:le,batchingColor:le&&q._colorsTexture!==null,instancing:ie,instancingColor:ie&&q.instanceColor!==null,instancingMorph:ie&&q.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:L===null?i.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:ni,alphaToCoverage:!!S.alphaToCoverage,map:Ae,matcap:O,envMap:Z,envMapMode:Z&&ce.mapping,envMapCubeUVHeight:V,aoMap:ae,lightMap:_,bumpMap:Q,normalMap:$,displacementMap:u&&te,emissiveMap:re,normalMapObjectSpace:$&&S.normalMapType===Oc,normalMapTangentSpace:$&&S.normalMapType===Wo,metalnessMap:Me,roughnessMap:ge,anisotropy:Te,anisotropyMap:z,clearcoat:A,clearcoatMap:he,clearcoatNormalMap:de,clearcoatRoughnessMap:Re,dispersion:g,iridescence:F,iridescenceMap:Le,iridescenceThicknessMap:oe,sheen:B,sheenColorMap:pe,sheenRoughnessMap:Be,specularMap:Ne,specularColorMap:me,specularIntensityMap:Ue,transmission:H,transmissionMap:R,thicknessMap:Se,gradientMap:_e,opaque:S.transparent===!1&&S.blending===ei&&S.alphaToCoverage===!1,alphaMap:ve,alphaTest:fe,alphaHash:se,combine:S.combine,mapUv:Ae&&v(S.map.channel),aoMapUv:ae&&v(S.aoMap.channel),lightMapUv:_&&v(S.lightMap.channel),bumpMapUv:Q&&v(S.bumpMap.channel),normalMapUv:$&&v(S.normalMap.channel),displacementMapUv:te&&v(S.displacementMap.channel),emissiveMapUv:re&&v(S.emissiveMap.channel),metalnessMapUv:Me&&v(S.metalnessMap.channel),roughnessMapUv:ge&&v(S.roughnessMap.channel),anisotropyMapUv:z&&v(S.anisotropyMap.channel),clearcoatMapUv:he&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:de&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Le&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Be&&v(S.sheenRoughnessMap.channel),specularMapUv:Ne&&v(S.specularMap.channel),specularColorMapUv:me&&v(S.specularColorMap.channel),specularIntensityMapUv:Ue&&v(S.specularIntensityMap.channel),transmissionMapUv:R&&v(S.transmissionMap.channel),thicknessMapUv:Se&&v(S.thicknessMap.channel),alphaMapUv:ve&&v(S.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&($||Te),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!k.attributes.uv&&(Ae||ve),fog:!!K,useFog:S.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:X,skinning:q.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Ce,morphTextureStride:We,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:He,decodeVideoTexture:Ae&&S.map.isVideoTexture===!0&&et.getTransfer(S.map.colorSpace)===it,decodeVideoTextureEmissive:re&&S.emissiveMap.isVideoTexture===!0&&et.getTransfer(S.emissiveMap.colorSpace)===it,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===hn,flipSided:S.side===It,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ie&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&S.extensions.multiDraw===!0||le)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return lt.vertexUv1s=l.has(1),lt.vertexUv2s=l.has(2),lt.vertexUv3s=l.has(3),l.clear(),lt}function f(S){let b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(let P in S.defines)b.push(P),b.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(E(b,S),w(b,S),b.push(i.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function E(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function w(S,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),b.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),S.push(o.mask)}function T(S){let b=x[S.type],P;if(b){let G=fn[b];P=Zc.clone(G.uniforms)}else P=S.uniforms;return P}function I(S,b){let P;for(let G=0,q=d.length;G<q;G++){let K=d[G];if(K.cacheKey===b){P=K,++P.usedTimes;break}}return P===void 0&&(P=new Nm(i,b,S,r),d.push(P)),P}function M(S){if(--S.usedTimes===0){let b=d.indexOf(S);d[b]=d[d.length-1],d.pop(),S.destroy()}}function C(S){c.remove(S)}function D(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:T,acquireProgram:I,releaseProgram:M,releaseShaderCache:C,programs:d,dispose:D}}function Bm(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function zm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function mh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function xh(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h,u,p,x,v,m){let f=i[e];return f===void 0?(f={id:h.id,object:h,geometry:u,material:p,groupOrder:x,renderOrder:h.renderOrder,z:v,group:m},i[e]=f):(f.id=h.id,f.object=h,f.geometry=u,f.material=p,f.groupOrder=x,f.renderOrder=h.renderOrder,f.z=v,f.group=m),e++,f}function o(h,u,p,x,v,m){let f=a(h,u,p,x,v,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):t.push(f)}function c(h,u,p,x,v,m){let f=a(h,u,p,x,v,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function l(h,u){t.length>1&&t.sort(h||zm),n.length>1&&n.sort(u||mh),s.length>1&&s.sort(u||mh)}function d(){for(let h=e,u=i.length;h<u;h++){let p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:d,sort:l}}function Vm(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new xh,i.set(n,[a])):s>=r.length?(a=new xh,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function km(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new Xe};break;case"SpotLight":t={position:new W,direction:new W,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new W,halfWidth:new W,halfHeight:new W};break}return i[e.id]=t,t}}}function Gm(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Hm=0;function Wm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Xm(i){let e=new km,t=Gm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new W);let s=new W,r=new ht,a=new ht;function o(l){let d=0,h=0,u=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,x=0,v=0,m=0,f=0,E=0,w=0,T=0,I=0,M=0,C=0;l.sort(Wm);for(let S=0,b=l.length;S<b;S++){let P=l[S],G=P.color,q=P.intensity,K=P.distance,k=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=G.r*q,h+=G.g*q,u+=G.b*q;else if(P.isLightProbe){for(let j=0;j<9;j++)n.probe[j].addScaledVector(P.sh.coefficients[j],q);C++}else if(P.isDirectionalLight){let j=e.get(P);if(j.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let ce=P.shadow,V=t.get(P);V.shadowIntensity=ce.intensity,V.shadowBias=ce.bias,V.shadowNormalBias=ce.normalBias,V.shadowRadius=ce.radius,V.shadowMapSize=ce.mapSize,n.directionalShadow[p]=V,n.directionalShadowMap[p]=k,n.directionalShadowMatrix[p]=P.shadow.matrix,E++}n.directional[p]=j,p++}else if(P.isSpotLight){let j=e.get(P);j.position.setFromMatrixPosition(P.matrixWorld),j.color.copy(G).multiplyScalar(q),j.distance=K,j.coneCos=Math.cos(P.angle),j.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),j.decay=P.decay,n.spot[v]=j;let ce=P.shadow;if(P.map&&(n.spotLightMap[I]=P.map,I++,ce.updateMatrices(P),P.castShadow&&M++),n.spotLightMatrix[v]=ce.matrix,P.castShadow){let V=t.get(P);V.shadowIntensity=ce.intensity,V.shadowBias=ce.bias,V.shadowNormalBias=ce.normalBias,V.shadowRadius=ce.radius,V.shadowMapSize=ce.mapSize,n.spotShadow[v]=V,n.spotShadowMap[v]=k,T++}v++}else if(P.isRectAreaLight){let j=e.get(P);j.color.copy(G).multiplyScalar(q),j.halfWidth.set(P.width*.5,0,0),j.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=j,m++}else if(P.isPointLight){let j=e.get(P);if(j.color.copy(P.color).multiplyScalar(P.intensity),j.distance=P.distance,j.decay=P.decay,P.castShadow){let ce=P.shadow,V=t.get(P);V.shadowIntensity=ce.intensity,V.shadowBias=ce.bias,V.shadowNormalBias=ce.normalBias,V.shadowRadius=ce.radius,V.shadowMapSize=ce.mapSize,V.shadowCameraNear=ce.camera.near,V.shadowCameraFar=ce.camera.far,n.pointShadow[x]=V,n.pointShadowMap[x]=k,n.pointShadowMatrix[x]=P.shadow.matrix,w++}n.point[x]=j,x++}else if(P.isHemisphereLight){let j=e.get(P);j.skyColor.copy(P.color).multiplyScalar(q),j.groundColor.copy(P.groundColor).multiplyScalar(q),n.hemi[f]=j,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=be.LTC_FLOAT_1,n.rectAreaLTC2=be.LTC_FLOAT_2):(n.rectAreaLTC1=be.LTC_HALF_1,n.rectAreaLTC2=be.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=h,n.ambient[2]=u;let D=n.hash;(D.directionalLength!==p||D.pointLength!==x||D.spotLength!==v||D.rectAreaLength!==m||D.hemiLength!==f||D.numDirectionalShadows!==E||D.numPointShadows!==w||D.numSpotShadows!==T||D.numSpotMaps!==I||D.numLightProbes!==C)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=x,n.hemi.length=f,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=T+I-M,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=C,D.directionalLength=p,D.pointLength=x,D.spotLength=v,D.rectAreaLength=m,D.hemiLength=f,D.numDirectionalShadows=E,D.numPointShadows=w,D.numSpotShadows=T,D.numSpotMaps=I,D.numLightProbes=C,n.version=Hm++)}function c(l,d){let h=0,u=0,p=0,x=0,v=0,m=d.matrixWorldInverse;for(let f=0,E=l.length;f<E;f++){let w=l[f];if(w.isDirectionalLight){let T=n.directional[h];T.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),h++}else if(w.isSpotLight){let T=n.spot[p];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),p++}else if(w.isRectAreaLight){let T=n.rectArea[x];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(m),a.identity(),r.copy(w.matrixWorld),r.premultiply(m),a.extractRotation(r),T.halfWidth.set(w.width*.5,0,0),T.halfHeight.set(0,w.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),x++}else if(w.isPointLight){let T=n.point[u];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(m),u++}else if(w.isHemisphereLight){let T=n.hemi[v];T.direction.setFromMatrixPosition(w.matrixWorld),T.direction.transformDirection(m),v++}}}return{setup:o,setupView:c,state:n}}function gh(i){let e=new Xm(i),t=[],n=[];function s(d){l.camera=d,t.length=0,n.length=0}function r(d){t.push(d)}function a(d){n.push(d)}function o(){e.setup(t)}function c(d){e.setupView(t,d)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function qm(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new gh(i),e.set(s,[o])):r>=a.length?(o=new gh(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Ym=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Jm(i,e,t){let n=new Ni,s=new Qe,r=new Qe,a=new ft,o=new Er({depthPacking:Fc}),c=new Cr,l={},d=t.maxTextureSize,h={[bn]:It,[It]:bn,[hn]:hn},u=new Bt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:Ym,fragmentShader:Zm}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let x=new Rt;x.setAttribute("position",new gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Ot(x,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Po;let f=this.type;this.render=function(M,C,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;let S=i.getRenderTarget(),b=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),G=i.state;G.setBlending(un),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let q=f!==cn&&this.type===cn,K=f===cn&&this.type!==cn;for(let k=0,j=M.length;k<j;k++){let ce=M[k],V=ce.shadow;if(V===void 0){ke("WebGLShadowMap:",ce,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let ne=V.getFrameExtents();if(s.multiply(ne),r.copy(V.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/ne.x),s.x=r.x*ne.x,V.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/ne.y),s.y=r.y*ne.y,V.mapSize.y=r.y)),V.map===null||q===!0||K===!0){let Ce=this.type!==cn?{minFilter:Nt,magFilter:Nt}:{};V.map!==null&&V.map.dispose(),V.map=new on(s.x,s.y,Ce),V.map.texture.name=ce.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();let ue=V.getViewportCount();for(let Ce=0;Ce<ue;Ce++){let We=V.getViewport(Ce);a.set(r.x*We.x,r.y*We.y,r.x*We.z,r.y*We.w),G.viewport(a),V.updateMatrices(ce,Ce),n=V.getFrustum(),T(C,D,V.camera,ce,this.type)}V.isPointLightShadow!==!0&&this.type===cn&&E(V,D),V.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(S,b,P)};function E(M,C){let D=e.update(v);u.defines.VSM_SAMPLES!==M.blurSamples&&(u.defines.VSM_SAMPLES=M.blurSamples,p.defines.VSM_SAMPLES=M.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new on(s.x,s.y)),u.uniforms.shadow_pass.value=M.map.texture,u.uniforms.resolution.value=M.mapSize,u.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(C,null,D,u,v,null),p.uniforms.shadow_pass.value=M.mapPass.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(C,null,D,p,v,null)}function w(M,C,D,S){let b=null,P=D.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(P!==void 0)b=P;else if(b=D.isPointLight===!0?c:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let G=b.uuid,q=C.uuid,K=l[G];K===void 0&&(K={},l[G]=K);let k=K[q];k===void 0&&(k=b.clone(),K[q]=k,C.addEventListener("dispose",I)),b=k}if(b.visible=C.visible,b.wireframe=C.wireframe,S===cn?b.side=C.shadowSide!==null?C.shadowSide:C.side:b.side=C.shadowSide!==null?C.shadowSide:h[C.side],b.alphaMap=C.alphaMap,b.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,b.map=C.map,b.clipShadows=C.clipShadows,b.clippingPlanes=C.clippingPlanes,b.clipIntersection=C.clipIntersection,b.displacementMap=C.displacementMap,b.displacementScale=C.displacementScale,b.displacementBias=C.displacementBias,b.wireframeLinewidth=C.wireframeLinewidth,b.linewidth=C.linewidth,D.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let G=i.properties.get(b);G.light=D}return b}function T(M,C,D,S,b){if(M.visible===!1)return;if(M.layers.test(C.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&b===cn)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,M.matrixWorld);let q=e.update(M),K=M.material;if(Array.isArray(K)){let k=q.groups;for(let j=0,ce=k.length;j<ce;j++){let V=k[j],ne=K[V.materialIndex];if(ne&&ne.visible){let ue=w(M,ne,S,b);M.onBeforeShadow(i,M,C,D,q,ue,V),i.renderBufferDirect(D,null,q,ue,M,V),M.onAfterShadow(i,M,C,D,q,ue,V)}}}else if(K.visible){let k=w(M,K,S,b);M.onBeforeShadow(i,M,C,D,q,k,null),i.renderBufferDirect(D,null,q,k,M,null),M.onAfterShadow(i,M,C,D,q,k,null)}}let G=M.children;for(let q=0,K=G.length;q<K;q++)T(G[q],C,D,S,b)}function I(M){M.target.removeEventListener("dispose",I);for(let D in l){let S=l[D],b=M.target.uuid;b in S&&(S[b].dispose(),delete S[b])}}}var $m={[zr]:Vr,[kr]:Wr,[Gr]:Xr,[ti]:Hr,[Vr]:zr,[Wr]:kr,[Xr]:Gr,[Hr]:ti};function Km(i,e){function t(){let R=!1,Se=new ft,_e=null,ve=new ft(0,0,0,0);return{setMask:function(fe){_e!==fe&&!R&&(i.colorMask(fe,fe,fe,fe),_e=fe)},setLocked:function(fe){R=fe},setClear:function(fe,se,Ie,He,lt){lt===!0&&(fe*=He,se*=He,Ie*=He),Se.set(fe,se,Ie,He),ve.equals(Se)===!1&&(i.clearColor(fe,se,Ie,He),ve.copy(Se))},reset:function(){R=!1,_e=null,ve.set(-1,0,0,0)}}}function n(){let R=!1,Se=!1,_e=null,ve=null,fe=null;return{setReversed:function(se){if(Se!==se){let Ie=e.get("EXT_clip_control");se?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),Se=se;let He=fe;fe=null,this.setClear(He)}},getReversed:function(){return Se},setTest:function(se){se?L(i.DEPTH_TEST):X(i.DEPTH_TEST)},setMask:function(se){_e!==se&&!R&&(i.depthMask(se),_e=se)},setFunc:function(se){if(Se&&(se=$m[se]),ve!==se){switch(se){case zr:i.depthFunc(i.NEVER);break;case Vr:i.depthFunc(i.ALWAYS);break;case kr:i.depthFunc(i.LESS);break;case ti:i.depthFunc(i.LEQUAL);break;case Gr:i.depthFunc(i.EQUAL);break;case Hr:i.depthFunc(i.GEQUAL);break;case Wr:i.depthFunc(i.GREATER);break;case Xr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ve=se}},setLocked:function(se){R=se},setClear:function(se){fe!==se&&(Se&&(se=1-se),i.clearDepth(se),fe=se)},reset:function(){R=!1,_e=null,ve=null,fe=null,Se=!1}}}function s(){let R=!1,Se=null,_e=null,ve=null,fe=null,se=null,Ie=null,He=null,lt=null;return{setTest:function(st){R||(st?L(i.STENCIL_TEST):X(i.STENCIL_TEST))},setMask:function(st){Se!==st&&!R&&(i.stencilMask(st),Se=st)},setFunc:function(st,rn,Kt){(_e!==st||ve!==rn||fe!==Kt)&&(i.stencilFunc(st,rn,Kt),_e=st,ve=rn,fe=Kt)},setOp:function(st,rn,Kt){(se!==st||Ie!==rn||He!==Kt)&&(i.stencilOp(st,rn,Kt),se=st,Ie=rn,He=Kt)},setLocked:function(st){R=st},setClear:function(st){lt!==st&&(i.clearStencil(st),lt=st)},reset:function(){R=!1,Se=null,_e=null,ve=null,fe=null,se=null,Ie=null,He=null,lt=null}}}let r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap,d={},h={},u=new WeakMap,p=[],x=null,v=!1,m=null,f=null,E=null,w=null,T=null,I=null,M=null,C=new Xe(0,0,0),D=0,S=!1,b=null,P=null,G=null,q=null,K=null,k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,ce=0,V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(V)[1]),j=ce>=1):V.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),j=ce>=2);let ne=null,ue={},Ce=i.getParameter(i.SCISSOR_BOX),We=i.getParameter(i.VIEWPORT),Ye=new ft().fromArray(Ce),De=new ft().fromArray(We);function Je(R,Se,_e,ve){let fe=new Uint8Array(4),se=i.createTexture();i.bindTexture(R,se),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ie=0;Ie<_e;Ie++)R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?i.texImage3D(Se,0,i.RGBA,1,1,ve,0,i.RGBA,i.UNSIGNED_BYTE,fe):i.texImage2D(Se+Ie,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,fe);return se}let ee={};ee[i.TEXTURE_2D]=Je(i.TEXTURE_2D,i.TEXTURE_2D,1),ee[i.TEXTURE_CUBE_MAP]=Je(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[i.TEXTURE_2D_ARRAY]=Je(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ee[i.TEXTURE_3D]=Je(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),L(i.DEPTH_TEST),a.setFunc(ti),Q(!1),$(Io),L(i.CULL_FACE),ae(un);function L(R){d[R]!==!0&&(i.enable(R),d[R]=!0)}function X(R){d[R]!==!1&&(i.disable(R),d[R]=!1)}function ie(R,Se){return h[R]!==Se?(i.bindFramebuffer(R,Se),h[R]=Se,R===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Se),R===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Se),!0):!1}function le(R,Se){let _e=p,ve=!1;if(R){_e=u.get(Se),_e===void 0&&(_e=[],u.set(Se,_e));let fe=R.textures;if(_e.length!==fe.length||_e[0]!==i.COLOR_ATTACHMENT0){for(let se=0,Ie=fe.length;se<Ie;se++)_e[se]=i.COLOR_ATTACHMENT0+se;_e.length=fe.length,ve=!0}}else _e[0]!==i.BACK&&(_e[0]=i.BACK,ve=!0);ve&&i.drawBuffers(_e)}function Ae(R){return x!==R?(i.useProgram(R),x=R,!0):!1}let O={[Bn]:i.FUNC_ADD,[cc]:i.FUNC_SUBTRACT,[hc]:i.FUNC_REVERSE_SUBTRACT};O[uc]=i.MIN,O[dc]=i.MAX;let Z={[fc]:i.ZERO,[pc]:i.ONE,[mc]:i.SRC_COLOR,[hr]:i.SRC_ALPHA,[bc]:i.SRC_ALPHA_SATURATE,[vc]:i.DST_COLOR,[gc]:i.DST_ALPHA,[xc]:i.ONE_MINUS_SRC_COLOR,[ur]:i.ONE_MINUS_SRC_ALPHA,[yc]:i.ONE_MINUS_DST_COLOR,[_c]:i.ONE_MINUS_DST_ALPHA,[Mc]:i.CONSTANT_COLOR,[Sc]:i.ONE_MINUS_CONSTANT_COLOR,[wc]:i.CONSTANT_ALPHA,[Ac]:i.ONE_MINUS_CONSTANT_ALPHA};function ae(R,Se,_e,ve,fe,se,Ie,He,lt,st){if(R===un){v===!0&&(X(i.BLEND),v=!1);return}if(v===!1&&(L(i.BLEND),v=!0),R!==lc){if(R!==m||st!==S){if((f!==Bn||T!==Bn)&&(i.blendEquation(i.FUNC_ADD),f=Bn,T=Bn),st)switch(R){case ei:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Lo:i.blendFunc(i.ONE,i.ONE);break;case Do:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Uo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:$e("WebGLState: Invalid blending: ",R);break}else switch(R){case ei:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Lo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Do:$e("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Uo:$e("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$e("WebGLState: Invalid blending: ",R);break}E=null,w=null,I=null,M=null,C.set(0,0,0),D=0,m=R,S=st}return}fe=fe||Se,se=se||_e,Ie=Ie||ve,(Se!==f||fe!==T)&&(i.blendEquationSeparate(O[Se],O[fe]),f=Se,T=fe),(_e!==E||ve!==w||se!==I||Ie!==M)&&(i.blendFuncSeparate(Z[_e],Z[ve],Z[se],Z[Ie]),E=_e,w=ve,I=se,M=Ie),(He.equals(C)===!1||lt!==D)&&(i.blendColor(He.r,He.g,He.b,lt),C.copy(He),D=lt),m=R,S=!1}function _(R,Se){R.side===hn?X(i.CULL_FACE):L(i.CULL_FACE);let _e=R.side===It;Se&&(_e=!_e),Q(_e),R.blending===ei&&R.transparent===!1?ae(un):ae(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),r.setMask(R.colorWrite);let ve=R.stencilWrite;o.setTest(ve),ve&&(o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),re(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?L(i.SAMPLE_ALPHA_TO_COVERAGE):X(i.SAMPLE_ALPHA_TO_COVERAGE)}function Q(R){b!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),b=R)}function $(R){R!==rc?(L(i.CULL_FACE),R!==P&&(R===Io?i.cullFace(i.BACK):R===ac?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):X(i.CULL_FACE),P=R}function te(R){R!==G&&(j&&i.lineWidth(R),G=R)}function re(R,Se,_e){R?(L(i.POLYGON_OFFSET_FILL),(q!==Se||K!==_e)&&(i.polygonOffset(Se,_e),q=Se,K=_e)):X(i.POLYGON_OFFSET_FILL)}function Me(R){R?L(i.SCISSOR_TEST):X(i.SCISSOR_TEST)}function ge(R){R===void 0&&(R=i.TEXTURE0+k-1),ne!==R&&(i.activeTexture(R),ne=R)}function Te(R,Se,_e){_e===void 0&&(ne===null?_e=i.TEXTURE0+k-1:_e=ne);let ve=ue[_e];ve===void 0&&(ve={type:void 0,texture:void 0},ue[_e]=ve),(ve.type!==R||ve.texture!==Se)&&(ne!==_e&&(i.activeTexture(_e),ne=_e),i.bindTexture(R,Se||ee[R]),ve.type=R,ve.texture=Se)}function A(){let R=ue[ne];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function g(){try{i.compressedTexImage2D(...arguments)}catch(R){R("WebGLState:",R)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(R){R("WebGLState:",R)}}function B(){try{i.texSubImage2D(...arguments)}catch(R){R("WebGLState:",R)}}function H(){try{i.texSubImage3D(...arguments)}catch(R){R("WebGLState:",R)}}function z(){try{i.compressedTexSubImage2D(...arguments)}catch(R){R("WebGLState:",R)}}function he(){try{i.compressedTexSubImage3D(...arguments)}catch(R){R("WebGLState:",R)}}function de(){try{i.texStorage2D(...arguments)}catch(R){R("WebGLState:",R)}}function Re(){try{i.texStorage3D(...arguments)}catch(R){R("WebGLState:",R)}}function Le(){try{i.texImage2D(...arguments)}catch(R){R("WebGLState:",R)}}function oe(){try{i.texImage3D(...arguments)}catch(R){R("WebGLState:",R)}}function pe(R){Ye.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),Ye.copy(R))}function Be(R){De.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),De.copy(R))}function Ne(R,Se){let _e=l.get(Se);_e===void 0&&(_e=new WeakMap,l.set(Se,_e));let ve=_e.get(R);ve===void 0&&(ve=i.getUniformBlockIndex(Se,R.name),_e.set(R,ve))}function me(R,Se){let ve=l.get(Se).get(R);c.get(Se)!==ve&&(i.uniformBlockBinding(Se,ve,R.__bindingPointIndex),c.set(Se,ve))}function Ue(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},ne=null,ue={},h={},u=new WeakMap,p=[],x=null,v=!1,m=null,f=null,E=null,w=null,T=null,I=null,M=null,C=new Xe(0,0,0),D=0,S=!1,b=null,P=null,G=null,q=null,K=null,Ye.set(0,0,i.canvas.width,i.canvas.height),De.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:L,disable:X,bindFramebuffer:ie,drawBuffers:le,useProgram:Ae,setBlending:ae,setMaterial:_,setFlipSided:Q,setCullFace:$,setLineWidth:te,setPolygonOffset:re,setScissorTest:Me,activeTexture:ge,bindTexture:Te,unbindTexture:A,compressedTexImage2D:g,compressedTexImage3D:F,texImage2D:Le,texImage3D:oe,updateUBOMapping:Ne,uniformBlockBinding:me,texStorage2D:de,texStorage3D:Re,texSubImage2D:B,texSubImage3D:H,compressedTexSubImage2D:z,compressedTexSubImage3D:he,scissor:pe,viewport:Be,reset:Ue}}function jm(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Qe,d=new WeakMap,h,u=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(A,g){return p?new OffscreenCanvas(A,g):ss("canvas")}function v(A,g,F){let B=1,H=Te(A);if((H.width>F||H.height>F)&&(B=F/Math.max(H.width,H.height)),B<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let z=Math.floor(B*H.width),he=Math.floor(B*H.height);h===void 0&&(h=x(z,he));let de=g?x(z,he):h;return de.width=z,de.height=he,de.getContext("2d").drawImage(A,0,0,z,he),ke("WebGLRenderer: Texture has been resized from ("+H.width+"x"+H.height+") to ("+z+"x"+he+")."),de}else return"data"in A&&ke("WebGLRenderer: Image in DataTexture is too big ("+H.width+"x"+H.height+")."),A;return A}function m(A){return A.generateMipmaps}function f(A){i.generateMipmap(A)}function E(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(A,g,F,B,H=!1){if(A!==null){if(i[A]!==void 0)return i[A];ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let z=g;if(g===i.RED&&(F===i.FLOAT&&(z=i.R32F),F===i.HALF_FLOAT&&(z=i.R16F),F===i.UNSIGNED_BYTE&&(z=i.R8)),g===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(z=i.R8UI),F===i.UNSIGNED_SHORT&&(z=i.R16UI),F===i.UNSIGNED_INT&&(z=i.R32UI),F===i.BYTE&&(z=i.R8I),F===i.SHORT&&(z=i.R16I),F===i.INT&&(z=i.R32I)),g===i.RG&&(F===i.FLOAT&&(z=i.RG32F),F===i.HALF_FLOAT&&(z=i.RG16F),F===i.UNSIGNED_BYTE&&(z=i.RG8)),g===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(z=i.RG8UI),F===i.UNSIGNED_SHORT&&(z=i.RG16UI),F===i.UNSIGNED_INT&&(z=i.RG32UI),F===i.BYTE&&(z=i.RG8I),F===i.SHORT&&(z=i.RG16I),F===i.INT&&(z=i.RG32I)),g===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(z=i.RGB8UI),F===i.UNSIGNED_SHORT&&(z=i.RGB16UI),F===i.UNSIGNED_INT&&(z=i.RGB32UI),F===i.BYTE&&(z=i.RGB8I),F===i.SHORT&&(z=i.RGB16I),F===i.INT&&(z=i.RGB32I)),g===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(z=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(z=i.RGBA16UI),F===i.UNSIGNED_INT&&(z=i.RGBA32UI),F===i.BYTE&&(z=i.RGBA8I),F===i.SHORT&&(z=i.RGBA16I),F===i.INT&&(z=i.RGBA32I)),g===i.RGB&&(F===i.UNSIGNED_INT_5_9_9_9_REV&&(z=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(z=i.R11F_G11F_B10F)),g===i.RGBA){let he=H?ns:et.getTransfer(B);F===i.FLOAT&&(z=i.RGBA32F),F===i.HALF_FLOAT&&(z=i.RGBA16F),F===i.UNSIGNED_BYTE&&(z=he===it?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(z=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(z=i.RGB5_A1)}return(z===i.R16F||z===i.R32F||z===i.RG16F||z===i.RG32F||z===i.RGBA16F||z===i.RGBA32F)&&e.get("EXT_color_buffer_float"),z}function T(A,g){let F;return A?g===null||g===Wn||g===zi?F=i.DEPTH24_STENCIL8:g===dn?F=i.DEPTH32F_STENCIL8:g===Bi&&(F=i.DEPTH24_STENCIL8,ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Wn||g===zi?F=i.DEPTH_COMPONENT24:g===dn?F=i.DEPTH_COMPONENT32F:g===Bi&&(F=i.DEPTH_COMPONENT16),F}function I(A,g){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Nt&&A.minFilter!==Wt?Math.log2(Math.max(g.width,g.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?g.mipmaps.length:1}function M(A){let g=A.target;g.removeEventListener("dispose",M),D(g),g.isVideoTexture&&d.delete(g)}function C(A){let g=A.target;g.removeEventListener("dispose",C),b(g)}function D(A){let g=n.get(A);if(g.__webglInit===void 0)return;let F=A.source,B=u.get(F);if(B){let H=B[g.__cacheKey];H.usedTimes--,H.usedTimes===0&&S(A),Object.keys(B).length===0&&u.delete(F)}n.remove(A)}function S(A){let g=n.get(A);i.deleteTexture(g.__webglTexture);let F=A.source,B=u.get(F);delete B[g.__cacheKey],a.memory.textures--}function b(A){let g=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let B=0;B<6;B++){if(Array.isArray(g.__webglFramebuffer[B]))for(let H=0;H<g.__webglFramebuffer[B].length;H++)i.deleteFramebuffer(g.__webglFramebuffer[B][H]);else i.deleteFramebuffer(g.__webglFramebuffer[B]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[B])}else{if(Array.isArray(g.__webglFramebuffer))for(let B=0;B<g.__webglFramebuffer.length;B++)i.deleteFramebuffer(g.__webglFramebuffer[B]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let B=0;B<g.__webglColorRenderbuffer.length;B++)g.__webglColorRenderbuffer[B]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[B]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let F=A.textures;for(let B=0,H=F.length;B<H;B++){let z=n.get(F[B]);z.__webglTexture&&(i.deleteTexture(z.__webglTexture),a.memory.textures--),n.remove(F[B])}n.remove(A)}let P=0;function G(){P=0}function q(){let A=P;return A>=s.maxTextures&&ke("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),P+=1,A}function K(A){let g=[];return g.push(A.wrapS),g.push(A.wrapT),g.push(A.wrapR||0),g.push(A.magFilter),g.push(A.minFilter),g.push(A.anisotropy),g.push(A.internalFormat),g.push(A.format),g.push(A.type),g.push(A.generateMipmaps),g.push(A.premultiplyAlpha),g.push(A.flipY),g.push(A.unpackAlignment),g.push(A.colorSpace),g.join()}function k(A,g){let F=n.get(A);if(A.isVideoTexture&&Me(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&F.__version!==A.version){let B=A.image;if(B===null)ke("WebGLRenderer: Texture marked for update but no image data found.");else if(B.complete===!1)ke("WebGLRenderer: Texture marked for update but image is incomplete");else{ee(F,A,g);return}}else A.isExternalTexture&&(F.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+g)}function j(A,g){let F=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){ee(F,A,g);return}else A.isExternalTexture&&(F.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+g)}function ce(A,g){let F=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){ee(F,A,g);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+g)}function V(A,g){let F=n.get(A);if(A.version>0&&F.__version!==A.version){L(F,A,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+g)}let ne={[dr]:i.REPEAT,[an]:i.CLAMP_TO_EDGE,[fr]:i.MIRRORED_REPEAT},ue={[Nt]:i.NEAREST,[Uc]:i.NEAREST_MIPMAP_NEAREST,[ws]:i.NEAREST_MIPMAP_LINEAR,[Wt]:i.LINEAR,[Jr]:i.LINEAR_MIPMAP_NEAREST,[Hn]:i.LINEAR_MIPMAP_LINEAR},Ce={[Bc]:i.NEVER,[Wc]:i.ALWAYS,[zc]:i.LESS,[Xo]:i.LEQUAL,[Vc]:i.EQUAL,[Hc]:i.GEQUAL,[kc]:i.GREATER,[Gc]:i.NOTEQUAL};function We(A,g){if(g.type===dn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Wt||g.magFilter===Jr||g.magFilter===ws||g.magFilter===Hn||g.minFilter===Wt||g.minFilter===Jr||g.minFilter===ws||g.minFilter===Hn)&&ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,ne[g.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,ne[g.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,ne[g.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,ue[g.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,ue[g.minFilter]),g.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Ce[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Nt||g.minFilter!==ws&&g.minFilter!==Hn||g.type===dn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){let F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function Ye(A,g){let F=!1;A.__webglInit===void 0&&(A.__webglInit=!0,g.addEventListener("dispose",M));let B=g.source,H=u.get(B);H===void 0&&(H={},u.set(B,H));let z=K(g);if(z!==A.__cacheKey){H[z]===void 0&&(H[z]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),H[z].usedTimes++;let he=H[A.__cacheKey];he!==void 0&&(H[A.__cacheKey].usedTimes--,he.usedTimes===0&&S(g)),A.__cacheKey=z,A.__webglTexture=H[z].texture}return F}function De(A,g,F){return Math.floor(Math.floor(A/F)/g)}function Je(A,g,F,B){let z=A.updateRanges;if(z.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,F,B,g.data);else{z.sort((oe,pe)=>oe.start-pe.start);let he=0;for(let oe=1;oe<z.length;oe++){let pe=z[he],Be=z[oe],Ne=pe.start+pe.count,me=De(Be.start,g.width,4),Ue=De(pe.start,g.width,4);Be.start<=Ne+1&&me===Ue&&De(Be.start+Be.count-1,g.width,4)===me?pe.count=Math.max(pe.count,Be.start+Be.count-pe.start):(++he,z[he]=Be)}z.length=he+1;let de=i.getParameter(i.UNPACK_ROW_LENGTH),Re=i.getParameter(i.UNPACK_SKIP_PIXELS),Le=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let oe=0,pe=z.length;oe<pe;oe++){let Be=z[oe],Ne=Math.floor(Be.start/4),me=Math.ceil(Be.count/4),Ue=Ne%g.width,R=Math.floor(Ne/g.width),Se=me,_e=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ue),i.pixelStorei(i.UNPACK_SKIP_ROWS,R),t.texSubImage2D(i.TEXTURE_2D,0,Ue,R,Se,_e,F,B,g.data)}A.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,de),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Re),i.pixelStorei(i.UNPACK_SKIP_ROWS,Le)}}function ee(A,g,F){let B=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(B=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(B=i.TEXTURE_3D);let H=Ye(A,g),z=g.source;t.bindTexture(B,A.__webglTexture,i.TEXTURE0+F);let he=n.get(z);if(z.version!==he.__version||H===!0){t.activeTexture(i.TEXTURE0+F);let de=et.getPrimaries(et.workingColorSpace),Re=g.colorSpace===An?null:et.getPrimaries(g.colorSpace),Le=g.colorSpace===An||de===Re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let oe=v(g.image,!1,s.maxTextureSize);oe=ge(g,oe);let pe=r.convert(g.format,g.colorSpace),Be=r.convert(g.type),Ne=w(g.internalFormat,pe,Be,g.colorSpace,g.isVideoTexture);We(B,g);let me,Ue=g.mipmaps,R=g.isVideoTexture!==!0,Se=he.__version===void 0||H===!0,_e=z.dataReady,ve=I(g,oe);if(g.isDepthTexture)Ne=T(g.format===Vi,g.type),Se&&(R?t.texStorage2D(i.TEXTURE_2D,1,Ne,oe.width,oe.height):t.texImage2D(i.TEXTURE_2D,0,Ne,oe.width,oe.height,0,pe,Be,null));else if(g.isDataTexture)if(Ue.length>0){R&&Se&&t.texStorage2D(i.TEXTURE_2D,ve,Ne,Ue[0].width,Ue[0].height);for(let fe=0,se=Ue.length;fe<se;fe++)me=Ue[fe],R?_e&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,me.width,me.height,pe,Be,me.data):t.texImage2D(i.TEXTURE_2D,fe,Ne,me.width,me.height,0,pe,Be,me.data);g.generateMipmaps=!1}else R?(Se&&t.texStorage2D(i.TEXTURE_2D,ve,Ne,oe.width,oe.height),_e&&Je(g,oe,pe,Be)):t.texImage2D(i.TEXTURE_2D,0,Ne,oe.width,oe.height,0,pe,Be,oe.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){R&&Se&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,Ne,Ue[0].width,Ue[0].height,oe.depth);for(let fe=0,se=Ue.length;fe<se;fe++)if(me=Ue[fe],g.format!==Jt)if(pe!==null)if(R){if(_e)if(g.layerUpdates.size>0){let Ie=jo(me.width,me.height,g.format,g.type);for(let He of g.layerUpdates){let lt=me.data.subarray(He*Ie/me.data.BYTES_PER_ELEMENT,(He+1)*Ie/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,He,me.width,me.height,1,pe,lt)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,0,me.width,me.height,oe.depth,pe,me.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,fe,Ne,me.width,me.height,oe.depth,0,me.data,0,0);else ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else R?_e&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,0,me.width,me.height,oe.depth,pe,Be,me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,fe,Ne,me.width,me.height,oe.depth,0,pe,Be,me.data)}else{R&&Se&&t.texStorage2D(i.TEXTURE_2D,ve,Ne,Ue[0].width,Ue[0].height);for(let fe=0,se=Ue.length;fe<se;fe++)me=Ue[fe],g.format!==Jt?pe!==null?R?_e&&t.compressedTexSubImage2D(i.TEXTURE_2D,fe,0,0,me.width,me.height,pe,me.data):t.compressedTexImage2D(i.TEXTURE_2D,fe,Ne,me.width,me.height,0,me.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):R?_e&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,me.width,me.height,pe,Be,me.data):t.texImage2D(i.TEXTURE_2D,fe,Ne,me.width,me.height,0,pe,Be,me.data)}else if(g.isDataArrayTexture)if(R){if(Se&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,Ne,oe.width,oe.height,oe.depth),_e)if(g.layerUpdates.size>0){let fe=jo(oe.width,oe.height,g.format,g.type);for(let se of g.layerUpdates){let Ie=oe.data.subarray(se*fe/oe.data.BYTES_PER_ELEMENT,(se+1)*fe/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,se,oe.width,oe.height,1,pe,Be,Ie)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,pe,Be,oe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ne,oe.width,oe.height,oe.depth,0,pe,Be,oe.data);else if(g.isData3DTexture)R?(Se&&t.texStorage3D(i.TEXTURE_3D,ve,Ne,oe.width,oe.height,oe.depth),_e&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,pe,Be,oe.data)):t.texImage3D(i.TEXTURE_3D,0,Ne,oe.width,oe.height,oe.depth,0,pe,Be,oe.data);else if(g.isFramebufferTexture){if(Se)if(R)t.texStorage2D(i.TEXTURE_2D,ve,Ne,oe.width,oe.height);else{let fe=oe.width,se=oe.height;for(let Ie=0;Ie<ve;Ie++)t.texImage2D(i.TEXTURE_2D,Ie,Ne,fe,se,0,pe,Be,null),fe>>=1,se>>=1}}else if(Ue.length>0){if(R&&Se){let fe=Te(Ue[0]);t.texStorage2D(i.TEXTURE_2D,ve,Ne,fe.width,fe.height)}for(let fe=0,se=Ue.length;fe<se;fe++)me=Ue[fe],R?_e&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,pe,Be,me):t.texImage2D(i.TEXTURE_2D,fe,Ne,pe,Be,me);g.generateMipmaps=!1}else if(R){if(Se){let fe=Te(oe);t.texStorage2D(i.TEXTURE_2D,ve,Ne,fe.width,fe.height)}_e&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,pe,Be,oe)}else t.texImage2D(i.TEXTURE_2D,0,Ne,pe,Be,oe);m(g)&&f(B),he.__version=z.version,g.onUpdate&&g.onUpdate(g)}A.__version=g.version}function L(A,g,F){if(g.image.length!==6)return;let B=Ye(A,g),H=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+F);let z=n.get(H);if(H.version!==z.__version||B===!0){t.activeTexture(i.TEXTURE0+F);let he=et.getPrimaries(et.workingColorSpace),de=g.colorSpace===An?null:et.getPrimaries(g.colorSpace),Re=g.colorSpace===An||he===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let Le=g.isCompressedTexture||g.image[0].isCompressedTexture,oe=g.image[0]&&g.image[0].isDataTexture,pe=[];for(let se=0;se<6;se++)!Le&&!oe?pe[se]=v(g.image[se],!0,s.maxCubemapSize):pe[se]=oe?g.image[se].image:g.image[se],pe[se]=ge(g,pe[se]);let Be=pe[0],Ne=r.convert(g.format,g.colorSpace),me=r.convert(g.type),Ue=w(g.internalFormat,Ne,me,g.colorSpace),R=g.isVideoTexture!==!0,Se=z.__version===void 0||B===!0,_e=H.dataReady,ve=I(g,Be);We(i.TEXTURE_CUBE_MAP,g);let fe;if(Le){R&&Se&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,Ue,Be.width,Be.height);for(let se=0;se<6;se++){fe=pe[se].mipmaps;for(let Ie=0;Ie<fe.length;Ie++){let He=fe[Ie];g.format!==Jt?Ne!==null?R?_e&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie,0,0,He.width,He.height,Ne,He.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie,Ue,He.width,He.height,0,He.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):R?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie,0,0,He.width,He.height,Ne,me,He.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie,Ue,He.width,He.height,0,Ne,me,He.data)}}}else{if(fe=g.mipmaps,R&&Se){fe.length>0&&ve++;let se=Te(pe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,Ue,se.width,se.height)}for(let se=0;se<6;se++)if(oe){R?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,pe[se].width,pe[se].height,Ne,me,pe[se].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ue,pe[se].width,pe[se].height,0,Ne,me,pe[se].data);for(let Ie=0;Ie<fe.length;Ie++){let lt=fe[Ie].image[se].image;R?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie+1,0,0,lt.width,lt.height,Ne,me,lt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie+1,Ue,lt.width,lt.height,0,Ne,me,lt.data)}}else{R?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Ne,me,pe[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ue,Ne,me,pe[se]);for(let Ie=0;Ie<fe.length;Ie++){let He=fe[Ie];R?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie+1,0,0,Ne,me,He.image[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie+1,Ue,Ne,me,He.image[se])}}}m(g)&&f(i.TEXTURE_CUBE_MAP),z.__version=H.version,g.onUpdate&&g.onUpdate(g)}A.__version=g.version}function X(A,g,F,B,H,z){let he=r.convert(F.format,F.colorSpace),de=r.convert(F.type),Re=w(F.internalFormat,he,de,F.colorSpace),Le=n.get(g),oe=n.get(F);if(oe.__renderTarget=g,!Le.__hasExternalTextures){let pe=Math.max(1,g.width>>z),Be=Math.max(1,g.height>>z);H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?t.texImage3D(H,z,Re,pe,Be,g.depth,0,he,de,null):t.texImage2D(H,z,Re,pe,Be,0,he,de,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),re(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,B,H,oe.__webglTexture,0,te(g)):(H===i.TEXTURE_2D||H>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&H<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,B,H,oe.__webglTexture,z),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ie(A,g,F){if(i.bindRenderbuffer(i.RENDERBUFFER,A),g.depthBuffer){let B=g.depthTexture,H=B&&B.isDepthTexture?B.type:null,z=T(g.stencilBuffer,H),he=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=te(g);re(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de,z,g.width,g.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,de,z,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,z,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,A)}else{let B=g.textures;for(let H=0;H<B.length;H++){let z=B[H],he=r.convert(z.format,z.colorSpace),de=r.convert(z.type),Re=w(z.internalFormat,he,de,z.colorSpace),Le=te(g);F&&re(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Le,Re,g.width,g.height):re(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Le,Re,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,Re,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function le(A,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let B=n.get(g.depthTexture);B.__renderTarget=g,(!B.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),k(g.depthTexture,0);let H=B.__webglTexture,z=te(g);if(g.depthTexture.format===Ci)re(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,H,0,z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,H,0);else if(g.depthTexture.format===Vi)re(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,H,0,z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,H,0);else throw new Error("Unknown depthTexture format")}function Ae(A){let g=n.get(A),F=A.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==A.depthTexture){let B=A.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),B){let H=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,B.removeEventListener("dispose",H)};B.addEventListener("dispose",H),g.__depthDisposeCallback=H}g.__boundDepthTexture=B}if(A.depthTexture&&!g.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");let B=A.texture.mipmaps;B&&B.length>0?le(g.__webglFramebuffer[0],A):le(g.__webglFramebuffer,A)}else if(F){g.__webglDepthbuffer=[];for(let B=0;B<6;B++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[B]),g.__webglDepthbuffer[B]===void 0)g.__webglDepthbuffer[B]=i.createRenderbuffer(),ie(g.__webglDepthbuffer[B],A,!1);else{let H=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,z=g.__webglDepthbuffer[B];i.bindRenderbuffer(i.RENDERBUFFER,z),i.framebufferRenderbuffer(i.FRAMEBUFFER,H,i.RENDERBUFFER,z)}}else{let B=A.texture.mipmaps;if(B&&B.length>0?t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),ie(g.__webglDepthbuffer,A,!1);else{let H=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,z=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,z),i.framebufferRenderbuffer(i.FRAMEBUFFER,H,i.RENDERBUFFER,z)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function O(A,g,F){let B=n.get(A);g!==void 0&&X(B.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Ae(A)}function Z(A){let g=A.texture,F=n.get(A),B=n.get(g);A.addEventListener("dispose",C);let H=A.textures,z=A.isWebGLCubeRenderTarget===!0,he=H.length>1;if(he||(B.__webglTexture===void 0&&(B.__webglTexture=i.createTexture()),B.__version=g.version,a.memory.textures++),z){F.__webglFramebuffer=[];for(let de=0;de<6;de++)if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer[de]=[];for(let Re=0;Re<g.mipmaps.length;Re++)F.__webglFramebuffer[de][Re]=i.createFramebuffer()}else F.__webglFramebuffer[de]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer=[];for(let de=0;de<g.mipmaps.length;de++)F.__webglFramebuffer[de]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(he)for(let de=0,Re=H.length;de<Re;de++){let Le=n.get(H[de]);Le.__webglTexture===void 0&&(Le.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&re(A)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let de=0;de<H.length;de++){let Re=H[de];F.__webglColorRenderbuffer[de]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[de]);let Le=r.convert(Re.format,Re.colorSpace),oe=r.convert(Re.type),pe=w(Re.internalFormat,Le,oe,Re.colorSpace,A.isXRRenderTarget===!0),Be=te(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Be,pe,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,F.__webglColorRenderbuffer[de])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),ie(F.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(z){t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture),We(i.TEXTURE_CUBE_MAP,g);for(let de=0;de<6;de++)if(g.mipmaps&&g.mipmaps.length>0)for(let Re=0;Re<g.mipmaps.length;Re++)X(F.__webglFramebuffer[de][Re],A,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Re);else X(F.__webglFramebuffer[de],A,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);m(g)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){for(let de=0,Re=H.length;de<Re;de++){let Le=H[de],oe=n.get(Le),pe=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(pe=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(pe,oe.__webglTexture),We(pe,Le),X(F.__webglFramebuffer,A,Le,i.COLOR_ATTACHMENT0+de,pe,0),m(Le)&&f(pe)}t.unbindTexture()}else{let de=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(de=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(de,B.__webglTexture),We(de,g),g.mipmaps&&g.mipmaps.length>0)for(let Re=0;Re<g.mipmaps.length;Re++)X(F.__webglFramebuffer[Re],A,g,i.COLOR_ATTACHMENT0,de,Re);else X(F.__webglFramebuffer,A,g,i.COLOR_ATTACHMENT0,de,0);m(g)&&f(de),t.unbindTexture()}A.depthBuffer&&Ae(A)}function ae(A){let g=A.textures;for(let F=0,B=g.length;F<B;F++){let H=g[F];if(m(H)){let z=E(A),he=n.get(H).__webglTexture;t.bindTexture(z,he),f(z),t.unbindTexture()}}}let _=[],Q=[];function $(A){if(A.samples>0){if(re(A)===!1){let g=A.textures,F=A.width,B=A.height,H=i.COLOR_BUFFER_BIT,z=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=n.get(A),de=g.length>1;if(de)for(let Le=0;Le<g.length;Le++)t.bindFramebuffer(i.FRAMEBUFFER,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,he.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer);let Re=A.texture.mipmaps;Re&&Re.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let Le=0;Le<g.length;Le++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(H|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(H|=i.STENCIL_BUFFER_BIT)),de){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,he.__webglColorRenderbuffer[Le]);let oe=n.get(g[Le]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,oe,0)}i.blitFramebuffer(0,0,F,B,0,0,F,B,H,i.NEAREST),c===!0&&(_.length=0,Q.length=0,_.push(i.COLOR_ATTACHMENT0+Le),A.depthBuffer&&A.resolveDepthBuffer===!1&&(_.push(z),Q.push(z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Q)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,_))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),de)for(let Le=0;Le<g.length;Le++){t.bindFramebuffer(i.FRAMEBUFFER,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.RENDERBUFFER,he.__webglColorRenderbuffer[Le]);let oe=n.get(g[Le]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,he.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.TEXTURE_2D,oe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){let g=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function te(A){return Math.min(s.maxSamples,A.samples)}function re(A){let g=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Me(A){let g=a.render.frame;d.get(A)!==g&&(d.set(A,g),A.update())}function ge(A,g){let F=A.colorSpace,B=A.format,H=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||F!==ni&&F!==An&&(et.getTransfer(F)===it?(B!==Jt||H!==sn)&&ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$e("WebGLTextures: Unsupported texture color space:",F)),g}function Te(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=q,this.resetTextureUnits=G,this.setTexture2D=k,this.setTexture2DArray=j,this.setTexture3D=ce,this.setTextureCube=V,this.rebindTextures=O,this.setupRenderTarget=Z,this.updateRenderTargetMipmap=ae,this.updateMultisampleRenderTarget=$,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=X,this.useMultisampledRTT=re}function Qm(i,e){function t(n,s=An){let r,a=et.getTransfer(s);if(n===sn)return i.UNSIGNED_BYTE;if(n===Kr)return i.UNSIGNED_SHORT_4_4_4_4;if(n===jr)return i.UNSIGNED_SHORT_5_5_5_1;if(n===zo)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Vo)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Oo)return i.BYTE;if(n===Bo)return i.SHORT;if(n===Bi)return i.UNSIGNED_SHORT;if(n===$r)return i.INT;if(n===Wn)return i.UNSIGNED_INT;if(n===dn)return i.FLOAT;if(n===li)return i.HALF_FLOAT;if(n===ko)return i.ALPHA;if(n===Go)return i.RGB;if(n===Jt)return i.RGBA;if(n===Ci)return i.DEPTH_COMPONENT;if(n===Vi)return i.DEPTH_STENCIL;if(n===Ho)return i.RED;if(n===Qr)return i.RED_INTEGER;if(n===ea)return i.RG;if(n===ta)return i.RG_INTEGER;if(n===na)return i.RGBA_INTEGER;if(n===As||n===Ts||n===Es||n===Cs)if(a===it)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===As)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ts)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Es)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Cs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===As)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ts)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Es)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Cs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ia||n===sa||n===ra||n===aa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ia)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===sa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ra)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===aa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===oa||n===la||n===ca)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===oa||n===la)return a===it?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ca)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ha||n===ua||n===da||n===fa||n===pa||n===ma||n===xa||n===ga||n===_a||n===va||n===ya||n===ba||n===Ma||n===Sa)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ha)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ua)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===da)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fa)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===pa)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ma)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===xa)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ga)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===_a)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===va)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ya)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ba)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ma)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Sa)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===wa||n===Aa||n===Ta)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===wa)return a===it?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Aa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ta)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ea||n===Ca||n===Ra||n===Ia)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ea)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ca)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ra)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ia)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===zi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var e0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,t0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,hl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ps(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Bt({vertexShader:e0,fragmentShader:t0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ot(new ms(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ul=class extends Mn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,d=null,h=null,u=null,p=null,x=null,v=typeof XRWebGLBinding<"u",m=new hl,f={},E=t.getContextAttributes(),w=null,T=null,I=[],M=[],C=new Qe,D=null,S=new wt;S.viewport=new ft;let b=new wt;b.viewport=new ft;let P=[S,b],G=new Br,q=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let L=I[ee];return L===void 0&&(L=new Ui,I[ee]=L),L.getTargetRaySpace()},this.getControllerGrip=function(ee){let L=I[ee];return L===void 0&&(L=new Ui,I[ee]=L),L.getGripSpace()},this.getHand=function(ee){let L=I[ee];return L===void 0&&(L=new Ui,I[ee]=L),L.getHandSpace()};function k(ee){let L=M.indexOf(ee.inputSource);if(L===-1)return;let X=I[L];X!==void 0&&(X.update(ee.inputSource,ee.frame,l||a),X.dispatchEvent({type:ee.type,data:ee.inputSource}))}function j(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",ce);for(let ee=0;ee<I.length;ee++){let L=M[ee];L!==null&&(M[ee]=null,I[ee].disconnect(L))}q=null,K=null,m.reset();for(let ee in f)delete f[ee];e.setRenderTarget(w),p=null,u=null,h=null,s=null,T=null,Je.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){r=ee,n.isPresenting===!0&&ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){o=ee,n.isPresenting===!0&&ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(ee){l=ee},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return h===null&&v&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(ee){if(s=ee,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",j),s.addEventListener("inputsourceschange",ce),E.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(C),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let X=null,ie=null,le=null;E.depth&&(le=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,X=E.stencil?Vi:Ci,ie=E.stencil?zi:Wn);let Ae={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:r};h=this.getBinding(),u=h.createProjectionLayer(Ae),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),T=new on(u.textureWidth,u.textureHeight,{format:Jt,type:sn,depthTexture:new fs(u.textureWidth,u.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{let X={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,X),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),T=new on(p.framebufferWidth,p.framebufferHeight,{format:Jt,type:sn,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Je.setContext(s),Je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ce(ee){for(let L=0;L<ee.removed.length;L++){let X=ee.removed[L],ie=M.indexOf(X);ie>=0&&(M[ie]=null,I[ie].disconnect(X))}for(let L=0;L<ee.added.length;L++){let X=ee.added[L],ie=M.indexOf(X);if(ie===-1){for(let Ae=0;Ae<I.length;Ae++)if(Ae>=M.length){M.push(X),ie=Ae;break}else if(M[Ae]===null){M[Ae]=X,ie=Ae;break}if(ie===-1)break}let le=I[ie];le&&le.connect(X)}}let V=new W,ne=new W;function ue(ee,L,X){V.setFromMatrixPosition(L.matrixWorld),ne.setFromMatrixPosition(X.matrixWorld);let ie=V.distanceTo(ne),le=L.projectionMatrix.elements,Ae=X.projectionMatrix.elements,O=le[14]/(le[10]-1),Z=le[14]/(le[10]+1),ae=(le[9]+1)/le[5],_=(le[9]-1)/le[5],Q=(le[8]-1)/le[0],$=(Ae[8]+1)/Ae[0],te=O*Q,re=O*$,Me=ie/(-Q+$),ge=Me*-Q;if(L.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(ge),ee.translateZ(Me),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),le[10]===-1)ee.projectionMatrix.copy(L.projectionMatrix),ee.projectionMatrixInverse.copy(L.projectionMatrixInverse);else{let Te=O+Me,A=Z+Me,g=te-ge,F=re+(ie-ge),B=ae*Z/A*Te,H=_*Z/A*Te;ee.projectionMatrix.makePerspective(g,F,B,H,Te,A),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function Ce(ee,L){L===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(L.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(s===null)return;let L=ee.near,X=ee.far;m.texture!==null&&(m.depthNear>0&&(L=m.depthNear),m.depthFar>0&&(X=m.depthFar)),G.near=b.near=S.near=L,G.far=b.far=S.far=X,(q!==G.near||K!==G.far)&&(s.updateRenderState({depthNear:G.near,depthFar:G.far}),q=G.near,K=G.far),G.layers.mask=ee.layers.mask|6,S.layers.mask=G.layers.mask&3,b.layers.mask=G.layers.mask&5;let ie=ee.parent,le=G.cameras;Ce(G,ie);for(let Ae=0;Ae<le.length;Ae++)Ce(le[Ae],ie);le.length===2?ue(G,S,b):G.projectionMatrix.copy(S.projectionMatrix),We(ee,G,ie)};function We(ee,L,X){X===null?ee.matrix.copy(L.matrixWorld):(ee.matrix.copy(X.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(L.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(L.projectionMatrix),ee.projectionMatrixInverse.copy(L.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=mr*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(u===null&&p===null))return c},this.setFoveation=function(ee){c=ee,u!==null&&(u.fixedFoveation=ee),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ee)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(G)},this.getCameraTexture=function(ee){return f[ee]};let Ye=null;function De(ee,L){if(d=L.getViewerPose(l||a),x=L,d!==null){let X=d.views;p!==null&&(e.setRenderTargetFramebuffer(T,p.framebuffer),e.setRenderTarget(T));let ie=!1;X.length!==G.cameras.length&&(G.cameras.length=0,ie=!0);for(let Z=0;Z<X.length;Z++){let ae=X[Z],_=null;if(p!==null)_=p.getViewport(ae);else{let $=h.getViewSubImage(u,ae);_=$.viewport,Z===0&&(e.setRenderTargetTextures(T,$.colorTexture,$.depthStencilTexture),e.setRenderTarget(T))}let Q=P[Z];Q===void 0&&(Q=new wt,Q.layers.enable(Z),Q.viewport=new ft,P[Z]=Q),Q.matrix.fromArray(ae.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(ae.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(_.x,_.y,_.width,_.height),Z===0&&(G.matrix.copy(Q.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),ie===!0&&G.cameras.push(Q)}let le=s.enabledFeatures;if(le&&le.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){h=n.getBinding();let Z=h.getDepthInformation(X[0]);Z&&Z.isValid&&Z.texture&&m.init(Z,s.renderState)}if(le&&le.includes("camera-access")&&v){e.state.unbindTexture(),h=n.getBinding();for(let Z=0;Z<X.length;Z++){let ae=X[Z].camera;if(ae){let _=f[ae];_||(_=new ps,f[ae]=_);let Q=h.getCameraImage(ae);_.sourceTexture=Q}}}}for(let X=0;X<I.length;X++){let ie=M[X],le=I[X];ie!==null&&le!==void 0&&le.update(ie,L,l||a)}Ye&&Ye(ee,L),L.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:L}),x=null}let Je=new _h;Je.setAnimationLoop(De),this.setAnimationLoop=function(ee){Ye=ee},this.dispose=function(){}}},ui=new nn,n0=new ht;function i0(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Jo(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,E,w,T){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),h(m,f)):f.isMeshPhongMaterial?(r(m,f),d(m,f)):f.isMeshStandardMaterial?(r(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,T)):f.isMeshMatcapMaterial?(r(m,f),x(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),v(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,E,w):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===It&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===It&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let E=e.get(f),w=E.envMap,T=E.envMapRotation;w&&(m.envMap.value=w,ui.copy(T),ui.x*=-1,ui.y*=-1,ui.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(ui.y*=-1,ui.z*=-1),m.envMapRotation.value.setFromMatrix4(n0.makeRotationFromEuler(ui)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,E,w){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*E,m.scale.value=w*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function d(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,E){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===It&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){let E=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function s0(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,w){let T=w.program;n.uniformBlockBinding(E,T)}function l(E,w){let T=s[E.id];T===void 0&&(x(E),T=d(E),s[E.id]=T,E.addEventListener("dispose",m));let I=w.program;n.updateUBOMapping(E,I);let M=e.render.frame;r[E.id]!==M&&(u(E),r[E.id]=M)}function d(E){let w=h();E.__bindingPointIndex=w;let T=i.createBuffer(),I=E.__size,M=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,I,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,T),T}function h(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return $e("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(E){let w=s[E.id],T=E.uniforms,I=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let M=0,C=T.length;M<C;M++){let D=Array.isArray(T[M])?T[M]:[T[M]];for(let S=0,b=D.length;S<b;S++){let P=D[S];if(p(P,M,S,I)===!0){let G=P.__offset,q=Array.isArray(P.value)?P.value:[P.value],K=0;for(let k=0;k<q.length;k++){let j=q[k],ce=v(j);typeof j=="number"||typeof j=="boolean"?(P.__data[0]=j,i.bufferSubData(i.UNIFORM_BUFFER,G+K,P.__data)):j.isMatrix3?(P.__data[0]=j.elements[0],P.__data[1]=j.elements[1],P.__data[2]=j.elements[2],P.__data[3]=0,P.__data[4]=j.elements[3],P.__data[5]=j.elements[4],P.__data[6]=j.elements[5],P.__data[7]=0,P.__data[8]=j.elements[6],P.__data[9]=j.elements[7],P.__data[10]=j.elements[8],P.__data[11]=0):(j.toArray(P.__data,K),K+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(E,w,T,I){let M=E.value,C=w+"_"+T;if(I[C]===void 0)return typeof M=="number"||typeof M=="boolean"?I[C]=M:I[C]=M.clone(),!0;{let D=I[C];if(typeof M=="number"||typeof M=="boolean"){if(D!==M)return I[C]=M,!0}else if(D.equals(M)===!1)return D.copy(M),!0}return!1}function x(E){let w=E.uniforms,T=0,I=16;for(let C=0,D=w.length;C<D;C++){let S=Array.isArray(w[C])?w[C]:[w[C]];for(let b=0,P=S.length;b<P;b++){let G=S[b],q=Array.isArray(G.value)?G.value:[G.value];for(let K=0,k=q.length;K<k;K++){let j=q[K],ce=v(j),V=T%I,ne=V%ce.boundary,ue=V+ne;T+=ne,ue!==0&&I-ue<ce.storage&&(T+=I-ue),G.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=T,T+=ce.storage}}}let M=T%I;return M>0&&(T+=I-M),E.__size=T,E.__cache={},this}function v(E){let w={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(w.boundary=4,w.storage=4):E.isVector2?(w.boundary=8,w.storage=8):E.isVector3||E.isColor?(w.boundary=16,w.storage=12):E.isVector4?(w.boundary=16,w.storage=16):E.isMatrix3?(w.boundary=48,w.storage=48):E.isMatrix4?(w.boundary=64,w.storage=64):E.isTexture?ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ke("WebGLRenderer: Unsupported uniform value type.",E),w}function m(E){let w=E.target;w.removeEventListener("dispose",m);let T=a.indexOf(w.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function f(){for(let E in s)i.deleteBuffer(s[E]);a=[],s={},r={}}return{bind:c,update:l,dispose:f}}var r0=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]),Tn=null;function a0(){return Tn===null&&(Tn=new br(r0,32,32,ea,li),Tn.minFilter=Wt,Tn.magFilter=Wt,Tn.wrapS=an,Tn.wrapT=an,Tn.generateMipmaps=!1,Tn.needsUpdate=!0),Tn}var Ua=class{constructor(e={}){let{canvas:t=Xc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let x=new Set([na,ta,Qr]),v=new Set([sn,Wn,Bi,zi,Kr,jr]),m=new Uint32Array(4),f=new Int32Array(4),E=null,w=null,T=[],I=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let M=this,C=!1;this._outputColorSpace=Ht;let D=0,S=0,b=null,P=-1,G=null,q=new ft,K=new ft,k=null,j=new Xe(0),ce=0,V=t.width,ne=t.height,ue=1,Ce=null,We=null,Ye=new ft(0,0,V,ne),De=new ft(0,0,V,ne),Je=!1,ee=new Ni,L=!1,X=!1,ie=new ht,le=new W,Ae=new ft,O={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Z=!1;function ae(){return b===null?ue:1}let _=n;function Q(y,U){return t.getContext(y,U)}try{let y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"181"}`),t.addEventListener("webglcontextlost",fe,!1),t.addEventListener("webglcontextrestored",se,!1),t.addEventListener("webglcontextcreationerror",Ie,!1),_===null){let U="webgl2";if(_=Q(U,y),_===null)throw Q(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw y("WebGLRenderer: "+y.message),y}let $,te,re,Me,ge,Te,A,g,F,B,H,z,he,de,Re,Le,oe,pe,Be,Ne,me,Ue,R,Se;function _e(){$=new Mp(_),$.init(),Ue=new Qm(_,$),te=new fp(_,$,e,Ue),re=new Km(_,$),te.reversedDepthBuffer&&u&&re.buffers.depth.setReversed(!0),Me=new Ap(_),ge=new Bm,Te=new jm(_,$,re,ge,te,Ue,Me),A=new mp(M),g=new bp(M),F=new Cu(_),R=new up(_,F),B=new Sp(_,F,Me,R),H=new Ep(_,B,F,Me),Be=new Tp(_,te,Te),Le=new pp(ge),z=new Om(M,A,g,$,te,R,Le),he=new i0(M,ge),de=new Vm,Re=new qm($),pe=new hp(M,A,g,re,H,p,c),oe=new Jm(M,H,te),Se=new s0(_,Me,te,re),Ne=new dp(_,$,Me),me=new wp(_,$,Me),Me.programs=z.programs,M.capabilities=te,M.extensions=$,M.properties=ge,M.renderLists=de,M.shadowMap=oe,M.state=re,M.info=Me}_e();let ve=new ul(M,_);this.xr=ve,this.getContext=function(){return _},this.getContextAttributes=function(){return _.getContextAttributes()},this.forceContextLoss=function(){let y=$.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=$.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return ue},this.setPixelRatio=function(y){y!==void 0&&(ue=y,this.setSize(V,ne,!1))},this.getSize=function(y){return y.set(V,ne)},this.setSize=function(y,U,Y=!0){if(ve.isPresenting){ke("WebGLRenderer: Can't change size while VR device is presenting.");return}V=y,ne=U,t.width=Math.floor(y*ue),t.height=Math.floor(U*ue),Y===!0&&(t.style.width=y+"px",t.style.height=U+"px"),this.setViewport(0,0,y,U)},this.getDrawingBufferSize=function(y){return y.set(V*ue,ne*ue).floor()},this.setDrawingBufferSize=function(y,U,Y){V=y,ne=U,ue=Y,t.width=Math.floor(y*Y),t.height=Math.floor(U*Y),this.setViewport(0,0,y,U)},this.getCurrentViewport=function(y){return y.copy(q)},this.getViewport=function(y){return y.copy(Ye)},this.setViewport=function(y,U,Y,J){y.isVector4?Ye.set(y.x,y.y,y.z,y.w):Ye.set(y,U,Y,J),re.viewport(q.copy(Ye).multiplyScalar(ue).round())},this.getScissor=function(y){return y.copy(De)},this.setScissor=function(y,U,Y,J){y.isVector4?De.set(y.x,y.y,y.z,y.w):De.set(y,U,Y,J),re.scissor(K.copy(De).multiplyScalar(ue).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(y){re.setScissorTest(Je=y)},this.setOpaqueSort=function(y){Ce=y},this.setTransparentSort=function(y){We=y},this.getClearColor=function(y){return y.copy(pe.getClearColor())},this.setClearColor=function(){pe.setClearColor(...arguments)},this.getClearAlpha=function(){return pe.getClearAlpha()},this.setClearAlpha=function(){pe.setClearAlpha(...arguments)},this.clear=function(y=!0,U=!0,Y=!0){let J=0;if(y){let N=!1;if(b!==null){let xe=b.texture.format;N=x.has(xe)}if(N){let xe=b.texture.type,we=v.has(xe),Pe=pe.getClearColor(),Ee=pe.getClearAlpha(),ze=Pe.r,Ve=Pe.g,Fe=Pe.b;we?(m[0]=ze,m[1]=Ve,m[2]=Fe,m[3]=Ee,_.clearBufferuiv(_.COLOR,0,m)):(f[0]=ze,f[1]=Ve,f[2]=Fe,f[3]=Ee,_.clearBufferiv(_.COLOR,0,f))}else J|=_.COLOR_BUFFER_BIT}U&&(J|=_.DEPTH_BUFFER_BIT),Y&&(J|=_.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),_.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",fe,!1),t.removeEventListener("webglcontextrestored",se,!1),t.removeEventListener("webglcontextcreationerror",Ie,!1),pe.dispose(),de.dispose(),Re.dispose(),ge.dispose(),A.dispose(),g.dispose(),H.dispose(),R.dispose(),Se.dispose(),z.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",yl),ve.removeEventListener("sessionend",bl),qn.stop()};function fe(y){y.preventDefault(),Zo("WebGLRenderer: Context Lost."),C=!0}function se(){Zo("WebGLRenderer: Context Restored."),C=!1;let y=Me.autoReset,U=oe.enabled,Y=oe.autoUpdate,J=oe.needsUpdate,N=oe.type;_e(),Me.autoReset=y,oe.enabled=U,oe.autoUpdate=Y,oe.needsUpdate=J,oe.type=N}function Ie(y){$e("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function He(y){let U=y.target;U.removeEventListener("dispose",He),lt(U)}function lt(y){st(y),ge.remove(y)}function st(y){let U=ge.get(y).programs;U!==void 0&&(U.forEach(function(Y){z.releaseProgram(Y)}),y.isShaderMaterial&&z.releaseShaderCache(y))}this.renderBufferDirect=function(y,U,Y,J,N,xe){U===null&&(U=O);let we=N.isMesh&&N.matrixWorld.determinant()<0,Pe=Uh(y,U,Y,J,N);re.setMaterial(J,we);let Ee=Y.index,ze=1;if(J.wireframe===!0){if(Ee=B.getWireframeAttribute(Y),Ee===void 0)return;ze=2}let Ve=Y.drawRange,Fe=Y.attributes.position,Ke=Ve.start*ze,rt=(Ve.start+Ve.count)*ze;xe!==null&&(Ke=Math.max(Ke,xe.start*ze),rt=Math.min(rt,(xe.start+xe.count)*ze)),Ee!==null?(Ke=Math.max(Ke,0),rt=Math.min(rt,Ee.count)):Fe!=null&&(Ke=Math.max(Ke,0),rt=Math.min(rt,Fe.count));let pt=rt-Ke;if(pt<0||pt===1/0)return;R.setup(N,J,Pe,Y,Ee);let mt,at=Ne;if(Ee!==null&&(mt=F.get(Ee),at=me,at.setIndex(mt)),N.isMesh)J.wireframe===!0?(re.setLineWidth(J.wireframeLinewidth*ae()),at.setMode(_.LINES)):at.setMode(_.TRIANGLES);else if(N.isLine){let Oe=J.linewidth;Oe===void 0&&(Oe=1),re.setLineWidth(Oe*ae()),N.isLineSegments?at.setMode(_.LINES):N.isLineLoop?at.setMode(_.LINE_LOOP):at.setMode(_.LINE_STRIP)}else N.isPoints?at.setMode(_.POINTS):N.isSprite&&at.setMode(_.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Ii("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),at.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if($.get("WEBGL_multi_draw"))at.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Oe=N._multiDrawStarts,ut=N._multiDrawCounts,tt=N._multiDrawCount,zt=Ee?F.get(Ee).bytesPerElement:1,pi=ge.get(J).currentProgram.getUniforms();for(let Vt=0;Vt<tt;Vt++)pi.setValue(_,"_gl_DrawID",Vt),at.render(Oe[Vt]/zt,ut[Vt])}else if(N.isInstancedMesh)at.renderInstances(Ke,pt,N.count);else if(Y.isInstancedBufferGeometry){let Oe=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,ut=Math.min(Y.instanceCount,Oe);at.renderInstances(Ke,pt,ut)}else at.render(Ke,pt)};function rn(y,U,Y){y.transparent===!0&&y.side===hn&&y.forceSinglePass===!1?(y.side=It,y.needsUpdate=!0,Ns(y,U,Y),y.side=bn,y.needsUpdate=!0,Ns(y,U,Y),y.side=hn):Ns(y,U,Y)}this.compile=function(y,U,Y=null){Y===null&&(Y=y),w=Re.get(Y),w.init(U),I.push(w),Y.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(w.pushLight(N),N.castShadow&&w.pushShadow(N))}),y!==Y&&y.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(w.pushLight(N),N.castShadow&&w.pushShadow(N))}),w.setupLights();let J=new Set;return y.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let xe=N.material;if(xe)if(Array.isArray(xe))for(let we=0;we<xe.length;we++){let Pe=xe[we];rn(Pe,Y,N),J.add(Pe)}else rn(xe,Y,N),J.add(xe)}),w=I.pop(),J},this.compileAsync=function(y,U,Y=null){let J=this.compile(y,U,Y);return new Promise(N=>{function xe(){if(J.forEach(function(we){ge.get(we).currentProgram.isReady()&&J.delete(we)}),J.size===0){N(y);return}setTimeout(xe,10)}$.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let Kt=null;function Dh(y){Kt&&Kt(y)}function yl(){qn.stop()}function bl(){qn.start()}let qn=new _h;qn.setAnimationLoop(Dh),typeof self<"u"&&qn.setContext(self),this.setAnimationLoop=function(y){Kt=y,ve.setAnimationLoop(y),y===null?qn.stop():qn.start()},ve.addEventListener("sessionstart",yl),ve.addEventListener("sessionend",bl),this.render=function(y,U){if(U!==void 0&&U.isCamera!==!0){$e("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(U),U=ve.getCamera()),y.isScene===!0&&y.onBeforeRender(M,y,U,b),w=Re.get(y,I.length),w.init(U),I.push(w),ie.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),ee.setFromProjectionMatrix(ie,tn,U.reversedDepth),X=this.localClippingEnabled,L=Le.init(this.clippingPlanes,X),E=de.get(y,T.length),E.init(),T.push(E),ve.enabled===!0&&ve.isPresenting===!0){let xe=M.xr.getDepthSensingMesh();xe!==null&&qa(xe,U,-1/0,M.sortObjects)}qa(y,U,0,M.sortObjects),E.finish(),M.sortObjects===!0&&E.sort(Ce,We),Z=ve.enabled===!1||ve.isPresenting===!1||ve.hasDepthSensing()===!1,Z&&pe.addToRenderList(E,y),this.info.render.frame++,L===!0&&Le.beginShadows();let Y=w.state.shadowsArray;oe.render(Y,y,U),L===!0&&Le.endShadows(),this.info.autoReset===!0&&this.info.reset();let J=E.opaque,N=E.transmissive;if(w.setupLights(),U.isArrayCamera){let xe=U.cameras;if(N.length>0)for(let we=0,Pe=xe.length;we<Pe;we++){let Ee=xe[we];Sl(J,N,y,Ee)}Z&&pe.render(y);for(let we=0,Pe=xe.length;we<Pe;we++){let Ee=xe[we];Ml(E,y,Ee,Ee.viewport)}}else N.length>0&&Sl(J,N,y,U),Z&&pe.render(y),Ml(E,y,U);b!==null&&S===0&&(Te.updateMultisampleRenderTarget(b),Te.updateRenderTargetMipmap(b)),y.isScene===!0&&y.onAfterRender(M,y,U),R.resetDefaultState(),P=-1,G=null,I.pop(),I.length>0?(w=I[I.length-1],L===!0&&Le.setGlobalState(M.clippingPlanes,w.state.camera)):w=null,T.pop(),T.length>0?E=T[T.length-1]:E=null};function qa(y,U,Y,J){if(y.visible===!1)return;if(y.layers.test(U.layers)){if(y.isGroup)Y=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(U);else if(y.isLight)w.pushLight(y),y.castShadow&&w.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||ee.intersectsSprite(y)){J&&Ae.setFromMatrixPosition(y.matrixWorld).applyMatrix4(ie);let we=H.update(y),Pe=y.material;Pe.visible&&E.push(y,we,Pe,Y,Ae.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||ee.intersectsObject(y))){let we=H.update(y),Pe=y.material;if(J&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Ae.copy(y.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Ae.copy(we.boundingSphere.center)),Ae.applyMatrix4(y.matrixWorld).applyMatrix4(ie)),Array.isArray(Pe)){let Ee=we.groups;for(let ze=0,Ve=Ee.length;ze<Ve;ze++){let Fe=Ee[ze],Ke=Pe[Fe.materialIndex];Ke&&Ke.visible&&E.push(y,we,Ke,Y,Ae.z,Fe)}}else Pe.visible&&E.push(y,we,Pe,Y,Ae.z,null)}}let xe=y.children;for(let we=0,Pe=xe.length;we<Pe;we++)qa(xe[we],U,Y,J)}function Ml(y,U,Y,J){let{opaque:N,transmissive:xe,transparent:we}=y;w.setupLightsView(Y),L===!0&&Le.setGlobalState(M.clippingPlanes,Y),J&&re.viewport(q.copy(J)),N.length>0&&Us(N,U,Y),xe.length>0&&Us(xe,U,Y),we.length>0&&Us(we,U,Y),re.buffers.depth.setTest(!0),re.buffers.depth.setMask(!0),re.buffers.color.setMask(!0),re.setPolygonOffset(!1)}function Sl(y,U,Y,J){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;w.state.transmissionRenderTarget[J.id]===void 0&&(w.state.transmissionRenderTarget[J.id]=new on(1,1,{generateMipmaps:!0,type:$.has("EXT_color_buffer_half_float")||$.has("EXT_color_buffer_float")?li:sn,minFilter:Hn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));let xe=w.state.transmissionRenderTarget[J.id],we=J.viewport||q;xe.setSize(we.z*M.transmissionResolutionScale,we.w*M.transmissionResolutionScale);let Pe=M.getRenderTarget(),Ee=M.getActiveCubeFace(),ze=M.getActiveMipmapLevel();M.setRenderTarget(xe),M.getClearColor(j),ce=M.getClearAlpha(),ce<1&&M.setClearColor(16777215,.5),M.clear(),Z&&pe.render(Y);let Ve=M.toneMapping;M.toneMapping=wn;let Fe=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),w.setupLightsView(J),L===!0&&Le.setGlobalState(M.clippingPlanes,J),Us(y,Y,J),Te.updateMultisampleRenderTarget(xe),Te.updateRenderTargetMipmap(xe),$.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let rt=0,pt=U.length;rt<pt;rt++){let mt=U[rt],{object:at,geometry:Oe,material:ut,group:tt}=mt;if(ut.side===hn&&at.layers.test(J.layers)){let zt=ut.side;ut.side=It,ut.needsUpdate=!0,wl(at,Y,J,Oe,ut,tt),ut.side=zt,ut.needsUpdate=!0,Ke=!0}}Ke===!0&&(Te.updateMultisampleRenderTarget(xe),Te.updateRenderTargetMipmap(xe))}M.setRenderTarget(Pe,Ee,ze),M.setClearColor(j,ce),Fe!==void 0&&(J.viewport=Fe),M.toneMapping=Ve}function Us(y,U,Y){let J=U.isScene===!0?U.overrideMaterial:null;for(let N=0,xe=y.length;N<xe;N++){let we=y[N],{object:Pe,geometry:Ee,group:ze}=we,Ve=we.material;Ve.allowOverride===!0&&J!==null&&(Ve=J),Pe.layers.test(Y.layers)&&wl(Pe,U,Y,Ee,Ve,ze)}}function wl(y,U,Y,J,N,xe){y.onBeforeRender(M,U,Y,J,N,xe),y.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),N.onBeforeRender(M,U,Y,J,y,xe),N.transparent===!0&&N.side===hn&&N.forceSinglePass===!1?(N.side=It,N.needsUpdate=!0,M.renderBufferDirect(Y,U,J,N,y,xe),N.side=bn,N.needsUpdate=!0,M.renderBufferDirect(Y,U,J,N,y,xe),N.side=hn):M.renderBufferDirect(Y,U,J,N,y,xe),y.onAfterRender(M,U,Y,J,N,xe)}function Ns(y,U,Y){U.isScene!==!0&&(U=O);let J=ge.get(y),N=w.state.lights,xe=w.state.shadowsArray,we=N.state.version,Pe=z.getParameters(y,N.state,xe,U,Y),Ee=z.getProgramCacheKey(Pe),ze=J.programs;J.environment=y.isMeshStandardMaterial?U.environment:null,J.fog=U.fog,J.envMap=(y.isMeshStandardMaterial?g:A).get(y.envMap||J.environment),J.envMapRotation=J.environment!==null&&y.envMap===null?U.environmentRotation:y.envMapRotation,ze===void 0&&(y.addEventListener("dispose",He),ze=new Map,J.programs=ze);let Ve=ze.get(Ee);if(Ve!==void 0){if(J.currentProgram===Ve&&J.lightsStateVersion===we)return Tl(y,Pe),Ve}else Pe.uniforms=z.getUniforms(y),y.onBeforeCompile(Pe,M),Ve=z.acquireProgram(Pe,Ee),ze.set(Ee,Ve),J.uniforms=Pe.uniforms;let Fe=J.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Fe.clippingPlanes=Le.uniform),Tl(y,Pe),J.needsLights=Fh(y),J.lightsStateVersion=we,J.needsLights&&(Fe.ambientLightColor.value=N.state.ambient,Fe.lightProbe.value=N.state.probe,Fe.directionalLights.value=N.state.directional,Fe.directionalLightShadows.value=N.state.directionalShadow,Fe.spotLights.value=N.state.spot,Fe.spotLightShadows.value=N.state.spotShadow,Fe.rectAreaLights.value=N.state.rectArea,Fe.ltc_1.value=N.state.rectAreaLTC1,Fe.ltc_2.value=N.state.rectAreaLTC2,Fe.pointLights.value=N.state.point,Fe.pointLightShadows.value=N.state.pointShadow,Fe.hemisphereLights.value=N.state.hemi,Fe.directionalShadowMap.value=N.state.directionalShadowMap,Fe.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Fe.spotShadowMap.value=N.state.spotShadowMap,Fe.spotLightMatrix.value=N.state.spotLightMatrix,Fe.spotLightMap.value=N.state.spotLightMap,Fe.pointShadowMap.value=N.state.pointShadowMap,Fe.pointShadowMatrix.value=N.state.pointShadowMatrix),J.currentProgram=Ve,J.uniformsList=null,Ve}function Al(y){if(y.uniformsList===null){let U=y.currentProgram.getUniforms();y.uniformsList=Hi.seqWithValue(U.seq,y.uniforms)}return y.uniformsList}function Tl(y,U){let Y=ge.get(y);Y.outputColorSpace=U.outputColorSpace,Y.batching=U.batching,Y.batchingColor=U.batchingColor,Y.instancing=U.instancing,Y.instancingColor=U.instancingColor,Y.instancingMorph=U.instancingMorph,Y.skinning=U.skinning,Y.morphTargets=U.morphTargets,Y.morphNormals=U.morphNormals,Y.morphColors=U.morphColors,Y.morphTargetsCount=U.morphTargetsCount,Y.numClippingPlanes=U.numClippingPlanes,Y.numIntersection=U.numClipIntersection,Y.vertexAlphas=U.vertexAlphas,Y.vertexTangents=U.vertexTangents,Y.toneMapping=U.toneMapping}function Uh(y,U,Y,J,N){U.isScene!==!0&&(U=O),Te.resetTextureUnits();let xe=U.fog,we=J.isMeshStandardMaterial?U.environment:null,Pe=b===null?M.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:ni,Ee=(J.isMeshStandardMaterial?g:A).get(J.envMap||we),ze=J.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ve=!!Y.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Fe=!!Y.morphAttributes.position,Ke=!!Y.morphAttributes.normal,rt=!!Y.morphAttributes.color,pt=wn;J.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(pt=M.toneMapping);let mt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,at=mt!==void 0?mt.length:0,Oe=ge.get(J),ut=w.state.lights;if(L===!0&&(X===!0||y!==G)){let Et=y===G&&J.id===P;Le.setState(J,y,Et)}let tt=!1;J.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==ut.state.version||Oe.outputColorSpace!==Pe||N.isBatchedMesh&&Oe.batching===!1||!N.isBatchedMesh&&Oe.batching===!0||N.isBatchedMesh&&Oe.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Oe.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Oe.instancing===!1||!N.isInstancedMesh&&Oe.instancing===!0||N.isSkinnedMesh&&Oe.skinning===!1||!N.isSkinnedMesh&&Oe.skinning===!0||N.isInstancedMesh&&Oe.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Oe.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Oe.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Oe.instancingMorph===!1&&N.morphTexture!==null||Oe.envMap!==Ee||J.fog===!0&&Oe.fog!==xe||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==Le.numPlanes||Oe.numIntersection!==Le.numIntersection)||Oe.vertexAlphas!==ze||Oe.vertexTangents!==Ve||Oe.morphTargets!==Fe||Oe.morphNormals!==Ke||Oe.morphColors!==rt||Oe.toneMapping!==pt||Oe.morphTargetsCount!==at)&&(tt=!0):(tt=!0,Oe.__version=J.version);let zt=Oe.currentProgram;tt===!0&&(zt=Ns(J,U,N));let pi=!1,Vt=!1,Zi=!1,dt=zt.getUniforms(),Lt=Oe.uniforms;if(re.useProgram(zt.program)&&(pi=!0,Vt=!0,Zi=!0),J.id!==P&&(P=J.id,Vt=!0),pi||G!==y){re.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),dt.setValue(_,"projectionMatrix",y.projectionMatrix),dt.setValue(_,"viewMatrix",y.matrixWorldInverse);let Dt=dt.map.cameraPosition;Dt!==void 0&&Dt.setValue(_,le.setFromMatrixPosition(y.matrixWorld)),te.logarithmicDepthBuffer&&dt.setValue(_,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&dt.setValue(_,"isOrthographic",y.isOrthographicCamera===!0),G!==y&&(G=y,Vt=!0,Zi=!0)}if(N.isSkinnedMesh){dt.setOptional(_,N,"bindMatrix"),dt.setOptional(_,N,"bindMatrixInverse");let Et=N.skeleton;Et&&(Et.boneTexture===null&&Et.computeBoneTexture(),dt.setValue(_,"boneTexture",Et.boneTexture,Te))}N.isBatchedMesh&&(dt.setOptional(_,N,"batchingTexture"),dt.setValue(_,"batchingTexture",N._matricesTexture,Te),dt.setOptional(_,N,"batchingIdTexture"),dt.setValue(_,"batchingIdTexture",N._indirectTexture,Te),dt.setOptional(_,N,"batchingColorTexture"),N._colorsTexture!==null&&dt.setValue(_,"batchingColorTexture",N._colorsTexture,Te));let qt=Y.morphAttributes;if((qt.position!==void 0||qt.normal!==void 0||qt.color!==void 0)&&Be.update(N,Y,zt),(Vt||Oe.receiveShadow!==N.receiveShadow)&&(Oe.receiveShadow=N.receiveShadow,dt.setValue(_,"receiveShadow",N.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Lt.envMap.value=Ee,Lt.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&U.environment!==null&&(Lt.envMapIntensity.value=U.environmentIntensity),Lt.dfgLUT!==void 0&&(Lt.dfgLUT.value=a0()),Vt&&(dt.setValue(_,"toneMappingExposure",M.toneMappingExposure),Oe.needsLights&&Nh(Lt,Zi),xe&&J.fog===!0&&he.refreshFogUniforms(Lt,xe),he.refreshMaterialUniforms(Lt,J,ue,ne,w.state.transmissionRenderTarget[y.id]),Hi.upload(_,Al(Oe),Lt,Te)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Hi.upload(_,Al(Oe),Lt,Te),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&dt.setValue(_,"center",N.center),dt.setValue(_,"modelViewMatrix",N.modelViewMatrix),dt.setValue(_,"normalMatrix",N.normalMatrix),dt.setValue(_,"modelMatrix",N.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){let Et=J.uniformsGroups;for(let Dt=0,Ya=Et.length;Dt<Ya;Dt++){let Yn=Et[Dt];Se.update(Yn,zt),Se.bind(Yn,zt)}}return zt}function Nh(y,U){y.ambientLightColor.needsUpdate=U,y.lightProbe.needsUpdate=U,y.directionalLights.needsUpdate=U,y.directionalLightShadows.needsUpdate=U,y.pointLights.needsUpdate=U,y.pointLightShadows.needsUpdate=U,y.spotLights.needsUpdate=U,y.spotLightShadows.needsUpdate=U,y.rectAreaLights.needsUpdate=U,y.hemisphereLights.needsUpdate=U}function Fh(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(y,U,Y){let J=ge.get(y);J.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),ge.get(y.texture).__webglTexture=U,ge.get(y.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:Y,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,U){let Y=ge.get(y);Y.__webglFramebuffer=U,Y.__useDefaultFramebuffer=U===void 0};let Oh=_.createFramebuffer();this.setRenderTarget=function(y,U=0,Y=0){b=y,D=U,S=Y;let J=!0,N=null,xe=!1,we=!1;if(y){let Ee=ge.get(y);if(Ee.__useDefaultFramebuffer!==void 0)re.bindFramebuffer(_.FRAMEBUFFER,null),J=!1;else if(Ee.__webglFramebuffer===void 0)Te.setupRenderTarget(y);else if(Ee.__hasExternalTextures)Te.rebindTextures(y,ge.get(y.texture).__webglTexture,ge.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let Fe=y.depthTexture;if(Ee.__boundDepthTexture!==Fe){if(Fe!==null&&ge.has(Fe)&&(y.width!==Fe.image.width||y.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Te.setupDepthRenderbuffer(y)}}let ze=y.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(we=!0);let Ve=ge.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ve[U])?N=Ve[U][Y]:N=Ve[U],xe=!0):y.samples>0&&Te.useMultisampledRTT(y)===!1?N=ge.get(y).__webglMultisampledFramebuffer:Array.isArray(Ve)?N=Ve[Y]:N=Ve,q.copy(y.viewport),K.copy(y.scissor),k=y.scissorTest}else q.copy(Ye).multiplyScalar(ue).floor(),K.copy(De).multiplyScalar(ue).floor(),k=Je;if(Y!==0&&(N=Oh),re.bindFramebuffer(_.FRAMEBUFFER,N)&&J&&re.drawBuffers(y,N),re.viewport(q),re.scissor(K),re.setScissorTest(k),xe){let Ee=ge.get(y.texture);_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ee.__webglTexture,Y)}else if(we){let Ee=U;for(let ze=0;ze<y.textures.length;ze++){let Ve=ge.get(y.textures[ze]);_.framebufferTextureLayer(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0+ze,Ve.__webglTexture,Y,Ee)}}else if(y!==null&&Y!==0){let Ee=ge.get(y.texture);_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,Ee.__webglTexture,Y)}P=-1},this.readRenderTargetPixels=function(y,U,Y,J,N,xe,we,Pe=0){if(!(y&&y.isWebGLRenderTarget)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=ge.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&we!==void 0&&(Ee=Ee[we]),Ee){re.bindFramebuffer(_.FRAMEBUFFER,Ee);try{let ze=y.textures[Pe],Ve=ze.format,Fe=ze.type;if(!te.textureFormatReadable(Ve)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!te.textureTypeReadable(Fe)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=y.width-J&&Y>=0&&Y<=y.height-N&&(y.textures.length>1&&_.readBuffer(_.COLOR_ATTACHMENT0+Pe),_.readPixels(U,Y,J,N,Ue.convert(Ve),Ue.convert(Fe),xe))}finally{let ze=b!==null?ge.get(b).__webglFramebuffer:null;re.bindFramebuffer(_.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(y,U,Y,J,N,xe,we,Pe=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=ge.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&we!==void 0&&(Ee=Ee[we]),Ee)if(U>=0&&U<=y.width-J&&Y>=0&&Y<=y.height-N){re.bindFramebuffer(_.FRAMEBUFFER,Ee);let ze=y.textures[Pe],Ve=ze.format,Fe=ze.type;if(!te.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!te.textureTypeReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ke=_.createBuffer();_.bindBuffer(_.PIXEL_PACK_BUFFER,Ke),_.bufferData(_.PIXEL_PACK_BUFFER,xe.byteLength,_.STREAM_READ),y.textures.length>1&&_.readBuffer(_.COLOR_ATTACHMENT0+Pe),_.readPixels(U,Y,J,N,Ue.convert(Ve),Ue.convert(Fe),0);let rt=b!==null?ge.get(b).__webglFramebuffer:null;re.bindFramebuffer(_.FRAMEBUFFER,rt);let pt=_.fenceSync(_.SYNC_GPU_COMMANDS_COMPLETE,0);return _.flush(),await qc(_,pt,4),_.bindBuffer(_.PIXEL_PACK_BUFFER,Ke),_.getBufferSubData(_.PIXEL_PACK_BUFFER,0,xe),_.deleteBuffer(Ke),_.deleteSync(pt),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,U=null,Y=0){let J=Math.pow(2,-Y),N=Math.floor(y.image.width*J),xe=Math.floor(y.image.height*J),we=U!==null?U.x:0,Pe=U!==null?U.y:0;Te.setTexture2D(y,0),_.copyTexSubImage2D(_.TEXTURE_2D,Y,0,0,we,Pe,N,xe),re.unbindTexture()};let Bh=_.createFramebuffer(),zh=_.createFramebuffer();this.copyTextureToTexture=function(y,U,Y=null,J=null,N=0,xe=null){xe===null&&(N!==0?(Ii("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),xe=N,N=0):xe=0);let we,Pe,Ee,ze,Ve,Fe,Ke,rt,pt,mt=y.isCompressedTexture?y.mipmaps[xe]:y.image;if(Y!==null)we=Y.max.x-Y.min.x,Pe=Y.max.y-Y.min.y,Ee=Y.isBox3?Y.max.z-Y.min.z:1,ze=Y.min.x,Ve=Y.min.y,Fe=Y.isBox3?Y.min.z:0;else{let qt=Math.pow(2,-N);we=Math.floor(mt.width*qt),Pe=Math.floor(mt.height*qt),y.isDataArrayTexture?Ee=mt.depth:y.isData3DTexture?Ee=Math.floor(mt.depth*qt):Ee=1,ze=0,Ve=0,Fe=0}J!==null?(Ke=J.x,rt=J.y,pt=J.z):(Ke=0,rt=0,pt=0);let at=Ue.convert(U.format),Oe=Ue.convert(U.type),ut;U.isData3DTexture?(Te.setTexture3D(U,0),ut=_.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Te.setTexture2DArray(U,0),ut=_.TEXTURE_2D_ARRAY):(Te.setTexture2D(U,0),ut=_.TEXTURE_2D),_.pixelStorei(_.UNPACK_FLIP_Y_WEBGL,U.flipY),_.pixelStorei(_.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),_.pixelStorei(_.UNPACK_ALIGNMENT,U.unpackAlignment);let tt=_.getParameter(_.UNPACK_ROW_LENGTH),zt=_.getParameter(_.UNPACK_IMAGE_HEIGHT),pi=_.getParameter(_.UNPACK_SKIP_PIXELS),Vt=_.getParameter(_.UNPACK_SKIP_ROWS),Zi=_.getParameter(_.UNPACK_SKIP_IMAGES);_.pixelStorei(_.UNPACK_ROW_LENGTH,mt.width),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,mt.height),_.pixelStorei(_.UNPACK_SKIP_PIXELS,ze),_.pixelStorei(_.UNPACK_SKIP_ROWS,Ve),_.pixelStorei(_.UNPACK_SKIP_IMAGES,Fe);let dt=y.isDataArrayTexture||y.isData3DTexture,Lt=U.isDataArrayTexture||U.isData3DTexture;if(y.isDepthTexture){let qt=ge.get(y),Et=ge.get(U),Dt=ge.get(qt.__renderTarget),Ya=ge.get(Et.__renderTarget);re.bindFramebuffer(_.READ_FRAMEBUFFER,Dt.__webglFramebuffer),re.bindFramebuffer(_.DRAW_FRAMEBUFFER,Ya.__webglFramebuffer);for(let Yn=0;Yn<Ee;Yn++)dt&&(_.framebufferTextureLayer(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,ge.get(y).__webglTexture,N,Fe+Yn),_.framebufferTextureLayer(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,ge.get(U).__webglTexture,xe,pt+Yn)),_.blitFramebuffer(ze,Ve,we,Pe,Ke,rt,we,Pe,_.DEPTH_BUFFER_BIT,_.NEAREST);re.bindFramebuffer(_.READ_FRAMEBUFFER,null),re.bindFramebuffer(_.DRAW_FRAMEBUFFER,null)}else if(N!==0||y.isRenderTargetTexture||ge.has(y)){let qt=ge.get(y),Et=ge.get(U);re.bindFramebuffer(_.READ_FRAMEBUFFER,Bh),re.bindFramebuffer(_.DRAW_FRAMEBUFFER,zh);for(let Dt=0;Dt<Ee;Dt++)dt?_.framebufferTextureLayer(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,qt.__webglTexture,N,Fe+Dt):_.framebufferTexture2D(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,qt.__webglTexture,N),Lt?_.framebufferTextureLayer(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,Et.__webglTexture,xe,pt+Dt):_.framebufferTexture2D(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,Et.__webglTexture,xe),N!==0?_.blitFramebuffer(ze,Ve,we,Pe,Ke,rt,we,Pe,_.COLOR_BUFFER_BIT,_.NEAREST):Lt?_.copyTexSubImage3D(ut,xe,Ke,rt,pt+Dt,ze,Ve,we,Pe):_.copyTexSubImage2D(ut,xe,Ke,rt,ze,Ve,we,Pe);re.bindFramebuffer(_.READ_FRAMEBUFFER,null),re.bindFramebuffer(_.DRAW_FRAMEBUFFER,null)}else Lt?y.isDataTexture||y.isData3DTexture?_.texSubImage3D(ut,xe,Ke,rt,pt,we,Pe,Ee,at,Oe,mt.data):U.isCompressedArrayTexture?_.compressedTexSubImage3D(ut,xe,Ke,rt,pt,we,Pe,Ee,at,mt.data):_.texSubImage3D(ut,xe,Ke,rt,pt,we,Pe,Ee,at,Oe,mt):y.isDataTexture?_.texSubImage2D(_.TEXTURE_2D,xe,Ke,rt,we,Pe,at,Oe,mt.data):y.isCompressedTexture?_.compressedTexSubImage2D(_.TEXTURE_2D,xe,Ke,rt,mt.width,mt.height,at,mt.data):_.texSubImage2D(_.TEXTURE_2D,xe,Ke,rt,we,Pe,at,Oe,mt);_.pixelStorei(_.UNPACK_ROW_LENGTH,tt),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,zt),_.pixelStorei(_.UNPACK_SKIP_PIXELS,pi),_.pixelStorei(_.UNPACK_SKIP_ROWS,Vt),_.pixelStorei(_.UNPACK_SKIP_IMAGES,Zi),xe===0&&U.generateMipmaps&&_.generateMipmap(ut),re.unbindTexture()},this.initRenderTarget=function(y){ge.get(y).__webglFramebuffer===void 0&&Te.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Te.setTextureCube(y,0):y.isData3DTexture?Te.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Te.setTexture2DArray(y,0):Te.setTexture2D(y,0),re.unbindTexture()},this.resetState=function(){D=0,S=0,b=null,re.reset(),R.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}};var Tt=(i,e,t,n)=>Number.isFinite(i)?Math.min(t,Math.max(e,i)):n;function dl(i={}){let e=Math.round(Tt(i.resolution,6,24,14)),t=e+1,n=t**3,s=3.4,r=s/e,a=s/2,o=.92,c=Math.round(Tt(i.pressureIterations,8,200,38)),l=1/60,d=Tt(i.background,0,1,.16),h=[new Float32Array(n),new Float32Array(n),new Float32Array(n)],u=[new Float32Array(n),new Float32Array(n),new Float32Array(n)],p=new Float32Array(n),x=new Float32Array(n),v=new Float32Array(n),m=new Uint8Array(n),f=[],E=[[],[],[]],w=[new Uint8Array(n),new Uint8Array(n),new Uint8Array(n)],T=new Float32Array(0),I=new Float32Array(0),M=new Float32Array(0),C=new Float32Array(0),D=!1,S=0,b=0,P=0,G=0,q=0,K=null,k=(i.seed??179)>>>0,j=()=>(k=Math.imul(k,1664525)+1013904223>>>0,k/4294967296),ce=(L,X,ie)=>L+t*(X+t*ie),V=(L,X,ie)=>L>=0&&X>=0&&ie>=0&&L<e&&X<e&&ie<e&&!m[ce(L,X,ie)];for(let L=0;L<e;L++)for(let X=0;X<e;X++)for(let ie=0;ie<e;ie++){let le=ce(ie,X,L),Ae=(ie+.5)*r-a,O=(X+.5)*r-a,Z=(L+.5)*r-a;m[le]=Math.hypot(Ae,O,Z)<o?1:0,m[le]||f.push([le,ie,X,L])}for(let L=0;L<3;L++)for(let X=0;X<e+(L===2?1:0);X++)for(let ie=0;ie<e+(L===1?1:0);ie++)for(let le=0;le<e+(L===0?1:0);le++){if(!V(le,ie,X)||!V(le-(L===0?1:0),ie-(L===1?1:0),X-(L===2?1:0)))continue;let Ae=ce(le,ie,X);w[L][Ae]=1,E[L].push([Ae,le,ie,X,(le+(L===0?0:.5))*r-a,(ie+(L===1?0:.5))*r-a,(X+(L===2?0:.5))*r-a])}let ne=f.map(([,L,X,ie])=>[[L-1,X,ie],[L+1,X,ie],[L,X-1,ie],[L,X+1,ie],[L,X,ie-1],[L,X,ie+1]].filter(([le,Ae,O])=>V(le,Ae,O)).map(([le,Ae,O])=>ce(le,Ae,O)));function ue(L,X,ie,le,Ae){let O=Tt((ie+a)/r-(X===0?0:.5),0,e-1e-5,0),Z=Tt((le+a)/r-(X===1?0:.5),0,e-1e-5,0),ae=Tt((Ae+a)/r-(X===2?0:.5),0,e-1e-5,0),_=Math.floor(O),Q=Math.floor(Z),$=Math.floor(ae),te=O-_,re=Z-Q,Me=ae-$,ge=ce(_,Q,$),Te=t,A=t*t,g=L[ge]*(1-te)+L[ge+1]*te,F=L[ge+Te]*(1-te)+L[ge+Te+1]*te,B=L[ge+A]*(1-te)+L[ge+A+1]*te,H=L[ge+A+Te]*(1-te)+L[ge+A+Te+1]*te;return(g*(1-re)+F*re)*(1-Me)+(B*(1-re)+H*re)*Me}function Ce(){if(D)return 0;let L=0;for(let[X]of f){let ie=(h[0][X+1]-h[0][X]+h[1][X+t]-h[1][X]+h[2][X+t*t]-h[2][X])/r;v[X]=ie,L+=ie*ie}return Math.sqrt(L/f.length)}function We(){if(D)return;P=Ce(),p.fill(0),x.fill(0);for(let X=0;X<c;X++){for(let le=0;le<f.length;le++){let Ae=f[le][0],O=ne[le],Z=0;for(let ae=0;ae<O.length;ae++)Z+=p[O[ae]];x[Ae]=O.length?(Z-r*r*v[Ae])/O.length:0}let ie=p;p=x,x=ie}let L=[1,t,t*t];for(let X=0;X<3;X++)for(let[ie]of E[X])h[X][ie]-=(p[ie]-p[ie-L[X]])/r;G=Ce()}function Ye(L){if(D)return;let X=Math.round(Tt(L,0,8e3,1800)),ie=T.length/3,le=new Float32Array(X*3),Ae=new Float32Array(X*3),O=new Float32Array(X);le.set(T.subarray(0,X*3)),Ae.set(M.subarray(0,X*3)),O.set(C.subarray(0,X));for(let Z=ie;Z<X;Z++){let ae=j()*2-1,_=j()*Math.PI*2,Q=Math.sqrt(1-ae*ae),$=.99+j()*.27;le[Z*3]=Math.cos(_)*Q*$,le[Z*3+1]=ae*$,le[Z*3+2]=Math.sin(_)*Q*$,O[Z]=j(),Ae[Z*3]=-le[Z*3+1]*.16,Ae[Z*3+1]=le[Z*3]*.16}T=le,I=le.slice(),M=Ae,C=O}function De(L,X,{radius:ie=.42,scatter:le=1.6}={}){if(D||!L?.every(Number.isFinite)||!X?.every(Number.isFinite))return!1;ie=Tt(ie,.12,1,.42);let Ae=ie*ie;for(let O=0;O<3;O++)for(let[Z,,,,ae,_,Q]of E[O]){let $=(ae-L[0])**2+(_-L[1])**2+(Q-L[2])**2;$<Ae*6&&(h[O][Z]+=Tt(X[O],-4,4,0)*Math.exp(-$/Ae*2))}for(let O=0;O<T.length;O+=3){let Z=T[O]-L[0],ae=T[O+1]-L[1],_=T[O+2]-L[2],Q=Math.hypot(Z,ae,_);if(Q>ie*2.5)continue;let $=Math.exp(-Q*Q/Ae*2),te=1/Math.max(Q,.025);M[O]+=(X[0]+Z*te*le)*$,M[O+1]+=(X[1]+ae*te*le)*$,M[O+2]+=(X[2]+_*te*le)*$}return q++,!0}function Je(L,{diffusion:X=.35,energy:ie=0}={}){X=Tt(X,0,1,.35),ie=Tt(ie,0,1,0);let le=.016-X*.014,Ae=le*L/(r*r);for(let _=0;_<3;_++)for(let[Q,,,,$,te,re]of E[_]){let Me=ue(h[0],0,$,te,re),ge=ue(h[1],1,$,te,re),Te=ue(h[2],2,$,te,re);u[_][Q]=ue(h[_],_,$-L*Me,te-L*ge,re-L*Te)}for(let _=0;_<3;_++)for(let[Q,,,,$,te,re]of E[_]){let Me=u[_],ge=(Me[Q-1]??0)+(Me[Q+1]??0)+(Me[Q-t]??0)+(Me[Q+t]??0)+(Me[Q-t*t]??0)+(Me[Q+t*t]??0)-6*Me[Q],Te=_===0?-te:_===1?$:$*.25;h[_][Q]=Tt(Me[Q]+Ae*ge+Te*d*(1+ie*3)*L,-5,5,0)*Math.exp(-L*.06)}We(),I.set(T);let O=1-Math.exp(-L*4.2),Z=11-X*7,ae=a-.025;for(let _=0,Q=0;_<T.length;_+=3,Q++){let $=T[_],te=T[_+1],re=T[_+2],Me=Math.max(.01,Math.hypot($,te,re)),ge=$/Me,Te=te/Me,A=re/Me,F=(K?Tt(K(ge,Te,A),.5,1.45,o):o)+.075+C[Q]*(.12+X*.24),B=M[_]*ge+M[_+1]*Te+M[_+2]*A,H=-(Me-F)*Z-B*.7;M[_]+=(ue(h[0],0,$,te,re)-M[_])*O+ge*H*L,M[_+1]+=(ue(h[1],1,$,te,re)-M[_+1])*O+Te*H*L,M[_+2]+=(ue(h[2],2,$,te,re)-M[_+2])*O+A*H*L;for(let he=0;he<3;he++)M[_+he]=Tt(M[_+he],-5,5,0),T[_+he]+=M[_+he]*L,Math.abs(T[_+he])>ae&&(T[_+he]=Math.sign(T[_+he])*ae,M[_+he]*=-.3);$=T[_],te=T[_+1],re=T[_+2],Me=Math.max(1e-4,Math.hypot($,te,re));let z=(K?Tt(K($/Me,te/Me,re/Me),.5,1.45,o):o)+.02;if(Me<z){let he=z/Me;T[_]*=he,T[_+1]*=he,T[_+2]*=he;let de=Math.min(0,(M[_]*$+M[_+1]*te+M[_+2]*re)/Me);M[_]-=de*$/Me,M[_+1]-=de*te/Me,M[_+2]-=de*re/Me}}b+=L}let ee={get positions(){return T},get previousPositions(){return I},get velocities(){return M},resolution:e,inject:De,project:We,divergenceRMS:Ce,setParticleCount:Ye,setSurfaceRadius(L){K=typeof L=="function"?L:null},step(L,X){if(D)return 0;S+=Tt(L,0,l*4,0);let ie=0;for(;S+1e-10>=l&&ie<4;)Je(l,X),S-=l,ie++;return ie},diagnostics(){if(D)return{disposed:!0,allocatedBytes:0,mass:0};let L=0;for(let X=0;X<3;X++)for(let ie=0;ie<n;ie++)w[X][ie]||(L+=Math.abs(h[X][ie]));return{resolution:e,mass:T.length/3,simulatedSeconds:b,contacts:q,divergenceBefore:P,divergenceAfter:G,boundaryFlux:L,allocatedBytes:(n*10+T.length*3+C.length)*4+n*4}},dispose(){D||(D=!0,h=u=E=w=f=ne=[],p=x=v=m=null,T=I=M=C=new Float32Array(0),K=null)}};return Ye(i.count??1800),ee}var En=(i,e,t,n)=>Number.isFinite(i)?Math.max(t,Math.min(n,i)):e,Oa=i=>i!=null&&[i[0],i[1],i[2]].every(Number.isFinite);function Sh(i,e,t={}){if(!i||i.length<12||i.length%3||!e||e.length%3)throw new TypeError("A closed triangle mesh is required");let n=new Uint32Array(i.length/3),s=[],r=new Map,a=0;for(let O of i){if(!Number.isFinite(O))throw new TypeError("Mesh coordinates must be finite");a=Math.max(a,Math.abs(O))}let o=Math.max(1e-8,a*1e-6);for(let O=0;O<i.length;O+=3){let Z=`${Math.round(i[O]/o)},${Math.round(i[O+1]/o)},${Math.round(i[O+2]/o)}`,ae=r.get(Z);ae==null&&(ae=s.length/3,r.set(Z,ae),s.push(i[O],i[O+1],i[O+2])),n[O/3]=ae}let c=new Float64Array(s),l=c.slice(),d=c.slice(),h=new Float64Array(c.length),u=new Float64Array(c.length),p=new Float64Array(c.length),x=new Float32Array(i),v=x.slice(),m=new Float32Array(x.length),f=[],E=new Map,w=[],T=[0,0,0],I=c.length/3;for(let O=0;O<c.length;O++)T[O%3]+=c[O]/I;let M=0;for(let O=0;O<c.length;O+=3)M+=(c[O]-T[0])**2+(c[O+1]-T[1])**2+(c[O+2]-T[2])**2;let C=Math.sqrt(M/I);if(!(C>o))throw new TypeError("Mesh must enclose a non-zero volume");function D(O,Z){return Math.hypot(c[O*3]-c[Z*3],c[O*3+1]-c[Z*3+1],c[O*3+2]-c[Z*3+2])}function S(O,Z,ae){let _=O<Z?`${O},${Z}`:`${Z},${O}`,Q=E.get(_);Q?(Q.faces++,Q.faces===2&&Q.opposite!==ae&&w.push({a:Q.opposite*3,b:ae*3,length:D(Q.opposite,ae),lambda:0})):E.set(_,{a:O*3,b:Z*3,length:D(O,Z),opposite:ae,faces:1,lambda:0})}for(let O=0;O<e.length;O+=3){let Z=[];for(let $=0;$<3;$++){let te=e[O+$];if(!Number.isInteger(te)||te<0||te>=n.length)throw new TypeError("Triangle index is outside the mesh");Z.push(n[te])}let[ae,_,Q]=Z;ae===_||_===Q||Q===ae||(f.push(ae*3,_*3,Q*3),S(ae,_,Q),S(_,Q,ae),S(Q,ae,_))}let b=[...E.values()];if(!f.length||b.some(O=>O.faces!==2))throw new TypeError("The soft body requires a closed manifold mesh");function P(O=!1){let Z=0;O&&u.fill(0);for(let ae=0;ae<f.length;ae+=3){let _=f[ae],Q=f[ae+1],$=f[ae+2],te=(l[Q+1]*l[$+2]-l[Q+2]*l[$+1])/6,re=(l[Q+2]*l[$]-l[Q]*l[$+2])/6,Me=(l[Q]*l[$+1]-l[Q+1]*l[$])/6;Z+=l[_]*te+l[_+1]*re+l[_+2]*Me,O&&(u[_]+=te,u[_+1]+=re,u[_+2]+=Me,u[Q]+=(l[$+1]*l[_+2]-l[$+2]*l[_+1])/6,u[Q+1]+=(l[$+2]*l[_]-l[$]*l[_+2])/6,u[Q+2]+=(l[$]*l[_+1]-l[$+1]*l[_])/6,u[$]+=(l[_+1]*l[Q+2]-l[_+2]*l[Q+1])/6,u[$+1]+=(l[_+2]*l[Q]-l[_]*l[Q+2])/6,u[$+2]+=(l[_]*l[Q+1]-l[_+1]*l[Q])/6)}return Z}let G=P();if(Math.abs(G)<C**3*1e-5)throw new TypeError("Mesh must enclose a non-zero volume");let q=1/120,K=Math.round(En(t.iterations,5,2,10)),k=En(t.edgeCompliance,8e-5,0,.01),j=En(t.bendCompliance,.001,0,.05),ce=En(t.volumeCompliance,1e-8,0,1e-4),V=En(t.grabCompliance,12e-6,0,.005),ne=En(t.shapeStiffness,34,1,150),ue=En(t.damping,3.6,.5,20),Ce=En(t.maxDrag,C*1.1,C*.1,C*1.5),We=C*5,Ye=0,De=null;function Je(){p.fill(0);for(let O=0;O<f.length;O+=3){let Z=f[O],ae=f[O+1],_=f[O+2],Q=l[ae]-l[Z],$=l[ae+1]-l[Z+1],te=l[ae+2]-l[Z+2],re=l[_]-l[Z],Me=l[_+1]-l[Z+1],ge=l[_+2]-l[Z+2],Te=$*ge-te*Me,A=te*re-Q*ge,g=Q*Me-$*re;for(let F of[Z,ae,_])p[F]+=Te,p[F+1]+=A,p[F+2]+=g}for(let O=0;O<p.length;O+=3){let Z=Math.hypot(p[O],p[O+1],p[O+2]);Z>1e-12&&(p[O]/=Z,p[O+1]/=Z,p[O+2]/=Z)}for(let O=0;O<n.length;O++){let Z=n[O]*3,ae=O*3;m[ae]=p[Z],m[ae+1]=p[Z+1],m[ae+2]=p[Z+2]}}function ee(){for(let O=0;O<n.length;O++){let Z=n[O]*3,ae=O*3;x[ae]=l[Z],x[ae+1]=l[Z+1],x[ae+2]=l[Z+2]}Je()}function L(O,Z,ae){let _=Z/(ae*ae);for(let Q of O){let{a:$,b:te}=Q,re=l[$]-l[te],Me=l[$+1]-l[te+1],ge=l[$+2]-l[te+2],Te=Math.hypot(re,Me,ge);if(Te<C*1e-8)continue;let A=(Q.length-Te-_*Q.lambda)/(2+_);Q.lambda+=A;let g=A/Te;l[$]+=re*g,l[$+1]+=Me*g,l[$+2]+=ge*g,l[te]-=re*g,l[te+1]-=Me*g,l[te+2]-=ge*g}}function X(O,Z){let ae=P(!0)-G,_=ce/(O*O),Q=_;for(let te=0;te<u.length;te++)Q+=u[te]**2;if(Q<1e-16)return Z;let $=(-ae-_*Z)/Q;for(let te=0;te<l.length;te++)l[te]+=u[te]*$;return Z+$}function ie(O){if(De)for(let Z of De.nodes){let ae=V/(O*O*Z.weight*Z.weight);for(let _=0;_<3;_++){let $=(Z.origin[_]+De.offset[_]*Z.weight-l[Z.index+_]-ae*Z.lambda[_])/(1+ae);Z.lambda[_]+=$,l[Z.index+_]+=$}}}function le(O){let Z=Math.exp(-ue*O);d.set(l);for(let _=0;_<l.length;_++)h[_]*=Z,l[_]+=h[_]*O+(c[_]-l[_])*ne*O*O;if(De){let _=De.target[0]-De.offset[0],Q=De.target[1]-De.offset[1],$=De.target[2]-De.offset[2],te=Math.hypot(_,Q,$),re=te?Math.min(1,C*6*O/te):0;De.offset[0]+=_*re,De.offset[1]+=Q*re,De.offset[2]+=$*re;for(let Me of De.nodes)Me.lambda.fill(0)}for(let _ of b)_.lambda=0;for(let _ of w)_.lambda=0;let ae=0;for(let _=0;_<K;_++)L(b,k,O),L(w,j,O),ie(O),ae=X(O,ae);for(let _=0;_<l.length;_+=3){let Q=(l[_]-d[_])/O,$=(l[_+1]-d[_+1])/O,te=(l[_+2]-d[_+2])/O,re=Math.hypot(Q,$,te),Me=re?Math.min(1,We/re):0;h[_]=Q*Me,h[_+1]=$*Me,h[_+2]=te*Me}}function Ae(O,Z){let ae=En(Z,C*.55,C*.15,C*1.1),_=[],Q=0,$=1/0;for(let te=0;te<l.length;te+=3){let re=Math.hypot(l[te]-O[0],l[te+1]-O[1],l[te+2]-O[2]);if(re<$&&(Q=te,$=re),re<ae){let Me=1-(re/ae)**2;_.push({index:te,weight:Me*Me,origin:l.slice(te,te+3),lambda:new Float64Array(3)})}}return!_.length&&$<C*.5&&_.push({index:Q,weight:1,origin:l.slice(Q,Q+3),lambda:new Float64Array(3)}),_}return Je(),{positions:x,normals:m,restVolume:G,getVolume:()=>P(),step(O){if(!Number.isFinite(O)||O<=0)return!1;Ye=Math.min(Ye+O,q*8);let Z=!1;for(;Ye>=q-1e-10;)le(q),Ye-=q,Z=!0;return Z&&ee(),Z},grab(O,Z){if(!Oa(O))return!1;let ae=Ae(O,Z);return ae.length?(De={nodes:ae,point:[...O],offset:[0,0,0],target:[0,0,0]},!0):!1},drag(O){if(!De||!Oa(O))return!1;let Z=O[0]-De.point[0],ae=O[1]-De.point[1],_=O[2]-De.point[2],Q=Math.hypot(Z,ae,_),$=Q?Math.min(1,Ce/Q):0;return De.target[0]=Z*$,De.target[1]=ae*$,De.target[2]=_*$,!0},release(){De=null},impulse(O,Z,ae){if(!Oa(O)||!Oa(Z))return!1;let _=Math.hypot(...Z),Q=_?Math.min(1,We/_):0;for(let $ of Ae(O,ae))for(let te=0;te<3;te++)h[$.index+te]+=Z[te]*Q*$.weight;return!0},reset(){De=null,Ye=0,l.set(c),d.set(c),h.fill(0),x.set(v),Je()}}}var o0=`
  attribute float aSeed; attribute float aSpeed; attribute vec3 aVelocity;
  uniform float uHeight; uniform float uDebug;
  varying float vSpeed; varying float vSeed; varying vec2 vFlow;
  void main() {
    vec4 view = modelViewMatrix * vec4(position, 1.);
    float size = uDebug > .5 ? .025 : .25 * (.7 + aSeed * .6) * (1. + min(aSpeed,2.) * .45);
    gl_PointSize = clamp(size * uHeight / -view.z, 1., 48.);
    gl_Position = projectionMatrix * view;
    vSpeed = aSpeed; vSeed = aSeed; vFlow = aVelocity.xy;
  }
`,l0=`
  uniform float uDebug; uniform vec3 uTint;
  varying float vSpeed; varying float vSeed; varying vec2 vFlow;
  void main() {
    vec2 uv = gl_PointCoord * 2. - 1.;
    if(uDebug < .5) { vec2 flow = length(vFlow) > .001 ? normalize(vFlow) : vec2(1.,0.); uv = vec2(dot(uv,flow),dot(uv,vec2(-flow.y,flow.x))); uv.y *= 1. + min(vSpeed,2.) * 2.; }
    float r = dot(uv,uv);
    if(r > 1.) discard;
    vec3 ink = mix(uTint * .65, vec3(.94,.98,1.), .25);
    float alpha = exp(-r * 3.3) * .13;
    if(uDebug > .5) { ink = mix(vec3(.32,.72,1.),vec3(1.,.76,.38),clamp(vSpeed*.6,0.,1.)); alpha = (1.-smoothstep(.55,1.,r)) * .85; }
    gl_FragColor = vec4(ink,alpha);
    #include <colorspace_fragment>
  }
`,fl=(i,e,t,n)=>Number.isFinite(i)?Math.max(e,Math.min(t,i)):n;function wh(i,e,t,n){let s=window.matchMedia("(prefers-reduced-motion: reduce)"),r=window.matchMedia("(pointer: coarse)").matches,a=new hs,o=new wt(43,1,.1,12);o.position.set(0,0,4.3),o.updateMatrixWorld();let c,l,d,h,u,p,x,v,m,f,E,w,T,I,M=0,C=!1,D=!1,S=!0,b,P,G=0,q=0,K=0,k=0,j=0,ce=0,V=!1,ne=null,ue=-1,Ce=new Ms,We=new Qe,Ye=new Zt,De=new W,Je=40,ee=25,L=new Float32Array(Je*ee),X=new Uint16Array(Je*ee),ie=new Xe("#64b5f6"),le=()=>{cancelAnimationFrame(M),M=0,G=0},Ae=()=>{D||(D=C=!0,le(),x?.release(),v?.dispose(),b?.disconnect(),P?.disconnect(),window.removeEventListener("resize",te),document.removeEventListener("visibilitychange",re),s.removeEventListener("change",Me),i.removeEventListener("webglcontextlost",ge),l?.dispose(),d?.dispose(),u?.dispose(),m?.dispose(),f?.dispose(),w?.dispose(),T?.dispose(),a.clear(),c?.dispose(),c&&!c.getContext().isContextLost()&&c.forceContextLoss())},O=()=>{Ae(),n(!0)},Z=(B,H,z)=>{let he=(Math.atan2(z,B)+Math.PI)/(Math.PI*2);return Math.min(Je-1,Math.floor(he*Je))+Je*Math.min(ee-1,Math.floor(Math.acos(Math.max(-1,Math.min(1,H)))/Math.PI*ee))},ae=()=>{l.attributes.position.array.set(x.positions),l.attributes.position.needsUpdate=!0,x.normals?(l.attributes.normal.array.set(x.normals),l.attributes.normal.needsUpdate=!0):l.computeVertexNormals(),l.computeBoundingSphere(),L.fill(.92),X.fill(0);for(let B=0;B<x.positions.length;B+=3){let H=x.positions[B],z=x.positions[B+1],he=x.positions[B+2],de=Math.hypot(H,z,he),Re=Z(H/de,z/de,he/de);X[Re]?L[Re]=Math.max(L[Re],de):L[Re]=de,X[Re]++}},_=B=>{v.setParticleCount(B),E&&(a.remove(E,I),m.dispose(),w.dispose()),m=new Rt,m.setAttribute("position",new gt(v.positions,3).setUsage(ki));let H=new Float32Array(B),z=new Float32Array(B);for(let he=0;he<B;he++)H[he]=(he*16807+31)%997/997;m.setAttribute("aSeed",new gt(H,1)),m.setAttribute("aSpeed",new gt(z,1).setUsage(ki)),m.setAttribute("aVelocity",new gt(v.velocities,3).setUsage(ki)),E=new ds(m,f),E.frustumCulled=!1,w=new Rt,w.setAttribute("position",new gt(new Float32Array(B*6),3).setUsage(ki)),I=new us(w,T),I.frustumCulled=!1,a.add(E,I),ue=B},Q=B=>{if(M=0,C||!S||document.hidden)return;let H=t(),z=s.matches||H.paused;if(B-q<32&&!z){M=requestAnimationFrame(Q);return}let he=G?Math.min(.0666,(B-G)/1e3):1/60;G=q=B;let de=fl(H.appearance.particles,0,128,32)/128,Re=Math.round(de*(r?2100:4200));ue!==Re&&_(Re);let Le=fl(H.appearance.diffusion,0,100,35)/100,oe=fl(H.energy,0,1,0);if(!z){if(oe>.04&&B-j>100){let me=Math.max(0,oe-ce)*.11;x.impulse([.2,.3,.82],[.005*me,me*.03,me],.35),ce=oe,j=B}x.step(he),ae(),v.step(he,{diffusion:Le,energy:oe})}ie.set(/^#[\da-f]{6}$/i.test(H.appearance.color??"")?H.appearance.color:"#64b5f6"),d.color.copy(ie),f.uniforms.uTint.value.copy(ie);let pe=H.debug==="particles"?1:H.debug==="trails"?2:0;f.uniforms.uDebug.value=pe,f.uniforms.uHeight.value=i.height*.5,I.visible=pe===2,p.visible=!!H.wireframe;let Be=m.attributes.aSpeed.array,Ne=w.attributes.position.array;for(let me=0,Ue=0;me<v.positions.length;me+=3,Ue++)if(Be[Ue]=Math.hypot(v.velocities[me],v.velocities[me+1],v.velocities[me+2]),pe===2)for(let R=0;R<3;R++)Ne[Ue*6+R]=v.positions[me+R],Ne[Ue*6+3+R]=v.positions[me+R]-v.velocities[me+R]*.14;m.attributes.position.needsUpdate=!0,m.attributes.aSpeed.needsUpdate=!0,m.attributes.aVelocity.needsUpdate=!0,pe===2&&(w.attributes.position.needsUpdate=!0);try{c.render(a,o)}catch{O();return}if(C){Ae();return}if(H.onDiagnostics&&B-K>250){let me=0,Ue=x.restPositions??Te;for(let R=0;R<x.positions.length;R+=3)me=Math.max(me,Math.hypot(x.positions[R]-Ue[R],x.positions[R+1]-Ue[R+1],x.positions[R+2]-Ue[R+2]));H.onDiagnostics({...v.diagnostics(),volumeRatio:x.getVolume()/x.restVolume,displacement:me,grabbing:V}),K=B}z||(M=requestAnimationFrame(Q))},$=()=>{!C&&!M&&S&&!document.hidden&&(M=requestAnimationFrame(Q))},te=()=>{if(!c||C)return;let B=Math.max(1,i.clientWidth);c.setPixelRatio(Math.min(window.devicePixelRatio||1,r?1.4:1.7,650/B)),c.setSize(B,B,!1),$()},re=()=>{document.hidden?le():$()},Me=()=>{le(),$()},ge=B=>{B.preventDefault(),O()},Te;try{let B=i.getContext("webgl2",{alpha:!0,antialias:!0,powerPreference:"low-power"});if(!B)n(!0),C=!0;else{c=new Ua({canvas:i,context:B,alpha:!0,antialias:!0,powerPreference:"low-power"}),c.setClearColor(0,0),c.toneMapping=qr,c.toneMappingExposure=1.1,c.debug.onShaderError=()=>{C=!0,le(),n(!0)},l=new xs(.92,32,24),Te=l.attributes.position.array.slice(),x=Sh(Te,l.index.array,{shapeStiffness:22,damping:3.5}),d=new gs({color:"#64b5f6",roughness:.3,metalness:.01,clearcoat:.5,clearcoatRoughness:.3}),h=new Ot(l,d),a.add(h),u=new si({color:"#f0fbff",wireframe:!0,transparent:!0,opacity:.19,depthWrite:!1}),p=new Ot(l,u),p.visible=!1,a.add(p),a.add(new ys(15202047,2574174,1.5));let H=new Oi(16777215,2.5);H.position.set(-3,4,5),a.add(H);let z=new Oi(12049151,1.2);z.position.set(3,-1,2),a.add(z),v=dl({resolution:r?10:14,count:0,pressureIterations:r?30:42}),v.setSurfaceRadius((he,de,Re)=>L[Z(he,de,Re)]||.92),f=new Bt({vertexShader:o0,fragmentShader:l0,transparent:!0,depthWrite:!1,uniforms:{uHeight:{value:250},uDebug:{value:0},uTint:{value:ie.clone()}}}),T=new Fi({color:"#afd9f1",transparent:!0,opacity:.35,depthWrite:!1}),_(0),ae(),te(),typeof ResizeObserver<"u"?(b=new ResizeObserver(te),b.observe(i)):window.addEventListener("resize",te),typeof IntersectionObserver<"u"&&(P=new IntersectionObserver(he=>{S=he[0]?.isIntersecting!==!1,S?$():le()}),P.observe(i)),document.addEventListener("visibilitychange",re),s.addEventListener("change",Me),i.addEventListener("webglcontextlost",ge),n(!1)}}catch{O()}let A=(B,H)=>{We.set(B,H),Ce.setFromCamera(We,o)},g=(B,H,z=.65)=>(A(B,H),Ye.set(new W(0,0,1),-z),Ce.ray.intersectPlane(Ye,De)?.clone()),F=(B,H,z=1)=>{B&&v&&v.inject(B.toArray(),H,{radius:.4,scatter:z}),$()};return{invalidate:$,dispose:Ae,down(B,H){if(C)return!1;A(B,H);let z=Ce.intersectObject(h,!1)[0];return z?(V=!0,x.grab(z.point.toArray(),.46),Ye.constant=-z.point.z,ne=z.point.clone()):(ne=g(B,H),F(ne,[0,0,-.65],1.8)),$(),V},move(B,H){if(C)return;let z=g(B,H,V&&ne?ne.z:.65);if(!z)return;V&&x.drag(z.toArray());let he=performance.now();if(ne&&he-k>20){let de=z.clone().sub(ne);F(z,[de.x*4,de.y*4,-.035],V?.4:.75),k=he}ne=z,(s.matches||t().paused)&&(x.step(1/60),ae()),$()},up(){V=!1,x?.release(),ne=null,$()},poke(B=0,H=0){if(C)return;A(B,H);let z=Ce.intersectObject(h,!1)[0],he=z?.point??g(B,H);he&&(z&&x.impulse(he.toArray(),he.clone().normalize().multiplyScalar(-1.8).toArray(),.4),F(he,[0,0,-.7],2.2),$())},reset(){C||(x.reset(),ae(),v.dispose(),v=dl({resolution:r?10:14,count:ue}),v.setSurfaceRadius((B,H,z)=>L[Z(B,H,z)]||.92),_(ue),$())}}}var fi={root:"s",canvas:"_",image:"n",imageRoot:"h",imageTouch:"G",fallback:"i",mistDrift:"w",cloudTouch:"H",small:"p"};function Xi({appearance:i={},phase:e="idle",small:t=!1,energy:n=0,label:s,debug:r="fog",paused:a=!1,wireframe:o=!1,onDiagnostics:c,resetToken:l=0}){let d=(0,ot.useRef)(null),h=(0,ot.useRef)(null),u=(0,ot.useRef)(null),p=(0,ot.useRef)(null);p.current={appearance:i,phase:e,energy:n,debug:r,paused:a,wireframe:o,onDiagnostics:c};let x=(0,ot.useRef)(!1),v=(0,ot.useRef)(!1),m=(0,ot.useRef)([0,0]),[f,E]=(0,ot.useState)(!1),[w,T]=(0,ot.useState)(!1),[I,M]=(0,ot.useState)(!1),C=(0,ot.useRef)(null),D=(0,ot.useRef)(null),S=i.kind==="image",b=/^#[\da-f]{6}$/i.test(i.color??"")?i.color:"#64b5f6";(0,ot.useEffect)(()=>{if(!(S||t))return u.current=wh(d.current,null,()=>p.current,E),()=>{u.current?.dispose(),u.current=null}},[S,t]),(0,ot.useEffect)(()=>{u.current?.invalidate()},[i.color,i.particles,i.diffusion,e,n,r,a,o]),(0,ot.useEffect)(()=>{l&&u.current?.reset()},[l]),(0,ot.useEffect)(()=>()=>{clearTimeout(C.current),D.current?.cancel()},[]);let P=V=>{let ne=h.current.getBoundingClientRect();return[(V.clientX-ne.left)/ne.width*2-1,1-(V.clientY-ne.top)/ne.height*2]},G=V=>{let ne=P(V);x.current&&Math.hypot(ne[0]-m.current[0],ne[1]-m.current[1])>.025&&(v.current=!0),u.current?.move(...ne)},q=V=>{if(V.button!==0)return;let ne=P(V);m.current=ne,v.current=!1,x.current=!0,h.current.setPointerCapture?.(V.pointerId),M(!!u.current?.down(...ne))},K=V=>{x.current=!1,M(!1),u.current?.up(),h.current.hasPointerCapture?.(V.pointerId)&&h.current.releasePointerCapture(V.pointerId)},k=()=>{x.current||u.current?.up()},j=V=>{let ne=V.detail===0?[0,0]:P(V);if((V.detail===0||!v.current)&&u.current?.poke(...ne),T(!0),clearTimeout(C.current),C.current=setTimeout(()=>T(!1),700),(S||f)&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches){D.current?.cancel();let ue=S?h.current.querySelector("img"):h.current;D.current=ue?.animate?.([{transform:"scale(.94)"},{transform:"scale(1.055)",offset:.38},{transform:"scale(1)"}],{duration:650,easing:"cubic-bezier(.18,.74,.25,1)"})}u.current?.invalidate()},ce=V=>{V.key!==" "&&V.key!=="Enter"||(V.preventDefault(),V.repeat||j({detail:0}))};return ot.default.createElement("div",{ref:h,className:`${fi.root} moss-orb-wrap ${t?`${fi.small} moss-orb-small`:""} ${S?fi.imageRoot:""}`,style:{"--orb-color":b},role:t?void 0:"button",tabIndex:t?void 0:0,"aria-label":t?void 0:s,"aria-hidden":t?!0:void 0,"data-poked":w,"data-grabbing":I,onPointerMove:t?void 0:G,onPointerLeave:t?void 0:k,onPointerDown:t?void 0:q,onPointerUp:t?void 0:K,onPointerCancel:t?void 0:K,onLostPointerCapture:t?void 0:K,onClick:t?void 0:j,onKeyDown:t?void 0:ce},S?ot.default.createElement("img",{className:fi.image,src:i.image,alt:"",draggable:!1}):ot.default.createElement(ot.default.Fragment,null,(f||t)&&ot.default.createElement("span",{className:fi.fallback}),!t&&ot.default.createElement("canvas",{ref:d,className:fi.canvas,style:f?{visibility:"hidden"}:void 0,"aria-hidden":"true"})))}var pl=i=>typeof i=="string"&&i.startsWith("moss-live-");function Ls(i,e){let t=Object.values(e?.byId??{}).find(r=>r.retainedBy?.mainView>0);if(pl(t?.id))return t.id;if(pl(t?.parentId))return t.parentId;let n=In(i.phase);if(t&&!n)return null;let s=i.viewSessionId??i.sessionId;return pl(s)?s:null}var Cn=pn(require("react"),1),$t=require("@deepseek-ai/dsh-client-ui-primitives");function Ba({t:i,state:e,sessionId:t,startVoice:n,pauseVoice:s,muteVoice:r,stopVoice:a}){let o=e.sessionId===t,c=o&&In(e.phase),l=o&&e.muted;return Cn.default.createElement("div",{className:Ge("moss-controls"),role:"group","aria-label":i("call.controls")},Cn.default.createElement($t.Button,{variant:"outline",className:Ge(l&&"moss-muted"),disabled:!o,"aria-label":i(l?"VoiceView.10":"VoiceView.11"),title:i(l?"VoiceView.10":"VoiceView.11"),"aria-pressed":l,onClick:r},Cn.default.createElement($t.IconMicrophoneOutlineRegular,null)),Cn.default.createElement($t.Button,{variant:"outline","aria-label":i(c?"call.pause":"call.resume"),title:i(c?"call.pause":"call.resume"),onClick:()=>c?s():n(t)},c?Cn.default.createElement($t.IconPauseOutlineRegular,null):Cn.default.createElement($t.IconPlayOutlineRegular,null)),Cn.default.createElement($t.Button,{variant:"outline",className:Ge("moss-end"),disabled:!c,"aria-label":i("VoiceView.4"),title:i("VoiceView.4"),onClick:a},Cn.default.createElement($t.IconStopFillRegular,null)))}function Ah({t:i,useVoice:e,useVoiceSettings:t,useVoiceSessionList:n,sessionId:s,openView:r,openSettings:a,createVoice:o,startVoice:c,stopVoice:l,muteVoice:d,pauseVoice:h,minimizeVoice:u,mountVoiceView:p,viewRequest:x,completeViewRequest:v}){let m=e(D=>D),f=t(D=>D),E=n(D=>D),w=s??Ls(m,E),T=E.byId[w],I=f.value?.appearance,M=w?.startsWith("moss-live-"),C=m.sessionId===w;return(0,nt.useEffect)(()=>{if(!M)return;let D=p(w);return x?.view==="moss"&&v(),D},[w,M]),nt.default.createElement("section",{className:Ge("moss-voice"),"aria-label":i("VoiceView.1"),"data-session-id":w??""},nt.default.createElement("header",{className:Ge("moss-voice-head")},nt.default.createElement("div",{className:Ge("moss-session-heading")},nt.default.createElement("span",{className:Ge("moss-wordmark")},nt.default.createElement("i",null),"MOSS LIVE"),M&&nt.default.createElement("span",{className:Ge("moss-session-title"),title:w},T?.title??T?.displayTitle??i("VoiceView.currentSession"))),nt.default.createElement("div",null,M&&nt.default.createElement(za.Button,{onClick:()=>{u(),r("chat","")}},i("VoiceView.14")))),nt.default.createElement("div",{className:Ge("moss-voice-center")},nt.default.createElement(Xi,{appearance:I,phase:C?m.phase:"idle",energy:C?m.energy:0,label:i("VoiceView.2")}),nt.default.createElement("div",{className:Ge("moss-phase"),"data-phase":C?m.phase:M?"paused":"idle"},Os(C?m.phase:M?"paused":"idle",i),nt.default.createElement("span",{className:Ge("moss-wave")},nt.default.createElement("i",null),nt.default.createElement("i",null),nt.default.createElement("i",null),nt.default.createElement("i",null))),nt.default.createElement("div",{className:Ge("moss-captions"),"aria-live":"polite","aria-atomic":"true"},nt.default.createElement("p",{className:Ge("moss-user-caption")},C&&m.userText),nt.default.createElement("p",{className:Ge("moss-assistant-caption")},C&&m.assistantText||i(M?"VoiceView.resume":"VoiceView.6"))),m.error&&(C||!w)&&nt.default.createElement("div",{className:Ge("moss-error"),role:"alert"},nt.default.createElement("p",null,m.error),nt.default.createElement("p",null,m.errorCode==="VOICE_INCOMPATIBLE"?i("VoiceView.7"):m.errorCode==="VOICE_NOT_CONFIGURED"?i("VoiceView.8"):i("VoiceView.9")),nt.default.createElement(za.Button,{variant:"outline",onClick:a},i("VoiceView.15")))),nt.default.createElement("footer",{className:Ge("moss-voice-foot")},M?nt.default.createElement(Ba,{t:i,state:m,sessionId:w,startVoice:c,stopVoice:l,muteVoice:d,pauseVoice:h}):nt.default.createElement(za.Button,{variant:"primary",className:Ge("moss-start"),onClick:()=>o().catch(()=>{})},i("VoiceView.16")),nt.default.createElement("small",null,i(M?"VoiceView.12":"VoiceView.13"))))}var Ds=pn(require("react"),1);var Rn=pn(require("react"),1),Va=require("@deepseek-ai/dsh-client-ui-primitives");function ka({t:i,state:e,sessionId:t,appearance:n,onReturn:s,returnLabel:r=i("Composer.3"),...a}){let o=e.sessionId===t?e.phase:"paused";return Rn.default.createElement("div",{className:Ge("moss-voice-bar")},Rn.default.createElement(Va.Button,{variant:"outline",className:Ge("moss-return"),"aria-label":r,title:r,onClick:s,icon:Rn.default.createElement(Va.IconChevronLeftOutlineRegular,{size:20})}),Rn.default.createElement("div",{className:Ge("moss-bar-status")},Rn.default.createElement(Xi,{small:!0,appearance:n}),Rn.default.createElement("span",null,"MOSS",Rn.default.createElement("span",null,Os(o,i)))),Rn.default.createElement(Ba,{...a,t:i,state:e,sessionId:t}))}function Th({sessionId:i,pendingInteraction:e}){return i?.startsWith("moss-live-")&&!e?{sessionId:i}:null}function Eh({t:i,sessionId:e,openVoiceSession:t,useVoice:n,useVoiceSettings:s,mountVoiceHistory:r,...a}){let o=n(l=>l),c=s(l=>l);return(0,Ds.useEffect)(()=>r(e),[e]),Ds.default.createElement("div",{className:Ge("moss-composer")},Ds.default.createElement(ka,{...a,t:i,state:o,sessionId:e,appearance:c.value?.appearance,onReturn:()=>t(e)}))}var ml=pn(require("react"),1);function Ch({t:i,useVoice:e,useVoiceSettings:t,useVoicePanelInfo:n,expandVoice:s,...r}){let a=e(l=>l),o=t(l=>l),c=n(l=>l.activePanelId);return!a.minimized||!a.sessionId||c===null&&a.historyBars?.includes(a.sessionId)?null:ml.default.createElement("aside",{className:Ge("moss-capsule"),"aria-label":i("Overlay.1")},ml.default.createElement(ka,{...r,t:i,state:a,sessionId:a.sessionId,appearance:o.value?.appearance,onReturn:s,returnLabel:i("Overlay.2")}))}var ye=pn(require("react"),1),Pt=require("@deepseek-ai/dsh-client-ui-primitives");var xl=i=>JSON.stringify({provider:i?.provider??"",model:i?.model??""});function Ga({label:i,value:e,items:t,onChange:n,disabled:s,placeholder:r}){let[a,o]=(0,ye.useState)(!1);return ye.default.createElement("div",{className:Ge("moss-field")},ye.default.createElement("span",null,i),ye.default.createElement(Pt.Menu,{open:a,onClose:()=>o(!1),portal:!0,autoFocus:!0,minWidthFromAnchor:!0,selectedId:e,items:t,onSelect:c=>{n(c),o(!1)},anchor:ye.default.createElement(Pt.Button,{variant:"outline",className:Ge("moss-choice"),"aria-label":i,"aria-haspopup":"menu","aria-expanded":a,disabled:s,onClick:()=>o(!a)},ye.default.createElement("span",null,t.find(c=>c.id===e)?.label??r??e),ye.default.createElement(Pt.IconChevronDownOutlineRegular,null))}))}function Rh({catalog:i,route:e={},onChange:t,disabled:n,t:s,delegate:r=!1}){let[a,o]=(0,ye.useState)(null),c=a??e.provider??"",d=(i.providers??[...new Map(i.models.map(p=>[p.provider,{id:p.provider,name:p.providerName??p.provider}])).values()]).map(p=>({id:p.id,label:p.name}));r&&d.unshift({id:"",label:s("Settings.27")}),c&&!d.some(p=>p.id===c)&&d.push({id:c,label:c+s("model.unlisted")});let h=e.provider===c?e.model??"":"",u=i.models.filter(p=>p.provider===c).map(p=>({id:p.model,label:p.modelName??p.model}));return h&&!u.some(p=>p.id===h)&&u.push({id:h,label:h+s("model.unlisted")}),ye.default.createElement("div",{className:Ge("moss-model-pair")},ye.default.createElement(Ga,{label:s(r?"delegate.provider":"voice.provider"),value:c,items:d,placeholder:s("provider.choose"),disabled:n,onChange:p=>{o(p),!p&&r&&t({provider:"",model:""})}}),ye.default.createElement(Ga,{label:s(r?"Settings.7":"Settings.39"),value:h,items:u,placeholder:s(r&&!c?"Settings.27":"model.choose"),disabled:n||!c||!u.length,onChange:p=>{t({provider:c,model:p}),o(null)}}))}function qi({t:i,view:e,useSettingsEditor:t,useMicrophone:n,editSettings:s,retrySettings:r,discardSettings:a,mountSettings:o,loadCatalog:c,testModel:l,toggleMicrophone:d}){let h=t(k=>k),u=n(k=>k),[p,x]=(0,ye.useState)({models:[],agentPresets:[]}),[v,m]=(0,ye.useState)(""),[f,E]=(0,ye.useState)(!1),[w,T]=(0,ye.useState)(null),[I,M]=(0,ye.useState)(null),C=(0,ye.useRef)();if((0,ye.useEffect)(()=>e==="summary"?void 0:o(),[]),(0,ye.useEffect)(()=>{let k=!0;return c().then(j=>{k&&x(j)}).catch(()=>{k&&m(i("Settings.8"))}),()=>{k=!1}},[]),e==="summary")return i("Settings.9");let D=h.value;if(!D)return ye.default.createElement("p",null,i("Settings.33"));let S=I??D.appearance.kind,b=(k,j,ce)=>s(k,{...D[k],[j]:ce}),P=k=>{let j=k.target.files?.[0];if(!j)return;if(!["image/png","image/jpeg","image/webp"].includes(j.type)||j.size>256*1024){m(i("Settings.10"));return}let ce=new FileReader;ce.onload=()=>{s("appearance",{...D.appearance,kind:"image",image:ce.result}),m(""),M("image")},ce.readAsDataURL(j),k.target.value=""},G=async()=>{E(!0),T(null);try{let k=await l(D.voiceModel);T({...k,route:xl(D.voiceModel)})}catch{T({ok:!1,message:i("Settings.11"),route:xl(D.voiceModel)})}finally{E(!1)}},q=w?.route===xl(D.voiceModel)?w:null,K=[{id:"",label:i("Settings.12")},...p.agentPresets.map(k=>({id:k.id,label:k.name,disabled:k.broken}))];return D.delegation.agentPreset&&!K.some(k=>k.id===D.delegation.agentPreset)&&K.push({id:D.delegation.agentPreset,label:`${D.delegation.agentPreset}${i("preset.invalid")}`}),ye.default.createElement("div",{className:Ge("moss-settings")},!e&&ye.default.createElement("h2",null,i("index.6")),ye.default.createElement("fieldset",{disabled:!h.writable},ye.default.createElement("legend",null,i("Settings.34")),ye.default.createElement("div",{className:Ge("moss-appearance-editor")},ye.default.createElement("div",{className:Ge("moss-avatar-editor",S==="image"&&"moss-avatar-editable")},S==="image"&&!D.appearance.image?ye.default.createElement("div",{className:Ge("moss-avatar-placeholder")},i("Settings.13")):ye.default.createElement(Xi,{appearance:{...D.appearance,kind:S},phase:u.active?"listening":"idle",energy:u.level??0,label:i("Settings.1")}),S==="image"&&ye.default.createElement(ye.default.Fragment,null,ye.default.createElement(Pt.Button,{variant:"outline",className:Ge("moss-avatar-action"),onClick:()=>C.current.click()},D.appearance.image?i("Settings.14"):i("Settings.15")),ye.default.createElement("input",{ref:C,hidden:!0,type:"file",accept:"image/png,image/jpeg,image/webp","aria-label":i("Settings.2"),onChange:P}))),ye.default.createElement("div",null,ye.default.createElement(Ga,{label:i("Settings.3"),value:S,items:[{id:"orb",label:i("Settings.16")},{id:"image",label:i("Settings.17")}],disabled:!h.writable,onChange:k=>{M(k),(k==="orb"||D.appearance.image)&&b("appearance","kind",k)}}),S==="orb"?ye.default.createElement(ye.default.Fragment,null,ye.default.createElement("label",null,i("Settings.18"),ye.default.createElement("input",{type:"color",value:D.appearance.color,onChange:k=>b("appearance","color",k.target.value)})),ye.default.createElement("label",null,i("Settings.35"),ye.default.createElement("output",{"aria-hidden":"true"},D.appearance.particles),ye.default.createElement("input",{"aria-label":i("Settings.35").trim(),type:"range",min:"0",max:"128",step:"1",value:D.appearance.particles,onChange:k=>b("appearance","particles",Number(k.target.value))})),ye.default.createElement("label",null,i("Settings.36"),ye.default.createElement("output",{"aria-hidden":"true"},D.appearance.diffusion),ye.default.createElement("input",{"aria-label":i("Settings.36").trim(),type:"range",min:"0",max:"100",value:D.appearance.diffusion,onChange:k=>b("appearance","diffusion",Number(k.target.value))}))):ye.default.createElement("p",null,i("Settings.37"),ye.default.createElement("br",null),i("Settings.38"))))),ye.default.createElement("fieldset",{disabled:!h.writable},ye.default.createElement("legend",null,i("Settings.39")),ye.default.createElement(Rh,{catalog:p,route:D.voiceModel,t:i,disabled:!h.writable,onChange:k=>{s("voiceModel",k),T(null)}}),ye.default.createElement("p",null,i("Settings.40")),ye.default.createElement("div",{className:Ge("moss-connection-actions")},ye.default.createElement(Pt.Button,{variant:"outline",disabled:f||u.pending||!D.voiceModel.provider,onClick:G},i(f?"Settings.20":"Settings.21")),ye.default.createElement("div",{className:Ge("moss-microphone-toggle")},ye.default.createElement(Pt.Button,{variant:"outline",disabled:u.pending,icon:ye.default.createElement(Pt.IconMicrophoneOutlineRegular,null),onClick:()=>{Promise.resolve(d(!u.active)).catch(()=>{})}},i(u.active?"microphone.stop":"microphone.test")),ye.default.createElement(Pt.StateDot,{state:u.pending?"ongoing":u.permission==="granted"?"done":u.permission==="denied"?"error":"idle"}),ye.default.createElement("small",null,u.pending?i("Settings.22"):u.permission==="granted"?i("Settings.23"):u.permission==="denied"?i("Settings.24"):i("Settings.25")),u.active&&ye.default.createElement("meter",{min:"0",max:"1",value:u.level??0,"aria-label":i("microphone.level")}))),q&&ye.default.createElement("p",{className:Ge(q.ok?"moss-test-success":"moss-test-error"),role:"status"},q.ok?i("Settings.26"):q.message),u.error&&ye.default.createElement("p",{className:Ge("moss-test-error"),role:"alert"},u.error),ye.default.createElement("small",null,i("Settings.41"))),ye.default.createElement("fieldset",{disabled:!h.writable},ye.default.createElement("legend",null,i("Settings.42")),ye.default.createElement(Ga,{label:i("Settings.6"),value:D.delegation.agentPreset,items:K,disabled:!h.writable,onChange:k=>b("delegation","agentPreset",k)}),ye.default.createElement(Rh,{catalog:p,route:D.delegation.model,t:i,delegate:!0,disabled:!h.writable,onChange:k=>b("delegation","model",k)}),ye.default.createElement("p",null,i("Settings.43"))),ye.default.createElement("div",{className:Ge("moss-save-status"),role:"status"},{saved:i("Settings.28"),pending:i("Settings.29"),saving:i("Settings.30"),conflict:i("Settings.31"),error:i("Settings.32")}[h.status],["conflict","error"].includes(h.status)&&ye.default.createElement(ye.default.Fragment,null,ye.default.createElement(Pt.Button,{variant:"outline",onClick:r},i("Settings.44")),ye.default.createElement(Pt.Button,{onClick:a},i("Settings.45")))),ye.default.createElement("small",null,i("Settings.46")),v&&ye.default.createElement("p",{role:"status"},v))}var Ih={kind:"moss-voice-user",target:"chat",match:i=>i.type==="user/message"&&i.data.source.kind==="user"&&i.data.source.voice?{id:String(i.data.id),role:"start",exclusive:!0}:null,start:(i,e)=>({kind:"user",messageId:e.event.data.id,seq:e.event.seq,time:e.event.time,content:e.event.data.content,source:e.event.data.source}),update:(i,e)=>({...i.state,content:e.event.data.content,source:e.event.data.source}),buildViewNode:i=>i.state?{key:i.key,kind:"user",id:i.id,target:"chat",anchorSeq:i.state.seq,location:i.start?.location??{kind:"unresolved"},visibility:"visible",groupTree:"exchange",data:i.state}:null};var Ha=class{constructor(e,{delay:t=300}={}){Object.assign(this,{form:e,delay:t}),this.pending=new Map,this.listeners=new Set,this.status="saved",this.getSnapshot=()=>this.snapshot,this.subscribe=n=>(this.listeners.add(n),()=>this.listeners.delete(n)),this.off=e.subscribe(()=>this.publish()),this.publish()}publish(){let e=this.form.getSnapshot();this.snapshot={...e,value:e.value&&{...e.value,...Object.fromEntries(this.pending)},status:this.status};for(let t of this.listeners)t()}edit(e,t){this.disposed||!this.form.getSnapshot().writable||(!this.pending.size&&!this.inFlight&&(this.revision=this.form.getSnapshot().revision),this.pending.set(e,t),["conflict","error"].includes(this.status)||(this.status="pending",this.schedule()),this.publish())}schedule(){clearTimeout(this.timer),this.timer=setTimeout(()=>void this.flush(),this.delay)}flush(){if(clearTimeout(this.timer),this.inFlight)return this.inFlight;if(!this.pending.size||["conflict","error"].includes(this.status))return Promise.resolve();let e=new Map(this.pending),t,n=new Promise(s=>{t=s});return this.inFlight=n,this.status="saving",this.publish(),(async()=>{try{if(await this.form.mutate([...e].map(([r,a])=>({op:"set",path:[r],value:a})),this.revision)){for(let[r,a]of e)this.pending.get(r)===a&&this.pending.delete(r);this.revision=this.form.getSnapshot().revision,this.status=this.pending.size?"pending":"saved"}else this.status="conflict"}catch{this.status="error"}finally{this.inFlight=void 0,this.publish(),!this.disposed&&this.status==="pending"&&this.schedule(),t()}})(),n}retry(){return this.revision=this.form.getSnapshot().revision,this.status="pending",this.flush()}discard(){clearTimeout(this.timer),this.pending.clear(),this.status="saved",this.publish()}dispose(){return this.disposal?this.disposal:(this.disposed=!0,clearTimeout(this.timer),this.off(),this.listeners.clear(),this.disposal=(async()=>{for(;this.inFlight||this.pending.size&&!["conflict","error"].includes(this.status);)await this.flush()})(),this.disposal)}};var Wa=class{constructor(e,t=n=>n){this.devices=e,this.t=t,this.listeners=new Set,this.generation=0,this.snapshot={active:!1,pending:!1,permission:"prompt",error:""},this.getSnapshot=()=>this.snapshot,this.subscribe=n=>(this.listeners.add(n),()=>this.listeners.delete(n))}patch(e){this.snapshot={...this.snapshot,...e};for(let t of this.listeners)t()}async refresh(){try{let e=await navigator.permissions.query({name:"microphone"});if(this.disposed)return;this.permission=e,e.onchange=()=>this.patch({permission:e.state}),this.patch({permission:e.state})}catch{}}async start(){if(this.stream)return;let e=++this.generation;this.patch({pending:!0,error:""});try{let t=await Vs(this.devices,{audio:!0},this.t);if(e!==this.generation){for(let s of t.getTracks())s.stop();return}this.stream=t;for(let s of t.getTracks())s.onended=()=>this.stop();this.patch({active:!0,pending:!1,permission:"granted"});let n=globalThis.AudioContext??globalThis.webkitAudioContext;if(n){if(this.context=new n,await this.context.resume(),e!==this.generation)return;this.source=this.context.createMediaStreamSource(t),this.analyser=this.context.createAnalyser(),this.analyser.fftSize=512,this.source.connect(this.analyser);let s=new Float32Array(512);this.meter=setInterval(()=>{this.analyser.getFloatTimeDomainData(s),this.patch({level:Math.min(1,Math.sqrt(s.reduce((r,a)=>r+a*a,0)/s.length)*4)})},80)}}catch(t){throw e===this.generation&&(this.stop(),this.patch({active:!1,pending:!1,permission:t.code==="MIC_PERMISSION_DENIED"?"denied":this.snapshot.permission,error:t.code?.startsWith("MIC_")?t.message:this.t("microphone.2")})),t}}stop(){this.generation++,clearInterval(this.meter),this.source?.disconnect(),this.analyser?.disconnect(),this.context&&this.context.state!=="closed"&&this.context.close().catch(()=>{}),this.context=null,this.source=null,this.analyser=null;for(let e of this.stream?.getTracks()??[])e.onended=null,e.stop();this.stream=null,this.patch({active:!1,pending:!1,level:0})}dispose(){this.disposed=!0,this.permission&&(this.permission.onchange=null),this.stop(),this.listeners.clear()}};var gl={"call.controls":"\u8BED\u97F3\u901A\u8BDD\u63A7\u5236","call.pause":"\u6682\u505C\u8BED\u97F3","call.resume":"\u6062\u590D\u8BED\u97F3","settings.title":"MOSS \u8BBE\u7F6E","settings.close":"\u5173\u95ED\u8BBE\u7F6E","phase.paused":"\u5DF2\u6682\u505C\uFF0C\u53EF\u968F\u65F6\u6062\u590D","phase.idle":"\u968F\u65F6\uFF0C\u5F00\u59CB\u4E00\u6BB5\u5BF9\u8BDD","phase.connecting":"\u6B63\u5728\u8FDE\u63A5","phase.listening":"\u6211\u5728\u542C","phase.thinking":"\u60F3\u4E00\u60F3","phase.speaking":"\u6B63\u5728\u56DE\u5E94","phase.error":"\u8FDE\u63A5\u9700\u8981\u5904\u7406","model.unlisted":"\uFF08\u76EE\u5F55\u672A\u5217\u51FA\uFF09","preset.invalid":"\uFF08\u5DF2\u5931\u6548\uFF09","voice.provider":"\u8BED\u97F3\u63D0\u4F9B\u5546","delegate.provider":"\u59D4\u6D3E\u63D0\u4F9B\u5546","provider.choose":"\u9009\u62E9\u63D0\u4F9B\u5546","model.choose":"\u9009\u62E9\u6A21\u578B","microphone.test":"\u68C0\u6D4B\u9EA6\u514B\u98CE","microphone.stop":"\u505C\u6B62\u68C0\u6D4B","microphone.level":"\u9EA6\u514B\u98CE\u8F93\u5165\u97F3\u91CF","media.notFound":"\u672A\u68C0\u6D4B\u5230\u9EA6\u514B\u98CE\u3002\u8BF7\u8FDE\u63A5\u6216\u542F\u7528\u9EA6\u514B\u98CE\u540E\u91CD\u8BD5\u3002","media.denied":"\u9EA6\u514B\u98CE\u6743\u9650\u88AB\u62D2\u7EDD\uFF0C\u8BF7\u5728\u6D4F\u89C8\u5668\u7AD9\u70B9\u8BBE\u7F6E\u4E2D\u5141\u8BB8\u9EA6\u514B\u98CE\u3002","media.busy":"\u65E0\u6CD5\u8BFB\u53D6\u9EA6\u514B\u98CE\uFF0C\u8BF7\u68C0\u67E5\u7CFB\u7EDF\u6743\u9650\u6216\u5176\u4ED6\u5E94\u7528\u662F\u5426\u5360\u7528\u3002","media.unsupported":"\u9EA6\u514B\u98CE\u4E0D\u652F\u6301\u5F53\u524D\u97F3\u9891\u8981\u6C42\uFF0C\u8BF7\u66F4\u6362\u8BBE\u5907\u540E\u91CD\u8BD5\u3002","index.1":"\u8BED\u97F3\u5BF9\u8BDD","index.2":"\u8BF7\u91CD\u65B0\u767B\u5F55 DSH \u540E\u8BFB\u53D6 MOSS \u914D\u7F6E\u3002","index.3":"\u672A\u914D\u7F6E\uFF1A\u8BF7\u5728\u300C\u8BBE\u7F6E \u2192 MOSS \u8BED\u97F3\u300D\u4E2D\u9009\u62E9 DSH \u6A21\u578B\u3002","index.4":"\u8BF7\u5148\u5728 DSH \u4E2D\u9009\u62E9\u5DE5\u4F5C\u76EE\u5F55\u3002","index.5":"\u65E0\u6CD5\u521B\u5EFA MOSS \u4F1A\u8BDD\uFF0C\u8BF7\u68C0\u67E5\u8BED\u97F3\u6A21\u578B\u914D\u7F6E\u3002","index.6":"MOSS \u8BED\u97F3","VoiceView.1":"MOSS \u5B9E\u65F6\u8BED\u97F3","VoiceView.2":"\u8F7B\u89E6\u62E8\u52A8\u4E91\u96FE","VoiceView.3":"\u505C\u6B62\u5F53\u524D\u64AD\u62A5","VoiceView.4":"\u7ED3\u675F\u8BED\u97F3","VoiceView.5":"\u804A\u70B9\u4EC0\u4E48\uFF1F","VoiceView.6":"\u548C MOSS\uFF0C\u81EA\u7136\u5730\u804A\u4E00\u4F1A\u513F\u3002","VoiceView.7":"\u8BF7\u5230 MOSS \u8BBE\u7F6E\u9009\u62E9\u5176\u4ED6\u6A21\u578B\uFF0C\u5E76\u6D4B\u8BD5\u8FDE\u63A5\u3002","VoiceView.8":"\u8BF7\u5728 DSH \u6A21\u578B\u4E2D\u8865\u5168\u63A5\u5165\uFF0C\u518D\u5230 MOSS \u8BBE\u7F6E\u9009\u62E9\u6A21\u578B\u3002","VoiceView.9":"\u53EF\u5728 MOSS \u8BBE\u7F6E\u4E2D\u68C0\u6D4B\u9EA6\u514B\u98CE\uFF0C\u5E76\u6D4B\u8BD5\u6A21\u578B\u8FDE\u63A5\u3002","VoiceView.10":"\u5F00\u542F\u9EA6\u514B\u98CE","VoiceView.11":"\u9759\u97F3\u9EA6\u514B\u98CE","VoiceView.12":"\u53EF\u81EA\u7136\u6253\u65AD \xB7 \u5386\u53F2\u4FDD\u5B58\u5728\u5F53\u524D DSH \u4F1A\u8BDD","VoiceView.13":"\u65B0\u5EFA\u4E00\u4E2A\u4F7F\u7528\u8BED\u97F3\u6A21\u578B\u7684 DSH \u4F1A\u8BDD","VoiceView.14":"\u5386\u53F2\u4E0E\u5B50\u4EFB\u52A1 \u2197","VoiceView.15":"\u524D\u5F80\u8BBE\u7F6E","VoiceView.16":"\u5F00\u59CB\u8BED\u97F3","VoiceView.currentSession":"\u5F53\u524D\u8BED\u97F3\u4F1A\u8BDD","VoiceView.resume":"\u7EE7\u7EED\u8FD9\u6BB5\u5BF9\u8BDD\u3002","Composer.1":"\u6587\u5B57\u8F93\u5165\u6682\u4E0D\u53EF\u7528","Composer.2":"\u7528\u58F0\u97F3\uFF0C\u7EE7\u7EED\u8FD9\u6BB5\u5BF9\u8BDD","Composer.3":"\u8FD4\u56DE\u8BED\u97F3","Composer.live":"\u8BED\u97F3\u901A\u8BDD\u7EE7\u7EED\u4E2D","Composer.history":"\u8BED\u97F3\u5BF9\u8BDD\u8BB0\u5F55","Composer.4":"\u5F00\u542F\u5B9E\u65F6\u8BED\u97F3","Composer.5":"\u5F53\u524D MOSS \u7AEF\u70B9\u5C1A\u672A\u63D0\u4F9B\u666E\u901A\u6587\u5B57\u8F93\u5165\uFF1B\u53EF\u4ECE\u4E0A\u65B9\u300CMOSS \u8BED\u97F3\u300D\u67E5\u770B\u901A\u8BDD\u3002","Overlay.1":"MOSS \u8BED\u97F3\u63A7\u5236\u680F","Overlay.2":"\u5C55\u5F00 MOSS \u8BED\u97F3","Overlay.3":"\u9EA6\u514B\u98CE\u5DF2\u9759\u97F3","Settings.1":"\u8F7B\u89E6\u9884\u89C8\u4E91\u96FE\u52A8\u753B","Settings.2":"\u4E0A\u4F20\u5706\u5F62\u5F62\u8C61","Settings.3":"\u663E\u793A\u65B9\u5F0F","Settings.4":"DSH \u5DF2\u914D\u7F6E\u7684\u6A21\u578B","Settings.5":"\u9EA6\u514B\u98CE\u68C0\u6D4B","Settings.6":"Agent \u9884\u8BBE","Settings.7":"\u6267\u884C\u6A21\u578B","Settings.8":"\u6A21\u578B\u6216 Agent \u76EE\u5F55\u8BFB\u53D6\u5931\u8D25\uFF0C\u8BF7\u91CD\u65B0\u6253\u5F00\u8BBE\u7F6E\u3002","Settings.9":"MOSS \u5B9E\u65F6\u8BED\u97F3\u3001\u52A8\u6001\u5916\u89C2\u4E0E\u539F\u751F\u5B50 Agent \u59D4\u6D3E\u3002","Settings.10":"\u8BF7\u9009\u62E9 256 KiB \u4EE5\u5185\u7684 PNG\u3001JPEG \u6216 WebP \u56FE\u7247\u3002","Settings.11":"\u8FDE\u63A5\u6D4B\u8BD5\u672A\u5B8C\u6210\uFF0C\u8BF7\u68C0\u67E5 DSH \u8FDE\u63A5\u540E\u91CD\u8BD5\u3002","Settings.12":"\u8DDF\u968F DSH \u9ED8\u8BA4 Agent","Settings.13":"\u6DFB\u52A0\u4F60\u7684\u5F62\u8C61","Settings.14":"\u66F4\u6362\u56FE\u7247","Settings.15":"\u9009\u62E9\u56FE\u7247","Settings.16":"\u52A8\u6001\u5706\u7403","Settings.17":"\u81EA\u5B9A\u4E49\u56FE\u7247","Settings.18":"\u989C\u8272","Settings.19":"\u672A\u914D\u7F6E\uFF1A\u8BF7\u9009\u62E9\u8BED\u97F3\u6A21\u578B","Settings.20":"\u6B63\u5728\u6D4B\u8BD5\u2026","Settings.21":"\u6D4B\u8BD5\u8FDE\u63A5","Settings.22":"\u7B49\u5F85\u6388\u6743\u2026","Settings.23":"\u5DF2\u6388\u6743","Settings.24":"\u88AB\u62D2\u7EDD","Settings.25":"\u672A\u6388\u6743","Settings.26":"\u8FDE\u63A5\u6210\u529F \xB7 \u5B9E\u65F6\u534F\u8BAE\u4E0E\u97F3\u9891\u683C\u5F0F\u517C\u5BB9\u3002","Settings.27":"\u8DDF\u968F DSH \u9ED8\u8BA4\u804A\u5929\u6A21\u578B","Settings.28":"\u5DF2\u81EA\u52A8\u4FDD\u5B58","Settings.29":"\u7B49\u5F85\u4FDD\u5B58\u2026","Settings.30":"\u6B63\u5728\u4FDD\u5B58\u2026","Settings.31":"\u914D\u7F6E\u5DF2\u5728\u5176\u4ED6\u9875\u9762\u53D8\u66F4\uFF0C\u4FEE\u6539\u5C1A\u672A\u4FDD\u5B58\u3002","Settings.32":"\u81EA\u52A8\u4FDD\u5B58\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5 DSH \u8FDE\u63A5\u3002","Settings.33":"\u6B63\u5728\u8BFB\u53D6 DSH \u914D\u7F6E\u2026","Settings.34":"\u5706\u5F62\u5916\u89C2","Settings.35":"\u4E91\u96FE\u6D53\u5EA6 ","Settings.36":"\u96FE\u6C14\u6269\u6563 ","Settings.37":"\u56FE\u7247\u4F1A\u5C45\u4E2D\u88C1\u5207\u4E3A\u5706\u5F62\u663E\u793A\u3002","Settings.38":"PNG\u3001JPEG\u3001WebP\uFF0C\u6700\u591A 256 KiB\u3002","Settings.39":"\u8BED\u97F3\u6A21\u578B","Settings.40":"\u4ECE DSH \u6A21\u578B\u8BBE\u7F6E\u4E2D\u9009\u62E9\u63A5\u5165\u3002\u6D4B\u8BD5\u4F1A\u9A8C\u8BC1\u5B9E\u65F6\u534F\u8BAE\uFF0C\u5E76\u5C1D\u8BD5\u7533\u8BF7\u9EA6\u514B\u98CE\u6743\u9650\u3002","Settings.41":"\u505C\u6B62\u68C0\u6D4B\u4F1A\u91CA\u653E\u9EA6\u514B\u98CE\uFF1B\u5DF2\u6388\u4E88\u7684\u6743\u9650\u53EF\u5728\u6D4F\u89C8\u5668\u7684\u7F51\u7AD9\u6743\u9650\u4E2D\u64A4\u9500\u3002","Settings.42":"\u9ED8\u8BA4\u59D4\u6D3E","Settings.43":"\u9884\u8BBE\u51B3\u5B9A\u5DE5\u5177\u3001\u6743\u9650\u548C\u5DE5\u4F5C\u65B9\u5F0F\uFF1B\u6A21\u578B\u8D1F\u8D23\u6267\u884C\u5B50\u4EFB\u52A1\u3002\u4E24\u9879\u5206\u522B\u914D\u7F6E\uFF0C\u6267\u884C\u8BB0\u5F55\u4FDD\u5B58\u5728 DSH \u539F\u751F\u5B50\u4F1A\u8BDD\u4E2D\u3002","Settings.44":"\u91CD\u8BD5\u5F53\u524D\u4FEE\u6539","Settings.45":"\u91C7\u7528\u5DF2\u4FDD\u5B58\u914D\u7F6E","Settings.46":"\u5916\u89C2\u5373\u65F6\u751F\u6548\uFF0C\u6A21\u578B\u548C\u59D4\u6D3E\u8BBE\u7F6E\u5728\u4E0B\u4E00\u6B21\u901A\u8BDD\u4F7F\u7528\u3002","controller.1":"\u7B49\u5F85\u9EA6\u514B\u98CE\u65F6\u97F3\u9891\u79EF\u538B\u8FC7\u591A\uFF0C\u8BF7\u91CD\u65B0\u5F00\u59CB\u8BED\u97F3\u3002","controller.2":"\u8BED\u97F3\u542F\u52A8\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u9EA6\u514B\u98CE\u6743\u9650\u548C\u6A21\u578B\u8BBE\u7F6E\u3002","controller.3":"\u97F3\u9891\u7F3A\u5C11\u6240\u5C5E\u7247\u6BB5\uFF0C\u8BF7\u91CD\u65B0\u5F00\u59CB\u8BED\u97F3\u3002","browser.1":"\u8BED\u97F3\u8FDE\u63A5\u5DF2\u505C\u6B62\u3002","browser.2":"\u8BED\u97F3\u7F51\u7EDC\u79EF\u538B\uFF0C\u8BF7\u91CD\u65B0\u5F00\u59CB\u8BED\u97F3\u3002","browser.3":"\u8BED\u97F3\u6570\u636E\u683C\u5F0F\u9519\u8BEF\u3002","browser.4":"\u65E0\u6CD5\u8FDE\u63A5\u8BED\u97F3\u670D\u52A1\uFF0C\u8BF7\u68C0\u67E5 DSH \u767B\u5F55\u72B6\u6001\u3001\u6A21\u578B\u548C\u51ED\u636E\u8BBE\u7F6E\u3002","browser.5":"\u8BED\u97F3\u8FDE\u63A5\u5DF2\u65AD\u5F00\uFF0C\u8BF7\u91CD\u65B0\u5F00\u59CB\u8BED\u97F3\u3002","browser.6":"\u5F53\u524D\u6D4F\u89C8\u5668\u65E0\u6CD5\u8BBF\u95EE\u9EA6\u514B\u98CE\uFF0C\u8BF7\u901A\u8FC7\u672C\u673A\u5730\u5740\u6216 HTTPS \u6253\u5F00\u3002","browser.7":"\u6D4F\u89C8\u5668\u4E0D\u652F\u6301 AudioWorklet\uFF0C\u8BF7\u4F7F\u7528\u65B0\u7248 Edge\u3001Chrome \u6216 Safari\u3002","browser.8":"\u9EA6\u514B\u98CE\u6743\u9650\u88AB\u62D2\u7EDD\uFF0C\u8BF7\u5728\u6D4F\u89C8\u5668\u7AD9\u70B9\u8BBE\u7F6E\u4E2D\u5141\u8BB8\u9EA6\u514B\u98CE\u540E\u91CD\u8BD5\u3002","playback.1":"\u64AD\u653E\u8F6E\u6B21\u8FC7\u591A\uFF0C\u8BF7\u91CD\u65B0\u5F00\u59CB\u8BED\u97F3\u3002","playback.2":"\u64AD\u653E\u79EF\u538B\u8FC7\u591A\uFF0C\u8BF7\u91CD\u65B0\u5F00\u59CB\u8BED\u97F3\u3002","microphone.1":"\u9EA6\u514B\u98CE\u6743\u9650\u88AB\u62D2\u7EDD\uFF0C\u8BF7\u5728\u6D4F\u89C8\u5668\u7684\u7F51\u7AD9\u6743\u9650\u4E2D\u5141\u8BB8\u3002","microphone.2":"\u65E0\u6CD5\u8BBF\u95EE\u9EA6\u514B\u98CE\uFF0C\u8BF7\u68C0\u67E5\u8BBE\u5907\u548C\u6D4F\u89C8\u5668\u6743\u9650\u3002"};var _l=pn(require("react"),1),Ph=require("@deepseek-ai/dsh-client-ui-primitives");function Lh({t:i,useVoice:e,closeSettings:t,...n}){let s=e(r=>r.settingsOpen===!0);return _l.default.createElement(Ph.Modal,{open:s,onClose:t,title:i("settings.title"),closeLabel:i("settings.close"),className:Ge("moss-settings-dialog"),contentClassName:Ge("moss-settings-dialog-content")},s&&_l.default.createElement(qi,{...n,t:i}))}var h0=["slots","configForms","sessions","workspaces","uiWorkspace","layout","uiConversation","locale"],u0=i=>({getSnapshot:()=>i.getSnapshot(),subscribe:e=>i.subscribe(e),mutate:(e,t)=>i.mutate(e,t)});function d0({t:i,openVoicePanel:e,sessionId:t}){return t?.startsWith("moss-live-")?null:Yi.default.createElement("div",{className:Ge("moss-entry moss-input-entry")},Yi.default.createElement(Xa.Button,{"aria-label":i("index.1"),onClick:e,icon:Yi.default.createElement(vl,{size:16})},i("index.1")))}function vl({size:i=18}){return Yi.default.createElement(Xa.IconMicrophoneOutlineRegular,{size:i})}function f0(i){return Yi.default.createElement(Ah,{...i,openView:i.openNativeConversation})}function p0(i){i.effect(()=>i.locale.register("moss",{zh:gl,en:gl}),"moss.locale");let e=i.locale.bind("moss"),t=u0(i.configForms.get("dsh-moss-live")),n=new Ha(t),s=new Wa(navigator.mediaDevices,e);i.effect(()=>async()=>{s.dispose(),await n.dispose()},"moss.settings-editor");let r=new Bs({t:e,openMedia:(...h)=>Il(...h,e),async connect(h,u,p){let x=i.sessions.retain(h,{source:"mossVoice",signal:p});try{await x.ready;let v=await Rl(h,u,p,e),m=v.connection.close;return v.connection.close=()=>{m(),x.release()},v}catch(v){throw x.release(),v}}});r.onExpand=h=>{h&&i.uiWorkspace.openSession(h),i.layout.selectPanel("moss")},i.effect(()=>{let h=document.createElement("style");h.dataset.mossLive="",h.textContent=__MOSS_CSS_TEXT__,document.head.append(h);let u=()=>r.stop();return window.addEventListener("pagehide",u),()=>{window.removeEventListener("pagehide",u),r.dispose(),h.remove()}},"moss.media-and-styles");let a=async()=>{let h=await fetch("/dsh-moss-live/config",{credentials:"same-origin",cache:"no-store"});if(!h.ok)throw new Error(e("index.2"));return h.json()},o=async()=>{try{let h=t.getSnapshot().value?.voiceModel;if(!h?.provider||!h?.model)throw Object.assign(new Error(e("index.3")),{code:"VOICE_NOT_CONFIGURED"});let u=r.getSnapshot();if(In(u.phase)){r.expand();return}let p=i.sessions.list.getSnapshot(),x=Ls(u,p);if(x){r.expand(x),await r.start(x);return}let m=Object.values(p.byId).find(w=>w.retainedBy.mainView>0)?.cwd??i.workspaces.list.getSnapshot().items[0]?.path;if(!m)throw new Error(e("index.4"));let f=await fetch("/dsh-moss-live/sessions",{method:"POST",credentials:"same-origin",headers:{"content-type":"application/json"},body:JSON.stringify({cwd:m})}),E=await f.json();if(!f.ok)throw Object.assign(new Error(E.message??e("index.5")),{code:E.error});await i.sessions.refresh(),i.uiWorkspace.openSession(E.sessionId),i.layout.selectPanel("moss"),await r.start(E.sessionId)}catch(h){throw r.failure(h.message,h.code),h}},c=new Map,l=()=>({hooks:{voice:r,voiceSettings:t,voiceSessionList:i.sessions.list,voicePanelInfo:i.layout.panelInfo},createVoice:o,openVoicePanel:()=>r.expand(),openVoiceSession:h=>r.expand(h),startVoice:h=>r.start(h,{minimized:i.layout.panelInfo.getSnapshot().activePanelId!=="moss"}),stopVoice:()=>r.stop(),pauseVoice:()=>r.pause(),muteVoice:()=>r.mute(),interruptVoice:()=>r.interrupt(),minimizeVoice:()=>r.minimize(),expandVoice:()=>r.expand(),openSettings:()=>r.patch({settingsOpen:!0}),mountVoiceHistory:h=>(c.set(h,(c.get(h)??0)+1),r.patch({historyBars:[...c.keys()]}),r.getSnapshot().sessionId===h&&r.minimize(),()=>{let u=c.get(h)-1;u?c.set(h,u):c.delete(h),r.patch({historyBars:[...c.keys()]})}),mountVoiceView:h=>(r.getSnapshot().sessionId===h&&r.patch({minimized:!1}),()=>{r.getSnapshot().sessionId===h&&r.minimize()}),openNativeConversation:()=>{let h=r.getSnapshot(),u=Ls(h,i.sessions.list.getSnapshot());u&&i.uiWorkspace.openSession(u)}});i.effect(()=>i.uiConversation.events.register(Ih),"moss.native-transcript-revisions"),i.slots.inject("sidebar.panellist",()=>i.slots.register({locale:"moss",name:"sidebar.panellist",id:"moss",order:5,label:()=>e("index.6")},vl)),i.slots.inject("main",()=>i.slots.register({locale:"moss",name:"main",key:"moss",inject:l},f0)),i.slots.inject("conversation.input.right",()=>i.slots.register({locale:"moss",name:"conversation.input.right",id:"moss-entry",order:5,inject:l},d0)),i.slots.inject("conversation.composer",()=>i.slots.register({locale:"moss",name:"conversation.composer",id:"moss-composer",priority:-20,select:Th,inject:l},Eh)),i.slots.inject("shell.bottom",()=>i.slots.register({locale:"moss",name:"shell.bottom",id:"moss-capsule",order:20,inject:l},Ch));let d=()=>({hooks:{settingsEditor:n,microphone:s},loadCatalog:a,editSettings:(h,u)=>n.edit(h,u),retrySettings:()=>n.retry(),discardSettings:()=>n.discard(),mountSettings:()=>(s.refresh(),()=>{n.flush(),s.stop()}),toggleMicrophone:h=>h?s.start():s.stop(),testModel:async h=>{let u=s.start().catch(()=>{}),x=await(await fetch("/dsh-moss-live/test",{method:"POST",credentials:"same-origin",headers:{"content-type":"application/json"},body:JSON.stringify(h)})).json();return await u,x}});i.slots.inject("shell.overlay",()=>i.slots.register({locale:"moss",name:"shell.overlay",id:"moss-settings",inject:()=>{let h=d();return{...h,hooks:{...h.hooks,voice:r},closeSettings:()=>r.patch({settingsOpen:!1})}}},Lh)),i.slots.inject("settings.section",()=>i.slots.register({locale:"moss",name:"settings.section",id:"moss",order:25,label:()=>e("index.6"),inject:d},qi)),i.slots.inject("settings.section.icon",()=>i.slots.register({locale:"moss",name:"settings.section.icon",id:"moss"},vl)),i.slots.inject("plugins.row.config",()=>i.slots.register({locale:"moss",name:"plugins.row.config",key:"dsh-moss-live",inject:d},qi)),i.slots.inject("plugins.item",()=>i.slots.register({locale:"moss",name:"plugins.item",id:"moss-live",label:()=>e("index.6"),order:65,inject:d},qi))}

    return module.exports;
  },
});

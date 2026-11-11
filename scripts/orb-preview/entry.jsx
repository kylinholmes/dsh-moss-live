import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { Orb } from '../../src/client/Orb.jsx'

function App() {
  const [density, setDensity] = useState(88), [diffusion, setDiffusion] = useState(48)
  const [speaking, setSpeaking] = useState(false), [energy, setEnergy] = useState(.7), [level, setLevel] = useState(.7)
  const [debug, setDebug] = useState('fog'), [paused, setPaused] = useState(false), [wireframe, setWireframe] = useState(false)
  const [reset, setReset] = useState(0), [light, setLight] = useState(false), [stats, setStats] = useState(null)
  useEffect(() => {
    if (!speaking) return
    const start = performance.now(), timer = setInterval(() => { const t = (performance.now() - start) / 1000; setLevel(energy * (.25 + .75 * Math.abs(Math.sin(t * 3.8) * Math.cos(t * 1.7)))) }, 80)
    return () => clearInterval(timer)
  }, [speaking, energy])
  const ratio = stats?.divergenceBefore > 0 ? stats.divergenceAfter / stats.divergenceBefore : 0
  return <main className={`lab ${light ? 'light' : ''}`}>
    <header><div><span className="eyebrow">MOSS / DYNAMICS PROTOTYPE</span><h1>推开雾，<span>拉动球。</span></h1><p>雾粒子随三维流场运动。球面可以局部拉扯，松手后由约束与弹性力恢复。</p></div><button className="subtle" onClick={() => setLight(!light)}>{light ? '深色背景' : '浅色背景'}</button></header>
    <section className="experiment">
      <div className="viewport">
        <div className="view-toolbar"><div className="segmented" role="group" aria-label="观察方式">{[['fog', '雾气'], ['particles', '粒子'], ['trails', '流线']].map(([id, label]) => <button key={id} aria-pressed={debug === id} onClick={() => setDebug(id)}>{label}</button>)}</div><span className="live">{paused ? '已暂停' : '正在模拟'}</span></div>
        <div className="stage"><Orb appearance={{ kind: 'orb', color: '#64b5f6', particles: density, diffusion }} phase={speaking ? 'speaking' : 'idle'} energy={speaking ? level : 0} label="拖拽球面，推开外部雾气" debug={debug} paused={paused} wireframe={wireframe} onDiagnostics={setStats} resetToken={reset}/></div>
        <div className="gestures"><span><b>按住球面拖动</b>局部拉伸与凹陷</span><span><b>掠过、点击外雾</b>推散粒子，注入涡流</span><span><b>松开</b>球体回弹，雾重新聚拢</span></div>
      </div>
      <aside className="panel"><span className="section-label">模拟参数</span><h2>先试着拨动它。</h2>
        <label className="slider"><span>雾的浓度 <output>{density}</output></span><input aria-label="雾的浓度" type="range" min="0" max="128" value={density} onChange={event => setDensity(+event.target.value)}/><small>改变实际粒子数量，不是透明度。</small></label>
        <label className="slider"><span>扩散程度 <output>{diffusion}</output></span><input aria-label="扩散程度" type="range" min="0" max="100" value={diffusion} onChange={event => setDiffusion(+event.target.value)}/><small>增大后黏性、径向吸引减弱，雾层更松散。</small></label>
        <label className="slider"><span>语音能量 <output>{Math.round(energy * 100)}%</output></span><input aria-label="语音能量" type="range" min="0" max="1" step=".01" value={energy} onChange={event => { setEnergy(+event.target.value); setLevel(+event.target.value) }}/></label>
        <button className={`speak ${speaking ? 'active' : ''}`} aria-pressed={speaking} onClick={() => setSpeaking(!speaking)}>{speaking ? '停止模拟说话' : '模拟说话'}</button>
        <div className="secondary-actions"><button onClick={() => setPaused(!paused)}>{paused ? '继续模拟' : '暂停模拟'}</button><button onClick={() => setReset(reset + 1)}>重置状态</button></div>
        <label className="check"><input type="checkbox" checked={wireframe} onChange={event => setWireframe(event.target.checked)}/>显示真实表面网格</label>
        <div className="measurements" aria-label="实时物理状态"><div><span>实际粒子</span><output>{stats?.mass ?? '—'}</output></div><div><span>网格分辨率</span><output>{stats ? `${stats.resolution}³` : '—'}</output></div><div><span>体积 / 初始体积</span><output data-metric="volume">{stats ? `${(stats.volumeRatio * 100).toFixed(2)}%` : '—'}</output></div><div><span>最大局部位移</span><output data-metric="displacement">{stats ? `${stats.displacement.toFixed(3)} m` : '—'}</output></div><div><span>投影后 / 前散度</span><output>{stats ? `${(ratio * 100).toFixed(1)}%` : '—'}</output></div><div><span>外力作用次数</span><output>{stats?.contacts ?? '—'}</output></div></div>
      </aside>
    </section>
    <details><summary>这次实际计算了什么？</summary><div className="equations"><section><h3>三维流体与雾粒子</h3><p>交错 MAC 网格：速度半拉格朗日平流 → 黏性扩散 → Jacobi 压力投影（∇·u≈0）。雾粒子有位置与速度，受流体阻力、触碰冲量、径向弹簧吸引与表面碰撞影响；粒子数在推进过程中保持不变。</p><p>扩散从 0 到 100：运动黏度 0.016 → 0.002，径向弹簧强度 11 → 4，静止雾壳带宽 0.12 → 0.36。模拟采用固定 1/60 秒步长。</p></section><section><h3>真实局部软体</h3><p>闭合三角网格使用 XPBD 边长、弯曲与封闭体积约束。拖拽只约束抓取处附近的节点，形变传递到相邻网格；松手后由弹性与阻尼恢复。没有用整个 mesh 的 scale 冒充变形。</p><p>近似边界：速度网格使用参考球形障碍，粒子与变形表面的径向包络碰撞。这是可交互的粗网格原型，尚非完整双向流固耦合或水滴自由表面求解。</p></section></div><p className="references">方法依据：<a href="https://developer.nvidia.com/gpugems/gpugems/part-vi-beyond-triangles/chapter-38-fast-fluid-dynamics-simulation-gpu" target="_blank" rel="noreferrer">NVIDIA / Stable Fluids</a> · <a href="https://mmacklin.com/xpbd.pdf" target="_blank" rel="noreferrer">XPBD 原论文</a></p></details>
    <footer>独立动力学预览，不连接 API，也不申请麦克风。真实语音页会把输入 / 输出音量交给同一套力学系统。</footer>
  </main>
}
const root = createRoot(document.getElementById('root'))
window.unmountOrbPreview = () => root.unmount()
root.render(<App/>)

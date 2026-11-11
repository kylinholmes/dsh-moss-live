import React, { useEffect, useRef, useState } from 'react'
import { createCloudRenderer } from './orb-renderer.js'
import styles from './Orb.module.css'

export function Orb({ appearance = {}, phase = 'idle', small = false, energy = 0, label, debug = 'fog', paused = false, wireframe = false, onDiagnostics, resetToken = 0 }) {
  const canvas = useRef(null), root = useRef(null), engine = useRef(null)
  const current = useRef(null)
  current.current = { appearance, phase, energy, debug, paused, wireframe, onDiagnostics }
  const dragging = useRef(false), moved = useRef(false), started = useRef([0, 0])
  const [fallback, setFallback] = useState(false)
  const [poked, setPoked] = useState(false)
  const [grabbing, setGrabbing] = useState(false)
  const feedbackTimer = useRef(null)
  const touchAnimation = useRef(null)
  const image = appearance.kind === 'image'
  const color = /^#[\da-f]{6}$/i.test(appearance.color ?? '') ? appearance.color : '#64b5f6'

  useEffect(() => {
    if (image || small) return
    engine.current = createCloudRenderer(canvas.current, null, () => current.current, setFallback)
    return () => { engine.current?.dispose(); engine.current = null }
  }, [image, small])
  useEffect(() => { engine.current?.invalidate() }, [appearance.color, appearance.particles, appearance.diffusion, phase, energy, debug, paused, wireframe])
  useEffect(() => { if (resetToken) engine.current?.reset() }, [resetToken])
  useEffect(() => () => { clearTimeout(feedbackTimer.current); touchAnimation.current?.cancel() }, [])

  const position = event => {
    const bounds = root.current.getBoundingClientRect()
    return [(event.clientX - bounds.left) / bounds.width * 2 - 1, 1 - (event.clientY - bounds.top) / bounds.height * 2]
  }
  const move = event => {
    const point = position(event)
    if (dragging.current && Math.hypot(point[0] - started.current[0], point[1] - started.current[1]) > .025) moved.current = true
    engine.current?.move(...point)
  }
  const down = event => {
    if (event.button !== 0) return
    const point = position(event)
    started.current = point; moved.current = false; dragging.current = true
    root.current.setPointerCapture?.(event.pointerId)
    setGrabbing(Boolean(engine.current?.down(...point)))
  }
  const up = event => {
    dragging.current = false; setGrabbing(false); engine.current?.up()
    if (root.current.hasPointerCapture?.(event.pointerId)) root.current.releasePointerCapture(event.pointerId)
  }
  const leave = () => { if (!dragging.current) engine.current?.up() }
  const touch = event => {
    const point = event.detail === 0 ? [0, 0] : position(event)
    if (event.detail === 0 || !moved.current) engine.current?.poke(...point)
    setPoked(true)
    clearTimeout(feedbackTimer.current)
    feedbackTimer.current = setTimeout(() => setPoked(false), 700)
    if ((image || fallback) && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      touchAnimation.current?.cancel()
      const target = image ? root.current.querySelector('img') : root.current
      touchAnimation.current = target?.animate?.([{ transform: 'scale(.94)' }, { transform: 'scale(1.055)', offset: .38 }, { transform: 'scale(1)' }], { duration: 650, easing: 'cubic-bezier(.18,.74,.25,1)' })
    }
    engine.current?.invalidate()
  }
  const key = event => {
    if (event.key !== ' ' && event.key !== 'Enter') return
    event.preventDefault()
    if (!event.repeat) touch({ detail: 0 })
  }
  return <div ref={root} className={`${styles.root} moss-orb-wrap ${small ? `${styles.small} moss-orb-small` : ''} ${image ? styles.imageRoot : ''}`}
    style={{ '--orb-color': color }} role={small ? undefined : 'button'} tabIndex={small ? undefined : 0}
    aria-label={small ? undefined : label} aria-hidden={small ? true : undefined} data-poked={poked} data-grabbing={grabbing}
    onPointerMove={small ? undefined : move} onPointerLeave={small ? undefined : leave}
    onPointerDown={small ? undefined : down} onPointerUp={small ? undefined : up} onPointerCancel={small ? undefined : up} onLostPointerCapture={small ? undefined : up}
    onClick={small ? undefined : touch} onKeyDown={small ? undefined : key}>
    {image ? <img className={styles.image} src={appearance.image} alt="" draggable={false}/>
      : <>{(fallback || small) && <span className={styles.fallback}/>}{!small && <canvas ref={canvas} className={styles.canvas} style={fallback ? { visibility: 'hidden' } : undefined} aria-hidden="true"/>}</>}
  </div>
}

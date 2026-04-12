import { createContext, useContext, useState, useEffect, useLayoutEffect, useRef, useCallback } from 'react'
import { createPortal } from 'react-dom'

const PeakCtx = createContext(null)

export function PeakProvider({ children }) {
  const [tip, setTip] = useState({ visible: false, text: '', img: null, rect: null })
  const pinnedEl = useRef(null)

  const show = useCallback((el, text, img) => {
    const r = el.getBoundingClientRect()
    setTip({ visible: true, text, img, rect: { left: r.left, right: r.right, top: r.top, bottom: r.bottom, width: r.width } })
  }, [])

  const hide = useCallback((el) => {
    if (pinnedEl.current !== el) setTip(t => ({ ...t, visible: false }))
  }, [])

  const toggle = useCallback((el, text, img) => {
    if (pinnedEl.current === el) {
      pinnedEl.current = null
      setTip(t => ({ ...t, visible: false }))
    } else {
      pinnedEl.current = el
      show(el, text, img)
    }
  }, [show])

  useEffect(() => {
    const dismiss = () => { pinnedEl.current = null; setTip(t => ({ ...t, visible: false })) }
    document.addEventListener('click', dismiss)
    return () => document.removeEventListener('click', dismiss)
  }, [])

  return (
    <PeakCtx.Provider value={{ show, hide, toggle, pinnedEl }}>
      {children}
      {createPortal(<PeakFloat tip={tip} />, document.body)}
    </PeakCtx.Provider>
  )
}

const ARROW = 7
const GAP   = 6

function RetroLoader() {
  const spokes = 12
  return (
    <div style={{ height: 130, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg
        width="36" height="36" viewBox="-18 -18 36 36"
        style={{ animation: 'peak-spin 1s steps(12, end) infinite' }}
      >
        {Array.from({ length: spokes }, (_, i) => (
          <line
            key={i}
            x1="0" y1="6" x2="0" y2="13"
            stroke="#5a5048"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity={(i + 1) / spokes}
            transform={`rotate(${(360 / spokes) * i})`}
          />
        ))}
      </svg>
    </div>
  )
}

function computePos(el, rect) {
  const w = el.offsetWidth
  const h = el.offsetHeight
  const vpW = window.innerWidth
  const vpH = window.innerHeight

  let left = rect.left
  let top = rect.bottom + GAP + ARROW
  let above = false

  if (top + h > vpH - 8) {
    top = rect.top - h - GAP - ARROW
    above = true
  }
  if (left + w > vpW - 8) left = vpW - w - 8
  if (left < 8) left = 8

  const triggerMidX = rect.left + rect.width / 2
  const arrowLeft = Math.min(Math.max(triggerMidX - left, 12), w - 12)

  return { left, top, above, arrowLeft }
}

function PeakFloat({ tip }) {
  const { visible, text, img, rect } = tip
  const floatRef = useRef(null)
  const [imgLoaded, setImgLoaded] = useState(false)
  const [pos, setPos] = useState({ left: -9999, top: -9999, above: false, arrowLeft: 0 })

  // Reset loaded state whenever the image src changes
  useEffect(() => { setImgLoaded(false) }, [img])

  // Recompute position when visibility or loaded state changes
  useLayoutEffect(() => {
    if (!visible || !rect || !floatRef.current) return
    setPos(computePos(floatRef.current, rect))
  }, [visible, rect, imgLoaded])

  const mkArrow = (above, fill) => ({
    position: 'absolute',
    width: 0, height: 0,
    left: pos.arrowLeft - ARROW,
    ...(above
      ? {
          bottom: fill ? -ARROW : -ARROW - 1,
          borderLeft: `${ARROW}px solid transparent`,
          borderRight: `${ARROW}px solid transparent`,
          borderTop: `${ARROW}px solid ${fill ? '#ffffcc' : '#111'}`,
        }
      : {
          top: fill ? -ARROW : -ARROW - 1,
          borderLeft: `${ARROW}px solid transparent`,
          borderRight: `${ARROW}px solid transparent`,
          borderBottom: `${ARROW}px solid ${fill ? '#ffffcc' : '#111'}`,
        }),
  })

  return (
    <div
      ref={floatRef}
      style={{
        position: 'fixed',
        left: pos.left,
        top: pos.top,
        width: img ? '260px' : 'max-content',
        maxWidth: img ? undefined : 'min(520px, calc(100vw - 40px))',
        background: '#ffffcc',
        border: '1px solid #111',
        boxShadow: '4px 4px 0 #111',
        fontFamily: 'system-ui, Arial, Helvetica, sans-serif',
        fontSize: '0.8rem',
        lineHeight: 1.4,
        color: '#111',
        overflow: 'visible',
        zIndex: 100,
        pointerEvents: 'none',
        opacity: visible ? 1 : 0,
        visibility: visible ? 'visible' : 'hidden',
        transition: 'opacity 0.12s, visibility 0.12s',
      }}
    >
      <div style={mkArrow(pos.above, false)} />
      <div style={mkArrow(pos.above, true)} />

      {img && (
        <div style={{ padding: '8px 8px 0', overflow: 'hidden' }}>
          {!imgLoaded && <RetroLoader />}
          <img
            src={img}
            alt=""
            style={{ display: imgLoaded ? 'block' : 'none', width: '100%', height: 'auto' }}
            onLoad={() => setImgLoaded(true)}
          />
        </div>
      )}
      <div style={{ padding: '8px 10px' }} dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  )
}

export function usePeak() {
  return useContext(PeakCtx)
}

export function PeakTrigger({ text, img, children, style, className }) {
  const { show, hide, toggle } = usePeak()
  const ref = useRef(null)

  return (
    <span
      ref={ref}
      className={className}
      style={{ cursor: 'pointer', ...style }}
      onMouseEnter={() => show(ref.current, text, img)}
      onMouseLeave={() => hide(ref.current)}
      onClick={e => { e.stopPropagation(); toggle(ref.current, text, img) }}
    >
      {children}
    </span>
  )
}

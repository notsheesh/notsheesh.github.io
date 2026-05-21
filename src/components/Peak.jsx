import { createContext, useContext, useState, useEffect, useLayoutEffect, useRef, useCallback } from 'react'
import { createPortal } from 'react-dom'

const PeakCtx = createContext(null)

// iframe display dimensions
const IFRAME_W = 440
const IFRAME_H = 260
const IFRAME_SCALE = 0.38
const IFRAME_REAL_W = Math.round(IFRAME_W / IFRAME_SCALE)  // ~1158px
const IFRAME_REAL_H = Math.round(IFRAME_H / IFRAME_SCALE)  // ~684px

export function PeakProvider({ children }) {
  const [tip, setTip] = useState({ visible: false, text: '', img: null, imgAlt: '', iframe: null, rect: null })
  const pinnedEl = useRef(null)

  const show = useCallback((el, text, img, iframe, imgAlt) => {
    const r = (el.getClientRects()[0]) ?? el.getBoundingClientRect()
    setTip({ visible: true, text, img, imgAlt: imgAlt || '', iframe, rect: { left: r.left, right: r.right, top: r.top, bottom: r.bottom, width: r.width } })
  }, [])

  const hide = useCallback((el) => {
    if (pinnedEl.current !== el) setTip(t => ({ ...t, visible: false }))
  }, [])

  const toggle = useCallback((el, text, img, iframe, imgAlt) => {
    if (pinnedEl.current === el) {
      pinnedEl.current = null
      setTip(t => ({ ...t, visible: false }))
    } else {
      pinnedEl.current = el
      show(el, text, img, iframe, imgAlt)
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

function RetroLoader({ height = 130 }) {
  const spokes = 12
  return (
    <div style={{ height, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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

  const triggerMidX = rect.left + rect.width / 2
  let left = rect.left
  if (triggerMidX - left < 12) left = triggerMidX - 12
  let top = rect.bottom + GAP + ARROW
  let above = false

  if (top + h > vpH - 8) {
    top = rect.top - h - GAP - ARROW
    above = true
  }
  if (left + w > vpW - 8) left = vpW - w - 8
  if (left < 8) left = 8
  // if tooltip is wider than viewport, pin to left edge and let CSS cap the width
  if (w > vpW - 16) left = 8

  const arrowLeft = Math.min(Math.max(triggerMidX - left, 12), w - 12)

  return { left, top, above, arrowLeft }
}

function PeakFloat({ tip }) {
  const { visible, text, img, imgAlt, iframe, rect } = tip
  const floatRef = useRef(null)
  const [imgLoaded, setImgLoaded] = useState(false)
  const [imgError, setImgError] = useState(false)
  const [iframeLoaded, setIframeLoaded] = useState(false)
  const [pos, setPos] = useState({ left: -9999, top: -9999, above: false, arrowLeft: 0 })

  useEffect(() => { setImgLoaded(false); setImgError(false) }, [img])
  useEffect(() => { setIframeLoaded(false) }, [iframe])

  useLayoutEffect(() => {
    if (!visible || !rect || !floatRef.current) return
    setPos(computePos(floatRef.current, rect))
  }, [visible, rect, imgLoaded, iframeLoaded])

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

  const hasMedia = img || iframe

  return (
    <div
      ref={floatRef}
      style={{
        position: 'fixed',
        left: pos.left,
        top: pos.top,
        width: iframe ? `${IFRAME_W}px` : img ? '260px' : 'max-content',
        maxWidth: 'min(520px, calc(100vw - 16px))',
        background: '#ffffcc',
        border: '1px solid #111',
        boxShadow: '4px 4px 0 #111',
        fontFamily: 'var(--site-font)',
        fontSize: '0.8rem',
        lineHeight: 1.4,
        color: '#111',
        overflow: 'visible',
        zIndex: 100,
        pointerEvents: visible ? 'auto' : 'none',
        opacity: visible ? 1 : 0,
        visibility: visible ? 'visible' : 'hidden',
        transition: 'opacity 0.12s, visibility 0.12s',
      }}
      onClick={e => e.stopPropagation()}
    >
      <div style={mkArrow(pos.above, false)} />
      <div style={mkArrow(pos.above, true)} />

      {img && !imgError && (
        <div style={{ padding: text ? '8px 8px 0' : '8px', overflow: 'hidden' }}>
          {!imgLoaded && <RetroLoader />}
          <img
            src={img}
            alt={imgAlt}
            style={{ display: imgLoaded ? 'block' : 'none', width: '100%', height: 'auto' }}
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgError(true)}
          />
        </div>
      )}

      {iframe && (
        <div style={{ padding: text ? '8px 8px 0' : '8px', overflow: 'hidden' }}>
          {!iframeLoaded && <RetroLoader height={IFRAME_H} />}
          <div style={{
            width: '100%',
            maxWidth: IFRAME_W,
            height: iframeLoaded ? IFRAME_H : 0,
            overflow: 'hidden',
            position: 'relative',
          }}>
            <iframe
              src={iframe}
              title="preview"
              scrolling="no"
              style={{
                width: IFRAME_REAL_W,
                height: IFRAME_REAL_H,
                border: 'none',
                transform: `scale(${IFRAME_SCALE})`,
                transformOrigin: 'top left',
                pointerEvents: 'none',
              }}
              onLoad={() => setIframeLoaded(true)}
            />
          </div>
        </div>
      )}

      {text && <div style={{ padding: '8px 10px' }} dangerouslySetInnerHTML={{ __html: text }} />}
    </div>
  )
}

export function usePeak() {
  return useContext(PeakCtx)
}

export function PeakTrigger({ text, img, imgAlt, iframe, children, style, className }) {
  const { show, hide, toggle } = usePeak()
  const ref = useRef(null)

  return (
    <span
      ref={ref}
      className={className}
      style={{ cursor: 'pointer', ...style }}
      onMouseEnter={() => show(ref.current, text, img, iframe, imgAlt)}
      onMouseLeave={() => hide(ref.current)}
      onClick={e => { e.stopPropagation(); toggle(ref.current, text, img, iframe, imgAlt) }}
    >
      {children}
    </span>
  )
}

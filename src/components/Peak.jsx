import { createContext, useContext, useState, useEffect, useRef, useCallback } from 'react'
import { createPortal } from 'react-dom'

const PeakCtx = createContext(null)

export function PeakProvider({ children }) {
  const [tip, setTip] = useState({ visible: false, text: '', img: null, x: 0, y: 0 })
  const pinnedEl = useRef(null)

  const show = useCallback((el, text, img) => {
    const r = el.getBoundingClientRect()
    setTip({ visible: true, text, img, x: r.left, y: r.bottom + 8 })
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

function PeakFloat({ tip }) {
  const { visible, text, img, x, y } = tip
  return (
    <div style={{
      position: 'fixed',
      left: x,
      top: y,
      width: img ? '260px' : undefined,
      maxWidth: img ? undefined : '300px',
      background: '#ffffcc',
      border: '1px solid #111',
      boxShadow: '4px 4px 0 #111',
      fontFamily: 'system-ui, Arial, Helvetica, sans-serif',
      fontSize: '0.8rem',
      lineHeight: 1.4,
      color: '#111',
      overflow: 'hidden',
      zIndex: 100,
      pointerEvents: 'none',
      opacity: visible ? 1 : 0,
      visibility: visible ? 'visible' : 'hidden',
      transition: 'opacity 0.12s, visibility 0.12s',
    }}>
      {img && (
        <div style={{ padding: '8px 8px 0' }}>
          <img src={img} alt="" style={{ display: 'block', width: '100%', height: 'auto' }} />
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
  const { show, hide, toggle, pinnedEl } = usePeak()
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

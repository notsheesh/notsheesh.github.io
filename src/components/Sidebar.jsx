import { useState, useEffect } from 'react'

const NAV = [
  { href: '#',          label: 'Home' },
  { href: '#beliefs',   label: 'I believe' },
  { href: '#now',       label: 'Then & Now' },
  { href: '#pieces',    label: 'Jigsaw Pieces' },
  { href: '#notebook',  label: 'Notebook' },
  { href: '#bookshelf', label: 'Bookshelf' },
]

export default function Sidebar() {
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const updateActive = () => {
      let current = ''
      document.querySelectorAll('section[id]').forEach(s => {
        if (s.getBoundingClientRect().top <= 60) current = s.id
      })
      setActive(current)
    }
    window.addEventListener('scroll', updateActive, { passive: true })
    updateActive()
    return () => window.removeEventListener('scroll', updateActive)
  }, [])

  const linkStyle = (id) => ({
    color: active === id ? 'var(--text)' : 'var(--muted)',
    fontWeight: active === id ? 700 : 400,
    textDecoration: 'none',
    fontSize: '1rem',
    whiteSpace: 'nowrap',
    transition: 'color 0.15s',
  })

  return (
    <>
      {/* Mobile hamburger */}
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          display: 'none',
          position: 'fixed', top: 16, right: 16,
          zIndex: 400,
          width: 36, height: 36,
          alignItems: 'center', justifyContent: 'center',
          background: 'var(--bg)',
          border: '1px solid var(--line)',
          cursor: 'pointer',
          fontSize: '1.2rem',
          color: 'var(--muted)',
        }}
        className="mob-btn"
        aria-label="Toggle menu"
      >
        {open ? '✕' : '☰'}
      </button>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: 'fixed', inset: 0,
            background: 'rgba(0,0,0,0.25)',
            zIndex: 200,
          }}
        />
      )}

      {/* Sidebar */}
      <nav style={{
        width: 200,
        flexShrink: 0,
        padding: '110px 36px 72px 80px',
        position: 'sticky',
        top: 0,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
      }}
        className="sidebar"
      >
        {NAV.map(({ href, label }) => {
          const id = href === '#' ? '' : href.slice(1)
          return (
            <a
              key={href}
              href={href}
              style={linkStyle(id)}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          )
        })}
      </nav>
    </>
  )
}

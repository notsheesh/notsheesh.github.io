import { useState, useEffect } from 'react'

const NAV = [
  { href: '#',          label: 'Home' },
  { href: '#beliefs',   label: 'I believe' },
  { href: '#now',       label: 'Then & Now' },
  // { href: '#pieces',    label: 'Jigsaw Pieces' },
  // { href: '#notebook',  label: 'Notebook' },
  // { href: '#bookshelf', label: 'Bookshelf' },
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

  // Close drawer on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
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
      {/* Hamburger button — shown on mobile via CSS */}
      <button
        className="mob-btn"
        onClick={() => setOpen(o => !o)}
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

      {/* Sidebar / Drawer */}
      <nav className={`sidebar${open ? ' open' : ''}`}>
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

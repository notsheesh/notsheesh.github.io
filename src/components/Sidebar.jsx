import { useState, useEffect } from 'react'

function useDarkMode() {
  const [dark, setDark] = useState(() => {
    const stored = localStorage.getItem('theme')
    if (stored) return stored === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    const root = document.documentElement
    if (dark) { root.classList.add('dark'); root.classList.remove('light') }
    else       { root.classList.add('light'); root.classList.remove('dark') }
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return [dark, setDark]
}

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
  const [dark, setDark] = useDarkMode()

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
      <button
        className="mob-btn"
        onClick={() => setOpen(o => !o)}
        aria-label="Toggle menu"
      >
        {open ? '✕' : '☰'}
      </button>

      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.25)', zIndex: 200 }}
        />
      )}

      <nav className={`sidebar${open ? ' open' : ''}`}>
        {NAV.map(({ href, label }) => {
          const id = href === '#' ? '' : href.slice(1)
          return (
            <a key={href} href={href} style={linkStyle(id)} onClick={() => setOpen(false)}>
              {label}
            </a>
          )
        })}

        <button
          onClick={() => setDark(d => !d)}
          style={{
            marginTop: 'auto',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--muted)',
            fontSize: '1.1rem',
            padding: 0,
            textAlign: 'left',
          }}
          title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {dark ? '☀️' : '🌙'}
        </button>
      </nav>
    </>
  )
}

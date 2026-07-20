import { useState, useEffect } from 'react'

function useDarkMode() {
  const [dark, setDark] = useState(() => {
    const stored = localStorage.getItem('theme')
    if (stored) return stored === 'dark'
    return false
  })

  useEffect(() => {
    const root = document.documentElement
    if (dark) { root.classList.add('dark'); root.classList.remove('light') }
    else       { root.classList.add('light'); root.classList.remove('dark') }
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return [dark, setDark]
}

function useFontMode() {
  const [serif, setSerif] = useState(() => {
    const stored = localStorage.getItem('font')
    return stored ? stored === 'serif' : true
  })

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('font-serif-mode', serif)
    root.classList.toggle('font-sans-mode', !serif)
    localStorage.setItem('font', serif ? 'serif' : 'sans')
  }, [serif])

  return [serif, setSerif]
}

const NAV = [
  { href: '#about',     label: 'About' },
  { href: '#beliefs',   label: 'Beliefs' },
  { href: '#notes',     label: 'Notes' },
  // { href: '#pieces',    label: 'Jigsaw Pieces' },
  // { href: '#notebook',  label: 'Notebook' },
  // { href: '#bookshelf', label: 'Bookshelf' },
]

export default function Sidebar() {
  const [active, setActive] = useState('about')
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useDarkMode()
  const [serif, setSerif] = useFontMode()

  useEffect(() => {
    const updateActive = () => {
      let current = 'about'
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

  const toggleButton = (
    <button
      className="sidebar-icon-button"
      onClick={() => setDark(d => !d)}
      title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {dark ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/>
        </svg>
      )}
    </button>
  )

  const fontButton = (
    <button
      className="sidebar-icon-button"
      onClick={() => setSerif(s => !s)}
      title={serif ? 'Switch to sans serif font' : 'Switch to vintage serif font'}
      aria-label={serif ? 'Switch to sans serif font' : 'Switch to vintage serif font'}
    >
      <span className={serif ? 'font-toggle-icon sans' : 'font-toggle-icon serif'}>
        Aa
      </span>
    </button>
  )

  return (
    <>
      {/* Hamburger — mobile only via CSS */}
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
        <div className="sidebar-controls">
          {toggleButton}
          {fontButton}
        </div>
        {NAV.map(({ href, label }) => {
          const id = href === '#' ? '' : href.slice(1)
          return (
            <a key={href} href={href} style={linkStyle(id)} onClick={() => setOpen(false)}>
              {label}
            </a>
          )
        })}

      </nav>
    </>
  )
}

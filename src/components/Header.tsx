import { useEffect, useState } from 'react'
import './Header.css'

const links = [
  { href: '#collection', label: 'Looks' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Email' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="header">
      <div className="header__inner">
        <a className="header__brand" href="#top" aria-label="Kay home">
          kay
        </a>

        <nav className="header__nav" aria-label="Primary">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className={`header__menu${open ? ' is-open' : ''}`}
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          {open ? 'close' : 'menu'}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`header__drawer${open ? ' is-open' : ''}`}
        hidden={!open}
      >
        <nav aria-label="Mobile">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

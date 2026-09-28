import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { SITE_NAME } from '../data/site'
import './Header.css'

const links = [
  { to: '/looks', label: 'Looks' },
  { to: '/products', label: 'Products' },
  { to: '/about', label: 'About' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`header${pathname === '/' ? '' : ' header--on-paper'}`}>
      <div className="header__inner">
        <Link className="header__brand" to="/" aria-label={`${SITE_NAME} home`}>
          {SITE_NAME}
        </Link>

        <nav className="header__nav" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              aria-current={link.to === pathname ? 'page' : undefined}
            >
              {link.label}
            </Link>
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
            <Link key={link.to} to={link.to} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

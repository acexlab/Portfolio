import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const loc = useLocation()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'Profile' },
    { to: '/skills', label: 'Skills' },
    { to: '/works', label: 'Works' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <Link to="/" className="nav-brand" aria-label="Home">
        <span className="nav-brand-text">ACE</span>
        <span className="nav-brand-dot">.</span>
      </Link>

      <button
        className={`nav-hamburger${open ? ' nav-hamburger--open' : ''}`}
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close navigation' : 'Open navigation'}
        aria-expanded={open}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`nav-links${open ? ' nav-links--open' : ''}`}>
        {links.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            className={loc.pathname === to ? 'active' : ''}
            onClick={() => setOpen(false)}
          >
            {label}
          </Link>
        ))}
      </div>

      {open && (
        <div
          className="nav-overlay"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}
    </nav>
  )
}

import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const loc = useLocation()
  return (
    <nav className="nav">
      <div className="nav-right">
        <Link className={loc.pathname === '/' ? 'active' : ''} to="/">
          Home
        </Link>
        <Link className={loc.pathname === '/about' ? 'active' : ''} to="/about">
          Member
        </Link>
        <Link className={loc.pathname === '/skills' ? 'active' : ''} to="/skills">
          Skills
        </Link>
        <Link className={loc.pathname === '/works' ? 'active' : ''} to="/works">
          Works
        </Link>
        <Link className={loc.pathname === '/contact' ? 'active' : ''} to="/contact">
          Contact
        </Link>
      </div>
    </nav>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/about">Member</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/works">Works</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <p>
        &copy; {year} Jonadh E. F. &mdash; Built with React &amp; Vite
      </p>
    </footer>
  )
}

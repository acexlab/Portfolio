import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section>
      <h1>Hi, I'm YourName</h1>
      <p>I build web apps and interactive experiences. I use HTML, JS and React.</p>
      <Link to="/works" className="cta">
        See my works
      </Link>
    </section>
  )
}

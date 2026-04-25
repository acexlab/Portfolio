import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="animate-on-scroll">
      <div className="hero-badge">
        Available for work
      </div>

      <h1 className="hero-title">
        Hi, I'm{' '}
        <span className="hero-title-line2">Jonadh E. F.</span>
      </h1>

      <p style={{ fontSize: '1.1rem', maxWidth: '600px' }}>
        A passionate 20-year-old undergraduate student from India — full-stack web developer,
        software engineering enthusiast, and content creator building real-world projects
        with modern technologies.
      </p>

      <div style={{ marginTop: '2rem', marginBottom: '2rem' }}>
        <h3>Currently Building:</h3>
        <ul>
          <li>✅ Full-Stack Web Development Skills</li>
          <li>✅ Personal Portfolio Website (Live on Vercel)</li>
          <li>✅ Real-World Academic Projects</li>
          <li>✅ YouTube Gaming Channel (eFootball Content)</li>
        </ul>
      </div>

      <div className="hero-cta-group">
        <Link to="/works" className="cta">
          See my works
        </Link>
        <Link to="/contact" className="cta-outline">
          Get in touch
        </Link>
      </div>

      <div className="hero-stats">
        <div className="stat-item">
          <div className="stat-num">2+</div>
          <div className="stat-label">Projects</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">5+</div>
          <div className="stat-label">Technologies</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">20</div>
          <div className="stat-label">Years Old</div>
        </div>
      </div>
    </section>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="animate-on-scroll">
      <div className="hero-badge">Computer Science Student</div>

      <h1 className="hero-title">
        Hi, I'm <span className="hero-title-line2">Jonadh E. F.</span>
      </h1>

      <img
        src="https://github.com/user-attachments/assets/f43bef4a-60ae-42f8-ba4f-26e0484991b9"
        alt="Jonadh E. F."
        style={{ width: '140px', borderRadius: '12px', marginBottom: '1.25rem' }}
      />

      <p style={{ fontSize: '1.1rem', maxWidth: '600px' }}>
        Enthusiastic Computer Science Engineering student with strong problem-solving ability,
        adaptability, and a passion for technology.
      </p>

      <div style={{ marginTop: '2rem', marginBottom: '2rem' }}>
        <h3>Highlights</h3>
        <ul>
          <li>B.Tech in Computer Science (2022 - 2026)</li>
          <li>CGPA: 7.63 / 10 (7th Semester)</li>
          <li>Built web applications with React, Node.js, Express, and MongoDB</li>
          <li>Internship experience at High Court of Kerala</li>
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
          <div className="stat-num">2</div>
          <div className="stat-label">Projects</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">3</div>
          <div className="stat-label">Languages</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">2026</div>
          <div className="stat-label">Graduation</div>
        </div>
      </div>
    </section>
  )
}

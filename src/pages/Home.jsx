import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section>
      <h1>Hi, I'm Jonadh E. F.</h1>
      <p>
        A passionate 20-year-old undergraduate student from India with a strong interest in full-stack web development, software engineering, and content creation. I enjoy building real-world projects, learning modern technologies, and solving logical programming problems.
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

      <Link to="/works" className="cta">
        See my works
      </Link>
    </section>
  )
}

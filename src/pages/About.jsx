import React from 'react'

export default function About() {
  return (
    <section>
      <h2>About Me</h2>
      
      <div style={{ marginBottom: '2rem' }}>
        <h3>Profile</h3>
        <ul>
          <li><strong>Name:</strong> Jonadh E. F.</li>
          <li><strong>Age:</strong> 20 years old</li>
          <li><strong>Location:</strong> India</li>
          <li><strong>Status:</strong> University Student</li>
        </ul>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h3>About Me</h3>
        <p>
          I am a passionate undergraduate student from India with a strong interest in full-stack web development, software engineering, and content creation. I enjoy building real-world projects, learning modern technologies, and solving logical programming problems. I also run a gaming YouTube channel where I create eFootball content.
        </p>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h3>Interests</h3>
        <ul>
          <li>Web Development</li>
          <li>Gaming Content Creation</li>
          <li>Fitness & Self-Improvement</li>
          <li>Problem Solving & Programming</li>
        </ul>
      </div>

      <div>
        <h3>Academic Knowledge</h3>
        <ul>
          <li>Database Management Systems (SQL)</li>
          <li>System Software (Assembler, Loader, Linker)</li>
          <li>Computer Graphics & Image Processing</li>
          <li>CAD / Engineering Drawing</li>
          <li>Python & C Programming</li>
        </ul>
      </div>
    </section>
  )
}

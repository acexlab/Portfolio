import React, { useState } from 'react'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const email = 'jonadhef@gmail.com'

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section>
      <h2>Let's Connect</h2>
      <p>
        I'm open to internships, freelance web projects, student tech collaborations, and project development support.
      </p>

      <div style={{ marginBottom: '2rem', marginTop: '2rem' }}>
        <h3>Open To:</h3>
        <ul>
          <li>💼 Internships</li>
          <li>💻 Freelance Web Projects</li>
          <li>🤝 Student Tech Collaborations</li>
          <li>🚀 Project Development Support</li>
        </ul>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h3>Get In Touch</h3>
        <p>
          <strong>Email:</strong> {email}
        </p>
        <button onClick={copyEmail}>
          {copied ? '✓ Email Copied!' : 'Copy Email'}
        </button>
      </div>

      <h3>Message Me</h3>
      <form
        action="https://formspree.io/f/YOUR_FORM_ID"
        method="POST"
      >
        <label>
          Name
          <input name="name" required />
        </label>
        <label>
          Email
          <input name="email" type="email" required />
        </label>
        <label>
          Message
          <textarea name="message" required></textarea>
        </label>
        <button type="submit">Send Message</button>
      </form>
    </section>
  )
}

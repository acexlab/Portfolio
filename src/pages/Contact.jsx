import React, { useState } from 'react'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [status, setStatus] = useState('')
  const email = 'jonadhef@gmail.com'

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSubmit = () => {
    setStatus('sending')
    // Let the form submit naturally to Formspree; this just shows optimistic UI
    setTimeout(() => setStatus(''), 3000)
  }

  return (
    <section className="animate-on-scroll">
      <h2>Let's Connect</h2>
      <p>
        I'm open to internships, freelance web projects, student tech collaborations, and project development support.
      </p>

      <div style={{ marginBottom: '2rem', marginTop: '2rem' }} className="animate-on-scroll delay-1">
        <h3>Open To:</h3>
        <ul>
          <li>💼 Internships</li>
          <li>💻 Freelance Web Projects</li>
          <li>🤝 Student Tech Collaborations</li>
          <li>🚀 Project Development Support</li>
        </ul>
      </div>

      <div style={{ marginBottom: '2rem' }} className="animate-on-scroll delay-2">
        <h3>Get In Touch</h3>
        <p>
          <strong>Email:</strong> {email}
        </p>
        <button onClick={copyEmail}>
          {copied ? '✓ Email Copied!' : 'Copy Email'}
        </button>
      </div>

      <div className="animate-on-scroll delay-3">
        <h3>Message Me</h3>
        <form
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
          onSubmit={handleSubmit}
        >
          <label>
            Name
            <input name="name" placeholder="Your name" required />
          </label>
          <label>
            Email
            <input name="email" type="email" placeholder="your@email.com" required />
          </label>
          <label>
            Message
            <textarea name="message" placeholder="Tell me what you're working on..." required />
          </label>
          <button type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  )
}

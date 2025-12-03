import React, { useState } from 'react'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const phone = '+91-xxxxxxxxxx'

  const copyPhone = async () => {
    await navigator.clipboard.writeText(phone)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section>
      <h2>Contact</h2>
      <p>
        For hiring / freelance:{' '}
        <a href="mailto:your@email.com">Email me</a>
      </p>

      <div>
        <button onClick={copyPhone}>
          {copied ? 'Copied!' : 'Copy Phone'}
        </button>
      </div>

      <h3>Message form</h3>
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
        <button type="submit">Send</button>
      </form>
    </section>
  )
}

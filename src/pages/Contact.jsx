/*
  File: src/pages/Contact.jsx
  Purpose: Contact page with a copy-to-clipboard email and a contact form.

  Beginner notes:
  - `useState` is a React hook that lets components remember values between renders (like `copied`).
  - `navigator.clipboard.writeText(...)` copies text to the user's clipboard (modern browsers only).
  - The `<form>` uses `action` and `method` to send form data to a service (Formspree here). In production replace `YOUR_FORM_ID` with your form endpoint.
*/

import React, { useState } from 'react'

export default function Contact() {
  // `copied` becomes true for 2 seconds after copying the email, used to show feedback to the user.
  const [copied, setCopied] = useState(false)
  const email = 'jonadhef@gmail.com'

  // copyEmail: asynchronous function that copies the email to the clipboard and shows a confirmation.
  const copyEmail = async () => {
    await navigator.clipboard.writeText(email)
    setCopied(true) // toggle UI state to show the user the copy succeeded
    setTimeout(() => setCopied(false), 2000) // reset after 2 seconds
  }

  return (
    <section>
      <h2>Let's Connect</h2>
      <p>
        I'm open to internships, freelance web projects, student tech collaborations, and project development support.
      </p>

      {/* Simple list of things you are open to */}
      <div style={{ marginBottom: '2rem', marginTop: '2rem' }}>
        <h3>Open To:</h3>
        <ul>
          <li>💼 Internships</li>
          <li>💻 Freelance Web Projects</li>
          <li>🤝 Student Tech Collaborations</li>
          <li>🚀 Project Development Support</li>
        </ul>
      </div>

      {/* Email block with a copy button. The button uses the copyEmail function above. */}
      <div style={{ marginBottom: '2rem' }}>
        <h3>Get In Touch</h3>
        <p>
          <strong>Email:</strong> {email}
        </p>
        <button onClick={copyEmail}>
          {copied ? '✓ Email Copied!' : 'Copy Email'}
        </button>
      </div>

      {/*
        Message form: when submitted the browser sends the form data to the `action` URL.
        `method="POST"` means data is sent in the request body. Formspree is a simple service
        to receive form submissions without a server. Replace `YOUR_FORM_ID` before using.
      */}
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

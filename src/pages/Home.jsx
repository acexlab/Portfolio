/*
  File: src/pages/Home.jsx
  Purpose: Landing / Home page component for the portfolio website.
  What this file does (high-level):
  - Imports React and the `Link` component from React Router.
  - Defines a functional React component `Home` that returns JSX (the UI).
  - Exports the component as the default export so the router can render it.

  Note for beginners: React components are just JavaScript functions that return HTML-like code (called JSX).
*/

import React from 'react' // Import React (required to use JSX)
import { Link } from 'react-router-dom' // `Link` creates in-app navigation without reloading the page

// `Home` is a React functional component. When the router visits '/', this component is shown.
export default function Home() {
  return (
    <section>
      {/* Heading: main greeting shown at the top of the page */}
      <h1>Hi, I'm Jonadh E. F.</h1>

      {/* Short introduction paragraph explaining who Jonadh is */}
      <p>
        A passionate 20-year-old undergraduate student from India with a strong interest in full-stack web development, software engineering, and content creation. I enjoy building real-world projects, learning modern technologies, and solving logical programming problems.
      </p>
      
      {/* A small block showing current projects or focus areas. 
          `style` is an inline style object (JavaScript) — used here for quick spacing. */}
      <div style={{ marginTop: '2rem', marginBottom: '2rem' }}>
        <h3>Currently Building:</h3>
        <ul>
          {/* List items are normal HTML inside JSX */}
          <li>✅ Full-Stack Web Development Skills</li>
          <li>✅ Personal Portfolio Website (Live on Vercel)</li>
          <li>✅ Real-World Academic Projects</li>
          <li>✅ YouTube Gaming Channel (eFootball Content)</li>
        </ul>
      </div>

      {/* `Link` navigates to the Works page without reloading the browser.
          The `to` prop sets the target route. `className` is used for styling. */}
      <Link to="/works" className="cta">
        See my works
      </Link>
    </section>
  )
}

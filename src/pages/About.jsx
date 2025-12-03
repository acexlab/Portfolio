/*
  File: src/pages/About.jsx
  Purpose: Renders the "About" page for the portfolio.

  Beginner-friendly notes:
  - `import React from 'react'` brings React into the file so we can use JSX (HTML-like syntax in JavaScript).
  - The default export at the end (`export default function About() { ... }`) makes this component available to the router.
  - JSX looks like HTML but is actually JavaScript objects under the hood; browsers see plain HTML after React renders it.
*/

import React from 'react'

// `About` is a React functional component. When this component is used, the JSX returned below becomes HTML on the page.
export default function About() {
  return (
    <section>
      {/* <h2> is a heading element. It displays large bold text. */}
      <h2>About Me</h2>
      
      {/* Profile block: a list of simple facts. `style={{ ... }}` is an inline style object (JS), used for spacing here. */}
      <div style={{ marginBottom: '2rem' }}>
        <h3>Profile</h3>
        <ul>
          {/* Each <li> is a list item. <strong> makes the label bold. */}
          <li><strong>Name:</strong> Jonadh E. F.</li>
          <li><strong>Age:</strong> 20 years old</li>
          <li><strong>Location:</strong> India</li>
          <li><strong>Status:</strong> University Student</li>
        </ul>
      </div>

      {/* Paragraph block: normal text inside <p> tags */}
      <div style={{ marginBottom: '2rem' }}>
        <h3>About Me</h3>
        <p>
          I am a passionate undergraduate student from India with a strong interest in full-stack web development, software engineering, and content creation. I enjoy building real-world projects, learning modern technologies, and solving logical programming problems. I also run a gaming YouTube channel where I create eFootball content.
        </p>
      </div>

      {/* Interest list: simple unordered list of topics */}
      <div style={{ marginBottom: '2rem' }}>
        <h3>Interests</h3>
        <ul>
          <li>Web Development</li>
          <li>Gaming Content Creation</li>
          <li>Fitness & Self-Improvement</li>
          <li>Problem Solving & Programming</li>
        </ul>
      </div>

      {/* Academic knowledge: things learned in school or courses */}
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

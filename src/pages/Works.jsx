/*
  File: src/pages/Works.jsx
  Purpose: Shows a list of projects using the `ProjectCard` component.

  Notes:
  - We import `ProjectCard` to render each project visually.
  - The `projects` array is plain JavaScript data. We use `.map()` to convert each project object into a JSX element.
*/

import React from 'react'
import ProjectCard from '../components/ProjectCard' // Reusable UI component for each project
import sample from '../assets/react.svg' // Example image used as project thumbnail

export default function Works() {
  // `projects` is an array of objects. Each object represents one project with title, image, description and link.
  const projects = [
    {
      title: 'Disaster Relief Camp Locator',
      img: sample,
      desc: 'A full-featured system to locate disaster relief camps and manage resources efficiently. Built with HTML, CSS, JavaScript with plans for full-stack implementation.',
      deptLink: 'https://github.com/acexlab/Portfolio',
    },
    {
      title: 'Placement Cell Website',
      img: sample,
      desc: 'Full-stack web platform with Student, Volunteer, and Admin roles. Features include student registration, question management, and admin approval system.',
      deptLink: 'https://github.com/acexlab/Portfolio',
    },
  ]

  return (
    <section>
      {/* Heading and short description */}
      <h2>My Projects</h2>
      <p>Real-world projects I've built and contributed to:</p>

      {/*
        The following `div` contains the project grid. `projects.map(...)` loops over the array
        and returns a `ProjectCard` element for each project. The `key` prop helps React update
        the list efficiently; it should be a unique value (we use the title here).
      */}
      <div className="grid">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  )
}

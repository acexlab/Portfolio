import React from 'react'
import ProjectCard from '../components/ProjectCard'
import sample from '../assets/react.svg'

export default function Works() {
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
      <h2>My Projects</h2>
      <p>Real-world projects I've built and contributed to:</p>
      <div className="grid">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  )
}

import React from 'react'
import ProjectCard from '../components/ProjectCard'
import sample from '../assets/react.svg'

export default function Works() {
  const projects = [
    {
      title: 'Relief Camp Locator',
      img: sample,
      desc: 'Mini-project: disaster relief camp system',
      deptLink: 'https://example.com/department',
    },
  ]

  return (
    <section>
      <h2>Works</h2>
      <div className="grid">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  )
}

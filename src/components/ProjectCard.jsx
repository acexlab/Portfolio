import React from 'react'

export default function ProjectCard({ title, img, desc, deptLink }) {
  return (
    <div className="project-card">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{desc}</p>
      <a href={deptLink} target="_blank" rel="noreferrer">
        Department Link
      </a>
    </div>
  )
}

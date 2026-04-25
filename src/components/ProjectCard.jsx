import React from 'react'

export default function ProjectCard({ title, img, desc, deptLink, className }) {
  return (
    <div className={`project-card${className ? ` ${className}` : ''}`}>
      <div className="project-img-wrap">
        <img src={img} alt={title} />
        <div className="project-img-overlay" />
      </div>
      <div className="project-card-body">
        <h3>{title}</h3>
        <p>{desc}</p>
        <a href={deptLink} target="_blank" rel="noreferrer">
          View Project →
        </a>
      </div>
    </div>
  )
}

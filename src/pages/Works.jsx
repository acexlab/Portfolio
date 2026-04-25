import React from 'react'
import ProjectCard from '../components/ProjectCard'
import sample from '../assets/react.svg'

export default function Works() {
  const projects = [
    {
      title: 'Disaster Relief Camp Locator and Resource Management System (Mini Project)',
      img: sample,
      desc: 'Web application for managing resources and locating nearby relief camps, enhancing emergency response. Technologies: Vite, JavaScript, Node.js, MongoDB, Express, Leaflet API.',
      deptLink: 'https://github.com/acexlab/Portfolio',
    },
    {
      title: 'SpeechWell - A Tool for Speech Therapy and Language Learners (Main Project, Ongoing)',
      img: sample,
      desc: 'Interactive web app for speech therapy and language learning, offering guided voice exercises, real-time feedback, progress tracking, and accessibility features. Technologies: React, HTML, CSS, JavaScript, Node.js, Express, MongoDB, Python.',
      deptLink: 'https://github.com/acexlab/Portfolio',
    },
  ]

  return (
    <section className="animate-on-scroll">
      <h2>My Projects</h2>
      <p>Real-world projects I've built and contributed to:</p>

      <div className="grid">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} {...p} className={`animate-on-scroll delay-${(i % 3) + 1}`} />
        ))}
      </div>
    </section>
  )
}

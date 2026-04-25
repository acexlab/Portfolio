import React from 'react'
import SkillBar from '../components/SkillBar'

export default function Skills() {
  const learnedSkills = [
    { skill: 'Adaptability', level: 90, tag: 'Strong' },
    { skill: 'Team Management', level: 85, tag: 'Strong' },
    { skill: 'Leadership', level: 85, tag: 'Strong' },
    { skill: 'Effective Communication', level: 80, tag: 'Strong' },
    { skill: 'Critical Thinking', level: 82, tag: 'Strong' },
  ]

  const learningSkills = [
    { skill: 'C Programming (Moderate)', level: 75, tag: 'Tech' },
    { skill: 'Python (Moderate)', level: 75, tag: 'Tech' },
    { skill: 'Java (Basic)', level: 55, tag: 'Tech' },
    { skill: 'HTML & CSS (Good)', level: 80, tag: 'Tech' },
    { skill: 'JavaScript & Node.js (Basic)', level: 65, tag: 'Tech' },
    { skill: 'MongoDB (Basic) & SQL (Good)', level: 72, tag: 'Tech' },
  ]

  return (
    <section className="animate-on-scroll">
      <h2>Skills &amp; Expertise</h2>

      <div style={{ marginBottom: '3rem' }} className="animate-on-scroll delay-1">
        <h3>Soft Skills</h3>
        <p>Core strengths highlighted in the resume:</p>
        {learnedSkills.map((s) => (
          <SkillBar key={s.skill} {...s} />
        ))}
      </div>

      <div style={{ marginBottom: '3rem' }} className="animate-on-scroll delay-2">
        <h3>Technical Skills</h3>
        <p>Programming and web development skill set:</p>
        {learningSkills.map((s) => (
          <SkillBar key={s.skill} {...s} />
        ))}
      </div>

      <div className="animate-on-scroll delay-3">
        <h3>Languages</h3>
        <ul>
          <li>English (Fluent)</li>
          <li>Malayalam (Fluent)</li>
          <li>Hindi (Fluent)</li>
        </ul>
      </div>
    </section>
  )
}

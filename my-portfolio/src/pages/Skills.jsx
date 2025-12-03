import React from 'react'
import SkillBar from '../components/SkillBar'

export default function Skills() {
  const skills = [
    { skill: 'HTML/CSS', level: 90, tag: 'Attended' },
    { skill: 'JavaScript', level: 80, tag: 'Learning' },
    { skill: 'React', level: 70, tag: 'Learning' },
    { skill: 'Node.js', level: 40, tag: 'Started' },
  ]

  return (
    <section>
      <h2>Skills</h2>
      <p>Skills I have attended and skills I'm currently learning.</p>
      {skills.map((s) => (
        <SkillBar key={s.skill} {...s} />
      ))}
    </section>
  )
}

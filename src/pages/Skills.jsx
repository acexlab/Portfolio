import React from 'react'
import SkillBar from '../components/SkillBar'

export default function Skills() {
  const learnedSkills = [
    { skill: 'HTML/CSS', level: 90, tag: 'Strong' },
    { skill: 'C Programming', level: 85, tag: 'Strong' },
    { skill: 'SQL (DBMS)', level: 80, tag: 'Strong' },
    { skill: 'Git & GitHub', level: 85, tag: 'Strong' },
    { skill: 'Data Structures', level: 75, tag: 'Basic' },
  ]

  const learningSkills = [
    { skill: 'JavaScript', level: 70, tag: 'Learning' },
    { skill: 'React.js', level: 75, tag: 'Learning' },
    { skill: 'Node.js', level: 60, tag: 'Learning' },
    { skill: 'Full-Stack Web Dev', level: 65, tag: 'Learning' },
    { skill: 'Python', level: 70, tag: 'Learning' },
    { skill: 'System Software', level: 60, tag: 'Learning' },
  ]

  return (
    <section className="animate-on-scroll">
      <h2>Skills &amp; Expertise</h2>

      <div style={{ marginBottom: '3rem' }} className="animate-on-scroll delay-1">
        <h3>Learned &amp; Strong Skills</h3>
        <p>Skills I have strong proficiency in:</p>
        {learnedSkills.map((s) => (
          <SkillBar key={s.skill} {...s} />
        ))}
      </div>

      <div style={{ marginBottom: '3rem' }} className="animate-on-scroll delay-2">
        <h3>Currently Learning</h3>
        <p>Skills I'm actively learning and improving:</p>
        {learningSkills.map((s) => (
          <SkillBar key={s.skill} {...s} />
        ))}
      </div>

      <div className="animate-on-scroll delay-3">
        <h3>Tools &amp; Platforms</h3>
        <ul>
          <li>VS Code</li>
          <li>GitHub</li>
          <li>Vercel</li>
          <li>NPTEL Learning Platform</li>
        </ul>
      </div>
    </section>
  )
}

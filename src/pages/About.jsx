import React from 'react'

export default function About() {
  return (
    <section className="animate-on-scroll">
      <h2>Profile</h2>

      <div style={{ marginBottom: '2rem' }} className="animate-on-scroll delay-1">
        <h3>Profile</h3>
        <ul>
          <li><strong>Name:</strong> Jonadh E. F.</li>
          <li><strong>Role:</strong> Computer Science Student</li>
          <li><strong>Address:</strong> Thrissur, Kerala</li>
          <li><strong>Email:</strong> jonadhef@gmail.com</li>
        </ul>
      </div>

      <div style={{ marginBottom: '2rem' }} className="animate-on-scroll delay-2">
        <h3>Summary</h3>
        <p>
          Enthusiastic Computer Science Engineering student with strong problem-solving ability,
          adaptability, and a passion for technology. Skilled in C, Python, and front-end
          development with hands-on experience in building real-world web applications.
          A fast learner with proven leadership and collaboration skills.
        </p>
      </div>

      <div style={{ marginBottom: '2rem' }} className="animate-on-scroll delay-2">
        <h3>Education</h3>
        <ul>
          <li><strong>B.Tech in Computer Science</strong> (2022 - 2026), MBITS Engineering College, Kothamangalam</li>
          <li><strong>CGPA:</strong> 7.63 / 10 (7th Semester)</li>
          <li><strong>Higher Secondary Education</strong> (2020 - 2022), H S S Arimpur, Thrissur</li>
          <li><strong>Score:</strong> 88%</li>
        </ul>
      </div>

      <div className="animate-on-scroll delay-3">
        <h3>Internship</h3>
        <ul>
          <li><strong>High Court of Kerala</strong></li>
          <li>Worked with React to develop part of a larger project.</li>
          <li>Gained hands-on experience using React components for real-world applications.</li>
          <li>Improved front-end proficiency and team collaboration in a professional setting.</li>
        </ul>
      </div>
    </section>
  )
}

import React, { useRef, useEffect, useState } from 'react'

export default function SkillBar({ skill, level, tag }) {
  const ref = useRef()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setVisible(true))
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="skill-row" ref={ref}>
      <div className="skill-label">
        <strong>{skill}</strong> <span className="tag">{tag}</span>
      </div>
      <div className="skill-bar">
        <div
          className="skill-fill"
          style={{ width: visible ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  )
}

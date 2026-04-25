import React, { useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ShaderBackground from './components/ShaderBackground'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Works from './pages/Works'
import Contact from './pages/Contact'

export default function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    const targets = document.querySelectorAll('.animate-on-scroll')
    targets.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [pathname])

  return (
    <>
      <ShaderBackground />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/works" element={<Works />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  )
}

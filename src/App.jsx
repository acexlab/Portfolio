import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ShaderBackground from './components/ShaderBackground'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Works from './pages/Works'
import Contact from './pages/Contact'

export default function App() {
  return (
    <>
      <ShaderBackground />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <main style={{ minHeight: '70vh', padding: '2rem' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/works" element={<Works />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  )
}

import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function App() {
  const currentYear = new Date().getFullYear()

  return (
    <BrowserRouter>
      <div
        className="app-container"
        style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          minHeight: '100vh',
          width: '100%',
          overflowX: 'hidden'
        }}
      >
        <Header />

        <nav style={{ 
          backgroundColor: '#8b9bb5',
          padding: '1rem',
          width: '100%',
          textAlign: 'center',
          marginBottom: '20px'
        }}>
          <div style={{ 
            maxWidth: '1200px', 
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem'
          }}>
            <Link to="/" style={{ color: '#fff' }}>Home</Link>
            <Link to="/about" style={{ color: '#fff' }}>About</Link>
            <Link to="/projects" style={{ color: '#fff' }}>Projects</Link>
            <Link to="/contact" style={{ color: '#fff' }}>Contact</Link>
          </div>
        </nav>

        <div style={{ 
          maxWidth: '1200px', 
          width: '100%', 
          margin: '0 auto', 
          padding: '0 1rem',
          boxSizing: 'border-box'
        }}>
          <main style={{ flex: 1, width: '100%' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>

        <Footer year={currentYear} />
      </div>
    </BrowserRouter>
  )
}

export default App
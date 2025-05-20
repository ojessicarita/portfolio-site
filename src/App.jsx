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
        style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
      >
        <Header />

        <div style={{ 
          maxWidth: '1200px', 
          width: '100%', 
          margin: '0 auto', 
          padding: '0 1rem' 
        }}>
          <nav style={{ margin: '1rem auto', textAlign: 'center' }}>
            <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
            <Link to="/about" style={{ marginRight: '1rem' }}>About</Link>
            <Link to="/projects" style={{ marginRight: '1rem' }}>Projects</Link>
            <Link to="/contact">Contact</Link>
          </nav>

          <main style={{ flex: 1 }}>
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
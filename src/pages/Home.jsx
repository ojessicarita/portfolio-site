import React from 'react'

function Home() {
  return (
    <main className="home">
      <section className="hero">
        <h1>Hi, I'm jessica-rita 👋</h1>
        <p>A creative developer building meaningful apps</p>
        <div className="hero-buttons">
          <a href="/projects" className="btn">View Projects</a>
          <a href="/contact" className="btn outline">Contact Me</a>
        </div>
      </section>

      <section className="about-preview">
        <h2>About Me</h2>
        <p>
          I'm passionate about using technology to solve real-world problems and uplift communities. My work blends design, logic, and purpose.
        </p>
        <a href="/about">Read more →</a>
      </section>

      <section className="projects-preview">
        <h2>Featured Projects</h2>
        <div className="project-cards">
          {/* Replace with mapped cards later */}
          <div className="card">Project 1</div>
          <div className="card">Project 2</div>
          <div className="card">Project 3</div>
        </div>
        <a href="/projects">See all projects →</a>
      </section>
    </main>
  )
}

export default Home

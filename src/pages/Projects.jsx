import React from "react"

function Projects({ title, description, link }) {
    return (
      <div className="project-card">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} target="_blank">View Project</a>
      </div>
    )
  }
  
export default Projects
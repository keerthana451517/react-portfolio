// src/components/Projects.js
import React from 'react';
// import './Projects.css'; // Create this CSS file for styling

const projects = [
  { title: 'Project 1', description: 'Description of Project 1', image: 'path/to/image1.jpg' },
  { title: 'Project 2', description: 'Description of Project 2', image: 'path/to/image2.jpg' },
  { title: 'Project 3', description: 'Description of Project 3', image: 'path/to/image3.jpg' },
  { title: 'Project 4', description: 'Description of Project 4', image: 'path/to/image4.jpg' }
];

const Projects = () => {
  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

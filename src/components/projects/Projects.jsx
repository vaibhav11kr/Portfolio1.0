import React from 'react';
import "./Projects.css";
import Details from './Details';

const Projects = () => {
  return (
    <section className='work section' id= "projects">
        <h2 className="section_title">Projects</h2>
        <span className="section_subtitle">Most recent projects</span>
        <Details />

    </section>
  )
}

export default Projects;

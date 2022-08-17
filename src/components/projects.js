import React from "react";

function Projects (project) {
    return (
      
        <div className="projects">
            <h4>{project.title}</h4>
            <img src={project.imgPath} alt="project-img"/>
            <p className="projectDes">{project.description}</p>
            <a href={project.site} target="_blank" rel="noopener noreferrer"><button className="siteBtn"> Visit Site </button></a>
            <a href={project.repo} target="_blank" rel="noopener noreferrer"><button className="GHBtn"> Visit Github </button></a>
        </div>

    );
}

export default Projects;
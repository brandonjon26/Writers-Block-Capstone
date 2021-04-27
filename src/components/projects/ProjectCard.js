import React from "react";
// import "./ProjectCard.css";
import { Link } from "react-router-dom";

export const ProjectCard = ({ project, handleDeleteProject }) => {
    return (
        <div className="card">
            <div className="card-content">
                <div className="projects">
                    <div className="project">
                        <h2> <span className="card-projecttitle">
                            {project.name}
                        </span></h2>
                        <h3>Genre: {project.genre}</h3>
                        <Link to={`/projects/${project.id}`}>
                            <button type="button">Open Project</button>
                        </Link>
                        <button type="button" onClick={() => handleDeleteProject(project.id)}>Nuke</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
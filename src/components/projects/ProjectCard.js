import React from "react";
import "./ProjectCard.css";
import { Link } from "react-router-dom";

export const ProjectCard = ({ project, handleDeleteProject }) => {
    return (
        <div className="card">
            <div className="card-content">
                <div className="projects">
                    <div className="project">
                        <h2> <span className="card-projecttitle">
                            {project.title}
                        </span></h2>
                        <h3 className="genreType">Genre: {project.genre.name}</h3>
                        <p className="summaryText">Summary: {project.summary}</p>
                        <Link to={`/projects/${project.id}`}>
                            <button type="button" className="buttonOne">Open Project</button>
                        </Link>
                        <button type="button" className="deleteButton" onClick={() => handleDeleteProject(project.id)}>Nuke</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
import React, { useState, useEffect } from "react";
import { ProjectCard } from "./ProjectCard";
import { getAllProjects, deleteProject } from "../../modules/ProjectManager";
import { useHistory } from "react-router";

export const ProjectList = () => {
    
    const [projects, setProjects] = useState([]);

    let history = useHistory();

    const getProjects = () => {
        return getAllProjects()
            .then(projectsFromApi => {
                setProjects(projectsFromApi)
            });
    };

    const handleDeleteProject = id => {
        deleteProject(id)
            .then(() => getAllProjects().thrn(setProjects));
    };

    useEffect(() => {
        getProjects();
    }, []);

    return (
        <>
            <div className="container-cards">
                <section className="section-content">
                    <button type="button"
                        className="btn"
                        onClick={() => { history.push("/projects/create") }}>
                        Create New Project
                    </button>
                </section>
                {projects.map(project => <ProjectCard 
                    key={project.id}
                    project={project}
                    handleDeleteProject={handleDeleteProject}
                    />)}
            </div>
        </>
    );
};
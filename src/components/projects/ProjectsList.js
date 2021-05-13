import React, { useState, useEffect } from "react";
import { ProjectCard } from "./ProjectCard";
import { getProjectsByUserId, deleteProject } from "../../modules/ProjectManager";
import { useHistory } from "react-router";
import "./ProjectList.css";

export const ProjectList = () => {

    const [projects, setProjects] = useState([]);

    const history = useHistory();

    const currentUserId = JSON.parse(sessionStorage.getItem("writersBlock_user")).id;

    const getProjects = () => {
        return getProjectsByUserId(currentUserId)
            .then(projectsFromApi => {
                setProjects(projectsFromApi)
            });
    };

    const handleDeleteProject = id => {
        deleteProject(id)
            .then(() => getProjects());
    };

    useEffect(() => {
        getProjects();
    }, []);

    return (
        <>
            <div className="container-cards">
                <div className="contentHeader">
                    <h1>My Projects!</h1>
                    <button type="button"
                        className="createButton"
                        onClick={() => { history.push("/projects/create") }}>
                        Create New Project
                    </button>
                </div>
                {projects.map(project => <ProjectCard
                    key={project.id}
                    project={project}
                    handleDeleteProject={handleDeleteProject}
                />)}
            </div>
        </>
    );
};
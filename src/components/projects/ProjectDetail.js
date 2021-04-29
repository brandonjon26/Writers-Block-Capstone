import React, { useState, useEffect } from "react";
import { getProjectById, deleteProject } from "../../modules/ProjectManager";
// import "./ProjectDetails.css";
import { useParams, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { SubNav } from "./projectView/SubNav";
import { GoalList } from "./projectView/goals/GoalList";
// import { firstLetterCase } from "../../modules/helper";

export const ProjectDetail = () => {
    const [project, setProject] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const { projectId } = useParams();
    const history = useHistory();

    useEffect(() => {

        getProjectById(projectId)
            .then(project => {
                setProject(project);
                setIsLoading(false);
            });
    }, [projectId]);

    const handleDelete = () => {
        setIsLoading(true);
        deleteProject(projectId).then(() =>
            history.push("/projects")
        );
    };

    return (
        <>
            <section className="project">
                <SubNav />
                <h3 className="project__name">{project.title}</h3>
                <div className="project__genre">Genre: {project.genre?.name}</div>
                <div className="project__summary">Summary: {project.summary}</div>
                <Link to={`/`}>
                    <button>Back</button>
                </Link>
                <button type="button" disabled={isLoading} onClick={handleDelete}>
                    Nuke
                </button>
                <section id="goals">
                    <h4>Goals</h4>

                        { project.id && <GoalList projectId={project.id} />}

                </section>
                <section id="notes">
                    <h4>Notes</h4>
                    <p>.</p>
                    <p>.</p>
                    <p>.</p>
                    <p>.</p>
                    <p>.</p>
                    <p>.</p>
                    <p>.</p>
                </section>
                <section id="characters">
                    <h4>Characters</h4>
                    <p>.</p>
                    <p>.</p>
                    <p>.</p>
                    <p>.</p>
                    <p>.</p>
                    <p>.</p>
                    <p>.</p>
                </section>
            </section>
        </>
    )
}
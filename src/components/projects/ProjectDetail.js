import React, { useState, useEffect } from "react";
import { getProjectById, deleteProject } from "../../modules/ProjectManager";
// import "./ProjectDetails.css";
import { useParams, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { SubNav } from "./projectView/SubNav";
import { GoalList } from "./projectView/goals/GoalList";
import { NoteList } from "./projectView/notes/NoteList";
import { CharacterList } from "./projectView/characters/CharacterList";
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
            history.push("/")
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
                    
                        { project.id && <NoteList projectId={project.id} />}

                </section>
                <section id="characters">
                    <h4>Characters</h4>

                    { project.id && <CharacterList projectId={project.id} />}

                </section>
            </section>
        </>
    )
}
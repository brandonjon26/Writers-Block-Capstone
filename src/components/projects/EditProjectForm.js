import React, { useState, useEffect } from "react";
import { updateProject, getProjectById, getAllGenres } from "../../modules/ProjectManager";
import "./EditProjectForm.css";
import { useHistory, useParams, Link } from "react-router-dom";

export const EditProjectForm = () => {
    const [project, setProject] = useState({ title: "", genreId: 0, summary: "", userId: 0, id: 0, });
    const [genre, setGenre] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const { projectId } = useParams();
    const history = useHistory();

    const handleFieldChange = (event) => {
        const stateToChange = { ...project };
        let selectedVal = event.target.value
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        stateToChange[event.target.id] = selectedVal

        setProject(stateToChange);
    };

    const updateExistingProject = (event) => {
        event.preventDefault()
        setIsLoading(true);

        const editedProject = {
            id: projectId,
            title: project.title,
            genreId: project.genreId,
            summary: project.summary,
            userId: project.userId
        };

        updateProject(editedProject)
            .then(() => history.push(`/projects/${project.id}`))
    };

    useEffect(() => {
        getProjectById(projectId)
            .then(project => {
                setProject(project);
                setIsLoading(false);
            });
    }, [projectId]);

    useEffect(() => {
        getAllGenres()
            .then(genresFromAPI => {
                setGenre(genresFromAPI);
                setIsLoading(false);
            });
    }, []);

    return (
        <>
            <form>
                <fieldset>
                    <div className="editFormgrid">
                        <label htmlFor="title">Project Title</label>
                        <input
                            type="text"
                            required
                            className="editForm-control"
                            onChange={handleFieldChange}
                            id="title"
                            value={project.title}
                        />

                        <label htmlFor="genreId">Select-A-Genre</label>
                        <select
                            type="text"
                            required 
                            className="editForm-control"
                            onChange={handleFieldChange}
                            id="genreId"
                            value={project.genreId}
                            >
                            {genre.map(g =>
                                <option 
                                key={g.id}
                                value={g.id}>{g.name}
                                </option>
                            )}
                        </select>

                        <label htmlFor="summary">Project Summary</label>
                        <input 
                            type="text"
                            required
                            className="editForm-control"
                            onChange={handleFieldChange}
                            id="summary"
                            value={project.summary}
                        />

                    </div>
                    <div className="editAlignRight">
                        <Link to={`/projects/${projectId}`}>
                            <button>Back</button>
                        </Link>
                        <button 
                            type="button" disabled={isLoading}
                            onClick={updateExistingProject}
                            className="editSaveButton"
                        >Save</button>
                    </div>
                </fieldset>
            </form>
        </>
    );
}
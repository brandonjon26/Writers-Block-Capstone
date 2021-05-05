import React, { useState, useEffect } from "react";
import { updateProject, getProjectById, getAllGenres } from "../../modules/ProjectManager";
// import "./ProjectForm.css";
import { useHistory, useParams, Link } from "react-router-dom";

export const EditProjectForm = () => {
    const [project, setProject] = useState({ title: "", genreId: 0, summary: "", userId: 0, id: 0, });
    const [genre, setGenre] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const { projectId } = useParams();
    const history = useHistory();

    const handleFieldChange = (event) => {
        const stateToChange = { ...project };
        stateToChange[event.target.id] = event.target.value;
        setProject(stateToChange);
    };

    const updateExistingProject = (event) => {
        event.preventDefault()
        setIsLoading(true);

        const editedProject = {
            id: projectId,
            title: project.title,
            genreId: project.genre,
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
                    <div className="formgrid">
                        <label htmlFor="title">Project Title</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="title"
                            value={project.title}
                        />

                        <label htmlFor="genreId">Select-A-Genre</label>
                        <select
                            type="text"
                            requiredclassName="form-control"
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
                            className="form-control"
                            onChange={handleFieldChange}
                            id="summary"
                            value={project.summary}
                        />

                    </div>
                    <div className="alignRight">
                        <Link to={`/projects/${projectId}`}>
                            <button>Back</button>
                        </Link>
                    </div>
                    <div className="alignRight">
                        <button 
                            type="button" disabled={isLoading}
                            onClick={updateExistingProject}
                            className="btn"
                        >Save</button>
                    </div>
                </fieldset>
            </form>
        </>
    );
}
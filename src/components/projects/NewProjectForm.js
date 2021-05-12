import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { addProject, getAllGenres } from "../../modules/ProjectManager";
// import "./ProjectForm.css";
import { Link } from "react-router-dom";

export const ProjectForm = () => {

    const currentUser = JSON.parse(sessionStorage.getItem("writersBlock_user")).id;

    const [project, setProject] = useState({
        title: "",
        genreId: 0,
        summary: "",
        userId: parseInt(currentUser)
    });

    // const [isLoading, setIsLoading] = useState(false);
    const [genre, setGenre] = useState([]);

    const history = useHistory();

    const handleControlledInputChange = (event) => {
        const newProject = { ...project }
        let selectedVal = event.target.value
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }

        newProject[event.target.id] = selectedVal

        setProject(newProject)
    }

    useEffect(() => {
        getAllGenres()
            .then(genresFromAPI => {
                setGenre(genresFromAPI)
            });
    },  []);

    const handleClickSaveProject = (event) => {
        event.preventDefault()

        const genreId = project.genreId

        if (genreId === 0) {
            window.alert("Please select a genre")
        } else {
            addProject(project)
                .then(() => history.push("/"))
        }
    }

    return (
        <form className="projectForm">
            <h2 className="projectForm__title">Start A Project!</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Project Title: </label>
                    <input type="text" id="title" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Project Title" value={project.title} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group2">
                    <label htmlFor="genre">What genre is this story? </label>
                    <select value={project.genreId} name="genreId" id="genreId" onChange={handleControlledInputChange} className="form-control" >
                        <option value="0">Select a Genre </option>
                        {genre.map(g => (
                            <option key={g.id} value={g.id}>
                                {g.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group3">
                    <label htmlFor="summary">Summary: </label>
                    <input type="text" id="summary" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Project summary" value={project.summary} />
                </div>
            </fieldset>
            <Link to={`/`}>
                <button type="button">Back</button>
            </Link>
            <button className="btn"
                onClick={handleClickSaveProject}>
                Save Project
            </button>
        </form>
    )
}
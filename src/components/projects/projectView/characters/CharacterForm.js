import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";
import { addCharacter, getAllTypes } from "../../../../modules/CharacterManager";
// import "./CharacterForm.css";
import { Link } from "react-router-dom";

export const CharacterForm = () => {

    const [character, setCharacter] = useState({
        name: "",
        typeId: 0,
        details: ""
    });

    const { projectId } = useParams();

    const [type, setType] = useState([]);

    const history = useHistory();

    const handleControlledInputChange = (event) => {
        const newCharacter = { ...character }
        let selectedVal = event.target.value
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }

        newCharacter[event.target.id] = selectedVal

        setCharacter(newCharacter)
    }

    useEffect(() => {
        getAllTypes()
            .then(typesFromAPI => {
                setType(typesFromAPI)
            });
    }, []);

    const handleClickSaveCharacter = (event) => {
        event.preventDefault()

        const newCharacterObj = {
            name: character.name,
            typeId: character.typeId,
            details: character.details,
            projectId: parseInt(projectId)
        }
        
        const typeId = character.typeId

        if (typeId === 0) {
            window.alert("Please choose a character type!")
        } else {
            addCharacter(newCharacterObj)
                .then(() => history.push(`/projects/${projectId}`))
        }
    }

    return (
        <form className="characterForm">
            <h2 className="projectForm__title">Add A Goal</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Character Name: </label>
                    <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Character Name" value={character.name} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="type">What roll will this character play? </label>
                    <select value={character.typeId} name="typeId" id="typeId" onChange={handleControlledInputChange} className="form-control">
                        <option value="0">Select a Type</option>
                        {type.map(t => (
                            <option key={t.id} value={t.id}>
                                {t.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="details">Character Details: </label>
                    <input type="text" id="details" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Character details" value={character.details} />
                </div>
            </fieldset>
            <Link to={`/projects/${projectId}`}>
                <button>Back</button>
            </Link>
            <button className="btn"
                onClick={handleClickSaveCharacter}>
                Save Character
            </button>
        </form>
    )
}
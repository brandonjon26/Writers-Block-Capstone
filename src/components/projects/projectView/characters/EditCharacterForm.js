import React, { useState, useEffect } from "react";
import { updateCharacter, getCharacterById, getAllTypes } from "../../../../modules/CharacterManager";
// import "./CharacterForm.css";
import { useHistory, useParams, Link } from "react-router-dom";

export const EditCharacterForm = () => {
    const [character, setCharacter] = useState({ name: "", typeId: 0, details: "", projectId: 0, id: 0});
    const [type, setType] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const { characterId } = useParams();
    const history = useHistory();

    const handleFieldChange = (event) => {
        const stateToChange = { ...character }
        let selectedVal = event.target.value
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }

        stateToChange[event.target.id] = selectedVal

        setCharacter(stateToChange)
    }

    const updateExistingCharacter = (event) => {
        event.preventDefault()
        setIsLoading(true);

        const editedCharacter = {
            id: characterId,
            name: character.name,
            typeId: character.typeId,
            details: character.details,
            projectId: character.projectId
        };

        updateCharacter(editedCharacter)
            .then(() => history.push(`/projects/${character.projectId}`))
    };

    useEffect(() => {
        getCharacterById(characterId)
            .then(character => {
                setCharacter(character);
                setIsLoading(false);
            });
    }, [characterId]);

    useEffect(() => {
        getAllTypes()
            .then(typesFromAPI => {
                setType(typesFromAPI);
                setIsLoading(false);
            });
    }, []);

    return (
        <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <label htmlFor="name">Character Name</label>
                        <input 
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="name"
                            value={character.name}
                        />

                        <label htmlFor="typeId">Select-A-Type</label>
                        <select 
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="typeId"
                            value={character.typeId}
                            >
                            {type.map(t =>
                                <option
                                key={t.id}
                                value={t.id}>{t.name}
                                </option>
                            )}
                        </select>

                        <label htmlFor="details">Character Details</label>
                        <input 
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="details"
                            value={character.details}
                        />

                    </div>
                    <div className="alignRight">
                        <Link to={`/projects/${character.projectId}`}>
                            <button>Back</button>
                        </Link>
                    </div>
                    <div className="alignRight">
                        <button 
                            type="button" disabled={isLoading}
                            onClick={updateExistingCharacter}
                            className="btn"
                        >Save</button>
                    </div>
                </fieldset>
            </form>
        </>
    );
}
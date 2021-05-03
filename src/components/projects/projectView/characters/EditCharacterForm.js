import React, { useState, useEffect } from "react";
import { updateCharacter, getCharacterById, getAllTypes } from "../../../../modules/CharacterManager";
// import "./CharacterForm.css";
import { useHistory, useParams, Link } from "react-router-dom";

export const EditCharacterForm = () => {
    const [character, setCharacter] = useState({ name: "", details: ""});
    const [type, setType] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const { characterId } = useParams();
    const { typeId } = useParams();
    const { projectId } = useParams();
    const history = useHistory();

    const handleFieldChange = (event) => {
        const stateToChange = { ...character };
        stateToChange[event.target.id] = event.target.value;
        setCharacter(stateToChange);
    };

    const updateExistingCharacter = (event) => {
        event.preventDefault()
        setIsLoading(true);

        const editedCharacter = {
            id: characterId,
            id2: typeId,
            name: character.name,
            typeId: character.typeId,
            details: character.details
        };

        updateCharacter(editedCharacter)
            .then(() => history.push(`/projects/${projectId}`))
    };

    useEffect(() => {
        getCharacterById()
            .then(character => {
                setCharacter(character);
                setIsLoading(false);
            });
    }, []);

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
                        <input 
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="name"
                            value={character.name}
                        />
                        <label htmlFor="name">Character Name</label>

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
                        <label htmlFor="typeId">Select-A-Type</label>

                        <input 
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="details"
                            value={character.name}
                        />
                        <label htmlFor="details">Character Details</label>

                    </div>
                    <div className="alignRight">
                        <Link to={`/projects/${projectId}`}>
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
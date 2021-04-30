import React, { useState, useEffect } from "react";
import { CharacterCard } from "./CharacterCard";
import { getAllCharactersByProject, deleteCharacter } from "../../../../modules/CharacterManager";
import { useHistory } from "react-router";

export const CharacterList = ({ projectId }) => {

    const [characters, setCharacters] = useState([]);

    const history = useHistory();

    const getCharactersByProjectId = (id) => {
        return getAllCharactersByProject(id)
            .then(charactersFromAPI => {
                setCharacters(charactersFromAPI)
            });
    };

    const handleDeleteCharacter = id => {
        deleteCharacter(id)
            .then(() => getAllCharactersByProject(projectId).then(setCharacters));
    };

    useEffect(() => {
        getCharactersByProjectId(projectId);
    }, [projectId]);

    return (
        <>
            <div id="characters" className="containers-cards">
                <section className="section-content">
                    <button type="button"
                        className="btn"
                        onClick={() => { history.push("/characters/create") }}>
                        Create A Character
                    </button>
                    {characters.map(character => <CharacterCard 
                        key={character.id}
                        character={character}
                        handleDeleteCharacter={handleDeleteCharacter}
                        />)}
                </section>
            </div>
        </>
    )
}
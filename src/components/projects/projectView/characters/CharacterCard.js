import React from "react";
// import "./CharacterCard.css";
import { Link } from "react-router-dom";

export const CharacterCard = ({ character, handleDeleteCharacter, projectId }) => {
    return (
        <div className="card">
            <div className="card-content">
                <div className="characters">
                    <div className="character">
                        <h4>Name: {character.name}</h4>
                        <p>Type: {character.type.name}</p>
                        <p>Details: {character.details}</p>
                        <Link to={`/characters/edit/${character.id}`}>
                            <button type="button">Edit</button>
                        </Link>
                        <button type="button" onClick={() => handleDeleteCharacter(character.id)}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
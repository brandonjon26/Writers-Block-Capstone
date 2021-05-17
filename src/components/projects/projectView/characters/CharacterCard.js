import React from "react";
import "./CharacterCard.css";
import { Link } from "react-router-dom";

export const CharacterCard = ({ character, handleDeleteCharacter, projectId }) => {
    return (
        <div className="card">
            <div className="card-content">
                <div className="characters">
                    <div className="character">
                        <h4 className="characterName">Name: {character.name}</h4>
                        <p className="characterType">Type: {character.type.name}</p>
                        <p className="characterDetails">Details: {character.details}</p>
                        <Link to={`/characters/edit/${character.id}`}>
                            <button type="button" className="characterEdit">Edit</button>
                        </Link>
                        <button type="button" className="characterDelete" onClick={() => handleDeleteCharacter(character.id)}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
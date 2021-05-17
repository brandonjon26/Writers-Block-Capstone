import React from "react";
import "./NoteCard.css";

export const NoteCard = ({ note, handleDeleteNote }) => {
    return (
        <div className="card">
            <div className="card-content">
                <div className="notes">
                    <div className="note">
                        <p className="noteText">Note: {note.text}</p>
                        <button type="button" className="noteDelete" onClick={() => handleDeleteNote(note.id)}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
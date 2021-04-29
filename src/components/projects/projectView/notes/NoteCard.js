import React from "react";
// import "/Note.css";

export const NoteCard = ({ note, handleDeleteNote }) => {
    return (
        <div className="card">
            <div className="card-content">
                <div className="notes">
                    <div className="note">
                        <p>Note: {note.text}</p>
                        <button type="button" onClick={() => handleDeleteNote(note.id)}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
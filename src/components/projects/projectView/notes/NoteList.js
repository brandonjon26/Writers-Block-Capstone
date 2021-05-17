import React, { useState, useEffect } from "react";
import { NoteCard } from "./NoteCard";
import { getAllNotesByProject, deleteNote } from "../../../../modules/NoteManager";
import { useHistory } from "react-router";
import "./NoteList.css";

export const NoteList = ({ projectId }) => {

    const [notes, setNotes] = useState([]);

    const history = useHistory();

    const getNotesByProjectId = (id) => {
        return getAllNotesByProject(id)
            .then(notesFromAPI => {
                setNotes(notesFromAPI)
            });
    };

    const handleDeleteNote = id => {
        deleteNote(id)
            .then(() => getAllNotesByProject(projectId).then(setNotes));
    };

    useEffect(() => {
        getNotesByProjectId(projectId);
    }, [projectId]);

    return (
        <>
            <div id="notes" className="container">
                <section className="section-content">
                    <div className="noteHeader">
                        <h4>Notes</h4>
                        <button type="button"
                            className="btn"
                            onClick={() => { history.push(`/notes/create/${projectId}`) }}>
                            Add A Note
                        </button>
                    </div>
                    {notes.map(note => <NoteCard
                        key={note.id}
                        note={note}
                        handleDeleteNote={handleDeleteNote}
                    />)}
                </section>
            </div>
        </>
    )
}
import React, { useState } from "react";
import { useParams, useHistory } from "react-router";
import { addNote } from "../../../../modules/NoteManager";
import "./NoteForm.css";
import { Link } from "react-router-dom";

export const NoteForm = () => {

    const [note, setNote] = useState({
        text: ""
    });

    const { projectId } = useParams();

    const history = useHistory();

    const handleControlledInputChange = (event) => {
        const newNote = { ...note }
        let selectedVal = event.target.value
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }

        newNote[event.target.id] = selectedVal

        setNote(newNote)
    }

    const handleClickSaveNote = (event) => {
        event.preventDefault()

        const newNoteObj = {
            text: note.text,
            projectId: parseInt(projectId)
        }

        addNote(newNoteObj)
            .then(() => history.push(`/projects/${projectId}`))
    }

    return (
        <form className="noteForm">
            <h2 className="noteForm__title">Take Notes!!</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="text">What's on your mind? </label>
                    <input type="text" id="text" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Note text" value={note.text} />
                </div>
            </fieldset>
            <Link to={`/projects/${projectId}`}>
                <button>Back</button>
            </Link>
            <button className="btn"
                onClick={handleClickSaveNote}>
                Post Note
            </button>
        </form>
    )
}
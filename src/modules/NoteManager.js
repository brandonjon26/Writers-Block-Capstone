const remoteURL = "http://localhost:8088"

export const getAllNotesByProject = (projectId) => {
    return fetch(`${remoteURL}/notes?projectId=${projectId}`)
        .then(result => result.json())
}

export const getNoteById = (id) => {
    return fetch(`${remoteURL}/notes/${id}`)
        .then(res => res.json())
}

export const deleteNote = (id) => {
    return fetch(`${remoteURL}/notes/${id}`, {
        method: "DELETE"
    }).then(result => result.json())
}

export const addNote = (projectId) => {
    return fetch(`${remoteURL}/notes?projectId=${projectId}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(projectId)
    }).then(response => response.json())
}
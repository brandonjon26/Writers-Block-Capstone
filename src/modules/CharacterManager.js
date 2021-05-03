const remoteURL = "http://localhost:8088"

export const getAllCharactersByProject = (projectId) => {
    return fetch(`${remoteURL}/characters?projectId=${projectId}&_expand=type`)
        .then(result => result.json())
}

export const getCharacterById = (id) => {
    return fetch(`${remoteURL}/characters/${id}?_expand=type`)
        .then(res => res.json())
}

export const deleteCharacter = (id) => {
    return fetch(`${remoteURL}/characters/${id}`, {
        method: "DELETE"
    }).then(result => result.json())
}

export const addCharacter = (projectId) => {
    return fetch(`${remoteURL}/characters?projectId=${projectId}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(projectId)
    }).then(response => response.json())
}

export const getAllTypes = () => {
    return fetch(`${remoteURL}/types`)
        .then(result => result.json())
}

export const updateCharacter = (editedCharacter) => {
    return fetch(`${remoteURL}/characters/${editedCharacter.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(editedCharacter)
    }).then(data => data.json());
}
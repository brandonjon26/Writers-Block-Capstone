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
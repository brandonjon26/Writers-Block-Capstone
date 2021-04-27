const remoteURL = "http://localhost:8088"

export const getProjectById = (id) => {
    return fetch(`${remoteURL}/projects/${id}`)
        .then(res => res.json())
}

export const getAllProjects = () => {
    return fetch(`${remoteURL}/projects`)
        .then(result => result.json())
}

export const deleteProject = (id) => {
    return fetch(`${remoteURL}/projects/${id}`, {
        method: "DELETE"
    }).then(result => result.json())
}

export const addProject = (newProject) => {
    return fetch(`${remoteURL}/projects`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newProject)
    }).then(response => response.json())
}

export const getAllGenres = () => {
    return fetch(`${remoteURL}/genres`)
        .then(result => result.json())
}
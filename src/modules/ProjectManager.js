const remoteURL = "http://localhost:8088"

export const getProjectById = (id) => {
    return fetch(`${remoteURL}/projects/${id}?_expand=genre`)
        .then(res => res.json())
}

export const getAllProjects = () => {
    return fetch(`${remoteURL}/projects?_expand=genre`)
        .then(result => result.json())
}

export const getProjectsByUserId = (id) => {
    return fetch(`${remoteURL}/projects?userId=${id}&_expand=genre`)
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

export const updateProject = (editedProject) => {
    return fetch(`${remoteURL}/projects/${editedProject.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(editedProject)
    }).then(data => data.json());
}
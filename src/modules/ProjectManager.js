const remoteURL = "http://localhost:8088"

export const getProjectById = (id) => {
    return fetch(`${remoteURL}/projects/${id}`)
        .theb(res => res.json())
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
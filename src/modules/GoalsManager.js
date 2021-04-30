const remoteURL = "http://localhost:8088"

export const getAllGoalsByProject = (projectId) => {
    return fetch(`${remoteURL}/goals?projectId=${projectId}`)
        .then(result => result.json())
}

export const getGoalById = (id) => {
    return fetch(`${remoteURL}/goals/${id}`)
        .then(res => res.json())
}

export const deleteGoal = (id) => {
    return fetch(`${remoteURL}/goals/${id}`, {
        method: "DELETE"
    }).then(result => result.json())
}

export const addGoal = (projectId) => {
    return fetch(`${remoteURL}/goals?projectID=${projectId}`, {
        method: "POST",
        headers: {
            "content-Type": "application/json"
        },
        body: JSON.stringify(projectId)
    }).then(response => response.json())
}
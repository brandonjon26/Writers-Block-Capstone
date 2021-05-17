const remoteURL = "http://localhost:8088"

export const addBurst = (newBurst) => {
    return fetch(`${remoteURL}/bursts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newBurst)
    }).then(result => result.json())
}

export const getUserBursts = (userId) => {
    return fetch(`${remoteURL}/bursts?userId=${userId}`)
    // get all of the bursts where the userId equals the userId coming into the function above
        .then(res => res.json())
}

export const deleteBurst = (id) => {
    return fetch(`${remoteURL}/bursts/${id}`, {
        method: "DELETE"
    }).then(result => result.json())
}

export const getBurstById = (id) => {
    return fetch(`${remoteURL}/bursts/${id}`)
        .then(res => res.json())
}
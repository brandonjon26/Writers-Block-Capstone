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

export const getUserBursts = (id) => {
    return fetch(`${remoteURL}/bursts/${id}`)
        .then(res => res.json())
}
import React, { useState } from "react"
import { BurstForm } from "./BurstForm";

export const BurstHome = () => {

    const [userBursts, setUserBursts] = useState([])

    

    return (
        <>
            <div>
                <h2>Burst Home</h2>
            </div>
            <div>
                <BurstForm />
            </div>
            <div>
                <h2>My Bursts!</h2>
                {userBursts.map(burst => <h3>{burst.title}</h3>)}
            </div>
        </>
    )
}
import React, { useState, useEffect } from "react";
import { BurstForm } from "./BurstForm";
import { BurstCard } from "./BurstCard";
import { getUserBursts, deleteBurst } from "../../modules/BurstManager";
// import "./BurstHome.css";

export const BurstHome = () => {

    const [userBursts, setUserBursts] = useState([])

    const currentUserId = JSON.parse(sessionStorage.getItem("writersBlock_user")).id;

    const getBursts = () => {
        return getUserBursts(currentUserId)
            .then(burstsFromAPI => {
                setUserBursts(burstsFromAPI)
            });
    };

    const handleDeleteBurst = id => {
        deleteBurst(id)
            .then(() => getBursts());
    };

    useEffect(() => {
        getBursts();
    }, []);

    return (
        <>
            <div>
                <h2>Burst Home</h2>
            </div>
            <div>
                <BurstForm 
                    getBursts={getBursts}
                />
            </div>
            <div>
                <h2>My Bursts!</h2>
                {userBursts.map(burst => <BurstCard 
                    key={burst.id}
                    burst={burst}
                    handleDeleteBurst={handleDeleteBurst}
                />)}
            </div>
        </>
    );
};
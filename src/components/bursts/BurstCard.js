import React from "react";
// import "./BurstCard.css";

export const BurstCard = ({ burst, handleDeleteBurst }) => {
    return (
        <div className="card">
            <div className="card-content">
                <div className="bursts">
                    <div className="burst">
                        <h4>Burst: {burst.title}</h4>
                        <button type="button" onClick={() => handleDeleteBurst(burst.id)}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
import React from "react";
import { Link } from "react-router-dom";
import "./BurstCard.css";

export const BurstCard = ({ burst, handleDeleteBurst }) => {
    return (
        <div className="card">
            <div className="card-content">
                <div className="bursts">
                    <div className="burst">
                        <h4 className="burstTitle">{burst.title}</h4>
                        <div className="burstButtons">
                            <Link to={`/bursts/${burst.id}`}>
                                <button type="button" className="burstDetailButton">View Burst</button>
                            </Link>
                            <button type="button" className="burstDeleteButton" onClick={() => handleDeleteBurst(burst.id)}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
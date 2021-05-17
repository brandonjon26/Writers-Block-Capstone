import React from "react";
import "./GoalCard.css";

export const GoalCard = ({ goal, handleDeleteGoal }) => {
    return (
        <div className="card">
            <div className="card-content">
                <div className="goals">
                    <div className="goal">
                        <p className="goalDescription">Goal: {goal.description}</p>
                        <p className="goalStart">Start Date: {goal.startDate}</p>
                        <p className="goalComplete">To be completed by: {goal.targetCompletionDate}</p>
                        <button type="button" className="goalDelete" onClick={() => handleDeleteGoal(goal.id)}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};






























                        // <Link to={`/projects/${goal.id}/edit`}>
                        //     <button type="button">Edit</button>
                        // </Link>
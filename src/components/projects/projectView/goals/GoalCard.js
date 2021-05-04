import React from "react";
// import "./GoalCard.css";
// import { Link } from "react-router-dom";

export const GoalCard = ({ goal, handleDeleteGoal }) => {
    return (
        <div className="card">
            <div className="card-content">
                <div className="goals">
                    <div className="goal">
                        <p>Goal: {goal.description}</p>
                        <p>Start Date: {goal.startDate}</p>
                        <p>To be completed by: {goal.targetCompletionDate}</p>
                        <button type="button" onClick={() => handleDeleteGoal(goal.id)}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};






























                        // <Link to={`/projects/${goal.id}/edit`}>
                        //     <button type="button">Edit</button>
                        // </Link>
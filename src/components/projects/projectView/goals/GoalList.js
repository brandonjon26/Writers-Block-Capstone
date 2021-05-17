import React, { useState, useEffect } from "react";
import { GoalCard } from "./GoalCard";
import { getAllGoalsByProject, deleteGoal } from "../../../../modules/GoalsManager";
import { useHistory } from "react-router";
import "./GoalList.css";

export const GoalList = ({ projectId }) => {

    const [goals, setGoals] = useState([]);

    const history = useHistory();

    const getGoalsByProjectId = (id) => {
        return getAllGoalsByProject(id)
            .then(goalsFromAPI => {
                setGoals(goalsFromAPI)
            });
    };

    const handleDeleteGoal = id => {
        deleteGoal(id)
            .then(() => getAllGoalsByProject(projectId).then(setGoals));
    };

    useEffect(() => {
        getGoalsByProjectId(projectId);
    }, [projectId]);

    return (
        <>
            <div id="goals" className="cards">
                <section className="section-content">
                    <div className="goalHeader">
                        <h4>Goals</h4>
                        <button type="button"
                            className="btn"
                            onClick={() => { history.push(`/goals/create/${projectId}`) }}>
                            Add A Goal
                        </button>
                    </div>
                    {goals.map(goal => <GoalCard
                        key={goal.id}
                        goal={goal}
                        handleDeleteGoal={handleDeleteGoal}
                    />)}
                </section>
            </div>
        </>
    )
}
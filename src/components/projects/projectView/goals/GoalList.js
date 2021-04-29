import React, { useState, useEffect } from "react";
import { GoalCard } from "./GoalCard";
import { getAllGoalsByProject, deleteGoal } from "../../../../modules/GoalsManager";
import { useHistory } from "react-router";

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
            <div id="goals" className="container-cards">
                <section className="section-content">
                    <button type="button"
                        className="btn"
                        onClick={() => { history.push("/goals/create") }}>
                        Add A Goal
                    </button>
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
import React, { useState, UseEffect, useEffect } from "react";
import { GoalCard } from "./GoalCard";
import { getAllGoals, getGoalById, deleteGoal } from "../../../../modules/GoalManager";
import { useHistory } from "react-router";

export const GoalList = () => {

    const [goals, setGoals] = useState([]);

    let history = useHistory();

    const getGoals = () => {
        return getAllGoals()
            .then(goalsFromAPI => {
                setGoals(goalsFromAPI)
            });
    };

    const handleDeleteGoal = id => {
        deleteGoal(id)
            .then(() => getAllGoals().then(setGoals));
    };

    useEffect(() => {
        getGoals();
    }, []);

    return (
        <>
            <div className="container-cards">
                <section className="section-content">
                    <button type="button"
                        className="btn"
                        onClick={() => { history.push("/goals/create") }}>
                            Add A Goal
                        </button>
                </section>
                {goals.map(goal => <GoalCard 
                    key={goal.id}
                    goal={goal}
                    handleDeleteGoal={handleDeleteGoal}
                />)}
            </div>
        </>
    )
}
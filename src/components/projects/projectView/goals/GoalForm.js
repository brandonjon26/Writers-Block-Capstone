import React, { useState } from "react";
import { useParams, useHistory } from "react-router";
import { addGoal } from "../../../../modules/GoalsManager";
import "./GoalForm.css";
import { Link } from "react-router-dom";

export const GoalForm = () => {

    const [goal, setGoal] = useState({
        description: "",
        startDate: "",
        targetCompletionDate: ""
    });

    const { projectId } = useParams();

    const history = useHistory();

    const handleControlledInputChange = (event) => {
        const newGoal = { ...goal }
        let selectedVal = event.target.value
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }

        newGoal[event.target.id] = selectedVal

        setGoal(newGoal)
    }

    const handleClickSaveGoal = (event) => {
        event.preventDefault()

        const newGoalObj = {
            description: goal.description,
            startDate: goal.startDate,
            targetCompletionDate: goal.targetCompletionDate,
            projectId: parseInt(projectId),
        }

        addGoal(newGoalObj)
            .then(() => history.push(`/projects/${projectId}`))
    }

    return (
        <form className="goalForm">
            <h2 className="goalForm__title">Add A Goal</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Describe the goal </label>
                    <input type="text" id="description" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Goal Description" value={goal.description} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group2">
                    <label htmlFor="startDate">Start Date? </label>
                    <input type="date" id="startDate" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Goal startDate" value={goal.startDate} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group3">
                    <label htmlFor="targetCompletionDate">End Date? </label>
                    <input type="date" id="targetCompletionDate" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Goal targetCompletionDate" value={goal.targetCompletionDate} />
                </div>
            </fieldset>
            <Link to={`/projects/${projectId}`}>
                <button>Back</button>
            </Link>
            <button className="btn"
                onClick={handleClickSaveGoal}>
                Save Goal  
            </button>
        </form>
    )
}
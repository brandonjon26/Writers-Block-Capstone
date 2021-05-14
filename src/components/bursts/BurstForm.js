import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { addBurst } from "../../modules/BurstManager";
import { Link } from "react-router-dom";
// import "./BurstForm.css";

export const BurstForm = () => {

    const currentUser = JSON.parse(sessionStorage.getItem("writersBlock_user")).id;

    const [burst, setBurst] = useState({
        title: "",
        burst: "",
        userId: parseInt(currentUser)
    });

    const history = useHistory([]);

    const handleControlledInputChange = (event) => {
        const newBurst = { ...burst }
        let selectedVal = event.target.value
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }

        newBurst[event.target.id] = selectedVal

        setBurst(newBurst)
    }

    const handleClickSaveBurst = (event) => {
        event.preventDefault()

        const newBurstObj = {
            title: burst.title,
            burst: burst.burst,
            // userId: parseInt(userId)
        }

        addBurst(newBurstObj)
            .then(() => history.push(`/bursts`))
    }

    return (
        <form className="burstForm">
            <fieldset>
                <h3 className="burstform__title"></h3>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="burstTitle">Title </label>
                    <input type="text" id ="burstTitle" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Burst title" value={burst.title} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group2">
                    <label htmlFor="burstWrite">Time To Burst! </label>
                    <textarea type="text" id="burstWrite" name="burstWrite" rows="50" cols="100" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholde="Burst write" value={burst.burst}  />
                </div>
            </fieldset>
            <button className="btn"
                onClick={handleClickSaveBurst}>
                Save Burst
            </button>
        </form>
    )
}

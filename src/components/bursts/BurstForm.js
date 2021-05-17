import React, { useState, useEffect } from "react";
import { addBurst } from "../../modules/BurstManager";
// import "./BurstForm.css";

export const BurstForm = ({ getBursts }) => {

    const currentUser = JSON.parse(sessionStorage.getItem("writersBlock_user")).id;

    const initialBurst = {
        title: "",
        burst: "",
        userId: parseInt(currentUser)
    }

    const [burst, setBurst] = useState(initialBurst);

    const handleControlledInputChange = (event) => {
        const newBurst = { ...burst }
        // the three dots = spread operator
        // making a shallow copy of the burst object from state
        let selectedVal = event.target.value
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }

        newBurst[event.target.id] = selectedVal

        setBurst(newBurst)
    }

    const handleClickSaveBurst = (event) => {
        event.preventDefault()

        addBurst(burst)
        // get user bursts (this will reload the list with the new burst)
            .then(getBursts)
            .then(() => setBurst(initialBurst))
            // anonymous function that updates the state of burst by passing in the values of initialBurst
    }

    return (
        <form className="burstForm">
            <fieldset>
                <h3 className="burstform__title"></h3>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="burstTitle">Title </label>
                    <input type="text" id="title" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Burst title" value={burst.title} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group2">
                    <label htmlFor="burstWrite">Time To Burst! </label>
                    <textarea type="text" id="burst" name="burstWrite" rows="15" cols="100" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholde="Burst write" value={burst.burst}  />
                </div>
            </fieldset>
            <button className="btn"
                onClick={handleClickSaveBurst}>
                Save Burst
            </button>
        </form>
    )
}

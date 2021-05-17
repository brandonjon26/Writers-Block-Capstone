import React from "react";
// import { useHistory } from "react-router-dom";
import "./SubNav.css";

export const SubNav = () => {
    // const history = useHistory()

    return (
        <ul className="subnav">
                <a className="subnav__link" href="#goals"> Goals </a>
        
                <a className="subnav__link" href="#notes"> Notes </a>
            
                <a className="subnav__link" href="#characters"> Characters </a>
        </ul>
    );
};
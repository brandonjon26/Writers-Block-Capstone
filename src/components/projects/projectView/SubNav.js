import React from "react";
// import { useHistory } from "react-router-dom";
// import "./NavBar.css";

export const SubNav = () => {
    // const history = useHistory()

    return (
        <ul className="subnav">
            <li className="subnav__item">
                <a className="subnav__link" href="#goals"> Goals </a>
            </li>
            <li className="subnav__item">
                <a className="subnav__link" href="#notes"> Notes </a>
            </li>
            <li className="subnav__item">
                <a className="subnav__link" href="#characters"> Characters </a>
            </li>
        </ul>
    );
};
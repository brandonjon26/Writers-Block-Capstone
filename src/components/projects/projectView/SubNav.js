import React from "react";
import { withRouter } from "react-router-dom";
import { Link, useHistory } from "react-router-dom";
// import "./NavBar.css";

export const SubNav = () => {
    const history = useHistory()

    return (
        <ul className="subnav">
            <li className="subnav__item">
                <Link className="subnav__link" to="/projects/:projectId(\d+)/goals"> Goals </Link>
            </li>
            <li className="subnav__item">
                <Link className="subnav__link" to="/projects/:projectId(\d+)/notes"> Notes </Link>
            </li>
            <li className="subnav__item">
                <Link className="subnav__link" to="/projects/:projectId(\d+)/characters"> Characters </Link>
            </li>
        </ul>
    );
};
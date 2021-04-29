import React from "react";
import { withRouter } from 'react-router-dom';
import { Link, useHistory } from "react-router-dom";
import "./NavBar.css";

export const NavBar = ({ clearUser, isAuthenticated }) => {
    const history = useHistory()

    const handleLogout = () => {
        clearUser();
        history.push("/")
    }

    return (
        <>
            {isAuthenticated
                ?
                <ul className="Navbar">
                    {isAuthenticated
                        ? <li className="navbar__item">
                            <Link className="navbar__link" to="/"> My Projects </Link>
                        </li>
                        : null}
                    {isAuthenticated
                        ? <li className="navbar__item">
                            <Link className="navbar__link" to="/bursts"> Bursts </Link>
                        </li>
                        : null}
                    {isAuthenticated
                        ? <li className="navbar__item">
                            <Link className="navbar__link" to="/login" onClick={handleLogout}> Logout </Link>
                        </li>
                        : null}
                </ul>
                : null}
        </>
    )
}

export default withRouter(NavBar)
import React from "react";
import { withRouter } from 'react-router-dom';
import { Link, useHistory } from "react-router-dom";
import "./NavBar.css";
import Logo from "./WritersBlock-logo.png";

export const NavBar = ({ clearUser, isAuthenticated }) => {
    const history = useHistory()

    const handleLogout = () => {
        clearUser();
        history.push("/")
    }

    return (
        <>
            <div className="navContainer">
                {isAuthenticated
                    ?
                    <ul className="Navbar">
                        <div className="topNav">
                            <img src={Logo}></img>
                            <div className="logout-image">
                                <li className="navbar__item test">
                                    <Link className="navbar__link logout_link" to="/login" onClick={handleLogout}> Logout </Link>
                                </li>
                            </div>
                        </div>
                        <div className="bottomNav">
                            <li className="navbar__item">
                                <Link className="navbar__link" to="/"> My Projects </Link>
                            </li>
                            <li className="navbar__item">
                                <Link className="navbar__link" to="/bursts"> Bursts </Link>
                            </li>
                        </div>
                    </ul>
                    : null}
            </div>
        </>
    )
}

export default withRouter(NavBar)
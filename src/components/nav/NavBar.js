import React from "react";
import { withRouter } from 'react-router-dom';
import { Link, useHistory } from "react-router-dom";
import "./NavBar.css";
import Logo from "./WritersBlock-logo.png";
import Icon from "./WritersBlock-Icon.png";

export const NavBar = ({ clearUser, isAuthenticated }) => {
    const history = useHistory()

    const handleLogout = () => {
        clearUser();
        history.push("/")
    }

    return (
        <>
            {isAuthenticated ?
                <div className="navContainer">
                    <img className="logo" src={Logo} />
                        <Link className="navbar__link" to="/"> My Projects </Link>
                        <Link className="navbar__link" to="/bursts"> Bursts </Link>
                    <div className="logout-image">
                        <img className="userIcon" src={Icon} />
                        <Link className="logout_link" to="/login" onClick={handleLogout}> Logout </Link>
                    </div>
                </div>
            : null}
        </>
    )
}

export default withRouter(NavBar)
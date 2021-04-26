import React, { useState } from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"

export const WritersBlock = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("writersBlock_user") !== null)

    const setAuthUser = (user) => {
        sessionStorage.setItem("writersBlock_user", JSON.stringify(user))
        setIsAuthenticated(sessionStorage.getItem("writersBlock_user") !== null)
    }

    const clearUser = () => {
        sessionStorage.clear();
        setIsAuthenticated(sessionStorage.getItem("writersBlock_user") !== null)
    }

    return (
        <>
            <NavBar clearUser={clearUser} isAuthenticated={isAuthenticated}/>
            <ApplicationViews setAuthUser={setAuthUser} isAuthenticated={isAuthenticated}/>
        </>
    )
}













    // <Route
    //   render={() => {
    //     if (sessionStorage.getItem("writersBlock_user")) {
    //       return (
    //         <>
    //           <NavBar />
    //           <ApplicationViews />
    //         </>
    //       )
    //     } else {
    //       return <Redirect to="/login" />;
    //     }
    //   }}
    // />

    // <Route path="/Login">
    //   <Login />
    // </Route>
    // <Route path="/Register">
    //   <Register />
    // </Route>
import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";


export const ApplicationViews = ({setAuthUser}) => {
    return (
        <>
            <Route exact path="/Login">
                <Login setAuthUser={setAuthUser} />
            </Route>

            <Route exact path="/Register">
                <Register setAuthUser={setAuthUser} />
            </Route>
        </>
    )
}
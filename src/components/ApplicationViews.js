import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";


export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/Login">
                <Login />
            </Route>

            <Route exact path="/Register">
                <Register />
            </Route>
        </>
    )
}
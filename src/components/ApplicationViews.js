import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { ProjectList } from "./projects/ProjectsList";
import { ProjectForm } from "./projects/NewProjectForm";
import { ProjectDetail } from "./projects/ProjectDetail";
import { GoalForm } from "./projects/projectView/goals/GoalForm";


export const ApplicationViews = ({isAuthenticated, setAuthUser}) => {
    return (
        <>
            <Route exact path="/Login">
                <Login setAuthUser={setAuthUser} />
            </Route>

            <Route exact path="/Register">
                <Register setAuthUser={setAuthUser} />
            </Route>

            <Route exact path="/">
                {isAuthenticated ? <ProjectList /> : <Redirect to="/login" />}
            </Route>

            <Route exact path="/projects/create">
                <ProjectForm />
            </Route>

            <Route exact path="/projects/:projectId(\d+)">
                <ProjectDetail />
            </Route>

            <Route exact path="/goals/create/:projectId(\d+)">
                <GoalForm />
            </Route>
        </>
    )
}
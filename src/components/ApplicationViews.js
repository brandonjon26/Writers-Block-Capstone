import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { ProjectList } from "./projects/ProjectsList";
import { ProjectForm } from "./projects/NewProjectForm";
import { ProjectDetail } from "./projects/ProjectDetail";
import { GoalForm } from "./projects/projectView/goals/GoalForm";
import { NoteForm } from "./projects/projectView/notes/NoteForm";
import { CharacterForm } from "./projects/projectView/characters/CharacterForm";
import { EditCharacterForm } from "./projects/projectView/characters/EditCharacterForm";
import { EditProjectForm } from "./projects/EditProjectForm";
import { BurstHome } from "./bursts/BurstHome";
import { BurstDetail } from "./bursts/BurstDetail";


export const ApplicationViews = ({ isAuthenticated, setAuthUser }) => {
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

            <Route exact path="/notes/create/:projectId(\d+)">
                <NoteForm />
            </Route>

            <Route exact path="/characters/create/:projectId(\d+)">
                <CharacterForm />
            </Route>

            <Route exact path="/characters/edit/:characterId(\d+)">
                <EditCharacterForm />
            </Route>

            <Route exact path="/projects/edit/:projectId(\d+)">
                <EditProjectForm />
            </Route>

            <Route exact path="/bursts">
                <BurstHome />
            </Route>

            <Route exact path="/bursts/:burstId(\d+)">
                <BurstDetail />
            </Route>
        </>
    )
}
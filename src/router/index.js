import {createBrowserRouter} from "react-router-dom";
import React from "react";
import AuthPage from "../pages/Auth";
import {AuthFormController} from "../controllers/AuthForm/AuthForm.controller";
import {RedirectHome} from "../hoc/RedirectHome";
import {RequireAuth} from "../hoc/RequireAuth";
import Home from "../pages/Home";
import HomeController from "../controllers/HomeController";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RedirectHome><AuthPage/></RedirectHome>,
        exact: true,
        children: [
            {
                path: "/",
                element: <AuthFormController autorization/>,
            },
            {
                path: '/registration',
                element: <AuthFormController registration/>
            }
        ],
    },
    {
        path: "/home",
        element: <RequireAuth><Home/></RequireAuth>,
        children: [
            {
                path: '',
                element: <HomeController></HomeController>
            }
        ]
    }
]);
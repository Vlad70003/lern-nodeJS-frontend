import {createBrowserRouter} from "react-router-dom";
import React from "react";
import AuthPage from "../pages/Auth";
import {AuthFormController} from "../controllers/AuthForm/AuthForm.controller";
import {RedirectHome} from "../hoc/RedirectHome";
import {RequireAuth} from "../hoc/RequireAuth";
import MainWrapper from "../pages/MainWrapper";
import HomeController from "../controllers/HomeController";
import {ListController} from "../controllers/ListController/ListController";

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
        element: <RequireAuth><MainWrapper/></RequireAuth>,
        children: [
            {
                path: '',
                element: <HomeController></HomeController>
            }
        ]
    },
    {
        path: "/list",
        element: <RequireAuth><MainWrapper/></RequireAuth>,
        children: [
            {
                path: '',
                element: <ListController></ListController>
            }
        ]
    }
]);
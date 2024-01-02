import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import {
    createBrowserRouter, Link, Outlet,
    RouterProvider,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import RootContainer from "./components/RootContainer";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import NewSession from "./components/NewSession";
import HomePage from "./components/HomePage/HomePage";
import {ThemeProvider} from "@mui/material";
import {theme} from "./theme";
import CharadesHome from "./components/Games/Charades/CharadesHome";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootContainer/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                element: <HomePage/>,
            },
            {
                path: "play",
                element: <Outlet/> ,
                children: [
                    {
                        path: "charades",
                        element: <CharadesHome/>
                    }

                ]
            }
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

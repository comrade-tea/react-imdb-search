import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.sass'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Root, { rootLoader } from "./routes/root";
// import Team, { teamLoader } from "./routes/team";
import MovieDetails from "@/components/pages/MovieDetails.jsx";
import TopRated from "@/components/pages/TopRated.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        // loader: rootLoader,
        children: [
            {
                path: "/top-rated",
                element: <TopRated />,
                // loader: teamLoader,
            },
            {
                path: "/movie/:id",
                element: <MovieDetails />,
                // loader: teamLoader,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.sass'
import {createBrowserRouter, Link, RouterProvider,} from "react-router-dom";

import Root, {rootLoader} from "./routes/root";
import MovieDetails, {MovieDetailsLoader} from "@/components/pages/MovieDetails.jsx";
import TopRated from "@/components/pages/TopRated.jsx";
import {QueryClient, QueryClientProvider} from "react-query";

const router = createBrowserRouter([
    {
        path: "*",
        element: <Root/>,
        // loader: rootLoader,
        handle: {crumb: () => <Link className="link" to="/">Home</Link>},
        children: [
            {
                path: "top-rated",
                element: <TopRated/>,
                // loader: teamLoader,
                handle: {crumb: () => <Link className="link" to="top-rated">Top rated</Link>}
            },
            {
                path: "movie/:id",
                element: <MovieDetails/>,
                handle: {crumb: (data) => <span>{data?.title}</span>},
                loader: MovieDetailsLoader,
            },
        ],
    },
    {
        path: "*",
        element: <div>404</div>
    }
]);

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router}/>
        </QueryClientProvider>
    </React.StrictMode>
)

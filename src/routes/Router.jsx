import {createBrowserRouter, Link, Outlet} from "react-router-dom";
import Root from "@/routes/root.jsx";
import MovieDetails, {MovieDetailsLoader} from "@/components/layout/MovieDetails.jsx";
import Home from "@/components/pages/Home.jsx";
import MovieList from "@/components/layout/MovieList.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        handle: {crumb: () => "home"},
        
        children: [
            {
                index: true,
                path: "",
                element: <Home/>
            },
            {
                path: "movies", 
                handle: {crumb: () => "movies"},
                children: [
                    {
                        index: true,
                        element: <h1>not root, but index</h1>,
                    },
                    {
                        path: "top-rated",
                        element: <MovieList category={"top_rated"}/>,
                        handle: {crumb: () => "top rated"}
                    },
                    {
                        path: "popular",
                        element: <MovieList category={"popular"}/>,
                        handle: {crumb: () => "popular"}
                    },
                    {
                        path: "now-playing",
                        element: <MovieList category={"now_playing"}/>,
                        handle: {crumb: () => "now playing"},
                    },
                    {
                        path: ":id",
                        element: <MovieDetails/>,
                        handle: {crumb: () => "movie details"}
                    }
                ]
            },
            
        ]
    }
]);

export default router;

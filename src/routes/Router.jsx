import {createBrowserRouter, Link, Outlet} from "react-router-dom";
import Root from "@/routes/root.jsx";
import MovieDetails, {MovieDetailsLoader} from "@/components/layout/MovieDetails.jsx";
import Home from "@/components/pages/Home.jsx";
import MovieCategory from "@/components/layout/MovieCategory.jsx";
import MovieIndex from "@/components/layout/MovieIndex.jsx";

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
                        element: <MovieIndex/>,
                    },
                    {
                        path: "top-rated",
                        element: <MovieCategory category={"top_rated"}/>,
                        handle: {crumb: () => "top rated"}
                    },
                    {
                        path: "popular",
                        element: <MovieCategory category={"popular"}/>,
                        handle: {crumb: () => "popular"}
                    },
                    {
                        path: "now-playing",
                        element: <MovieCategory category={"now_playing"}/>,
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

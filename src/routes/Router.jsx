import {createBrowserRouter, Link, Outlet} from "react-router-dom";
import Root from "@/routes/root.jsx";
import TopRated from "@/components/pages/TopRated.jsx";
import MovieDetails, {MovieDetailsLoader} from "@/components/pages/MovieDetails.jsx";
import Pager from "@/components/layout/Pager.jsx";
import Home from "@/components/pages/Home.jsx";
import Content from "@/components/layout/Content.jsx";

const router = createBrowserRouter([
    // {
    //     path: "*",
    //     element: <Root/>,
    //     // loader: rootLoader,
    //     handle: {crumb: () => <Link className="link" to="/">Home</Link>},
    //     children: [
    //         {
    //             path: "top-rated",
    //             element: <TopRated/>,
    //             // loader: teamLoader,
    //             handle: {crumb: () => <Link className="link" to="top-rated">Top rated</Link>}
    //         },
    //         {
    //             path: "movie/:id",
    //             element: <MovieDetails/>,
    //             handle: {crumb: (data) => <span>{data?.title}</span>},
    //             loader: MovieDetailsLoader,
    //         },
    //     ],
    // },
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
                        element: <Content category={"top_rated"}/>,
                        handle: {crumb: () => "top rated"}
                    },
                    {
                        path: "popular",
                        element: <Content category={"popular"}/>,
                        handle: {crumb: () => "popular"}
                    },
                    {
                        path: "now-playing",
                        element: <Content category={"now_playing"}/>,
                        handle: {crumb: () => "now playing"}
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

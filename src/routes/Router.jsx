import {createBrowserRouter, Link} from "react-router-dom";
import Root from "@/routes/root.jsx";
import TopRated from "@/components/pages/TopRated.jsx";
import MovieDetails, {MovieDetailsLoader} from "@/components/pages/MovieDetails.jsx";

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
]);

export default router;

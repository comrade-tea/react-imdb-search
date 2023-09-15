import { createBrowserRouter, Link, Outlet } from "react-router-dom";
import Root from "@/routes/root.jsx";
import MovieDetails, { MovieDetailsLoader } from "@/components/pages/MovieDetails.jsx";
import Home from "@/components/pages/Home.jsx";
import MovieCategory from "@/components/pages/MovieCategory.jsx";
import MovieIndex from "@/components/pages/MovieIndex";
import Discover from "@/components/pages/Discover.jsx";


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
				index: true,
				path: "/discover",
				element: <Discover/>
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
						element: <MovieCategory category={ "top_rated" }/>,
						handle: {crumb: () => "top rated"}
					},
					{
						path: "popular",
						element: <MovieCategory category={ "popular" }/>,
						handle: {crumb: () => "popular"}
					},
					{
						path: "now-playing",
						element: <MovieCategory category={ "now_playing" }/>,
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

import { createBrowserRouter, Link, Outlet } from "react-router-dom";
import Root from "@/routes/root.jsx";
import MovieDetailsPage, { MovieDetailsLoader } from "@/components/pages/MovieDetailsPage.jsx";
import Home from "@/components/pages/Home.jsx";
import MovieByCategoryPage from "@/components/pages/MovieByCategoryPage.jsx";
import SearchPage from "@/components/pages/SearchPage.jsx";
import DiscoverPage from "@/components/pages/DiscoverPage.jsx";


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
				element: <DiscoverPage/>
			},
			{
				index: true,
				path: "/search",
				element: <SearchPage/>,
			},

			{
				path: "category",
				handle: {crumb: () => "category"},
				children: [
					{
						path: "top-rated",
						element: <MovieByCategoryPage category={"top_rated"}/>,
						handle: {crumb: () => "top rated"}
					},
					{
						path: "popular",
						element: <MovieByCategoryPage category={"popular"}/>,
						handle: {crumb: () => "popular"}
					},
					{
						path: "now-playing",
						element: <MovieByCategoryPage category={"now_playing"}/>,
						handle: {crumb: () => "now playing"},
					},

				]
			},

			{
				path: "movie/:id",
				element: <MovieDetailsPage/>,
				handle: {crumb: () => "movie details"}
			}
		]
	}
]);

export default router;

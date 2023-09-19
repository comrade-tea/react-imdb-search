import React from 'react'
import { Link } from "react-router-dom";
import GridCards from "@/components/layout/GridCards.jsx";


const LayoutWithSidebar = ({sidebarContent, movies}) => {
	return (
		<div className="grid grid-cols-[340px_minmax(900px,_1fr)] gap-10 relative">
			<aside className="panel">
				{sidebarContent}
			</aside>

			<div className="panel">
				<div className="flex mb-10">
					<h2 className="text-xl font-semibold">Total results: {movies?.total_results}</h2>
					
					<Link to={"https://developer.themoviedb.org/reference/search-movie"} target={"_blank"}
							className="link ml-auto">API</Link>
				</div>

				<GridCards movies={movies?.results}/>
			</div>
		</div>
	)
}

export default LayoutWithSidebar

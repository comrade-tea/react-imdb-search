import React, { useCallback, useState } from 'react'
import { useQuery } from "react-query";
import { getGenres, getMoviesByDiscoverQ } from "@/api/getData.js";
import LayoutWithSidebar from "@/components/layout/LayoutWithSidebar.jsx";
import DiscoverForm from "@/components/layout/DiscoverForm.jsx";

const DiscoverPage = () => {
	const [search, setSearch] = useState({
		"with_cast": [],
		"with_genres": [], 
		"vote_average.gte": "",
		"primary_release_year": "",
		"adult": true,
		"page": 1,
	});

	const {data: suitableMovies} = useQuery({
			queryKey: search,
			queryFn: () => getMoviesByDiscoverQ({...search}),
		}
	)

	return (
		<LayoutWithSidebar
			sidebarContent={<DiscoverForm search={search} setSearch={setSearch}/>}
			movies={suitableMovies}
		/>
	)
}
export default DiscoverPage


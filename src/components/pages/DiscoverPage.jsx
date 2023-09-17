import React, { useCallback, useState } from 'react'
import { useQuery } from "react-query";
import { getGenres, getMoviesByDiscoverQ } from "@/api/getData.js";
import LayoutWithSidebar from "@/components/layout/LayoutWithSidebar.jsx";
import DiscoverForm from "@/components/layout/DiscoverForm.jsx";

const DiscoverPage = () => {
	const [search, setSearch] = useState({
		adult: true,
		genres: [],
		with_cast: [],
		vote_average: Number,
		year: "",
		page: 1,
	});

	const {data: suitableMovies} = useQuery(
		[`search-${search.query}`, search.page, search.adult, search.year],
		() => getMoviesByDiscoverQ({...search}),
	)

	return (
		<LayoutWithSidebar
			sidebarContent={<DiscoverForm search={search} setSearch={setSearch}/>}
			movies={suitableMovies}
		/>
	)
}
export default DiscoverPage


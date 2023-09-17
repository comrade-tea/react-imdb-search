import SearchForm from "@/components/layout/SearchForm.jsx"
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getMoviesBySearchQ } from "@/api/getData.js";
import { Link } from "react-router-dom";
import LayoutWithSidebar from "@/components/layout/LayoutWithSidebar.jsx";

const SearchPage = () => {
	const [search, setSearch] = useState({
		include_adult: true,
		query: "",
		year: "",
		page: 1,
	});


	const {data: movies} = useQuery(
		[`search-${search.query}`, search.page, search.adult, search.year],
		() => getMoviesBySearchQ({...search}),
	)

	return (
		<LayoutWithSidebar
			sidebarContent={<SearchForm search={search} setSearch={setSearch}/>}
			movies={movies}
		/>
	)
}
export default SearchPage

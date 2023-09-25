import SearchForm from "@/components/layout/SearchForm.jsx"
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getMoviesBySearchQ } from "@/api/getData.js";
import LayoutWithSidebar from "@/components/layout/LayoutWithSidebar.jsx";
import { useSearchParams } from "react-router-dom";

const SearchPage = () => {
   const [searchParams, setSearchParams] = useSearchParams();
   const searchPage = searchParams.get("page") ?? 1;
   
   const [pagerNav, setPagerNav] = useState({})

   const [search, setSearch] = useState({
      query: "av",
      year: "",
      include_adult: true,
   });


   const {data: suitableMovies, isLoading} = useQuery(
      [search, searchPage],
      () => getMoviesBySearchQ({...search}, searchPage),
      {
         onSuccess: ({page, total_pages}) => {
            setPagerNav(prev => ({...prev, page, total_pages }))
         }
      }
   )

   return (
      <LayoutWithSidebar
         sidebarContent={<SearchForm search={search} setSearch={setSearch}/>}
         movies={suitableMovies}
         isLoading={isLoading}
         page={pagerNav.page}
         totalPages={pagerNav.total_pages}
      />
   )
}
export default SearchPage

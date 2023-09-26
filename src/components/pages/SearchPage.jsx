import SearchForm from "@/components/layout/SearchForm.jsx"
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getMoviesBySearchQ } from "@/api/getData.js";
import LayoutWithSidebar from "@/components/layout/LayoutWithSidebar.jsx";
import { useSearchParams } from "react-router-dom";

const SearchPage = () => {
   const [searchParams, setSearchParams] = useSearchParams({
      query: "av",
      year: "",
      include_adult: true,
      page: 1,
   });

   const [totalPages, setTotalPages] = useState(1); 
   
   const query = searchParams.get("query") ?? ""
   const year = searchParams.get("year") ?? ""
   const include_adult = searchParams.get("include_adult") === "true"
   const page = searchParams.get("page") ?? 1

   const {data: suitableMovies, isLoading} = useQuery(
      [query, year, include_adult, page],
      () => getMoviesBySearchQ({query, year, include_adult}, page),
      {
         onSuccess: ({page, total_pages}) => {
            // setSearchParams(prev => ({...prev, page }))
            setSearchParams({query, year, include_adult, page})
            setTotalPages(total_pages)
         }
      }
   )

   return (
      <LayoutWithSidebar
         sidebarContent={<SearchForm search={searchParams} setSearch={setSearchParams}/>}
         movies={suitableMovies}
         isLoading={isLoading}
         page={page}
         totalPages={totalPages}
      />
   )
}
export default SearchPage

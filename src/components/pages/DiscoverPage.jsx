import React, { useCallback, useState } from 'react'
import { useQuery } from "react-query";
import { getMoviesByDiscoverQ } from "@/api/getData.js";
import LayoutWithSidebar from "@/components/layout/LayoutWithSidebar.jsx";
import DiscoverForm from "@/components/layout/DiscoverForm.jsx";
import { useSearchParams } from "react-router-dom";

const DiscoverPage = () => {
   const [searchParams] = useSearchParams();
   const searchPage = searchParams.get("page") || 1;


   const [search, setSearch] = useState({
      "with_cast": [],
      "with_genres": [],
      "sort_by": "popularity.desc",
      "vote_average.gte": 0,
      "vote_average.lte": 10,
      "primary_release_year": "",
      "adult": true,
      "page": 1,
      "total_pages": 1,
   });
   
   

   const {data: suitableMovies, isLoading} = useQuery(
      [search, searchPage],
      () => getMoviesByDiscoverQ({...search}, searchPage),
      {
         onSuccess: ({page, total_pages}) => {
            setSearch(prev => ({...prev, page, total_pages }))
         }
      }
   )

   return (
      <LayoutWithSidebar
         sidebarContent={<DiscoverForm search={search} setSearch={setSearch}/>}
         movies={suitableMovies}
         page={search.page}
         totalPages={search.total_pages}
         isLoading={isLoading}
      />
   )
}
export default DiscoverPage


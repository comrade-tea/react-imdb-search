import React, { useCallback, useState } from 'react'
import { useQuery } from "react-query";
import { getMoviesByDiscoverQ } from "@/api/getData.js";
import LayoutWithSidebar from "@/components/layout/LayoutWithSidebar.jsx";
import DiscoverForm from "@/components/layout/DiscoverForm.jsx";
import { useSearchParams } from "react-router-dom";

const DiscoverPage = () => {
   const [searchParams] = useSearchParams();
   const searchPage = searchParams.get("page");

   const [pagerData, setPagerData] = useState({
      page: 1,
      total_pages: 1
   });

   const [search, setSearch] = useState({
      "with_cast": [],
      "with_genres": [],
      "sort_by": "popularity.desc",
      "vote_average.gte": 0,
      "vote_average.lte": 10,
      "primary_release_year": "",
      "adult": true,
   });

   const {data: suitableMovies} = useQuery(
      [search, searchPage],
      () => getMoviesByDiscoverQ({...search}, pagerData.page),
      {
         onSuccess: ({page, total_pages}) => {
            console.log("--DATA DATA DATA--", page, total_pages);
            setPagerData({page, total_pages})
         }
      }
   )

   return (
      <LayoutWithSidebar
         sidebarContent={<DiscoverForm search={search} setSearch={setSearch}/>}
         movies={suitableMovies}
         pageNum={pagerData.page}
         totalPages={pagerData.total_pages}
      />
   )
}
export default DiscoverPage


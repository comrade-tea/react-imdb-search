import { getList } from "@/api/getData.js";
import { useQuery } from "react-query";
import Pager from "@/components/layout/Pager.jsx";
import { useSearchParams } from "react-router-dom";
import GridCards from "@/components/layout/GridCards.jsx";
import { stringClean } from "@/utils/utils.js";
import Loader from "@/components/UI/Loader.jsx";
import { useState } from "react";

const MovieByCategoryPage = ({category}) => {
   const [searchParams] = useSearchParams();
   const searchPage = searchParams.get("page") || 1;

   const [currentPage, setCurrentPage] = useState(1);
   const [totalPages, setTotalPages] = useState(1);


   const {data, isLoading} = useQuery(
      [`movies-${category}`, searchPage],
      () => getList(category, searchPage),
      {
         onSuccess(data) {
            setCurrentPage(data?.page)
            setTotalPages(data?.total_pages)
         }
      }
   )
   
   return (
      <section>
         <div className="flex justify-between select-none mb-20">
            <h3 className="section-title" style={{marginBottom: 0}}>
               {stringClean(category)}
            </h3>

            <Pager currentPage={currentPage} totalPages={totalPages}/>
         </div>

         {isLoading ?
            <Loader/>
            :
            <>
               <GridCards movies={data.results} columns={4}/>

               <div className="mt-10">
                  <Pager currentPage={currentPage} totalPages={totalPages}/>
               </div>
            </>
         }
         
      </section>
   )
}
export default MovieByCategoryPage

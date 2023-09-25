import React, { useState } from 'react'
import { Link, useSearchParams } from "react-router-dom";
import GridCards from "@/components/layout/GridCards.jsx";
import Pager from "@/components/layout/Pager.jsx";


const LayoutWithSidebar = ({sidebarContent, movies, page, totalPages, isLoading}) => {
   // const [totalPages, setTotalPages] = useState(1);
   // setTotalPages(movies?.total_pages)
   // console.log("--pagenum and totalpages..--", pageNum, totalPages);

   return (
      <div className="grid grid-cols-[340px_minmax(900px,_1fr)] gap-10 relative">
         <aside className="panel">
            {sidebarContent}
         </aside>

         <div className="panel">
            <div className="flex justify-between mb-10">
               <h2 className="text-xl font-semibold">Total results: {movies?.total_results}</h2>
               
               <Pager currentPage={page} totalPages={totalPages}/>
            </div>

            <GridCards movies={movies?.results} isLoading={isLoading}/>

            <div className="mt-10">
               {!isLoading && <Pager currentPage={page} totalPages={totalPages}/>}
            </div>
         </div>
      </div>
   )
}

export default LayoutWithSidebar

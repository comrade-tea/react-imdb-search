import React, { useState } from 'react'
import { Link, useSearchParams } from "react-router-dom";
import GridCards from "@/components/layout/GridCards.jsx";
import Pager from "@/components/layout/Pager.jsx";


const LayoutWithSidebar = ({sidebarContent, movies = {}, page, totalPages, isLoading}) => {
   // console.log("--pages / totalpages--", page, totalPages)
   const {results, total_results} = movies;
   
   return (
      <div className="grid lg:grid-cols-[minmax(280px,1fr)_3fr] gap-10 relative">
         <aside className="sidebar panel">
            {sidebarContent}
         </aside>

         <div className="panel">
            <div className="flex justify-between mb-10">
               <h2 className="text-xl font-semibold">Total results: {total_results}</h2>
               
               <Pager currentPage={page} totalPages={totalPages}/>
            </div>

            <GridCards movies={results} isLoading={isLoading}/>

            <div className="mt-10">
               {!isLoading && <Pager currentPage={page} totalPages={totalPages}/>}
            </div>
         </div>
      </div>
   )
}

export default LayoutWithSidebar

import { Input } from "@/components/UI/Form/Input.jsx"
import { useCallback, useState } from "react";
import Checkbox from "@/components/UI/Form/Checkbox/Checkbox.jsx";
import { useSearchParams } from "react-router-dom";


const SearchForm = ({search, setSearch}) => {
   const [searchParams, setSearchParams] = useSearchParams()
   
   const include_adult = searchParams.get("include_adult") === "true"

   const searchHandler = (e) => {
      setSearchParams(prev => {
         prev.set("query", e.target.value)
         return prev
      })
   };

   const yearHandler = (e) => {
      setSearchParams(prev => {
         prev.set("year", e.target.value)
         return prev
      })
   };

   const onCheckboxChange = () => {
      setSearchParams((prev) => {
         prev.set("include_adult", !include_adult)
         return prev;
      })
   };

   return <div>
      <h3 className={"text-xl font-semibold mb-5"}>Search:</h3>

      <form>
         <ul className="flex flex-col gap-3">
            <li>
               <div className="mb-2">Movie title:</div>
               <Input
                  onChange={(e) => searchHandler(e)}
                  value={searchParams.get("query")}
                  attributes={{placeholder: "Movie title"}}
               />
            </li>

            <li>
               <div className="mb-2">Release year:</div>
               <Input
                  onChange={(e) => yearHandler(e)}
                  value={searchParams.get("year")}
                  attributes={{placeholder: `Primary year | ex: 1998`}}
               />
            </li>

            <li>
               <Checkbox label={"Include adult"} checked={include_adult} onChange={onCheckboxChange}/>
            </li>
         </ul>

         {/*<button className={"py-2 px-4 bg-accent rounded mt-10 w-full"} type={"submit"}>Submit</button>*/}
      </form>
   </div>
}

export default SearchForm

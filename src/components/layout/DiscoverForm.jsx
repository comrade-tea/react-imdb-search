import { Input } from "@/components/UI/Form/Input.jsx"
import { useCallback, useEffect, useState } from "react";
import Checkbox from "@/components/UI/Form/Checkbox/Checkbox.jsx";
import { useQuery } from "react-query";
import { getGenres, getPerson } from "@/api/getData.js";
import AutocompleteInput from "@/components/UI/Form/AutocompleteInput.jsx";
import SliderInput from "@/components/UI/Form/SliderInput.jsx";


const DiscoverForm = ({search, setSearch}) => {
   const [castQuery, setCastQuery] = useState("");

   const {data: genresData} = useQuery("genres", getGenres)
   const {data: personData} = useQuery({queryKey: castQuery, queryFn: () => getPerson(castQuery),})

   const sortBy = [
      "popularity.asc",
      "popularity.desc",
      "revenue.asc",
      "revenue.desc",
      "primary_release_date.asc",
      "primary_release_date.desc",
      "vote_average.asc",
      "vote_average.desc",
      "vote_count.asc",
      "vote_count.desc"
   ].map(item => ( {
      value: item,
      label: item
   } ));

   const castSelectHandler = (e) => {
      setSearch(prev => ( {
         ...prev,
         with_cast: e.map(item => item.value).join(",")
      } ))
   };
   
   const ratingHandler = e => {
      
      setSearch(prev => ({
         ...prev,
         "vote_average.gte": e[0],
         "vote_average.lte": e[1]
      }))
   }

   const genresHandler = (e) => {
      setSearch(prev => ( {...prev, with_genres: e.map(item => item.value)} ))
   };

   const sortHandler = (e) => {
      setSearch(prev => ( {...prev, sort_by: e.value} ))
   };

   const stringHandler = (e) => {
      setSearch(prev => ( {...prev, [e.target.name]: e.target.value} ))
   };

   const onCheckboxChange = useCallback(() => {
      setSearch(prev => ( {...prev, adult: !prev.adult} ))
   }, []);

   return (
      <>
         <h3 className={"text-xl font-semibold mb-5"}>Discover:</h3>

         <form>
            <ul className="flex flex-col gap-3">
               <li>
                  <div className="mb-2">With cast:</div>

                  <AutocompleteInput query={castQuery}
                                     setQuery={setCastQuery}
                                     options={personData?.results?.map(item => ( {
                                        value: item.id,
                                        label: item.name
                                     } ))}
                                     isMulti
                                     onUpdate={castSelectHandler}
                                     placeholder={"Start typing.."}
                  />
               </li>

               <li>
                  <div className="mb-2">Genres:</div>

                  <AutocompleteInput
                     options={genresData?.genres?.map(item => ( {
                        value: item.id,
                        label: item.name
                     } ))}
                     onUpdate={genresHandler}
                     isMulti
                     placeholder={"Select genres"}
                  />
               </li>

               <li>
                  <div className="mb-2">Sort by:</div>
                  <AutocompleteInput
                     options={sortBy}
                     defaultValue={sortBy[1]}
                     onUpdate={sortHandler}
                     placeholder={"Choose sort"}
                  />
               </li>

               <li>
                  <div className="mb-2">Rating:</div>
                  <SliderInput
                     min={0}
                     max={10}
                     defaultValue={[0, 10]}
                     step={0.1}
                     onAfterChange={ratingHandler}
                  />
                  {/*<Input*/}
                  {/*   name="vote_average.gte"*/}
                  {/*   onChange={(e) => stringHandler(e)}*/}
                  {/*   value={search["vote_average.gte"]}*/}
                  {/*   attributes={{placeholder: `Vote average from 0 to 10`}}*/}
                  {/*/>*/}
               </li>

               <li>
                  <div className="mb-2">Release year:</div>
                  <Input
                     name="primary_release_year"
                     onChange={(e) => stringHandler(e)}
                     value={search.primary_release_year}
                     attributes={{placeholder: `Primary year`}}
                  />
               </li>

               <li>
                  <Checkbox label={"Include adult"} checked={search.adult} onChange={onCheckboxChange}/>
               </li>
            </ul>

            <button className={"py-2 px-4 bg-accent rounded mt-10 w-full"} type={"submit"}>Submit</button>
         </form>
      </> )
}

export default DiscoverForm

import { Input } from "@/components/UI/Form/Input.jsx"
// import Select from "@/components/UI/Form/Select.jsx";
import { useCallback, useEffect, useState } from "react";
import Checkbox from "@/components/UI/Form/Checkbox/Checkbox.jsx";
import { useQuery } from "react-query";
import { getGenres, getPerson } from "@/api/getData.js";
import AutocompleteInput from "@/components/UI/Form/AutocompleteInput.jsx";


const DiscoverForm = ({search, setSearch}) => {
    const [castQuery, setCastQuery] = useState("");

    const {data: genresData} = useQuery("genres", getGenres)
    const {data: personData} = useQuery({queryKey: castQuery, queryFn: () => getPerson(castQuery), })


    const castSelectHandler = (e) => {
        setSearch(prev => ({...prev, with_cast: e.map(item => item.value).join(",")}))
    };

    const genresHandler = (e) => {
        console.log("--handler..--", e);
        setSearch(prev => ({...prev, with_genres: e.map(item => item.value)}))
    };

    const stringHandler = (e) => {
        setSearch(prev => ({...prev, [e.target.name]: e.target.value}))
    };

    const onCheckboxChange = useCallback(() => {
        setSearch(prev => ({...prev, adult: !prev.adult}))
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
                                           options={personData?.results?.map(item => ({
                                               value: item.id,
                                               label: item.name
                                           }))}
                                           onUpdate={castSelectHandler}
                                           placeholder={"Start typing.."}
                        />
                    </li>

                    <li>
                        <div className="mb-2">Genres:</div>

                        <AutocompleteInput
                            options={genresData?.genres?.map(item => ({
                                value: item.id,
                                label: item.name
                            }))}
                            onUpdate={genresHandler}
                            placeholder={"Select genres"}
                        />
                    </li>


                    <li>
                        <div className="mb-2">todo: Sorting select:</div>
                        <Input
                            name="vote_average.gte"
                            onChange={(e) => stringHandler(e)}
                            value={search["vote_average.gte"]}
                            attributes={{placeholder: `asc dsc`}}
                        />
                    </li>
                    
                    <li>
                        <div className="mb-2">Rating more than:</div>
                        <Input
                            name="vote_average.gte"
                            onChange={(e) => stringHandler(e)}
                            value={search["vote_average.gte"]}
                            attributes={{placeholder: `Vote average from 0 to 10`}}
                        />
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
        </>)
}

export default DiscoverForm

import {Input} from "@/components/UI/Form/Input.jsx"
import Select from "@/components/UI/Form/Select.jsx";
import {useCallback, useState} from "react";
import Checkbox from "@/components/UI/Form/Checkbox/Checkbox.jsx";



const SearchMovie = ({search, setSearch}) => {
    const searchHandler = (e) => {
        setSearch(prev => ({...prev, query: e.target.value}))
    };
    
    const yearHandler = (e) => {
        setSearch(prev => ({...prev, year: e.target.value}))
    };

    const onCheckboxChange = useCallback(() => {
        setSearch(prev => ({...prev, adult: !prev.adult}))
    }, []);

    return <div>
        <h3 className={"text-xl font-semibold mb-5"}>Search:</h3>

        <form>
            <ul className="flex flex-col gap-3">
                <li>
                    <Input
                        onChange={(e) => searchHandler(e)}
                        value={search.query}
                        attributes={{placeholder: "search.."}}
                    />
                </li>
                
                <li>
                    <Select/>
                </li>
                
                <li>
                    <div>Release year:</div>
                    <Input
                        onChange={(e) => yearHandler(e)}
                        value={search.year}
                        attributes={{placeholder: `Primary year | ex: 1998`}}
                    />
                </li>
                
                <li>
                    <Checkbox label={"Include adult"} checked={search.adult} onChange={onCheckboxChange}/>
                </li>
            </ul>
            
            <button className={"py-2 px-4 bg-accent rounded mt-10 w-full"} type={"submit"}>Submit</button>
        </form>
    </div>
}

export default SearchMovie

import SearchMovie from "@/components/layout/SearchMovie.jsx"
import {useState} from "react";
import {useQuery} from "react-query";
import {getMovies} from "@/api/getData.js";
import MovieList from "@/components/pages/MovieList.jsx";
import {Link} from "react-router-dom";

const MovieIndex = () => {
    const [search, setSearch] = useState({
        query: "",
        adult: true,
        page: 1,
        year: ""
    });
    
    const {data, isLoading} = useQuery(
        [`search-${search.query}`, search.page, search.adult, search.year],
        () => getMovies({...search}),
    )
    
    // todo: query for genres


    return (
        <div className="grid grid-cols-[260px_minmax(900px,_1fr)] gap-10 relative">
            <aside className="panel">
                <SearchMovie search={search} setSearch={setSearch}/>
            </aside>


            <div className="panel">
                <div className="flex mb-10">
                    <h2 className="text-xl font-semibold">Total results: {data?.total_results}</h2>
                    
                    <Link to={"https://developer.themoviedb.org/reference/search-movie"} target={"_blank"} className="link ml-auto">API</Link>
                </div>

                {data?.results?.length ?
                    <MovieList movies={data?.results}/>
                    :
                    <em>Try to fill sidebar / change parameters of searching</em>
                }
            </div>

        </div>
    )
}
export default MovieIndex

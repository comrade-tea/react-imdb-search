import {Input} from "@/components/UI/Form/Input.jsx";
import {getConfig, getTopRated} from "@/api/getData.js";
import {useQuery, useQueryClient} from "react-query";
import CardMovie from "@/components/cards/CardMovie.jsx";
import {useEffect} from "react";

const Content = () => {
    // Queries
    const queryClient = useQueryClient()
    // const query = useQuery('movies', getMovies)
    const {data, isLoading, isFetched} = useQuery('top-ratedQuery', getTopRated)
    // const config = useQuery("config", getConfig)
    
    return (
        <>
            <section>
                <h3 className="section-title">Results:</h3>
                {/*// ↓ extract ↓ */}
                <ul className="grid grid-cols-4 gap-[40px]">
                    {data && data.results.map(movie => (
                        <li key={movie.id}>
                            <CardMovie movie={movie}/>
                        </li>
                    ))}
                </ul>
            </section>

            <div className="mt-5 text-right">pagination? 1 \ 2 \ 3</div>
        </>
)
}
export default Content

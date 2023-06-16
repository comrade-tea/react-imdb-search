import Sidebar from "@/components/layout/Sidebar.jsx";
import {useQuery, useQueryClient} from "react-query";
import {getTopRated} from "@/api/getData.js";
import CardMovie from "@/components/cards/CardMovie.jsx";
import {data} from "autoprefixer";
import Pager from "@/components/layout/Pager.jsx";


const TopRated = () => {
    // Queries
    const queryClient = useQueryClient()
    // const query = useQuery('movies', getMovies)
    const {data, isLoading, isFetched} = useQuery('top-ratedQuery', getTopRated)
    // const config = useQuery("config", getConfig)

    return (
        <div className="flex gap-[20px]">
            <Sidebar/>

            <div className="flex-1">
                <section>
                    <h3 className="section-title">Results:</h3>
                    
                    <ul className="grid grid-cols-4 gap-[40px]">
                        {isFetched && data.results.map(movie => (
                            <li key={movie.id}>
                                <CardMovie movie={movie}/>
                            </li>
                        ))}
                    </ul>
                </section>

                {isFetched && <Pager/>}
            </div>
        </div>
    )
}
export default TopRated

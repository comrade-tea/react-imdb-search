import {Input} from "@/components/UI/Input.jsx";
import {getConfig, getTopRated} from "@/api/getData.js";
import {useQuery, useQueryClient} from "react-query";
import Card from "@/components/Card.jsx";

const Content = () => {
    // Queries
    const queryClient = useQueryClient()
    // const query = useQuery('movies', getMovies)
    const {data, isLoading, isFetched} = useQuery('topRatedQuery', getTopRated)
    // const config = useQuery("config", getConfig)

    return (
        <>
            <section>
                <h3 className="section-title">Search:</h3>
                <div>
                    <Input attributes={{placeholder: "Search by regex"}}/>
                </div>
            </section>

            <section>
                <h3 className="section-title">Results:</h3>
                {/*// ↓ extract ↓ */}
                <ul className="grid grid-cols-4 gap-[40px]">
                    {data && data.results.map(movie => (
                        <li key={movie.id}>
                            <Card movie={movie}/>
                        </li>
                    ))}
                </ul>
            </section>

            <div className="mt-5 text-right">pagination? 1 \ 2 \ 3</div>

            <div>
                {/*<h3 className="text-2xl">Related Projects</h3>*/}
            </div>
        </>
)
}
export default Content

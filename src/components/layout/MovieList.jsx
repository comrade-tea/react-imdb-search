import {getList} from "@/api/getData.js";
import {useQuery} from "react-query";
import CardMovie from "@/components/cards/CardMovie.jsx";
import Pager from "@/components/layout/Pager.jsx";
import {useSearchParams} from "react-router-dom";

const MovieList = ({category}) => {
    const [searchParams] = useSearchParams();
    const currentPage = searchParams.get("page");

    const {data, isLoading, isFetched} = useQuery(
        [`movies-${category}`, currentPage],
        () => getList(category, currentPage)
    )


    return (
        <>
            {isLoading &&
                <div className="custom-loader"></div>}

            {isFetched &&
                <section>
                    <div className="flex justify-between select-none mb-20">
                        <h3 className="section-title" style={{marginBottom: 0}}>{category.replace(/_/g, " ")}</h3>
                        <Pager currentPage={data?.page} totalPages={data?.total_pages}/>
                    </div>

                    <ul className="grid grid-cols-4 gap-[40px]">
                        {isFetched && data.results.map(movie => (
                            <li className="flex" key={movie.id}>
                                <CardMovie movie={movie}/>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-10">
                        <Pager currentPage={data?.page} totalPages={data?.total_pages}/>
                    </div>
                </section>}

        </>
    )
}
export default MovieList

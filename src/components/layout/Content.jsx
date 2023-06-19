import {Input} from "@/components/UI/Form/Input.jsx";
import {getConfig, getList} from "@/api/getData.js";
import {useQuery, useQueryClient} from "react-query";
import CardMovie from "@/components/cards/CardMovie.jsx";
import {useEffect} from "react";
import Pager from "@/components/layout/Pager.jsx";

const Content = ({category}) => {
    // Queries
    const {data, isLoading, isFetched} = useQuery(
        [`movies-${category}`],
        () => getList(category))
    
    return (
        <>
            <section>
                <h3 className="section-title">{category}</h3>
                
                <ul className="grid grid-cols-4 gap-[40px]">
                    {isFetched && data.results.map(movie => (
                        <li key={movie.id}>
                            <CardMovie movie={movie}/>
                        </li>
                    ))}
                </ul>
                
                <Pager/>
            </section>

        </>
)
}
export default Content

import {useNavigate, useParams} from "react-router-dom";
import {useQuery} from "react-query";
import {getMovie} from "@/api/getData.js";
import {toHoursAndMinutes} from "@/utils/utils.js";
import {FaArrowLeft} from "react-icons/fa";

import Plyr, {usePlyr} from "plyr-react";
import "plyr-react/plyr.css";
import {forwardRef, useState} from "react";
import Trailers from "@/components/sections/Trailers.jsx";

function Loader() {
    return <p>loading..</p>
}

const MovieDetails = () => {
    const [test, setTest] = useState(0);

    const {id} = useParams();
    const {data, isLoading, isFetched} = useQuery(['movieDetails', id], () => getMovie(id))
    const movieTime = toHoursAndMinutes(data?.runtime);

    const navigate = useNavigate();


    return (
        <div>
            {isLoading && <Loader/>}

            {isFetched &&
                <>
                    <button className="btn btn--light mb-10" onClick={() => navigate(-1)}>
                        <FaArrowLeft className={"mr-4"}/>
                        Назад
                    </button>

                    <div className="hero">
                        <img className="hero__img" src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
                             alt=""/>
                        <h1 className="hero__title text-4xl">{data.title}</h1>

                        <ul className="hero__genres genres">
                            {data?.genres?.map((lol) => (
                                <li className="genres__item" key={lol.id}>{lol.name}</li>)
                            )}
                        </ul>
                    </div>

                    <div className={"mt-[40px]"}>
                        <em>{data.tagline}</em>
                        <p className="my-5 max-w-[800px]">{data.overview}</p>
                    </div>

                    <div></div>

                    <button className="btn btn--light mt-5" onClick={() => setTest(test + 1)} type="button">
                        {/*скачать на рутрекере))*/}
                        {test}
                    </button>

                    <table>
                        <tbody>
                        <tr>
                            <td>runtime:</td>
                            <td>{movieTime.hours}: {movieTime.minutes}</td>
                        </tr>
                        <tr>
                            <td>adult:</td>
                            <td>{data.adult?.toString()}</td>
                        </tr>
                        <tr>
                            <td>rating:</td>
                            <td>{data.vote_average} / 10</td>
                        </tr>
                        </tbody>
                    </table>

                    {data.videos?.results?.length > 0 && <Trailers trailers={data.videos.results} />}
                </>
            }
        </div>
    )
}
export default MovieDetails

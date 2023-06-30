import {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useQuery} from "react-query";
import {getConfig, getMovie} from "@/api/getData.js";
import {toHoursAndMinutes} from "@/utils/utils.js";
import {FaArrowLeft, FaDownload, FaExternalLinkAlt, FaFilm, FaMagnet} from "react-icons/fa";
import Trailers from "@/components/sections/Trailers.jsx";
import Loader from "@/components/UI/Loader.jsx";

const MovieDetails = () => {
    const [test, setTest] = useState(0);
    
    const navigate = useNavigate();
    const {id} = useParams();
    const API_CONFIG = useQuery(["config"], getConfig)
    const {data, isLoading, isFetched} = useQuery([['movie', id], id], () => getMovie(id))
    
    const IMG_CONFIG = {
        base_url: API_CONFIG?.data?.images?.secure_base_url ?? "https://image.tmdb.org/t/p",
        backdrop_size: API_CONFIG?.data?.images?.poster_sizes[6] ?? "original",
    }
    
    const movieTime = toHoursAndMinutes(data?.runtime);
    const hasVideos = data?.videos?.results?.length > 0;

    return (
        <div>
            {isLoading && <Loader/>}
            
            {isFetched &&
                <>
                    <button className="btn btn--light mb-10" onClick={() => navigate(-1)}>
                        <FaArrowLeft className={"mr-4"}/> Назад
                    </button>

                    <div className="hero" style={{aspectRatio: "16/9"}}>
                        <img className="hero__img"
                             src={`${IMG_CONFIG.base_url}${IMG_CONFIG.backdrop_size}${data.backdrop_path}`}
                             alt=""/>
                        <h1 className="hero__title text-6xl font-bold">{data.title}</h1>

                        <ul className="hero__genres genres">
                            {data?.genres?.map((genre) => (
                                <li className="genres__item" key={genre.id}>
                                    <Link className="link" to="/movies">{genre.name}</Link>
                                </li>)
                            )}
                        </ul>
                    </div>

                    <div className="flex mt-[40px]">
                        <div className="flex-1">
                            <div>
                                <h4 className="subtitle">Overview:</h4>
                                <em>{data.tagline}</em>
                                <p className="my-5 max-w-[800px]">{data.overview}</p>
                            </div>

                            <h4 className="subtitle">Cast:</h4>
                            <ul className="list-inside list-disc">
                                {data.credits?.cast?.slice(0, 5).map(actor => (
                                    <li key={actor.id}>{actor.name}</li>)
                                )}
                            </ul>

                            <button className="btn btn--light mt-5" onClick={() => setTest(test + 1)} type="button">
                                <FaMagnet className="me-2"/> counter: {test}
                            </button>
                            <a className="btn btn--light mt-5" href={`https://www.imdb.com/title/${data.imdb_id}/`}
                               target="_blank" rel="noreferrer">
                                <FaExternalLinkAlt className="me-2"/>
                                фильм на imdb
                            </a>
                        </div>

                        <div className="basis-[330px] pl-[30px]">
                            <table className="table-lined">
                                <tbody>
                                <tr>
                                    <td>runtime:</td>
                                    <td>{movieTime.hours}h {movieTime.minutes}min</td>
                                </tr>
                                <tr>
                                    <td>adult:</td>
                                    <td>{data.adult?.toString()}</td>
                                </tr>
                                <tr>
                                    <td>rating:</td>
                                    <td>{data.vote_average} / 10</td>
                                </tr>
                                <tr>
                                    <td>release date:</td>
                                    <td>{data.release_date}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>


                    {hasVideos && 
                        <Trailers trailers={data.videos.results}/>}
                </>
            }
        </div>
    )
}
export default MovieDetails

function MovieDetailsLoader({params}) {
    return getMovie(params.id)
}

export {MovieDetailsLoader}

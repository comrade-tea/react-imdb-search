import {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useQuery} from "react-query";
import {getConfig, getMovie} from "@/api/getData.js";
import {toHoursAndMinutes} from "@/utils/utils.js";
import {FaArrowLeft, FaDownload, FaExternalLinkAlt, FaFilm, FaMagnet} from "react-icons/fa";
import Trailers from "@/components/sections/Trailers.jsx";

// import RutrackerApi from 'rutracker-api'
// import RutrackerApi from '@/api/rutracker'
import RutrackerApi from "@/api/rutracker";
import rutracker from "@/api/rutracker";

function Loader() {
    return <p>loading..</p>
}

const MovieDetails = () => {
    // useEffect(() => {
    //     try {
    //         const rutracker = new RutrackerApi("https://rutracker.org", {
    //             proxy: {
    //                 protocol: "http",
    //                 // protocol: "https",
    //                 host: "127.0.0.1",
    //                 port: "5173",
    //                 // auth: {
    //                 //     username: "ghostship",
    //                 //     password: "444887444"
    //                 // }
    //             }
    //         })
    //
    //         rutracker
    //             .login({username: "ghostship", password: "444887444"})
    //             .then(() => {
    //                 console.log('Authorized');
    //             })
    //             .catch(err => console.error(err));
    //
    //
    //     } catch (error) {
    //         console.info("----", error)
    //     }
    // }, [])
    

    //todo: тут скорее из лоадера закидывать данные, а не через react query?..
    const [test, setTest] = useState(0);

    const {id} = useParams();
    const {data, isLoading, isFetched} = useQuery(
        ['movieDetails', id],
        () => getMovie(id)
    )

    const movieTime = toHoursAndMinutes(data?.runtime);

    const navigate = useNavigate();

    const config = useQuery(["config"], getConfig)
    const BASE_URL = config?.data?.images?.secure_base_url ?? "https://image.tmdb.org/t/p";
    const BACKDROP_SIZE = config?.data?.images?.poster_sizes[6] ?? "original";

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
                             src={`${BASE_URL}${BACKDROP_SIZE}${data.backdrop_path}`}
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
                                <FaMagnet className="me-2"/>
                                скачать на рутрекере)) counter: {test}
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


                    {data.videos?.results?.length > 0 && <Trailers trailers={data.videos.results}/>}
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

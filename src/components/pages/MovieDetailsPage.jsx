import { ScrollRestoration, useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getConfig, getMovie } from "@/api/getData.js";
import { toHoursAndMinutes } from "@/utils/utils.js";
import { FaArrowLeft, FaExternalLinkAlt } from "react-icons/fa";
import Trailers from "@/components/sections/Trailers.jsx";
import Loader from "@/components/UI/Loader.jsx";

const MovieDetailsPage = () => {
   // const [test, setTest] = useState(0);

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

   const heroPosterSrc = `${IMG_CONFIG.base_url}${IMG_CONFIG.backdrop_size}${data?.backdrop_path ?? data?.poster_path}`;

   return (
      <>
         <ScrollRestoration/>

         <div>
            {isLoading && <Loader/>}

            {isFetched &&
               <>
                  <button className="btn btn--light mb-10" onClick={() => navigate(-1)}>
                     <FaArrowLeft className={"mr-4"}/> back
                  </button>

                  <div className="text-4xl mb-10 font-bold xs:hidden">{data.title}</div>

                  <div className="hero">
                     <h1 className="hero__title">{data.title}</h1>

                     <img className="hero__bg" src={heroPosterSrc} alt=""/>
                     <img className="hero__img" src={heroPosterSrc} alt=""/>

                     <ul className="hero__genres genres">
                        {data?.genres?.map((genre) => (
                              <li className="genres__item" key={genre.id}>{genre.name}</li>
                           )
                        )}
                     </ul>
                  </div>

                  <div className="flex flex-col-reverse gap-[30px] sm:flex-row mt-[40px]">
                     <div className="flex-1 ">
                        <div>
                           <h4 className="subtitle">Overview:</h4>
                           <em>{data.tagline}</em>
                           <p className="my-5 max-w-[800px]">{data.overview}</p>
                        </div>

                        <h4 className="subtitle">Cast:</h4>
                        <ul className="list-inside list-disc">
                           {data.credits?.cast?.slice(0, 5).map(actor => (
                              <li key={actor.id}>{actor.name}</li> )
                           )}
                        </ul>

                        <div className={"mt-20"}>
                           {/*<button className="btn btn--light mt-5" onClick={() => setTest(test + 1)} type="button">*/}
                           {/*   <FaMagnet className="me-2"/> counter: {test}*/}
                           {/*</button>*/}
                           {data.imdb_id &&
                              <a className="btn btn--light " href={`https://www.imdb.com/title/${data.imdb_id}/`}
                                 target="_blank" rel="noreferrer">
                                 <FaExternalLinkAlt className="me-2"/> movie on imdb
                              </a>}
                        </div>
                     </div>

                     <div className="basis-[330px]">
                        <table className="table-lined">
                           <tbody>
                           <tr className={"sm:hidden"}>
                              <td>genres:</td>
                              <td>
                                 {data?.genres?.map((genre) => (
                                    <span className="" key={genre.id}>{genre.name}, </span>
                                 ))}
                              </td>
                           </tr>
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
                              <td>
                                 {data.vote_average === 0 ?
                                    <>no rating</>
                                    :
                                    <>{data.vote_average} / 10</>
                                 }

                              </td>
                           </tr>
                           <tr>
                              <td>release date:</td>
                              <td>{data.release_date}</td>
                           </tr>
                           <tr>
                              <td>production:</td>
                              <td>{data.production_countries.map(country => country.iso_3166_1).join(", ")}</td>
                           </tr>
                           </tbody>
                        </table>
                     </div>
                  </div>


                  {hasVideos && <Trailers trailers={data.videos.results}/>}
               </>
            }
         </div>
      </>
   )
}
export default MovieDetailsPage

function MovieDetailsLoader({params}) {
   return getMovie(params.id)
}

export { MovieDetailsLoader }

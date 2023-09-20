import { Link } from "react-router-dom";
import MovieDetailsPage from "@/components/pages/MovieDetailsPage.jsx";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import notfoundImg from "@/assets/image-notfound.png"

const CardMovie = ({movie}) => {
   return (
      <Link to={`/movie/${movie.id}`} element={<MovieDetailsPage/>} className="card">
         <div className="card__img-w">
            <LazyLoadImage
               src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
               effect={movie.poster_path ? "blur" : null}
               width={280}
               height={420}
               placeholderSrc={notfoundImg}
            />
         </div>
         <div className="card__head">
            <div className="card__date">{movie.release_date}</div>
            <div className="card__rate">{movie.vote_average !== 0
               ? <>{movie.vote_average} / 10</>
               : <>unrated</>}
            </div>
         </div>
         <div className="card__title" title={movie.title}>{movie.title}</div>
      </Link>
   )
}
export default CardMovie

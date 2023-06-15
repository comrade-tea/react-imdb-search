import {Link} from "react-router-dom";
import MovieDetails from "@/components/pages/MovieDetails.jsx";

const CardMovie = ({movie}) => {
    return (
        <Link to={`/movie/${movie.id}`} element={<MovieDetails/>} className="card">
            <div className="card__img-w">
                <img className="card__img-w" 
                     src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
                     style={{aspectRatio: 2/3}}
                     alt={movie.title}/>
            </div>
            <div className="card__head">
                <div className="card__date">{movie.release_date}</div>
                <div className="card__rate">{movie.vote_average} / 10</div>
            </div>
            <div className="card__title">{movie.title}</div>
        </Link>
    )
}
export default CardMovie

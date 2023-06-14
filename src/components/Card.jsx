import {Link} from "react-router-dom";
import MovieDetails from "@/components/pages/MovieDetails.jsx";

const Card = ({movie}) => {
    return (
        <Link to={`/movie/${movie.id}`} element={<MovieDetails/>} className="card">
            <div className="card__img-w">
                <img className="card__img-w" 
                     src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
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
export default Card

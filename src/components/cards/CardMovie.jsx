import {Link} from "react-router-dom";
import MovieDetails from "@/components/pages/MovieDetails.jsx";
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import notfoundImg from "@/assets/image-notfound.png"

const CardMovie = ({movie}) => {
    return (
        <Link to={`/movies/${movie.id}`} element={<MovieDetails/>} className="card">
            <div className="card__img-w">
                <LazyLoadImage
                    src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
                    effect={"blur"}
                    width={280}
                    height={420}
                    placeholderSrc={notfoundImg}
                />
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

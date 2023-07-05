import CardMovie from "@/components/cards/CardMovie.jsx";

const MovieList = ({movies}) => {
    return (
        <ul className="grid grid-cols-3 gap-[40px]">
            {movies.map(movie => (
                <li className="flex" key={movie.id}>
                    <CardMovie movie={movie}/>
                </li>
            ))}
        </ul>
    )
}
export default MovieList

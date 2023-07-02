import SearchMovie from "@/components/layout/SearchMovie.jsx"

const MovieIndex = () => {
    return (
        <div className="flex gap-10">
            <aside className="w-[240px] border">
                <SearchMovie/>
            </aside>


            <div className="flex-grow border">
                <div>Results:</div>
                <div>https://developer.themoviedb.org/reference/search-movie</div>
            </div>

        </div>
    )
}
export default MovieIndex

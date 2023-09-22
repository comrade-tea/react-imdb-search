import CardMovie from "@/components/cards/CardMovie.jsx";
import Loader from "@/components/UI/Loader.jsx";

const GridCards = ({movies = [], columns = 3, isLoading = false}) => {

   if (isLoading) 
      return <Loader/>

   return (
      movies?.length ?
         <ul className={`grid-movies grid-movies--${columns} gap-[40px]`}>
            {movies.map(movie => (
               <li className="flex" key={movie.id}>
                  <CardMovie movie={movie}/>
               </li>
            ))}
         </ul>
         :
         <em>Try to fill sidebar / change parameters of searching</em>
   )
}
export default GridCards

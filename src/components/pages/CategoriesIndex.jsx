import { Link } from "react-router-dom";

const CategoriesIndex = () => {
   return (
      <>
         <h1 className="text-5xl">Categories:</h1>

         <div className="mt-20">
            <ul className="list-disc list-inside gap-6 flex flex-col">
               <li>
                  <Link className="link-line text-2xl" to={"./top-rated"}>Top rated</Link>
               </li>
               <li>
                  <Link className="link-line text-2xl" to={"./popular"}>Popular</Link>
               </li>
               <li>
                  <Link className="link-line text-2xl" to={"./now-playing"}>Now playing</Link>
               </li>
            </ul>
         </div>
      </>
   )
}
export default CategoriesIndex
 

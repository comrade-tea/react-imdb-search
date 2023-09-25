import { Link } from "react-router-dom";

export const Footer = () => {
   return (
      <>
         <footer className="bg-black py-5 text-white">
            <div className="container mx-auto flex justify-between">
               <div className={"max-w-[340px]"}>
                  The site was created as a demonstration of&nbsp;react.js and <Link className={"link-line"} to={"https://developer.themoviedb.org/reference/intro/getting-started"} target={"_blank"}>themoviedb api</Link>
               </div>

               <div>
                  created by <a className={"link-line"} href={"https://comrade-tea.github.io/"}
                                target="_blank"
                                rel="noreferrer">
                  comrade-tea</a>
               </div>
            </div>
         </footer>
      </>
   )
}

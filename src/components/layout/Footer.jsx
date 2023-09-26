import { Link } from "react-router-dom";

export const Footer = () => {
   return (
      <>
         <footer className="bg-black py-5 text-white">
            <div className="container mx-auto">
               <div className={"flex justify-between gap-5 flex-col xs:flex-row"}>
                  <div className={"max-w-[340px]"}>
                     The site was created as a demonstration of&nbsp;react, tailwind and <Link className={"link-line"}
                           to={"https://developer.themoviedb.org/reference/intro/getting-started"}
                           target={"_blank"}>
                         TMDB api
                     </Link>
                  </div>

                  <div>
                     created by <a className={"link-line whitespace-nowrap"} href={"https://comrade-tea.github.io/"}
                                   target="_blank"
                                   rel="noreferrer">
                     comrade-tea</a>
                  </div>
               </div>
            </div>
         </footer>
      </>
   )
}

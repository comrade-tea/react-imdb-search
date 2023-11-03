import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

export const Footer = () => {
   return (
      <>
         <footer className="bg-black py-5 text-white font-mono text-sm sm:text-base">
            <div className="container mx-auto">
               <div className={"flex justify-between gap-5 flex-col sm:flex-row"}>
                  <div className={"sm:max-w-[400px]"}>
                     The site was created as a demonstration of&nbsp;react, tailwind and <Link className="link-line"
                                                                                               target="_blank"
                                                                                               to="https://developer.themoviedb.org/reference/intro/getting-started">
                     TMDB api
                  </Link>
                  </div>

                  <div>
                     <a href="https://github.com/comrade-tea/react-imdb-search" className="flex items-baseline link-main" target="_blank" rel="noreferrer">
                        <FaGithub className="me-2" size={18}/> source files
                     </a>
                     <div>created by <a className={"link-line whitespace-nowrap"}
                                        href={"https://comrade-tea-projects.netlify.app"}
                                        target="_blank" rel="noreferrer">comrade-tea</a>
                     </div>
                  </div>
               </div>
            </div>
         </footer>
      </>
   )
}

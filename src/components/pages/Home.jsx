const Home = () => {
   return (
      <>
         <h1 className="text-5xl">Welcome 🌹</h1>

         <div className="mt-10">
            <p className={"text-2xl max-w-[700px] mb-10"}>Used stack: vite.js, react.js, tailwind.js, tmdb API
               Additional technologies: react-query, sass, react-router-dom</p>

            {import.meta.env.PROD && <>
               <p className={"text-2xl mb-4"}>Features:</p>

               <ul className={"list-disc list-inside"}>
                  <li>react-router <i>(I used hashRouter instead of BrowserRouter for GitHub Pages previews due to
                     GitHub
                     Pages
                     limitations)</i>
                  </li>
                  <li>The discover page stores search parameters within the component.</li>
                  <li>The search page stores search parameters in the URL.</li>
                  <li>Breadcrumbs</li>
                  <li>Responsive mode</li>
                  <li>Lazy loading of images</li>
                  <li>Video player with trailer switching in the details (if trailers are available)</li>
               </ul>
            </>
            }

            {import.meta.env.DEV && <>
               <p className="text-2xl mb-6">Todo:</p>

               <ul className="list-disc list-inside">
                  <li><s>fix notfound poster image (remove blur?)</s></li>
                  <li><s>sorting</s></li>
                  <li><s>search bar</s></li>
                  <li><s>breadcrumbs fix</s></li>
                  <li><s>pager in discover/search pages</s></li>
                  <li><s>responsive mode</s> sticky sidebar on mobile</li>
                  <li>optimize queries on search page (do something with consts?)</li>
                  <li>page transition animation</li>
                  <li>localization</li>
                  <li>query params on discover / <s>search</s></li>
                  <li>?? google auth + watch later list</li>
               </ul>
            </>}
         </div>
      </>
   )
}
export default Home
 

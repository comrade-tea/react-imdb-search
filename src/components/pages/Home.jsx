const Home = () => {
   return (
      <>
         <h1 className="text-5xl">Welcome 🌹</h1>

         <div className="mt-10">
            <p className="text-2xl mb-6">Todo:</p>
            <ul className="list-disc list-inside">
               <li><s>fix notfound poster image (remove blur?)</s></li>
               <li><s>sorting</s></li>
               <li><s>search bar</s></li>
               <li><s>breadcrumbs fix</s></li>
               <li><s>pager in discover/search pages</s></li>
               <li><s>responsive mode</s> sticky sidebar on mobile</li>
               <li>optimize queries on search page (do something with consts?)</li>
               <li>localization</li>
               <li>query params on discover / <s>search</s></li>
               <li>?? google auth + watch later list</li>
            </ul>
         </div>
      </>
   )
}
export default Home
 

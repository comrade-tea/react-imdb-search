import Breadcrumbs from "@/components/layout/Breadcrumbs.jsx";
import { Outlet } from "react-router-dom";
import Header from "@/components/layout/Header.jsx";
import { Footer } from "@/components/layout/Footer.jsx";

const Root = () => {
   return (
      <>
         <Header/>

         <main className="main">
            <Breadcrumbs/>
            <div className="container">
               <Outlet/>
            </div>
         </main>

         <Footer/>
      </>
   )
}

export default Root

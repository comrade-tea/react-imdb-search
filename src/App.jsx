import {QueryClient, QueryClientProvider,} from 'react-query'
import Header from "@/components/layout/Header";
import Breadcrumbs from "@/components/layout/Breadcrumbs.jsx";
import Sidebar from "@/components/layout/Sidebar.jsx";
import MovieCategory from "@/components/layout/MovieCategory.jsx";
import {Footer} from "@/components/layout/Footer.jsx";
import {Link, Route, Routes} from "react-router-dom";
import MovieDetails from "@/components/layout/MovieDetails.jsx";
import Home from "@/components/pages/Home.jsx";
import TopRated from "@/components/pages/TopRated.jsx";


function App() {
    return (
        <>
            <main className="my-[50px]">
                <div className="maw-[1300px] mx-auto px-5">
                    <div className="flex gap-[20px]">
                        <div className="content">

                        </div>
                    </div>
                </div>
            </main>
            {/*<Footer/>*/}
        </>
    )
}

export default App;

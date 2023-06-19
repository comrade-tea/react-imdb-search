import App from "@/App.jsx";
import Breadcrumbs from "@/components/layout/Breadcrumbs.jsx";
import {Outlet, Route, Routes as Routing} from "react-router-dom";
import Home from "@/components/pages/Home.jsx";
import TopRated from "@/components/pages/TopRated.jsx";
import MovieDetails from "@/components/pages/MovieDetails.jsx";
import Header from "@/components/layout/Header.jsx";
import ErrorPage from "@/routes/error-page.jsx";
import {Footer} from "@/components/layout/Footer.jsx";
import Pager from "@/components/layout/Pager.jsx";

const Root = () => {
    return (
        <>
            <Header/>
            <Breadcrumbs/>

            <main className="my-[50px]">
                <div className="container mx-auto px-5">
                    <Outlet/>
                </div>
            </main>

            <Footer/>
        </>
    )
}

export default Root

export function rootLoader() {
    return <div>loading..</div>
}


import {QueryClient, QueryClientProvider,} from 'react-query'
import Header from "@/components/layout/Header";
import Breadcrumbs from "@/components/layout/Breadcrumbs.jsx";
import Sidebar from "@/components/layout/Sidebar.jsx";
import Content from "@/components/layout/Content.jsx";
import {Footer} from "@/components/layout/Footer.jsx";
import {Link, Route, Routes} from "react-router-dom";
import MovieDetails from "@/components/pages/MovieDetails.jsx";
import Root from "@/routes/root.jsx";
import Home from "@/components/pages/Home.jsx";
import TopRated from "@/components/pages/TopRated.jsx";


function App() {
    // Access the client
    const queryClient = new QueryClient()
    // const config = useQuery('top-ratedQuery', getConfig)

    return (
        <div>
            <QueryClientProvider client={queryClient}>
                <Header/>
                <Breadcrumbs/>

                <main className="my-[50px]">
                    <div className="container mx-auto px-5">
                        <div className="flex gap-[20px]">

                            <Routes>
                                <Route path={"/"} element={<Sidebar/>}></Route>
                            </Routes>

                            <div className="content">
                                
                                <Routes>
                                    <Route path={"/"}
                                           handle={{
                                               crumb: () => <Link to="/messages">Messages</Link>,
                                           }}
                                           element={<Home/>}/>

                                    <Route path={"/top-rated"}
                                           element={<TopRated/>}
                                    />
                                    <Route
                                        path={"/movie/:id"}
                                        element={<MovieDetails/>}
                                        handle={{
                                            // crumb: (data) => <span>{data.threadName}</span>
                                            crumb: (data) => <span>"BLYAT"</span>
                                        }}
                                    />
                                </Routes>

                            </div>

                        </div>
                    </div>
                </main>

                {/*<Footer/>*/}
            </QueryClientProvider>
        </div>
    )
}

export default App;

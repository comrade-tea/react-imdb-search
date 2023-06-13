import {useState} from "react";
import {QueryClient, QueryClientProvider,} from 'react-query'
import Header from "@/Header.jsx";
import Sidebar from "@/Sidebar.jsx";
import Content from "@/Content.jsx";
import {Footer} from "@/Footer.jsx";
import {Route, Routes} from "react-router-dom";
import MovieDetails from "@/pages/MovieDetails.jsx";


function App() {
    // Access the client
    const queryClient = new QueryClient()
    // const config = useQuery('topRatedQuery', getConfig)

    return (
        <div>
            <QueryClientProvider client={queryClient}>
                <Header/>

                <main className="my-[50px]">
                    <div className="container mx-auto">
                        <div className="flex gap-[20px]">

                            <Sidebar/>

                            <div className="content">
                                <Routes>
                                    <Route path={"/"} element={<Content/>}></Route>
                                    <Route path={"/movie/:id"} element={<MovieDetails/>}></Route>
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

import {QueryClient, QueryClientProvider,} from 'react-query'
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar.jsx";
import Content from "@/components/layout/Content.jsx";
import {Footer} from "@/components/layout/Footer.jsx";
import {Route, Routes} from "react-router-dom";
import MovieDetails from "@/components/pages/MovieDetails.jsx";


function App() {
    // Access the client
    const queryClient = new QueryClient()
    // const config = useQuery('topRatedQuery', getConfig)

    return (
        <div>
            <QueryClientProvider client={queryClient}>
                <Header/>
                
                <div className={"breadcrumbs text-light" }>
                    <div className="container mx-auto my-10">home / about / blah</div>
                </div>
                <main className="my-[50px]">
                    <div className="container mx-auto">
                        <div className="flex gap-[20px]">

                            <Routes>
                                <Route path={"/"} element={<Sidebar/>}></Route>
                            </Routes>

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

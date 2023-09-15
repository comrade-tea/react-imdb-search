import React from 'react'
import ReactDOM from 'react-dom/client'
import router from "@/routes/Router.jsx";
import { RouterProvider, } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import './index.sass'


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<QueryClientProvider client={ queryClient }>
			<RouterProvider router={ router }/>
		</QueryClientProvider>
	</React.StrictMode>
)

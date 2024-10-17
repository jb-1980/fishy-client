import React from "react"
import ReactDOM from "react-dom/client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import "./styles.css"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { RootRoute } from "./routes/Root/route"
import { IndexRoute } from "./routes/Home/route"
import { RegionRoute } from "./routes/_region.$regionId/route"

const queryClient = new QueryClient()
const rootElement = document.getElementById("root")

if (!rootElement) {
  throw new Error("No root element found")
}

const router = createBrowserRouter([RootRoute([IndexRoute(), RegionRoute()])])

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)

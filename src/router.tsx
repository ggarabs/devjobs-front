import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import JobPage from "./pages/JobPage"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "jobs/:jobId",
        element: <JobPage />
    }
])

export default router
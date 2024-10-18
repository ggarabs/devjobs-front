import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import JobPage from "./pages/JobPage"
import LoginPage from "./pages/LoginPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "jobs/:jobId",
        element: <JobPage />
    },
    {
        path: "login",
        element: <LoginPage />
    }
])

export default router
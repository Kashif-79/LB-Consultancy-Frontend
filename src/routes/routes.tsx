import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/PublicPages/Home/Home";
import Login from "../pages/Login";
import ProtectedRoute from "../components/layout/ProtectedRoutes";
import { routesGenerator } from "../utils/routesGenerator";
import { adminPaths } from "./admin.routes";
import MainLayout from "../components/layout/MainLayout";
import PublicLayout from "../components/layout/PublicLayout";
import { consultantPaths } from "./consultant.routes";
import Universities from "../pages/PublicPages/Universities/Universities";
import CountryDetails from "../pages/PublicPages/Country/CountryDetails";
import Eligibility from "../pages/PublicPages/Eligibility/Eligibility";
// import OurServiceData from "../pages/PublicPages/Service/OurServiceData";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <PublicLayout />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          { path: "/universities", element: <Universities /> },
          {
            path: "/eligibility",
            element: <Eligibility />,
          },
          {
            path: "/country/:id",
            element: <CountryDetails />,
          },
        ],
      },
      {
        path: "/admin",
        element: (
          <ProtectedRoute role="admin">
            <MainLayout />
          </ProtectedRoute>
        ),
        children: routesGenerator(adminPaths),
      },
      {
        path: "/consultant",
        element: (
          <ProtectedRoute role="consultant">
            <MainLayout />
          </ProtectedRoute>
        ),
        children: routesGenerator(consultantPaths),
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
]);
export default router;

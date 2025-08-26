import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import ProtectedRoute from "../components/layout/ProtectedRoutes";
import { routesGenerator } from "../utils/routesGenerator";
import { adminPaths } from "./admin.routes";
import MainLayout from "../components/layout/MainLayout";
import PublicLayout from "../components/layout/PublicLayout";
import { consultantPaths } from "./consultant.routes";
import Universities from "../components/ui/Universities/Universities";
import ServicesDetails from "../components/ui/Services/ServicesDetails";
import CountryDetails from "../components/ui/Country/CountryDetails";

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
            children: [
              { path: "/universities", element: <Universities /> },
              {
                path: "/country/:id",
                element: <CountryDetails />,
              },
              {
                path: "/services/:id",
                element: <ServicesDetails />,
              },
            ],
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

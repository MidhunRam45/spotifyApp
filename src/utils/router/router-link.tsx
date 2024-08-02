import { Navigate } from "react-router-dom";
import CompanyRegister from "../../pages/company-register";
import LandingPage from "../../pages/landing-page";
import { all_routes } from "./routes";

const routes = all_routes;

const publicRoutes = [
  {
    id: 1,
    path: '/',
    element: <Navigate to={routes.landingPage} />,
  },
  {
    id: 2,
    path: routes.landingPage,
    element: <LandingPage />,
  },
  {
    id: 3,
    path: routes.companyRegister,
    element: <CompanyRegister />,
  },
];

export { publicRoutes };

import { Navigate } from "react-router-dom";
import LandingPage from "../../pages/landing-page";
import { all_routes } from "./routes";
import Login from "../../pages/auth/login";
import Signup from "../../pages/auth/signup";
import HomePage from "../../pages/home page";
import MoviecontentSongs from "../../components/movie content songs";

const routes = all_routes;

const publicRoutes = [
  {
    id: 1,
    path: "/",
    element: <Navigate to={routes.landingPage} />,
  },
  {
    id: 2,
    path: routes.landingPage,
    element: <LandingPage />,
  },
  {
    id: 3,
    path: routes.login,
    element: <Login />,
  },
  {
    id: 4,
    path: routes.signup,
    element: <Login />,
  },
  {
    id: 5,
    path: routes.homepage,
    element: <HomePage />,
  },
  {
    id: 6,
    path: routes.movieSongs,
    element: <MoviecontentSongs />,
  },
];

export { publicRoutes };

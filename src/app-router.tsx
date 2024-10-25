import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { nestedRoutes, publicRoutes } from "./utils/router/router-link";
import HomePage from "./pages/home page";
import ArtistList from "./components/artist list";
import MoviecontentSongs from "./components/movie content songs";
import ArtistSongs from "./components/artist songs";
// import { favicon } from "./utils/imagepath";

const AppRouter = () => {
  useEffect(() => {
    const faviconLink: any = document.getElementById(
      "favicon"
    ) as HTMLLinkElement;
    if (faviconLink) {
      // faviconLink.href = favicon;
    } else {
      console.error("Favicon link element not found");
    }
  }, []);
  return (
    <>
      <Routes>
        <Route>
          {publicRoutes.map((route, idx) => (
            <Route path={route.path} element={route.element} key={idx} />
          ))}
          {/* {nestedRoutes?.map((route, idx) => (
            <Route path={route.path} element={route.element} key={idx}>
              {route.nestedElements?.map((nestedRoute, idx) => (
                <Route
                  path={nestedRoute.path}
                  element={nestedRoute.element}
                  key={idx}
                  index={nestedRoute.index}
                />
              ))}
            </Route>
          ))} */}
          <Route path="/homepage" element={<HomePage />}>
            <Route index element={<ArtistList />} />
            <Route path="movie-content-songs" element={<MoviecontentSongs />} />
            <Route path="artist-songs" element={<ArtistSongs />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default AppRouter;

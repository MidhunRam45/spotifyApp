import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "./utils/router/router-link";
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
        </Route>
      </Routes>
    </>
  );
};

export default AppRouter;

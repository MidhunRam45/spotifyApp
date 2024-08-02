import { Outlet } from "react-router";
import AppRouter from "../app-router";

const Pages = () => {
  return (
    <>
      <AppRouter />
      <Outlet />
    </>
  );
};

export default Pages;

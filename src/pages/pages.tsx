import { Outlet } from "react-router";
import AppRouter from "../app-router";
import { useSelector } from "react-redux";

const Pages = () => {
  return (
    <>
        <div className="main-wrapper">
          <AppRouter />
          {/* <Outlet /> */}
        </div>
    </>
  );
};

export default Pages;

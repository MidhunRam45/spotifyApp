import { Outlet } from "react-router";
import AppRouter from "../app-router";
import Header from "./common/header";
import Footer from "./common/footer";
import { useSelector } from "react-redux";

const Pages = () => {
  const mobileSidebar = useSelector(
    (state: any) => state.sidebar.mobileSidebar
  );

  return (
    <>
      <div
        className={`
        ${mobileSidebar ? "menu-opened" : ""}
        `}
      >
        <div className="main-wrapper">
          <Header />
          <AppRouter />
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Pages;

import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { all_routes } from "../../utils/router/routes";
import { logo } from "../../utils/imagepath";
import { useDispatch, useSelector } from "react-redux";
import { setMobileSidebar } from "../../core/redux/sidebarSlice";
import { setActiveLink } from "../../core/redux/scrollSlice";
import type { RootState } from "../../core/redux/store";

const Header: React.FC = () => {
  const routes = all_routes;
  const dispatch = useDispatch();
  const mobileSidebar = useSelector(
    (state: RootState) => state.sidebar.mobileSidebar
  );
  const activeLink = useSelector((state: RootState) => state.scroll);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== routes.landingPage) {
      dispatch(setActiveLink(""));
    }
    //  else {
    //   dispatch(setActiveLink(""));
    // }
  }, [location.pathname, routes.landingPage, dispatch]);

  // useEffect(() => {
  //   dispatch(setActiveLink("home"));
  //   // window.scrollTo(0, 0);
  // }, []);

  const handleMobileSidebar = () => {
    dispatch(setMobileSidebar(!mobileSidebar));
  };

  const handleSetActiveLink = (link: string) => {
    if (location.pathname === routes.landingPage) {
      dispatch(setActiveLink(link));
    }
  };

  return (
    <header className="header" role="banner">
      <div className="container">
        <nav className="navbar navbar-expand-lg header-nav">
          <div className="navbar-header">
            <Link
              id="mobile_btn"
              to="#"
              onClick={handleMobileSidebar}
              aria-label="Toggle mobile menu"
            >
              <span className="bar-icon">
                <span />
                <span />
                <span />
              </span>
            </Link>
            <Link
              to={routes.landingPage}
              className="navbar-brand logo"
              aria-label="Home"
            >
              <img src={logo} className="img-fluid" alt="Logo" />
            </Link>
            <Link
              to={routes.landingPage}
              className="navbar-brand logo-small"
              aria-label="Home"
            >
              <img src={logo} className="img-fluid" alt="Logo" />
            </Link>
          </div>
          <div className="main-menu-wrapper">
            <div className="menu-header">
              <Link
                to={routes.landingPage}
                className="menu-logo"
                aria-label="Home"
              >
                <img src={logo} className="img-fluid" alt="Logo" />
              </Link>
              <Link
                id="menu_close"
                className="menu-close"
                to="#"
                onClick={handleMobileSidebar}
                aria-label="Close menu"
              >
                <i className="fas fa-times" />
              </Link>
            </div>
            <ul className="main-nav">
              <li className={activeLink === "home" ? "active" : ""}>
                <Link
                  to="/index"
                  onClick={() => dispatch(setActiveLink("home"))}
                >
                  Home
                </Link>
              </li>
              <li className={activeLink === "about-us" ? "active" : ""}>
                <Link
                  to="/index"
                  onClick={() => dispatch(setActiveLink("about-us"))}
                >
                  About
                </Link>
              </li>
              <li className={activeLink === "work-section" ? "active" : ""}>
                <Link
                  to="/index"
                  onClick={() => dispatch(setActiveLink("work-section"))}
                >
                  How it works
                </Link>
              </li>
              <li className={activeLink === "pricing-section" ? "active" : ""}>
                <Link
                  to="/index"
                  onClick={() => dispatch(setActiveLink("pricing-section"))}
                >
                  Pricing
                </Link>
              </li>
              <li className={activeLink === "download-section" ? "active" : ""}>
                <Link
                  to="/index"
                  onClick={() => dispatch(setActiveLink("download-section"))}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <ul className="nav header-navbar-rht">
            <li className="nav-item">
              <Link
                className={`nav-link header-reg ${
                  activeLink === "pricing-section" ? "active" : ""
                }`}
                to="/index"
                onClick={() => dispatch(setActiveLink("pricing-section"))}
              >
                <span />
                Register
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { all_routes } from "../../utils/router/routes";
import { logo } from "../../utils/imagepath";
import { useDispatch, useSelector } from "react-redux";
import { setMobileSidebar } from "../../core/redux/sidebarSlice";
import type { RootState } from "../../core/redux/store";

const Header: React.FC = () => {
  const routes = all_routes;
  const dispatch = useDispatch();
  const mobileSidebar = useSelector(
    (state: RootState) => state.sidebar.mobileSidebar
  );
  const location = useLocation();

  const [activeLink, setActiveLink] = useState<string>("");

  useEffect(() => {
    if (location.pathname === routes.landingPage) {
      setActiveLink("home");
    } else {
      setActiveLink(""); // Clear active link when not on the landing page
    }
  }, [location.pathname, routes.landingPage]);

  const handleMobileSidebar = () => {
    dispatch(setMobileSidebar(!mobileSidebar));
  };

  const handleSetActiveLink = (link: string) => {
    setActiveLink(link);
  };

  return (
    <>
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
                  <ScrollLink
                    to="home"
                    smooth={true}
                    duration={200}
                    offset={-200}
                    onClick={() => handleSetActiveLink("home")}
                  >
                    Home
                  </ScrollLink>
                </li>
                <li className={activeLink === "about-us" ? "active" : ""}>
                  <ScrollLink
                    to="about-us"
                    smooth={true}
                    duration={200}
                    onClick={() => handleSetActiveLink("about-us")}
                  >
                    About
                  </ScrollLink>
                </li>
                <li className={activeLink === "work-section" ? "active" : ""}>
                  <ScrollLink
                    to="work-section"
                    smooth={true}
                    duration={200}
                    onClick={() => handleSetActiveLink("work-section")}
                  >
                    How it works
                  </ScrollLink>
                </li>
                <li
                  className={activeLink === "pricing-section" ? "active" : ""}
                >
                  <ScrollLink
                    to="pricing-section"
                    smooth={true}
                    duration={200}
                    onClick={() => handleSetActiveLink("pricing-section")}
                  >
                    Pricing
                  </ScrollLink>
                </li>
                <li
                  className={activeLink === "download-section" ? "active" : ""}
                >
                  <ScrollLink
                    to="download-section"
                    smooth={true}
                    offset={500}
                    duration={300}
                    onClick={() => handleSetActiveLink("download-section")}
                  >
                    Contact Us
                  </ScrollLink>
                </li>
              </ul>
            </div>
            <ul className="nav header-navbar-rht">
              <li className="nav-item">
                <ScrollLink
                  className={`nav-link header-reg ${
                    activeLink === "pricing-section" ? "active" : ""
                  }`}
                  to="pricing-section"
                  smooth={true}
                  duration={300}
                  offset={-70}
                  onClick={() => handleSetActiveLink("pricing-section")}
                >
                  <span />
                  Register
                </ScrollLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;

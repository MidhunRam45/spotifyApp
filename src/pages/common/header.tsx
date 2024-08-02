import React from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../utils/router/routes";
import { logo } from "../../utils/imagepath";
import { useDispatch, useSelector } from "react-redux";
import { setMobileSidebar } from "../../core/redux/sidebarSlice";

const Header = () => {
  const routes = all_routes;
  const dispatch = useDispatch();
  const mobileSidebar = useSelector((state: any) => state.sidebar.mobileSidebar);

  const handleMobileSidebar = () => {
    dispatch(setMobileSidebar(!mobileSidebar));
  };

  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="container">
          <nav className="navbar navbar-expand-lg header-nav">
            <div className="navbar-header">
              <Link id="mobile_btn" to="#" onClick={handleMobileSidebar}>
                <span className="bar-icon">
                  <span />
                  <span />
                  <span />
                </span>
              </Link>
              <Link to={routes.landingPage} className="navbar-brand logo">
                <img src={logo} className="img-fluid" alt="Logo" />
              </Link>
              <Link to={routes.landingPage} className="navbar-brand logo-small">
                <img src={logo} className="img-fluid" alt="Logo" />
              </Link>
            </div>
            <div className="main-menu-wrapper">
              <div className="menu-header">
                <Link to={routes.landingPage} className="menu-logo">
                  <img src={logo} className="img-fluid" alt="Logo" />
                </Link>
                <Link id="menu_close" className="menu-close" to="#" onClick={handleMobileSidebar}>
                  {" "}
                  <i className="fas fa-times" />
                </Link>
              </div>
              <ul className="main-nav">
                <li className="active">
                  <Link to={routes.landingPage}>Home</Link>
                </li>
                <li>
                  <Link to="#">About</Link>
                </li>
                <li>
                  <Link to="#">How it works</Link>
                </li>
                <li>
                  <Link to="#">Pricing</Link>
                </li>
                <li>
                  <Link to="#">Contact Us</Link>
                </li>
                <li className="login-link">
                  <Link to="#">Register</Link>
                </li>
              </ul>
            </div>
            <ul className="nav header-navbar-rht">
              <li className="nav-item">
                <Link className="nav-link header-reg" to="#">
                  <span />
                  Register
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {/* /Header */}
    </>
  );
};

export default Header;

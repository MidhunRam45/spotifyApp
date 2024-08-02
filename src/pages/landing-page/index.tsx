import React from "react";
import { Link } from "react-router-dom";
import { aboutImg, avatar01, avatar14, avatar18, avatar19, avatar27, avatar30, bannerApp, bannerImg, logo, mobileImg, mobileTruck, shape01, shape02, shape03, shape04, shape05, shape06, shape07, shape09, trustIcon, work01, work02, work03, work04 } from "../../utils/imagepath";
import { all_routes } from "../../utils/router/routes";
import Plans from "./plans";

const LandingPage = () => {
const routes = all_routes;

  return (
    <>
      {" "}
      {/* Main Wrapper */}
      <div className="main-wrapper">
        {/* Header */}
        <header className="header">
          <div className="container">
            <nav className="navbar navbar-expand-lg header-nav">
              <div className="navbar-header">
                <Link id="mobile_btn" to="#">
                  <span className="bar-icon">
                    <span />
                    <span />
                    <span />
                  </span>
                </Link>
                <Link to={routes.landingPage} className="navbar-brand logo">
                  <img
                    src={logo}
                    className="img-fluid"
                    alt="Logo"
                  />
                </Link>
                <Link to={routes.landingPage} className="navbar-brand logo-small">
                  <img
                    src={logo}
                    className="img-fluid"
                    alt="Logo"
                  />
                </Link>
              </div>
              <div className="main-menu-wrapper">
                <div className="menu-header">
                  <Link to={routes.landingPage} className="menu-logo">
                    <img
                      src={logo}
                      className="img-fluid"
                      alt="Logo"
                    />
                  </Link>
                  <Link
                    id="menu_close"
                    className="menu-close"
                    to="#"
                  >
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
        {/* Banner */}
        <section className="banner-section">
          <div className="banner-shapes">
            <img
              src={shape02}
              className="shape-img2"
              alt=""
            />
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="banner-content">
                  <img
                    src={shape01}
                    className="shape-one"
                    alt="Shape"
                  />
                  <h6>Lorem Ipsum is simply dummy text</h6>
                  <h1>
                    Prepare your <span>vehicle</span> for inspection before you
                    begin
                  </h1>
                  <div className="banner-content-img">
                    <img src={shape03} alt="Shape" />
                  </div>
                  <Link to="#" className="btn btn-primary">
                    Register
                  </Link>
                </div>
                <div className="banner-list">
                  <ul className="nav">
                    <li>
                      <Link to="#">
                        <div className="banner-list-img">
                          <img
                            src={avatar30}
                            className="img-fluid"
                            alt="Profile"
                          />
                        </div>
                        <span>About Us</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <div className="banner-list-img">
                          <img
                            src={bannerApp}
                            className="img-fluid"
                            alt="Banner App"
                          />
                        </div>
                        <span>App Download</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="banner-img">
                  <img
                    src={bannerImg}
                    className="img-fluid"
                    alt="Banner"
                  />
                  <img
                    src={shape04}
                    className="shape-img4"
                    alt="Shape"
                  />
                </div>
                <div className="banner-trust-box">
                  <div className="trust-box-icon">
                    <img src={trustIcon} alt="Icon" />
                  </div>
                  <div className="trust-box-content">
                    <h4>5,00,000+</h4>
                    <p>Trusted Companies world wide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Banner */}
        {/* About Us */}
        <section className="about-section">
          <div className="about-shapes">
            <img
              src={shape05}
              className="shape-img5"
              alt="Shape"
            />
            <img
              src={shape06}
              className="shape-img6"
              alt="Shape"
            />
            <img
              src={shape07}
              className="shape-img7"
              alt="Shape"
            />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-header">
                  <h4>About Us</h4>
                  <p>
                    It is a long established fact that a reader will be
                    distracted
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-7">
                <div className="about-img">
                  <img
                    src={aboutImg}
                    className="img-fluid"
                    alt="About"
                  />
                </div>
              </div>
              <div className="col-lg-5">
                <div className="about-content">
                  <h4>Who We Are</h4>
                  <p>
                    Masters of Motion Logistics, or M.O.M., as we’re
                    affectionately known, is just that, the matriarch of our
                    trucking family. We see our drivers as family, and we want
                    to add that special touch to transportation and take care of
                    our family in ensuring their safe arrival home.
                  </p>
                  <p>
                    Before being established in 2023, M.O.M. had a long lineage
                    of trucking and transportation industry experience. With
                    20-plus years of experience, our staff has served in the
                    nation's armed forces and multiple transportation lanes and
                    logistics. Our core values are Care, Concern, &amp;
                    Consideration.
                  </p>
                  <div className="avatar-group about-avatar-group">
                    <div className="avatar">
                      <img
                        className="avatar-img rounded-circle"
                        alt="User-Image"
                        src={avatar19}
                      />
                    </div>
                    <div className="avatar">
                      <img
                        className="avatar-img rounded-circle"
                        alt="User-Image"
                        src={avatar01}
                      />
                    </div>
                    <div className="avatar">
                      <img
                        className="avatar-img rounded-circle"
                        alt="User-Image"
                        src={avatar18}
                      />
                    </div>
                    <div className="avatar">
                      <img
                        className="avatar-img rounded-circle"
                        alt="User-Image"
                        src={avatar14}
                      />
                    </div>
                    <div className="avatar">
                      <img
                        className="avatar-img rounded-circle"
                        alt="User-Image"
                        src={avatar27}
                      />
                    </div>
                    <p>
                      <Link to="#">
                        200+ <span>Happy Clients</span>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /About Us */}
        {/* Work */}
        <section className="work-section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-header">
                  <h4>How it Works</h4>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Work */}
        {/* Work */}
        <section className="work-info-section">
          <div className="container">
            <div className="work-info">
              <div className="row">
                <div className="col-lg-3 col-md-6 d-flex">
                  <div className="work-card w-100">
                    <div className="work-card-body">
                      <div className="work-head">
                        <div className="work-icon">
                          <span className="work-register-icon">
                            <img
                              src={work01}
                              alt="Icon"
                            />
                          </span>
                        </div>
                        <div className="work-count">
                          <h4>01</h4>
                        </div>
                      </div>
                      <div className="work-content">
                        <h4>Register Company</h4>
                        <p>
                          Contrary to popular belief, Lorem Ipsum is not simply
                          random text. It has roots in a piece of classical
                          Latin literature from 45 BC, making
                        </p>
                        <Link to="#">
                          Learn More <i className="feather-chevron-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 d-flex">
                  <div className="work-card w-100">
                    <div className="work-card-body">
                      <div className="work-head">
                        <div className="work-icon">
                          <span className="work-vehicle-icon">
                            <img
                              src={work02}
                              alt="Icon"
                            />
                          </span>
                        </div>
                        <div className="work-count">
                          <h4>02</h4>
                        </div>
                      </div>
                      <div className="work-content">
                        <h4>Add Vehicles</h4>
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. The point of using Lorem Ipsum
                        </p>
                        <Link to="#">
                          Learn More <i className="feather-chevron-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 d-flex">
                  <div className="work-card w-100">
                    <div className="work-card-body">
                      <div className="work-head">
                        <div className="work-icon">
                          <span className="work-complete-icon">
                            <img
                              src={work03}
                              alt="Icon"
                            />
                          </span>
                        </div>
                        <div className="work-count">
                          <h4>03</h4>
                        </div>
                      </div>
                      <div className="work-content">
                        <h4>Complete Checklist</h4>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard.
                        </p>
                        <Link to="#">
                          Learn More <i className="feather-chevron-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 d-flex">
                  <div className="work-card w-100">
                    <div className="work-card-body">
                      <div className="work-head">
                        <div className="work-icon">
                          <span className="work-ride-icon">
                            <img
                              src={work04}
                              alt="Icon"
                            />
                          </span>
                        </div>
                        <div className="work-count">
                          <h4>04</h4>
                        </div>
                      </div>
                      <div className="work-content">
                        <h4>Start your Ride</h4>
                        <p>
                          The standard chunk of Lorem Ipsum used since the 1500s
                          is reproduced below for those interested. Sections
                          1.10.32 and 1.10.33 from "de Finibus embed..
                        </p>
                        <Link to="#">
                          Learn More <i className="feather-chevron-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Work */}
        {/* Pricing */}
        <section className="pricing-section">
          <div className="pricing-shapes">
            <img
              src={shape09}
              className="shape-img9"
              alt="Shape"
            />
            <img
              src={shape07}
              className="shape-img7"
              alt="Shape"
            />
            <img
              src={shape06}
              className="shape-img6"
              alt="Shape"
            />
            <img
              src={shape04}
              className="shape-img4"
              alt="Shape"
            />
          </div>
          <Plans/>
        </section>
        {/* /Pricing */}
        {/* Download App */}
        <section className="download-section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-header">
                  <h4>Download App</h4>
                  <p>Personalized Pricing Plans Suited to You</p>
                </div>
              </div>
            </div>
          </div>
          <div className="download-bg">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-7 col-md-12">
                  <div className="download-img">
                    <img src={mobileImg} alt="Mobile" />
                  </div>
                </div>
                <div className="col-lg-5 col-md-12">
                  <div className="download-content">
                    <h4>Get TRUCK App</h4>
                    <p>
                      Masters of Motion Logistics, or M.O.M., as we’re
                      affectionately known, is just that, the matriarch of our
                      trucking family. We see our drivers as family, and we want
                      to add that special touch to transportation and take care
                      of our family in ensuring their safe arrival home.
                    </p>
                    <p>
                      Before being established in 2023, M.O.M. had a long
                      lineage of trucking and transportation industry
                      experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="download-truck-img">
              <img src={mobileTruck} alt="Truck" />
            </div>
          </div>
        </section>
        {/* /Download App */}
      </div>
      {/* /Main Wrapper */}
    </>
  );
};

export default LandingPage;

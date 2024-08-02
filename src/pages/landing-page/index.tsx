import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  aboutImg,
  avatar01,
  avatar14,
  avatar18,
  avatar19,
  avatar27,
  avatar30,
  bannerApp,
  bannerImg,
  mobileImg,
  mobileTruck,
  shape01,
  shape02,
  shape03,
  shape04,
  shape05,
  shape06,
  shape07,
  shape09,
  truckTire,
  trustIcon,
  work01,
  work02,
  work03,
  work04,
} from "../../utils/imagepath";
import "aos/dist/aos.css";
import AOS from "aos";

const LandingPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);
  return (
    <>
        {/* Banner */}
        <section className="banner-section">
          <div className="banner-shapes">
            <img
              src={shape02}
              className="shape-img2 aos"
              data-aos="zoom-in"
              alt=""
            />
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="banner-content aos" data-aos="fade-up">
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
                <div className="banner-list aos" data-aos="fade-up">
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
                    className="shape-img4 aos"
                    data-aos="zoom-in"
                    alt="Shape"
                  />
                </div>
                <div className="banner-trust-box aos" data-aos="fade-up">
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
          <div className="scroll-down-info">
            <Link className="smooth-menu" to="#about-us">
              <div className="scroll-down">
                <div className="scroll-center">
                  <div className="scroll-mouse">
                    <div className="scroll-wheel" />
                  </div>
                  <div>
                    <span className="scroll-arrow-one" />
                  </div>
                  <div>
                    <span className="scroll-arrow-two" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
        {/* /Banner */}
        {/* About Us */}
        <section className="about-section" id="about-us">
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
                <div className="section-header aos" data-aos="fade-up">
                  <h4>About Us</h4>
                  <p>
                    It is a long established fact that a reader will be
                    distracted
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-7 aos" data-aos="fade-up">
                <div className="about-img">
                  <img
                    src={aboutImg}
                    className="img-fluid"
                    alt="About"
                  />
                </div>
              </div>
              <div className="col-lg-5">
                <div className="about-content aos" data-aos="fade-up">
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
                <div className="section-header aos" data-aos="fade-up">
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
                <div
                  className="col-lg-3 col-md-6 d-flex aos"
                  data-aos="fade-up"
                >
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
                          Learn More <i className="feather icon-chevron-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-6 d-flex aos"
                  data-aos="fade-up"
                >
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
                          Learn More <i className="feather icon-chevron-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-6 d-flex aos"
                  data-aos="fade-up"
                >
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
                          Learn More <i className="feather icon-chevron-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-6 d-flex aos"
                  data-aos="fade-up"
                >
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
                          Learn More <i className="feather icon-chevron-right" />
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
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-header aos" data-aos="fade-up">
                  <h4>Pricing Plan</h4>
                  <p>Personalized Pricing Plans Suited to You</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="price-toggle aos" data-aos="fade-up">
                  <ul className="nav">
                    <li className="active">Pay Monthly</li>
                    <li>
                      <input type="checkbox" id="monthly" className="check" />
                      <label htmlFor="monthly" className="checktoggle">
                        checkbox
                      </label>
                    </li>
                    <li>
                      Pay Yearly
                      <span>Save 20%</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 d-flex aos" data-aos="fade-up">
                <div className="pricing-card w-100">
                  <div className="pricing-plan-header">
                    <h5>Free Trail</h5>
                    <h4>Free</h4>
                    <span className="month-bill annually-bill">
                      /Month (annually billed)
                    </span>
                    <Link to="#" className="btn btn-white">
                      Choose Plan <i className="feather icon-chevron-right" />
                    </Link>
                  </div>
                  <div className="pricing-content">
                    <ul>
                      <li>
                        <i className="fas fa-check" /> 100 Vehicle
                      </li>
                      <li>
                        <i className="fas fa-check" /> Single Domain
                      </li>
                      <li>
                        <i className="fas fa-check" /> 20 Fleet Manger Create
                      </li>
                      <li>
                        <i className="fas fa-check" /> Driver Dashboard
                      </li>
                      <li>
                        <i className="fas fa-check" /> Service Manger Dashboard
                      </li>
                      <li>
                        <i className="fas fa-xmark" /> Trip
                      </li>
                      <li>
                        <i className="fas fa-xmark" /> Tutorial Videos
                      </li>
                      <li>
                        <i className="fas fa-xmark" /> Support
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex aos" data-aos="fade-up">
                <div className="pricing-card pricing-card-white w-100">
                  <div className="pricing-plan-header">
                    <h6>Best Plan</h6>
                    <h5>Premium Plan</h5>
                    <h4>
                      <span>$360</span> $340
                    </h4>
                    <span className="month-bill">/Month (annually billed)</span>
                    <p>Save Up to $20</p>
                    <Link to="#" className="btn btn-primary">
                      Choose Plan <i className="feather icon-chevron-right" />
                    </Link>
                  </div>
                  <div className="pricing-content">
                    <ul>
                      <li>
                        <i className="fas fa-check" /> 50 Vehicle
                      </li>
                      <li>
                        <i className="fas fa-check" /> Single Domain
                      </li>
                      <li>
                        <i className="fas fa-check" /> 10 Fleet Manger Create
                      </li>
                      <li>
                        <i className="fas fa-check" /> Driver Dashboard
                      </li>
                      <li>
                        <i className="fas fa-check" /> Service Manger Dashboard
                      </li>
                      <li>
                        <i className="fas fa-check" /> Trip
                      </li>
                      <li>
                        <i className="fas fa-check" /> Tutorial Videos
                      </li>
                      <li>
                        <i className="fas fa-check" /> Support
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex aos" data-aos="fade-up">
                <div className="pricing-card w-100">
                  <div className="pricing-plan-header">
                    <h5>Platinum Plan</h5>
                    <h4>
                      <span>$740</span> $720
                    </h4>
                    <span className="month-bill">/Month (annually billed)</span>
                    <p className="platinum-plan-save">Save Up to $20</p>
                    <Link to="#" className="btn btn-primary">
                      Contact Us <i className="feather icon-chevron-right" />
                    </Link>
                  </div>
                  <div className="pricing-content">
                    <ul>
                      <li>
                        <i className="fas fa-check" /> 100 Vehicle
                      </li>
                      <li>
                        <i className="fas fa-check" /> Single Domain
                      </li>
                      <li>
                        <i className="fas fa-check" /> 20 Fleet Manger Create
                      </li>
                      <li>
                        <i className="fas fa-check" /> Driver Dashboard
                      </li>
                      <li>
                        <i className="fas fa-check" /> Service Manger Dashboard
                      </li>
                      <li>
                        <i className="fas fa-check" /> Trip
                      </li>
                      <li>
                        <i className="fas fa-check" /> Tutorial Videos
                      </li>
                      <li>
                        <i className="fas fa-check" /> Support
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Pricing */}
        {/* Download App */}
        <section className="download-section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-header aos" data-aos="fade-up">
                  <h4>Download App</h4>
                  <p>Personalized Pricing Plans Suited to You</p>
                </div>
              </div>
            </div>
          </div>
          <div className="download-bg">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-7 col-md-12 aos" data-aos="fade-up">
                  <div className="download-img">
                    <img src={mobileImg} alt="Mobile" />
                  </div>
                </div>
                <div className="col-lg-5 col-md-12">
                  <div className="download-content aos" data-aos="fade-up">
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
              <img
                src={mobileTruck}
                className="mobile-truck aos"
                data-aos="fade-right"
                alt="Truck"
              />
              <img
                src={truckTire}
                className="truck-tire aos"
                data-aos="zoom-in"
                alt="Truck"
              />
            </div>
          </div>
        </section>
        {/* /Download App */}
    </>
  );
};

export default LandingPage;

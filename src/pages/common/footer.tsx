import React from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../utils/router/routes";
import { logo, visaImg, masterImg, amexImg } from "../../utils/imagepath";

const Footer = () => {
  const routes = all_routes;

  return (
    <>
      {/* Footer */}
      <footer className="footer-section">
        {/* Footer Top */}
        <div className="footer-top">
          <div className="container">
            <div className="row">
              {/* Footer Widget */}
              <div className="col-lg-4 col-md-6 aos" data-aos="fade-up">
                <div className="footer-widget">
                  <div className="footer-logo">
                    <Link to={routes.landingPage}>
                      <img src={logo} alt="Logo" />
                    </Link>
                  </div>
                  <div className="footer-content">
                    <p>
                      Masters of Motion Logistics, or M.O.M., as we’re
                      affectionately known, is just that, the matriarch of our
                      trucking family. We see our drivers as family, and we want
                      to add that special touch to transportation and take care
                      of our family in ensuring their safe arrival home.
                    </p>
                  </div>
                </div>
              </div>
              {/* /Footer Widget */}
              {/* Footer Widget */}
              <div className="col-lg-2 col-md-6 aos" data-aos="fade-up">
                <div className="footer-widget footer-menu">
                  <h2 className="footer-title">Quick Links</h2>
                  <ul>
                    <li>
                      <Link to={routes.landingPage}>Home</Link>
                    </li>
                    <li>
                      <Link to="#">About Us</Link>
                    </li>
                    <li>
                      <Link to="pricing.html">Pricing Plans</Link>
                    </li>
                    <li>
                      <Link to="#">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* /Footer Widget */}
              {/* Footer Widget */}
              <div className="col-lg-2 col-md-6 aos" data-aos="fade-up">
                <div className="footer-widget footer-menu">
                  <h2 className="footer-title">Others</h2>
                  <ul>
                    <li>
                      <Link to="#">Blogs</Link>
                    </li>
                    <li>
                      <Link to="#">Terms and Conditions</Link>
                    </li>
                    <li>
                      <Link to="#">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="#">Cookie Policy</Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* /Footer Widget */}
              {/* Footer Widget */}
              <div className="col-lg-4 col-md-6 aos" data-aos="fade-up">
                <div className="footer-widget footer-contact">
                  <h2 className="footer-title">Contact</h2>
                  <div className="footer-address">
                    <span>
                      <i className="feather icon-phone-call" />
                    </span>
                    <p>
                      <b>Phone Number:</b> 1-800-874-5114
                    </p>
                  </div>
                  <div className="footer-address">
                    <span>
                      <i className="feather icon-mail" />
                    </span>
                    <p>
                      <b>Email:</b> info@mastersofmotionlogistics.com
                      sales@mastersofmotionlogistics.com
                      quotes@mastersofmotionlogistics.com
                    </p>
                  </div>
                  <div className="footer-address">
                    <span>
                      <i className="feather icon-map-pin" />
                    </span>
                    <p>
                      <b>Address:</b> 3333 Preston Road, Suite 300 - 1358
                      Frisco, Texas 75034
                    </p>
                  </div>
                </div>
              </div>
              {/* /Footer Widget */}
            </div>
          </div>
        </div>
        {/* /Footer Top */}
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="container">
            <div className="footer-social-info">
              <ul className="nav">
                <li>
                  <img src={visaImg} alt="Visa" />
                </li>
                <li>
                  <img src={masterImg} alt="Master" />
                </li>
                <li>
                  <img src={amexImg} alt="Amex" />
                </li>
              </ul>
              <div className="social-link">
                <Link to="#">
                  <i className="fab fa-facebook-f hi-icon" />
                </Link>
                <Link to="#">
                  <i className="fab fa-twitter hi-icon" />
                </Link>
                <Link to="#">
                  <i className="fab fa-linkedin-in hi-icon" />
                </Link>
                <Link to="#">
                  <i className="fab fa-youtube hi-icon" />
                </Link>
              </div>
            </div>
            <div className="copyright">
              Copyright © 2024 Master of Motion Logistics. All rights are
              reserved.
            </div>
          </div>
        </div>
        {/* /Footer Bottom */}
      </footer>
      {/* Footer */}
    </>
  );
};

export default Footer;

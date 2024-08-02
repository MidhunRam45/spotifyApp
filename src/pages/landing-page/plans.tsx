import React,{ useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ApiServiceContext } from '../../services/api/api.service';

const Plans = () => {
  const { getData } = useContext(ApiServiceContext)


  return (
    <>
      <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-header">
                  <h4>Pricing Plan</h4>
                  <p>Personalized Pricing Plans Suited to You</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="price-toggle">
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
              <div className="col-lg-4 col-md-6 d-flex">
                <div className="pricing-card w-100">
                  <div className="pricing-plan-header">
                    <h5>Free Trail</h5>
                    <h4>Free</h4>
                    <span className="month-bill annually-bill">
                      /Month (annually billed)
                    </span>
                    <Link to="#" className="btn btn-white">
                      Choose Plan <i className="feather-chevron-right" />
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
              <div className="col-lg-4 col-md-6 d-flex">
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
                      Choose Plan <i className="feather-chevron-right" />
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
              <div className="col-lg-4 col-md-6 d-flex">
                <div className="pricing-card w-100">
                  <div className="pricing-plan-header">
                    <h5>Platinum Plan</h5>
                    <h4>
                      <span>$740</span> $720
                    </h4>
                    <span className="month-bill">/Month (annually billed)</span>
                    <p className="platinum-plan-save">Save Up to $20</p>
                    <Link to="#" className="btn btn-primary">
                      Contact Us <i className="feather-chevron-right" />
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
    </>
  )
  
};

export default Plans;
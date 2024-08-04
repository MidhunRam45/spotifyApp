import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  companyLogo,
  freeIcon,
  shape04,
  shape06,
  shape07,
  shape09,
} from "../../utils/imagepath";
import { all_routes } from "../../utils/router/routes";
import "aos/dist/aos.css";
import AOS from "aos";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { ApiServiceContext } from "../../services/api/api.service";
import { end_points } from "../../services/core.index";

const CompanyRegister = () => {
  const { postData } = useContext(ApiServiceContext);

  const routes = all_routes;
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const validationSchema = Yup.object().shape({
    companyName: Yup.string().required("Company Name is required"),
    domainName: Yup.string().required("Domain Name is required"),
    companyEmail: Yup.string()
      .email("Invalid email format")
      .required("Company Email is required"),
    companyPhoneNumber: Yup.string().required(
      "Company Phone Number is required"
    ),
    companyAddress: Yup.string()
      .max(255, "Maximum 255 characters allowed")
      .required("Company Address is required"),
    contactPersonName: Yup.string().required("Contact Person Name is required"),
    contactPersonEmail: Yup.string()
      .email("Invalid email format")
      .required("Contact Person Email is required"),
    contactPersonPhoneNumber: Yup.string().required(
      "Contact Person Phone Number is required"
    ),
    // companyLogo: Yup.mixed().required("Company Logo is required"),
  });

  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data: any) => {
    let urls = end_points.company_register.url;
    const response = await postData(urls,data);
    console.log("response",response)
    console.log("Form submitted");
    console.log("Form data", data);
  };

  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-bar">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="breadcrumb-info">
                <h2 className="breadcrumb-title">Company Register</h2>
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to={routes.landingPage}>Home</Link>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                      Register
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Breadcrumb */}
      {/* Page Content */}
      <div className="content">
        <div className="content-shapes">
          <img src={shape09} className="shape-img9" alt="Shape" />
          <img src={shape07} className="shape-img7" alt="Shape" />
          <img src={shape06} className="shape-img6" alt="Shape" />
          <img src={shape04} className="shape-img4" alt="Shape" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header">
                <h4>Register your Company</h4>
                <p>Personalized Pricing Plans Suited to You</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-lg-8 col-xl-8">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="company-info">
                  <h4 className="company-title">Company Details</h4>
                  <div className="company-card">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-wrap">
                          <label>
                            Company Name <span className="text-danger">*</span>
                          </label>
                          <Controller defaultValue=""
                            name="companyName"
                            control={control}
                            render={({ field }) => (
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Company Name"
                                {...field}
                              />
                            )}
                          />
                          {errors.companyName && (
                            <small className="text-danger">
                              {errors.companyName.message}
                            </small>
                          )}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-wrap">
                          <label>
                            Domain Name <span className="text-danger">*</span>
                          </label>
                          <Controller defaultValue=""
                            name="domainName"
                            control={control}
                            render={({ field }) => (
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Domain Name"
                                {...field}
                              />
                            )}
                          />
                          {errors.domainName && (
                            <small className="text-danger">
                              {errors.domainName.message}
                            </small>
                          )}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-wrap">
                          <label>
                            Company Email <span className="text-danger">*</span>
                          </label>
                          <Controller defaultValue=""
                            name="companyEmail"
                            control={control}
                            render={({ field }) => (
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Company Email"
                                {...field}
                              />
                            )}
                          />
                          {errors.companyEmail && (
                            <small className="text-danger">
                              {errors.companyEmail.message}
                            </small>
                          )}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-wrap">
                          <label>
                            Company Phone Number{" "}
                            <span className="text-danger">*</span>
                          </label>
                          <Controller defaultValue=""
                            name="companyPhoneNumber"
                            control={control}
                            render={({ field }) => (
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Mobile Number"
                                {...field}
                              />
                            )}
                          />
                          {errors.companyPhoneNumber && (
                            <small className="text-danger">
                              {errors.companyPhoneNumber.message}
                            </small>
                          )}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-wrap">
                          <label>
                            Company Address{" "}
                            <span className="text-danger">*</span>
                          </label>
                          <Controller defaultValue=""
                            name="companyAddress"
                            control={control}
                            render={({ field }) => (
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Address"
                                {...field}
                              />
                            )}
                          />
                          {errors.companyAddress && (
                            <small className="text-danger">
                              {errors.companyAddress.message}
                            </small>
                          )}
                          <p className="address-maximum">
                            <i className="feather icon-alert-circle" /> Maximum
                            255 Characters
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="company-info">
                  <h4 className="company-title">Contact Person</h4>
                  <div className="company-card">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-wrap">
                          <label>
                            Contact Person Name{" "}
                            <span className="text-danger">*</span>
                          </label>
                          <Controller defaultValue=""
                            name="contactPersonName"
                            control={control}
                            render={({ field }) => (
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Contact Person Name"
                                {...field}
                              />
                            )}
                          />
                          {errors.contactPersonName && (
                            <small className="text-danger">
                              {errors.contactPersonName.message}
                            </small>
                          )}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-wrap">
                          <label>
                            Contact Person Email{" "}
                            <span className="text-danger">*</span>
                          </label>
                          <Controller defaultValue=""
                            name="contactPersonEmail"
                            control={control}
                            render={({ field }) => (
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Contact Person Email"
                                {...field}
                              />
                            )}
                          />
                          {errors.contactPersonEmail && (
                            <small className="text-danger">
                              {errors.contactPersonEmail.message}
                            </small>
                          )}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-wrap">
                          <label>
                            Contact Person Phone Number{" "}
                            <span className="text-danger">*</span>
                          </label>
                          <Controller defaultValue=""
                            name="contactPersonPhoneNumber"
                            control={control}
                            render={({ field }) => (
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Contact Person Phone Number"
                                {...field}
                              />
                            )}
                          />
                          {errors.contactPersonPhoneNumber && (
                            <small className="text-danger">
                              {errors.contactPersonPhoneNumber.message}
                            </small>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="company-info">
                  <h4 className="company-title">Company Logo</h4>
                  <div className="form-wrap">
                    <div className="upload-info">
                      <label className="file-upload">
                        <input
                          type="file"
                          onChange={(event) => {
                            const file = event.target.files?.[0];
                            if (file) {
                              setValue("companyLogo", file);
                            }
                          }}
                        />
                        <span>
                          <i className="feather icon-upload" /> Choose to File
                          Upload
                        </span>
                      </label>
                      {errors.companyLogo && (
                        <small className="text-danger">
                          {errors.companyLogo.message}
                        </small>
                      )}
                      <p>
                        <i className="feather icon-alert-circle" /> Maximum File
                        size 10MB &amp; PNG, JPEG, SVG
                      </p>
                    </div>
                  </div>
                  <div className="upload-grid">
                    <div className="upload-img">
                      <img src="" alt="Logo" />
                    </div>
                    <div className="upload-text">
                      <h6>Logo_Name.png</h6>
                      <p>
                        18KB <a href="#">Remove</a>
                      </p>
                    </div>
                  </div>
                </div> */}
                <div className="form-wrap">
                  <div className="company-btns">
                    <button type="submit" className="btn btn-primary">
                      Create
                    </button>
                    <button type="reset" className="btn btn-light">
                      Cancel
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-12 col-lg-4 col-xl-4 theiaStickySidebar">
              <div className="company-info">
                <h4 className="company-title">Selected Plan</h4>
                <div className="company-select-card">
                  <div className="company-select-header">
                    <div className="plan-header">
                      <h4>
                        Free Plan
                        <span>
                          <img src={freeIcon} alt="Icon" /> Free
                        </span>
                      </h4>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard.
                      </p>
                    </div>
                    <div className="plan-duration">
                      <p>
                        <span>Month</span> $0
                      </p>
                    </div>
                  </div>
                  <div className="plan-features">
                    <h6>Features:</h6>
                    <div className="plan-feature-list">
                      <ul className="nav">
                        <li className="feature-bg-gray">
                          <i className="fas fa-check" /> 10 Vehicle
                        </li>
                        <li className="feature-bg-gray">
                          <i className="fas fa-check" /> Domain
                        </li>
                        <li className="feature-bg-gray">
                          <i className="fas fa-check" /> 1 Fleet Manger
                        </li>
                        <li className="feature-bg-gray">
                          <i className="fas fa-check" /> Driver Dashboard
                        </li>
                        <li className="feature-bg-gray">
                          <i className="fas fa-check" /> Service Manager
                          Dashboard
                        </li>
                        <li className="feature-bg-danger">
                          <i className="fas fa-xmark" /> Trip
                        </li>
                        <li className="feature-bg-danger">
                          <i className="fas fa-xmark" /> Tutorial Videos
                        </li>
                        <li className="feature-bg-danger">
                          <i className="fas fa-xmark" /> Support
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="plan-feature-btn">
                    <Link to="#" className="btn btn-primary">
                      Change Plan
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
    </>
  );
};

export default CompanyRegister;

import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { shape04, shape06, shape07, shape09 } from "../../utils/imagepath";
import { all_routes } from "../../utils/router/routes";
import "aos/dist/aos.css";
import AOS from "aos";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { ApiServiceContext } from "../../services/api/api.service";
import { end_points } from "../../services/core.index";
import { useSelector } from "react-redux";
/* import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; */
import { toast } from "react-toastify";
import { addressMaxLength, email, onlyAlphabet, validMessage } from "../../utils/patterns/regex.pattern";


interface FormValues {
  company_name: string;
  domain_name: string;
  company_email: string;
  company_phone: string;
  address: string;
  contact_person_name: string;
  contact_person_email: string;
  contact_person_phone: string;
  company_image: File | null;
}

const CompanyRegister = (prop: any) => {
  const { postData } = useContext(ApiServiceContext);
  const [preview, setPreview] = useState<string | null>(null);
  const navigate = useNavigate();
  const selectedPlan = useSelector((state: any) => state.plan.selectedPlan);

  const planType = useSelector((state: any) => state.plan.planType);
  console.log(selectedPlan);

  const routes = all_routes;
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
    window.scrollTo(0, 0)
  }, []);

  const validationSchema = Yup.object().shape({
    company_name: Yup.string().trim().required("Company name is required")
      .max(30, "maximum 30 characters allowed"),

    domain_name: Yup.string().trim().required("Domain name is required")
      .max(6, "maximum 6 characters allowed")
      .matches(onlyAlphabet, validMessage.onlyAlphabet),

    company_email: Yup.string()
      .email("Please enter a valid email")
      .trim()
      .matches(email, "Please enter a valid email")
      .required("Email is required"),

    company_phone: Yup.string()
      .required("Company phone number is required")
      .matches(/^[0-9]{10,16}$/, "Phone number must be between 10 and 16 digits"),

    address: Yup.string()
      .trim()
      .required("Company address is required")
      .max(
        addressMaxLength,
        `Company address cannot exceed ${addressMaxLength} characters`
      ),

    contact_person_name: Yup.string()
      .trim()
      .required("Contact person name is required")
      .max(30, "maximum 30 characters allowed")
      .matches(onlyAlphabet, validMessage.onlyAlphabet),

    contact_person_email: Yup.string()
      .email("Please enter a valid email")
      .trim()
      .matches(email, "Please enter a valid email")
      .required("Email is required"),

    contact_person_phone: Yup.string()
      .matches(/^[0-9]{10,16}$/, "Phone number must be between 10 and 16 digits")
      .required("Contact person phone number is required"),

    // company_image: Yup.mixed()
    //   .required("Company logo is required")
    //   .test("fileSize", "File size should not exceed 10MB", (value) => {
    //     return value && value.size <= 10 * 1024 * 1024; // 10MB in bytes
    //   })
    //   .test("fileType", "Unsupported File Format", (value) => {
    //     return (
    //       value &&
    //       ["image/jpeg", "image/png", "image/svg+xml"].includes(value.type)
    //     );
    //   }),
    company_image: Yup
      .mixed()
      .required('Company logo is required')
      .test('image.value', 'Please upload an image', (value: any) => {
        if (!value || value.length === 0) {
          return false
        } else return true
      })
      .test('fileSize', 'File size is too large', (value: any) => {
        if (value === '') {
          return false
        }
        if (!value || !value.length || typeof value === 'string') {
          // Skip validation if the field is empty
          return true
        }
        return value && value[0].size <= 2097152
      }),
  });

  const {
    control,
    setValue,
    trigger,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
  });


  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setValue("company_image", file, { shouldValidate: true });
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);
    }
  };


  const onSubmit = async (data: any) => {
    try {
      data.plan_id = selectedPlan.plan_id;
      let urls = end_points.company_register.url;

      const response = await postData(urls, data);
      if (response.status === 200) {
        toast.success('Created Successfully!');
        navigate('/');
      }
      console.log("response", response);
    } catch (e: any) {
      console.error("Full error object:", e);
      toast.error('An error occurred during submission.');

      /* if (e.response && e.response.data) {
        console.log("Error response data:", e.response.data);
        if (e.response.data.response && e.response.data.response.responseMessage) {
          toast.error(e.response.data.response.responseMessage);
        } else {
          toast.error('An error occurred during submission.');
        }
      } */
    }
  };

  const handleCancel = () => {
    reset();
    setPreview(null);
    navigate("/");
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
                          <Controller
                            defaultValue=""
                            name="company_name"
                            control={control}
                            render={({ field }) => (
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Company Name"
                                maxLength={30}
                                {...field}
                                onChange={(event: any) => {
                                  field.onChange(event);
                                  trigger('company_name');
                                }}
                              />
                            )}
                          />
                          {errors.company_name && (
                            <p className="text-danger error-msg mt-1">
                              {errors.company_name.message}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-wrap">
                          <label>
                            Domain Name <span className="text-danger">*</span>
                          </label>
                          <Controller
                            defaultValue=""
                            name="domain_name"
                            control={control}
                            render={({ field }) => (
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Domain Name"
                                maxLength={6}
                                {...field}
                                onChange={(event: any) => {
                                  field.onChange(event);
                                  trigger('domain_name');
                                }}
                              />
                            )}
                          />
                          {errors.domain_name && (
                            <p className="text-danger error-msg mt-1">
                              {errors.domain_name.message}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-wrap">
                          <label>
                            Company Email <span className="text-danger">*</span>
                          </label>
                          <Controller
                            defaultValue=""
                            name="company_email"
                            control={control}
                            render={({ field }) => (
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Company Email"
                                maxLength={6}
                                {...field}
                                onChange={(event: any) => {
                                  field.onChange(event);
                                  trigger('company_email');
                                }}
                              />
                            )}
                          />
                          {errors.company_email && (
                            <p className="text-danger error-msg mt-1">
                              {errors.company_email.message}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-wrap">
                          <label>
                            Company Phone Number{" "}
                            <span className="text-danger">*</span>
                          </label>
                          <Controller
                            defaultValue=""
                            name="company_phone"
                            control={control}
                            render={({ field }) => (
                              <input
                                type="number"
                                className="form-control custom-number-input"
                                placeholder="Enter Company Phone Number"
                                {...field}
                                onChange={(event: any) => {
                                  field.onChange(event);
                                  trigger('company_phone');
                                }}
                              />
                            )}
                          />
                          {errors.company_phone && (
                            <p className="text-danger error-msg mt-1">
                              {errors.company_phone.message}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-wrap">
                          <label>
                            Company Address{" "}
                            <span className="text-danger">*</span>
                          </label>
                          <Controller
                            defaultValue=""
                            name="address"
                            control={control}
                            render={({ field }) => (
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Company Address"
                                maxLength={500}
                                {...field}
                                onChange={(event: any) => {
                                  field.onChange(event);
                                  trigger('address');
                                }}
                              />
                            )}
                          />
                          {errors.address && (
                            <p className="text-danger error-msg mt-1">
                              {errors.address.message}
                            </p>
                          )}
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
                          <Controller
                            defaultValue=""
                            name="contact_person_name"
                            control={control}
                            render={({ field }) => (

                              <input
                                {...field}
                                type="text"
                                className="form-control"
                                placeholder="Enter Contact Person Name"
                                maxLength={30}
                                onBlur={() => trigger('contact_person_name')}
                                onChange={(event: any) => {
                                  field.onChange(event);
                                  trigger('contact_person_name');
                                }}
                                onKeyDown={(event) => {
                                  const regex = onlyAlphabet;
                                  if (
                                    !regex.test(event.key) &&
                                    event.key !== 'Backspace'
                                  ) {
                                    event.preventDefault();
                                  }
                                }}
                                autoComplete="false"
                              />
                            )}
                          />


                          {errors.contact_person_name && (
                            <p className="text-danger error-msg mt-1">
                              {errors.contact_person_name.message}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-wrap">
                          <label>
                            Contact Person Email{" "}
                            <span className="text-danger">*</span>
                          </label>
                          <Controller
                            defaultValue=""
                            name="contact_person_email"
                            control={control}
                            render={({ field }) => (
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Contact Person Email"
                                {...field}
                                onChange={(event: any) => {
                                  field.onChange(event);
                                  trigger('contact_person_email');
                                }}
                              />
                            )}
                          />
                          {errors.contact_person_email && (
                            <p className="text-danger error-msg mt-1">
                              {errors.contact_person_email.message}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-wrap">
                          <label>
                            Contact Person Phone Number{" "}
                            <span className="text-danger">*</span>
                          </label>
                          <Controller
                            defaultValue=""
                            name="contact_person_phone"
                            control={control}
                            render={({ field }) => (
                              <input
                                type="number"
                                className="form-control"
                                placeholder="Enter Contact Person Phone Number"
                                {...field}
                                onChange={(event: any) => {
                                  field.onChange(event);
                                  trigger('contact_person_phone');
                                }}
                              />
                            )}
                          />
                          {errors.contact_person_phone && (
                            <p className="text-danger error-msg mt-1">
                              {errors.contact_person_phone.message}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="company-info">
                  <h4 className="company-title">Company Logo</h4>
                  <div className="form-wrap">
                    <div className="upload-info">
                      <label className="file-upload">
                        <input
                          name="company_image"
                          type="file"
                          accept="image/png, image/jpeg, image/svg+xml"
                          onChange={handleFileChange}
                        />
                        <span>
                          <i className="feather icon-upload" /> Choose File to
                          Upload
                        </span>
                      </label>
                      {errors.company_image && (
                        <p className="text-danger error-msg">
                          {errors.company_image.message}
                        </p>
                      )}
                      {/* <p>
                        <i className="feather icon-alert-circle" /> Maximum File
                        size 10MB &amp; PNG, JPEG, SVG
                      </p> */}
                    </div>
                  </div>
                  {preview && (
                    <div className="upload-grid">
                      <div className="upload-img">
                        <img src={preview} alt="Logo" />
                      </div>
                      <div className="upload-text">
                        <h6>Logo Preview</h6>
                      </div>
                    </div>
                  )}
                </div>
                <div className="form-wrap">
                  <div className="company-btns">
                    <button type="submit" className="btn btn-primary">
                      Create
                    </button>
                    <button
                      type="reset"
                      className="btn btn-light"
                      onClick={handleCancel}
                    >
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
                        {selectedPlan.plan_name}
                        {/* <span>
                          <img src={freeIcon} alt="Icon" /> Free
                        </span> */}
                      </h4>
                      <p>{selectedPlan.plan_description}</p>
                      {/* <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard.
                      </p> */}
                    </div>
                    <div className="plan-duration">
                      {planType === true ? (
                        <p>
                          <span>Yearly</span>${selectedPlan.amount_year}
                        </p>
                      ) : (
                        <p>
                          <span>Month</span>${selectedPlan.amount_month}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="plan-features">
                    <h6>Features:</h6>

                    <div className="plan-feature-list">
                      <ul className="nav">
                        {selectedPlan.planFeatures.map((features: any, index: integer) => (
                          <li key={index} className="feature-bg-gray">
                            <i className="fas fa-check" /> {features}
                          </li>
                        ))}
                        {/* <li className="feature-bg-gray">
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
                        </li> */}
                      </ul>
                    </div>
                  </div>
                  <div className="plan-feature-btn">
                    <Link to="/" className="btn btn-primary">
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

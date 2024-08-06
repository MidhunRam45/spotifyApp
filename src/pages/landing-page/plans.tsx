import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ApiServiceContext } from "../../services/api/api.service";
import { end_points } from "../../services/end_point/end_points";
import { all_routes } from "../../utils/router/routes";
import { setPlanData, setPlanType } from "../../core/redux/planSlice";
import { useDispatch } from "react-redux";

const Plans = () => {
  const { getData } = useContext(ApiServiceContext);
  const [plansList, setPlansList] = useState<any>([]);
  
  console.log(plansList);

  const [planType, setPlan] = useState<boolean>(false);
  const [togglePlan, setTogglePlan] = useState<boolean>(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;

    setPlan(checked);
    //console.log(checked);
    dispatch(setPlanType(checked));
  };

  useEffect(() => {
    dispatch(setPlanType(false));
  }, [setPlanType]);

  const PlansList = async (search?: any) => {
    let urls = end_points.price_list.url;
    //urls += `?page=${page}&limit=${limitCount}&searchTerm=${nameSearch}`
    //console.log(urls);
    // urls += `?searchTerm=${nameSearch}`
    const response = await getData(urls);
    if (response?.status === 200) {
      console.log(response?.data?.data);
      setPlansList(response?.data?.data?.prices);
    }
  };
  const dispatch = useDispatch();
  useEffect(() => {
    PlansList();
  }, []);

  return (
    <>
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
                  <input
                    type="checkbox"
                    id="monthly"
                    className="check"
                    checked={planType}
                    onChange={handleCheckboxChange}
                  />
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
          {plansList.map((plan: any) => (
            <div key={plan.plan_id} className="col-lg-4 col-md-6 d-flex aos" data-aos="fade-up">
              <div className="pricing-card w-100">
                <div className="pricing-plan-header">
                  <h5>{plan.plan_name}</h5>
                  <h4>
                    <span>{plan.currency}740</span>
                    {plan.currency}
                    {planType === true ? plan.amount_year : plan.amount_month}
                  </h4>
                  <span className="month-bill annually-bill">
                    /Month (annually billed)
                  </span>
                  <Link to={all_routes.companyRegister} onClick={() => dispatch(setPlanData(plan))} className="btn btn-white">
                    Choose Plan <i className="feather icon-chevron-right" />
                  </Link>
                </div>
                <div className="pricing-content">
                  <ul>
                    {plan.planFeatures.map((feature: any) => (
                      <li>
                        <i className="fas fa-check" /> {feature}
                      </li>
                    ))}
                    
                    {/*<li>
                      <i className="fas fa-xmark" /> Trip
                    </li>
                     */}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Plans;

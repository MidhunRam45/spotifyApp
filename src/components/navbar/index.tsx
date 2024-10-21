import "./navbar.css";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { getData } from "../../services/api/api.service";
// import { useUserContext } from "../../context/UserContext";

function Navbar() {
  //   const { getUserDetails, setToken } = useUserContext();
  //   const [user, setUser] = useState(null);
  //   const [showUserDetails, setShowUserDetails] = useState(false);

  const getUserDetails = async () => {
    try {
      const response = getData("me");
      if (response) {
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  const logout = () => {
    sessionStorage.removeItem("access_token");
    window.location.href = "http://localhost:3000";
  };

  //   const toggleUserDetails = () => {
  //     setShowUserDetails(!showUserDetails);
  //   };

  const goBack = () => {
    window.history.back();
  };

  const goForward = () => {
    window.history.forward();
  };

  //   user && console.log(user);

  return (
    <div className="navbar">
      <div className="arrows">
        <div onClick={goBack}>
          <FontAwesomeIcon icon={faCircleArrowLeft} />
        </div>

        <div onClick={goForward}>
          <FontAwesomeIcon icon={faCircleArrowRight} />
        </div>
      </div>

      {/* <div className="user" onClick={toggleUserDetails}> */}
      {/* {user && user.imageUrl && <img src={user.imageUrl} alt="User" />}
        {(!user || !user.imageUrl) && <FontAwesomeIcon icon={faUser} />}
        {showUserDetails && (
          <div className="user-details">
            <span>{user && user.name}</span>
            <button onClick={logout}>Logout</button>
          </div>
        )} */}
      {/* </div> */}
    </div>
  );
}

export default Navbar;

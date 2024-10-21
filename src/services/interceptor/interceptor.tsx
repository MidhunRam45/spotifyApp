// axiosInstance.js
import React from "react";
import axios, { AxiosInstance } from "axios";
import ReactDOM from "react-dom";
import { end_points } from "../core.index";
import store from "../../core/redux/store";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
// import { removeAuthToken } from "../core/redux/commonSlice";

const axiosInstance: AxiosInstance = axios.create();

axiosInstance.interceptors.request.use(
  async (config: any) => {
    const token: any = sessionStorage.getItem("access_token");
    config.baseURL = API_URL;

    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
    // } else {
    //   config.headers = {
    //     ...config.headers,
    //     Authorization: `Bearer ${token}`,
    //     token: `${token}`,
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //   };
    // }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  async (response: any) => {
    await handleResponseStatus(response);
    return response;
  },
  async (error) => {
    await handleResponseStatus(error.response);
    return Promise.reject(error);
  }
);

const handleResponseStatus = async (response: any) => {
  if (response) {
    switch (response.status) {
      case 200:
        break;
      case 201:
        response?.data?.message && toast.success(response?.data?.message);
        break;
      case 422:
        response?.data?.validation
          ? toast.error(response?.data?.validation?.[0]?.msg)
          : toast.error(response?.data?.message?.[0]?.msg);
        break;
      case 404:
        toast.error(response?.data?.message);
        break;
      case 409:
        toast.error(response?.data?.message);
        break;
      case 400:
        toast.error(response?.data?.message);
        break;
      case 500:
        toast.error("Internal server error");
        break;
      case 401:
        toast.error("Unauthorised");
        setTimeout(() => {
          // store.dispatch(removeAuthToken());
        }, 1000);
        break;
      default:
        break;
    }
  }
};

export default axiosInstance;

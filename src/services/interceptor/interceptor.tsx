import React, { createContext, useContext, useRef } from 'react';
import axios, { AxiosInstance, AxiosResponse, CancelTokenSource } from 'axios';
import { useLoader } from '../loader/loaderContext'
import { toast } from 'react-toastify';
import store from '../../core/redux/store';
import { useDispatch } from 'react-redux';

export const AxiosContext = createContext<any>({});

const AxiosProvider = (props: { children: any }) => {
  const axiosInstance: AxiosInstance = axios.create();
  const { showLoader, hideLoader } = useLoader();
  const cancelTokenSourceRef = useRef<CancelTokenSource | null>(null);
  const dispatch = useDispatch();

  const hideLoadersApi: Array<string | undefined> = [];
  axiosInstance.interceptors.request.use(
    async (config: any) => {
      if (!hideLoadersApi.includes(config.url)) {
        showLoader();
      }

      const token = 'test'; //store?.getState()?.login?.token;
      //config.baseURL = API_URL;
      config.baseURL = 'https://development-truckingapp-backend.dreamstechnologies.com/api/';
      if (config.url === '/test') {
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${token}`,
          token: `${token}`,
          'Content-Type': 'application/x-www-form-urlencoded',
          Accept: 'application/json',
        };
      } else {
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${token}`,
          token: `${token}`,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        };
      }

      return config;
    },
    (error) => {
      hideLoader();
      return Promise.reject(error);
    },
  );
  axiosInstance.interceptors.response.use(
    async (response: AxiosResponse) => {
      hideLoader();
      await handleResponseStatus(response);
      return response;
    },
    async (error) => {
      hideLoader();
      await handleResponseStatus(error.response);
      return Promise.reject(error);
    },
  );

  const handleResponseStatus = async (response: AxiosResponse | undefined) => {
    if (response) {
      switch (response.status) {
        case 200:
          toast.success(response.data.message);
          break;
        case 201:
          // toast.error(response.data.message);
          break;
        case 422:
          toast.error(response.data.errors[0].msg);
          break;
        case 500:
          toast.error(response.data.error);
          break;
        case 502:
          toast.error(response.data.error);
          break;
        case 400:
          toast.error(response.data.error);
          break;
        case 403:
          toast.error(response.data.error);
          break;
        case 404:
          toast.error(response.data.error);
          break;
        case 409:
          toast.error(response.data.error);
          break;
        case 207: {
          const { failed } = response.data.response;
          const { success } = response.data.response;
          const message = response.data.message;
          if (failed && failed.length > 0) {
            toast.warning(
              <>
                {success.length > 0 && (
                  <>
                    <p>{message}</p>
                    <div>
                      {success.map((item: any, index: any) => (
                        <div key={index}>
                          <strong>Email:</strong> {item.email}
                          <br />
                          <strong>Reason:</strong> {item.reason}
                        </div>
                      ))}
                    </div>
                  </>
                )}
                <div>
                  {failed.map((item: any, index: any) => (
                    <div key={index}>
                      <strong>Email:</strong> {item.email}
                      <br />
                      <strong>Reason:</strong> {item.reason}
                    </div>
                  ))}
                </div>
                ,
              </>,
            );
          }
          break;
        }
        case 401:
          toast.error('Unauthorized request');
          // setTimeout(() => {
          //   store.dispatch(logout());
          // }, 1000);
          // dispatch(setLoginUserDetails(undefined));
          // dispatch(setUserDetails(undefined));
          break;
        default:
          // showError('Error type not found')
          break;
      }
    }
  };

  return (
    <AxiosContext.Provider value={{ axiosInstance }}>
      {props.children}
    </AxiosContext.Provider>
  );
};

export default AxiosProvider;

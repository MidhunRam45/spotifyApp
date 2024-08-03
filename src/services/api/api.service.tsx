import React, { createContext, useContext } from 'react';
import { AxiosContext } from '../../services/interceptor/interceptor';
export const ApiServiceContext = createContext<any>({});

const ApiServiceProvider = (props: {
  children:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) => {
  const { axiosInstance } = useContext(AxiosContext);

  const postData = (url: string, data: any) => {
    return new Promise((resolve, reject) => {
      axiosInstance
        .post(url, data)
        .then((res: any) => {
          resolve(res);
        })
        .catch((error: any) => {
          reject(error);
          return error;
        });
    });
  };

  const getData = (url: string) => {
    
    return new Promise((resolve, reject) => {
      axiosInstance
        .get(url)
        .then((res: any) => {
          resolve(res);
        })
        .catch((error: any) => {
          reject(error);
        });
    });
  };

  const patchData = (url: string) => {
    return new Promise((resolve, reject) => {
      axiosInstance
        .patch(url)
        .then((res: any) => {
          resolve(res);
        })
        .catch((error: any) => {
          reject(error);
        });
    });
  };

  const putData = (url: string, data: any) => {
    return new Promise((resolve, reject) => {
      axiosInstance
        .put(url, data)
        .then((res: any) => {
          resolve(res);
        })
        .catch((error: any) => {
          reject(error);
        });
    });
  };
  const deleteData = (url: string, data: any) => {
    return new Promise((resolve, reject) => {
      axiosInstance
        .delete(url, { data: data })
        .then((res: any) => {
          resolve(res);
        })
        .catch((error: any) => {
          reject(error);
        });
    });
  };

  const deleteStrignData = (url: string) => {
    return new Promise((resolve, reject) => {
      axiosInstance
        .delete(url)
        .then((res: any) => {
          resolve(res);
        })
        .catch((error: any) => {
          reject(error);
        });
    });
  };
  return (
    <ApiServiceContext.Provider
      value={{
        getData,
        postData,
        patchData,
        putData,
        deleteData,
        deleteStrignData,
      }}
    >
      {props.children}
    </ApiServiceContext.Provider>
  );
};

export default ApiServiceProvider;

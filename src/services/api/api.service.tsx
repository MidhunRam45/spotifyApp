import axiosInstance from "../interceptor/interceptor";

// export const getData: any = (url: string) => {
//   return new Promise((resolve, reject) => {
//     axiosInstance
//       .get(url)
//       .then((res: any) => {
//         resolve(res);
//       })
//       .catch((error: any) => {
//         reject(error);
//       });
//   });
// };
interface ApiResponse<T = any> {
  data: T;
  status: number;
  message?: string;
}
export const getData: any = (url: string, params?: Record<string, any>) => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .get(url, { params }) // Passing the params here
      .then((res: any) => {
        resolve(res.data); // Resolving the actual data from the response
      })
      .catch((error: any) => {
        reject(error);
      });
  });
};

export const postData: any = (url: string, data: any) => {
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
export const patchData: any = (url: string) => {
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

export const putData: any = (url: string, data: any) => {
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
export const deleteData = (url: string) => {
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

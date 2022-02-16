import { axiosInstance } from "../Api/axios";
import useAuth from "../hooks/useAuth";
import axios from "../Api/axios";

const useAxiosPrivate = () => {
  const { auth, setAuth } = useAuth();

  // axios.interceptors.request.use(
  //   (config) => {
  //     const authToken = localStorage.getItem("authToken");
  //     if (authToken !== undefined) {
  //       config.headers.Authorization = `Bearer ${authToken}`;
  //       config.timeout = 800000;
  //     }
  //     return config;
  //   },
  //   (err) => {
  //     return Promise.reject(err);
  //   }
  // );

  // // response interceptors =================================================
  // let isRefreshing = false;
  // let refreshSubscribers = [];

  // axios.interceptors.response.use(
  //   (response) => {
  //     return response;
  //   },
  //   (error) => {
  //     const {
  //       config,
  //       response: { status },
  //     } = error;
  //     const originalRequest = config;

  //     if (status === 401) {
  //       if (!isRefreshing) {
  //         isRefreshing = true;
  //         axios
  //           .post("/auth/token/refresh", {
  //             refresh: localStorage.getItem("refresh_token"),
  //           })
  //           .then(({ data }) => {
  //             isRefreshing = false;
  //             const { access } = data;
  //             localStorage.setItem("authToken", access);
  //             onRrefreshed(data.access);
  //           })
  //           .catch((e) => {
  //             window.location = "/signin";
  //           });
  //       }

  //       const retryOrigReq = new Promise((resolve, reject) => {
  //         subscribeTokenRefresh((access_token) => {
  //           // replace the expired accessToken and retry
  //           originalRequest.headers["Authorization"] = "Bearer " + access_token;
  //           resolve(axios(originalRequest));
  //         });
  //       });
  //       return retryOrigReq;
  //     } else {
  //       return Promise.reject(error);
  //     }
  //   }
  // );

  // function subscribeTokenRefresh(cb) {
  //   refreshSubscribers.push(cb);
  // }

  // function onRrefreshed(access_token) {
  //   refreshSubscribers.map((cb) => cb(access_token));
  // }
  // response interceptors =================================================

  axiosInstance.interceptors.request.use(
    (config) => {
      const access_token = localStorage.getItem("authTokens");
      if (access_token !== undefined) {
        config.headers.Authorization = `Bearer ${access_token}`;
        config.timeout = 800000;
      }
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );

  // response interceptors =================================================
  let isRefreshing = false;
  let refreshSubscribers = [];

  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      const {
        config,
        response: { status },
      } = error;
      const originalRequest = config;

      if (status === 401) {
        if (!isRefreshing) {
          isRefreshing = true;
          axios
            .post("/auth/token/refresh", {
              refresh: auth?.refresh_token,
            })
            .then(({ data }) => {
              isRefreshing = false;
              const { access } = data;
              setAuth({ access_token: access });
              localStorage.setItem("authToken", access);
              onRrefreshed(data.access);
            })
            .catch((e) => {
              window.location = "/signin";
            });
        }

        const retryOrigReq = new Promise((resolve) => {
          subscribeTokenRefresh((access_token) => {
            // replace the expired accessToken and retry
            originalRequest.headers["Authorization"] = "Bearer " + access_token;
            resolve(axios(originalRequest));
          });
        });
        return retryOrigReq;
      } else {
        return Promise.reject(error);
      }
    }
  );

  function subscribeTokenRefresh(cb) {
    refreshSubscribers.push(cb);
  }

  function onRrefreshed(access_token) {
    refreshSubscribers.map((cb) => cb(access_token));
  }

  return axiosInstance;
};

export default useAxiosPrivate;

import axios from "axios";
import { authActions } from "../store/auth/authSlice";
import { store } from "../store";

const URL =
  "http://ec2-18-197-107-37.eu-central-1.compute.amazonaws.com:5500/api/v1";

const headers = { "Content-Type": "application/json" };

export const axiosInstanse = axios.create({
  baseURL: URL,
  headers,
});

axiosInstanse.interceptors.request.use(
  function configs(config) {
    const newConfig = {
      ...config,
      headers: {
        ...config.headers,
        Authorization: store.getState().auth.token,
      },
    };
    return newConfig;
  },

  function errorConfigs(error) {
    return Promise.reject(error);
  }
);

axiosInstanse.interceptors.response.use(
  function responses(response) {
    return response;
  },

  function catchError(error) {
    if (error.response.status === 401) {
      store.dispatch(authActions.logOut());
    }

    return Promise.reject(error);
  }
);

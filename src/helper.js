import axios from "axios";
export const BASE_URL = "http://localhost:4000/api/v1";
// const BASE_URL ="http://localhost:3900"

export function axiosClient() {
  let defaultOptions = {
    baseURL: BASE_URL,
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      accept: "application/json",
      "x-auth-token": `${localStorage.getItem("token")}`,
    },
  };
  let instance = axios.create(defaultOptions);
  instance.interceptors.request.use(function (config) {
    config.headers.common = {
      "x-auth-token": `${localStorage.getItem("token")}`,
    };
    return config;
  });
  return instance;
}

export function axiosClientForImage() {
  let defaultOptions = {
    baseURL: BASE_URL,
    headers: {
      "Content-Type": "multipart/form-data",
      accept: "application/json",
      "x-auth-token": `${localStorage.getItem("token")}`,
    },
  };
  let instance = axios.create(defaultOptions);
  instance.interceptors.request.use(function (config) {
    config.headers.common = {
      "x-auth-token": `${localStorage.getItem("token")}`,
    };
    return config;
  });
  return instance;
}

export default axiosClient;

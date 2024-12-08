import axios, { AxiosInstance } from "axios";
import { useAuthStore } from "stores/stores/authStore";

export const useAxios = (): AxiosInstance => {
  const axiosInstance = axios.create();
  const { username, password } = useAuthStore();

  // Encode username and password into base64 format for basic auth
  const authHeader = "Basic " + btoa(`${username}:${password}`);

  // Set the default base URL for API requests
  axiosInstance.defaults.baseURL =
    process.env.REACT_APP_API_URL || "http://localhost:5000/api";

  // Set the Authorization header
  axiosInstance.defaults.headers.Authorization = authHeader;

  return axiosInstance;
};

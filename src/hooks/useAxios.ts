import axios, { AxiosInstance } from "axios";

export const useAxios = (): AxiosInstance => {
  const axiosInstance = axios.create();

  // Retrieve credentials from local storage or use hardcoded ones (for demonstration)
  const username = "user_1"; // Replace with actual username
  const password = "12345678"; // Replace with actual password

  // Encode username and password into base64 format for basic auth
  const authHeader = "Basic " + btoa(`${username}:${password}`);

  // Set the default base URL for API requests
  axiosInstance.defaults.baseURL =
    process.env.REACT_APP_API_URL || "http://localhost:5000/api";

  // Set the Authorization header
  axiosInstance.defaults.headers.Authorization = authHeader;

  return axiosInstance;
};

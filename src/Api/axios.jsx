import axios from "axios";
const BASE_URL = "https://nadetapi.herokuapp.com";

export default axios.create({
  baseURL: BASE_URL,
});

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: false,
});

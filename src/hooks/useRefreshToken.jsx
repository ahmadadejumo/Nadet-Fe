import axios from "../Api/axios";
import useAuth from "./useAuth";

const REFRESH_URL = process.env.REACT_APP_REFRESH_TOKEN_URL;

const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    const response = await axios.post(REFRESH_URL, {
      refresh: localStorage.getItem("refresh_token"),
      withCredentials: false,
    });
    setAuth((prev) => {
      return {
        ...prev,
        access_token: response.data.access,
      };
    });
    localStorage.setItem("access_token", response.data.access);
    return response.data.access;
  };
  return refresh;
};

export default useRefreshToken;

import axios from "../Api/axios";
import useAuth from "./useAuth";

const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    const response = await axios.post("/auth/token/refresh/", {
      refresh: localStorage.getItem("refresh_token"),
      withCredentials: true,
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

import axios from "../Api/axios";
import useAuth from "./useAuth";

const useRefreshToken = () => {
  const { setAuth, auth } = useAuth();
  const ref = async () => {
    const response = await axios.post("/auth/token/refresh/", {
      refresh: auth?.refresh_token,
      withCredentials: true,
    });
    setAuth((prev) => {
      console.log(JSON.stringify(prev));
      console.log(response.data?.access);
      return {
        ...prev,
        access_token: response.data?.access,
      };
    });
    return response.data?.access;
  };
  return ref;
};

export default useRefreshToken;

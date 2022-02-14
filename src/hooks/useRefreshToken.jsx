import axios from "../Api/axios";
import useAuth from "./useAuth";

const useRefreshToken = () => {
  const { setAuth, auth } = useAuth();
  const refresh_token = auth?.refresh_token;
  // console.log(`refreshToken ${refresh_token}`)
  const ref = async () => {
    const response = await axios.post("/auth/token/refresh/", {
      body: JSON.stringify({ refresh: refresh_token }),
      headers: { "Content-Type": "application/json" },
      withCredentials: false,
    });
    setAuth((prev) => {
      // console.log(JSON.stringify(prev));
      // console.log(response.data?.access);
      return {
        ...prev,
        access_token: response.data.access,
      };
    });
    return response.data.access;
  };
  return ref;
};

export default useRefreshToken;

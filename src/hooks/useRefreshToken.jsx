import axios from "../Api/axios";
import useAuth from "./useAuth";

const useRefreshToken = () => {
  const { setAuth, auth } = useAuth();
  const refresh_token = auth?.refresh_token;
  const refresh = async () => {
    const response = await axios.post(
      "/auth/token/refresh/",
      JSON.stringify({ refresh: refresh_token })
    );
    setAuth((prev) => {
      console.log(JSON.stringify(prev));
      console.log(response.data?.access);
      return {
        ...prev,
        access_token: response.data?.access,
      };
    });
    return response.data.access;
  };
  return refresh;
};

export default useRefreshToken;

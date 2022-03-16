import useAuth from "./useAuth";
import axios from "../Api/axios";

const useLogOut = () => {
  const { setAuth } = useAuth();

  const logout = async () => {
    setAuth({});
    try {
      await axios.post("/auth/logout/", {
        withCredentials: true,
      });
    } catch (err) {
      console.error(err);
    }
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
  };

  return logout;
};

export default useLogOut;

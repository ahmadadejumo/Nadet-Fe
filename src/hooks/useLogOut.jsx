import useAuth from "./useAuth";
import axios from "../Api/axios";

const LOGOUT_URL = process.env.REACT_APP_LOGOUT_URL;

const useLogOut = () => {
  const { setAuth } = useAuth();

  const logout = async () => {
    setAuth({});
    try {
      await axios.post(LOGOUT_URL, {
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

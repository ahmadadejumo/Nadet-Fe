import axios from "../Api/axios";
import useAuth from "./useAuth";

const useLogOut = () => {
  const { setAuth } = useAuth();
  const logout = async () => {
    setAuth({});
    try {
      const response = await axios.post("/auth/logout/", {
        withCredentials: true,
      });
    } catch (err) {
      console.error(err);
    }
  };
  return logout;
};

export default useLogOut;

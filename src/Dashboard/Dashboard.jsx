import { useState, useEffect } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useNavigate, useLocation } from "react-router-dom";
import useLogOut from "../hooks/useLogOut";

const Dashboard = () => {
  const [user, setUser] = useState();
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const location = useLocation();
  const logout = useLogOut();

  const signout = async () => {
    await logout();
    navigate("/");
  };

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getUser = async () => {
      try {
        const response = await axiosPrivate.get("/auth/user/", {
          signal: controller.signal,
        });
        // console.log(response.data.username);
        isMounted && setUser(response.data);
      } catch (err) {
        console.error(err);
        navigate("/signin", { state: { from: location }, replace: true });
      }
    };

    getUser();

    return () => {
      isMounted = false;
      controller.abort();
    };
  });

  return (
    <div>
      <h2>User List</h2>
      <ul>
        <li key={user?.pk}>{user?.username}</li>
      </ul>
      <button onClick={signout}>LogOut</button>
    </div>
  );
};

export default Dashboard;

import { useState, useEffect } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useNavigate, useLocation } from "react-router-dom";
import useLogOut from "../hooks/useLogOut";

const Users = () => {
  const [users, setUsers] = useState();
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

    const getUsers = async () => {
      try {
        const response = await axiosPrivate.get("/auth/user/", {
          signal: controller.signal,
        });
        // console.log(response.data.username);
        isMounted && setUsers(response.data);
      } catch (err) {
        console.error(err);
        navigate("/signin", { state: { from: location }, replace: true });
      }
    };

    getUsers();

    return () => {
      isMounted = false;
      controller.abort();
    };
  });

  return (
    <div>
      <h2>Users List</h2>
      {users?.length ? (
        <ul>
          {users.map((user, pk) => (
            <li key={pk}>{user?.username}</li>
          ))}
        </ul>
      ) : (
        <p>No users to display</p>
      )}
      <button onClick={signout}>LogOut</button>
    </div>
  );
};

export default Users;

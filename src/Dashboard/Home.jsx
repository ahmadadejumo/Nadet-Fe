// import { useState, useEffect } from "react";
// import useAxios from "../hooks/useAxios";
// import { useNavigate, useLocation } from "react-router-dom";
// import useLogOut from "../hooks/useLogOut";
// import useRefreshToken from "../hooks/useRefreshToken";
// import { GoogleLogout } from "react-google-login";
import Navbar from "../components/DashboardNavbar";

const Home = () => {
  // const [user, setUser] = useState();
  // const useAxiosPrivate = useAxios();
  // const navigate = useNavigate();
  // const location = useLocation();
  // const logout = useLogOut();
  // const refresh = useRefreshToken();

  // const signOut = async () => {
  //   await logout();
  //   navigate("/signin");
  // };

  // useEffect(() => {
  //   let isMounted = true;
  //   const controller = new AbortController();

  //   const getUser = async () => {
  //     try {
  //       const response = await useAxiosPrivate.get("/auth/user/", {
  //         signal: controller.signal,
  //         withCredentials: false,
  //       });
  //       // console.log(response.data.username);
  //       isMounted && setUser(response.data);
  //     } catch (err) {
  //       console.error(err);
  //       navigate("/signin", { state: { from: location }, replace: true });
  //     }
  //   };

  //   getUser();

  //   return () => {
  //     isMounted = false;
  //     controller.abort();
  //   };
  // });

  return (
    <div className="bg-[#EEEEF4]">
      <Navbar />
      <h1>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quis
        iusto iure laboriosam eaque itaque in fuga! Dolore, exercitationem
        labore, provident modi aspernatur est, nostrum quisquam officiis sunt
        consequuntur libero?
      </h1>
      <h1>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quis
        iusto iure laboriosam eaque itaque in fuga! Dolore, exercitationem
        labore, provident modi aspernatur est, nostrum quisquam officiis sunt
        consequuntur libero?
      </h1>
      <h1>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quis
        iusto iure laboriosam eaque itaque in fuga! Dolore, exercitationem
        labore, provident modi aspernatur est, nostrum quisquam officiis sunt
        consequuntur libero?
      </h1>
      <h1>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quis
        iusto iure laboriosam eaque itaque in fuga! Dolore, exercitationem
        labore, provident modi aspernatur est, nostrum quisquam officiis sunt
        consequuntur libero?
      </h1>
      {/* <ul>
        <li key={user?.pk}>{user?.username}</li>
      </ul>
      <button onClick={signOut}>
        <GoogleLogout
          clientId="1047637905977-gpe6krq8c6uhu4f8mt3ijh4ndhfubr0t.apps.googleusercontent.com"
          render={(renderProps) => (
            <p onClick={renderProps.onClick} disabled={renderProps.disabled}>
              LogOut
            </p>
          )}
          onLogoutSuccess={logout}
        />
      </button>
      <br />
      <button onClick={refresh}>Refresh</button> */}
    </div>
  );
};

export default Home;

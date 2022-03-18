import { useState } from "react";
// import useAxios from "../hooks/useAxios";
import Navbar from "../components/DashboardNavbar";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const [open, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!open);
  };

  // const [user, setUser] = useState();
  // const useAxiosPrivate = useAxios();
  // const refresh = useRefreshToken();

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
      <div className="flex">
        {!open && <Sidebar />}

        <div className="flex-[6]">
          <Navbar click={handleClick} />
        </div>
      </div>
      <h1>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem totam ut
        beatae distinctio similique tenetur fugiat maiores eligendi! Qui
        reiciendis enim aliquid? Pariatur eaque eligendi asperiores iure
        adipisci, molestias sapiente.
      </h1>
      <h1>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem totam ut
        beatae distinctio similique tenetur fugiat maiores eligendi! Qui
        reiciendis enim aliquid? Pariatur eaque eligendi asperiores iure
        adipisci, molestias sapiente.
      </h1>
      <h1>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem totam ut
        beatae distinctio similique tenetur fugiat maiores eligendi! Qui
        reiciendis enim aliquid? Pariatur eaque eligendi asperiores iure
        adipisci, molestias sapiente.
      </h1>
      <h1>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem totam ut
        beatae distinctio similique tenetur fugiat maiores eligendi! Qui
        reiciendis enim aliquid? Pariatur eaque eligendi asperiores iure
        adipisci, molestias sapiente.
      </h1>
      <h1>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem totam ut
        beatae distinctio similique tenetur fugiat maiores eligendi! Qui
        reiciendis enim aliquid? Pariatur eaque eligendi asperiores iure
        adipisci, molestias sapiente.
      </h1>
      <h1>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem totam ut
        beatae distinctio similique tenetur fugiat maiores eligendi! Qui
        reiciendis enim aliquid? Pariatur eaque eligendi asperiores iure
        adipisci, molestias sapiente.
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

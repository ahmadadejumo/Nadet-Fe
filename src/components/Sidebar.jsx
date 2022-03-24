import React from "react";
import logo from "../assets/images/Logo.svg";
import logoutArrow from "../assets/images/logoutArrow.svg";
import { useNavigate, Link } from "react-router-dom";
import useLogOut from "../hooks/useLogOut";
import { GoogleLogout } from "react-google-login";
import { motion } from "framer-motion";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";

const Sidebar = () => {
  const navigate = useNavigate();
  const logout = useLogOut();

  const signOut = async () => {
    await logout();
    navigate("/signin");
  };

  return (
    <motion.div
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5, delay: 0, ease: "easeInOut" }}
      className="border hidden lg:block shadow-[0_6px_13px_rgba(19,19,19,0.08)] w-[250px]"
    >
      <Link
        to={"/dashboard/dashboard-home"}
        className="flex justify-center pt-[24px]"
      >
        <img
          src={logo}
          alt="Logo"
          className="object-contain w-[136px] h-[50px]"
        />
      </Link>
      <div className="space-y-[10px] pt-10">
        {SidebarData.map((item, index) => (
          <SubMenu item={item} key={index} />
        ))}
      </div>
      <div className="flex justify-center pb-[25px] pt-10">
        <button className="w-[218px] text-base font-semibold h-[48px] rounded-lg flex justify-center space-x-[10px] items-center border-black border">
          <img src={logoutArrow} alt="arrow" className="w-3 h-3" />
          <GoogleLogout
            onClick={signOut}
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            render={(renderProps) => (
              <p onClick={renderProps.onClick} disabled={renderProps.disabled}>
                Log Out
              </p>
            )}
            onLogoutSuccess={logout}
          />
        </button>
      </div>
    </motion.div>
  );
};

export default Sidebar;

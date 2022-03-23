import React, { useState } from "react";
import logo from "../assets/images/Logo.svg";
import logoutArrow from "../assets/images/logoutArrow.svg";
import { useNavigate, Link, useLocation } from "react-router-dom";
import useLogOut from "../hooks/useLogOut";
import { GoogleLogout } from "react-google-login";
import { motion } from "framer-motion";
import { SidebarData } from "./SidebarData";

const Sidebar = () => {
  const [color, setColor] = useState(1);
  const [openProducts, setOpenProducts] = useState(false);

  const handleChange3 = () => {
    setColor(3);
    setOpenProducts(!openProducts);
  };

  const location = useLocation();
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
      <div className="flex justify-center pt-[24px]">
        <img
          src={logo}
          alt="Logo"
          className="object-contain w-[136px] h-[50px]"
        />
      </div>
      <div className="space-y-[15px] pt-10">
        {SidebarData.map(({ id, image, alt, text, link }) => (
          <Link
            to={link}
            key={id}
            // onClick={() => {
            //   window.location.pathname = link;
            // }}
            className={`${
              window.location.pathname === link ? "bg-white" : ""
            } flex items-center text-base  h-14 font-semibold space-x-2 pl-[35px] cursor-pointer`}
          >
            <img src={image} alt={alt} className="object-contain w-[16px]" />
            <p>{text}</p>
          </Link>
        ))}

        <div className="flex justify-center pb-[25px]">
          <button className="w-[218px] text-base font-semibold h-[48px] rounded-lg flex justify-center space-x-[10px] items-center border-black border">
            <img src={logoutArrow} alt="arrow" className="w-3 h-3" />
            <GoogleLogout
              onClick={signOut}
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              render={(renderProps) => (
                <p
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  Log Out
                </p>
              )}
              onLogoutSuccess={logout}
            />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;

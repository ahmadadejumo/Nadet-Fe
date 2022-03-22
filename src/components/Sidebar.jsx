import React, { useState } from "react";
import logo from "../assets/images/Logo.svg";
import home from "../assets/images/home.svg";
import marketplace from "../assets/images/marketplace.svg";
import products from "../assets/images/products.svg";
import marketing from "../assets/images/marketing.svg";
import analytics from "../assets/images/analytics.svg";
import wallet from "../assets/images/wallet.svg";
import refer from "../assets/images/refer.svg";
import integrations from "../assets/images/integrations.svg";
import billing from "../assets/images/billing.svg";
import settings from "../assets/images/settings.svg";
import upgrade from "../assets/images/upgrade.svg";
import logoutArrow from "../assets/images/logoutArrow.svg";
import { useNavigate } from "react-router-dom";
import useLogOut from "../hooks/useLogOut";
import { GoogleLogout } from "react-google-login";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [color, setColor] = useState(1);
  const handleChange1 = () => {
    setColor(1);
  };
  const handleChange2 = () => {
    setColor(2);
  };
  const handleChange3 = () => {
    setColor(3);
  };
  const handleChange4 = () => {
    setColor(4);
  };
  const handleChange5 = () => {
    setColor(5);
  };
  const handleChange6 = () => {
    setColor(6);
  };
  const handleChange7 = () => {
    setColor(7);
  };
  const handleChange8 = () => {
    setColor(8);
  };
  const handleChange9 = () => {
    setColor(9);
  };
  const handleChange10 = () => {
    setColor(10);
  };
  const handleChange11 = () => {
    setColor(11);
  };

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
      <div className="space-y-[35px] pt-10">
        <Link
          to={"/dashboard/dashboard-home"}
          onClick={handleChange1}
          className={`flex ${
            color === 1 ? "bg-white py-[15px]" : null
          } items-center text-base font-semibold space-x-2 pl-[35px] cursor-pointer`}
        >
          <img src={home} alt="homeIcon" className="object-contain w-[16px]" />
          <p>Home</p>
        </Link>
        <div
          onClick={handleChange2}
          className={`flex ${
            color === 2 ? "bg-white py-[15px]" : null
          } items-center text-base font-semibold space-x-2 pl-[35px] cursor-pointer`}
        >
          <img
            src={marketplace}
            alt="marketplaceIcon"
            className="object-contain w-[16px]"
          />
          <p>Marketplace</p>
        </div>
        <Link
          to={"/dashboard/my-products"}
          onClick={handleChange3}
          className={`flex ${
            color === 3 ? "bg-white py-[15px]" : null
          } items-center text-base font-semibold space-x-2 pl-[35px] cursor-pointer`}
        >
          <img
            src={products}
            alt="productIcon"
            className="object-contain w-[16px]"
          />
          <p>Products</p>
        </Link>
        <div
          onClick={handleChange4}
          className={`flex ${
            color === 4 ? "bg-white py-[15px]" : null
          } items-center text-base font-semibold space-x-2 pl-[35px] cursor-pointer`}
        >
          <img
            src={marketing}
            alt="marketingIcon"
            className="object-contain w-[16px]"
          />
          <p>Marketing</p>
        </div>
        <div
          onClick={handleChange5}
          className={`flex ${
            color === 5 ? "bg-white py-[15px]" : null
          } items-center text-base font-semibold space-x-2 pl-[35px] cursor-pointer`}
        >
          <img
            src={analytics}
            alt="analyticsIcon"
            className="object-contain w-[16px]"
          />
          <p>Analytics</p>
        </div>
        <div
          onClick={handleChange6}
          className={`flex ${
            color === 6 ? "bg-white py-[15px]" : null
          } items-center text-base font-semibold space-x-2 pl-[35px] cursor-pointer`}
        >
          <img
            src={wallet}
            alt="walletIcon"
            className="object-contain w-[16px]"
          />
          <p>Wallets & Payouts</p>
        </div>
        <div
          onClick={handleChange7}
          className={`flex ${
            color === 7 ? "bg-white py-[15px]" : null
          } items-center text-base font-semibold space-x-2 pl-[35px] cursor-pointer`}
        >
          <img
            src={refer}
            alt="referIcon"
            className="object-contain w-[16px]"
          />
          <p>Refer & Earn</p>
        </div>
        <div
          onClick={handleChange8}
          className={`flex ${
            color === 8 ? "bg-white py-[15px]" : null
          } items-center text-base font-semibold space-x-2 pl-[35px] cursor-pointer`}
        >
          <img
            src={integrations}
            alt="integrationsIcon"
            className="object-contain w-[16px]"
          />
          <p>Integrations</p>
        </div>
        <div
          onClick={handleChange9}
          className={`flex ${
            color === 9 ? "bg-white py-[15px]" : null
          } items-center text-base font-semibold space-x-2 pl-[35px] cursor-pointer`}
        >
          <img
            src={billing}
            alt="billingIcon"
            className="object-contain w-[16px]"
          />
          <p>Billing</p>
        </div>
        <hr className="bg-[#CFCFD5] mx-[15px]" />
        <div
          onClick={handleChange10}
          className={`flex ${
            color === 10 ? "bg-white py-[15px]" : null
          } items-center text-base font-semibold space-x-2 pl-[35px] cursor-pointer`}
        >
          <img
            src={settings}
            alt="settingsIcon"
            className="object-contain w-[16px]"
          />
          <p>Settings</p>
        </div>
        <div
          onClick={handleChange11}
          className={`flex ${
            color === 11 ? "bg-white py-[15px]" : null
          } items-center text-base font-semibold space-x-2 pl-[35px] cursor-pointer`}
        >
          <img
            src={upgrade}
            alt="upgradeIcon"
            className="object-contain w-[16px]"
          />
          <p>Upgrade Account</p>
        </div>
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

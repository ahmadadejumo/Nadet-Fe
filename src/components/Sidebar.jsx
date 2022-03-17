import React from "react";
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

const Sidebar = () => {
  const navigate = useNavigate();
  const logout = useLogOut();

  const signOut = async () => {
    await logout();
    navigate("/signin");
  };

  return (
    <div className="border hidden lg:block shadow-[0_6px_13px_rgba(19,19,19,0.08)] w-[250px]">
      <div className="flex justify-center pt-[24px]">
        <img
          src={logo}
          alt="Logo"
          className="object-contain w-[136px] h-[50px]"
        />
      </div>
      <div className="space-y-[35px] pt-10">
        <div className="flex bg-white py-[15px] items-center text-base font-semibold space-x-2 pl-[35px]">
          <img src={home} alt="homeIcon" className="object-contain w-[16px]" />
          <p>Home</p>
        </div>
        <div className="flex items-center text-base font-semibold space-x-2 pl-[35px]">
          <img
            src={marketplace}
            alt="marketplaceIcon"
            className="object-contain w-[16px]"
          />
          <p>Marketplace</p>
        </div>
        <div className="flex items-center text-base font-semibold space-x-2 pl-[35px]">
          <img
            src={products}
            alt="productIcon"
            className="object-contain w-[16px]"
          />
          <p>Products</p>
        </div>
        <div className="flex items-center text-base font-semibold space-x-2 pl-[35px]">
          <img
            src={marketing}
            alt="marketingIcon"
            className="object-contain w-[16px]"
          />
          <p>Marketing</p>
        </div>
        <div className="flex items-center text-base font-semibold space-x-2 pl-[35px]">
          <img
            src={analytics}
            alt="analyticsIcon"
            className="object-contain w-[16px]"
          />
          <p>Analytics</p>
        </div>
        <div className="flex items-center text-base font-semibold space-x-2 pl-[35px]">
          <img
            src={wallet}
            alt="walletIcon"
            className="object-contain w-[16px]"
          />
          <p>Wallets & Payouts</p>
        </div>
        <div className="flex items-center text-base font-semibold space-x-2 pl-[35px]">
          <img
            src={refer}
            alt="referIcon"
            className="object-contain w-[16px]"
          />
          <p>Refer & Earn</p>
        </div>
        <div className="flex items-center text-base font-semibold space-x-2 pl-[35px]">
          <img
            src={integrations}
            alt="integrationsIcon"
            className="object-contain w-[16px]"
          />
          <p>Integrations</p>
        </div>
        <div className="flex items-center text-base font-semibold space-x-2 pl-[35px]">
          <img
            src={billing}
            alt="billingIcon"
            className="object-contain w-[16px]"
          />
          <p>Billing</p>
        </div>
        <hr className="bg-[#CFCFD5] mx-[15px]" />
        <div className="flex items-center text-base font-semibold space-x-2 pl-[35px]">
          <img
            src={settings}
            alt="settingsIcon"
            className="object-contain w-[16px]"
          />
          <p>Settings</p>
        </div>
        <div className="flex items-center text-base font-semibold space-x-2 pl-[35px]">
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
    </div>
  );
};

export default Sidebar;

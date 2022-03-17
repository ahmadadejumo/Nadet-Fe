import React from "react";
import logo from "../../src/assets/images/Logo.svg";
import { HamburgerIcon } from "@chakra-ui/icons";
import profile from "../assets/images/profile.svg";
import search from "../assets/images/search.svg";
import bell from "../assets/images/bell.svg";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
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

const DashboardNavbar = () => {
  const navigate = useNavigate();
  const logout = useLogOut();

  const signOut = async () => {
    await logout();
    navigate("/signin");
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <div className="flex font-Lato lg:border lg:drop-shadow-md lg:shadow-[#EEEEF4] items-center justify-between px-4 md:px-10 lg:px-[125px] py-[15px] md:py-5 lg:py-[15px] bg-[#FFFFFF] lg:bg-[#EEEEF4]">
      <div className="">
        <div className="object-contain lg:hidden w-[100px] h-[38px] md:w-[150px] md:h-[50px]">
          <img src={logo} alt="logo" />
        </div>
        <div className="lg:flex hidden justify-center border shadow-sm shadow-[#22222214] items-center w-[278px] h-[40px] bg-white rounded-[10px]">
          <input
            type="text"
            placeholder="Search for a product"
            className="border-none outline-none"
          />
          <img src={search} alt="search icon" className="w-5" />
        </div>
      </div>
      <div className="flex space-x-5 md:space-x-10 lg:space-x-5 items-center">
        <div className="lg:hidden">
          <img src={search} alt="search icon" className="w-5 md:w-8" />
        </div>
        <div className="lg:bg-white cursor-pointer lg:rounded-lg lg:w-10 lg:h-10 lg:flex lg:justify-center">
          <img src={bell} alt="bell icon" className="md:w-7 lg:w-5" />
        </div>
        <div className="lg:bg-white cursor-pointer lg:rounded-lg lg:w-10 lg:h-10 lg:flex lg:justify-center">
          <img src={profile} alt="profile icon" className="md:w-7 lg:w-5" />
        </div>
        <div onClick={onOpen} ref={btnRef} className="md:hidden">
          <HamburgerIcon boxSize={7} />
        </div>
        <div
          onClick={onOpen}
          ref={btnRef}
          className="hidden md:block lg:hidden"
        >
          <HamburgerIcon boxSize={10} />
        </div>
        <div className="hidden lg:block cursor-pointer">
          <HamburgerIcon boxSize={8} />
        </div>
      </div>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg="brand">
          <DrawerCloseButton />
          <DrawerHeader className="flex justify-center">
            <img src={logo} alt="logo" className="object-contain w-36" />
          </DrawerHeader>
          <DrawerBody>
            <div className="space-y-10">
              <div className="flex items-center text-xl font-semibold space-x-3 pl-5">
                <img src={home} alt="homeIcon" className="object-contain w-5" />
                <p>Home</p>
              </div>
              <div className="flex items-center text-xl font-semibold space-x-3 pl-5">
                <img
                  src={marketplace}
                  alt="marketplaceIcon"
                  className="object-contain w-5"
                />
                <p>Marketplace</p>
              </div>
              <div className="flex items-center text-xl font-semibold space-x-3 pl-5">
                <img
                  src={products}
                  alt="productIcon"
                  className="object-contain w-5"
                />
                <p>Products</p>
              </div>
              <div className="flex items-center text-xl font-semibold space-x-3 pl-5">
                <img
                  src={marketing}
                  alt="marketingIcon"
                  className="object-contain w-5"
                />
                <p>Marketing</p>
              </div>
              <div className="flex items-center text-xl font-semibold space-x-3 pl-5">
                <img
                  src={analytics}
                  alt="analyticsIcon"
                  className="object-contain w-5"
                />
                <p>Analytics</p>
              </div>
              <div className="flex items-center text-xl font-semibold space-x-3 pl-5">
                <img
                  src={wallet}
                  alt="walletIcon"
                  className="object-contain w-5"
                />
                <p>Wallets & Payouts</p>
              </div>
              <div className="flex items-center text-xl font-semibold space-x-3 pl-5">
                <img
                  src={refer}
                  alt="referIcon"
                  className="object-contain w-5"
                />
                <p>Refer & Earn</p>
              </div>
              <div className="flex items-center text-xl font-semibold space-x-3 pl-5">
                <img
                  src={integrations}
                  alt="integrationsIcon"
                  className="object-contain w-5"
                />
                <p>Integrations</p>
              </div>
              <div className="flex items-center text-xl font-semibold space-x-3 pl-5">
                <img
                  src={billing}
                  alt="billingIcon"
                  className="object-contain w-5"
                />
                <p>Billing</p>
              </div>
              <hr className="px-10 bg-[#CFCFD5]" />
              <div className="flex items-center text-xl font-semibold space-x-3 pl-5">
                <img
                  src={settings}
                  alt="settingsIcon"
                  className="object-contain w-5"
                />
                <p>Settings</p>
              </div>
              <div className="flex items-center text-xl font-semibold space-x-3 pl-5">
                <img
                  src={upgrade}
                  alt="upgradeIcon"
                  className="object-contain w-5"
                />
                <p>Upgrade Account</p>
              </div>
              <div className="flex justify-center pb-10">
                <button className="w-[218px] h-[48px] rounded-lg flex justify-center space-x-[10px] items-center border-black border">
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
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default DashboardNavbar;

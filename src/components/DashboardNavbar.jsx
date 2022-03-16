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

const DashboardNavbar = () => {
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
        <div className="hidden md:block lg:hidden">
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

          <DrawerBody></DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default DashboardNavbar;

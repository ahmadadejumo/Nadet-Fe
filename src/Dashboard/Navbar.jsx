import React from "react";
import Logo from "../../src/assets/images/Logo.svg";
import { IconButton } from "@chakra-ui/react";
import { SearchIcon, HamburgerIcon } from "@chakra-ui/icons";
import profile from "../assets/images/profile.png";
import bell from "../assets/images/bell.svg";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-3 py-[15px] bg-[#FFFFFF]">
      <div>
        <div>
          <img
            src={Logo}
            alt="logo"
            className="object-contain w-[100px] h-[38px]"
          />
        </div>
      </div>
      <div className="flex space-x-2 items-center">
        <div className="bg-white w-10 rounded-lg">
          <IconButton
            colorScheme=""
            aria-label="Search"
            icon={<SearchIcon color="black" boxSize={5} />}
          />
        </div>
        <div className="bg-white w-10 rounded-lg">
          <IconButton
            colorScheme=""
            aria-label="Notification"
            icon={<img src={bell} alt="bell icon" />}
          />
        </div>
        <div className="bg-white w-10 rounded-lg">
          <IconButton
            colorScheme=""
            aria-label="Notification"
            icon={<img src={profile} alt="profile icon" />}
          />
        </div>
        <div>
          <HamburgerIcon boxSize={7} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import Logo from "../../src/assets/images/Logo.svg";
import { IconButton } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const Navbar = () => {
  return (
    <div>
      <div>
        <img src={Logo} alt="logo" />
      </div>
      <div>
        <IconButton
          colorScheme={"whiteAlpha"}
          aria-label="Search"
          icon={<SearchIcon />}
          className=""
        />
        <IconButton
          aria-label="Search"
          icon={<SearchIcon />}
          className="bg-white"
        />
        <IconButton
          aria-label="Search"
          icon={<SearchIcon />}
          className="bg-white"
        />
      </div>
    </div>
  );
};

export default Navbar;

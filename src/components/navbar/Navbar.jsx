import React, { useState } from "react";
import logo from "../../assets/images/Logo.png";
import { MenuIcon } from "@heroicons/react/solid";
import { XIcon } from "@heroicons/react/solid";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex mx-5 md:mx-5 lg:mx-20 pt-8 items-center">
      <img src={logo} alt="Nadet Logo" className="pr-28 md:pr-72 lg:pr-0" />
      <div className="lg:flex space-x-10 px-28 cursor-pointer hidden">
        <p className="hover:text-bcolor">How it works</p>
        <p className="hover:text-bcolor">Products</p>
        <p className="hover:text-bcolor">Marketplace</p>
        <p className="hover:text-bcolor">FAQs</p>
        <p className="hover:text-bcolor">Pricing</p>
      </div>
      <div className="lg:flex flex-row space-x-5 cursor-pointer items-center hidden md:contents">
        <p>Log In</p>
        <button className="box-border h-9 w-32 rounded-md bg-bcolor">
          Get Started
        </button>
      </div>
      <div onClick={handleClick} className="pl-0 md:pl-5">
        {!isOpen && <MenuIcon className="h-16 w-10 lg:hidden" />}
        {isOpen && <XIcon className="h-16 w-10 lg:hidden" />}
      </div>
    </div>
  );
};

export default Navbar;

import React, { useState } from "react";
import logo from "../../assets/images/Logo.svg";
import { MenuIcon } from "@heroicons/react/solid";
import { XIcon } from "@heroicons/react/solid";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex mx-5 md:mx-3 pt-8 justify-between lg:justify-center items-center">
      <div className="">
        <img
          src={logo}
          alt="Nadet Logo"
          className="pr-36 md:pr-64 lg:pr-0 object-contain w-full"
        />
      </div>
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
      <div className="pl-0 md:pl-5">
        {!isOpen ? (
          <MenuIcon className="h-8 w-8 lg:hidden" onClick={handleClick} />
        ) : (
          <div className="bg-white h-full w-full fixed top-0 left-0 overflow-x-hidden">
            <XIcon className="h-8 w-8 float-right " onClick={handleClick} />
            <div className="w-full text-center my-[250px] text-lg font-bold">
              <p className="">How it works</p>
              <p className="">Products</p>
              <p className="">Marketplace</p>
              <p className="">FAQs</p>
              <p className="">Pricing</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

import React, { useState } from "react";
import logo from "../assets/images/Logo.svg";
import { MenuIcon } from "@heroicons/react/solid";
import { XIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex pt-[40px] px-5 md:px-[30px] justify-between items-center bg-[#FFF8E8]">
      <div className="md:pr-[250px] lg:pr-px">
        <img
          src={logo}
          alt="Nadet Logo"
          className="object-contain w-[102px] h-[38px] md:w-[178px] md:h-[66px]"
        />
      </div>
      {/* tablet and desktop menu */}
      <div className="lg:flex space-x-[30px] font-Lato text-base font-semibold cursor-pointer hidden">
        <Link to="/HowItWorks" className="hover:text-bcolor">
          How it works
        </Link>
        <Link to="/products" className="hover:text-bcolor">
          Products
        </Link>
        <Link to="/marketplace" className="hover:text-bcolor">
          Marketplace
        </Link>
        <Link to="/faqs" className="hover:text-bcolor">
          FAQs
        </Link>
        <Link to="/pricing" className="hover:text-bcolor">
          Pricing
        </Link>
      </div>
      <div className="lg:flex flex-row space-x-5 cursor-pointer items-center hidden md:contents">
        <p className="font-Lato text-base font-semibold">Log In</p>
        <button className="h-[44px] w-[142px] rounded-lg font-Lato font-semibold text-base bg-bcolor hover:bg-yellow-500 transition duration-300">
          Get Started
        </button>
      </div>
      {/* Mobile Menu */}
      <div className="">
        {!isOpen ? (
          <MenuIcon className="h-8 w-8 lg:hidden" onClick={handleClick} />
        ) : (
          <div className="bg-white h-full w-full z-[1] fixed top-0 left-0 overflow-x-hidden">
            <XIcon className="h-8 w-8 float-right " onClick={handleClick} />
            <div
              className="w-full text-center my-[250px] text-lg font-bold"
              onClick={handleClick}
            >
              <Link to="/HowItWorks">
                <p className="">How it works</p>
              </Link>
              <Link to="/products">
                <p className="">Products</p>
              </Link>
              <Link to="/marketplace">
                <p className="">Marketplace</p>
              </Link>
              <Link to="/faqs">
                <p className="">FAQs</p>
              </Link>
              <Link to="/pricing">
                <p className="">Pricing</p>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

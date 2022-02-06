import React, { useState } from "react";
import logo from "../assets/images/Logo.svg";
import { MenuIcon } from "@heroicons/react/solid";
import { XIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
      className="flex items-center justify-between lg:justify-center px-5 md:px-[30px] lg:space-x-[130px] pt-[30px]"
    >
      <div className="">
        <img
          src={logo}
          alt="Nadet Logo"
          className="object-contain w-[102px] h-[38px] md:w-[178px] md:h-[66px]"
        />
      </div>
      {/* tablet and desktop menu */}
      <div className="font-Lato space-x-[30px] text-base font-semibold cursor-pointer hidden lg:inline-block">
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
      <div className="cursor-pointer md:flex items-center md:space-x-5">
        <p className="font-Lato text-base font-semibold hidden md:inline-block">
          Log In
        </p>
        <button className="h-[44px] w-[142px] rounded-lg hidden md:inline-block font-Lato font-semibold text-base bg-bcolor hover:bg-yellow-500 transition duration-300">
          Get Started
        </button>
        {/* Mobile Menu */}
        <div className="lg:hidden">
          {!isOpen ? (
            <MenuIcon className="h-8 w-8" onClick={handleClick} />
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
    </motion.div>
  );
};

export default Navbar;

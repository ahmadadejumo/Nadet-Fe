import React, { useState } from "react";
import logo from "../assets/images/Logo.svg";
import { Spin as Hamburger } from "hamburger-react";
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
    >
      <div className="flex items-center justify-between lg:justify-center px-5 md:px-[30px] lg:space-x-[130px] pt-[30px]">
        <div className="">
          <img
            src={logo}
            alt="Nadet Logo"
            className="object-contain w-[102px] h-[38px] md:w-[178px] md:h-[66px]"
          />
        </div>
        {/* desktop menu */}
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
          <Link
            to={"/signin"}
            className="font-Lato text-base font-semibold hidden md:inline-block"
          >
            Log In
          </Link>
          <button className="h-[44px] w-[142px] rounded-lg hidden md:inline-block font-Lato font-semibold text-base bg-bcolor hover:bg-yellow-500 transition duration-300">
            <Link to={"/signup"}>Get Started</Link>
          </button>
          {/* Mobile Menu */}
          <div className="md:hidden">
            <Hamburger
              size={26}
              rounded
              duration={0.8}
              toggled={isOpen}
              toggle={setIsOpen}
            />
          </div>
          <div className="hidden md:block lg:hidden">
            <Hamburger
              size={41}
              rounded
              duration={0.8}
              toggled={isOpen}
              toggle={setIsOpen}
            />
          </div>
        </div>
      </div>
      {/* absolute z-[1] top-20 md:top-28 left-0 md:-left-5 right-0 bottom-96 */}
      {isOpen && (
        <div className="bg-white absolute h-full w-full z-[1] left-0 overflow-x-hidden">
          <div
            className="px-3 text-xl md:text-2xl font-Lato font-bold pt-10 md:pt-14"
            onClick={handleClick}
          >
            <Link to="/HowItWorks">
              <p className="">How it works</p>
            </Link>
            <Link to="/products">
              <p className=" pt-5 md:pt-10">Products</p>
            </Link>
            <Link to="/marketplace">
              <p className=" pt-5 md:pt-10">Marketplace</p>
            </Link>
            <Link to="/faqs">
              <p className=" pt-5 md:pt-10">FAQs</p>
            </Link>
            <Link to="/pricing">
              <p className=" pt-5 md:pt-10 md:pb-16">Pricing</p>
            </Link>
            <div className="flex justify-between pt-10">
              <Link to={"/signin"} className="flex justify-center md:hidden">
                <button className="bg-bcolor h-[50px] md:h-[55px] w-[130px] md:w-[180px] rounded-lg">
                  Log In
                </button>
              </Link>
              <Link to={"/signup"} className="flex justify-center md:hidden">
                <button className="bg-bcolor h-[50px] md:h-[55px] w-[130px] md:w-[180px] rounded-lg">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Navbar;

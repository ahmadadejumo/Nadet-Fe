import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { EyeOffIcon } from "@heroicons/react/outline";
import { EyeIcon } from "@heroicons/react/outline";
import google from "../../assets/images/google.png";
import facebook from "../../assets/images/facebook.png";
import twitter from "../../assets/images/twitter.png";
import rectangle32 from "../../assets/images/rectangle32.png";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
    return setShowPassword(showPassword ? false : true);
  };
  return (
    <div className="font-Lato bg-[#F5F4FD]">
      <div className="bg-white md:bg-[rgba(255,255,255,0.6)]">
        <Navbar />
      </div>
      <div className="md:flex md:justify-center lg:mx-[40px] lg:space-x-[30px] md:pt-10 md:pb-14">
        <div className="px-5 md:px-10 md:bg-white md:w-[610px] md:rounded-[40px] lg:rounded-tl-[40px] lg:rounded-bl-[40px] lg:rounded-tr-none lg:rounded-br-none">
          <h1 className="text-center text-[25px] font-bold pt-[100px]">
            Create Your Free Account
          </h1>
          <p className="font-normal text-base text-tcolor pt-[15px] text-center">
            Already have an account? <span className="text-bcolor">Login.</span>
          </p>
          <form action="" className="pt-10 space-y-5">
            <div className="flex flex-col">
              <label htmlFor="text" className="text-lg font-normal">
                Username
              </label>
              <input
                type="text"
                required
                className="h-[50px] w-full rounded-lg outline-none border-[1px] px-5 text-lg"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-lg font-normal">
                Email Address
              </label>
              <input
                type="email"
                required
                className="h-[50px] w-full rounded-lg outline-none border-[1px] px-5 text-lg"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="text" className="text-lg font-normal">
                Full name
              </label>
              <input
                type="text"
                required
                className="h-[50px] w-full rounded-lg outline-none border-[1px] px-5 text-lg"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="text-lg font-normal">
                Password
              </label>
              <div className="flex items-center relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  className="outline-none h-[50px] w-full px-5 rounded-lg border-[1px] text-lg "
                />
                {showPassword ? (
                  <div className="flex items-center">
                    <EyeIcon
                      onClick={handleClick}
                      className="w-[20px] md:w-[25px] absolute right-10 cursor-pointer"
                    />
                  </div>
                ) : (
                  <div className="flex items-center">
                    <EyeOffIcon
                      onClick={handleClick}
                      className="w-[20px] md:w-[25px] absolute right-10 cursor-pointer"
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="text-lg font-normal">
                Confirm password
              </label>
              <input
                type="password"
                required
                className="h-[50px] w-full rounded-lg outline-none border-[1px] px-5 text-lg"
              />
            </div>
            <div className="flex items-center space-x-[15px]">
              <input type="checkbox" className="h-[24px] w-[24px] " />
              <label for="checkbox" className="font-normal text-base">
                I Accept{" "}
                <span className="text-bcolor underline">
                  Terms And Condition
                </span>
              </label>
            </div>
            <div className="flex justify-center md:pt-[11px]">
              <button className="bg-bcolor h-[50px] w-[335px] md:w-full rounded-lg text-base font-bold">
                Create Account
              </button>
            </div>
            <div className="flex items-center pt-5 justify-center space-x-[15px]">
              <hr className="border-tcolor w-[75px] md:w-[200px] lg:w-[150px]" />
              <p className="text-sm font-normal lg:text-base">
                or continue with
              </p>
              <hr className="border-tcolor w-[75px] md:w-[200px] lg:w-[150px]" />
            </div>
            <div className="flex justify-center items-center space-x-[45px] pt-5 pb-[79px]">
              <img
                src={google}
                alt="logo"
                className="h-[24px] w-[24px] object-contain cursor-pointer"
              />
              <img
                src={facebook}
                alt="logo"
                className="h-[24px] w-[24px] object-contain cursor-pointer"
              />
              <img
                src={twitter}
                alt="logo"
                className="h-[24px] w-[24px] object-contain cursor-pointer"
              />
            </div>
          </form>
        </div>
        <div className="hidden lg:block">
          <img
            src={rectangle32}
            alt="img"
            className="object-contain lg:w-[720px]"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;

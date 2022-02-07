import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { EyeOffIcon } from "@heroicons/react/outline";
import { EyeIcon } from "@heroicons/react/outline";
import google from "../../assets/images/google.png";
import facebook from "../../assets/images/facebook.png";
import twitter from "../../assets/images/twitter.png";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
    return setShowPassword(showPassword ? false : true);
  };
  return (
    <div className="font-Lato">
      <div className="sm:bg-[#FFFFFF] md:bg-[#FFFFFF99] h-[80px] md:h-[100px]">
        <Navbar />
      </div>
      <div className="bg-[#F5F4FD] px-5">
        <h1 className="text-center text-[25px] font-bold pt-[100px]">
          Create Your Free Account
        </h1>
        <p className="font-normal text-base pt-[15px] text-center">
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
            <div className="flex items-center">
              <input
                type={showPassword ? "text" : "password"}
                required
                className="outline-none h-[50px] w-full px-5 rounded-lg border-[1px] text-lg relative"
              />
              {showPassword ? (
                <div className="flex items-center">
                  <EyeIcon
                    onClick={handleClick}
                    className="h-[18px] w-[20px] absolute right-10"
                  />
                </div>
              ) : (
                <div className="flex items-center">
                  <EyeOffIcon
                    onClick={handleClick}
                    className="h-[18px] w-[20px] absolute right-10"
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
              <span className="text-bcolor underline">Terms And Condition</span>
            </label>
          </div>
          <div className="flex justify-center">
            <button className="bg-bcolor h-[50px] w-[335px] rounded-lg text-base font-bold">
              Create Account
            </button>
          </div>
          <div className="flex items-center justify-center space-x-[15px]">
            <hr className="border-black w-[75px]" />
            <p className="text-sm font-normal">or continue with</p>
            <hr className="border-black w-[75px]" />
          </div>
          <div className="flex justify-center items-center space-x-[45px] pt-5 pb-[79px]">
            <img
              src={google}
              alt="logo"
              className="h-[24px] w-[24px] object-contain"
            />
            <img
              src={facebook}
              alt="logo"
              className="h-[24px] w-[24px] object-contain"
            />
            <img
              src={twitter}
              alt="logo"
              className="h-[24px] w-[24px] object-contain"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { EyeOffIcon } from "@heroicons/react/outline";
import { EyeIcon } from "@heroicons/react/outline";
import google from "../../assets/images/google.png";
import facebook from "../../assets/images/facebook.png";
import twitter from "../../assets/images/twitter.png";
import rectangle33 from "../../assets/images/rectangle33.png";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
    return setShowPassword(showPassword ? false : true);
  };
  return (
    <div className="font-Lato bg-[#F5F4FD]">
      <Navbar />
      <div className="md:flex md:justify-center lg:mx-[40px] lg:space-x-[30px] md:pt-10 md:pb-48">
        <div className="px-5 md:px-10 md:bg-white md:w-[610px] md:rounded-[40px] lg:rounded-tl-[40px] lg:rounded-bl-[40px] lg:rounded-tr-none lg:rounded-br-none">
          <h1 className="text-center text-[25px] font-bold pt-[40px]">
            Log in to Nadet
          </h1>
          <p className="font-normal text-base text-tcolor pt-[15px] text-center">
            Dont have an account?{" "}
            <Link to={"/signup"} className="text-bcolor">
              Create one for free.
            </Link>
          </p>
          <form action="" className="pt-10 space-y-5">
            <div className="flex flex-col">
              <label htmlFor="text" className="text-lg font-normal">
                Username or Email
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
            <p>
              <Link
                to={"/forgot-password"}
                className="text-bcolor underline font-bold text-base"
              >
                Forgot password?
              </Link>
            </p>

            <div className="flex justify-center md:pt-[11px]">
              <button className="bg-bcolor h-[50px] w-[335px] md:w-full rounded-lg text-base font-bold">
                Log in
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
            src={rectangle33}
            alt="img"
            className="object-contain lg:w-[720px]"
          />
        </div>
      </div>
    </div>
  );
};

export default SignIn;

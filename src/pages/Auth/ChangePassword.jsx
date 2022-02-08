import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { EyeOffIcon } from "@heroicons/react/outline";
import { EyeIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import rectangle35 from "../../assets/images/rectangle35.png";

const ChangePassword = () => {
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
            Create new password
          </h1>
          <p className="font-normal text-base text-tcolor pt-[15px] text-center">
            Reset your password with the new one of your choice below.
          </p>
          <form action="" className="pt-10 space-y-[30px]">
            <div className="flex flex-col">
              <label htmlFor="password" className="text-lg font-normal">
                New Password
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
                Confirm Password
              </label>
              <input
                type="password"
                required
                className="h-[50px] w-full rounded-lg outline-none border-[1px] px-5 text-lg"
              />
            </div>
            <div className="flex justify-center md:pt-[11px]">
              <button className="bg-bcolor h-[50px] w-[335px] md:w-full rounded-lg text-base font-bold">
                Change Password
              </button>
            </div>
            <p className="font-normal text-tcolor text-base text-center pt-[10px] pb-48 md:pb-80 lg:pb-40">
              Remember your password?{" "}
              <Link to={"/signin"} className="text-bcolor font-bold">
                Sign in
              </Link>
            </p>
          </form>
        </div>
        <div className="hidden lg:block">
          <img
            src={rectangle35}
            alt="img"
            className="object-contain lg:w-[720px]"
          />
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;

import React from "react";
import arrow from "../../../assets/images/arrow.svg";
import woman from "../../../assets/images/woman.svg";
import man from "../../../assets/images/man.svg";
import image1 from "../../../assets/images/image1.svg";
import image2 from "../../../assets/images/image2.svg";
import image3 from "../../../assets/images/image3.svg";
import image4 from "../../../assets/images/image4.svg";

const LpSection1Item = () => {
  return (
    <div className="mt-24 md:mt-20 ml-4 mr-5 pb-14 md:mx-4 lg:mx-16">
      <div className="md:flex md:items-center ">
        <div className="lg:w-96">
          <div>
            <h6 className="font-Lato text-3xl font-extrabold leading-normal md:leading-relaxed tracking-wide">
              A Simple, Powerful Solution To Sell Your Digital Products Quickly
              & Efficiently.
            </h6>
          </div>
          <div className="mt-5">
            <p className="font-Lato text-tcolor text-lg md:text-xl tracking-wide leading-normal md:leading-relaxed">
              We bring everything you will need to monetize your contents under
              one platform.
            </p>
          </div>
          <div className="flex bg-bcolor items-center rounded-md h-14 w-64 md:w-72 justify-evenly mt-4">
            <button className="pr-5 font-Lato tracking-wide font-semibold text-base">
              Start Selling With Nadet
            </button>
            <img src={arrow} alt="arrow" className="w-4 h-3 " />
          </div>
        </div>
        <div className=" mt-10 flex space-x-6 lg:space-x-10 lg:pl-32">
          <div className="bg-scolor rounded-b-full rounded-tl-half rounded-tr-bleft overflow-hidden w-full">
            <img
              src={man}
              alt="man"
              className="pt-6 pl-3 md:pt-12 md:pl-7 w-full"
            />
          </div>
          <div className="bg-bcolor rounded-t-full rounded-br-half rounded-bl-bleft overflow-hidden w-full">
            <img
              src={woman}
              alt="woman"
              className="pt-2 md:pt-10 md:pl-5 w-full"
            />
          </div>
        </div>
      </div>
      <div className="mt-16 lg:flex lg:space-x-5">
        <p className="font-Lato text-base font-semibold tracking-wide md:text-2xl">
          Trusted by companies of all sizes
        </p>
        <div className="flex justify-between mt-3 md:mt-5 lg:space-x-20 lg:mr-96">
          <img
            src={image1}
            alt="logo"
            className="h-[23px] w-[84px] md:h-10 md:w-36"
          />
          <img
            src={image2}
            alt="logo"
            className="h-[23px] w-[70px] md:h-10 md:w-36 lg:w-28"
          />
          <img
            src={image3}
            alt="logo"
            className="h-[23px] w-[71px] md:h-10 md:w-36 lg:w-32"
          />
          <img
            src={image4}
            alt="logo"
            className="h-[23px] w-[71px] md:h-10 md:w-36 lg:w-32"
          />
        </div>
      </div>
    </div>
  );
};

export default LpSection1Item;

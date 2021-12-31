import React from "react";
import arrow from "../../assets/images/arrow.png";
import woman from "../../assets/images/woman.png";
import man from "../../assets/images/man.png";
import image1 from "../../assets/images/image1.png";
import image2 from "../../assets/images/image2.png";
import image3 from "../../assets/images/image3.png";
import image4 from "../../assets/images/image4.png";

const HeaderItem = () => {
  return (
    <div className="mt-24 md:mt-20 ml-4 mr-5 pb-16 md:mx-4 lg:mx-16">
      <div className="md:flex md:items-center">
        <div className="bg-bcolor mr-96">
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
        <div className=" mt-10 flex justify-around space-x-6 ">
          <div className="bg-scolor h-48 w-40 md:h-60 md:w-48 lg:h-96 lg:w-72 rounded-b-full rounded-tl-half rounded-tr-bleft overflow-hidden">
            <img src={man} alt="man" className="pt-1 pl-3 md:pt-12 md:pl-7" />
          </div>
          <div className="bg-bcolor h-48 w-40 md:h-60 md:w-48 lg:h-96 lg:w-72 rounded-t-full rounded-br-half rounded-bl-bleft overflow-hidden">
            <img src={woman} alt="woman" className="pt-2 md:pt-10 md:pl-5" />
          </div>
        </div>
      </div>
      <div className="mt-16 md:mr-96">
        <p className="font-Lato text-base font-semibold tracking-wide md:text-2xl">
          Trusted by companies of all sizes
        </p>
      </div>
      <div className="flex justify-around md:justify-between mt-3 md:mt-5">
        <img src={image1} alt="logo" className="md:h-10 md:w-36" />
        <img src={image2} alt="logo" className="md:h-10 md:w-36" />
        <img src={image3} alt="logo" className="md:h-10 md:w-36" />
        <img src={image4} alt="logo" className="md:h-10 md:w-36" />
      </div>
    </div>
  );
};

export default HeaderItem;

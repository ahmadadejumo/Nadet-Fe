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
    <div className="mt-24 ml-4 mr-5">
      <div>
        <h6 className="font-Lato text-3xl font-extrabold leading-relaxed tracking-normal">
          A Simple, Powerful Solution To Sell Your Digital Products Quickly &
          Efficiently.
        </h6>
      </div>
      <div className="mt-5">
        <p className="font-Lato text-tcolor text-lg tracking-wide leading-normal">
          We bring everything you will need to monetize your contents under one
          platform.
        </p>
      </div>
      <div className="flex bg-bcolor items-center rounded-md h-14 w-64 justify-evenly mt-4">
        <button className="pr-5 font-Lato leading-normal font-semibold text-base">
          Start Selling With Nadet
        </button>
        <img src={arrow} alt="arrow" className="w-4 h-3 " />
      </div>
      <div className=" mt-10 flex justify-around">
        <div className="bg-scolor h-56 w-40 rounded-b-full rounded-tl-half rounded-tr-bleft overflow-hidden">
          <img src={man} alt="man" className="pt-8 pl-3" />
        </div>
        <div className="bg-bcolor h-56 w-40 rounded-t-full rounded-br-half rounded-bl-bleft overflow-hidden">
          <img src={woman} alt="woman" className="pt-6" />
        </div>
      </div>
      <div className="mt-20">
        <p className="font-Lato text-base font-semibold tracking-wide leading-normal">
          Trusted by companies of all sizes
        </p>
      </div>
      <div className="flex justify-around mt-3">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>
    </div>
  );
};

export default HeaderItem;

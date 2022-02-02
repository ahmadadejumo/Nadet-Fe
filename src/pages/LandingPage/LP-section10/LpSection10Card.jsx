import React from "react";
import eye from "../../../assets/images/eye.svg";
import comment from "../../../assets/images/comment.svg";
import arrow from "../../../assets/images/arrow.svg";

const LpSection10Card = ({ image, text }) => {
  return (
    <div className="container rounded-lg bg-[#F5F4FD] lg:w-[367px] w-full">
      <img src={image} alt="" className="object-contain w-full" />
      <p className="font-Lato font-semibold text-[22px] md:text-2xl pt-[33px] px-[17px]">
        {text}
      </p>
      <div className="flex mx-[17px] mt-[46px] pb-[22px] justify-between">
        <div className="flex space-x-4">
          <div className="flex items-center space-x-1">
            <img src={eye} alt="eye" className="h-5 w-5" />
            <p>10</p>
          </div>
          <div className="flex items-center space-x-1">
            <img src={comment} alt="comment" className="h-5 w-5" />
            <p>0</p>
          </div>
        </div>
        <button className="flex items-center font-Lato text-lg font-normal">
          Read More <img src={arrow} alt="arrow" className="pl-5" />
        </button>
      </div>
    </div>
  );
};

export default LpSection10Card;

import React from "react";
import shape from "../../assets/images/shape.svg";

const Reusable = ({ header, text }) => {
  return (
    <div className="mx-5">
      <div className="flex space-x-5">
        <img src={shape} alt="img" className="" />
        <div className="font-Lato">
          <h1 className="font-bold text-xl">{header}</h1>
        </div>
      </div>
      <p className="font-normal text-base text-tcolor pt-5 pl-[52px]">{text}</p>
    </div>
  );
};

export default Reusable;

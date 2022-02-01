import React from "react";
import shape from "../../assets/images/shape.svg";

const HowItWorksCard = ({ heading, text }) => {
  return (
    <div className="flex flex-col">
      <div className="flex space-x-5">
        <img src={shape} alt="shape" />
        <h1 className="font-Lato font-bold text-xl">{heading}</h1>
      </div>
      <div>
        <p className="font-Lato font-normal text-base text-tcolor pl-[50px] pt-[20px]">
          {text}
        </p>
      </div>
    </div>
  );
};

export default HowItWorksCard;

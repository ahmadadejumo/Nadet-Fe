import React from "react";

const Card = ({ image, text }) => {
  return (
    <div className="bg-[#FEF8E7] w-full px-5 rounded-lg mb-10">
      <div className="pt-[33px] flex justify-center">
        <img src={image} alt="img" className="object-contain" />
      </div>
      <h1 className="font-Lato font-medium text-2xl pt-[30px]">{text}</h1>
      <button className="rounded-lg bg-bcolor h-[50px] w-[142px] font-Lato text-base font-bold mt-5 mb-[37px]">
        Get Started
      </button>
    </div>
  );
};

export default Card;

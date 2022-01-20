import React from "react";

const Card = ({ image, text }) => {
  return (
    <div className="bg-[#F5F4FD] h-[70px] w-full rounded-lg flex items-center px-[25px] space-x-4">
      <img src={image} alt="img" />
      <p className="font-Lato font-bold text-xl">{text}</p>
    </div>
  );
};

export default Card;

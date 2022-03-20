import React from "react";

const StatCard = ({ image, number, textB, text, w, h }) => {
  return (
    <div className="bg-white w-full flex pl-10 md:px-5 items-center space-x-[25px] h-[140px] rounded shadow-[0_2px_15px_rgba(34,34,34,0.08)]">
      <img src={image} alt="icon" className={`w-[${w}] h-[${h}]`} />
      <div>
        <p className="text-[28px] font-bold">{number}</p>
        <p className="font-normal text-base text-[#7A7A7D] pt-[10px]">
          <span className="font-bold">{textB}</span> {text}
        </p>
      </div>
    </div>
  );
};

export default StatCard;

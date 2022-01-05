import React from "react";

const LpSection2Item = ({ image, color, text, heading, padding }) => {
  return (
    <div className="h-72 w-80 md:w-full rounded-lg border border-[#EEEEF4] mt-5 mx-2">
      <div
        className={`rounded-t-full rounded-b-full ${color} h-16 w-16 mt-9 flex justify-center mx-32`}
      >
        <img src={image} alt="book" className="w-10 h-10 mt-3" />
      </div>
      <div>
        <h1 className="font-Lato font-bold text-xl text-center leading-none mt-5">
          {heading}
        </h1>
        <p
          className={`font-Lato font-normal text-center leading-5 text-base ${padding} text-tcolor pt-4`}
        >
          {text}
        </p>
      </div>
    </div>
  );
};

export default LpSection2Item;

import React from "react";

const Container = ({ image, color, text, heading, padding }) => {
  return (
    <div className="rounded-lg border w-full md:w-[323px] lg:w-[267px] lg:h-[297px] border-[#EEEEF4]">
      <div className="flex justify-center">
        <div
          className={`rounded-full flex justify-center items-center ${color} h-16 w-16 mt-[34px]`}
        >
          <img
            src={image}
            alt="book"
            className="object-contain h-[34px] w-[39px]"
          />
        </div>
      </div>

      <div>
        <h1 className="font-Lato font-bold text-xl text-center leading-none mt-5">
          {heading}
        </h1>
        <p
          className={`font-Lato font-normal text-center leading-5 text-base ${padding} text-tcolor pt-4 pb-[32px]`}
        >
          {text}
        </p>
      </div>
    </div>
  );
};

export default Container;

import React from "react";
import macbook from "../../../assets/images/macbook.png";

const LpSection3 = () => {
  return (
    <div className="md:flex md:flex-row-reverse md:justify-center md:items-center lg:px-[140px] bg-hcolor">
      <div className="flex justify-center pt-[60px] md:pt-14 px-5 lg:pt-[26px] lg:pb-[28px] md:pb-10">
        <img
          src={macbook}
          alt="macbook"
          className="object-contain h-[273px] w-[326px] md:w-[360px] md:h-[300px] lg:h-[545px] lg:w-[652px]"
        />
      </div>
      <div className="mx-5 md:pt-[91px] pt-[61px] md:w-[283px] lg:w-[450px]">
        <h1 className="font-Lato font-bold text-2xl md:text-[26px] lg:text-4xl leading-normal">
          Get more discovered, and sell worldwide
        </h1>
        <p className="font-Lato font-normal text-tcolor text-base leading-normal pt-5">
          Put your products in front of thousands of customers that search
          through our marketplace.
        </p>
        <button className="bg-bcolor mt-5 mb-14 font-Lato font-semibold h-12 w-56 rounded-lg tracking-normal">
          Visit the Marketplace
        </button>
      </div>
    </div>
  );
};

export default LpSection3;

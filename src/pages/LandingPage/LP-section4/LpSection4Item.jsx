import React from "react";

const LpSection4Item = ({ heading, text, image }) => {
  return (
    <div className="bg-[#F5F4FD] rounded-lg md:h-[170px] w-full lg:w-[367px] container">
      <div className="flex space-x-[15px] justify-center px-2 pt-[24px]">
        <div className="mt-8">
          <div className="rounded-t-full rounded-b-full h-[60px] w-[60px] md:h-[46px] md:w-[46px] lg:h-[60px] lg:w-[60px] bg-[#F7E6C3]">
            <div className="flex justify-center items-center pt-4 md:pt-3 lg:pt-4">
              <img
                src={image}
                alt="icon"
                className="object-contain md:w-[21px] md:h-[24px] lg:w-[28px] lg:h-[32px]"
              />
            </div>
          </div>
        </div>
        <div className="">
          <h1 className="font-Lato font-bold text-xl">{heading}</h1>
          <p className="font-Lato font-normal text-tcolor text-base pt-[15px] pb-[23px]">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LpSection4Item;

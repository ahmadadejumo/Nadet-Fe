import React from "react";

const LpSection6Item = ({ image, header, text }) => {
  return (
    <div className="container rounded-lg border h-[150px] w-full md:w-[223px] lg:w-[367px] border-[#EEEEF4]">
      <div className="flex justify-center space-x-[15px] md:space-x-[10px] mx-3 md:mx-[10px] lg:mx-[16px] mt-[34px] md:mt-[17px] lg:mt-[34px] mb-[33px] md:my-4">
        <div className="mt-[15px]">
          <div className="rounded-t-full flex justify-center rounded-b-full bg-[rgb(254,238,197)] h-[60px] w-[60px] md:h-[46px] md:w-[46px] lg:h-[60px] lg:w-[60px]">
            <div className="flex justify-center pt-4 md:pt-[13px] lg:pt-[16px]">
              <img
                src={image}
                alt="icon"
                className="object-contain w-[31px] h-[28px] md:w-[23px] md:h-[21px] lg:h-[28px] lg:w-[31px]"
              />
            </div>
          </div>
        </div>
        <div>
          <h1 className="font-Lato font-bold text-base">{header}</h1>
          <p className="font-Lato font-normal text-tcolor text-sm pt-4">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LpSection6Item;

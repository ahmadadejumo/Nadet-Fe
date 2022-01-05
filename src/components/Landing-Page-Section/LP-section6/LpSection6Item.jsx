import React from "react";

const LpSection6Item = ({ image, header, text }) => {
  return (
    <div className="container rounded-lg w-full border border-[#EEEEF4]">
      <div className="flex justify-center space-x-6 mx-3 my-[34px]">
        <div className="mt-[20px]">
          <div className="rounded-t-full rounded-b-full bg-[rgb(254,238,197)] h-[60px] w-[60px]">
            <div className="flex justify-center pt-4">
              <img src={image} alt="icon" />
            </div>
          </div>
        </div>
        <div>
          <h1 className="font-Lato font-bold text-xl">{header}</h1>
          <p className="font-Lato font-normal text-tcolor text-base pt-4">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LpSection6Item;

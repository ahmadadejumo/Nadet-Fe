import React from "react";

const LpSection4Item = ({ heading, text, image }) => {
  return (
    <div className="h-full w-full bg-[#F5F4FD] rounded-lg container">
      <div className="flex space-x-5 mx-3 pt-14">
        <div className="mt-8">
          <div className="rounded-t-full rounded-b-full h-16 w-16 bg-[#F7E6C3]">
            <div className="flex justify-center pt-4">
              <img src={image} alt="icon" className="" />
            </div>
          </div>
        </div>
        <div className="">
          <h1 className="font-Lato font-bold text-xl">{heading}</h1>
          <p className="font-Lato font-normal text-tcolor text-base pt-4 mb-10">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LpSection4Item;

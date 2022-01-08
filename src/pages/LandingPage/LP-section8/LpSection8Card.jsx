import React from "react";

const LpSection8Card = ({ image, title, text, name, profession }) => {
  return (
    <div className="md:mx-3 lg:mx-4">
      <div className="container rounded-lg w-full bg-[#F5F4FD]">
        <div className="mx-5 pt-[25px] pb-[27px]">
          <h1 className="font-Lato font-semibold text-xl">{title}</h1>
          <p className="font-Lato font-normal text-base text-tcolor pt-[15px]">
            {text}
          </p>
          <div className="flex mt-[18px] space-x-5">
            <img
              src={image}
              alt="profile-pic"
              className="rounded-full h-[55px] w-[55px]"
            />
            <div className="font-Lato">
              <h1 className="font-bold text-lg">{name}</h1>
              <p className="font-normal text-sm text-tcolor ">{profession}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LpSection8Card;

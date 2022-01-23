import React from "react";
import rectangle13 from "../../assets/images/rectangle13.png";
import shape from "../../assets/images/shape.svg";

const ReferAFriend = () => {
  return (
    <div>
      {/* Header section */}
      <div className="bg-[#FFF8E8]">
        <h1 className="font-Lato font-extrabold text-[28px] text-center pt-[129px] px-[20px]">
          Join a Network affiliate on Nadet and earn 3000 for every friend you
          invite
        </h1>
        <p className="font-Lato font-normal text-tcolor text-lg text-center pt-10">
          Earn from every person you refer
        </p>
        <div className="flex justify-center pt-[20px] pb-[32px]">
          <button className="rounded-lg bg-bcolor h-[50px] w-[164px] font-Lato font-semibold text-base">
            Refer A Friend
          </button>
        </div>
      </div>
      {/* Body Section */}
      <div className="mt-[80px]">
        <h1 className="font-Lato font-bold text-2xl text-center px-[25px]">
          On our Network affiliate, you earn a bonus each time you refer someone
          to the network, see how it works
        </h1>
        <div className="px-5 pt-[50px]">
          <img src={rectangle13} alt="img" className="object-contain" />
        </div>
      </div>
    </div>
  );
};

export default ReferAFriend;

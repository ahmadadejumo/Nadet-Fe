import React from "react";
import profile1 from "../../../assets/images/profile1.png";
import profile2 from "../../../assets/images/profile2.png";

const LpSection5 = () => {
  return (
    <div className="">
      <div className="px-5 md:flex md:px-5 lg:px-[140px] md:space-x-10 md:justify-center lg:items-center lg:space-x-[100px] bg-[#FEF8E7]">
        <div className="flex justify-center space-x-[15px] lg:space-x-[39px] md:pt-[45px] lg:pt-[25px] lg:pb-[50px]">
          <div className="pt-[83px]">
            <img src={profile1} alt="profile" className="" />
          </div>
          <div className="pt-[50px]">
            <img src={profile2} alt="profile" className="" />
          </div>
        </div>
        <div className="mt-[60px] lg:mt-[100px] md:w-[1500px]">
          <h1 className="font-Lato font-bold md:text-[26px] text-2xl">
            Build a social profile
          </h1>
          <p className="font-Lato font-normal text-tcolor pt-5">
            Invite your social media followers to follow your Nadet profile and
            notify them with a click of a button when you launch a product.
          </p>{" "}
          <br></br>
          <p className="font-Lato font-normal text-base text-tcolor">
            {" "}
            Our mission is to help you build a massive connection with your fans
            and followers and monetise them in one place.
          </p>
          <button className="bg-bcolor font-Lato font-semibold rounded-lg h-[50px] w-[199px] mt-5 mb-[54px]">
            Get Started Today!
          </button>
        </div>
      </div>
    </div>
  );
};

export default LpSection5;

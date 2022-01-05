import React from "react";
import profile1 from "../assets/images/profile1.png";
import profile2 from "../assets/images/profile2.png";

const SocialProfile = () => {
  return (
    <div className="bg-[#FEF8E7]">
      <div className="mx-16 md:flex md:mx-5 md:space-x-5 md:justify-center lg:space-x-20 lg:mx-16">
        <div className="flex space-x-4 justify-center w-full md:mt-[40px] lg:space-x-10 lg:mb-[70px] object-cover">
          <img src={profile1} alt="profile" className="pt-[83px] w-full" />
          <img src={profile2} alt="profile" className="pt-[50px] pb-9 w-full" />
        </div>
        <div className="mt-[60px] lg:mt-[125px]">
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

export default SocialProfile;

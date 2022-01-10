import React from "react";
import Navbar from "../../components/navbar/Navbar";
import woman2 from "../../assets/images/woman2.png";
import HowItWorksCard from "./HowItWorksCard";

const HowItWorks = () => {
  return (
    <div>
      <div className="bg-[#FFF8E8]">
        <Navbar />
        <h1 className="font-Lato font-extrabold text-[28px] pt-[197px] md:pt-[168px] pb-[70px] md:pb-[133px] text-center">
          How It Works
        </h1>
      </div>
      <h1 className="font-Lato font-bold text-2xl pt-[80px] text-center px-5">
        It takes less than 5 minutes in 3 steps to get started in selling your
        digital products and services for free.
      </h1>
      <div className="flex justify-center mt-[50px]">
        <img src={woman2} alt="woman" className="" />
      </div>
      <div className="mt-[60px]">
        <HowItWorksCard
          heading="Sign up and set up your account and bank details"
          text="Sign up for your free account on Nadet, and login to set up for selling profile and verify your bank details."
        />
        <HowItWorksCard
          heading="Upload your product/content(s)"
          text="After account setup, you can easily upload your product/content(s) on Nadet, set your pricing in different currencies, input your product details and get your product link."
        />
        <HowItWorksCard
          heading="Start earning by sharing the link with your customers"
          text="Share your product link to your friends and targeted customers on all social networks to start receiving massive sales and instant payment with no hassle."
        />
      </div>
      <div className="flex justify-center mt-10">
        <button className="bg-bcolor font-Lato font-semibold rounded-lg h-[50px] w-[199px] ">
          Get Started Today!
        </button>
      </div>
    </div>
  );
};

export default HowItWorks;

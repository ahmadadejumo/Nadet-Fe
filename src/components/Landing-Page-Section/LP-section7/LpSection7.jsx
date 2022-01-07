import React from "react";
import image5 from "../../../assets/images/image5.svg";
import image6 from "../../../assets/images/image6.svg";

const LpSection7 = () => {
  return (
    <div className="mt-[40px]">
      <div className="mx-5">
        <h1 className="font-Lato font-bold text-2xl text-center lg:mx-96">
          We give you the right tools to make more sales with ease
        </h1>
        <div className="container rounded-lg w-full bg-[#F5F4FD] mt-[40px]">
          <div className="md:flex mx-5 md:mx-10 md:space-x-16 lg:mx-[65px]">
            <div className="md:w-[450px] lg:w-[1200px] lg:mt-[31px]">
              <h1 className="font-Lato font-bold text-2xl md:text-[26px] lg:text-4xl text-[#9B8EEB] pt-[50px] leading-9">
                Refer your buddies to our platform and earn more money.
              </h1>
              <p className="font-Lato font-normal text-base pt-5 text-tcolor">
                Our affilaite program helps you make more sales as you can
                automatically pay commissions to people to help you promote your
                contents.
              </p>
              <button className="bg-[#9B8EEB] font-Lato font-semibold rounded-lg h-[50px] w-[142px] mt-5 mb-[63px]">
                Get Started
              </button>
            </div>
            <div className="w-full md:mt-[90px] lg:mt-[50px]">
              <img src={image5} alt="" className="w-full pb-[51px]" />
            </div>
          </div>
        </div>
        {/* two seperate cards */}
        <div className="container rounded-lg w-full bg-[#FDFAF2] mt-5">
          <div className="md:flex md:flex-row-reverse mx-5 md:mx-10 lg:mx-[65px]">
            <div className="md:w-[450px] lg:w-[1200px]">
              <h1 className="font-Lato font-bold text-2xl md:text-[26px] lg:text-4xl text-[#FBBC15] leading-9">
                Keep receiving and never lose an international customer again!
              </h1>
              <p className="font-Lato font-normal text-base pt-5 text-tcolor">
                We've integrated multiple payment gateways in place to ensure
                you can receive payments from anywhere in the world and you
                don’t have to worry again.
              </p>
              <button className="bg-[#FBBC15] font-Lato font-semibold rounded-lg h-[50px] w-[142px] mt-5 mb-[63px]">
                Learn More
              </button>
            </div>
            <div className="w-full md:mt-[90px] lg:mt-[50px] md:mr-14">
              <img src={image6} alt="" className="w-full pb-[51px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-[50px]">
        <button className="bg-bcolor font-Lato font-semibold rounded-lg h-[50px] w-[199px] mt-5 mb-[54px]">
          Get Started Today!
        </button>
      </div>
    </div>
  );
};

export default LpSection7;

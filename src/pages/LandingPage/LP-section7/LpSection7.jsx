import React from "react";
import image6 from "../../../assets/images/image6.png";
import image5 from "../../../assets/images/image5.png";

const LpSection7 = () => {
  return (
    <div className="mt-[40px] mx-5 md:mx-[30px]">
      <h1 className="font-Lato font-bold text-2xl md:text-[26px] lg:text-4xl text-center md:mx-[120px] lg:mx-[250px]">
        We give you the right tools to make more sales with ease
      </h1>
      {/* First card */}
      <div className="rounded-lg bg-[#F5F4FD] mt-[40px] lg:mx-[70px]">
        <div className="md:flex mx-5 md:mx-[30px] lg:px-[10px] items-center md:space-x-[37px] lg:space-x-[83px]">
          <div className="md:w-[296px] lg:w-[536px] mt-[50px] md:mt-[23px] lg:mt-[31px]">
            <h1 className="font-Lato font-bold text-2xl md:text-[26px] lg:text-4xl text-[#9B8EEB] leading-relaxed">
              Refer your buddies to our platform and earn more money.
            </h1>
            <p className="font-Lato font-normal text-base pt-5 text-tcolor">
              Our affilaite program helps you make more sales as you can
              automatically pay commissions to people to help you promote your
              contents.
            </p>
            <button className="bg-[#9B8EEB] font-Lato font-semibold rounded-lg h-[50px] w-[142px] mt-5 mb-[63px] md:mb-[29px]">
              Get Started
            </button>
          </div>
          <div className="pb-[51px] md:pb-px">
            <img
              src={image5}
              alt=""
              className="object-contain md:h-[167px] md:w-[315px] lg:w-[411px] lg:h-[219px]"
            />
          </div>
        </div>
      </div>
      {/* second card */}
      <div className="rounded-lg bg-[#FDFAF2] mt-5 md:mt-[40px] lg:mt-[60px] lg:mx-[70px]">
        <div className="md:flex items-center mx-5 md:mx-[30px] lg:px-[10px] md:space-x-[25px] lg:space-x-[64px]">
          <div className="pb-[51px] md:pb-px">
            <img
              src={image6}
              alt=""
              className="object-contain md:w-[315px] md:h-[167px] lg:w-[411px] lg:h-[219px]"
            />
          </div>
          <div className="md:w-[328px] lg:w-[554px] pt-[50px] md:pt-[10px] lg:pt-[32px]">
            <h1 className="font-Lato font-bold text-2xl md:text-[26px] lg:text-4xl text-[#FBBC15] leading-relaxed">
              Keep receiving and never lose an international customer again!
            </h1>
            <p className="font-Lato font-normal text-base pt-5 text-tcolor">
              We've integrated multiple payment gateways in place to ensure you
              can receive payments from anywhere in the world and you don’t have
              to worry again.
            </p>
            <button className="bg-[#FBBC15] font-Lato font-semibold rounded-lg h-[50px] w-[142px] mt-5 mb-[63px] md:mb-[15px] lg:mb-[32px]">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-[40px]">
        <button className="bg-bcolor font-Lato font-semibold rounded-lg h-[50px] w-[199px] mt-5 mb-[54px]">
          Get Started Today!
        </button>
      </div>
    </div>
  );
};

export default LpSection7;

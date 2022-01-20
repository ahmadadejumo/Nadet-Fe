import React from "react";
import rectangle6 from "../../assets/images/rectangle6.png";
import rectangle7 from "../../assets/images/rectangle7.png";
import rectangle8 from "../../assets/images/rectangle8.png";

const AboutUs = () => {
  return (
    <div>
      <div className="bg-[#FFF8E8]">
        <h1 className="font-Lato font-extrabold text-[28px] md:text-3xl lg:text-4xl text-center pt-[129px] md:pt-[168px]">
          Get To Know Us
        </h1>
        <p className="font-Lato font-normal text-lg md:text-xl text-center pt-5 px-5 md:px-36 lg:px-[395px]">
          We offer you the flexibility to monetize any of your digital
          product/content(s) for maximum success.
        </p>
        <div className="flex space-x-3 justify-center md:space-x-5 lg:space-x-7 mx-5 md:mx-16 lg:mx-[243px] pt-10 pb-[50px] lg:pb-[90px]">
          <div className="object-contain">
            <img src={rectangle8} alt="img" />
          </div>
          <div className="object-contain">
            <img src={rectangle7} alt="img" />
          </div>
          <div className="object-contain">
            <img src={rectangle6} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

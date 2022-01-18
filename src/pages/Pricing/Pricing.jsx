import React from "react";
import Navbar from "../../components/Navbar";
import image10 from "../../assets/images/image10.png";
import dropdown from "../../assets/images/dropdown.svg";

const Pricing = () => {
  return (
    <div>
      <div className="bg-[#FFF8E8]">
        <Navbar />
        <h1 className="font-Lato font-extrabold text-[28px] text-center pt-[197px] mx-2">
          Our pricing is simple and fair
        </h1>
        <p className="font-Lato font-semibold text-lg text-center pt-5 mx-10 pb-[51px]">
          It’s completely free to get started.{" "}
          <p className="text-bcolor">Save 10% with annual billing</p>
        </p>
      </div>
      <div className="flex justify-center mt-[50px]">
        <div className="container border border-bcolor w-[150px] h-[50px] flex justify-evenly rounded-lg items-center">
          <img
            src={image10}
            alt="img"
            className="object-contain h-[26px] w-[44px]"
          />
          <div className="border-l h-[26px] border-bcolor" />
          <p>USD</p>
          <img src={dropdown} alt="img" className="h-[7px] w-[11px]" />
        </div>
      </div>
    </div>
  );
};

export default Pricing;

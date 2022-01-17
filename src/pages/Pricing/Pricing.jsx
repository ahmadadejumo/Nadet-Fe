import React from "react";
import Navbar from "../../components/Navbar";

const Pricing = () => {
  return (
    <div className="bg-[#FFF8E8]">
      <Navbar />
      <h1 className="font-Lato font-extrabold text-[28px] text-center pt-[197px] mx-2">
        Our pricing is simple and fair
      </h1>
      <p className="font-Lato font-semibold text-lg text-center pt-5 mx-10">
        It’s completely free to get started.{" "}
        <p className="text-bcolor">Save 10% with annual billing</p>
      </p>
    </div>
  );
};

export default Pricing;

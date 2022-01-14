import React from "react";
import Navbar from "../../components/Navbar";
import vector12 from "../../assets/images/vector12.svg";

const Faqs = () => {
  return (
    <div>
      <div className="bg-[#FFF8E8]">
        <Navbar />
        <h1 className="font-Lato font-extrabold text-[28px] text-center pt-[197px] px-10">
          Common Asked Questions
        </h1>
        <p className="font-Lato font-normal text-lg text-center text-tcolor pt-5 px-14 pb-[30px]">
          You need help? Get quick answers to all your questions about Nadet
        </p>
      </div>
      <div className="mx-5 mt-[50px]">
        <div className="flex justify-between items-center rounded-lg border-[1px] h-[60px] w-full border-[#FFF8E8] shadow-2xl box-border px-5">
          <input
            type="text"
            placeholder="Search for anything"
            className="border-none outline-none"
          />
          <img src={vector12} alt="img" className="h-[22px] w-[22px]" />
        </div>
      </div>
    </div>
  );
};

export default Faqs;

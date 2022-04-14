import React from "react";
import BackNavigation from "../../../../components/BackNavigation";
import pen from "../../../../assets/images/pen.svg";
import redX from "../../../../assets/images/redX.svg";
import wastebin from "../../../../assets/images/wastebin.svg";
import plus from "../../../../assets/images/plus.svg";
import blackPlus from "../../../../assets/images/blackPlus.svg";
import eye from "../../../../assets/images/blackEye.svg";

const AddCourseContent = () => {
  return (
    <div className="font-Lato h-screen md:px-10 lg:px-[140px]">
      <BackNavigation />
      <div className="pt-[32px] px-5 md:px-0">
        <h1 className="font-bold text-xl lg:text-[28px]">Course content</h1>
        <div className="flex justify-between items-center mt-[16px]">
          <p className="text-[20px] font-medium pt-1 lg:pt-0">
            Manage course curriculum
          </p>
          <div className="flex justify-between space-x-[25px] md:space-x-16 lg:space-x-[32px] pt-[24px] lg:pt-0">
            <button className="bg-bcolor h-[38px] lg:w-[195px] lg:h-[43px] rounded w-full font-bold text-xs lg:text-base">
              Set Preview Video
            </button>
            <button className="bg-bcolor flex justify-between px-6 items-center  h-[38px] lg:w-[195px] lg:h-[43px] rounded w-full font-bold text-xs lg:text-base">
              <img src={eye} alt="icon" className="" />
              Preview Course
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#8492A642] px-[20px] flex justify-between items-center pb-[16px] pt-[25px] mt-[32px]">
        <div className="flex items-center space-x-[10px] lg:cursor-pointer">
          <p className="text-base font-bold">First Section</p>
          <img src={pen} alt="icon" className="w-[12px] h-[12px]" />
        </div>
        <div className="flex items-center space-x-[12px] lg:cursor-pointer">
          <img src={redX} alt="icon" className="w-[10px] h-[10px]" />
          <p className="text-xs font-bold text-[#ED0B4CE5]">Remove Section</p>
        </div>
      </div>
      <div className="bg-white pt-[35px] px-[20px]">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-[10px] lg:cursor-pointer">
            <p className="text-base font-bold">Enter Lecture 1</p>
            <img src={pen} alt="icon" className="w-[18px] h-[18px]" />
          </div>
          <div className="flex items-center space-x-[20px]">
            <button className="h-[35px] w-[64px] bg-bcolor rounded text-base font-bold">
              Edit
            </button>
            <img
              src={wastebin}
              alt="icon"
              className="h-[24px] w-[20px] lg:cursor-pointer"
            />
          </div>
        </div>
        <div className="flex items-center space-x-[16px] mt-[40px] pb-[20px] lg:cursor-pointer">
          <img src={plus} alt="icon" className="h-[16px] w-[16px]" />
          <p className="text-[#1877F2] text-base font-bold">Add new lecture</p>
        </div>
      </div>
      <div className="flex justify-center md:justify-start mt-[32px] mb-[37px]">
        <button className=" h-[44px] w-[217px] bg-bcolor rounded">
          <div className="flex justify-center items-center space-x-2">
            <img src={blackPlus} alt="icon" className="w-[16px] h-[16px]" />
            <p className="text-base font-bold">Add New Section</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default AddCourseContent;

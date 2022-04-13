import React from "react";
import BackNavigation from "../../../../components/BackNavigation";
import pen from "../../../../assets/images/pen.svg";
import redX from "../../../../assets/images/redX.svg";
import wastebin from "../../../../assets/images/wastebin.svg";

const AddCourseContent = () => {
  return (
    <div className="font-Lato">
      <BackNavigation />
      <div className="pt-[32px] px-5">
        <h1 className="font-bold text-xl">Course content</h1>
        <p className="text-[20px] font-medium pt-1">Manage course curriculum</p>
        <div className="flex justify-between space-x-[25px] pt-[24px]">
          <button className="bg-bcolor h-[38px] rounded w-full font-bold text-xs">
            Set Preview Video
          </button>
          <button className="bg-bcolor h-[38px] rounded w-full font-bold text-xs">
            Preview Course
          </button>
        </div>
      </div>
      <div className="bg-[#8492A642] px-[20px] flex justify-between items-center pb-[16px] pt-[25px] mt-[32px]">
        <div className="flex items-center space-x-[10px]">
          <p className="text-base font-bold">First Section</p>
          <img src={pen} alt="icon" className="w-[12px] h-[12px]" />
        </div>
        <div className="flex items-center space-x-[12px]">
          <img src={redX} alt="icon" className="w-[10px] h-[10px]" />
          <p className="text-xs font-bold text-[#ED0B4CE5]">Remove Section</p>
        </div>
      </div>
      <div className="bg-white pt-[35px] px-[20px] flex items-center justify-between">
        <div className="flex items-center space-x-[10px]">
          <p className="text-base font-bold">Enter Lecture 1</p>
          <img src={pen} alt="icon" className="w-[18px] h-[18px]" />
        </div>
        <div className="flex items-center space-x-[20px]">
          <button className="h-[35px] w-[64px] bg-bcolor rounded text-base font-bold">
            Edit
          </button>
          <img src={wastebin} alt="icon" className="h-[24px] w-[20px]" />
        </div>
      </div>
    </div>
  );
};

export default AddCourseContent;

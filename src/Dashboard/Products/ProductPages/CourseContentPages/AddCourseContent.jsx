import React from "react";
import BackNavigation from "../../../../components/BackNavigation";
import pen from "../../../../assets/images/pen.svg";

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
      <div>
        <div className="bg-[#8492A642] flex">
          <p className="text-base font-bold">First Section</p>
          <img src={pen} alt="icon" />
        </div>
      </div>
    </div>
  );
};

export default AddCourseContent;

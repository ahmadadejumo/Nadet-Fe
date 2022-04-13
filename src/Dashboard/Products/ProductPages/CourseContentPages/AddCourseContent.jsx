import React from "react";
import BackNavigation from "../../../../components/BackNavigation";

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
    </div>
  );
};

export default AddCourseContent;

import React from "react";
import BackNavigation from "../../../../components/BackNavigation";

const EditCourseSection = () => {
  return (
    <div className="font-Lato">
      <div className="px-5">
        <BackNavigation />
        <h1 className="pt-[32px] text-[24px] font-bold">Course content</h1>
        <p className="text-[20px] font-medium pt-1">Lecture 1</p>
        <button className="w-[208px] h-[37px] text-xs font-bold rounded mt-[24px] bg-bcolor">
          Upload Course Resources
        </button>
      </div>
      <div className="mt-[32px] bg-white">
        <div className="flex justify-center px-7 pt-[24px]">
          <button className="h-[50px] w-full border rounded-l text-[16px] font-bold bg-[#8492A685]">
            Upload Files
          </button>
          <button className="h-[50px] px-3 w-full border rounded-r text-[16px] font-bold bg-[#E8E8EB75]">
            Import from External Link
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditCourseSection;

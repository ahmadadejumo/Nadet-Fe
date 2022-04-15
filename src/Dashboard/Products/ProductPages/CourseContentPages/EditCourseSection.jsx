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
    </div>
  );
};

export default EditCourseSection;

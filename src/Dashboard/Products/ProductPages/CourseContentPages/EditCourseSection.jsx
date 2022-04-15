import React, { useState } from "react";
import BackNavigation from "../../../../components/BackNavigation";

const EditCourseSection = () => {
  const [toggleButtonState, setToggleButtonState] = useState(1);

  const toggleButton = (index) => {
    setToggleButtonState(index);
  };

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
          <button
            onClick={() => toggleButton(1)}
            className={`${
              toggleButtonState === 1 ? "bg-[#8492A685]" : "bg-[#E8E8EB75]"
            } h-[50px] w-full border rounded-l text-[16px] font-bold`}
          >
            Upload Files
          </button>
          <button
            onClick={() => toggleButton(2)}
            className={`${
              toggleButtonState === 2 ? "bg-[#8492A685]" : "bg-[#E8E8EB75]"
            } h-[50px] px-3 w-full border rounded-r text-[16px] font-bold`}
          >
            Import from External Link
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditCourseSection;

import React from "react";
import wastebin from "../../../../assets/images/wastebin.svg";
import { useNavigate } from "react-router-dom";
import pen from "../../../../assets/images/pen.svg";

const AddLecture = ({ lectureName }) => {
  const navigation = useNavigate();
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-[10px] lg:cursor-pointer">
        <p className="text-base font-bold">{lectureName}</p>
        <img src={pen} alt="icon" className="w-[18px] h-[18px]" />
      </div>
      <div className="flex items-center space-x-[20px]">
        <button
          onClick={() => navigation("/dashboard/upload-course-lecture")}
          className="h-[35px] w-[64px] bg-bcolor rounded text-base font-bold"
        >
          Edit
        </button>
        <img
          src={wastebin}
          alt="icon"
          className="h-[24px] w-[20px] lg:cursor-pointer"
        />
      </div>
    </div>
  );
};

export default AddLecture;

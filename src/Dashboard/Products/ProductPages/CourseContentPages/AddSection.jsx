import React from "react";
import pen from "../../../../assets/images/pen.svg";
import redX from "../../../../assets/images/redX.svg";
import plus from "../../../../assets/images/plus.svg";
import AddLecture from "./AddLecture";

const AddSection = ({
  lecture,
  id,
  setLectureName,
  updateLectureName,
  showModal,
}) => {
  return (
    <div>
      <div className="bg-[#8492A642] px-[20px] flex justify-between items-center pb-[16px] pt-[25px]">
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
        <div className="space-y-5">
          {lecture.length !== 0 ? (
            lecture.map(({ lectureName }, index) => (
              <AddLecture
                key={index}
                id={id}
                lectureName={lectureName}
                setLectureName={setLectureName}
                onChange={updateLectureName(index)}
              />
            ))
          ) : (
            <h1 className="text-center font-semibold text-lg text-gray-400">
              No lecture available!!!
            </h1>
          )}
        </div>
        <div
          onClick={showModal}
          className="flex items-center space-x-[16px] mt-[40px] pb-[20px] lg:cursor-pointer"
        >
          <img src={plus} alt="icon" className="h-[16px] w-[16px]" />
          <p className="text-[#1877F2] text-base font-bold">Add new lecture</p>
        </div>
      </div>
    </div>
  );
};

export default AddSection;

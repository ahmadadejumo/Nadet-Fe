import React from "react";
import dropdown from "../assets/images/dropdown.svg";

const DropdownSelect = ({ name, width }) => {
  return (
    <div className="flex h-[31px]">
      <div
        className={`bg-white text-base font-bold text-[#35363AB2] ${width} flex justify-center items-center rounded-tl-lg rounded-bl-lg`}
      >
        {name}
      </div>
      <div className="bg-[#FBBC15] flex justify-center items-center w-[21px] rounded-tr-lg rounded-br-lg">
        <img src={dropdown} alt="dropdown" className="w-[11px] h-[6px]" />
      </div>
    </div>
  );
};

export default DropdownSelect;

import React, { useState } from "react";
import dropdown from "../assets/images/dropdown.svg";

const DropdownSelect = ({ name, width, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };

  return (
    <div>
      <div className="flex h-[31px] cursor-pointer" onClick={toggling}>
        <div
          className={`bg-white text-[13px] px-3 font-bold text-[#35363AB2] ${width} flex justify-center items-center rounded-tl-lg rounded-bl-lg`}
        >
          {selectedOption || name}
        </div>
        <div className="bg-[#FBBC15] flex justify-center items-center w-[21px] rounded-tr-lg rounded-br-lg">
          <img src={dropdown} alt="dropdown" className="w-[11px] h-[6px]" />
        </div>
      </div>
      {isOpen && (
        <ul className="absolute cursor-pointer bg-white rounded-lg mt-2 space-y-3 px-2 py-2">
          {options.map((option) => (
            <li onClick={onOptionClicked(option)} key={Math.random()}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownSelect;

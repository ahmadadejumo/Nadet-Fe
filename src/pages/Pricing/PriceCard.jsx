import { React, useState } from "react";
import dropdown from "../../assets/images/dropdown.svg";
import dropdownUp from "../../assets/images/dropdownUp.svg";
import star from "../../assets/images/star.svg";

const PriceCard = ({ header, display, text, subHeading, listPlan }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    return setIsOpen(!isOpen);
  };

  return (
    <div className="mx-5 mb-5">
      <div className=" bg-[#FDD773] px-[25px] rounded-t-lg">
        <div className="flex items-center justify-between">
          <h1 className="font-Lato font-bold text-base pt-[35px]">{header}</h1>
          <div
            className={`bg-white ${display} mt-5 h-[29px] w-[124px] rounded-tr-lg flex items-center justify-evenly`}
          >
            <img src={star} alt="img" />
            <h1 className="font-Lato font-bold text-xs">Recommended</h1>
          </div>
        </div>
        <p className="font-Lato text-sm font-medium pt-[15px] pb-[27px]">
          {text}
        </p>
      </div>
      <div className="px-5 pt-[15px] border border-[#FDD773] rounded-b-lg">
        <h1 className="font-Lato font-bold text-lg">{subHeading}</h1>
        <div className="flex justify-between pt-[25px]">
          <button className="bg-bcolor h-[44px] w-[142px] rounded-lg">
            Get Started
          </button>
          <div
            onClick={handleClick}
            className="bg-[#FDD773] rounded-lg h-[38px] w-[39px] flex justify-center items-center"
          >
            {!isOpen ? (
              <img src={dropdown} alt="img" className="h-[9px] w-[15px]" />
            ) : (
              <img src={dropdownUp} alt="img" className="h-[9px] w-[15px]" />
            )}
          </div>
        </div>
        {isOpen && <div className="pb-[50px]">{listPlan}</div>}
      </div>
    </div>
  );
};

export default PriceCard;

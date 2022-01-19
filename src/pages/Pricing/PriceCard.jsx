import { React, useState } from "react";
import dropdown from "../../assets/images/dropdown.svg";
import dropdownUp from "../../assets/images/dropdownUp.svg";
import star from "../../assets/images/star.svg";
import vector15 from "../../assets/images/vector15.svg";

const PriceCard = ({
  header,
  display,
  text,
  subHeading,
  firstPlan,
  listPlan,
}) => {
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
            className={`bg-white ${display} mt-5 h-[29px] w-[110px] rounded-tr-lg flex items-center justify-evenly`}
          >
            <img src={star} alt="img" />
            <h1 className="font-Lato font-bold text-xs">Recommended</h1>
          </div>
        </div>
        <p className="font-Lato text-sm font-medium pt-[15px] pb-[27px]">
          {text}
        </p>
      </div>
      <div className="px-5 pt-[15px] border lg:h-[1300px] border-[#FDD773] rounded-b-lg pb-5">
        <h1 className="font-Lato font-bold text-lg">{subHeading}</h1>
        <div className="flex justify-between pt-[25px]">
          <button className="bg-bcolor h-[44px] w-[142px] rounded-lg">
            Get Started
          </button>
          <div
            onClick={handleClick}
            className="bg-[#FDD773] rounded-lg h-[38px] w-[39px] flex justify-center items-center md:hidden"
          >
            {!isOpen ? (
              <img src={dropdown} alt="img" className="h-[9px] w-[15px]" />
            ) : (
              <img src={dropdownUp} alt="img" className="h-[9px] w-[15px]" />
            )}
          </div>
        </div>
        <div className="flex pt-[25px] items-center space-x-3">
          <img src={vector15} alt="img" />
          <h1>{firstPlan}</h1>
        </div>
        {isOpen && <div className="pb-[50px] md:hidden">{listPlan}</div>}
        <div className="pb-[50px] hidden md:contents">{listPlan}</div>
      </div>
    </div>
  );
};

export default PriceCard;

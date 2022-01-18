import { React, useState } from "react";
import dropdown from "../../assets/images/dropdown.svg";
import dropdownUp from "../../assets/images/dropdownUp.svg";
import vector15 from "../../assets/images/vector15.svg";

const PriceCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    return setIsOpen(!isOpen);
  };

  return (
    <div className="mx-5">
      <div className=" bg-[#FDD773] px-[25px] rounded-t-lg">
        <h1 className="font-Lato font-bold text-base pt-[35px]">
          Starter plan
        </h1>
        <p className="font-Lato text-sm font-medium pt-[15px] pb-[27px]">
          Share what you know. Get started on Nadet with our free set of
          features
        </p>
      </div>
      <div className="px-5 pt-[15px] border border-[#FDD773] rounded-b-lg">
        <h1 className="font-Lato font-bold text-lg">FREE</h1>
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
        {isOpen && (
          <div className="flex pt-[25px] items-center space-x-3">
            <img src={vector15} alt="img" />
            <p>Upload up to 5 courses (unlimited videos)</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PriceCard;

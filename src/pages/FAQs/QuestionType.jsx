import { React, useState } from "react";
import shape from "../../assets/images/shape.svg";
import dropdown from "../../assets/images/dropdown.svg";
import dropdownUp from "../../assets/images/dropdownUp.svg";

const QuestionType = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUp, setIsUp] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const openClick = () => {
    setIsUp(!isUp);
  };
  return (
    <div>
      <div
        onClick={handleClick}
        className="flex justify-center items-center space-x-4 pb-5"
      >
        <img src={shape} alt="img" />
        <p className="font-Lato text-xl font-bold">General Questions</p>
        <img src={dropdown} alt="img" />
      </div>
      {isOpen && (
        <div className="mx-5 mt-[30px]">
          <h1 className="font-Lato font-bold text-xl">
            Payment Frequently Asked Questions
          </h1>
          <div
            onClick={openClick}
            className={`container border border-bcolor rounded-t-lg w-full flex justify-between items-center px-[15px] py-1 mt-10`}
          >
            <h1 className="font-Lato font-bold text-lg">
              How do I get paid as a content creator using Nadet to sell my
              product ?
            </h1>
            {!isUp ? (
              <img src={dropdown} alt="img" />
            ) : (
              <img src={dropdownUp} alt="img" />
            )}
          </div>
          {isUp && (
            <div className="container rounded-b-lg border border-bcolor w-full flex justify-center">
              <h1 className="font-Lato font-normal text-base text-tcolor">
                Detailed pricing and fees information can be viewed from our
                pricing page. Click here
              </h1>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default QuestionType;

import { React, useState } from "react";
import dropdown from "../../assets/images/dropdown.svg";
import dropdownUp from "../../assets/images/dropdownUp.svg";

const FaqsQuestionCard = ({ question, awnser }) => {
  const [isUp, setIsUp] = useState(false);

  const openClick = () => {
    setIsUp(!isUp);
  };
  return (
    <div className="mx-5">
      <div
        onClick={openClick}
        className={`container border border-bcolor ${
          !isUp ? "rounded-lg" : "rounded-t-lg"
        } w-full flex justify-between items-center px-[15px] py-1`}
      >
        <h1 className="font-Lato font-bold text-lg">{question}</h1>
        {!isUp ? (
          <img src={dropdown} alt="img" />
        ) : (
          <img src={dropdownUp} alt="img" />
        )}
      </div>
      {isUp && (
        <div className="container rounded-b-lg border border-bcolor w-full flex justify-center mb-5">
          <h1 className="font-Lato font-normal text-base text-tcolor px-3 py-1">
            {awnser}
          </h1>
        </div>
      )}
    </div>
  );
};

export default FaqsQuestionCard;

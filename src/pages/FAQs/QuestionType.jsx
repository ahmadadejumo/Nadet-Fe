import { React, useState } from "react";
import shape from "../../assets/images/shape.svg";
import dropdown from "../../assets/images/dropdown.svg";
import dropdownUp from "../../assets/images/dropdownUp.svg";

const QuestionType = ({ text }) => {
  const [isUp, setIsUp] = useState(false);

  const handleClick = () => {
    setIsUp(!isUp);
  };

  return (
    <div>
      <div
        onClick={handleClick}
        className="flex mx-10 items-center space-x-4 pb-5"
      >
        <img src={shape} alt="img" />
        <p className="font-Lato text-xl font-bold">{text}</p>
        {!isUp ? (
          <img src={dropdown} alt="img" />
        ) : (
          <img src={dropdownUp} alt="img" />
        )}
      </div>
    </div>
  );
};

export default QuestionType;

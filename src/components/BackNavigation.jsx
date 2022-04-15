import React from "react";
import { useNavigate } from "react-router-dom";
import leftarrow from "../assets/images/leftarrow.svg";

const BackNavigation = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(-1)}
      className="flex space-x-4 items-center pt-[24px] lg:cursor-pointer"
    >
      <img src={leftarrow} alt="arrow" />
      <p className="text-lg font-normal">Back</p>
    </div>
  );
};

export default BackNavigation;

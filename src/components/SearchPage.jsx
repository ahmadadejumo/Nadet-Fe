import React from "react";
import X from "../assets/images/X.svg";

const SearchPage = () => {
  return (
    <div className="px-5">
      <div className="flex justify-end pr-[6px] pt-[32px]">
        <img src={X} alt="XIcon" className="object-contain w-[24px]" />
      </div>
    </div>
  );
};

export default SearchPage;

import React from "react";
import X from "../assets/images/X.svg";
import search from "../assets/images/search.svg";

const SearchPage = ({ close }) => {
  return (
    <div className="px-5 font-Lato ">
      <div onClick={close} className="flex justify-end pr-[6px] pt-[32px]">
        <img src={X} alt="XIcon" className="object-contain w-[24px]" />
      </div>
      <div>
        <h1 className="text-center font-bold text-[25px]">Search</h1>
        <p className="text-center text-base font-normal">
          What do you expect to find today?
        </p>
        <div className="flex justify-center">
          <div className="flex justify-between px-5 mt-[24px] border shadow-sm shadow-[#22222214] items-center w-[335px] h-[45px] bg-white rounded-[10px]">
            <input
              type="text"
              placeholder="Search for a product"
              className="border-none outline-none"
            />
            <img src={search} alt="search icon" className="w-5" />
          </div>
        </div>
        <h1 className="text-lg font-bold pt-[60px]">Top Searches</h1>
      </div>
    </div>
  );
};

export default SearchPage;

import React from "react";

const SearchBox = ({ text }) => {
  return (
    <div className="bg-white text-base font-normal w-full h-[60px] flex justify-center items-center rounded-md shadow-[0_2px_15px_rgba(0,0,0,0.08)]">
      {text}
    </div>
  );
};

export default SearchBox;

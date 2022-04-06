import React from "react";

const ProductTab = ({ toggleTab, toggleState }) => {
  return (
    <div>
      <div className="flex justify-between pt-[25px] items-center px-[30px] md:px-10">
        <p
          onClick={() => toggleTab(1)}
          className={`${
            toggleState === 1 ? "bg-bcolor" : "bg-[#C4C4C4]"
          } rounded-full text-xs font-bold w-[28px] h-[28px] flex justify-center items-center cursor-pointer`}
        >
          1
        </p>
        <hr className="border-black border-dashed w-[36%] md:w-[45%]" />
        <p
          onClick={() => toggleTab(2)}
          className={`${
            toggleState === 2 ? "bg-bcolor" : "bg-[#C4C4C4]"
          } rounded-full text-xs font-bold w-[28px] h-[28px] flex justify-center items-center cursor-pointer`}
        >
          2
        </p>
        <hr className="border-black border-dashed w-[36%] md:w-[45%]" />
        <p
          onClick={() => toggleTab(3)}
          className={`${
            toggleState === 3 ? "bg-bcolor" : "bg-[#C4C4C4]"
          } rounded-full text-xs font-bold w-[28px] h-[28px] flex justify-center items-center cursor-pointer`}
        >
          3
        </p>
      </div>
      <div className="flex justify-between text-xs font-bold items-center px-[24px] md:px-[35px] pt-[12px]">
        <p
          className={`${
            toggleState === 1 ? "text-black" : "text-[#575555]"
          } text-center`}
        >
          More
          <br /> details
        </p>
        <div className="flex items-center space-x-2">
          <p
            className={`${
              toggleState === 2 ? "text-black" : "text-[#575555]"
            } text-center`}
          >
            Upsells &<br /> Cross-sells
          </p>
          <div className="bg-[#FA497C] rounded w-[43px] h-[22px] flex items-center justify-center text-white">
            New
          </div>
        </div>

        <p
          className={`${
            toggleState === 3 ? "text-black" : "text-[#575555]"
          } text-center`}
        >
          Advanced <br /> Options
        </p>
      </div>
    </div>
  );
};

export default ProductTab;

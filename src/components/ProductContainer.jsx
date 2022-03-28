import React from "react";

const ProductContainer = ({ icon, name, desc }) => {
  return (
    <div className="bg-white rounded-[30px] px-[11px] lg:px-[25px] shadow-[0_8px_16px_rgba(0,0,0,0.1)]">
      <div className="flex justify-center pt-5">
        <img
          src={icon}
          alt="icon"
          className="w-[50px] h-[50px] lg:w-[83px] lg:h-[83px]"
        />
      </div>
      <h1 className="font-bold text-base text-center pt-[10px]">{name}</h1>
      <p className="font-medium text-xs text-center pb-[16px] pt-[5px]">
        {desc}
      </p>
    </div>
  );
};

export default ProductContainer;

import React from "react";
import book from "../assets/images/book.svg";

const ProductContainer = () => {
  return (
    <div className="bg-white rounded-[30px] px-[11px] shadow-[0_8px_16px_rgba(0,0,0,0.1)]">
      <div className="flex justify-center pt-5">
        <img src={book} alt="icon" className="w-[50px] h-[50px]" />
      </div>
      <h1 className="font-bold text-base text-center pt-[10px]">Ebook</h1>
      <p className="font-medium text-xs text-center pb-[16px] pt-[5px]">
        Sell any kind of physical product, from clothing to
      </p>
    </div>
  );
};

export default ProductContainer;

import React from "react";
import Add from "../assets/images/Add.svg";
import DropdownSelect from "../components/DropdownSelect";

const MyProducts = () => {
  return (
    <div className="font-Lato pt-[44px]">
      <h1 className="text-center font-bold text-[25px]">All Products</h1>
      <div className="flex justify-center pt-[16px]">
        <button className="flex justify-between text-base font-semibold items-center bg-bcolor w-[205px] h-[50px] rounded-lg px-7">
          <img src={Add} alt="addIcon" />
          ADD PRODUCTS
        </button>
      </div>
      <DropdownSelect />
    </div>
  );
};

export default MyProducts;

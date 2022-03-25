import React from "react";
import Add from "../assets/images/Add.svg";
import filter from "../assets/images/filter.svg";
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
      <div>
        <DropdownSelect name="All Type" width={"w-[94px]"} />
        <DropdownSelect name="All Category" width={"w-[130px]"} />
        <div className="bg-white rounded-md w-[35px] h-[30px] flex justify-center items-center">
          <img src={filter} alt="filetrIcon" className="w-[12px] h-[14.65px]" />
        </div>
      </div>
    </div>
  );
};

export default MyProducts;

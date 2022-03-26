import React from "react";
import Add from "../assets/images/Add.svg";
import filter from "../assets/images/filter.svg";
import exportIcon from "../assets/images/export.svg";
import DropdownSelect from "../components/DropdownSelect";
import ProductTable from "../components/ProductTable";

const MyProducts = () => {
  return (
    <div className="font-Lato pt-[44px] h-screen">
      <h1 className="text-center font-bold text-[25px] md:text-3xl">
        All Products
      </h1>
      <div className="flex justify-center pt-[16px] md:pt-8">
        <button className="flex justify-between text-base font-semibold items-center bg-bcolor w-[205px] h-[50px] rounded-lg px-7">
          <img src={Add} alt="addIcon" />
          ADD PRODUCTS
        </button>
      </div>
      <div className="md:flex md:justify-between px-10 items-center pt-10 md:pt-12">
        <div className="flex justify-around md:justify-center md:items-center md:space-x-5">
          <DropdownSelect name="All Type" width={"w-[94px]"} />
          <DropdownSelect name="All Category" width={"w-[130px]"} />
          <div className="bg-white rounded-md w-[35px] h-[30px] flex justify-center items-center">
            <img
              src={filter}
              alt="filetrIcon"
              className="w-[12px] h-[14.65px]"
            />
          </div>
        </div>
        <div className="bg-white rounded-lg w-[213px] h-[32px] flex justify-between px-5 items-center mt-[26.48px] md:mt-0 mx-3">
          <h1 className="font-bold text-base text-[#35363AB2]">
            Export Data in CSV
          </h1>
          <img
            src={exportIcon}
            alt="exportIcon"
            className="w-[14.17px] h-[16.67px]"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <ProductTable />
      </div>
    </div>
  );
};

export default MyProducts;

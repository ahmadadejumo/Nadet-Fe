import React from "react";
import Add from "../../assets/images/Add.svg";
import filter from "../../assets/images/filter.svg";
import exportIcon from "../../assets/images/export.svg";
import DropdownSelect from "../../components/DropdownSelect";
import ProductTable from "../../components/ProductTable";
import { productdata, productHeaders } from "../../components/ProductData";
import { CSVLink } from "react-csv";

const csvReport = {
  data: productdata,
  headers: productHeaders,
  filename: "My-Products.csv",
};

const typesOption = [
  "All types",
  "Digital product",
  "Ticket",
  "Subscription",
  "Service",
  "Course",
  "Stream online",
  "Membership course",
  "Flexible subscription",
];

const categoriesOption = [
  "Event tickets",
  "Magazines",
  "Arts",
  "Digital printables",
  "Caoching",
  "Training",
];

const MyProducts = () => {
  return (
    <div className="flex justify-center">
      <div className="font-Lato pt-[44px] h-screen lg:px-[115px]">
        <div className="lg:flex lg:justify-between lg:items-center lg:pt-[55px]">
          <h1 className="text-center font-bold text-[25px] md:text-3xl lg:text-[28px]">
            All Products
          </h1>
          <div className="flex justify-center pt-[16px] md:pt-8 lg:pt-0">
            <button className="flex justify-between text-base font-semibold items-center bg-bcolor w-[205px] h-[50px] rounded-lg px-7">
              <img src={Add} alt="addIcon" />
              ADD PRODUCTS
            </button>
          </div>
        </div>

        <div className="md:flex md:justify-between md:px-10 lg:px-0 md:items-center md:pt-12 lg:pt-[30px]">
          <div className="flex justify-around md:justify-center md:items-center md:space-x-5 pt-10 md:pt-0">
            <DropdownSelect
              name="All Type"
              width={"w-[94px]"}
              options={typesOption}
            />
            <DropdownSelect
              name="All Category"
              width={"w-[130px]"}
              options={categoriesOption}
            />
            <div className="bg-white rounded-md w-[35px] h-[30px] flex justify-center items-center">
              <img
                src={filter}
                alt="filetrIcon"
                className="w-[12px] h-[14.65px]"
              />
            </div>
          </div>
          <div className="bg-white rounded-lg w-[213px] h-[32px] flex justify-between px-5 items-center mt-[26.48px] md:mt-0 mx-3 lg:mx-0">
            <h1 className="font-bold text-base text-[#35363AB2]">
              <CSVLink {...csvReport}>Export Data in CSV</CSVLink>
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
    </div>
  );
};

export default MyProducts;

import React from "react";
import leftarrow from "../assets/images/leftarrow.svg";
import ProductDetails from "../components/ProductDetails";

const DigitalProducts = () => {
  return (
    <div className="font-Lato">
      <div className="flex space-x-4 items-center pt-[24px] px-5">
        <img src={leftarrow} alt="arrow" />
        <p className="text-lg font-normal">Back</p>
      </div>
      <h1 className="font-bold text-xl pt-[32px] px-5">Add Product</h1>
      <div>
        <ProductDetails />
      </div>
    </div>
  );
};

export default DigitalProducts;

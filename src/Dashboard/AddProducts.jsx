import React from "react";
import ProductContainer from "../components/ProductContainer";

const AddProducts = () => {
  return (
    <div className="font-Lato px-5 md:px-14 h-screen lg:px-[124px]">
      <h1 className="font-bold text-xl md:text-2xl pt-10 md:pt-14">
        Add Product
      </h1>
      <hr className="lg:hidden mt-[16px]" />
      <div className="pt-[24px] md:pt-10 grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-10 lg:gap-x-[64px] gap-y-[77px] pb-[46px]">
        <ProductContainer />
        <ProductContainer />
        <ProductContainer />
        <ProductContainer />
        <ProductContainer />
        <ProductContainer />
      </div>
    </div>
  );
};

export default AddProducts;

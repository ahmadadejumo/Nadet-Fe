import React from "react";
import ProductContainer from "../components/ProductContainer";

const AddProducts = () => {
  return (
    <div className="font-Lato px-5 h-screen">
      <h1 className="font-bold text-xl pt-10">Add Product</h1>
      <hr className="lg:hidden mt-[16px]" />
      <div className="pt-[24px] grid grid-cols-2 gap-5 pb-[46px]">
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

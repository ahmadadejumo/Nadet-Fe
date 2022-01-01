import React from "react";
import ProductItem from "../product-list/ProductItem";

const ProductList = () => {
  return (
    <div className="mt-16 mx-5">
      <h1 className="font-Lato font-bold text-center text-2xl tracking-normal leading-relaxed">
        Sell any kind of product, starting from digital courses down to ebooks
        etc.
      </h1>
      <ProductItem />
    </div>
  );
};

export default ProductList;

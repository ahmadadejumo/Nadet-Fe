import React from "react";
import download from "../assets/images/download.svg";

const ProductDetails = () => {
  return (
    <div className="bg-white font-Lato px-[24px]">
      <h1 className="pt-[24px] font-bold text-[20px]">Product details</h1>
      <p className="text-sm">Basic product details</p>
      <h1 className="text-xl font-medium pt-[32px]">
        Images<span className="text-[#FBBC15]">*</span>
      </h1>
      <p className="text-sm font-medium">
        Your image needs to be at least 300x300
      </p>
      <div className="mt-1 border border-dotted border-[#E8E8EB] w-full rounded flex pl-[18px] space-x-3">
        <img src={download} alt="icon" />
        <p className="text-sm font-normal">
          Drag or <span className="text-[#FBBC15]">upload</span> your product
          images
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;

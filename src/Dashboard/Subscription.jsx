import React, { useState } from "react";
import leftarrow from "../assets/images/leftarrow.svg";
import ProductDetails from "../components/ProductDetails";
import { useNavigate } from "react-router-dom";
import ProductTab from "../components/ProductTab";
import UpAndCrossSells from "../components/UpAndCrossSells";
import AdvancedOptions from "../components/AdvancedOptions";

const Subscription = () => {
  const navigate = useNavigate();
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="font-Lato lg:px-[150px]">
      <div
        onClick={() => navigate(-1)}
        className="flex space-x-4 items-center pt-[24px] px-5 cursor-pointer"
      >
        <img src={leftarrow} alt="arrow" />
        <p className="text-lg font-normal">Back</p>
      </div>
      <h1 className="font-bold text-xl pt-[32px] px-5">Add Product</h1>
      <div>
        <ProductDetails />
      </div>
      {/* Products information */}
      <div className="mt-[25px] bg-white mb-[80px] lg:mb-[157px]">
        {/* Product Detail Tab component */}
        <ProductTab toggleTab={toggleTab} toggleState={toggleState} />
        {toggleState === 2 && <UpAndCrossSells />}
        {toggleState === 3 && <AdvancedOptions />}
        <div className="mx-[24px] md:mx-[35px]">
          <button className="rounded h-[44px] w-full mt-[32px] bg-bcolor font-bold text-base mb-[34px]">
            Create Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscription;

import React, { useState } from "react";
import leftarrow from "../assets/images/leftarrow.svg";
import ProductDetails from "../components/ProductDetails";
import { useNavigate } from "react-router-dom";
import ProductTab from "../components/ProductTab";
import UpAndCrossSells from "../components/UpAndCrossSells";
import AdvancedOptions from "../components/AdvancedOptions";
import { Select } from "@chakra-ui/react";

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
        {toggleState === 1 && (
          <div className="px-[24px] md:px-[35px]">
            <p className="font-medium text-base pt-[32px]">Product Type</p>
            <div className="text-base font-normal border border-[#E8E8EB] h-[44px] w-full rounded pl-4 py-[10px] text-[#252525E3] mt-2">
              <p>Subscription</p>
            </div>
            <hr className="bg-[#E8E8EB99] mt-[24px]" />
            <div>
              <h1 className="text-[20px] font-medium pt-[24px]">
                Subscription Intervals (Tiers):
              </h1>
              <p className="pt-[16px] text-sm font-normal">
                Create the subscription interval options your customer can
                subscribe to
              </p>
              <div className="pt-[12px]">
                <Select placeholder="Select Interval" size="lg">
                  <option value="option3">Every week</option>
                  <option value="option1">Every month</option>
                  <option value="option2">Every quarter</option>
                  <option value="option3">Bi-annually(6 months)</option>
                  <option value="option3">Custom Interval</option>
                </Select>
              </div>
            </div>
          </div>
        )}
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

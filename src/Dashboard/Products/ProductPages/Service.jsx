import React, { useState } from "react";
import ProductDetails from "../../../components/ProductDetails";
import ProductTab from "../../../components/ProductTab";
import UpAndCrossSells from "../../../components/UpAndCrossSells";
import AdvancedOptions from "../../../components/AdvancedOptions";
import { Select } from "@chakra-ui/react";
import BackNavigation from "../../../components/BackNavigation";

const Service = () => {
  const [toggleState, setToggleState] = useState(1);
  const [redirectUrl, setRedirectUrl] = useState(false);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const showRedirectUrl = () => {
    setRedirectUrl(!redirectUrl);
  };

  return (
    <div className="font-Lato lg:px-[150px]">
      <BackNavigation />
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
              <p>Service</p>
            </div>
            <hr className="bg-[#E8E8EB99] mt-[24px]" />
            <h1 className="text-[20px] font-medium pt-[24px]">Categories</h1>
            <p className="text-[14px] font-normal pt-[12px]">
              Setting a category is not required to create a product, but if you
              want to segment your products on your store page by categories,
              you can create the product categories and select them accordingly.
            </p>
            <div className="pt-[12px]">
              <Select placeholder="Select category" size="lg">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </div>
            <div className="flex items-center space-x-[12px] mt-[25px]">
              <input
                type="checkbox"
                defaultChecked={!redirectUrl}
                onClick={showRedirectUrl}
                className="form-checkbox cursor-pointer text-bcolor w-[17px] h-[17px] border rounded"
              />
              <p className="text-[15px] font-medium">Redirect URL</p>
            </div>
            {!redirectUrl && (
              <input
                type="text"
                placeholder="https://"
                className="h-[44px] w-full pl-[16px] border rounded border-[#E8E8EB] mt-1 outline-none text-base"
              />
            )}
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

export default Service;

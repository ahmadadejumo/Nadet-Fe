import React, { useState } from "react";
import leftarrow from "../assets/images/leftarrow.svg";
import ProductDetails from "../components/ProductDetails";
import { useNavigate } from "react-router-dom";
import ProductTab from "../components/ProductTab";
import UpAndCrossSells from "../components/UpAndCrossSells";
import AdvancedOptions from "../components/AdvancedOptions";

const Tickets = () => {
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
              <p>Ticket</p>
            </div>
            <div className="flex space-x-[12px] mt-[10px]">
              <input
                type="checkbox"
                // defaultChecked={!preOrderDate}
                // onClick={showPreOrderDate}
                className="form-checkbox text-bcolor cursor-pointer w-[17px] h-[17px] border rounded mt-1"
              />
              <p className="text-[15px] font-medium">
                Selling physical products? You can set the delivery locations
                and prices on the delivery settings page.
              </p>
            </div>
            <div>
              <h1 className="text-xl font-medium pt-[32px]">
                Quantity Available<span className="text-[#FBBC15]">*</span>
              </h1>
              <input
                type="number"
                placeholder="0"
                className="h-[44px] w-[169px] pl-[16px] border rounded border-[#E8E8EB] mt-1 outline-none text-base"
              />
              <p className="text-sm pt-1">
                Set price to <span className="text-[#FBBC15]">0</span> for
                unlimited
              </p>
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

export default Tickets;

import React, { useState } from "react";

const UpAndCrossSells = () => {
  const [manageUpsells, setManageUpsells] = useState(false);
  const [manageCrosssells, setManageCrosssells] = useState(false);

  const handleUpSells = () => {
    setManageUpsells(!manageUpsells);
  };

  const handleCrossSells = () => {
    setManageCrosssells(!manageCrosssells);
  };

  return (
    <div className="px-[24px] md:px-[35px]">
      <div className="lg:flex lg:justify-center lg:space-x-16">
        <div className="lg:w-[500px]">
          <h1 className="text-[20px] font-medium pt-[32px]">
            Upsell (Order bump)
          </h1>
          <p className="text-sm font-normal pt-1">
            When a customer adds this product to cart, recommend up to 4
            products instantly they can also add to their cart. This is great
            for increasing sales.
          </p>
          <p
            onClick={handleUpSells}
            className="text-sm font-normal pt-1 text-[#1877F2] cursor-pointer"
          >
            Manage product upsells
          </p>
        </div>
        <div>
          <h1 className="text-[20px] font-medium pt-[32px]">
            Cross-sells (bought together)
          </h1>
          <p className="text-sm font-normal pt-1">
            On the product page, show up to 4 other products bought together
            with this product.
          </p>
          <p
            onClick={handleCrossSells}
            className="text-sm font-normal pt-1 text-[#1877F2] cursor-pointer"
          >
            Manage product cross-sells
          </p>
        </div>
      </div>
      {manageUpsells && (
        <div className="pt-10">
          <p className="text-xl font-medium">Upsell Products</p>
          <div className="flex justify-center items-center w-full rounded mt-[16px] h-[44px] border border-dashed border-[#DD2A2A]">
            <p className="text-base font-normal text-[#575555e3]">
              Requires a <span className="font-bold">pro</span> Plan
            </p>
          </div>
          <p className="text-sm font-normal pt-[16px]">
            Using upsell (order bump) requires a paid plan, click{" "}
            <span className="text-[#1877F2]">here</span> to subscribe.
          </p>
        </div>
      )}
      {manageCrosssells && (
        <div className="pt-10">
          <h1 className="text-xl font-medium">Cross-sell Products</h1>
          <p className="pt-[16px] text-xs font-normal">
            Enter the name of the product you want to add to this product's
            Cross-Sell section
          </p>
          <input
            type="text"
            placeholder="Search Product Name"
            className="border cursor-pointer w-full text-base font-medium rounded py-[10px] pl-4 outline-none mt-2"
          />
        </div>
      )}
    </div>
  );
};

export default UpAndCrossSells;

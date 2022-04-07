import React from "react";

const UpAndCrossSells = () => {
  return (
    <div className="pt-[32px] px-[24px] md:px-[35px]">
      <div>
        <h1 className="text-[20px] font-medium">Upsell (Order bump)</h1>
        <p className="text-sm font-normal pt-1">
          When a customer adds this product to cart, recommend up to 4 products
          instantly they can also add to their cart. This is great for
          increasing sales.
        </p>
        <p className="text-sm font-normal pt-1 text-[#1877F2] cursor-pointer">
          Manage product upsells
        </p>
      </div>
      <div>
        <h1 className="text-[20px] font-medium pt-[32px]">
          Cross-sells (bought together)
        </h1>
        <p className="text-sm font-normal pt-1">
          On the product page, show up to 4 other products bought together with
          this product.
        </p>
        <p className="text-sm font-normal pt-1 text-[#1877F2] cursor-pointer">
          Manage product cross-sells
        </p>
      </div>
    </div>
  );
};

export default UpAndCrossSells;

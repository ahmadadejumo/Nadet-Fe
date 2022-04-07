import React from "react";

const AdvancedOptions = () => {
  return (
    <div className="px-[24px] md:px-[35px] pt-[24px] md:pt-[47px] font-Lato">
      <h1 className="text-base font-bold md:text-[20px]">
        Checkout Button CTA (Call To Action)
      </h1>
      <input
        type="text"
        placeholder="Leave blank for default"
        className="h-[44px] w-full pl-[16px] border rounded border-[#E8E8EB] mt-1 outline-none text-base"
      />
      <p className="text-xs font-normal pt-1">
        Override the default label for the checkout button on the product page.
      </p>
    </div>
  );
};

export default AdvancedOptions;

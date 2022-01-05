import React from "react";
import macbook from "../../../assets/images/macbook.png";

const LpSection3 = () => {
  return (
    <div className="bg-hcolor ">
      <div className="md:flex md:flex-row-reverse mx-2 lg:mx-7 md:pb-10 lg:pb-5">
        <div className="mx-6 pt-16 md:pt-14">
          <img src={macbook} alt="macbook" className="md:pl-10" />
        </div>
        <div className="mx-5 md:pt-5 lg:pt-44">
          <h1 className="font-Lato font-bold text-2xl lg:text-4xl pt-16">
            Get more discovered, and sell worldwide
          </h1>
          <p className="font-Lato font-normal text-tcolor text-base leading-5 tracking-normal pt-5">
            Put your products in front of thousands of customers that search
            through our marketplace.
          </p>
          <div className="pt-5 pb-14">
            <button className="bg-bcolor font-Lato font-semibold h-12 w-56 rounded-lg tracking-normal">
              Visit the Marketplace
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LpSection3;

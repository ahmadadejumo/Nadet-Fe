import React from "react";
import macbook from "../../assets/images/macbook.png";

const Discover = () => {
  return (
    <div className="bg-hcolor">
      <div className="mx-5 pt-16">
        <img src={macbook} alt="macbook" />
      </div>
      <div className="pt-16 mx-5">
        <h1 className="font-Lato font-bold text-2xl">
          Get more discovered, and sell worldwide
        </h1>
      </div>
      <div className="pt-5 mx-5">
        <p className="font-Lato font-normal text-base leading-5 tracking-normal">
          Put your products in front of thousands of customers that search
          through our marketplace.
        </p>
      </div>
      <div className="pt-5 mx-5 pb-14">
        <button className="bg-bcolor font-Lato font-semibold h-12 w-56 rounded-lg tracking-normal">
          Visit the Marketplace
        </button>
      </div>
    </div>
  );
};

export default Discover;

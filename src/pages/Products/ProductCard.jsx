import React from "react";

const ProductCard = ({ image, header, text }) => {
  return (
    <div className="container rounded-lg w-full bg-[#FEF8E7] mb-10 pb-[35px]">
      <div className="flex justify-center mx-5">
        <img src={image} alt="img" className="pt-[33px]" />
      </div>
      <div className="mx-7">
        <h1 className="font-Lato text-2xl font-bold pt-[30px]">{header}</h1>
        <p className="font-Lato text-base font-normal text-tcolor pt-5">
          {text}
        </p>
        <button className="bg-bcolor font-Lato font-semibold rounded-lg h-[50px] w-[142px] mt-5">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

import React from "react";
import LpSection10Card from "./LpSection10Card";
import image7 from "../../../assets/images/image7.svg";
import image8 from "../../../assets/images/image8.svg";
import image9 from "../../../assets/images/image9.svg";

const LpSection10 = () => {
  return (
    <div>
      <h1 className="font-Lato font-bold text-2xl md:text-[26px] lg:text-4xl text-center pt-20 px-20 md:px-24 lg:px-60">
        Reads our latest news & details needed to help you scale
      </h1>
      <div className="mt-10 grid md:grid-cols-2 lg:flex lg:justify-center mx-5 md:mx-[30px] lg:mx-[70px] gap-5">
        <LpSection10Card
          image={image9}
          text={"How to Sell Ebooks Online Using Nadet.co"}
        />
        <LpSection10Card
          image={image8}
          text={"How to Get Started With Nadet!"}
        />
        <LpSection10Card
          image={image7}
          text={"How to Turn Your Instagram Followers to Customers"}
        />
      </div>
      <div className="flex justify-center mb-[80px] mb:mt-[120px]">
        <button className="bg-bcolor font-Lato font-semibold rounded-lg h-[50px] w-[199px] mt-10 mb-[80px]">
          Visit Our Blog
        </button>
      </div>
    </div>
  );
};

export default LpSection10;

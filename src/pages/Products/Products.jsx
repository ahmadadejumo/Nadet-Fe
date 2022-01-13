import React from "react";
import Navbar from "../../components/Navbar";
import rectangle2 from "../../assets/images/rectangle2.svg";

const Products = () => {
  return (
    <div>
      <div className="bg-[#FFF8E8]">
        <Navbar />
        <h1 className="font-Lato font-extrabold text-[28px] md:text-3xl text-center pt-[197px]">
          Products
        </h1>
        <p className="font-Lato text-xl font-medium text-center pt-10 pb-[52px] lg:pb-5">
          Everything you need in one place.
        </p>
        <div className="hidden lg:flex lg:justify-center lg:pb-[50px]">
          <button className="bg-bcolor font-Lato font-semibold rounded-lg h-[50px] w-[194px]">
            Start Selling Now!
          </button>
        </div>
      </div>
      <div className="mt-[80px] mb-[80px]">
        <h1 className="font-Lato text-2xl md:text-3xl lg:text-4xl font-bold text-center px-7 md:px-10 lg:px-60">
          As long as you have a digital skill related to our products, selling
          becomes easy for you.
        </h1>
        <div className="mt-[50px] md:flex lg:justify-center lg:space-x-36 mx-5">
          <div className="flex justify-center mx-5 md:mt-16 lg:mt-[30px]">
            <img src={rectangle2} alt="img" className="lg:w-[478px]" />
          </div>
          <div className="mt-[60px] mx-[23px] md:w-[350px] lg:w-[400px] lg:mt-36">
            <h1 className="font-Lato text-2xl lg:text-[26px] font-bold">
              Start selling your courses and memberships program in a grand
              style
            </h1>
            <p className="font-Lato text-tcolor text-base font-normal pt-5">
              The steps is pretty easy, record your program offline and upload
              it online, get a student and make money in return. <br></br>
              <br></br>Yes, we makes it easy for you to get this done in a grand
              style, as you have access to host unlimited video courses and
              files, as well as your membership programs along with the right
              marketing plan for you start reaching out to more success.
            </p>
            <button className="bg-bcolor font-Lato font-semibold rounded-lg h-[50px] w-[188px] mt-5">
              Sell Your Courses
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

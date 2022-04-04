import React, { useState } from "react";
import leftarrow from "../assets/images/leftarrow.svg";
import ProductDetails from "../components/ProductDetails";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DigitalProducts = () => {
  const [startDate, setStartDate] = useState(new Date());

  const navigate = useNavigate();
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="font-Lato lg:px-[150px]">
      <div
        onClick={() => navigate(-1)}
        className="flex space-x-4 items-center pt-[24px] px-5"
      >
        <img src={leftarrow} alt="arrow" />
        <p className="text-lg font-normal">Back</p>
      </div>
      <h1 className="font-bold text-xl pt-[32px] px-5">Add Product</h1>
      <div>
        <ProductDetails />
      </div>
      {/* Products information */}
      <div className="mt-[25px] bg-white">
        <div className="flex justify-between pt-[25px] items-center px-[30px]">
          <p
            onClick={() => toggleTab(1)}
            className={`${
              toggleState === 1 ? "bg-bcolor" : "bg-[#C4C4C4]"
            } rounded-full text-xs font-bold w-[28px] h-[28px] flex justify-center items-center`}
          >
            1
          </p>
          <hr className="border-black border-dashed w-[36%]" />
          <p
            onClick={() => toggleTab(2)}
            className={`${
              toggleState === 2 ? "bg-bcolor" : "bg-[#C4C4C4]"
            } rounded-full text-xs font-bold w-[28px] h-[28px] flex justify-center items-center`}
          >
            2
          </p>
          <hr className="border-black border-dashed w-[36%]" />
          <p
            onClick={() => toggleTab(3)}
            className={`${
              toggleState === 3 ? "bg-bcolor" : "bg-[#C4C4C4]"
            } rounded-full text-xs font-bold w-[28px] h-[28px] flex justify-center items-center`}
          >
            3
          </p>
        </div>
        <div className="flex justify-between text-xs font-bold items-center px-[24px] pt-[12px]">
          <p
            className={`${
              toggleState === 1 ? "text-black" : "text-[#575555]"
            } text-center`}
          >
            More
            <br /> details
          </p>
          <div className="flex items-center space-x-2">
            <p
              className={`${
                toggleState === 2 ? "text-black" : "text-[#575555]"
              } text-center`}
            >
              Upsells &<br /> Cross-sells
            </p>
            <div className="bg-[#FA497C] rounded w-[43px] h-[22px] flex items-center justify-center text-white">
              New
            </div>
          </div>

          <p
            className={`${
              toggleState === 3 ? "text-black" : "text-[#575555]"
            } text-center`}
          >
            Advanced <br /> Options
          </p>
        </div>
        <div className="px-[24px]">
          <p className="font-medium text-base pt-[32px]">Product Type</p>
          <div className="text-base font-normal border border-[#E8E8EB] h-[44px] w-full rounded pl-4 py-[12px] text-[#252525E3] mt-2">
            <p>Digital Product</p>
          </div>
          <div className="flex items-center space-x-[12px] mt-[10px]">
            <input
              type="checkbox"
              // defaultChecked={!showOriginalPrice}
              // onClick={handleOriginalPrice}
              className="form-checkbox text-bcolor w-[17px] h-[17px] border rounded"
            />
            <p className="text-[15px] font-medium">
              Show striked out original price
            </p>
          </div>
          <p>Pre-order release date</p>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
      </div>
    </div>
  );
};

export default DigitalProducts;

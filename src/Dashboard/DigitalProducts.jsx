import React, { useState } from "react";
import leftarrow from "../assets/images/leftarrow.svg";
import ProductDetails from "../components/ProductDetails";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Select } from "@chakra-ui/react";
import FileUploader from "../components/FileUploader";

const DigitalProducts = () => {
  const [startDate, setStartDate] = useState(new Date());

  const navigate = useNavigate();
  const [toggleState, setToggleState] = useState(1);
  const [toggleButtonState, setToggleButtonState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  const toggleButton = (index) => {
    setToggleButtonState(index);
  };

  const [preOrderDate, setPreOrderDate] = useState(false);

  const showPreOrderDate = () => {
    setPreOrderDate(!preOrderDate);
  };

  const [accessFile, setAccessFile] = useState(false);

  const showAccessFile = () => {
    setAccessFile(!accessFile);
  };
  const [redirectUrl, setRedirectUrl] = useState(false);

  const showRedirectUrl = () => {
    setRedirectUrl(!redirectUrl);
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
        <div className="flex justify-between pt-[25px] items-center px-[30px] md:px-10">
          <p
            onClick={() => toggleTab(1)}
            className={`${
              toggleState === 1 ? "bg-bcolor" : "bg-[#C4C4C4]"
            } rounded-full text-xs font-bold w-[28px] h-[28px] flex justify-center items-center cursor-pointer`}
          >
            1
          </p>
          <hr className="border-black border-dashed w-[36%] md:w-[45%]" />
          <p
            onClick={() => toggleTab(2)}
            className={`${
              toggleState === 2 ? "bg-bcolor" : "bg-[#C4C4C4]"
            } rounded-full text-xs font-bold w-[28px] h-[28px] flex justify-center items-center cursor-pointer`}
          >
            2
          </p>
          <hr className="border-black border-dashed w-[36%] md:w-[45%]" />
          <p
            onClick={() => toggleTab(3)}
            className={`${
              toggleState === 3 ? "bg-bcolor" : "bg-[#C4C4C4]"
            } rounded-full text-xs font-bold w-[28px] h-[28px] flex justify-center items-center cursor-pointer`}
          >
            3
          </p>
        </div>
        <div className="flex justify-between text-xs font-bold items-center px-[24px] md:px-[35px] pt-[12px]">
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
        <div className="px-[24px] md:px-[35px]">
          <p className="font-medium text-base pt-[32px]">Product Type</p>
          <div className="text-base font-normal border border-[#E8E8EB] h-[44px] w-full rounded pl-4 py-[10px] text-[#252525E3] mt-2">
            <p>Digital Product</p>
          </div>
          <div className="flex items-center space-x-[12px] mt-[10px]">
            <input
              type="checkbox"
              defaultChecked={!preOrderDate}
              onClick={showPreOrderDate}
              className="form-checkbox text-bcolor cursor-pointer w-[17px] h-[17px] border rounded"
            />
            <p className="text-[15px] font-medium">
              Show striked out original price
            </p>
          </div>
          {!preOrderDate && (
            <>
              <p className="text-base font-medium pt-4">
                Pre-order release date
              </p>
              <DatePicker
                className="border cursor-pointer w-full text-base font-medium rounded py-[10px] pl-4 outline-none mt-1"
                selected={startDate}
                showTimeSelect
                onChange={(date) => setStartDate(date)}
                dateFormat="MMMM d, yyyy h:mm aa"
              />
            </>
          )}
          <h1 className="text-[20px] font-medium pt-[33px]">Categories</h1>
          <p className="text-[14px] font-normal pt-[12px]">
            Setting a category is not required to create a product, but if you
            want to segment your products on your store page by categories, you
            can create the product categories and select them accordingly.
          </p>
          <div className="pt-[12px]">
            <Select placeholder="Select category" size="lg">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </div>
          <div className="flex items-center space-x-[12px] mt-[33px]">
            <input
              type="checkbox"
              defaultChecked={!accessFile}
              onClick={showAccessFile}
              className="form-checkbox cursor-pointer text-bcolor w-[17px] h-[17px] border rounded"
            />
            <p className="text-[15px] font-medium">
              Give buyer access to a file
            </p>
          </div>
          {!accessFile && (
            <>
              <div className="pt-[33px] flex space-x-5 lg:space-x-0 lg:justify-start">
                <button
                  onClick={() => toggleButton(1)}
                  className={`${
                    toggleButtonState === 1 ? "bg-[#F2F2F2]" : "bg-white"
                  } h-[34px] w-full lg:w-[220px] lg:h-[44px] lg:text-[20px] rounded-l border text-xs font-bold`}
                >
                  Downloadable file
                </button>
                <button
                  onClick={() => toggleButton(2)}
                  className={`${
                    toggleButtonState === 2 ? "bg-[#F2F2F2]" : "bg-white"
                  } h-[34px] w-full lg:w-[220px] lg:h-[44px] lg:text-[20px] rounded-r border text-xs font-bold`}
                >
                  Read online only (PDF)
                </button>
              </div>
              {toggleButtonState === 1 ? (
                <FileUploader
                  accepts={["image/*", ".zip"]}
                  maxFileSize={786432000}
                  fileSize={"750MB"}
                  note={
                    "To upload multiple files or a bundle, simply zip (compress) all the files to a .zip file. Ensure it's .zip and not .rar."
                  }
                />
              ) : (
                <FileUploader
                  accepts={[".pdf"]}
                  maxFileSize={10485760}
                  fileSize={"10MB"}
                />
              )}
            </>
          )}
          <div className="flex items-center space-x-[12px] mt-[33px]">
            <input
              type="checkbox"
              defaultChecked={!redirectUrl}
              onClick={showRedirectUrl}
              className="form-checkbox cursor-pointer text-bcolor w-[17px] h-[17px] border rounded"
            />
            <p className="text-[15px] font-medium">Redirect URL</p>
          </div>
          {!redirectUrl && (
            <input
              type="text"
              placeholder="https://"
              className="h-[44px] w-full pl-[16px] border rounded border-[#E8E8EB] mt-1 outline-none text-base"
            />
          )}
          <button className="rounded h-[44px] w-full mt-[32px] bg-bcolor font-bold text-base mb-[34px]">
            Create Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default DigitalProducts;

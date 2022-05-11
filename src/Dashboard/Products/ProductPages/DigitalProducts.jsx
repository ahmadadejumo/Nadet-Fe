import React, { useState } from "react";
import ProductDetails from "../../../components/ProductDetails";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Select } from "@chakra-ui/react";
import FileUploader from "../../../components/FileUploader";
import ProductTab from "../../../components/ProductTab";
import UpAndCrossSells from "../../../components/UpAndCrossSells";
import AdvancedOptions from "../../../components/AdvancedOptions";
import BackNavigation from "../../../components/BackNavigation";

const DigitalProducts = () => {
  const [productName, setProductName] = useState("");
  const [productDesc, setProductDesc] = useState("");
  const [productPrice, setProductPrice] = useState();
  const [originalPrice, setOriginalPrice] = useState();
  const [productCategory, setProductCategory] = useState("");
  const [files, setFiles] = useState([]);
  const [productUrl, setProductUrl] = useState("");
  const [images, setImages] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [toggleState, setToggleState] = useState(1);
  const [toggleButtonState, setToggleButtonState] = useState(1);
  const [preOrderDate, setPreOrderDate] = useState(false);
  const [accessFile, setAccessFile] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState(false);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  const toggleButton = (index) => {
    setToggleButtonState(index);
  };

  const showPreOrderDate = () => {
    setPreOrderDate(!preOrderDate);
  };

  const showAccessFile = () => {
    setAccessFile(!accessFile);
  };

  const showRedirectUrl = () => {
    setRedirectUrl(!redirectUrl);
  };

  return (
    <div className="font-Lato lg:px-[150px]">
      <div className="px-5 lg:px-0">
        <BackNavigation />
        <h1 className="font-bold text-xl pt-[32px]">Add Product</h1>
      </div>
      <ProductDetails
        images={images}
        setImages={setImages}
        productName={productName}
        setProductName={setProductName}
        productPrice={productPrice}
        setProductPrice={setProductPrice}
        originalPrice={originalPrice}
        setOriginalPrice={setOriginalPrice}
        productDesc={productDesc}
        setProductDesc={setProductDesc}
      />
      {/* Products information */}
      <div className="mt-[25px] bg-white mb-[80px] lg:mb-[157px]">
        {/* Product Detail Tab component */}
        <ProductTab toggleTab={toggleTab} toggleState={toggleState} />
        {toggleState === 1 && (
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
                This is a pre-order product
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
              want to segment your products on your store page by categories,
              you can create the product categories and select them accordingly.
            </p>
            <div className="pt-[12px]">
              <Select
                placeholder="Select category"
                size="lg"
                value={productCategory}
                onChange={(e) => setProductCategory(e.target.value)}
              >
                <option value="option1">Relationship</option>
                <option value="option2">Science</option>
                <option value="option3">Business & Finance</option>
                <option value="option3">Fiction</option>
                <option value="option3">Health & Living</option>
                <option value="option3">Memoir</option>
                <option value="option3">Educational</option>
                <option value="option3">Self help</option>
                <option value="option3">Religion & Belief</option>
                <option value="option3">Romance</option>
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
                      toggleButtonState === 1
                        ? "bg-[#F2F2F2]"
                        : "bg-white hover:bg-[#F2F2F2]"
                    } h-[34px] w-full lg:w-[220px] lg:h-[44px] lg:text-[20px] rounded-l border text-xs font-bold`}
                  >
                    Downloadable file
                  </button>
                  <button
                    onClick={() => toggleButton(2)}
                    className={`${
                      toggleButtonState === 2
                        ? "bg-[#F2F2F2]"
                        : "bg-white hover:bg-[#F2F2F2]"
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
                    files={files}
                    setFiles={setFiles}
                    note="To upload multiple files or a bundle, simply zip (compress) all the files to a .zip file. Ensure it's .zip and not .rar."
                  />
                ) : (
                  <FileUploader
                    accepts={[".pdf"]}
                    maxFileSize={10485760}
                    fileSize={"10MB"}
                    files={files}
                    setFiles={setFiles}
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
                value={productUrl}
                onChange={(e) => setProductUrl(e.target.value)}
              />
            )}
          </div>
        )}
        {toggleState === 2 && <UpAndCrossSells />}
        {toggleState === 3 && <AdvancedOptions />}
        <div className="mx-[24px] md:mx-[35px]">
          <button className="rounded h-[44px] w-full mt-[32px] bg-bcolor font-bold text-base mb-[34px]">
            Create Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default DigitalProducts;

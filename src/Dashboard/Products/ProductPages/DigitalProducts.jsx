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
import axios from "../../../Api/axios";

const CREATE_PRODUCT_URL = process.env.REACT_APP_CREATE_PRODUCT_URL;

const DigitalProducts = () => {
  const [productName, setProductName] = useState("");
  const [productDesc, setProductDesc] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [originalPrice, setOriginalPrice] = useState(0);
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
  const [showOriginalPrice, setShowOriginalPrice] = useState(false);
  // const [errMsg, setErrMsg] = useState("");

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", productName);
    data.append("description", productDesc);
    data.append("product_type", "digital");
    // data.append("cover_images", images);
    Object.keys(images).forEach((key) => {
      const image = images[key];
      data.append(
        "cover_images",
        new Blob([image], { type: image.file.type }),
        image.file.name || "image"
      );
    });
    data.append("category", productCategory);
    if (!accessFile) {
      Object.keys(files).forEach((key) => {
        const file = files[key];
        data.append(
          "content",
          new Blob([file], { type: file.type }),
          file.name || "file"
        );
      });
    }
    if (!redirectUrl) {
      data.append("content_url", productUrl);
    }
    data.append("price", productPrice);
    if (!showOriginalPrice) {
      data.append("original_price", originalPrice);
    }
    if (!preOrderDate) {
      data.append("preoder_date", preOrderDate);
    }
    try {
      await axios.post(CREATE_PRODUCT_URL, data, {
        headers: {
          "content-type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        withCredentials: false,
      });
    } catch (err) {
      if (!err.response) {
        console.log("error");
      }
    }
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
        showOriginalPrice={showOriginalPrice}
        setShowOriginalPrice={setShowOriginalPrice}
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
                <option value="relationship">Relationship</option>
                <option value="science">Science</option>
                <option value="business_&finance">Business & Finance</option>
                <option value="fiction">Fiction</option>
                <option value="health_&_living">Health & Living</option>
                <option value="memoir">Memoir</option>
                <option value="educational">Educational</option>
                <option value="self_help">Self help</option>
                <option value="religion_&_belief">Religion & Belief</option>
                <option value="romance">Romance</option>
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
                <div className="pt-[33px] flex space-x-5 lg:space-x-0 lg:justify-start pb-3">
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
                    accepts={["image/*", ".zip", ".pdf"]}
                    maxFileSize={786432000}
                    fileSize="750MB"
                    filess={files}
                    setFiles={setFiles}
                    fileSizeText="Maximum file size: "
                    note="To upload multiple files or a bundle, simply zip (compress) all the files to a .zip file. Ensure it's .zip and not .rar."
                  />
                ) : (
                  <FileUploader
                    accepts={[".pdf"]}
                    maxFileSize={10485760}
                    fileSize="10MB"
                    filess={files}
                    setFiles={setFiles}
                    fileSizeText="Maximum file size: "
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
          <button
            onClick={handleSubmit}
            className="rounded h-[44px] w-full mt-[32px] bg-bcolor font-bold text-base mb-[34px]"
          >
            Create Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default DigitalProducts;

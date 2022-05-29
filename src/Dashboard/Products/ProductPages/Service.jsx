import React, { useEffect, useRef, useState } from "react";
import ProductDetails from "../../../components/ProductDetails";
import ProductTab from "../../../components/ProductTab";
import UpAndCrossSells from "../../../components/UpAndCrossSells";
import AdvancedOptions from "../../../components/AdvancedOptions";
import { Select } from "@chakra-ui/react";
import BackNavigation from "../../../components/BackNavigation";
import { ExclamationCircleIcon } from "@heroicons/react/outline";
import axios from "../../../Api/axios";

const CREATE_PRODUCT_URL = process.env.REACT_APP_CREATE_PRODUCT_URL;

const Service = () => {
  const [productName, setProductName] = useState("");
  const [productDesc, setProductDesc] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [originalPrice, setOriginalPrice] = useState(0);
  const [productCategory, setProductCategory] = useState("");
  const [productUrl, setProductUrl] = useState("");
  const [images, setImages] = useState([]);
  const [toggleState, setToggleState] = useState(1);
  const [redirectUrl, setRedirectUrl] = useState(false);
  const [showOriginalPrice, setShowOriginalPrice] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const showRedirectUrl = () => {
    setRedirectUrl(!redirectUrl);
  };

  const errRef = useRef();
  useEffect(() => {
    setErrMsg("");
  }, [productName, productDesc, productCategory]);

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const data = new FormData();
    data.append("name", productName);
    data.append("description", productDesc);
    data.append("product_type", "service");
    Object.keys(images).forEach((key) => {
      const image = images[key];
      data.append(
        "cover_images",
        new Blob([image], { type: image.type }),
        image.name || "image"
      );
    });
    data.append("category", productCategory);
    if (!redirectUrl) {
      data.append("content_url", productUrl);
    }
    data.append("price", productPrice);
    if (!showOriginalPrice) {
      data.append("original_price", originalPrice);
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
      if (!err?.response) {
        setErrMsg("Check your internet and try again");
      } else if (!productName) {
        setErrMsg("Product name is empty");
      } else if (!productCategory) {
        setErrMsg("You need to select a category");
      } else if (!productDesc) {
        setErrMsg("You need to add a description");
      }
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }
  };

  return (
    <div className="font-Lato lg:px-[150px]">
      <div className="px-5 lg:px-0">
        <BackNavigation />
        <h1 className="font-bold text-xl pt-[32px]">Add Product</h1>
        <div
          className={`${
            errMsg ? "block" : "hidden"
          } rounded-xl border border-red-600 space-x-1 bg-red-200 mt-3 flex justify-center items-center py-5`}
          aria-live="assertive"
          ref={errRef}
        >
          <ExclamationCircleIcon className="h-[25px] w-[25px] text-red-700" />
          <p className="text-sm md:text-base">{errMsg}</p>
        </div>
      </div>
      <div>
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
      </div>
      {/* Products information */}
      <div className="mt-[25px] bg-white mb-[80px] lg:mb-[157px]">
        {/* Product Detail Tab component */}
        <ProductTab toggleTab={toggleTab} toggleState={toggleState} />
        {toggleState === 1 && (
          <div className="px-[24px] md:px-[35px]">
            <p className="font-medium text-base pt-[32px]">Product Type</p>
            <div className="text-base font-normal border border-[#E8E8EB] h-[44px] w-full rounded pl-4 py-[10px] text-[#252525E3] mt-2">
              <p>Service</p>
            </div>
            <hr className="bg-[#E8E8EB99] mt-[24px]" />
            <h1 className="text-[20px] font-medium pt-[24px]">Categories</h1>
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
                <option value="business_&_finance">Business & Finance</option>
                <option value="fiction">Fiction</option>
                <option value="health_&_living">Health & Living</option>
                <option value="memoir">Memoir</option>
                <option value="educational">Educational</option>
                <option value="self_help">Self help</option>
                <option value="religion_&_belief">Religion & Belief</option>
                <option value="romance">Romance</option>
              </Select>
            </div>
            <div className="flex items-center space-x-[12px] mt-[25px]">
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

export default Service;

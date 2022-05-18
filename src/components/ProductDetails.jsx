import React from "react";
import FileUploader from "./FileUploader";

const ProductDetails = ({
  images,
  setImages,
  productName,
  setProductName,
  productPrice,
  setProductPrice,
  originalPrice,
  setOriginalPrice,
  productDesc,
  setProductDesc,
  showOriginalPrice,
  setShowOriginalPrice,
}) => {
  const handleOriginalPrice = () => {
    setShowOriginalPrice(!showOriginalPrice);
  };

  return (
    <div className="bg-white font-Lato px-[24px] md:px-11 mt-[16px]">
      <h1 className="pt-[24px] font-bold text-[20px]">Product details</h1>
      <p className="text-sm">Basic product details</p>
      <h1 className="text-xl font-medium pt-[32px]">
        Images<span className="text-[#FBBC15]">*</span>
      </h1>
      <p className="text-sm font-medium">
        Your image needs to be at least 300x300
      </p>
      <FileUploader
        accepts={["image/*"]}
        maxFileSize={10485760}
        filess={images}
        setFiles={setImages}
      />
      <div>
        <h1 className="text-xl font-medium pt-[32px]">
          Product Name<span className="text-[#FBBC15]">*</span>
        </h1>
        <input
          type="text"
          placeholder="Product name"
          className="h-[44px] w-full pl-[16px] border rounded border-[#E8E8EB] mt-1 outline-none text-base"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
      </div>
      <div>
        <h1 className="text-xl font-medium pt-[32px]">
          Sale price (NGN)<span className="text-[#FBBC15]">*</span>
        </h1>
        <input
          type="number"
          placeholder="0"
          className="h-[44px] w-[169px] pl-[16px] border rounded border-[#E8E8EB] mt-1 outline-none text-base"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
        />
        <p className="text-sm pt-1">
          Set price to <span className="text-[#FBBC15]">0</span> for a free
          product
        </p>
      </div>
      <div className="flex items-center pt-[32px] space-x-[12px]">
        <input
          type="checkbox"
          defaultChecked={!showOriginalPrice}
          onClick={handleOriginalPrice}
          className="form-checkbox text-bcolor w-[17px] h-[17px] border rounded"
        />
        <p className="text-[15px] font-medium">
          Show striked out original price
        </p>
      </div>
      {!showOriginalPrice && (
        <div>
          <h1 className="text-xl font-medium pt-[18px]">
            Original price (NGN)<span className="text-[#FBBC15]">*</span>
          </h1>
          <input
            type="number"
            placeholder="0"
            className="h-[44px] w-[169px] pl-[16px] border rounded border-[#E8E8EB] mt-1 outline-none text-base"
            value={originalPrice}
            onChange={(e) => setOriginalPrice(e.target.value)}
          />
        </div>
      )}

      <div>
        <textarea
          placeholder="Insert text here"
          className="border h-[91px] w-full mt-[16px] mb-[34px] pl-[16px] pt-2 outline-none rounded"
          value={productDesc}
          onChange={(e) => setProductDesc(e.target.value)}
        />
      </div>
    </div>
  );
};

export default ProductDetails;

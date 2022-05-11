import React, { useState } from "react";
import download from "../assets/images/download.svg";
import ImageUploading from "react-images-uploading";
import X from "../assets/images/X.svg";

const ProductDetails = ({ images, setImages }) => {
  const [showOriginalPrice, setShowOriginalPrice] = useState(false);

  const handleOriginalPrice = () => {
    setShowOriginalPrice(!showOriginalPrice);
  };

  const maxNumber = 2;
  const maxFileSize = 5000000;
  const acceptType = ["jpg", "png"];
  const resolutionType = "absolute" | "less" | "more" | "ratio";

  const onChange = (imageList) => {
    // data for submit
    setImages(imageList);
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
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        acceptType={acceptType}
        maxFileSize={maxFileSize}
        resolutionType={resolutionType}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemove,
          isDragging,
          dragProps,
          errors,
        }) => (
          <div>
            <div
              onClick={onImageUpload}
              {...dragProps}
              className={`${
                isDragging ? "text-red-700" : null
              }mt-1 shadow-inner cursor-pointer shadow-[#E8E8EB] border pt-[12px] pb-[15px] border-dashed border-[#E8E8EB] w-full rounded flex pl-[18px] space-x-3`}
            >
              <img src={download} alt="icon" />
              <p className="text-sm font-normal opacity-60">
                Drag or <span className="text-[#FBBC15]">upload</span> your
                product images
              </p>
            </div>
            {imageList.map((image, index) => (
              <div
                key={index}
                className="w-full bg-gray-300 flex justify-between mb-1"
              >
                <img src={image["data_url"]} alt="" width="75" />
                <div>
                  <img
                    onClick={() => onImageRemove(index)}
                    src={X}
                    alt="icon"
                    className="w-[20px] h-[15px] mt-2 mr-2"
                  />
                </div>
              </div>
            ))}
            {errors && (
              <div className="text-red-600 font-medium text-sm pt-1">
                {errors.maxNumber && (
                  <span>Number of selected images exceed maxNumber</span>
                )}
                {errors.acceptType && (
                  <span>Your selected file type is not allow</span>
                )}
                {errors.maxFileSize && (
                  <span>Selected file size exceed maxFileSize</span>
                )}
                {errors.resolution && (
                  <span>
                    Selected file is not match your desired resolution
                  </span>
                )}
              </div>
            )}
          </div>
        )}
      </ImageUploading>
      <div>
        <h1 className="text-xl font-medium pt-[32px]">
          Product Name<span className="text-[#FBBC15]">*</span>
        </h1>
        <input
          type="text"
          placeholder="Product name"
          className="h-[44px] w-full pl-[16px] border rounded border-[#E8E8EB] mt-1 outline-none text-base"
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
          />
        </div>
      )}

      <div>
        <textarea
          placeholder="Insert text here"
          className="border h-[91px] w-full mt-[16px] mb-[34px] pl-[16px] pt-2 outline-none rounded"
        />
      </div>
    </div>
  );
};

export default ProductDetails;

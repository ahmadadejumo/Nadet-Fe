import React, { useState } from "react";
import download from "../assets/images/download.svg";
import ImageUploading from "react-images-uploading";
import X from "../assets/images/X.svg";

const ProductDetails = () => {
  const [images, setImages] = useState([]);
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <div className="bg-white font-Lato px-[24px]">
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
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          <div>
            <div
              onClick={onImageUpload}
              {...dragProps}
              className={`${
                isDragging ? "text-red-700" : null
              }mt-1 shadow-inner drop-shadow shadow-[#E8E8EB] border pt-[12px] pb-[15px] border-dashed border-[#E8E8EB] w-full rounded flex pl-[18px] space-x-3`}
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
                className="w-full bg-gray-300 flex justify-between"
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
          </div>
        )}
      </ImageUploading>
    </div>
  );
};

export default ProductDetails;

import React from "react";
import vector3 from "../../assets/images/vector3.png";

const ProductItem = ({ image, color, text, heading }) => {
  return (
    <div className="h-72 w-80 rounded-lg border border-[#EEEEF4] mt-10">
      <div className="rounded-t-full rounded-b-full bg-[#FBF3DE] h-16 w-16 mt-9 flex justify-center mx-32">
        <img src={vector3} alt="book" className="w-10 h-10 mt-3" />
      </div>
      <div>
        <h1 className="font-Lato font-bold text-xl text-center leading-none mt-5">
          Courses & Memberships
        </h1>
        <p className="font-Lato font-normal text-center leading-6 text-xl px-3 text-tcolor pt-4">
          We makes it easy for you to host unlimited videos and files of your
          courses and membership programs along with the right marketing plan
          for success.
        </p>
      </div>
    </div>
  );
};

export default ProductItem;

import React from "react";
import { RotatingLines } from "react-loader-spinner";

const CreateProductLoader = () => {
  return (
    <div className="fixed left-0 top-0 bottom-0 right-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center">
      <div className="md:hidden">
        <RotatingLines strokeColor="#FBBC15" height={65} width={65} />
      </div>
      <div className="hidden md:block">
        <RotatingLines strokeColor="#FBBC15" height={90} width={90} />
      </div>
    </div>
  );
};

export default CreateProductLoader;

import React, { useState } from "react";
import ProductDetails from "../../../components/ProductDetails";
import { useNavigate } from "react-router-dom";
import ProductTab from "../../../components/ProductTab";
import UpAndCrossSells from "../../../components/UpAndCrossSells";
import AdvancedOptions from "../../../components/AdvancedOptions";
import { Select } from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import BackNavigation from "../../../components/BackNavigation";

const Course = () => {
  const navigate = useNavigate();
  const [toggleState, setToggleState] = useState(1);
  const [redirectUrl, setRedirectUrl] = useState(false);
  const [preOrderDate, setPreOrderDate] = useState(false);
  const [startDate, setStartDate] = useState(new Date());

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const showRedirectUrl = () => {
    setRedirectUrl(!redirectUrl);
  };

  const showPreOrderDate = () => {
    setPreOrderDate(!preOrderDate);
  };

  return (
    <div className="font-Lato lg:px-[150px]">
      <div className="px-5 lg:px-0">
        <BackNavigation />
        <h1 className="font-bold text-xl pt-[32px]">Add Product</h1>
      </div>
      <div>
        <ProductDetails />
      </div>
      {/* Products information */}
      <div className="mt-[25px] bg-white mb-[80px] lg:mb-[157px]">
        {/* Product Detail Tab component */}
        <ProductTab toggleTab={toggleTab} toggleState={toggleState} />
        {toggleState === 1 && (
          <div className="px-[24px] md:px-[35px]">
            <p className="font-medium text-base pt-[32px]">Product Type</p>
            <div className="text-base font-normal border border-[#E8E8EB] h-[44px] w-full rounded pl-4 py-[10px] text-[#252525E3] mt-2">
              <p>Online Course</p>
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
            <hr className="bg-[#E8E8EB99] mt-[24px]" />
            <h1 className="text-[20px] font-medium pt-[24px]">Categories</h1>
            <p className="text-[14px] font-normal pt-[12px]">
              Setting a category is not required to create a product, but if you
              want to segment your products on your store page by categories,
              you can create the product categories and select them accordingly.
            </p>
            <div className="pt-[12px]">
              <Select placeholder="Select category" size="lg">
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
              />
            )}
          </div>
        )}
        {toggleState === 2 && <UpAndCrossSells />}
        {toggleState === 3 && <AdvancedOptions />}
        <div className="mx-[24px] md:mx-[35px]">
          <button
            onClick={() => navigate("/dashboard/add-course-content")}
            className="rounded h-[44px] w-full mt-[32px] bg-bcolor font-bold text-base mb-[34px]"
          >
            Create Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default Course;

import React, { useState } from "react";
import leftarrow from "../assets/images/leftarrow.svg";
import ProductDetails from "../components/ProductDetails";
import { useNavigate } from "react-router-dom";
import ProductTab from "../components/ProductTab";
import UpAndCrossSells from "../components/UpAndCrossSells";
import AdvancedOptions from "../components/AdvancedOptions";
import { Select } from "@chakra-ui/react";
import SubscriptionContainer from "../components/SubscriptionContainer";

const Subscription = () => {
  const navigate = useNavigate();
  const [toggleState, setToggleState] = useState(1);
  const [intervals, setIntervals] = useState("");
  const [amount, setAmount] = useState(0);
  const [timesCharged, setTimesCharged] = useState(0);
  const [dropdown, setDropdown] = useState();
  const [containerData, setContainerData] = useState([]);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const showDropdown = (index) => {
    if (dropdown === index) {
      return setDropdown(null);
    }
    setDropdown(index);
  };

  const handleSubscriptionTier = (e) => {
    e.preventDefault();
    setAmount("");
    setIntervals(null);
    setTimesCharged("");
    setContainerData([
      ...containerData,
      { amount: amount, intervals: intervals, timesCharged: timesCharged },
    ]);
    console.log(containerData);
  };

  const removeItem = (index) => {
    const newData = [...containerData];
    newData.splice(index, 1);
    setContainerData(newData);
  };

  return (
    <div className="font-Lato lg:px-[150px]">
      <div
        onClick={() => navigate(-1)}
        className="flex space-x-4 items-center pt-[24px] px-5 cursor-pointer"
      >
        <img src={leftarrow} alt="arrow" />
        <p className="text-lg font-normal">Back</p>
      </div>
      <h1 className="font-bold text-xl pt-[32px] px-5">Add Product</h1>
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
              <p>Subscription</p>
            </div>
            <hr className="bg-[#E8E8EB99] mt-[24px]" />
            <form onSubmit={handleSubscriptionTier}>
              <div className="border px-5 rounded-lg mt-5">
                <h1 className="text-[20px] font-medium pt-[24px]">
                  Subscription Intervals (Tiers):
                </h1>
                <p className="pt-[16px] text-sm font-normal">
                  Create the subscription interval options your customer can
                  subscribe to
                </p>
                <div className="pt-[12px]">
                  <Select
                    onChange={(e) => setIntervals(e.target.value)}
                    placeholder="Select intervals"
                    size="lg"
                  >
                    <option value="Weekly">Every week</option>
                    <option value="Monthly">Every month</option>
                    <option value="Quarterly">Every quarter</option>
                    <option value="Bi-annual">Bi-annually (6 months)</option>
                    <option value="Yearly">Every year</option>
                  </Select>
                </div>
                <h1 className="text-xl font-medium pt-[16px]">
                  Amount (NGN)<span className="text-[#FBBC15]">*</span>
                </h1>
                <input
                  type="number"
                  onChange={(e) => setAmount(e.target.value)}
                  value={amount}
                  placeholder="500"
                  className="h-[44px] w-[169px] pl-[16px] border rounded border-[#E8E8EB] mt-1 outline-none text-base"
                />
                <h1 className="text-sm font-medium pt-[16px]">
                  No of times the customer will be charged after their first
                  payment
                </h1>
                <input
                  type="number"
                  onChange={(e) => setTimesCharged(e.target.value)}
                  value={timesCharged}
                  placeholder="0"
                  className="h-[44px] w-full pl-[16px] border rounded border-[#E8E8EB] mt-1 outline-none text-base"
                />
                <p className="text-xs pb-5">
                  Set <span className="text-bcolor">0</span> if you want the
                  customer to be charge continuously until they decide to
                  cancel.
                </p>
              </div>
              {containerData.map(({ timesCharged, intervals }, index) => {
                return (
                  <SubscriptionContainer
                    key={index}
                    timesCharged={timesCharged}
                    intervals={intervals}
                    n={parseFloat(1) + parseFloat(timesCharged)}
                    showDropdown={() => showDropdown(index)}
                    dropdown={dropdown}
                    index={index}
                    removeItem={() => removeItem(index)}
                  />
                );
              })}

              <button
                disabled={!intervals || !amount}
                type="submit"
                className="bg-gray-500 w-[200px] h-[42px] text-white rounded mt-[16px] text-base font-bold"
              >
                Add Subscription Tier
              </button>
            </form>
            <h1 className="text-[20px] font-medium pt-[24px]">Categories</h1>
            <p className="text-[14px] font-normal pt-[12px]">
              Setting a category is not required to create a product, but if you
              want to segment your products on your store page by categories,
              you can create the product categories and select them accordingly.
            </p>
            <div className="pt-[12px]">
              <Select placeholder="Select category" size="lg">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </div>
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

export default Subscription;

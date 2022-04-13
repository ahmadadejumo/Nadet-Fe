import React from "react";

const SubscriptionContainer = ({
  timesCharged,
  intervals,
  n,
  dropdown,
  showDropdown,
  removeItem,
  index,
}) => {
  return (
    <div className="border rounded-lg mt-5">
      <div className="flex justify-between items-center px-3">
        <h1
          onClick={showDropdown}
          className="py-3 text-base font-semibold cursor-pointer"
        >
          {intervals} Subscription
        </h1>
        <p
          onClick={removeItem}
          className="text-xl font-bold text-red-500 cursor-pointer"
        >
          X
        </p>
      </div>
      <div
        className={`${
          dropdown === index ? "block" : "hidden"
        } border-t py-2 px-2 text-sm font-medium`}
      >
        {timesCharged === "" || timesCharged === 0 ? (
          <p>
            The customer will be charged every{" "}
            {intervals === "Weekly"
              ? "week"
              : intervals === "Monthly"
              ? "month"
              : intervals === "Quarterly"
              ? "quarter"
              : intervals === "Bi-annual"
              ? "6 months"
              : "year"}
            .
          </p>
        ) : (
          <p>
            This is a recurring payment subscription of {n} payments. After the
            first payment, the customer will be charged {timesCharged} more
            times (every{" "}
            {intervals === "Weekly"
              ? "week"
              : intervals === "Monthly"
              ? "month"
              : intervals === "Quarterly"
              ? "quarter"
              : intervals === "Bi-annual"
              ? "6 months"
              : "year"}
            ).
          </p>
        )}
      </div>
    </div>
  );
};

export default SubscriptionContainer;

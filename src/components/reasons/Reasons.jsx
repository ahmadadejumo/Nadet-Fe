import React from "react";
import ReasonItem from "./ReasonItem";
import vector5 from "../../assets/images/vector5.png";
import vector6 from "../../assets/images/vector6.png";
import vector7 from "../../assets/images/vector7.png";
import vector8 from "../../assets/images/vector8.png";

const Reasons = () => {
  return (
    <div>
      <div className="mx-7 text-center mt-20">
        <h1 className="font-Lato font-bold text-2xl md:text-[26px]">
          Why choose us over other platforms?
        </h1>
        <p className="font-Lato font-normal text-base text-tcolor pt-4 md:mx-24 tracking-normal lg:mx-96">
          Our users record the best success rates with their product sales. This
          is why over 1000+ use Nadet as their trusted marketplace for selling
          their digital products.
        </p>
      </div>
      <div className="mx-2 space-y-5 pt-10 flex flex-col items-center md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-6 md:mx-3 lg:mx-20 lg:grid-cols-3">
        <ReasonItem
          heading="Reviews & Ratings"
          text="Creators understand the customer's evaluation of their products and learn new ways to improve the product."
          image={vector5}
        />
        <ReasonItem
          heading="LIVE Sessions"
          text="Conduct workshops, go LIVE with your members, have a one-on-one interaction with your audience and do much more."
          image={vector6}
        />
        <ReasonItem
          heading="Product listing"
          text="Use our simple listing tools to add your product and the enhanced content feature to display product information to your customers."
          image={vector5}
        />
        <ReasonItem
          heading="Seemless Payments"
          text="We make it easy for you to collect payment from your customers and get paid instantly and directly into your account."
          image={vector7}
        />
        <ReasonItem
          heading="Content Security"
          text="We give all sellers access to tools needed to protect intellectual property and report violations of your contents."
          image={vector5}
        />
        <ReasonItem
          heading="Automated Follow-ups"
          text="Communicate with your customers with a more advanced and automated reminder emails to personalize thier experience."
          image={vector8}
        />
        <div className="pt-10 pb-20 md:pl-[275px] lg:pl-[450px]">
          <button className="bg-bcolor font-Lato font-semibold rounded-lg h-[50px] w-[199px] ">
            Get Started Today!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reasons;

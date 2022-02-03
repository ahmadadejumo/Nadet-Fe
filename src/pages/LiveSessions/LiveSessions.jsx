import React from "react";
import { Link } from "react-router-dom";
import rectangle29 from "../../assets/images/rectangle29.png";
import rectangle30 from "../../assets/images/rectangle30.png";
import rectangle31 from "../../assets/images/rectangle31.png";

const LiveSessions = () => {
  return (
    <div className="font-Lato">
      {/* Header section */}
      <div className="bg-[#FFF8E8]">
        <h1 className="text-center text-[28px] md:text-3xl lg:text-4xl font-extrabold pt-[129px] px-[40px]">
          Connect more with your audience
        </h1>
        <p className="pt-5 text-xl text-center font-normal text-tcolor px-5 md:px-28 lg:px-[265px]">
          Create and live stream your classes online. Nadet is the perfect tool
          for creating live classes. You can have more than 50 people in your
          class all at once.
        </p>
        <div className="flex justify-center pt-5 px-5">
          <button className="font-semibold text-base rounded-lg bg-bcolor h-[50px] w-[321px]">
            Connect With Your Audience Now
          </button>
        </div>
        <p className="pt-5 font-normal text-xl text-center px-10 pb-[53px]">
          Already have an account?{" "}
          <Link to={"/"} className="text-bcolor">
            Log in to your dashboard
          </Link>
        </p>
      </div>
      {/* Body section 1 */}
      <div className="md:flex md:justify-center md:items-center pt-[80px] md:pt-5 lg:space-x-28 lg:px-[70px]">
        <div className="flex justify-center px-5">
          <img
            src={rectangle29}
            alt="img"
            className="object-contain lg:w-[407px] lg:h-[508px]"
          />
        </div>
        <div className="pt-[60px] px-5 md:w-[1000px] lg:w-[505px]">
          <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">
            The easiest way to to create live classes
          </h1>
          <p className="pt-5 font-normal text-base text-tcolor pb-[80px]">
            Nadet provides you with a live streaming feature to create
            professional amazing live classes directly in your browser. Have a
            one-on-one interaction with your stidemrs, share your screen, record
            your lessons and much more. You can also stream directly to YouTube.
          </p>
        </div>
      </div>
      {/* Body section 2 */}
      <div className="bg-[#FEF8E7] px-5 flex flex-col-reverse md:flex-row md:justify-center md:items-center md:pb-10 md:px-10 md:space-x-5 lg:space-x-28">
        <div className="pt-[60px] md:pt-[90px] pb-[56px] lg:w-[467px]">
          <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">
            Recurring income
          </h1>
          <p className="pt-5 text-base text-tcolor">
            When someone purchase your live classes, you will earn up to 80% of
            both the initial sale and the recurring payments.
          </p>
        </div>
        <div className="flex justify-center pt-[50px]">
          <img
            src={rectangle30}
            alt="img"
            className="object-contain md:w-[1000px] lg:w-[464px] lg:h-[250px]"
          />
        </div>
      </div>
      {/* Body section 3 */}
      <div className="pt-[80px] md:pt-[30px] lg:py-[120px] px-5 md:px-10 md:space-x- lg:space-x-32 md:justify-center md:items-center md:flex">
        <div className="flex justify-center">
          <img
            src={rectangle31}
            alt="img"
            className="object-contain lg:w-[518px] lg:h-[306px]"
          />
        </div>
        <div className="pt-[60px] md:w-[1400px] lg:w-[467px]">
          <h1 className="font-bold text-2xl md:text-3xl lg:text-3xl">
            Content creator dashboard
          </h1>
          <p className="font-normal text-base text-tcolor pt-5 pb-[80px]">
            We will provide you with a special content creator dashboard where
            you can monitor your uploaded products, earnings and your total
            sales. You'll also receive special marketing materials that you can
            use to successfully promote and sell your products.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LiveSessions;

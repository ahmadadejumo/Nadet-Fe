import React from "react";
import { Link } from "react-router-dom";
import rectangle29 from "../../assets/images/rectangle29.png";

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
      <div className="md:flex md:justify-center md:items-center pt-[80px] md:pt-5 lg:space-x-28 lg:px-[80px]">
        <div className="flex justify-center px-5">
          <img
            src={rectangle29}
            alt="img"
            className="object-contain lg:w-[407px] lg:h-[508px]"
          />
        </div>
        <div className="pt-[60px] px-5 md:w-[1000px] lg:w-[505px]">
          <h1 className="font-bold text-2xl">
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
    </div>
  );
};

export default LiveSessions;

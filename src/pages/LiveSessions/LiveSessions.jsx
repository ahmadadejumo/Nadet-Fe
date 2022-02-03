import React from "react";
import { Link } from "react-router-dom";

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
    </div>
  );
};

export default LiveSessions;

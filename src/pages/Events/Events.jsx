import React from "react";
import rectangle17 from "../../assets/images/rectangle17.png";
import rectangle18 from "../../assets/images/rectangle18.png";
import rectangle19 from "../../assets/images/rectangle19.png";

const Events = () => {
  return (
    <div className="font-Lato">
      {/* Header section */}
      <div className="bg-[#FFF8E8]">
        <h1 className="font-extrabold text-[28px] text-center pt-[129px] px-5">
          Find conferences, workshop and summits that is useful for your
          industry
        </h1>
        <div className="flex justify-center pt-5 pb-[34px]">
          <button className="h-[50px] w-[158px] bg-bcolor rounded-lg font-semibold text-base">
            Sign Up Now!
          </button>
        </div>
      </div>
      {/* Body Section */}
      <div className="pt-[80px]">
        <div className="flex justify-center space-x-2 px-5">
          <div>
            <img src={rectangle17} alt="img" className="object-contain" />
          </div>
          <div>
            <img src={rectangle18} alt="img" className="object-contain" />
          </div>
          <div>
            <img src={rectangle19} alt="img" className="object-contain" />
          </div>
        </div>
        <h1 className="text-2xl font-bold text-center pt-[80px]">
          Upcoming Events
        </h1>
        <p className="font-normal text-tcolor text-xl text-center px-5 pt-5">
          Welcome to our event lists. Our meetup series typically includes
          conversation with leaders, thought-provoking discussions and
          networking opportunities.
        </p>
      </div>
    </div>
  );
};

export default Events;

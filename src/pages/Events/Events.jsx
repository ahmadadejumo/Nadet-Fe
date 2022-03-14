import React from "react";
import rectangle17 from "../../assets/images/rectangle17.png";
import rectangle18 from "../../assets/images/rectangle18.png";
import rectangle19 from "../../assets/images/rectangle19.png";
import rectangle20 from "../../assets/images/rectangle20.png";
import rectangle21 from "../../assets/images/rectangle21.png";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";

const Events = () => {
  return (
    <div className="font-Lato">
      {/* Header section */}
      <div className="bg-[#FFF8E8]">
        <Navbar />
        <h1 className="font-extrabold text-[28px] md:text-3xl lg:text-4xl text-center pt-[129px] px-5 md:px-28 lg:px-56">
          Find conferences, workshop and summits that is useful for your
          industry
        </h1>
        <Link to={"/signup"} className="flex justify-center pt-5 pb-[34px]">
          <button className="h-[50px] w-[158px] bg-bcolor rounded-lg font-semibold text-base">
            Sign Up Now!
          </button>
        </Link>
      </div>
      {/* Body Section */}
      <div className="pt-[80px]">
        <div className="flex justify-center items-center space-x-2 md:space-x-5 lg:space-x-7 px-5 md:px-16">
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
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center pt-[80px]">
          Upcoming Events
        </h1>
        <p className="font-normal text-tcolor text-xl text-center px-5 md:px-16 lg:mx-64 pt-5">
          Welcome to our event lists. Our meetup series typically includes
          conversation with leaders, thought-provoking discussions and
          networking opportunities.
        </p>
        <div className="md:flex md:justify-center lg:px-[140px]">
          <div className="flex justify-center pt-[50px] px-5 md:pt-1 lg:pr-16">
            <img src={rectangle20} alt="img" className="object-contain" />
          </div>
          <div className="px-5 pt-[60px] md:w-[1000px] lg:w-[900px]">
            <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">
              Online marketplace conference
            </h1>
            <p className="text-base text-tcolor font-normal pt-5">
              We're thrilled to bring to you a brand new event series featuring
              experts from different industries. Join us for our official
              kickoff event at 11:00AM EST on 20th March 2021. Learn how to
              leverage on online marketplace to build a more profitable
              business. Our topic conference is useful for everyone who is
              operating an online business and those interested in gaining
              insights from an array of content and open sessions. The panel
              discussion will be followed by a Q & A.
            </p>
            <button className="h-[50px] w-[132px] rounded-lg bg-bcolor font-semibold text-base mt-5 mb-[50px]">
              Join Event
            </button>
          </div>
        </div>
        <div className="bg-[#FEF8E7] px-5 md:flex md:justify-center md:flex-row-reverse md:space-x-5 lg:px-[140px] mb-[80px] lg:mb-[120px]">
          <div className="flex justify-center pt-10 md:pt-0 lg:pl-16 md:pl-5">
            <img src={rectangle21} alt="img" className="object-contain" />
          </div>
          <div className="pt-[60px] md:w-[1000px]">
            <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">
              Nadet Users Walkthrough
            </h1>
            <p className="pt-5 text-base font-normal text-tcolor">
              We're thrilled to bring to you a brand new event series featuring
              experts from different industries. Join us for our official
              kickoff event at 11:00AM EST on 20th March 2021. Learn how to
              leverage on online marketplace to build a more profitable
              business. Our topic conference is useful for everyone who is
              operating an online business and those interested in gaining
              insights from an array of content and open sessions. The panel
              discussion will be followed by a Q & A.
            </p>
            <button className="font-semibold text-base bg-bcolor h-[50px] w-[132px] rounded-lg mt-5 mb-[49px]">
              Join Event
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Events;

import React from "react";
import Navbar from "../../components/Navbar";
import woman2 from "../../assets/images/woman2.png";
import HowItWorksCard from "./HowItWorksCard";
import LpSection2Item from "../LandingPage/LP-section2/LpSection2Item";
import vector1 from "../../assets/images/vector1.svg";
import vector9 from "../../assets/images/vector9.svg";
import vector10 from "../../assets/images/vector10.svg";
import vector11 from "../../assets/images/vector11.svg";
import visalogo from "../../assets/images/VisaLogo.svg";
import paypal from "../../assets/images/PayPal.svg";
import AmericanExpress from "../../assets/images/AmericanExpress.svg";
import mclogo from "../../assets/images/mclogo.svg";
import rectangle1 from "../../assets/images/rectangle1.png";
import YelloCard from "../../components/YellowCard";
import Footer from "../../components/Footer";

const HowItWorks = () => {
  return (
    <div>
      <div className="bg-[#FFF8E8]">
        <Navbar />
        <h1 className="font-Lato font-extrabold text-[28px] pt-[197px] md:pt-[168px] pb-[70px] md:pb-[133px] text-center">
          How It Works
        </h1>
      </div>
      <h1 className="font-Lato font-bold text-2xl pt-[80px] text-center px-5 md:text-3xl lg:text-4xl lg:mx-44">
        It takes less than 5 minutes in 3 steps to get started in selling your
        digital products and services for free.
      </h1>
      <div className="md:flex md:flex-row-reverse md:justify-evenly md:mx-2">
        <div className="flex justify-center mt-[50px] mx-5">
          <img
            src={woman2}
            alt="woman"
            className="lg:w-[450px] md:w-[350px] object-contain"
          />
        </div>
        <div className="mt-[60px] md:w-[450px] lg:w-[600px]">
          <HowItWorksCard
            heading="Sign up and set up your account and bank details"
            text="Sign up for your free account on Nadet, and login to set up for selling profile and verify your bank details."
          />
          <HowItWorksCard
            heading="Upload your product/content(s)"
            text="After account setup, you can easily upload your product/content(s) on Nadet, set your pricing in different currencies, input your product details and get your product link."
          />
          <HowItWorksCard
            heading="Start earning by sharing the link with your customers"
            text="Share your product link to your friends and targeted customers on all social networks to start receiving massive sales and instant payment with no hassle."
          />
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <button className="bg-bcolor font-Lato font-semibold rounded-lg h-[50px] w-[199px] ">
          Get Started Today!
        </button>
      </div>
      <div className="">
        <h1 className="font-Lato pt-[80px] font-bold text-2xl text-center md:text-3xl lg:text-4xl px-10 lg:px-[290px]">
          You can sell any kind of digital product with Nadet.
        </h1>
        <div className="md:grid md:grid-cols-2 md:gap-x-5 lg:flex mx-10 lg:pt-[30px]">
          <LpSection2Item
            image={vector1}
            text="We makes it easy for you to host unlimited videos and files of your courses and membership programs along with the right marketing plan for success."
            color={`bg-[#FBF3DE]`}
            padding={`px-10`}
            heading="Courses & Memberships"
          />
          <LpSection2Item
            image={vector9}
            text="Start selling tickets for all kinds of events and access to masterclasses, programs, workshops, training, webinars, and even much more."
            color={`bg-[#FBF3DE]`}
            padding={`px-8`}
            heading="Events & Trainings"
          />
          <LpSection2Item
            image={vector10}
            text="We have developed the best platform for you to sell your programs and ebooks for both downloadable and non-downloadable in any format."
            color={`bg-[#FBF3DE]`}
            padding={`px-8`}
            heading="Programs & Ebooks"
          />
          <LpSection2Item
            image={vector11}
            text="Host and sell any kind of program subscription or service, from coaching services to consultations to counseling sessions to design services and more."
            color={`bg-[#FBF3DE]`}
            padding={`px-9`}
            heading="Subscription & Services"
          />
        </div>
        <div className="flex justify-center mt-10">
          <button className="bg-bcolor font-Lato font-semibold rounded-lg h-[50px] w-[204px] ">
            Start Selling Today!
          </button>
        </div>
      </div>
      <div className="lg:mx-[140px]">
        <div className="rounded-lg bg-[#FFF8E8] w-full">
          <div className="mx-10 md:mx-20 lg:mx-36 md: mt-[80px]">
            <h1 className="font-Lato font-bold text-2xl md:text-3xl lg:text-4xl text-center pt-[50px]">
              Easy payment system is made available for you
            </h1>
            <p className="font-Lato font-normal text-base text-tcolor text-center pt-[20px]">
              We've integrated multiple payment gateways in place to ensure you
              can receive payments from anywhere in the world and you don’t have
              to worry again. Once you receive a payment, we pay you based on
              the settlement sechedule.
            </p>
            <div className="flex justify-center mt-[25px] items-center space-x-3 pb-[50px]">
              <img src={visalogo} alt="logo" className="h-10 w-10 md:w-16" />
              <img src={paypal} alt="logo" className="h-10 w-14 md:w-20" />
              <img
                src={AmericanExpress}
                alt="logo"
                className="h-10 w-7 md:w-12"
              />
              <img src={mclogo} alt="logo" className="h-12 w-24 md:w-32" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[80px] mx-5 md:flex lg:justify-center md:items-center md:space-x-10 lg:space-x-20">
        <div className="md:pt-16">
          <img
            src={rectangle1}
            alt="Logo"
            className="lg:w-[464px] md:w-[450px]"
          />
        </div>
        <div className="md:w-[450px]">
          <h1 className="font-Lato font-bold text-2xl md:text-3xl lg:text-4xl pt-[60px]">
            Our payouts is swift
          </h1>
          <p className="font-Lato text-tcolor text-base font-normal pt-5">
            Nadet supports up-to six currencies worldwide to make payouts to
            your bank account/wallet easy and swift for all users across the
            globe. Payment are made based on the currency of the sale and you
            get to sell in any currency and have the amount converted and
            credited in your country's default currency.
          </p>
        </div>
      </div>
      <div className="mt-[136px] md:mt-[120px] mb-[80px] md:mb-[120px]">
        <YelloCard />
      </div>
      <Footer />
    </div>
  );
};

export default HowItWorks;

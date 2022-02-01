import React from "react";
import woman2 from "../../assets/images/woman2.png";
import HowItWorksCard from "./HowItWorksCard";
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
import Container from "./Container";

const HowItWorks = () => {
  return (
    <div>
      <div className="bg-[#FFF8E8]">
        <h1 className="font-Lato font-extrabold text-[28px] pt-[197px] md:pt-[168px] pb-[70px] md:pb-[133px] text-center">
          How It Works
        </h1>
      </div>
      <h1 className="font-Lato font-bold text-2xl pt-[80px] text-center px-5 md:text-3xl lg:text-4xl lg:mx-44">
        It takes less than 5 minutes in 3 steps to get started in selling your
        digital products and services for free.
      </h1>
      <div className="flex flex-col-reverse md:flex-row md:justify-center md:items-center md:space-x-10 lg:space-x-20 mx-5">
        <div className="mt-[60px] md:w-[450px] lg:w-[524px] grid gap-y-[50px] md:gap-y-[25px]">
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
        <div className="flex justify-center mt-[50px]">
          <img
            src={woman2}
            alt="woman"
            className="lg:w-[478px] lg:h-[597px] md:w-[350px] object-contain"
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
        <div className="grid gap-y-5 md:grid-cols-2 md:gap-x-5 lg:flex mx-[53px] md:mx-10 pt-10 lg:pt-[30px] lg:mx-[70px]">
          <Container
            image={vector1}
            text="We makes it easy for you to host unlimited videos and files of your courses and membership programs along with the right marketing plan for success."
            color={`bg-[#FBF3DE]`}
            padding={`px-10`}
            heading="Courses & Memberships"
          />
          <Container
            image={vector9}
            text="Start selling tickets for all kinds of events and access to masterclasses, programs, workshops, training, webinars, and even much more."
            color={`bg-[#FBF3DE]`}
            padding={`px-8`}
            heading="Events & Trainings"
          />
          <Container
            image={vector10}
            text="We have developed the best platform for you to sell your programs and ebooks for both downloadable and non-downloadable in any format."
            color={`bg-[#FBF3DE]`}
            padding={`px-8`}
            heading="Programs & Ebooks"
          />
          <Container
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
              <img
                src={visalogo}
                alt="logo"
                className="h-10 w-10 md:w-16 object-contain"
              />
              <img
                src={paypal}
                alt="logo"
                className="h-10 w-14 md:w-20 object-contain"
              />
              <img
                src={AmericanExpress}
                alt="logo"
                className="h-10 w-7 md:w-12 object-contain"
              />
              <img
                src={mclogo}
                alt="logo"
                className="h-12 w-24 md:w-32 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[80px] mx-5 md:flex lg:justify-center md:items-center md:space-x-10 lg:space-x-[80px] lg:mx-[140px]">
        <div className="md:pt-16">
          <img
            src={rectangle1}
            alt="Logo"
            className="object-contain md:w-[410px] md:h-[200px] lg:w-[464px] lg:h-[250px]"
          />
        </div>
        <div className="md:w-[390px] lg:w-[519px]">
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
    </div>
  );
};

export default HowItWorks;

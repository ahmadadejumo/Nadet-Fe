import React, { useState } from "react";
import image10 from "../../assets/images/image10.png";
import dropdown from "../../assets/images/dropdown.svg";
import PriceCard from "./PriceCard";
import vector15 from "../../assets/images/vector15.svg";
import {
  starterPlanList,
  basicPlanList,
  proPlanList,
  premiumPlanList,
} from "./Data";
import FaqsQusetionCard from "../FAQs/FaqsQuestionCard";
import YellowCard from "../../components/YellowCard";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Tabs, TabList, Tab } from "@chakra-ui/react";

const Pricing = () => {
  const includedInAllPlans = [
    { key: 1, title: "Discount feature" },
    { key: 2, title: "Unlimited student" },
    { key: 3, title: "Sales page" },
    { key: 4, title: "Integrated payment processing" },
    { key: 5, title: "No fees on free products" },
    { key: 6, title: "Payment processing fee" },
    { key: 7, title: "Multicurrency feature" },
    { key: 8, title: "Instant payouts" },
    { key: 9, title: "24/7 Email support" },
  ];

  const questionAndAwnserList = [
    {
      key: 1,
      question: "Who can use Nadet?",
      awnser:
        "Content creators like Authors, Educators, Online Tutors, Coaches, Instructors, Speakers, Bloggers, Youtubers, Consultants, Podcasters and Creatives.",
    },
    {
      key: 2,
      question:
        "How do i get paid as a creator using Nadet to sell my products?",
      awnser:
        "Once a customer purchase any of your product you receive your payout to your Bank account after 24 hours or any other method you have chosen for your payout",
    },
    {
      key: 3,
      question: "How do i know when any of my products is purchased?",
      awnser:
        "Once a customer purchases any of your products, you receive an email notification and it’s added to your balance instantly in your dashboard.",
    },
    {
      key: 4,
      question: "How long will it take to receive my payout?",
      awnser:
        "Nadet content creators receive their payouts to their account instantly a purchase is made or not more than 48hrs for delayed transactions.",
    },
    {
      key: 5,
      question: "Can international customers also purchase my products?",
      awnser:
        "Yes, customers anywhere in the world can buy your products. Our payment system support both local and international cards.",
    },
    {
      key: 6,
      question: "What payment methods are supported for receiving payouts?",
      awnser:
        "Once you’ve clicked on the course you want to buy, it directs you to the checkout page where you get to select any of the payment method available. We support Bank transfers, Credit or Debit cards like Mastercard or Visa, Paystack transfers etc.",
    },
  ];

  const navigate = useNavigate();
  return (
    <div>
      {/* Header section */}
      <div className="bg-[#FFF8E8]">
        <Navbar />
        <h1 className="font-Lato font-extrabold text-[28px] md:text-3xl lg:text-4xl text-center pt-[197px] mx-2">
          Our pricing is simple and fair
        </h1>
        <p className="font-Lato font-semibold text-lg text-center pt-5 mx-10 pb-[51px]">
          It’s completely free to get started.{" "}
          <p className="text-bcolor">Save 10% with annual billing</p>
        </p>
      </div>
      {/* Body section */}
      <div className="md:flex md:justify-center md:items-center">
        <div className="flex justify-center mt-[50px]">
          <div className="container border border-bcolor w-[150px] h-[50px] flex justify-evenly rounded-lg items-center">
            <img
              src={image10}
              alt="img"
              className="object-contain h-[26px] w-[44px]"
            />
            <div className="border-l h-[26px] border-bcolor" />
            <p>USD</p>
            <img src={dropdown} alt="img" className="h-[7px] w-[11px]" />
          </div>
        </div>
        <div className="mx-5 mt-5 md:mt-12">
          <Tabs
            colorScheme="yellow"
            variant="unstyled"
            className="border border-bcolor rounded-lg h-[50px] md:w-[360px]"
          >
            <TabList>
              <Tab
                _selected={{ color: "black", bg: "#FBBC15" }}
                className="h-[50px] w-full rounded-lg"
              >
                Pay monthly
              </Tab>
              <Tab
                _selected={{ color: "black", bg: "#FBBC15" }}
                className="h-[50px] w-full rounded-lg"
              >
                Pay yearly (10% off)
              </Tab>
            </TabList>
          </Tabs>
        </div>
      </div>
      <div className="pt-[50px] mx-5 grid md:grid-cols-2 gap-y-5 md:gap-x-[15px] lg:grid-cols-4 md:mx-10 lg:mx-[30px]">
        <PriceCard
          header="Starter plan"
          text="Share what you know. Get started on Nadet with our free set of features"
          display="hidden"
          subHeading="FREE"
          firstPlan="Upload up to 5 courses (unlimited videos)"
          listPlan={starterPlanList.map(({ id, title }) => (
            <div className="flex pt-[25px] items-center space-x-3">
              <img src={vector15} alt="img" />
              <h1 key={id} className="font-Lato text-sm font-normal">
                {title}
              </h1>
            </div>
          ))}
        />
        <PriceCard
          header="Basic Plan"
          text="Grow your business. Upgrade from the free plan with a more advanced feature. Includes everything in Starter Plan"
          subHeading="$29 {10% off for Annual}"
          firstPlan="Upload up to 20 courses (unlimited videos)"
          listPlan={basicPlanList.map(({ id, title }) => (
            <div className="flex pt-[25px] items-center space-x-3">
              <img src={vector15} alt="img" />
              <h1 key={id}>{title}</h1>
            </div>
          ))}
        />
        <PriceCard
          header="Pro Plan"
          text="Build a profitable business with our best plan. Includes everything in Starter & Basic Plan"
          subHeading="$49 {10% off for Annual}"
          display={"hidden"}
          firstPlan="Upload up to 30 courses (unlimited videos)"
          listPlan={proPlanList.map(({ id, title }) => (
            <div className="flex pt-[25px] items-center space-x-3">
              <img src={vector15} alt="img" />
              <h1 key={id}>{title}</h1>
            </div>
          ))}
        />
        <PriceCard
          header="Premium Plan"
          text="Scale your business with our most powerful set of features Includes everything in Starter, Basic & Pro Plan"
          subHeading="$99 {10% off for Annual}"
          display={"hidden"}
          firstPlan="Upload unlimited courses (unlimited videos)"
          listPlan={premiumPlanList.map(({ id, title }) => (
            <div className="flex pt-[25px] items-center space-x-3">
              <img src={vector15} alt="img" />
              <h1 key={id} className="font-Lato font-normal text-sm">
                {title}
              </h1>
            </div>
          ))}
        />
      </div>
      <div className="mt-[80px]">
        <h1 className="font-Lato text-center text-2xl md:text-3xl lg:text-4xl font-semibold">
          Included in all plans
        </h1>
        <div className="mx-5 md:mx-16 lg:mx-[239px] mt-[40px] md:flex justify-between">
          <div>
            {includedInAllPlans.slice(0, 3).map(({ id, title }) => (
              <div className="flex pt-5 items-center space-x-3">
                <img src={vector15} alt="img" />
                <h1 key={id} className="font-Lato text-base font-normal">
                  {title}
                </h1>
              </div>
            ))}
          </div>
          <div>
            {includedInAllPlans.slice(3, 6).map(({ id, title }) => (
              <div className="flex pt-5 items-center space-x-3">
                <img src={vector15} alt="img" />
                <h1 key={id} className="font-Lato text-base font-normal">
                  {title}
                </h1>
              </div>
            ))}
          </div>
          <div>
            {includedInAllPlans.slice(6, 9).map(({ id, title }) => (
              <div className="flex pt-5 items-center space-x-3">
                <img src={vector15} alt="img" />
                <h1 key={id} className="font-Lato text-base font-normal">
                  {title}
                </h1>
              </div>
            ))}
          </div>
        </div>
        <h1 className="font-Lato font-normal text-center text-base pt-10 mx-5 md:mx-24 lg:mx-[326px]">
          Nadet plans will automatically renew until canceled. Recurring charges
          may be subject to changes. Plans can be canceled at anytime. Have any
          questions? Contact{" "}
          <a href="#333" className="text-bcolor">
            support@nadet.co
          </a>
        </h1>
      </div>
      <div className="mt-[80px] lg:mt-[100px]">
        <h1 className="font-Lato font-semibold text-2xl md:text-3xl lg:text-4xl text-center">
          Frequently Asked Questions
        </h1>
        <div className="mt-[40px] lg:mt-[60px] space-y-5 lg:mx-[150px]">
          {questionAndAwnserList.map(({ id, question, awnser }) => (
            <FaqsQusetionCard key={id} question={question} awnser={awnser} />
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <button
            onClick={() => {
              navigate("/faqs");
            }}
            className="bg-bcolor w-[173px] h-[50px] font-Lato font-semibold text-base rounded-lg"
          >
            See More FAQs
          </button>
        </div>
      </div>
      <div className="mt-[80px] lg:mb-[120px]">
        <YellowCard />
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;

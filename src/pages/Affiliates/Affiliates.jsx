import React from "react";
import rectangle22 from "../../assets/images/rectangle22.png";
import rectangle23 from "../../assets/images/rectangle23.png";
import rectangle24 from "../../assets/images/rectangle24.png";
import rectangle25 from "../../assets/images/rectangle25.png";
import FaqQuestionCard from "../FAQs/FaqsQuestionCard";
import YellowCard from "../../components/YellowCard";

const Affiliates = () => {
  const QuestionAndAwnser = [
    {
      id: 1,
      question: "How do I pay affiliates of my store ?",
      awnser:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    },
    {
      id: 2,
      question: "How do I receive payments in other currencies like USD?",
      awnser:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    },
    {
      id: 3,
      question: "What payment options can my customers pay with ?",
      awnser:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    },
    {
      id: 4,
      question: "How long will it take to receive my payout?",
      awnser:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    },
    {
      id: 5,
      question: "What payment methods are supported for receiving payouts?",
      awnser:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    },
  ];

  return (
    <div className="font-Lato">
      {/* Header section */}
      <div className="bg-[#FFF8E8]">
        <h1 className="font-extrabold text-[28px] md:text-3xl lg:text-4xl text-center pt-[127px] px-5 md:px-20 lg:px-52">
          10X your sales as a creator with Nadet affiliate program
        </h1>
        <p className="font-normal text-base text-tcolor text-center px-[22px] md:px-48 lg:mx-56 pt-5 pb-[76px]">
          We offer you an affiliate marketing system for free, so that you can
          earn extra.
        </p>
      </div>
      {/* Body section */}
      <div>
        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-center pt-[80px] px-[34px] md:px-[100px] lg:px-60">
          You’ve got so much to get with our affiliate program, make use of it
        </h1>
        <div className="md:flex md:justify-center md:px-5 lg:px-[140px]">
          <div className="flex justify-center mx-5 pt-[50px] lg:pr-[100px] lg:pb-[60px]">
            <img src={rectangle22} alt="img" className="object-contain" />
          </div>
          <div className="px-5 md:w-[1000px] lg:pt-16">
            <h1 className="pt-[60px] font-bold text-2xl">
              Recurring income from both invites and sales through local or
              international affiliates
            </h1>
            <p className="font-normal text-base text-tcolor pt-5">
              Our affiliate program is a win-win for you, when someone buys a
              product, you will earn an instant commision of both the initial
              sale and the recurring payment. Nadet will automatically split the
              commission between the creator and the affiliate based on the
              commision rate the creator sets and you will receive payment
              directly to your local bank account or via the payment method of
              choice.
            </p>
            <button className="bg-bcolor font-semibold h-[50px] w-[142px] text-base rounded-lg mt-5 mb-[60px]">
              Get Started
            </button>
          </div>
        </div>
        <div className="bg-[#FEF8E7] px-5 mb-[80px] md:flex md:flex-row-reverse md:px-7 lg:px-[140px]">
          <div className="flex justify-center pt-[50px] md:pl-5 md:pt-5 lg:pl-32">
            <img src={rectangle23} alt="img" className="object-contain" />
          </div>
          <div>
            <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl pt-[60px]">
              Payout on request
            </h1>
            <p className="font-normal text-tcolor text-base pt-5">
              Once you have started making money, you can request a payout and
              your money will be automatically sent directly to your Bank
              account or PayPal account. It's that easy!
            </p>
            <button className="font-semibold bg-bcolor rounded-lg h-[50px] w-[142px] mt-5 mb-[50px]">
              Get Started
            </button>
          </div>
        </div>
        <div className="px-5">
          <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-center md:px-16 lg:px-[200px]">
            How it works it’s pretty simple and can be set up in less than 1
            minute. Generate a custom link to your share with your audience.
          </h1>
          <div className="md:flex md:px-5 lg:px-[140px] lg:pt-[60px]">
            <div className="flex justify-center pt-[50px] md:pr-10 md:pt-2 lg:pr-28">
              <img src={rectangle24} alt="img" className="object-contain" />
            </div>
            <div className="md:w-[1000px]">
              <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl pt-[60px]">
                How the program works
              </h1>
              <p className="pt-5 text-tcolor text-base font-normal">
                When you become an affiliate, we'll provide you with a special
                affiliate link. You can put the affiliate link on your website,
                social networks, email etc. and refer customers in need of
                ebooks, video courses etc. When a new user visits, and purchase
                a product at Nadet via your affiliate link, our system
                identifies that they have come from you. When a purchase is made
                by your referral, you will automatically receive a commission.
              </p>
              <button className="font-semibold bg-bcolor rounded-lg h-[50px] w-[142px] mt-5 mb-[50px]">
                Get Started
              </button>
            </div>
          </div>
        </div>
        <div className="bg-[#FFF8E8] md:flex md:justify-around items-center md:mx-10 lg:mx-[140px]">
          <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-center pt-[16px]">
            It’s Pretty Easy
          </h1>
          <div className="flex justify-center pt-[14px]">
            <button className="font-semibold bg-bcolor rounded-lg h-[50px] w-[206px] mt-5 mb-[31px]">
              Become An Affiliate
            </button>
          </div>
        </div>
        <div className="pt-[80px] px-5 md:flex md:flex-row-reverse md:justify-center md:px-8 lg:px-[140px]">
          <div className="flex justify-center md:pl-8 lg:pl-36 md:pt-10">
            <img src={rectangle25} alt="img" className="object-contain" />
          </div>
          <div>
            <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl pt-[60px]">
              One dedicated affiliate dashboard makes the flow easy and
              straightforward
            </h1>
            <p className="pt-5 font-normal text-tcolor">
              When you log on to the dashboard, navigate to the affiliate
              dashboard from the menu lists, there you can monitor your referral
              signups, purchases and the subsequent payments to you.
            </p>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-center text-2xl md:text-3xl lg:text-4xl pt-[80px]">
            Frequently Asked Questions
          </h1>
          <div className="pt-10 lg:pt-[60px] space-y-5 lg:px-[180px]">
            {QuestionAndAwnser.map(({ id, question, awnser }) => (
              <FaqQuestionCard id={id} question={question} awnser={awnser} />
            ))}
          </div>
          <div className="flex justify-center pt-[86px] pb-[124px] lg:pb-[150px]">
            <button className="font-semibold bg-bcolor rounded-lg h-[50px] w-[173px] mt-5 mb-[31px]">
              See More FAQs
            </button>
          </div>
        </div>
        <div className="pb-[80px] lg:pb-[120px]">
          <YellowCard />
        </div>
      </div>
    </div>
  );
};

export default Affiliates;

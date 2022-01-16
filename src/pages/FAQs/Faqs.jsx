import { React, useState } from "react";
import Navbar from "../../components/Navbar";
import vector12 from "../../assets/images/vector12.svg";
import QuestionType from "./QuestionType";
import FaqsQuestionCard from "./FaqsQuestionCard";
import vector13 from "../../assets/images/vector13.svg";
import vector14 from "../../assets/images/vector14.svg";
import Footer from "../../components/Footer";

const Faqs = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className="bg-[#FFF8E8]">
        <Navbar />
        <h1 className="font-Lato font-extrabold text-[28px] md:text-3xl text-center pt-[197px] px-10">
          Common Asked Questions
        </h1>
        <p className="font-Lato font-normal text-lg text-center text-tcolor pt-5 px-14 pb-[30px] md:mx-32 lg:mx-96">
          You need help? Get quick answers to all your questions about Nadet
        </p>
      </div>
      <div className="mx-5 mt-[50px] md:flex md:justify-center md:mx-32 lg:mx-72">
        <div className="flex justify-between items-center rounded-lg border-[1px] h-[60px] w-full border-[#FFF8E8] shadow-lg box-border px-5">
          <input
            type="text"
            placeholder="Search for anything"
            className="border-none outline-none"
          />
          <img src={vector12} alt="img" className="h-[22px] w-[22px]" />
        </div>
      </div>
      <div className="mt-[43px]">
        <QuestionType text="General Questions" />
        <div onClick={handleClick}>
          <QuestionType text="Payment Questions" />
        </div>
        {isOpen && (
          <div className="space-y-5">
            <h1 className="font-Lato font-bold text-xl pt-[30px] px-5 md:px-40 pb-5">
              Payment Frequently Asked Questions
            </h1>
            <FaqsQuestionCard
              question="How do I get paid as a content creator using Nadet to sell my product ?"
              awnser="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
            />
            <FaqsQuestionCard
              question="What fees are included when receiving my payouts ?"
              awnser="Detailed pricing and fees information can be viewed from our pricing page. Click here"
            />
            <FaqsQuestionCard
              question="How do I know when any of my products is purchased ?"
              awnser="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
            />
            <FaqsQuestionCard
              question="How long will it take to receive my payouts ?"
              awnser="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
            />
            <FaqsQuestionCard
              question="Can customers buy my product anywhere in the world ?"
              awnser="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
            />
          </div>
        )}
        <QuestionType text="Support Questions" />
        <QuestionType text="Buying Questions" />
      </div>
      <div className="mx-5 md:mx-16 lg:mx-[140px]">
        <div className="rounded-lg w-full bg-[#FFF8E8] mt-[80px]">
          <h1 className="font-Lato font-bold text-2xl md:text-3xl lg:text-4xl text-center pt-[50px]">
            Still Need Help?
          </h1>
          <p className="font-Lato font-normal text-tcolor text-base text-center pt-10 px-5 md:px-40 lg:px-72">
            Our team is happy to answer your questions. Contact us and we’ll be
            in touch as soon as possible.
          </p>
          <div className="md:flex md:justify-center md:space-x-5">
            <div className="flex justify-center mt-5">
              <button className="flex items-center justify-center bg-bcolor font-Lato font-semibold rounded-lg h-[50px] w-[229px] ">
                <img src={vector14} alt="img" className="pr-3" />
                Shoot Us An Email
              </button>
            </div>
            <div className="flex justify-center mt-5 pb-[50px]">
              <button className="flex items-center justify-center bg-bcolor font-Lato font-semibold rounded-lg h-[50px] w-[229px] ">
                <img src={vector13} alt="img" className="pr-3" />
                Give Us A Call
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[80px] lg:mt-[120px]">
        <Footer />
      </div>
    </div>
  );
};

export default Faqs;

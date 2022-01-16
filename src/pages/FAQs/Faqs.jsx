import { React, useState } from "react";
import Navbar from "../../components/Navbar";
import vector12 from "../../assets/images/vector12.svg";
import QuestionType from "./QuestionType";
import FaqsQuestionCard from "./FaqsQuestionCard";

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
        <p className="font-Lato font-normal text-lg text-center text-tcolor pt-5 px-14 pb-[30px] md:mx-32">
          You need help? Get quick answers to all your questions about Nadet
        </p>
      </div>
      <div className="mx-5 mt-[50px] md:flex md:justify-center md:mx-32">
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
            <h1 className="font-Lato font-bold text-xl pt-[30px] px-5 pb-5">
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
    </div>
  );
};

export default Faqs;

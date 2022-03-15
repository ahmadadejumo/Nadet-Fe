import { React, useState } from "react";
import vector12 from "../../assets/images/vector12.svg";
import QuestionType from "./QuestionType";
import FaqsQuestionCard from "./FaqsQuestionCard";
import vector13 from "../../assets/images/vector13.svg";
import vector14 from "../../assets/images/vector14.svg";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {
  generalQuestions,
  paymentQuestions,
  supportQuestions,
  buyingQuestions,
} from "../FAQs/FaqsData";

const Faqs = () => {
  // The below states are used in handling the opening and closing of each question type
  const [general, setGeneral] = useState(false);

  const handleGeneral = () => {
    setGeneral(!general);
  };

  const [payment, setPayment] = useState(false);

  const handlePayment = () => {
    setPayment(!payment);
  };

  const [support, setSupport] = useState(false);

  const handleSupport = () => {
    setSupport(!support);
  };

  const [buying, setBuying] = useState(false);

  const handleBuying = () => {
    setBuying(!buying);
  };
  return (
    <div>
      <div className="bg-[#FFF8E8]">
        {/* Header section */}
        <Navbar />
        <h1 className="font-Lato font-extrabold text-[28px] md:text-3xl text-center pt-[197px] px-10">
          Common Asked Questions
        </h1>
        <p className="font-Lato font-normal text-lg text-center text-tcolor pt-5 px-14 pb-[30px] md:mx-32 lg:mx-96">
          You need help? Get quick answers to all your questions about Nadet
        </p>
      </div>
      {/* Body section */}
      <div className="mx-5 mt-[50px] md:flex md:justify-center md:mx-32 lg:mx-72">
        <div className="flex justify-between items-center rounded-lg border-[1px] h-[60px] w-full border-[#FFF8E8] shadow-lg box-border px-5">
          <input
            type="text"
            placeholder="Search for anything"
            className="border-none outline-none w-[280px] md:w-[500px] lg:w-[1000px]"
          />
          <img src={vector12} alt="img" className="h-[22px] w-[22px]" />
        </div>
      </div>
      <div className="mt-[43px]">
        <div onClick={handleGeneral}>
          <QuestionType text="General Questions" />
        </div>
        {general && (
          <div className="space-y-5 pb-5">
            <h1 className="font-Lato font-bold text-xl pt-[20px] px-5 md:px-40 pb-5">
              General Frequently Asked Questions
            </h1>
            {generalQuestions.map(({ id, question, awnser }) => (
              <FaqsQuestionCard key={id} question={question} awnser={awnser} />
            ))}
          </div>
        )}
        <div onClick={handlePayment}>
          <QuestionType text="Payment Questions" />
        </div>
        {payment && (
          <div className="space-y-5 pb-5">
            <h1 className="font-Lato font-bold text-xl pt-[20px] px-5 md:px-40 pb-5">
              Payment Frequently Asked Questions
            </h1>
            {paymentQuestions.map(({ id, question, awnser }) => (
              <FaqsQuestionCard key={id} question={question} awnser={awnser} />
            ))}
          </div>
        )}
        <div onClick={handleSupport}>
          <QuestionType text="Support Questions" />
        </div>
        {support && (
          <div className="space-y-5 pb-5">
            <h1 className="font-Lato font-bold text-xl pt-[20px] px-5 md:px-40 pb-5">
              Support Frequently Asked Questions
            </h1>
            {supportQuestions.map(({ id, question, awnser }) => (
              <FaqsQuestionCard key={id} question={question} awnser={awnser} />
            ))}
          </div>
        )}
        <div onClick={handleBuying}>
          <QuestionType text="Buying Questions" />
        </div>
        {buying && (
          <div className="space-y-5">
            <h1 className="font-Lato font-bold text-xl pt-[20px] px-5 md:px-40 pb-5">
              Buying Frequently Asked Questions
            </h1>
            {buyingQuestions.map(({ id, question, awnser }) => (
              <FaqsQuestionCard key={id} question={question} awnser={awnser} />
            ))}
          </div>
        )}
      </div>
      <div className="mx-5 md:mx-16 lg:mx-[140px] mb-[80px] lg:mb-[120px]">
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
      <Footer />
    </div>
  );
};

export default Faqs;

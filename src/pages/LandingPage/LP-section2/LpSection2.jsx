/* eslint-disable no-undef */
import React from "react";
import LpSection2Item from "./LpSection2Item";
import vector1 from "../../../assets/images/vector1.svg";
import vector2 from "../../../assets/images/vector2.svg";
import vector3 from "../../../assets/images/vector3.svg";
import vector4 from "../../../assets/images/vector4.svg";
import rectangle from "../../../assets/images/rectangle.png";

const LpSection2 = () => {
  return (
    <div className="mt-16 mb-20 md:mb-24">
      <h1 className="font-Lato font-bold text-center text-2xl md:text-3xl lg:text-4xl tracking-normal leading-relaxed mx-5 md:mx-20 lg:mx-60">
        Sell any kind of product, starting from digital courses down to ebooks
        etc.
      </h1>
      <div className="flex justify-center lg:items-center lg:space-x-16 md:mt-[50px] mt-10 mx-5">
        <div className="hidden lg:inline-block">
          <img
            src={rectangle}
            alt="ladyimage"
            className="object-contain h-[501px] w-[401px]"
          />
        </div>
        <div className="grid md:grid-cols-2 md:gap-x-[62px] md:gap-y-[30px] lg:gap-x-[30px] gap-y-5">
          <LpSection2Item
            image={vector1}
            text="We makes it easy for you to host unlimited videos and files of your courses and membership programs along with the right marketing plan for success."
            color={`bg-[#FBF3DE]`}
            padding={`px-10`}
            heading="Courses & Memberships"
          />
          <LpSection2Item
            image={vector2}
            text="Start selling tickets for all kinds of events and access to masterclasses, programs, workshops, training, webinars, and even much more."
            color={`bg-[#E6E3FA]`}
            padding={`px-8`}
            heading="Events & Trainings"
          />
          <LpSection2Item
            image={vector3}
            text="We have developed the best platform for you to sell your programs and ebooks for both downloadable and non-downloadable in any format."
            color={`bg-[#C0E1FF]`}
            padding={`px-8`}
            heading="Programs & Ebooks"
          />
          <LpSection2Item
            image={vector4}
            text="Host and sell any kind of program subscription or service, from coaching services to consultations to counseling sessions to design services and more."
            color={`bg-[#D9ECD8]`}
            padding={`px-9`}
            heading="Subscription & Services"
          />
        </div>
      </div>
    </div>
  );
};

export default LpSection2;

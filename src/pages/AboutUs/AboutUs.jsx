import React from "react";
import rectangle6 from "../../assets/images/rectangle6.png";
import rectangle7 from "../../assets/images/rectangle7.png";
import rectangle8 from "../../assets/images/rectangle8.png";
import rectangle9 from "../../assets/images/rectangle9.png";
import Card from "./Card";
import vector8 from "../../assets/images/vector8.svg";
import vector7 from "../../assets/images/vector7.svg";
import vector6 from "../../assets/images/vector6.svg";
import vector16 from "../../assets/images/vector16.svg";
import vector17 from "../../assets/images/vector17.svg";
import rectangle10 from "../../assets/images/rectangle10.png";
import FastProcessIcon from "../../assets/images/FastProcessIcon.svg";
import rectangle11 from "../../assets/images/rectangle11.png";
import rectangle12 from "../../assets/images/rectangle12.png";
import YelloCard from "../../components/YellowCard";

const AboutUs = () => {
  return (
    <div>
      {/* Header section */}
      <div className="bg-[#FFF8E8]">
        <h1 className="font-Lato font-extrabold text-[28px] md:text-3xl lg:text-4xl text-center pt-[129px] md:pt-[168px]">
          Get To Know Us
        </h1>
        <p className="font-Lato font-normal text-lg md:text-xl text-center pt-5 px-5 md:px-36 lg:px-[395px]">
          We offer you the flexibility to monetize any of your digital
          product/content(s) for maximum success.
        </p>
        <div className="flex space-x-3 justify-center md:space-x-5 lg:space-x-7 mx-5 md:mx-16 lg:mx-[243px] pt-10 pb-[50px] lg:pb-[90px]">
          <div className="object-contain">
            <img src={rectangle8} alt="img" />
          </div>
          <div className="object-contain">
            <img src={rectangle7} alt="img" />
          </div>
          <div className="object-contain">
            <img src={rectangle6} alt="img" />
          </div>
        </div>
      </div>
      {/* Body Section */}
      <div className="mt-[80px] md:mt-[100px] lg:mt-[120px]">
        <div className="flex justify-center">
          <button className="bg-[#FBF3DE] rounded-lg h-[70px] w-[240px] font-Lato font-bold text-xl">
            Who We Are
          </button>
        </div>
        <p className="font-Lato text-base font-normal text-tcolor text-center pt-5 px-[25px] md:px-28 lg:px-[219px]">
          Being a creator is fun, but not without its hurdles. The lack of a
          suitable outlet to express creativity and complexities and costs of
          building a website, accepting payments from customers worldwide are
          both numerous and tedious. Creators need the solution that removes the
          engineering stress and take care of the end-to-end process of selling
          products online. Nadet is streamlining all the different needs,
          operations and customer experience at one place. That's the problem
          we're solving at Nadet by creating a one-stop platform for digital
          creators and creatives to build immersive connections with fans and
          followers and monetize them. With this, digital creators and creatives
          have the power to sell their products with anyone anywhere in the
          world. Delivery is unlimited. The incomes are endless.
        </p>
        <div className="md:flex justify-center space-x-5 md:mx-10 pb-[80px] lg:pt-[50px] lg:pb-[140px] lg:px-[250px]">
          <div>
            <div className="flex justify-center pt-10">
              <button className="bg-[#FBF3DE] rounded-lg h-[60px] w-[170px] font-Lato font-bold text-xl">
                Our Mision
              </button>
            </div>
            <p className="font-Lato text-base font-normal text-tcolor text-center pt-5 px-[24px]">
              Our mission is to be a one-stop platform for digital creators and
              creatives to build immersive connections with fans and followers
              and monetize them.
            </p>
          </div>
          <div>
            <div className="flex justify-center pt-[30px]">
              <button className="bg-[#FBF3DE] rounded-lg h-[60px] w-[170px] font-Lato font-bold text-xl">
                Our Vision
              </button>
            </div>
            <p className="font-Lato text-base font-normal text-tcolor text-center pt-5 px-[25px]">
              Our Vision is to power-up creators of any category and democratize
              more opportunities for creators to earn endless income.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-5 lg:mx-20  md:flex md:flex-row-reverse lg:justify-center">
        <div className="flex justify-center md:w-[1000px] lg:w-[500px] md:pl-5">
          <img src={rectangle9} alt="img" className="object-contain" />
        </div>
        <div className="lg:w-[600px]">
          <h1 className="font-Lato font-bold text-2xl md:text-3xl lg:text-4xl pt-[60px]">
            Why we are different from other marketplace?
          </h1>
          <p className="font-Lato font-normal text-base pt-5 text-tcolor">
            Your video courses, ebooks and live webinars will be seen by a
            worldwide audience that are ready to buy your products. We offer
            you:
          </p>
          <div className="mt-[30px] md:flex md:space-x-10">
            <div className="space-y-5 pb-5">
              <Card image={vector7} text="Instant payouts" />
              <Card image={vector8} text="Instant payouts" />
              <Card image={vector6} text="Instant payouts" />
            </div>
            <div className="space-y-5">
              <Card image={FastProcessIcon} text="Instant payouts" />
              <Card image={vector16} text="Instant payouts" />
              <Card image={vector17} text="Instant payouts" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center pt-10 pb-[80px]">
        <button className="font-Lato text-base font-semibold rounded-lg bg-bcolor h-[50px] w-[216px]">
          Start Selling With Us
        </button>
      </div>
      <div className="bg-[#FEF8E7] w-full md:flex lg:justify-center lg:space-x-28">
        <div className="flex justify-between pt-[50px] md:pt-3 lg:py-[56px] mx-5 lg:w-[407px]">
          <img src={rectangle10} alt="img" className="object-contain" />
        </div>
        <div className="font-Lato mx-5 pt-[60px] lg:w-[510px] lg:pt-[100px]">
          <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">
            We market and drive traffic to your products for high reach
          </h1>
          <p className="font-normal text-base text-tcolor pt-5">
            We don't just provide you with a fast, easy and safe place to sell,
            we also market your products so it can be seen by a worldwide paying
            audience.
          </p>
          <button className="bg-bcolor font-semibold text-base h-[50px] w-[199px] rounded-lg mt-5 mb-[50px]">
            Get Started Today!
          </button>
        </div>
      </div>
      <div className="mx-5 md:flex justify-center mt-[80px] md:mt-10 md:flex-row-reverse lg:mx-[140px]">
        <div className="md:pl-10 md:pt-48 ">
          <img src={rectangle11} alt="img" className="object-contain" />
        </div>
        <div className="font-Lato pt-[60px] md:w-[1600px] lg:w-[1700px] lg:pt-[160px]">
          <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">
            Created for content creators and their audience
          </h1>
          <p className=" font-normal text-tcolor text-base pt-5">
            We are simplifying the way content creators sell video courses,
            ebooks and create live streams to online classes. We pride ourselves
            in the simplicity that we bring to our customers. Helping them
            perform highly advanced technological actions without any stress. We
            have a strong background in keeping things simple. Our product
            features are exceptional, we take extra step in ensuring that our
            products are simple to use, user friendly and straight forward.
          </p>
        </div>
      </div>
      <div className="flex justify-center pt-[40px]">
        <button className="font-semibold text-base bg-bcolor rounded-lg h-[50px] w-[194px] ">
          Become A Creator
        </button>
      </div>
      <div className="mx-5 md:flex justify-center mt-[80px] md:mt-[40px] lg:mx-[140px]">
        <div className="md:pt-32 md:pr-10">
          <img src={rectangle12} alt="img" className="object-contain" />
        </div>
        <div className="font-Lato pt-[60px] lg:pt-[110px] md:w-[970px]">
          <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">
            We have team of experts that are making dreams come through.
          </h1>
          <p className=" font-normal text-tcolor text-base pt-5">
            We are creative dreamers and innovators. Not distracted by anything
            but focused on our mission of building a simplified marketplace for
            content creators to sell video courses, ebooks and create live
            streams. Our teams are always up-to-date with the new technology
            ensuring that our system works fast and is relatively stress-free.
          </p>
        </div>
      </div>
      <div className="flex justify-center pt-[40px] pb-[120px]">
        <button className="font-semibold text-base bg-bcolor rounded-lg h-[50px] w-[194px] ">
          Get Started Now
        </button>
      </div>
      <div className="mb-[80px] lg:mb-[120px]">
        <YelloCard />
      </div>
    </div>
  );
};

export default AboutUs;

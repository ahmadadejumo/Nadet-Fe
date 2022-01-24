import React from "react";
import rectangle13 from "../../assets/images/rectangle13.png";
import rectangle14 from "../../assets/images/rectangle14.png";
import Card from "./Card";
import Reusable from "./Reusable";
import rectangle15 from "../../assets/images/rectangle15.png";
import rectangle16 from "../../assets/images/rectangle16.png";

const ReferAFriend = () => {
  return (
    <div>
      {/* Header section */}
      <div className="bg-[#FFF8E8]">
        <h1 className="font-Lato font-extrabold text-[28px] md:text-3xl lg:text-4xl text-center pt-[129px] px-[20px] md:px-16 lg:px-60">
          Join a Network affiliate on Nadet and earn 3000 for every friend you
          invite
        </h1>
        <p className="font-Lato font-normal text-tcolor text-lg md:text-xl text-center pt-10 md:pt-5">
          Earn from every person you refer
        </p>
        <div className="flex justify-center pt-[20px] pb-[32px] md:pb-[55px] lg:pb-[77px]">
          <button className="rounded-lg bg-bcolor h-[50px] w-[164px] font-Lato font-semibold text-base">
            Refer A Friend
          </button>
        </div>
      </div>
      {/* Body Section */}
      <div className="mt-[80px]">
        <h1 className="font-Lato font-bold text-2xl md:text-3xl lg:text-4xl text-center px-[25px] md:px-36 lg:px-56">
          On our Network affiliate, you earn a bonus each time you refer someone
          to the network, see how it works
        </h1>
        <div className="md:flex md:flex-row-reverse md:justify-center md:mx-10 lg:mx-[140px] lg:space-x-5">
          <div className="px-5 pt-[50px] md:w-[800px] lg:w-[660px]">
            <img src={rectangle13} alt="img" className="object-contain" />
          </div>
          <div className="pt-[60px] space-y-10 lg:pt-[142px]">
            <Reusable
              header="Refer a friend"
              text="As a basic plan subscriber you get a referral link to share with your friends and family on social media e.t.c."
            />
            <Reusable
              header="Earn a commission"
              text="Earn a commission of 3000 when a visitor signs up using the link and subscribes to the basic plan."
            />
            <Reusable
              header="You get paid"
              text="Payments are made weekly to your bank account submitted during registration."
            />
          </div>
        </div>
        <div className="flex justify-center pt-10 md:pt-[50px] pb-[80px] md:pb-[120px]">
          <button className="rounded-lg bg-bcolor h-[50px] w-[221px] font-Lato">
            Refer A Friend Today!
          </button>
        </div>
      </div>
      {/* Container in body section */}
      <div className="bg-[#FEF8E7] w-full font-Lato px-5 md:px-10 lg:px-[140px] md:flex md:space-x-10 lg:space-x-28">
        <div className="pt-[50px] lg:pb-[56px]">
          <img src={rectangle14} alt="img" className="object-contain" />
        </div>
        <div className="pt-[60px] lg:pt-[132px]">
          <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">
            Get reward for spreading about us
          </h1>
          <p className="font-normal text-base pt-5 text-tcolor">
            Do you have a friend who loves to create content? You get to earn 3k
            for every person you refer through your unique link. Let us reward
            you for spreading Nadet.
          </p>
          <button className="rounded-lg mt-5 mb-[50px] h-[50px] w-[164px] bg-bcolor font-semibold text-base">
            Refer A Friend
          </button>
        </div>
      </div>
      {/* Card component */}
      <div className="pt-20">
        <h1 className="font-Lato font-bold text-2xl md:text-3xl lg:text-4xl text-center pb-[50px]">
          What you stand to benefit
        </h1>
        <div className="md:mx-28">
          <Card
            image={rectangle15}
            text="You get free access to marketing course which covers Whatsapp marketing,
        IInstagram e.t.c. to help you grow your business"
          />
          <Card
            image={rectangle16}
            text="You get access to all the packages available to all our basic plan subscribers"
          />
        </div>
      </div>
    </div>
  );
};

export default ReferAFriend;

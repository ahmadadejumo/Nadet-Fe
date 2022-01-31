import React from "react";
import LpSection6Item from "./LpSection6Item";
import vector9 from "../../../assets/images/vector9.png";
import vector10 from "../../../assets/images/vector10.png";
import vector11 from "../../../assets/images/vector11.png";

const LpSection6 = () => {
  return (
    <div className="mt-20 flex flex-col">
      <div className="text-center mx-5 md:mx-40 lg:mx-[345px]">
        <h1 className="font-Lato font-bold text-2xl md:text-[26px] lg:text-4xl tracking-normal">
          Follow this simple steps to set up your account
        </h1>
        <p className="font-Lato font-normal text-base text-tcolor pt-4">
          It takes just 3 steps and less than 5 mins to unlock the best way to
          sell online. If it takes longer, feel free to close your account with
          us forever.
        </p>
      </div>
      <div className="mt-[40px] mx-5 grid md:grid-cols-3 gap-y-5 md:gap-x-[20px] md:mx-10 lg:mx-[70px]">
        <LpSection6Item
          image={vector9}
          header={"Setup an Account"}
          text={"Sign up for your account, and login to proceed to next step."}
        />
        <LpSection6Item
          image={vector10}
          header={"Finalizing Account Setup"}
          text={"Add your bank account details and upload your content(s)."}
        />
        <LpSection6Item
          image={vector11}
          header={"Start Earning"}
          text={"Share product link to people and start earning massively."}
        />
      </div>
      <div className="flex justify-center mt-[20px] lg:mt-[50px]">
        <button className="bg-bcolor font-Lato font-semibold rounded-lg h-[50px] w-[199px] mb-[54px]">
          Get Started Today!
        </button>
      </div>
    </div>
  );
};

export default LpSection6;

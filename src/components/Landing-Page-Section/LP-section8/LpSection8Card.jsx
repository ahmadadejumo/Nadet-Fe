import React from "react";

const LpSection8Card = () => {
  return (
    <div className="md:mx-3 lg:mx-4">
      <div className="container rounded-lg w-full bg-[#F5F4FD]">
        <div className="mx-5 pt-[25px] pb-[27px]">
          <h1 className="font-Lato font-semibold text-xl">
            “Truly Nadet Rocks”
          </h1>
          <p className="font-Lato font-normal text-base text-tcolor pt-[15px]">
            I’ve used quite a number of e-commerce platforms, but Nadet’s
            amazing! They’re truly interested in your growth and are constantly
            listening to the customers and giving support.
          </p>
          <div className="flex mt-[18px] space-x-5">
            <img
              src="https://avatars.githubusercontent.com/u/55682552?v=4"
              alt="profile-pic"
              className="rounded-full h-[55px] w-[55px]"
            />
            <div className="font-Lato">
              <h1 className="font-bold text-lg">Ahmad Adejumo</h1>
              <p className="font-normal text-sm text-tcolor ">
                Software Developer
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LpSection8Card;

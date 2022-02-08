import React from "react";
import Navbar from "../../../components/Navbar";
import arrow from "../../../assets/images/arrow.svg";
import woman from "../../../assets/images/woman.svg";
import man from "../../../assets/images/man.svg";
import image1 from "../../../assets/images/image1.svg";
import image2 from "../../../assets/images/image2.svg";
import image3 from "../../../assets/images/image3.svg";
import image4 from "../../../assets/images/image4.svg";
import { motion } from "framer-motion";

const imageVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};
// const fadeVariant = {
//   initial: { y: 500, opacity: 0 },
//   animate: { y: 0, opacity: 1 },
//   transition: { duration: 1, delay: 2, ease: "easeInOut" },
// };

const Header = () => {
  return (
    <div className="bg-hcolor">
      <Navbar />
      <div className="lg:flex lg:justify-center">
        <div className="pt-24 md:pt-20 pb-14 px-5 md:px-[30px]">
          <div className="md:flex md:items-center lg:space-x-14">
            <motion.div
              animate={{ x: 0, opacity: 1 }}
              initial={{ x: -500, opacity: 0 }}
              transition={{ stiffness: 30, delay: 0.5, type: "spring" }}
              className="lg:w-[442px]"
            >
              <h6 className="font-Lato md:text-[26px] text-[28px] lg:text-[36px] font-extrabold md:leading-loose">
                A Simple, Powerful Solution To Sell Your Digital Products
                Quickly & Efficiently.
              </h6>
              <p className="font-Lato pt-5 md:pt-0 text-tcolor text-lg lg:text-[20px] md:leading-loose">
                We bring everything you will need to monetize your contents
                under one platform.
              </p>
              <button className="font-Lato bg-bcolor font-semibold text-base rounded-lg h-[52px] w-[280px] flex justify-around px-5 mt-5 items-center">
                Start Selling With Nadet
                <img src={arrow} alt="arrow" className="w-4 h-3 " />
              </button>
            </motion.div>
            <div className="mt-10 flex space-x-5 lg:space-x-10">
              <motion.div
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 1, delay: 1.5 }}
                className="bg-scolor flex justify-center rounded-b-full rounded-tl-half rounded-tr-bleft overflow-hidden w-[159px] h-[199px] md:w-[188px] md:h-[236px] lg:h-[366px] lg:w-[293px]"
              >
                <img
                  src={man}
                  alt="man"
                  className="object-contain w-[135px] h-[192px] mt-[12px] ml-[10px] md:w-[161px] md:h-[228px] lg:h-[354px] lg:w-[250px] lg:mt-3 lg:ml-5"
                />
              </motion.div>
              <motion.div
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 2, delay: 2 }}
                className="bg-bcolor flex justify-center rounded-t-full rounded-br-half rounded-bl-bleft overflow-hidden w-[159px] h-[199px] md:w-[188px] md:h-[236px] lg:h-[366px] lg:w-[293px]"
              >
                <img
                  src={woman}
                  alt="woman"
                  className="object-contain mt-[5px] w-[141px] h-[214px] md:w-[168px] md:h-[254px] lg:h-[395px] lg:w-[260px]"
                />
              </motion.div>
            </div>
          </div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16 lg:flex lg:space-x-20 lg:items-center"
          >
            <motion.p className="font-Lato text-base font-semibold md:text-2xl md:w-[298px]">
              Trusted by companies of all sizes
            </motion.p>
            <div className="flex space-x-3 md:space-x-[65px] pt-[15px] md:pt-5 lg:space-x-[70px]">
              <div>
                <img
                  src={image1}
                  alt="logo"
                  className="h-[23px] w-[84px] md:h-[41px] md:w-[143px] object-contain"
                />
              </div>
              <div>
                <img
                  src={image2}
                  alt="logo"
                  className="h-[23px] w-[70px] md:h-10 md:w-[118px] object-contain"
                />
              </div>
              <div>
                <img
                  src={image3}
                  alt="logo"
                  className="h-[23px] w-[71px] md:h-[41px] md:w-[122px] object-contain"
                />
              </div>
              <div>
                <img
                  src={image4}
                  alt="logo"
                  className="h-[23px] w-[71px] md:h-[41px] md:w-[122px] object-contain"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Header;

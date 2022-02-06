import React from "react";
import rectangle2 from "../../assets/images/rectangle2.png";
import ProductCard from "./ProductCard";
import rectangle3 from "../../assets/images/rectangle3.png";
import rectangle4 from "../../assets/images/rectangle4.png";
import rectangle5 from "../../assets/images/rectangle5.png";
import YellowCard from "../../components/YellowCard";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Products = () => {
  return (
    <div>
      {/* Header section */}
      <div className="bg-[#FFF8E8]">
        <Navbar />
        <h1 className="font-Lato font-extrabold text-[28px] md:text-3xl text-center pt-[197px]">
          Products
        </h1>
        <p className="font-Lato text-xl font-medium text-center pt-10 pb-[52px] lg:pb-5">
          Everything you need in one place.
        </p>
        <div className="hidden lg:flex lg:justify-center lg:pb-[50px]">
          <button className="bg-bcolor font-Lato font-semibold rounded-lg h-[50px] w-[194px]">
            Start Selling Now!
          </button>
        </div>
      </div>
      <div className="mt-[80px] mb-[80px]">
        <h1 className="font-Lato text-2xl md:text-3xl lg:text-4xl font-bold text-center px-7 md:px-10 lg:px-60">
          As long as you have a digital skill related to our products, selling
          becomes easy for you.
        </h1>
        <div className="mt-[50px] md:flex lg:justify-center lg:space-x-36">
          <div className="flex justify-center mx-5 md:mt-16 lg:mt-[30px]">
            <img
              src={rectangle2}
              alt="img"
              className="lg:w-[478px] object-contain"
            />
          </div>
          <div className="mt-[60px] mx-[23px] md:w-[1000px] lg:w-[400px] lg:mt-36">
            <h1 className="font-Lato text-2xl lg:text-[26px] font-bold">
              Start selling your courses and memberships program in a grand
              style
            </h1>
            <p className="font-Lato text-tcolor text-base font-normal pt-5">
              The steps is pretty easy, record your program offline and upload
              it online, get a student and make money in return. <br></br>
              <br></br>Yes, we makes it easy for you to get this done in a grand
              style, as you have access to host unlimited video courses and
              files, as well as your membership programs along with the right
              marketing plan for you start reaching out to more success.
            </p>
            <button className="bg-bcolor font-Lato font-semibold rounded-lg h-[50px] w-[188px] mt-5">
              Sell Your Courses
            </button>
          </div>
        </div>
      </div>
      <div className="md:flex md:mx-5 md:space-x-5 lg:mx-[140px] lg:space-x-8 mt-[120px]">
        <ProductCard
          image={rectangle3}
          header="Events and trainings is much easier to sell on Nadet"
          text="Start selling tickets for all kinds of events and access to
        masterclasses, programs, workshops, training, webinars, and even much
        more."
        />
        <ProductCard
          image={rectangle4}
          header="Sell ebooks multiple ways - downloadable and non-downloadable"
          text="Selling ebooks can be a nice income stream or the start of a profitable online business. 
        With the tools available in Nadet you can start selling in a matter of minutes."
        />
      </div>
      <div className="md:mx-5 lg:mx-[140px]">
        <div className="bg-[#FFF8E8] w-full rounded-lg mt-[80px] md:flex md:justify-evenly">
          <h1 className="font-Lato font-bold text-2xl md:text-3xl lg:text-4xl text-center pt-[32px]">
            Can’t wait to get started?
          </h1>
          <div className="flex justify-center">
            <button className="bg-bcolor font-Lato font-semibold rounded-lg h-[50px] w-[194px] mt-[30px] mb-[31px]">
              Start Selling Now!
            </button>
          </div>
        </div>
      </div>
      <div className="mx-5 mt-[80px] md:flex md:flex-row-reverse lg:mx-[140px]">
        <div className="flex justify-center md:mt-10 ">
          <img src={rectangle5} alt="img" className="object-contain" />
        </div>
        <div className="md:w-[900px] lg:w-[1200px] md:mr-5 lg:mr-[150px]">
          <h1 className="font-Lato font-bold text-2xl lg:text-4xl pt-[60px] lg:leading-snug">
            One-stop platform to sell and distribute any kind of subscription &
            services
          </h1>
          <p className="font-Lato text-base font-normal text-tcolor pt-5 lg:leading-tight">
            The process is simple and seamless. From coaching services to
            counseling session down to design services including memebers - only
            subscription, the whole process is seamless.
          </p>
        </div>
      </div>
      <div className="mt-[80px] md:mt-[120px] mb-[80px] md:mb-[120px]">
        <YellowCard />
      </div>
      <Footer />
    </div>
  );
};

export default Products;

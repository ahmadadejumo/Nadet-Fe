/* eslint-disable no-undef */
import React from "react";
import ProductItem from "../product-list/ProductItem";
import vector1 from "../../assets/images/vector1.png";
import vector2 from "../../assets/images/vector2.png";
import vector3 from "../../assets/images/vector3.png";
import vector4 from "../../assets/images/vector4.png";
import rectangle from "../../assets/images/rectangle.png";

const ProductList = () => {
  return (
    <div className="mt-16 mb-20 md:mb-24">
      <h1 className="font-Lato font-bold text-center text-2xl md:text-3xl lg:text-4xl tracking-normal leading-relaxed mx-5 md:mx-20 lg:mx-60">
        Sell any kind of product, starting from digital courses down to ebooks
        etc.
      </h1>
      <div className="flex justify-center lg:space-x-10">
        <div className="hidden lg:contents items-center">
          <img src={rectangle} alt="ladyimage" className="h-[31rem] mt-24" />
        </div>
        <div className="md:grid md:grid-cols-2 md:gap-x-10 md:mt-5">
          <ProductItem
            image={vector3}
            text="We makes it easy for you to host unlimited videos and files of your courses and membership programs along with the right marketing plan for success."
            color={`bg-[#FBF3DE]`}
            padding={`px-10`}
            heading="Courses & Memberships"
          />
          <ProductItem
            image={vector2}
            text="Start selling tickets for all kinds of events and access to masterclasses, programs, workshops, training, webinars, and even much more."
            color={`bg-[#E6E3FA]`}
            padding={`px-8`}
            heading="Events & Trainings"
          />
          <ProductItem
            image={vector4}
            text="We have developed the best platform for you to sell your programs and ebooks for both downloadable and non-downloadable in any format."
            color={`bg-[#C0E1FF]`}
            padding={`px-8`}
            heading="Programs & Ebooks"
          />
          <ProductItem
            image={vector1}
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

export default ProductList;

import React from "react";
import LpSection8Card from "./LpSection8Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import profile3 from "../../../assets/images/profile3.svg";
import profile4 from "../../../assets/images/profile4.svg";
import profile5 from "../../../assets/images/profile5.svg";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const LpSection8 = () => {
  return (
    <div>
      <div className="mx-5 md:mx-36 lg:mx-60">
        <h1 className="font-Lato font-bold text-2xl lg:text-4xl text-center">
          Join other creators building a profitable business with Nadet. Hear
          what they say
        </h1>
      </div>
      <div className="mx-5 lg:mx-24 mt-[40px] pb-10">
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          renderDotsOutside={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-100-px"
        >
          <LpSection8Card
            title={"“Truly Nadet Rocks”"}
            text={
              "I’ve used quite a number of e-commerce platforms, but Nadet’s amazing! They’re truly interested in your growth and are constantly listening to the customers and giving support."
            }
            image={"https://avatars.githubusercontent.com/u/55682552?v=4"}
            name={"Ahmad Adejumo"}
            profession={"Software Developer"}
          />
          <LpSection8Card
            title={"“Nadet It’s A Game Changer”"}
            text={
              "I’ve used other platforms that not quite good as nadet, Nadet’s amazing! They’re truly interested in your growth and are constantly listening to the customers and giving support."
            }
            image={profile3}
            name={"Daniel Akinleye"}
            profession={"Digital Designer"}
          />
          <LpSection8Card
            title={"“Truly Nadet Rocks”"}
            text={
              "I’ve used quite a number of e-commerce platforms, but Nadet’s amazing! They’re truly interested in your growth and are constantly listening to the customers and giving support."
            }
            image={profile4}
            name={"Marvelous Okpah"}
            profession={"Product Designer"}
          />
          <LpSection8Card
            title={"“A Dream Come Through”"}
            text={
              "Nadet is a dream come through platform for my business and goals! They’re truly interested in your growth and are constantly listening to the customers and giving support."
            }
            image={profile5}
            name={"Precious Icardi"}
            profession={"Content Creator"}
          />
          <LpSection8Card
            title={"“Truly Nadet Rocks”"}
            text={
              "I’ve used quite a number of e-commerce platforms, but Nadet’s amazing! They’re truly interested in your growth and are constantly listening to the customers and giving support."
            }
            image={"https://avatars.githubusercontent.com/u/55682552?v=4"}
            name={"Ahmad Adejumo"}
            profession={"Software Developer"}
          />
          <LpSection8Card
            title={"“Nadet It’s A Game Changer”"}
            text={
              "I’ve used other platforms that not quite good as nadet, Nadet’s amazing! They’re truly interested in your growth and are constantly listening to the customers and giving support."
            }
            image={profile3}
            name={"Daniel Akinleye"}
            profession={"Digital Designer"}
          />
          <LpSection8Card
            title={"“Truly Nadet Rocks”"}
            text={
              "I’ve used quite a number of e-commerce platforms, but Nadet’s amazing! They’re truly interested in your growth and are constantly listening to the customers and giving support."
            }
            image={profile4}
            name={"Marvelous Okpah"}
            profession={"Product Designer"}
          />
          <LpSection8Card
            title={"“A Dream Come Through”"}
            text={
              "Nadet is a dream come through platform for my business and goals! They’re truly interested in your growth and are constantly listening to the customers and giving support."
            }
            image={profile5}
            name={"Precious Icardi"}
            profession={"Content Creator"}
          />
        </Carousel>
      </div>
    </div>
  );
};

export default LpSection8;

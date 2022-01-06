import React from "react";
import LpSection8Card from "./LpSection8Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
      <div className="mx-5 lg:mx-24 mt-[40px]">
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          renderDotsOutside={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-100-px"
        >
          <LpSection8Card />
          <LpSection8Card />
          <LpSection8Card />
          <LpSection8Card />
          <LpSection8Card />
          <LpSection8Card />
          <LpSection8Card />
          <LpSection8Card />
          <LpSection8Card />
          <LpSection8Card />
        </Carousel>
      </div>
    </div>
  );
};

export default LpSection8;

import React from "react";
import LpSection8Card from "./LpSection8Card";
import Carousel from "react-elastic-carousel";
import profile3 from "../../../assets/images/profile3.svg";
import profile4 from "../../../assets/images/profile4.svg";
import profile5 from "../../../assets/images/profile5.svg";
import Circle from "./CirclePagination";

const LpSection8 = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ];

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
          itemsToShow={1}
          breakPoints={breakPoints}
          enableAutoPlay
          autoPlaySpeed={5000}
          showArrows={false}
          renderPagination={({ pages, activePage, onClick }) => {
            return (
              <div className="flex space-x-2 pt-5">
                {pages.map((page) => {
                  const isActivePage = activePage === page;
                  return (
                    <Circle
                      key={page}
                      onClick={() => onClick(page)}
                      active={isActivePage}
                    />
                  );
                })}
              </div>
            );
          }}
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

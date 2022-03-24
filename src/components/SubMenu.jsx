import React, { useState } from "react";
import { Link } from "react-router-dom";

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <Link
        to={item.link}
        onClick={item.subNav && showSubnav}
        className={`${
          window.location.pathname === item.link ? "lg:bg-white" : ""
        } flex items-center text-xl lg:text-base  lg:h-14 font-semibold space-x-3 lg:space-x-2 pl-5 lg:pl-[35px]`}
      >
        <img
          src={item.image}
          alt={item.alt}
          className="object-contain w-5 lg:w-[16px]"
        />
        <p>{item.text}</p>
      </Link>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <Link
              key={index}
              to={item.link}
              className={`${
                window.location.pathname === item.link ? "lg:bg-white" : ""
              } flex lg:items-center text-xl lg:text-base  lg:h-14 font-semibold pl-[50px] lg:pl-[60px]`}
            >
              {item.text}
            </Link>
          );
        })}
    </>
  );
};

export default SubMenu;

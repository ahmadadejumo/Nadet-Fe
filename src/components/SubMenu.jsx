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
          window.location.pathname === item.link ? "bg-white" : ""
        } flex items-center text-base  h-14 font-semibold space-x-2 pl-[35px]`}
      >
        <img
          src={item.image}
          alt={item.alt}
          className="object-contain w-[16px]"
        />
        <p>{item.text}</p>
      </Link>
      {subnav &&
        item.subNav.map((item) => {
          return (
            <Link
              to={item.link}
              className={`${
                window.location.pathname === item.link ? "bg-white" : ""
              } flex items-center text-base  h-14 font-semibold pl-[60px]`}
            >
              {item.text}
            </Link>
          );
        })}
    </>
  );
};

export default SubMenu;

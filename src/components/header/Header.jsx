import React from "react";
import Navbar from "../navbar/Navbar";
import HeaderItem from "./HeaderItem";

const Header = () => {
  return (
    <div className="bg-hcolor h-full w-full">
      <Navbar />
      <HeaderItem />
    </div>
  );
};

export default Header;

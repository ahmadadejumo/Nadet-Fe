import React, { useState } from "react";
import Navbar from "../components/DashboardNavbar";
import Sidebar from "../components/Sidebar";

const Products = () => {
  const [open, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!open);
  };

  return (
    <div className="bg-[#EEEEF4]">
      <div className="flex">
        {!open && <Sidebar />}
        <div className="flex-[6]">
          <Navbar click={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default Products;

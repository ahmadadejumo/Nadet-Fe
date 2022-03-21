import { useState } from "react";

import Navbar from "../components/DashboardNavbar";
import Sidebar from "../components/Sidebar";
import DashboardHome from "./Home";

const Home = () => {
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
          <DashboardHome />
        </div>
      </div>
    </div>
  );
};

export default Home;

import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/DashboardNavbar";
import Sidebar from "../components/Sidebar";
import AddProducts from "./AddProducts";
import DigitalProducts from "./DigitalProducts";
import DashboardHome from "./Home";
import DashboardProucts from "./MyProducts";
import Tickets from "./Tickets";

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
          <Routes>
            <Route path="dashboard-home" element={<DashboardHome />} />
            <Route path="my-products" element={<DashboardProucts />} />
            <Route path="add-products" element={<AddProducts />} />
            <Route path="digital-products" element={<DigitalProducts />} />
            <Route path="tickets" element={<Tickets />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Home;

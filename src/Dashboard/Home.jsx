import { useState, useEffect } from "react";
import useAxios from "../hooks/useAxios";
import Navbar from "../components/DashboardNavbar";
import Sidebar from "../components/Sidebar";
import Add from "../assets/images/Add.svg";
import StatCard from "../components/StatCard";
import analysis from "../assets/images/analysis.svg";
import Receipt from "../assets/images/Receipt.svg";
import Users from "../assets/images/Users.svg";

const Home = () => {
  const [open, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!open);
  };

  const [user, setUser] = useState();
  const useAxiosPrivate = useAxios();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getUser = async () => {
      try {
        const response = await useAxiosPrivate.get("/auth/user/", {
          signal: controller.signal,
          withCredentials: false,
        });
        isMounted && setUser(response.data);
      } catch (err) {
        // console.error(err);
        // navigate("/signin", { state: { from: location }, replace: true });
      }
    };

    getUser();

    return () => {
      isMounted = false;
      controller.abort();
    };
  });

  return (
    <div className="bg-[#EEEEF4]">
      <div className="flex">
        {!open && <Sidebar />}

        <div className="flex-[6]">
          <Navbar click={handleClick} />
          <div className="font-Lato px-5">
            <h1
              key={user?.pk}
              className="text-center text-[25px] font-bold pt-[44px]"
            >
              Welcome back, {user?.username}!
            </h1>
            <p className="font-normal text-center text-base">
              What would you like to do today again?
            </p>
            <div className="flex justify-center pt-[24px]">
              <button className="flex justify-between text-base font-semibold items-center bg-bcolor w-[205px] h-[50px] rounded-lg px-7">
                <img src={Add} alt="addIcon" />
                ADD PRODUCTS
              </button>
            </div>
            <p className="text-lg font-bold pt-[44px]">Statistics</p>
            <div className="pt-[24px] grid gap-y-[16px]">
              <StatCard
                image={analysis}
                number="#2,670"
                textB="Earnings"
                text="this month"
                width={"32px"}
                height={"31px"}
              />
              <StatCard
                image={Receipt}
                number="20"
                textB="Sales"
                text="in total"
                width={"27px"}
                height={"36px"}
              />
              <StatCard
                image={Users}
                number="0"
                textB="Customers"
                text="in total"
                width={"44px"}
                height={"30px"}
              />
            </div>
            <p className="text-lg font-bold pt-[44px]">Earnings</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

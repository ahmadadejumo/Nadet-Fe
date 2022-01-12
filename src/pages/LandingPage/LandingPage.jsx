import React from "react";
import LpSection1 from "./LP-section1/LpSection1";
import LpSection2 from "./LP-section2/LpSection2";
import LpSection3 from "./LP-section3/LpSection3";
import LpSection5 from "./LP-section5/LpSection5";
import LpSection4 from "./LP-section4/LpSection4";
import LpSection6 from "./LP-section6/LpSection6";
import LpSection7 from "./LP-section7/LpSection7";
import LpSection8 from "./LP-section8/LpSection8";
import YellowCard from "../../components/YellowCard";
import LpSection10 from "./LP-section10/LpSection10";
import Footer from "../../components/Footer";

const LandingPage = () => {
  return (
    <div>
      <LpSection1 />
      <LpSection2 />
      <LpSection3 />
      <LpSection4 />
      <LpSection5 />
      <LpSection6 />
      <LpSection7 />
      <LpSection8 />
      <YellowCard />
      <LpSection10 />
      <Footer />
    </div>
  );
};

export default LandingPage;

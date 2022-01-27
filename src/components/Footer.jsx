/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Logo from "../assets/images/Logo.svg";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import visalogo from "../assets/images/VisaLogo.svg";
import paypal from "../assets/images/PayPal.svg";
import AmericanExpress from "../assets/images/AmericanExpress.svg";
import mclogo from "../assets/images/mclogo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#F5F4FD]">
      <div className="mx-5 md:mx-5 md:flex md:justify-between lg:justify-center lg:space-x-24">
        <div className="md:w-[250px] lg:w-[300px]">
          <img src={Logo} alt="Logo" className="pt-[60px]" />
          <p className="font-Lato text-base font-normal pt-[30px]">
            Our mission is to help you build a massive connection with your fans
            and followers and monetise them in one place.
          </p>
          <h1 className="font-Lato font-bold text-lg pt-[40px]">Contact Us</h1>
          <a
            href="#222"
            className="font-Lato font-normal  text-bcolor text-base pt-[15px]"
          >
            hello@nadet.co
          </a>
          <div className="space-x-5 mt-[15px]">
            <a href="#444">
              <FacebookIcon />
            </a>
            <a href="#444">
              <TwitterIcon />
            </a>
            <a href="#444">
              <LinkedInIcon />
            </a>
            <a href="#444">
              <InstagramIcon />
            </a>
          </div>
        </div>
        <div className="flex flex-col font-Lato text-base font-normal space-y-3 mt-[60px]">
          <h1 className="font-Lato text-lg font-bold">Sell with Nadet </h1>
          <a href="#">Courses & Memberships</a>
          <a href="#">Ebooks & Programs</a>
          <a href="#">LIVE Sessions</a>
          <a href="#">Event Tickets </a>
          <a href="#">Subscriptions & Services</a>
          <Link to={"/affiliates"}>Affiliate Program</Link>
          <Link to={"/refer"}>Refer a friend</Link>
        </div>
        <div className="mt-[60px] md:mt-[35px] flex justify-between lg:space-x-16">
          <div className="flex flex-col font-Lato text-base font-normal space-y-3 mt-[25px] md:hidden lg:flex">
            <h1 className="font-Lato text-lg font-bold">Company</h1>
            <Link to={"/about"}>About Us</Link>
            <Link to={"/company-values"}>Company Values</Link>
            <a href="#">Careers</a>
            <a href="#">Pricing</a>
            <a href="#">FAQs</a>
            <Link to={"/events"}>Events</Link>
          </div>

          <div className="lg:flex lg:flex-col">
            <div className="flex flex-col font-Lato text-base font-normal space-y-3 mt-[25px]">
              <h1 className="font-Lato text-lg font-bold">Legal</h1>
              <Link to={"/terms-&-condition"}>Terms of Services</Link>
              <Link to={"/privacy-policy"}>Privacy Policy</Link>
              <Link to={""}>Affiliate Agreement</Link>
            </div>
            <div className="flex flex-col font-Lato text-base font-normal space-y-3 mt-[30px] ">
              <h1 className="font-Lato text-lg font-bold">Learn</h1>
              <a href="#">Blog</a>
              <a href="#">Guides</a>
            </div>
          </div>
        </div>
      </div>
      <hr className="bg-bcolor border-[1px] mt-[70px] mx-5 md:mx-[30px] lg:mx-[140px]" />
      <div className="md:flex md:justify-between md:mx-[30px] lg:mx-[140px]">
        <p className="font-Lato font-normal text-base text-center pt-[20px] pb-[30px] md:pt-[25px]">
          © 2021 Nadet. All Rights Reserved.
        </p>
        <div className="flex justify-center space-x-3 md:space-x-5 pb-[35px] md:pt-[25px]">
          <img src={visalogo} alt="logo" />
          <img src={paypal} alt="logo" />
          <img src={AmericanExpress} alt="logo" />
          <img src={mclogo} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Footer;

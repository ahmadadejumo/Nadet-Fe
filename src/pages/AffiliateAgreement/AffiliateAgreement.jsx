import React from "react";

const AffiliateAgreement = () => {
  return (
    <div className="font-Lato">
      {/* Header section */}
      <div className="bg-[#FFF8E8] px-5 pt-[129px] pb-[33px]">
        <h1 className="font-extrabold text-[28px] md:text-3xl lg:text-4xl text-center">
          Nadet Academy Affiliate Program Terms of Service
        </h1>
      </div>
      {/* Body section */}
      <div className="pt-[80px] px-5">
        <h1 className="text-2xl font-bold">Agreement :</h1>
        <p className="pt-5 text-base font-normal text-tcolor">
          By signing up to be an Affiliate in the Nadet Academy Affiliate
          Program (“Program”) you are agreeing to be bound by the following
          Terms and Conditions (“Terms of Service”).
          <br />
          <br />
          Nadet Academy reserves the right to update and change the Terms of
          Service from time to time with or without notice. Any new features
          that augment or enhance the current Program, including the release of
          new tools and resources, shall be subject to the Terms of Service.
          Continued use of the Program after any such changes shall constitute
          your consent to such changes.
          <br />
          <br />
          Violation of any of the terms below will result in the termination of
          your Account and forfeiture of any outstanding affiliate commission
          payments earned during the violation.
          <br />
          <br />
          <span className="font-bold text-black">Note:</span> You agree to use
          the Affiliate Program at your own risk.
        </p>
      </div>
    </div>
  );
};

export default AffiliateAgreement;

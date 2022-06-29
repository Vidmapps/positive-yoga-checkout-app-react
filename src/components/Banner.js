import React from "react";

import PriceTag from "../assets/PriceTag.svg";

const Banner = () => {
  return (
    <div className="bannerStyling d-flex justify-content-center">
      <img className="priceTagStyling" src={PriceTag} alt="Price tag"></img>
      <div className="align-self-center">
        50% discount only valid for 00:15:49
      </div>
    </div>
  );
};

export default Banner;

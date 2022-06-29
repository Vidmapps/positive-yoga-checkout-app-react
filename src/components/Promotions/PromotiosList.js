import React from "react";
import Promotion from "./Promotion";
import { PromotionsInfo } from "../../data";

import AppScreen from "../../assets/AppScreen.png";
import Accent from "../../assets/Accent.svg";

const PromotionsList = () => {
  return (
    <div className="row pt-4 pb-4">
      <div className="col-md pt-2 orderSecond">
        <h4>Is Positive Yoga right for me?</h4>
        <ul>
          {PromotionsInfo.map((promo) => (
            <Promotion content={promo.content} />
          ))}
        </ul>
      </div>
      <div className="col-md pt-2 orderFirst ">
        <img
          className="position-absolute leaveBack"
          src={Accent}
          alt="Accent"
        />
        <h4>Start your yoga journey now!</h4>
        <img
          src={AppScreen}
          pt-5
          alt="App screen 1"
          className="leaveFront"
        ></img>
      </div>
    </div>
  );
};

export default PromotionsList;

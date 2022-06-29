import React from "react";
import Check from "../../assets/Check.svg";
import Off from "../../assets/Off.svg";
import Discount from "../../assets/Discount.svg";

const PlanCard = (props) => {
  return (
    <div
      className={`planCardBorder ${props.isMarked === props.id && "marked"}`}
      onClick={() => props.markPlan(props.id)}
    >
      <div>
        <div className="d-flex">
          <strong className="p-1 font-weight-bold">{props.period}</strong>
          {props.discount && <img src={Discount} alt="Discount"></img>}
        </div>
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <h2 className="font-weight-bold p-1">{props.price}</h2>
            <div className="pt-2"> / month</div>
          </div>
          {props.isMarked === props.id ? (
            <img className="pb-2" src={Check} alt="Checked"></img>
          ) : (
            <img className="pb-2" src={Off} alt="Unchecked"></img>
          )}
        </div>
        <div className="whiteSpacePreWrap pricingRules">
          <div className="d-flex">
            <del>{props.priceBefore}</del>
            <div className="primaryColor"> {props.priceAfter}</div>
          </div>
          <div> {props.billing}</div>
        </div>
      </div>
    </div>
  );
};

export default PlanCard;

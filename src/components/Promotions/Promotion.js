import React from "react";
import CheckGreen from "../../assets/CheckGreen.svg";

const Promotion = (props) => {
  return (
    <li className="d-flex">
      <img className="pb-2 checkedPlan p-1" src={CheckGreen} alt="Check" />
      <div className="opacityLow p-1">{props.content}</div>
    </li>
  );
};

export default Promotion;

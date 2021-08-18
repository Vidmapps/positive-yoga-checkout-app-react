import { useState } from "react";
import Check from "../assets/Check.svg";
import Off from "../assets/Off.svg";

const PlanCard = (props) => {
  const [isActive, setActive] = useState(false);
  const markedPlan = () => {
    setActive(!isActive);
  };
  return (
    <div>
      <li
        className={isActive ? "planContainerActive" : "planContainer"}
        onClick={markedPlan}
      >
        <div className="d-flex">
          <strong className="p-1 font-weight-bold">{props.period}</strong>
          {props.discount.length > 0 ? (
            <img
              src={require(`../assets/${props.discount}.svg`).default}
              alt={props.discount}
            ></img>
          ) : null}
        </div>
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <h2 className="font-weight-bold p-1">{props.price}</h2>
            <div className="pt-2"> / month</div>
          </div>
          {isActive ? (
            <img className="pb-2" src={Check} alt="Check"></img>
          ) : (
            <img className="pb-2" src={Off} alt="Off"></img>
          )}
        </div>
        <div className="d-flex whiteSpacePreWrap">
          <del>{props.priceBefore}</del>
          <div class="primaryColor"> {props.priceAfter}</div>
          <div> {props.billing}</div>
        </div>
      </li>
    </div>
  );
};

export default PlanCard;

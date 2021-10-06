import { useState } from "react";
import Check from "../../assets/Check.svg";
import Off from "../../assets/Off.svg";

const PlanCard = (props, { planSelected }) => {
  //const [isActive, setActive] = useState(false);
  const [isSelected, setSelected] = useState(!props.id);
  const markPlan = (isSelected) => {
    setSelected(isSelected);
    planSelected = props.value;
    //setActive(!isActive);
    console.log(planSelected + " child");
  };

  return (
    <div for={props.id}>
      <input
        type="radio"
        id={props.id}
        name={props.name}
        value={props.value}
        checked={isSelected === props.id}
        onChange={markPlan}
      />
      <label for={props.id}>
        <div onChange={markPlan}>
          <div className="d-flex">
            <strong className="p-1 font-weight-bold">{props.period}</strong>
            {props.discount.length > 0 ? (
              <img
                src={require(`../../assets/${props.discount}.svg`).default}
                alt={props.discount}
              ></img>
            ) : null}
          </div>
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <h2 className="font-weight-bold p-1">{props.price}</h2>
              <div className="pt-2"> / month</div>
            </div>
            { (isSelected === props.id) ? (
              <img className="pb-2" src={Check} alt="Checked"></img>
            ) : (
              <img className="pb-2" src={Off} alt="Unchecked"></img>
            )}
          </div>
          <div className="d-flex whiteSpacePreWrap">
            <del>{props.priceBefore}</del>
            <div class="primaryColor"> {props.priceAfter}</div>
            <div> {props.billing}</div>
          </div>
        </div>
      </label>
    </div>
  );
};

export default PlanCard;

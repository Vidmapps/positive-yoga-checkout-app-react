import React from "react";
import PlanCard from "./PlanCard";

const PlansList = (props) => {
  return (
    <ul className="plan-list">
      <PlanCard
        name="6MonthPlan"
        id="6MonthPlan"
        period="6 month plan"
        price="$9.99"
        priceBefore="$119.94"
        priceAfter="$59.94"
        billing="billed every 6 months"
        discount="Discount"
        markPlan={props.markPlan}
        isMarked={props.isMarked}
      />
      <PlanCard
        name="3MonthPlan"
        id="3MonthPlan"
        period="3 month plan"
        price="$14.99"
        priceBefore="$59.97"
        priceAfter="$44.97"
        billing="billed every 3 months"
        markPlan={props.markPlan}
        isMarked={props.isMarked}
      />
      <PlanCard
        name="1MonthPlan"
        id="1MonthPlan"
        period="1 month plan"
        price="$19.99"
        billing="Billed monthly"
        markPlan={props.markPlan}
        isMarked={props.isMarked}
      />
    </ul>
  );
};

export default PlansList;

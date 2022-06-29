import React, { useState } from "react";
import SafeCheckout from "../../assets/SafeCheckout.svg";
import Button from "../UI/Button";
import InPlan from "./InPlan";
import PlansList from "./PlansList";

const Plans = () => {
  const [isMarked, setIsMarked] = useState("6MonthPlan");
  const markPlanHandler = (planId) => setIsMarked((prev) => (prev = planId));
  return (
    <div className="row">
      <div className="col-md pt-4">
        <h4 className="p-2">
          Choose your plan and get
          <span className="primaryColor"> 7 days free trial</span>
        </h4>
        <PlansList isMarked={isMarked} markPlan={markPlanHandler} />
        <Button className="w-100">Get your plan</Button>
        <p className="text-center secondaryTextSize">
          Your free trial will automatically become a paid subscription on the
          8th day after you begin your trial. To cancel your subscription,
          please contact us at least 24 hours before the end of the trial
          period.
        </p>
        <p className="text-center secondaryTextSize">
          By choosing a payment method you agree to the <a href="url">T&Cs</a>{" "}
          and <a href="url">Privacy Policy</a>
        </p>
        <img
          className="pb-2 safeCheckout"
          src={SafeCheckout}
          alt="Safe checkout"
        ></img>
      </div>
      <div className="col-md pt-4">
        <h4 className="p-2">What's in my program?</h4>
        <InPlan />
      </div>
    </div>
  );
};

export default Plans;

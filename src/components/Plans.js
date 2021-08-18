import SafeCheckout from "../assets/SafeCheckout.svg";
import Button from "./Button";
import PlanCard from "./PlanCard";
import ProgramContentCard from "./ProgramContentCard";

const Plans = () => {
  return (
    <div className="row">
      <div className="col-md pt-4">
        <h4 className="p-2">
          Choose your plan and get{" "}
          <span class="primaryColor">7 days free trial</span>
        </h4>
        <div className="plan-list">
          <ul>
            <PlanCard
              period="6 month plan"
              price="$9.99"
              priceBefore="$119.94"
              priceAfter="$59.94"
              billing="billed every 6 months"
              discount="Discount"
            />
            <PlanCard
              period="3 month plan"
              price="$14.99"
              priceBefore="$59.97"
              priceAfter="$44.97"
              billing="billed every 3 months"
              discount=""
            />
            <PlanCard
              period="1 month plan"
              price="$19.99"
              billing="Billed monthly"
              discount=""
            />
          </ul>
          <Button onClick={getPlan} className="w-100">
            Get your plan
          </Button>
        </div>
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
        <img className="pb-2" src={SafeCheckout} alt="SafeCheckout"></img>
      </div>
      <div className="col-md pt-4">
        <h4 className="p-2">What's in my program?</h4>
        <ul>
          <ProgramContentCard
            title="A personalized yoga program"
            content="Completely safe and focused on your key goals"
            icon="APersonalizedYogaProgram"
          />
          <ProgramContentCard
            title="Easy & enjoyable yoga workouts for your level"
            content="Program adjusts to your level and pace"
            icon="Exercise"
          />
          <ProgramContentCard
            title="No special preparation needed"
            content="Perfect for begginners! Requires no special preparation or equipment"
            icon="Shoe"
          />
          <ProgramContentCard
            title="Daily motivation & accountability"
            content="Track your progress, develop a healthy routine, reach goals faster"
            icon="Diet"
          />
          <ProgramContentCard
            title="Browse from various yoga challenges"
            content="30 d morning yoga, mindful yoga, back flexibility challenge, and more!"
            icon="Whistle"
          />
          <ProgramContentCard
            title="Easy access on any device"
            content="Do your yoga anywhere across all types of devices"
            icon="Smartwatch"
          />
          <ProgramContentCard
            title="A complete guide to get started"
            content="Best tips, guidelines, advice, and recommendations for successful practice"
            icon="Bookcheck"
          />
        </ul>
      </div>
    </div>
  );
};

function getPlan() {
  alert("Your selection is confirmed!");
}

export default Plans;

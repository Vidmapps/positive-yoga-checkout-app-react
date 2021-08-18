import AppScreen1 from "../assets/AppScreen1.svg";
//Was using .svg in this project since it is more flexible to use, but it seems for rendering .png works way better - lesson learned.
import AppScreen2 from "../assets/AppScreen2.png"; 
import CheckGreen from "../assets/CheckGreen.svg";
import Accent from "../assets/Accent.svg";

const Promotion = () => {
  return (
    <div>
      <div className="row pt-4 pb-4">
        <div className="col-md pt-2 orderSecond">
          <h4>Is Positive Yoga right for me?</h4>
          <ul>
            <li className="d-flex">
              <img
                className="pb-2 checkedPlan p-1"
                src={CheckGreen}
                alt="Check"
              ></img>
              <div className="opacityLow p-1">
                Each program adapts to your age or fitness level
              </div>
            </li>
            <li className="d-flex">
              <img
                className="pb-2 checkedPlan p-1"
                src={CheckGreen}
                alt="Check"
              ></img>
              <div className="opacityLow p-1">
                Mindful way to exercise and get real results
              </div>
            </li>
            <li className="d-flex">
              <img
                className="pb-2 checkedPlan p-1"
                src={CheckGreen}
                alt="Check"
              ></img>
              <div className="opacityLow p-1">
                Effective and long-term lasting results
              </div>
            </li>
            <li className="d-flex">
              <img
                className="pb-2 checkedPlan p-1"
                src={CheckGreen}
                alt="Check"
              ></img>
              <div className="opacityLow p-1">
                Suited activities that benefit both the mind and body
              </div>
            </li>
            <li className="d-flex">
              <img
                className="pb-2 checkedPlan p-1"
                src={CheckGreen}
                alt="Check"
              ></img>
              <div className="opacityLow p-1">
                Low-intensity but highly-effective workouts
              </div>
            </li>
            <li className="d-flex">
              <img
                className="pb-2 checkedPlan p-1"
                src={CheckGreen}
                alt="Check"
              ></img>
              <div className="opacityLow p-1">
                Extra attention to muscle, joint and back health
              </div>
            </li>
          </ul>
        </div>
        <div className="col-md pt-2 orderFirst ">
          <img className="position-absolute leaveBack" src={Accent} alt="Accent"></img>
          <h4>Start your yoga journey now!</h4>
          <img src={AppScreen1} alt="AppScreen1" className="leaveFront"></img>
          <img className="pt-5 leaveFront" src={AppScreen2} alt="AppScreen2"></img>
        </div>
      </div>
    </div>
  );
};

export default Promotion;

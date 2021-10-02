import Header from "./components/Header";
import Banner from "./components/Banner";
import Plans from "./components/Plans";
import SuccessStories from "./components/SuccessStories";
import Button from "./components/Button";
import Promotion from "./components/Promotion";
import FAQ from "./components/FAQ";
//I have used bootsrtap to save some time on syling, since I wasn't sure how it would go for me using React for the first time.
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";

function App() {
  return (
    <div>
      <Banner/>
      <Header/>
      <div className="container">
        <Plans/>
        <SuccessStories/>
        <div className="d-flex justify-content-center">
          <Button onClick={getPlan} className="cardWidth">
            Get my plan
          </Button>
        </div>
        <Promotion/>
        <FAQ/>
        <div className="d-flex justify-content-center">
          <Button onClick={getPlan} className="cardWidth">
            Get my plan
          </Button>
        </div>{" "}
        <Plans/>
      </div>
    </div>
  );
}

function getPlan() {
  alert("Your selection is confirmed!");
}

export default App;

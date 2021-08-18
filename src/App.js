import Header from "./components/Header";
import Banner from "./components/Banner";
import Plans from "./components/Plans";
import SuccessStories from "./components/SuccessStories";
import Button from "./components/Button";
import Promotion from "./components/Promotion";
import FAQ from "./components/FAQ";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';


function App() {
  return (
    <div>
      <Banner></Banner>
      <Header></Header>
      <div className="container">
        <Plans></Plans>
        <SuccessStories></SuccessStories>
        <div className="d-flex justify-content-center">
          <Button onClick={getPlan} className="cardWidth">Get my plan</Button>
        </div>
        <Promotion></Promotion>
        <FAQ></FAQ>
        <div className="d-flex justify-content-center">
          <Button onClick={getPlan} className="cardWidth">Get my plan</Button>
        </div>        <Plans></Plans>
      </div>
    </div>
  );
}

function getPlan() {
  alert('Your selection is confirmed!')
}

export default App;


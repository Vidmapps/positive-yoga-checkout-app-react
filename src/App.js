import React, { Fragment } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Plans from "./components/Plans/Plans";
import SuccessStories from "./components/SuccessStories/SuccessStories";
import Button from "./components/UI/Button";
import PromotionsList from "./components/Promotions/PromotiosList";
import FAQ from "./components/FAQ/FAQ";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Fragment>
      <Banner />
      <Header />
      <div className="container">
        <Plans />
        <SuccessStories />
        <div className="d-flex justify-content-center">
          <Button className="cardWidth">Get my plan</Button>
        </div>
        <PromotionsList />
        <FAQ />
        <div className="d-flex justify-content-center">
          <Button className="cardWidth">Get my plan</Button>
        </div>
        <Plans />
      </div>
      <Footer />
    </Fragment>
  );
};

export default App;

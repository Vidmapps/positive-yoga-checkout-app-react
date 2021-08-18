import PriceTag from "../assets/PriceTag.svg";

const Banner = () => {
  return (
    <div>
      <div style={bannerStyling} className="d-flex justify-content-center">
        <img style={priceTagStyling} src={PriceTag} alt="PriceTag"></img>
        <div className="align-self-center">
          50% discount only valid for 00:15:49
        </div>
      </div>
    </div>
  );
};

export default Banner;

const bannerStyling = {
  backgroundColor: "#90CAF9",
  height: "56px",
  color: "#fff",
  fontFamily: "SF Pro Text"
};

const priceTagStyling = {
  padding: "18px 18px 18px 0",
};

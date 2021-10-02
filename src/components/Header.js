import Logo from "../assets/Logo.svg";

const Header = () => {
  return (
    <div>
      <div style={headerStyling} className="d-flex justify-content-center">
        <img src={Logo} alt="Logo"></img>
      </div>
      <div>
        <div className="justify-content-center d-flex whiteSpacePreWrap pt-4">
          Over<span> 52 147 </span>plans ordered.
        </div>
        <h1 className="text-center p-1">
          Get access to your yoga program now!
        </h1>
      </div>
    </div>
  );
};

const headerStyling = {
  backgroundColor: "#FFFFFF",
  height: "72px",
  boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.04)", //Desktop only
};

export default Header;


import React, { Fragment } from "react";

import Logo from "../assets/Logo.svg";

const Header = () => {
  return (
    <Fragment>
      <div className="headerStyling d-flex justify-content-center">
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
    </Fragment>
  );
};

export default Header;

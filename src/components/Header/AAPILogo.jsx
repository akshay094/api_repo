import React from "react";
import logo from "../../assets/images/aapi-logo.png";

const AAPILogo = ({ height, width }) => {
  return <img src={logo} width={width} height={height} alt="Logo" />;
};

export default AAPILogo;

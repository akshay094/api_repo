import React from "react";
import AAPILogo from "./AAPILogo";
import HeaderMenuButton from "./HeaderMenuButton";
import { styled } from "@mui/system";



const Header = () => {
  return (
    <HeaderWrapper>
      <div style={{ display: "flex", alignItems: "center" }}>
        <AAPILogo height={50} width={70} />
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <HeaderMenuButton />
      </div>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingLeft: 20,
  paddingRight: 20,
  backgroundColor: "darkblue",
});

export default Header;

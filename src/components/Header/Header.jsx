import React from "react";
import AAPILogo from "./AAPILogo";
import HeaderMenuButton from "./HeaderMenuButton";
import { styled } from "@mui/system";

const Header = () => {
  return (
    <HeaderWrapper>
      <WrapItems>
        <AAPILogo height={50} width={70} />
      </WrapItems>
      <WrapItems>
        <HeaderMenuButton />
      </WrapItems>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingTop: 2,
  paddingLeft: 20,
  paddingRight: 20,
  backgroundColor: "darkblue",
});

const WrapItems = styled("div")({});

export default Header;

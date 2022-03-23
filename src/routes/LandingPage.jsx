import React from "react";
import Header from "../components/Header/Header";
import Usermenu from "../components/PopupMenu/Usermenu";
import Footer from "../components/Footer/Footer";
import LandingPageMid from "../components/LandingPageMid/LandingPageMid";

const LandingPage = () => {
  return (
    <>
      <Header />
      <Usermenu />
      <LandingPageMid />
      <Footer />
    </>
  );
};

export default LandingPage;

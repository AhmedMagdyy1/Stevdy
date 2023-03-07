import React from "react";
import NavBar from "./../components/NavBar/NavBar";
import Home from "./../components/Home/Home";
import BootCamp from "./../components/BootCamp/BootCamp";
import PlatformTechnology from "./../components/PlatformTechnology/PlatformTechnology";
import PlatformOverview from "./../components/PlatformOverview/PlatformOverview";
import Platform from "./../components/Platform/Platform";
import BusinessProcess from "./../components/BusinessProcess/BusinessProcess";
import Testimonial from "./../components/Testimonial/Testimonial";
import Footer from "./../components/Footer/Footer";

export default function MasterLayout() {
  return (
    <>
      <NavBar />
      <Home />
      <BootCamp />
      <PlatformTechnology />
      <PlatformOverview />
      <Platform />
      <BusinessProcess />
      <Testimonial />
      <Footer />
    </>
  );
}

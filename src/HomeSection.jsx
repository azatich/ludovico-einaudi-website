import React from "react";
import Navbar from "./components/Navbar";
import HomePageImageSection from "./components/HomePageImageSection";
import AboutToursSection from "./AboutToursSection";

const HomeSection = () => {
  return (
    <div className="px-16 md:px-12 h-[100vh]">
      <Navbar />
      <HomePageImageSection />
      <AboutToursSection />
    </div>
  );
};

export default HomeSection;

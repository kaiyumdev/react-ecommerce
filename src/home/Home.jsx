import React from "react";
import Banner from "./Banner";
import HomeCategory from "./HomeCategory";
import CategoryShowCase from "./CategoryShowCase";
import Register from "./Register";
import LocationSprade from "./LocationSprade";
import AboutUs from "./AboutUs";
import AppSection from "./AppSection";
import Sponsor from "./Sponsor";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HomeCategory></HomeCategory>
      <CategoryShowCase></CategoryShowCase>
      <Register></Register>
      <LocationSprade></LocationSprade>
      <AboutUs></AboutUs>
      <AppSection></AppSection>
      <Sponsor></Sponsor>
    </div>
  );
};

export default Home;

import React from "react";
import Banner from "./Banner";
import HomeCategory from "./HomeCategory";
import CategoryShowCase from "./CategoryShowCase";
import Register from "./Register";
import LocationSprade from "./LocationSprade";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HomeCategory></HomeCategory>
      <CategoryShowCase></CategoryShowCase>
      <Register></Register>
      <LocationSprade></LocationSprade>
    </div>
  );
};

export default Home;

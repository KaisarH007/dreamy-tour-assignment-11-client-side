import React from "react";
import HomeBanner from "../HomeBanner/HomeBanner";
import Packeges from "../Packeges/Packeges";
import TourExperience from "../Packeges/TourExperience/TourExperience";
import Speciality from "../Specialtity/Speciality";

const Home = () => {
  return (
    <div>
      <HomeBanner></HomeBanner>
      <Packeges></Packeges>
      <TourExperience></TourExperience>
      <Speciality></Speciality>
    </div>
  );
};

export default Home;

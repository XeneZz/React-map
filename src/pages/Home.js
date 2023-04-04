import React from "react";
import Globe from "../components/Globe";
import Navigation from "../components/Navigation";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="bg">
      <Navigation />
      <Globe />
    </div>
  );
};

export default Home;

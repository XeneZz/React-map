import React, { useEffect, useRef } from "react";
import Navigation from "../components/Navigation";
import "../styles/Home.css";
import Globe from "../components/Globe";

const Home = () => {
  return (
    <div className="bg">
      <Navigation />
      <Globe />
    </div>
  );
};

export default Home;

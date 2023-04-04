import React, { useEffect, useState } from "react";
import Globe from "../components/Globe";
import Navigation from "../components/Navigation";
import "../styles/Home.css";

const Home = () => {
  const [availableHeight, setAvailableHeight] = useState(
    window.innerHeight - 100
  );
  const [availableWidth, setAvailableWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.onresize = event => {
      //console.log(1, window.innerHeight);
      setAvailableHeight(window.innerHeight - 100);
      setAvailableWidth(window.innerWidth);
    };
    return () => (window.onresize = null);
  }, []);

  return (
    <div className="bg">
      <Navigation />
      <Globe
        availableWidth={availableWidth}
        availableHeight={availableHeight}
      />
    </div>
  );
};

export default Home;

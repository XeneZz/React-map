import React from "react";
import Navigation from "./components/Navigation.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Map from "./pages/Map";
import Earth from "./pages/Earth";
import Flag from "./pages/Flag";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Map" element={<Map />} />
          <Route path="/Earth" element={<Earth />} />
          <Route path="/Flag" element={<Flag />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Earth from "./pages/Earth";
import Flag from "./pages/Flag";
import Home from "./pages/Home";
import Map from "./pages/Map";

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

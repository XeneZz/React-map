import React from "react";
import "../styles/Navigation.css";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <nav className="navBar">
        <ul className="flex">
          <NavLink to="/">
            <li>Home</li>
          </NavLink>

          <NavLink to="/Map">
            <li>Map</li>
          </NavLink>

          <NavLink to="/Earth">
            <li>Earth</li>
          </NavLink>

          <NavLink to="/Flag">
            <li>Flag</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;

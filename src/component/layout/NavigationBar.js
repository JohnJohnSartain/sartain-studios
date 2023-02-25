import React from "react";
import "./navigation-bar.css";
import { NavLink, Link } from "react-router-dom";
import colors from "../../colors";

const onMouseEnter = (event, color) => {
  const el = event.target;
  el.style.backgroundColor = color;
};

const onMouseOut = (event) => {
  const el = event.target;
  el.style.backgroundColor = "transparent";
};

const NavigationBar = () =>
  <div>
    <header className="header">
      <NavLink to={"/"} tag={Link} className="logo">
        <span style={{ color: colors.text }}> &lt;</span>
        <span className="logo-name" style={{ color: colors.text }}>
          Sartain Studios
        </span>
        <span style={{ color: colors.text }}>/&gt;</span>
      </NavLink>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="navicon"></span>
      </label>
      <ul className="menu" style={{ backgroundColor: colors.body }}>
        <li>
          <NavLink
            to="/"
            tag={Link}
            style={{ color: colors.text, fontWeight: "bold" }}
            onMouseEnter={(event) => onMouseEnter(event, colors.highlight)}
            onMouseOut={(event) => onMouseOut(event)}
          >
            About
          </NavLink>
        </li>
      </ul>
    </header>
  </div>

export default NavigationBar;
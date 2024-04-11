import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import { AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <AiOutlineMenu />
        </button>
      </div>
      <nav className="links">
        <li>
          <NavLink to="/"> Home </NavLink>
        </li>
        <li>
          <NavLink to="/about"> About </NavLink>
        </li>
        <li>
          <NavLink to="/services"> Services </NavLink>
        </li>
        <li>
          <NavLink to="/projects"> Projects </NavLink>
        </li>
        <li>
          <NavLink to="/contact"> Contact </NavLink>
        </li>
      </nav>
    </div>
  );
}

export default Navbar;

import React from "react";
import { FaGlobeAmericas } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="navbar">
      <FaGlobeAmericas className="globe" />
      <h1 className="journal">Travel Journal</h1>
    </nav>
  );
}

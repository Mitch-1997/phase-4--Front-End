import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div>
        <NavLink to="/signup" className="btn">
          <button class="btn">SignUp </button>
        </NavLink>
        <NavLink to="/">
          <button class="read">Home</button>
        </NavLink>
      </div>
      <h1>Welcome Home! Let's hear your reviews 💑</h1>
    </nav>
  );
}

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
  <>
    <header className="navbar">
      <Link to="/">Chat</Link>
      <Link to="/profile">Profile</Link>
    </header>
  </>
  )
}

export default Navbar;
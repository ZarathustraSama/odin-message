import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
  <>
    <header>
      <Link to="/">Chat</Link>
      <Link to="/profile">Profile</Link>
    </header>
  </>
  )
}

export default Navbar;
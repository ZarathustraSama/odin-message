import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <header>
    <Link to="/">Chat</Link>
    <Link to="/profile">Profile</Link>
    <Link to="/logout">Logout</Link>
  </header>
)
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <NavLink exact to="/" activeClassName="active">
        Home
      </NavLink>
      <NavLink exact to="/contact" activeClassName="active">
        Contact
      </NavLink>
      <NavLink exact to="/about" activeClassName="active">
        About
      </NavLink>
      <NavLink exact to="/search" activeClassName="active">
        Search
      </NavLink>
    </>
  );
};

export default Navbar;

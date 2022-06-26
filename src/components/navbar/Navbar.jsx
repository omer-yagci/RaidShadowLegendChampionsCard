import React from "react";
import classes from "../../scss/navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <a href="champions">CHAMPIONS</a>
      <a href="types">TYPES</a>
      <a href="faction">FACTION</a>
    </nav>
  );
};

export default Navbar;

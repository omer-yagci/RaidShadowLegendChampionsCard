import React from "react";
import classes from "../../scss/header.module.scss";

const Header = () => {
  return (
    <div className={classes.header}>
      <h2 className={classes.title}>Search Champion</h2>
    </div>
  );
};

export default Header;

import React from "react";
import classes from "../../scss/input.module.scss";

const Input = () => {
  return (
    <form className={classes["card-search"]}>
      <input type="text" className={classes["card-input"]} name="card-input" />
      <button className={classes["btn-search"]}>
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </form>
  );
};

export default Input;

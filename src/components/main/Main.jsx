import React, { useState } from "react";
import { data } from "../../util/data";
import classes from "../../scss/main.module.scss";
import styles from "../../scss/input.module.scss";

import Card from "../card/Card";

const Main = () => {
  const [hero, setHero] = useState("");

  const inputChangeHandler = (event) => {
    event.preventDefault();
    setHero(event.target.value);
  };
  return (
    <div>
      <form className={styles["card-search"]}>
        <input
          onChange={inputChangeHandler}
          type="text"
          className={styles["card-input"]}
          name="card-input"
        />
        <button className={styles["btn-search"]}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
      <div className={classes.container}>
        {data
          .filter((element) => {
            if (hero === "") {
              return element;
            } else if (
              element.Name.toLowerCase().includes(hero.toLowerCase())
            ) {
              return true;
            } else {
              return false;
            }
          })
          .map((item, index) => {
            const {
              Name,
              DEF,
              HP,
              Faction,
              RESIST,
              Rarity,
              SPD,
              ATK,
              ACC,
              Affinity,
              Role,
            } = item;

            const cDmg = item["C. DMG"];
            const cRate = item["C. RATE"];

            return (
              <Card
                key={index}
                name={Name}
                faction={Faction}
                rarity={Rarity}
                affinity={Affinity}
                role={Role}
                hp={HP}
                atk={ATK}
                def={DEF}
                spd={SPD}
                cRate={cRate}
                cDmg={cDmg}
                acc={ACC}
                resist={RESIST}
                // hero={hero}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Main;

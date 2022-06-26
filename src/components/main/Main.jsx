import React from "react";
import { data } from "../../util/data";
import classes from "../../scss/main.module.scss";
import Card from "../card/Card";

const Main = () => {
  // console.log(data);
  return (
    <div className={classes.container}>
      {data.map((item, index) => {
        // console.log(item);

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
          />
        );
      })}
    </div>
  );
};

export default Main;

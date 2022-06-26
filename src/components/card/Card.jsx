import React from "react";
import classes from "../../scss/card.module.scss";

const Card = ({
  name,
  faction,
  rarity,
  affinity,
  role,
  hp,
  atk,
  def,
  spd,
  cRate,
  cDmg,
  acc,
  resist,
}) => {
  return (
    <div className={classes.card}>
      <h1 className={classes.title}>{name}</h1>
      <h5>{`Faction: ${faction}`}</h5>
      <h3>{`Rarity: ${rarity}`}</h3>
      <h3>{`Affinity: ${affinity}`}</h3>
      <p>{`Role: ${role}`}</p>
      <p>{`HP: ${hp}`}</p>
      <p>{`ATK: ${atk}`}</p>
      <p>{`DEF: ${def}`}</p>
      <p>{`SPD: ${spd}`}</p>
      <p>{`C.Rate: ${cRate}`}</p>
      <p>{`C.Dmg: ${cDmg}`}</p>
      <p>{`Resist: ${resist}`}</p>
      <p>{`ACC: ${acc}`}</p>
    </div>
  );
};

export default Card;

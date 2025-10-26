import React from "react";

import { useGlobal } from "../GlobalContext";
import styles from "./CharacterTab.module.css";

export default function CharacterTab({ img, name, role }) {
  const { tank, setTank, dps, setDps, sup, setSup } = useGlobal();
  const isInGlobal = (name) => {
    if (role === "TANK") {
      if (tank.includes(name)) return true;
    } else if (role === "DPS") {
      if (dps.includes(name)) return true;
    } else if (role === "SUP") {
      if (sup.includes(name)) return true;
    }
    return false;
  };
  const recordResult = (name) => {
    if (role === "TANK") {
      if (!tank.includes(name)) {
        setTank((prev) => [...prev, name]);
      } else {
        setTank((prev) => prev.filter((i) => i !== name));
      }
    } else if (role === "DPS") {
      if (!dps.includes(name)) {
        setDps((prev) => [...prev, name]);
        console.log(dps);
      } else {
        setDps((prev) => prev.filter((i) => i !== name));
        console.log(dps);
      }
    } else if (role === "SUP") {
      if (!sup.includes(name)) {
        setSup((prev) => [...prev, name]);
      } else {
        setSup((prev) => prev.filter((i) => i !== name));
      }
    }
  };
  return (
    <div
      className={styles.container}
      onClick={() => {
        recordResult(name);
      }}
      style={isInGlobal(name) ? { border: "1px solid red" } : {}}
    >
      <img src={img} className={styles.img} draggable={false} />
      <p className={styles.name}>{name}</p>
    </div>
  );
}

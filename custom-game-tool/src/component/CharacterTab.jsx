import React from "react";

import { useGlobal } from "../GlobalContext";
import styles from "./CharacterTab.module.css";

export default function CharacterTab({ img, name, role }) {
  const { tank, setTank, dps, setDps, sup, setSup } = useGlobal();
  const isInGlobal = (name) => {
    if (role === "TANK" && tank?.includes(name)) return true;
    if (role === "DPS" && dps?.includes(name)) return true;
    if (role === "SUP" && sup?.includes(name)) return true;
    return false;
  };
  const recordResult = (name) => {
    if (role === "TANK") {
      setTank((prev = []) => {
        if (!prev.includes(name)) {
          return [...prev, name];
        } else {
          return prev.filter((i) => i !== name);
        }
      });
    } else if (role === "DPS") {
      setDps((prev = []) => {
        if (!prev.includes(name)) {
          return [...prev, name];
        } else {
          return prev.filter((i) => i !== name);
        }
      });
    } else if (role === "SUP") {
      setSup((prev = []) => {
        if (!prev.includes(name)) {
          return [...prev, name];
        } else {
          return prev.filter((i) => i !== name);
        }
      });
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
      <img src={img} className={styles.img} draggable={false} alt="" />
      <p className={styles.name}>{name}</p>
    </div>
  );
}

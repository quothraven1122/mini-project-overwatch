import React, { useState } from "react";

import styles from "./RandomScreen.module.css";
import { CharacterInfo } from "../data/characterInfo";

export default function RandomScreen() {
  const [result, setResult] = useState({ name: "", color: "", img: "" });
  const [role, setRole] = useState("");
  const [isAnimating, setIsAnimating] = useState([0, 0, 0]);
  const tank = JSON.parse(localStorage.getItem("tank"));
  const dps = JSON.parse(localStorage.getItem("dps"));
  const sup = JSON.parse(localStorage.getItem("sup"));

  const getRandomCharacter = (role, list) => {
    const name = list[Math.floor(Math.random() * list.length)];
    console.log(name);
    console.log(CharacterInfo["TANK"]); //correct, returns list of objects
    console.log(CharacterInfo[role]); //undefined
    console.log(CharacterInfo[`${role}`]); //undefined
    setResult(CharacterInfo[`${role}`].find((i) => i.name === name));
  };

  return (
    <div className={styles.randomScreen}>
      <div>
        <p className={styles.randomCubeName}>탱커</p>
        <div
          className={`${styles.randomCube} ${
            isAnimating[0] === 1 ? styles.animating : ""
          }`}
          onClick={() => {
            setIsAnimating([1, 0, 0]);
            setRole("TANK");
            getRandomCharacter("TANK", tank);
            setTimeout(() => {
              setIsAnimating([0, 0, 0]);
            }, 2000);
          }}
        >
          <p className={styles.randomText}>?</p>
        </div>
        <div className={styles.resultContainer}>
          <p
            style={{
              visibility: role === "TANK" ? "visible" : "hidden",
              color: `${result.color}`,
            }}
            className={`${styles.resultName} ${
              isAnimating[0] === 1 && styles.slideDown
            }`}
          >
            {"<"}
            {result.name}
            {">"}
          </p>
        </div>
      </div>
      <div>
        <p className={styles.randomCubeName}>딜러</p>
        <div
          className={`${styles.randomCube} ${
            isAnimating[1] === 1 ? styles.animating : ""
          }`}
          onClick={() => {
            setIsAnimating([0, 1, 0]);
            setRole("DPS");
            getRandomCharacter("DPS", dps);
            setTimeout(() => {
              setIsAnimating([0, 0, 0]);
            }, 2000);
          }}
        >
          <p className={styles.randomText}>?</p>
        </div>
        <div className={styles.resultContainer}>
          <p
            style={{
              visibility: role === "DPS" ? "visible" : "hidden",
              color: `${result.color}`,
            }}
            className={`${styles.resultName} ${
              isAnimating[1] === 1 && styles.slideDown
            }`}
          >
            {"<"}
            {result.name}
            {">"}
          </p>
        </div>
      </div>
      <div>
        <p className={styles.randomCubeName}>힐러</p>
        <div
          className={`${styles.randomCube} ${
            isAnimating[2] === 1 ? styles.animating : ""
          }`}
          onClick={() => {
            setIsAnimating([0, 0, 1]);
            setRole("SUP");
            getRandomCharacter("SUP", sup);
            setTimeout(() => {
              setIsAnimating([0, 0, 0]);
            }, 1500);
          }}
        >
          <p className={styles.randomText}>?</p>
        </div>
        <div className={styles.resultContainer}>
          <p
            style={{
              visibility: role === "SUP" ? "visible" : "hidden",
              color: `${result.color}`,
            }}
            className={`${styles.resultName} ${
              isAnimating[2] === 1 && styles.slideDown
            }`}
          >
            {"<"}
            {result.name}
            {">"}
          </p>
        </div>
      </div>
    </div>
  );
}

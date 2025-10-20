import React from "react";
import styles from "./StartScreen.module.css";

export default function StartScreen() {
  return (
    <div className={styles.screen}>
      <h2 className={styles.title}>집게벌레의 내전교실</h2>
      <button className={styles.button}>시작하기</button>
    </div>
  );
}

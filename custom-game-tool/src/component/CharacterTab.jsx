import React from "react";

import styles from "./CharacterTab.module.css";

export default function CharacterTab({ img, name }) {
  return (
    <div className={styles.container}>
      <img src={img} className={styles.img} />
      <p className={styles.name}>{name}</p>
    </div>
  );
}

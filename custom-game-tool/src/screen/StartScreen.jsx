import React from "react";
import styles from "./StartScreen.module.css";
import { useNavigate } from "react-router-dom";

export default function StartScreen() {
  const navigate = useNavigate();
  return (
    <div className={styles.screen}>
      <h2 className={styles.title}>집게벌레의 내전교실</h2>
      <button
        className={styles.button}
        onClick={() => {
          navigate("/select");
        }}
      >
        시작하기
      </button>
    </div>
  );
}

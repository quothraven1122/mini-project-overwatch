import React from "react";
import { useNavigate } from "react-router-dom";

import { useGlobal } from "../GlobalContext";
import RoleTab from "../component/RoleTab";
import styles from "./SelectScreen.module.css";

export default function SelectScreen() {
  const { tank, setTank, dps, setDps, sup, setSup } = useGlobal();
  const navigate = useNavigate();
  return (
    <div className={styles.selectScreen}>
      <div className={styles.selectContainer}>
        <RoleTab role={"TANK"} />
        <RoleTab role={"DPS"} />
        <RoleTab role={"SUP"} />
      </div>
      <div>
        <button
          className={styles.button}
          onClick={() => {
            setTank([]);
            setDps([]);
            setSup([]);
          }}
        >
          리셋하기
        </button>
        <button
          className={styles.button}
          onClick={() => {
            navigate("/");
          }}
        >
          시작하기
        </button>
      </div>
    </div>
  );
}

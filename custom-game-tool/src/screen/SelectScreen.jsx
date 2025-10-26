import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useGlobal } from "../GlobalContext";
import RoleTab from "../component/RoleTab";
import styles from "./SelectScreen.module.css";

export default function SelectScreen() {
  const { tank, setTank, dps, setDps, sup, setSup } = useGlobal();
  const navigate = useNavigate();
  useEffect(() => {
    const storedTank = JSON.parse(localStorage.getItem("tank"));
    const storedDps = JSON.parse(localStorage.getItem("dps"));
    const storedSup = JSON.parse(localStorage.getItem("sup"));
    setTank(storedTank);
    setDps(storedDps);
    setSup(storedSup);
  }, []);
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
            localStorage.setItem("tank", JSON.stringify(tank));
            localStorage.setItem("dps", JSON.stringify(dps));
            localStorage.setItem("sup", JSON.stringify(sup));
            navigate("/random");
          }}
        >
          시작하기
        </button>
      </div>
    </div>
  );
}

import React from "react";

import RoleTab from "../component/RoleTab";
import styles from "./SelectScreen.module.css";

export default function SelectScreen() {
  return (
    <div className={styles.selectContainer}>
      <RoleTab role={"TANK"} />
      <RoleTab role={"DPS"} />
      <RoleTab role={"SUP"} />
    </div>
  );
}

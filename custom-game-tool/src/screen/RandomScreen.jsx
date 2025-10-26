import React from "react";

import styles from "./RandomScreen.module.css";

export default function RandomScreen() {
  const tank = JSON.parse(localStorage.getItem("tank"));
  const dps = JSON.parse(localStorage.getItem("dps"));
  const sup = JSON.parse(localStorage.getItem("sup"));

  return <div></div>;
}

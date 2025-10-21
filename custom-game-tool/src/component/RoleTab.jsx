import React from "react";

import { RoleInfo } from "../data/roleInfo";
import { CharacterInfo } from "../data/characterInfo";
import CharacterTab from "./CharacterTab";

export default function RoleTab({ role }) {
  return (
    <div style={{ width: `${RoleInfo[role].row * 7}%` }}>
      <p>{RoleInfo[role].koname}</p>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {CharacterInfo[role].map(({ name, img }, index) => (
          <CharacterTab key={index} img={img} name={name} />
        ))}
      </div>
    </div>
  );
}

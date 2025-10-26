import React, { createContext, useState, useContext } from "react";

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [tank, setTank] = useState([]);
  const [dps, setDps] = useState([]);
  const [sup, setSup] = useState([]);

  return (
    <GlobalContext.Provider value={{ tank, setTank, dps, setDps, sup, setSup }}>
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobal() {
  return useContext(GlobalContext);
}

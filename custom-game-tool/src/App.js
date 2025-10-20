import { BrowserRouter, Routes, Route } from "react-router-dom";

import { SelectScreen, StartScreen } from "./screen";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartScreen />} />
        <Route path="/select" element={<SelectScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

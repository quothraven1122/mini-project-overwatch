import { BrowserRouter, Routes, Route } from "react-router-dom";

import { SelectScreen, StartScreen, RandomScreen } from "./screen";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartScreen />} />
        <Route path="/select" element={<SelectScreen />} />
        <Route path="/random" element={<RandomScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

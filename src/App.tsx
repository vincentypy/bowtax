import React from "react";
import "./App.css";

import Navbar from "./components/molecules/Navbar";
import { BtxCalculator } from "./components/organisms/BtxCalculator/BtxCalculator";

function App() {
  return (
    <div className="App">
      <main>
        <BtxCalculator primary={true} label={"BtxCalculator"} />
      </main>
    </div>
  );
}

export default App;

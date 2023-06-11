import React from "react";
import "./App.css";

import Navbar from "./components/molecules/Navbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>

      <main>
        <h1 className="text-green-400">React + TypeScript + TailwindCSS</h1>
      </main>
    </div>
  );
}

export default App;

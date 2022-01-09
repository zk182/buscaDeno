import React from "react";
import Board from "./components/Board";
import "./App.css";

function App() {
  return (
    <div>
      <div className="heading">
        <h1>BuscaDeno</h1>
      </div>
      <div className="aligned">
        <Board />
      </div>
    </div>
  );
}

export default App;

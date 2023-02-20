import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import RandomNumber from "./features/random/RandomNumber";

function App() {
  return (
    <div className="App">
      <Counter />
      <RandomNumber />
    </div>
  );
}

export default App;

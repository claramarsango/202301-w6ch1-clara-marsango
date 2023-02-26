import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import RandomNumber from "./features/random/RandomNumber";
import Uuid from "./features/uuid/Uuid";

function App() {
  return (
    <div className="App">
      <Counter />
      <RandomNumber />
      <Uuid />
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "./App.css";

const App = () => {
  let time = new Date().toLocaleTimeString();

  const state = useState();
  const [getTime, setTime] = useState(time);

  const Time = () => {
    time = new Date().toLocaleTimeString();
    setTime(time);
  };

  return (
    <div className="App">
      <h1>{getTime}</h1>
      <button onClick={Time}>Get Time</button>
    </div>
  );
};

export default App;

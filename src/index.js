import React from "react";
import ReactDOM from "react-dom";
import BrigadeDetails from "./components/brigadeDetails";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>APP NAME</h1>
      <BrigadeDetails />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

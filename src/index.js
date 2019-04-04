import React from "react";
import ReactDOM from "react-dom";
import BrigadeDetails from "./components/brigadeDetails";
import Header from "./components/header";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Header />
      <BrigadeDetails />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

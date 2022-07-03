import React from "react";
import brands from "./data";
import Home from "./pages/Home";
import './styles/styles.css';

function App() {
  return (
    <div className="App">
      <Home brands={brands} />
    </div>
  );
}

export default App;

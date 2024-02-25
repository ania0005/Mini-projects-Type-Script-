import React from "react";
import "./App.css";
import Sandwich from "./components/Sandwich";
import Counter from "./components/Counter";
import CreateBook from "./components/CreateBook";
import Library from "./components/Library";

function App() {
  return (
    <>
      <div className="mySite">
        <Sandwich />
        <Counter />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="mySite2">
          <CreateBook />
          <Library />
        </div>
      </div>
    </>
  );
}
export default App;


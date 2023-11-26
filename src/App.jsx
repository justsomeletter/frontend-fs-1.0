import react, { useState } from "react";
import Home from "./components/Home";
import Result_prw from "./components/Result_prw";
import Result_edit from "./components/Result_edt";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Home />
      {/* <Modal />
      <Result_prw />
      <Result_edit /> */}
    </div>
  );
}

export default App;
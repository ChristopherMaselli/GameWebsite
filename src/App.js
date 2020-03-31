import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./Components/JSX/Login";
import LoginRegistration from "./Components/JSX/LoginRegistration";
import axios from "axios";

function App() {
  return (
    <div className="App">
      <LoginRegistration></LoginRegistration>
    </div>
  );
}

export default App;

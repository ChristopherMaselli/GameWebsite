import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useEffect } from "react";
import Login from "./Components/JSX/Login";
import LoginRegistration from "./Components/JSX/LoginRegistration";
import axios from "axios";

function App() {
  useEffect(() => {
    localStorage.getItem("Settings");
    if (!localStorage.getItem("Settings")) {
      console.log("No settings =(");
    } else {
      console.log("Initializing basic settings");
      console.log(localStorage.getItem("Settings"));
      //await axios.post("https://localhost:5001/api/Login", obj);
      //Send to Backend
      //Backend sends proper login auths
    }
  });

  return (
    <div className="App">
      <LoginRegistration></LoginRegistration>
    </div>
  );
}

export default App;

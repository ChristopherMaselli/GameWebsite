import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useEffect } from "react";
import Login from "./Components/JSX/Login";
import LoginRegistration from "./Components/JSX/LoginRegistration";
import UserProfile from "./Components/JSX/UserProfile";
import Menu from "./Components/JSX/Menu";
import Header from "./Components/JSX/Header";
import Footer from "./Components/JSX/Footer";
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
      <Header />
      <Menu />
      <LoginRegistration />
      <Footer />
    </div>
  );
}

export default App;

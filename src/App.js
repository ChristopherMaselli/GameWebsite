import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useEffect } from "react";
import Login from "./Components/JSX/Login";
import LoginRegistration from "./Components/JSX/LoginRegistration";
import UserProfile from "./Components/JSX/UserProfile";
import Menu from "./Components/JSX/Menu";
import Header from "./Components/JSX/Header";
import Footer from "./Components/JSX/Footer";
import Home from "./Components/JSX/Home";
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

  const AutoLogin = async () => {
    const Authenticated = localStorage.getItem("Settings");
    console.log(Authenticated);
  };

  return (
    <div className="App">
      <Header />
      <Menu />
      <div>{localStorage.getItem("Settings") ? <UserProfile /> : <Home />}</div>

      <Footer />
    </div>
  );
}

export default App;

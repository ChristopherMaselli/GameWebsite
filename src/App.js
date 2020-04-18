import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState, useEffect } from "react";
import Login from "./Components/JSX/Login";
import LoginRegistration from "./Components/JSX/LoginRegistration";
import UserProfile from "./Components/JSX/UserProfile";
import Menu from "./Components/JSX/Menu";
import Header from "./Components/JSX/Header";
import Footer from "./Components/JSX/Footer";
import Home from "./Components/JSX/Home";
import axios from "axios";

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <div>{localStorage.getItem("Settings") ? <Home /> : <UserProfile />}</div>

      <Footer />
    </div>
  );
}

export default App;

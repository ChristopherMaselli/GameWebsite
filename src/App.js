import React from "react";
import { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./Components/JSX/Login";
import UserProfile from "./Components/JSX/UserProfile";
import LoginRegistration from "./Components/JSX/LoginRegistration";
import HomePage from "./Components/JSX/HomePage";
import Menu from "./Components/JSX/Menu";
import Home from "./Components/JSX/Home";
import Header from "./Components/JSX/Header";
import Footer from "./Components/JSX/Footer";

function App() {
  const [loggedIn, setLoggedIn] = useState({
    loggedIn: false,
  });

  const handleLoggedIn = (value) => {
    setLoggedIn({
      loggedIn: value,
    });
  };

  return (
    <div className="App">
      <Header />
      <Menu
        loggedIn={loggedIn.loggedIn}
        onChangedLogin={(value) => handleLoggedIn(value)}
      />
      <div>
        <Switch>
          <Route
            path="/Login"
            exact
            component={() => (
              <LoginRegistration
                onChangedLogin={(value) => handleLoggedIn(value)}
              />
            )}
          />
          <Route
            path="/Registration"
            exact
            component={() => (
              <LoginRegistration
                onChangedLogin={(value) => handleLoggedIn(value)}
              />
            )}
          />
          <Route path="/User" exact component={UserProfile} />
          <Route path="/Home" exact component={Home} />
          <Route path="/" exact component={HomePage} />
          <Route path="" exact component={HomePage} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}
export default App;

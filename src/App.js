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
import Template from "./Components/JSX/Template";
import MyGames from "./Components/JSX/MyGames";
import CheckoutItem from "./Components/JSX/CheckoutItem";
import CheckoutSubscription from "./Components/JSX/CheckoutSubscription";
import AddCard from "./Components/JSX/AddCard";
import Mail from "./Components/JSX/Mail";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51H6FiIHb4Zd1savwTK0cOSwm1RBaGobjRt76rfTwqjV7aJWyPDGNHxLImthtHFm5moimlmo1dn4VNekOj4d1e4Tb00qb57rpap"
);

function App() {
  const [loggedIn, setLoggedIn] = useState({
    loggedIn: false,
  });

  const ELEMENTS_OPTIONS = {
    fonts: [
      {
        cssSrc: "https://fonts.googleapis.com/css?family=Roboto",
      },
    ],
  };

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
            path="/CheckoutItem"
            exact
            component={() => (
              <div>
                <Elements stripe={stripePromise}>
                  <CheckoutItem />
                </Elements>
              </div>
            )}
          />
          <Route
            path="/CheckoutSubscription"
            exact
            component={() => (
              <div>
                <Elements stripe={stripePromise}>
                  <CheckoutSubscription />
                </Elements>
              </div>
            )}
          />
          <Route
            path="/AddCard"
            exact
            component={() => (
              <div>
                <Elements stripe={stripePromise}>
                  <AddCard />
                </Elements>
              </div>
            )}
          />
          <Route
            path="/Mail"
            exact
            component={() => (
              <Mail onChangedLogin={(value) => handleLoggedIn(value)} />
            )}
          />
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
          <Route
            path="/"
            exact
            component={() => (
              //<HomePage onChangedLogin={(value) => handleLoggedIn(value)} />
              <MyGames onChangedLogin={(value) => handleLoggedIn(value)} />
            )}
          />
          <Route
            path=""
            exact
            component={() => (
              //<HomePage onChangedLogin={(value) => handleLoggedIn(value)} />
              <Template onChangedLogin={(value) => handleLoggedIn(value)} />
            )}
          />
          <Redirect to="/not-found" />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}
export default App;

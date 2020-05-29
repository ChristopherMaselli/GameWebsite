import React from "react";
import { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import axios from "axios";
import Home from "./Home";
import LoginRegistration from "./LoginRegistration";

export default function HomePage() {
  const [user, setUser] = useState({
    LoggedIn: false,
  });
  const fetchLoginInfo = async () => {
    var token = localStorage.getItem("Settings");
    if ((token = null)) {
      return;
    } else {
      var details = await axios.get("https://localhost:5001/api/Login/Token", {
        params: {
          token: token,
        },
      });
      if (details != null) {
        localStorage.setItem("LoggedIn", true);
      } else {
        localStorage.setItem("LoggedIn", false);
      }
      console.log(localStorage.getItem("LoggedIn"));
    }
  };

  useEffect(() => {
    fetchLoginInfo();
  });

  return (
    <div>
      {localStorage.getItem("LoggedIn") == true ? (
        <Route path="/Home" exact component={Home} />
      ) : (
        <Route path="/Login" exact component={LoginRegistration} />
      )}
    </div>
  );
}

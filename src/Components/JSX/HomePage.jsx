import React from "react";
import { useState, useEffect } from "react";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import { Button } from "react-bootstrap";
import axios from "axios";
import LoginRegistration from "./LoginRegistration";

export default function HomePage(props) {
  const [user, setUser] = useState({
    LoggedIn: false,
  });

  const fetchLoginInfo = async () => {
    /*
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
    */

    if (localStorage.getItem("LoggedIn")) {
      props.history.push("/Login");
    } else {
      props.history.push("/Home");
    }
  };
  useEffect(() => {
    fetchLoginInfo();
  });

  return <div></div>;
}

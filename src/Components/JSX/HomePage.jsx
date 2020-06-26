import React from "react";
import { useState, useEffect } from "react";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import { Button } from "react-bootstrap";
import axios from "axios";
import LoginRegistration from "./LoginRegistration";

const HomePage = (props) => {
  const handleCredentials = async () => {
    console.log("Hi");
    var token = localStorage.getItem("Settings");
    const obj = {
      token: token,
    };

    var details = await axios.post(
      "https://localhost:5001/api/Authentication/Authenticate",
      obj
    );

    if (details != null) {
      props.onChangedLogin(true);
      props.history.replace("/home");
    } else {
      props.onChangedLogin(false);
      props.history.replace("/Login");
    }
  };

  useEffect(() => {
    const handleCredentials = async () => {
      var token = localStorage.getItem("Settings");
      const obj = {
        token: token,
      };

      var details = await axios.post(
        "https://localhost:5001/api/Authentication/Authenticate",
        obj
      );

      if (details != null) {
        props.onChangedLogin(true);
        props.history.replace("/home");
      } else {
        props.onChangedLogin(false);
        props.history.replace("/Login");
      }
    };

    if (
      localStorage.getItem("Settings") != null &&
      localStorage.getItem("Settings") != ""
    ) {
      handleCredentials();
    } else {
      props.history.replace("/Login");
    }
  }, []);
  return <div></div>;
};
export default withRouter(HomePage);

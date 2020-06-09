import React from "react";
import { useState, useEffect } from "react";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import { Button } from "react-bootstrap";
import axios from "axios";
import LoginRegistration from "./LoginRegistration";

export default function HomePage(props) {
  const handleCredentials = async () => {
    var token = localStorage.get("Settings");
    var details = await axios.post(
      "https://localhost:5001/api/Authentication/Authenticate",
      token
    );

    if (details != null) {
      props.history.replace("/home");
    } else {
      props.history.replace("/Login");
    }
  };

  useEffect(() => {
    if (localStorage.get("Settings") != null) {
      handleCredentials();
    } else {
      props.history.replace("/Login");
    }
  });
  return <div></div>;
}

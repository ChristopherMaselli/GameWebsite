import React, { useState, useEffect } from "react";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import axios from "axios";
import LoginRegistration from "./LoginRegistration";
import { ListGroup, Form } from "react-bootstrap";
import { loadStripe } from "@stripe/stripe-js";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import "./../CSS/Checkout.css";

const CheckoutItem = (props) => {
  const [info, setInfo] = useState({
    loggedIn: false,
  });

  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  const cardStyle = {
    hidePostalCode: true,
    style: {
      base: {
        color: "#32325d",
        fontFamily: "Arial, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

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

  const handleSubmit = async () => {
    var token = localStorage.getItem("Settings");
    const obj = {
      token: token,
    };

    var json = JSON.stringify({
      tokenVar: obj,
      items: [
        { id: "1", Qty: "3" },
        { id: "2", Qty: "2" },
      ],
    });

    const objson = {
      json: json,
    };

    var response = await axios.post(
      "https://localhost:5001/api/Stripe/PurchaseItem",
      objson
    );

    console.log(response);

    const payload = await stripe
      .confirmCardPayment(response.data.client_secret)
      .then(function (result) {
        //Handle error proccessing
      });
  };

  /*
  if (payload.error) {
    setError(`Payment failed ${payload.error.message}`);
    setProcessing(false);
  } else {
    setError(null);
    setProcessing(false);
    setSucceeded(true);
  }
  */

  return (
    <div className="CheckoutWrapper">
      <button id="submit" onClick={handleSubmit}>
        <span id="button-text">Pay</span>
      </button>
    </div>
  );
};
export default withRouter(CheckoutItem);

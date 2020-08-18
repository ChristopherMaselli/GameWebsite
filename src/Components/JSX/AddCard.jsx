import React, { useState, useEffect } from "react";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import axios from "axios";
import LoginRegistration from "./LoginRegistration";
import { ListGroup, Form } from "react-bootstrap";
import { loadStripe } from "@stripe/stripe-js";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import "./../CSS/CardSectionStyles.css";

const AddCard = (props) => {
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

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    var token = localStorage.getItem("Settings");
    const obj = {
      token: token,
    };

    var ClientSecret = await axios.post(
      "https://localhost:5001/api/Stripe/RegisterCard",
      obj
    );

    const result = await stripe.confirmCardSetup(ClientSecret.data, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (result.error) {
      // Display result.error.message in your UI.
    } else {
      // The setup has succeeded. Display a success message and send
      // result.setupIntent.payment_method to your server to save the
      // card to a Customer
    }
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

  const handleChange = async (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="CheckoutWrapper">
      <form id="payment-form" onSubmit={handleSubmit}>
        <CardElement
          id="card-element"
          options={cardStyle}
          onChange={handleChange}
        />
        <button disabled={!stripe}>Save Card</button>
      </form>
    </div>
  );
};
export default withRouter(AddCard);

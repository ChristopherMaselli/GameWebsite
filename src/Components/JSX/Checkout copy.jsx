import React from "react";
import { useState, useEffect } from "react";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import { Button } from "react-bootstrap";
import axios from "axios";
import LoginRegistration from "./LoginRegistration";
import { ListGroup } from "react-bootstrap";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import "./../CSS/Checkout.css";

const Checkout = (props) => {
  const [info, setInfo] = useState({
    loggedIn: false,
  });

  const [chargeInfo, setChargeInfo] = useState({
    cardNumber: "4242424242424242",
    cardExpYear: 2021,
    cardExpMonth: 7,
    cardCvc: "123",
    stripeEmail: "Zoidy@Zoidy.com",
    amount: 100,
    product: "Rubber Ducky",
    quantity: "10",
    currency: "usd",
    source: "tok_mastercard",
    description: "",
  });

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

  useEffect(() => {}, []);

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }
  };

  const handlePurchase = async () => {
    const chargeInfo = {
      cardNumber: chargeInfo.cardNumber,
      cardExpYear: chargeInfo.cardExpYear,
      cardExpMonth: chargeInfo.cardExpMonth,
      cardCvc: chargeInfo.cardCvc,
      stripeEmail: chargeInfo.stripeEmail,
      amount: chargeInfo.amount,
      product: chargeInfo.product,
      quantity: chargeInfo.quantity,
      currency: chargeInfo.currency,
      source: chargeInfo.source,
      description: chargeInfo.description,
    };

    //var chargeJson = JSON.stringify(chargeInfo);

    var stripeResponse = await axios.post(
      "https://localhost:5001/api/Stripe/Purchase",
      chargeInfo
    );

    console.log(stripeResponse);
  };

  const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
      base: {
        iconColor: "#c4f0ff",
        color: "#fff",
        fontWeight: 500,
        fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
        fontSize: "16px",
        fontSmoothing: "antialiased",
        ":-webkit-autofill": { color: "#fce883" },
        "::placeholder": { color: "#87bbfd" },
      },
      invalid: {
        iconColor: "#ffc7ee",
        color: "#ffc7ee",
      },
    },
  };

  const CardField = ({ onChange }) => (
    <fieldset className="FormGroup">
      <div className="FormRow">
        <CardElement options={CARD_OPTIONS} onChange={onChange} />
      </div>
    </fieldset>
  );

  return (
    <div>
      <CardField></CardField>
    </div>
  );

  /*
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
      <button onClick={handlePurchase}>Pay</button>
    </div>
  );
  */
};
export default withRouter(Checkout);

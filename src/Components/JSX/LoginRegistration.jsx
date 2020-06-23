import React from "react";
import { Redirect } from "react-router-dom";
import { useState } from "react";
import "../CSS/LoginRegistration.css";
import { Button, Col, Form } from "react-bootstrap";
import axios from "axios";
import * as userService from "../../Services/userService";
import { withRouter } from "react-router-dom";

const LoginRegistration = (props) => {
  const [userInfo, setUserInfo] = useState({
    usernameReg: "",
    passwordReg: "",
    emailAddress: "",
    usernameEmailLogin: "",
    passwordLogin: "",
  });

  const [errorInfo, setErrorInfo] = useState({
    invalidLogin: false,
    invalidRegUsername: false,
    invalidRegEmail: false,
    invalidRegPassword: false,
    loginMessage: "",
    usernameRegMessage: "",
    emailRegMessage: "",
    passwordRegMessage: "",
  });

  const handleChange = (e) => {
    const tempUserInfo = { ...userInfo };
    const value = e.currentTarget.value;
    const name = e.currentTarget.name;
    tempUserInfo[name] = value;
    setUserInfo(tempUserInfo);
  };

  const handleLogin = async (loginInfo) => {
    const obj = {
      username: loginInfo.usernameEmailLogin,
      password: loginInfo.passwordLogin,
      emailAddress: loginInfo.usernameEmailLogin,
    };

    var token = await axios.post(
      "https://localhost:5001/api/Authentication/Login",
      obj
    );

    localStorage.setItem("Settings", token.data["token"]);
    if (
      localStorage.getItem("Settings") == token.data["token"] &&
      localStorage.getItem("Settings") != null &&
      localStorage.getItem("Settings") != ""
    ) {
      props.onChangedLogin(true);
      props.history.replace("/Home");
    } else {
      const tempErrorInfo = { ...errorInfo };
      tempErrorInfo["invalidLogin"] = true;
      tempErrorInfo["loginMessage"] = "Username or Password is Incorrect";
      setErrorInfo(tempErrorInfo);
      localStorage.removeItem("Settings");
    }
  };

  const handleRegister = async () => {
    /*
    if (emailVerify(userInfo.emailAddress) == false) {
      const tempErrorInfo = { ...errorInfo };
      tempErrorInfo["invalidRegUsername"] = true;
      tempErrorInfo["usernameRegMessage"] = "Please enter a valid Email";
      setErrorInfo(tempErrorInfo);
      return;
    }
    */

    const obj = {
      username: userInfo.usernameReg,
      password: userInfo.passwordReg,
      emailAddress: userInfo.emailAddress,
    };

    var response = await axios.post(
      "https://localhost:5001/api/Authentication/Registration",
      obj
    );

    //alert(response.data);

    if (response.data == "Username is Taken") {
      const tempErrorInfo = { ...errorInfo };
      tempErrorInfo["invalidRegUsername"] = true;
      tempErrorInfo["usernameRegMessage"] = "Username is Taken";
      setErrorInfo(tempErrorInfo);
      return;
    }

    if (response.data == "Email is Taken") {
      const tempErrorInfo = { ...errorInfo };
      tempErrorInfo["invalidRegEmail"] = true;
      tempErrorInfo["emailRegMessage"] = "Email is Taken";
      setErrorInfo(tempErrorInfo);
      return;
    }

    const tempUserInfo = { ...userInfo };
    const username = userInfo.usernameReg;
    const password = userInfo.passwordReg;
    tempUserInfo["usernameEmailLogin"] = username;
    tempUserInfo["passwordLogin"] = password;

    handleLogin(tempUserInfo);
  };

  const usernameRegRef = React.createRef();
  const passwordRegRef = React.createRef();
  const emailRef = React.createRef();
  const usernameEmailLoginRef = React.createRef();
  const passwordLoginRef = React.createRef();

  return (
    <div className="container">
      <header>
        <h1>Login and Registration Form</h1>
      </header>
      <section>
        <div id="container_demo">
          <a className="hiddenanchor" id="toregister"></a>
          <a className="hiddenanchor" id="tologin"></a>
          <div id="wrapper">
            <div id="login" className="animate form">
              <Form>
                <h1>Log in</h1>
                <Form.Group controlId="LoginUsername">
                  <Form.Label>Your email or username</Form.Label>
                  <Form.Control
                    as="input"
                    name="usernameEmailLogin"
                    required="required"
                    ref={usernameEmailLoginRef}
                    value={userInfo.usernameEmailLogin}
                    placeholder="myusername or mymail@mail.com"
                    onChange={(usernameEmailLoginRef) =>
                      handleChange(usernameEmailLoginRef)
                    }
                  />
                </Form.Group>
                <Form.Group controlId="LoginPassword">
                  <Form.Label className="youpasswd"> Your password </Form.Label>
                  <Form.Control
                    as="input"
                    name="passwordLogin"
                    required="required"
                    ref={passwordLoginRef}
                    value={userInfo.passwordLogin}
                    type="password"
                    placeholder="eg. X8df!90EO"
                    onChange={(passwordLoginRef) =>
                      handleChange(passwordLoginRef)
                    }
                  />
                </Form.Group>
                {errorInfo.invalidLogin == true && (
                  <div className="alert alert-danger">
                    {errorInfo.loginMessage}
                  </div>
                )}
                <Button variant="primary" onClick={() => handleLogin(userInfo)}>
                  Log in
                </Button>
                <p className="keeplogin">
                  <input
                    type="checkbox"
                    name="loginkeeping"
                    id="loginkeeping"
                    value="loginkeeping"
                  />
                  <label>Keep me logged in</label>
                </p>
                <p className="login button">
                  <a href="" target="_blank"></a>
                </p>
                <p className="change_link">
                  Not a member yet ?
                  <a href="#toregister" className="to_register">
                    Join us
                  </a>
                </p>
              </Form>
            </div>

            <div id="register" className="animate form">
              <Form>
                <h1> Sign up </h1>

                <Form.Group controlId="RegisterUsername">
                  <Form.Label className="uname">Your username</Form.Label>
                  <Form.Control
                    as="input"
                    name="usernameReg"
                    required="required"
                    ref={usernameRegRef}
                    value={userInfo.usernameReg}
                    placeholder="mysuperusername690"
                    onChange={(usernameRegRef) => handleChange(usernameRegRef)}
                  />
                </Form.Group>
                {errorInfo.invalidRegUsername == true && (
                  <div className="alert alert-danger">
                    {errorInfo.usernameRegMessage}
                  </div>
                )}
                <Form.Group controlId="RegisterEmail">
                  <Form.Label className="youmail"> Your email</Form.Label>
                  <Form.Control
                    as="input"
                    name="emailAddress"
                    required="required"
                    ref={emailRef}
                    placeholder="mysupermail@mail.com"
                    value={userInfo.emailAddress}
                    onChange={(emailRef) => handleChange(emailRef)}
                  />
                </Form.Group>
                {errorInfo.invalidRegEmail == true && (
                  <div className="alert alert-danger">
                    {errorInfo.emailRegMessage}
                  </div>
                )}
                <Form.Group controlId="RegisterPassword">
                  <Form.Label className="youpasswd">Your password </Form.Label>
                  <Form.Control
                    as="input"
                    name="passwordReg"
                    required="required"
                    ref={passwordRegRef}
                    value={userInfo.passwordReg}
                    type="password"
                    placeholder="eg. X8df!90EO"
                    onChange={(passwordRegRef) => handleChange(passwordRegRef)}
                  />
                </Form.Group>
                {errorInfo.invalidRegPassword == true && (
                  <div className="alert alert-danger">
                    {errorInfo.passwordRegMessage}
                  </div>
                )}
                <Button variant="primary" onClick={handleRegister}>
                  SignUp
                </Button>
                <p className="change_link">
                  Already a member ?
                  <a href="#tologin" className="to_register">
                    {" "}
                    Go and log in{" "}
                  </a>
                </p>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default withRouter(LoginRegistration);

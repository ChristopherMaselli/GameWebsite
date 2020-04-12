import React from "react";
import { useState } from "react";
import "../CSS/LoginRegistration.css";
import { Button, Col, Form } from "react-bootstrap";
import axios from "axios";
import * as userService from "../../Services/userService";

const LoginRegistration = (props) => {
  const [userInfo, setUserInfo] = useState({
    usernameReg: "",
    passwordReg: "",
    emailAddress: "",
    usernameLogin: "",
    passwordLogin: "",
  });

  const handleChange = (e) => {
    const tempUserInfo = { ...userInfo };
    //const value = e.currentTarget.value;
    const value = e.currentTarget.value;
    const name = e.currentTarget.name;
    //tempFormInfo[name] = value;
    tempUserInfo[name] = value;
    setUserInfo(tempUserInfo);
  };

  const handleLogin = async () => {
    const obj = {
      username: userInfo.usernameLogin,
      password: userInfo.passwordLogin,
    };

    var token = await axios.post("https://localhost:5001/api/Login", obj);
    localStorage.setItem("Settings", token.data["token"]);
  };

  const handleRegister = async () => {
    const obj = {
      username: userInfo.usernameReg,
      password: userInfo.passwordReg,
      emailAddress: userInfo.emailAddress,
    };

    await axios.post("https://localhost:5001/api/Registration", obj);
  };

  const handleSubmit = async (e) => {
    console.log(e.currentTarget.name);
    //userService.register(this.state.data);

    /*
    const obj = {
      user = username,
      password = password,
      email = email,
    }
    */

    //await axios.post("https://localhost:5001/api/UserModel/", obj);
  };

  const usernameRegRef = React.createRef();
  const passwordRegRef = React.createRef();
  const emailRef = React.createRef();
  const usernameLoginRef = React.createRef();
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
                    name="usernameLogin"
                    required="required"
                    ref={usernameLoginRef}
                    value={userInfo.usernameLogin}
                    placeholder="myusername or mymail@mail.com"
                    onChange={(usernameLoginRef) =>
                      handleChange(usernameLoginRef)
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
                    placeholder="eg. X8df!90EO"
                    onChange={(passwordLoginRef) =>
                      handleChange(passwordLoginRef)
                    }
                  />
                </Form.Group>
                <Button variant="primary" onClick={handleLogin}>
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
                  <a
                    href="http://cookingfoodsworld.blogspot.in/"
                    target="_blank"
                  ></a>
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

                <Form.Group controlId="RegisterPassword">
                  <Form.Label className="youpasswd">Your password </Form.Label>
                  <Form.Control
                    as="input"
                    name="passwordReg"
                    required="required"
                    ref={passwordRegRef}
                    value={userInfo.passwordReg}
                    placeholder="eg. X8df!90EO"
                    onChange={(passwordRegRef) => handleChange(passwordRegRef)}
                  />
                </Form.Group>

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

export default LoginRegistration;

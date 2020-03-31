import React from "react";
import { useState } from "react";
import "../CSS/LoginRegistration.css";
import { Button, Col, Form } from "react-bootstrap";
import Axios from "axios";
import * as userService from "../../Services/userService";

const LoginRegistration = props => {
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
    email: ""
  });

  const handleChange = e => {
    const tempUserInfo = { ...userInfo };
    //const value = e.currentTarget.value;
    const value = e.currentTarget.value;
    const name = e.currentTarget.name;
    //tempFormInfo[name] = value;
    tempUserInfo[name] = value;
    setUserInfo(tempUserInfo);
  };

  const handleSubmit = async e => {
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

  const usernameRef = React.createRef();
  const passwordRef = React.createRef();
  const emailRef = React.createRef();

  return (
    <div class="container">
      <header>
        <h1>Login and Registration Form</h1>
      </header>
      <section>
        <div id="container_demo">
          <a class="hiddenanchor" id="toregister"></a>
          <a class="hiddenanchor" id="tologin"></a>
          <div id="wrapper">
            <div id="login" class="animate form">
              <Form onSubmit={handleSubmit}>
                <h1>Log in</h1>
                <p>
                  <Form.Group controlId="LoginUsername">
                    <Form.Label>Your email or username</Form.Label>
                    <Form.Control
                      as="input"
                      name="username"
                      required="required"
                      ref={usernameRef}
                      value={userInfo.username}
                      placeholder="myusername or mymail@mail.com"
                      onChange={usernameRef => handleChange(usernameRef)}
                    />
                  </Form.Group>
                </p>
                <p>
                  <Form.Group controlId="LoginPassword">
                    <Form.Label for="password" class="youpasswd">
                      {" "}
                      Your password{" "}
                    </Form.Label>
                    <Form.Control
                      as="input"
                      name="password"
                      required="required"
                      ref={passwordRef}
                      value={userInfo.password}
                      placeholder="eg. X8df!90EO"
                      onChange={passwordRef => handleChange(passwordRef)}
                    />
                  </Form.Group>
                </p>
                <p class="keeplogin">
                  <input
                    type="checkbox"
                    name="loginkeeping"
                    id="loginkeeping"
                    value="loginkeeping"
                  />
                  <label for="loginkeeping">Keep me logged in</label>
                </p>
                <p class="login button">
                  <a
                    href="http://cookingfoodsworld.blogspot.in/"
                    target="_blank"
                  ></a>
                </p>
                <p class="change_link">
                  Not a member yet ?
                  <a href="#toregister" class="to_register">
                    Join us
                  </a>
                </p>
              </Form>
            </div>

            <div id="register" class="animate form">
              <Form onSubmit={handleSubmit}>
                <h1> Sign up </h1>
                <p>
                  <Form.Group controlId="RegisterUsername">
                    <Form.Label class="uname">Your username</Form.Label>
                    <Form.Control
                      as="input"
                      name="usernamesignup"
                      required="required"
                      ref={usernameRef}
                      value={userInfo.username}
                      placeholder="mysuperusername690"
                      onChange={usernameRef => handleChange(usernameRef)}
                    />
                  </Form.Group>
                </p>
                <p>
                  <Form.Group controlId="RegisterEmail">
                    <Form.Label class="youmail"> Your email</Form.Label>
                    <Form.Control
                      as="input"
                      name="emailsignup"
                      required="required"
                      ref={emailRef}
                      placeholder="mysupermail@mail.com"
                      value={userInfo.username}
                      onChange={emailRef => handleChange(emailRef)}
                    />
                  </Form.Group>
                </p>
                <p>
                  <Form.Group controlId="RegisterPassword">
                    <Form.Label class="youpasswd">Your password </Form.Label>
                    <Form.Control
                      as="input"
                      name="passwordsignup"
                      required="required"
                      ref={passwordRef}
                      placeholder="eg. X8df!90EO"
                      onChange={passwordRef => handleChange(passwordRef)}
                    />
                  </Form.Group>
                </p>
                <p class="signin button">
                  <input type="submit" value="Sign up" />
                </p>
                <p class="change_link">
                  Already a member ?
                  <a href="#tologin" class="to_register">
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

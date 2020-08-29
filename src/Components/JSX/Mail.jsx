import React from "react";
import { Redirect } from "react-router-dom";
import { useState } from "react";
import "../CSS/LoginRegistration.css";
import { Button, Col, Form } from "react-bootstrap";
import axios from "axios";
import * as userService from "../../Services/userService";
import { withRouter } from "react-router-dom";

const Mail = (props) => {
  const [userInfo, setUserInfo] = useState({
    toEmail: "",
    subject: "",
    body: "",
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
      from: "Theoriginalchris1@gmail.com",
      to: loginInfo.toEmail,
      subject: loginInfo.subject,
      body: loginInfo.body,
    };
    console.log(obj);
    var response = await axios.post(
      "https://localhost:5001/api/Mail/Send",
      obj
    );
    console.log(response);
  };

  const toEmailRef = React.createRef();
  const subjectRef = React.createRef();
  const bodyRef = React.createRef();

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
                    name="toEmail"
                    required="required"
                    ref={toEmailRef}
                    value={userInfo.toEmail}
                    placeholder="myusername or mymail@mail.com"
                    onChange={(toEmailRef) => handleChange(toEmailRef)}
                  />
                </Form.Group>
                <Form.Group controlId="LoginPassword">
                  <Form.Label className="youpasswd"> Your password </Form.Label>
                  <Form.Control
                    as="input"
                    name="subject"
                    required="required"
                    ref={subjectRef}
                    value={userInfo.subject}
                    placeholder="eg. X8df!90EO"
                    onChange={(subjectRef) => handleChange(subjectRef)}
                  />
                </Form.Group>
                <Form.Group controlId="LoginPassword">
                  <Form.Label className="youpasswd"> Your password </Form.Label>
                  <Form.Control
                    as="input"
                    name="body"
                    required="required"
                    ref={bodyRef}
                    value={userInfo.body}
                    placeholder="eg. X8df!90EO"
                    onChange={(bodyRef) => handleChange(bodyRef)}
                  />
                </Form.Group>
                <Button variant="primary" onClick={() => handleLogin(userInfo)}>
                  Log in
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </section>
      <object
        id="UnityObject"
        classid="clsid:444785F1-DE89-4295-863A-D46C3A781394"
        width="420"
        height="750"
        codebase="http://webplayer.unity3d.com/download_webplayer/UnityWebPlayer.cab#version=2,0,0,0"
      >
        <param name="unity3d" value="WebPlayer.unity3d" />
        <embed
          id="UnityEmbed"
          src="mlpbeta/mlpbeta.unity3d"
          width="420"
          height="750"
          type="application/vnd.unity"
          pluginspage="http://www.unity3d.com/unity-web-player-2.x"
        />
      </object>
    </div>
  );
};

export default withRouter(Mail);

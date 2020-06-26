import React from "react";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Button, Col, Form } from "react-bootstrap";
import axios from "axios";
import * as userService from "../../Services/userService";
import "./../CSS/Menu.css";
import { withRouter } from "react-router-dom";

const Menu = (props) => {
  const isLoggedIn = async () => {
    if (
      localStorage.getItem("Settings") != null &&
      localStorage.getItem("Settings") != ""
    ) {
      props.onChangedLogin(true);
    } else {
      props.onChangedLogin(false);
    }
  };

  const logOut = () => {
    localStorage.removeItem("Settings");
    props.onChangedLogin(false);
    props.history.replace("/Login");
  };

  const showToken = () => {
    alert(localStorage.getItem("Settings"));
  };

  //const alertMe = () => {
  //props.onChangedLogin(true);
  //alert(localStorage.getItem("Settings"));
  //};

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <Navbar className="Menu" collapseOnSelect expand="lg" bg="black">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className="MenuItem" href="#home">
            Home
          </Nav.Link>
          <Nav.Link className="MenuItem" href="#features">
            Features
          </Nav.Link>
          <Nav.Link className="MenuItem" href="#pricing">
            Pricing
          </Nav.Link>
          <NavDropdown
            className="MenuItem"
            title="Dropdown"
            id="collasible-nav-dropdown"
          >
            <NavDropdown.Item className="MenuItem" href="/User">
              Userpage
            </NavDropdown.Item>
            <NavDropdown.Item className="MenuItem" href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item className="MenuItem" href="#action/3.3">
              Something
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item className="MenuItem" href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link className="MenuItem" onClick={() => showToken()}>
            More deets
          </Nav.Link>
          <Nav className="MenuItem" eventKey={2}>
            {props.loggedIn == true ? (
              <NavDropdown
                className="MenuItem"
                title="Dropdown"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item className="MenuItem" href="/User">
                  User Profile
                </NavDropdown.Item>
                <NavDropdown.Item className="MenuItem" href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item className="MenuItem" href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="MenuItem" onClick={() => logOut()}>
                  Log Out
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Button href="/LoginRegistration">Login</Button>
            )}
          </Nav>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(Menu);
